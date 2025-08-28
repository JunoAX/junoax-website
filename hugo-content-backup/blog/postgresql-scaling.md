---
title: "Scaling PostgreSQL: From Startup to Enterprise"
date: 2024-07-25T13:30:00-05:00
draft: false
author: "Tom Anderson"
description: "Practical strategies for scaling PostgreSQL from handling thousands to millions of transactions."
image: "img/analytics-dashboard.svg"
tags: ["PostgreSQL", "Database", "Scaling", "Performance"]
---

PostgreSQL has evolved from a reliable open-source database to a powerhouse capable of handling enterprise-scale workloads. Here's how to scale PostgreSQL effectively as your business grows.

## The Scaling Journey

Most PostgreSQL deployments follow a predictable scaling path:

1. **Startup Phase** (< 1M rows, < 100 TPS): Single instance
2. **Growth Phase** (10M rows, 1K TPS): Read replicas
3. **Scale Phase** (100M rows, 10K TPS): Partitioning + caching
4. **Enterprise Phase** (1B+ rows, 100K+ TPS): Sharding + specialized architecture

## Phase 1: Optimizing Your Single Instance

Before scaling out, maximize single-instance performance.

### Critical Configuration Changes

```ini
# postgresql.conf optimizations for modern hardware

# Memory (for 32GB RAM server)
shared_buffers = 8GB
effective_cache_size = 24GB
maintenance_work_mem = 2GB
work_mem = 10MB

# Checkpoint Settings
checkpoint_completion_target = 0.9
wal_buffers = 16MB
checkpoint_segments = 32

# Connection Pool
max_connections = 200  # Use connection pooler instead

# Parallel Query Execution
max_parallel_workers_per_gather = 4
max_parallel_workers = 8
```

### Index Strategy

Create indexes strategically:

```sql
-- Don't just index foreign keys
CREATE INDEX CONCURRENTLY idx_orders_user_created 
ON orders(user_id, created_at DESC) 
WHERE status != 'cancelled';

-- Partial indexes for common queries
CREATE INDEX CONCURRENTLY idx_active_users 
ON users(email) 
WHERE deleted_at IS NULL;

-- Use BRIN for time-series data
CREATE INDEX idx_events_time_brin 
ON events USING BRIN(created_at);
```

### Query Optimization Checklist

- [ ] Run EXPLAIN ANALYZE on slow queries
- [ ] Check for missing indexes with pg_stat_user_tables
- [ ] Identify unused indexes with pg_stat_user_indexes
- [ ] Use pg_stat_statements to find problem queries
- [ ] Regular VACUUM and ANALYZE

## Phase 2: Read Scaling with Replicas

When read traffic overwhelms your primary, add read replicas.

### Streaming Replication Setup

```bash
# On primary
ALTER SYSTEM SET wal_level = replica;
ALTER SYSTEM SET max_wal_senders = 5;
ALTER SYSTEM SET wal_keep_segments = 64;
```

### Connection Routing

Use PgBouncer with routing rules:

```ini
[databases]
myapp_write = host=primary.db port=5432 dbname=myapp
myapp_read = host=replica1.db port=5432 dbname=myapp

[pgbouncer]
pool_mode = transaction
max_client_conn = 1000
default_pool_size = 25
```

### Application-Level Read/Write Split

```python
class DatabaseRouter:
    def __init__(self):
        self.write_conn = psycopg2.connect(WRITE_DSN)
        self.read_conn = psycopg2.connect(READ_DSN)
    
    def execute_read(self, query, params=None):
        with self.read_conn.cursor() as cur:
            cur.execute(query, params)
            return cur.fetchall()
    
    def execute_write(self, query, params=None):
        with self.write_conn.cursor() as cur:
            cur.execute(query, params)
            self.write_conn.commit()
```

## Phase 3: Partitioning for Large Tables

When tables exceed 100GB, partitioning becomes essential.

### Time-Based Partitioning

```sql
-- Create partitioned table
CREATE TABLE events (
    id BIGSERIAL,
    created_at TIMESTAMPTZ NOT NULL,
    data JSONB
) PARTITION BY RANGE (created_at);

-- Create monthly partitions
CREATE TABLE events_2024_01 PARTITION OF events
    FOR VALUES FROM ('2024-01-01') TO ('2024-02-01');

-- Automated partition creation
CREATE OR REPLACE FUNCTION create_monthly_partition()
RETURNS void AS $$
DECLARE
    start_date date;
    end_date date;
    partition_name text;
BEGIN
    start_date := date_trunc('month', CURRENT_DATE);
    end_date := start_date + interval '1 month';
    partition_name := 'events_' || to_char(start_date, 'YYYY_MM');
    
    EXECUTE format('CREATE TABLE IF NOT EXISTS %I PARTITION OF events
        FOR VALUES FROM (%L) TO (%L)',
        partition_name, start_date, end_date);
END;
$$ LANGUAGE plpgsql;
```

### Partition Maintenance

Automate partition management with pg_partman or custom scripts:

```sql
-- Drop old partitions
DO $$
DECLARE
    r record;
BEGIN
    FOR r IN 
        SELECT tablename 
        FROM pg_tables 
        WHERE tablename LIKE 'events_202%' 
        AND tablename < 'events_' || to_char(CURRENT_DATE - interval '6 months', 'YYYY_MM')
    LOOP
        EXECUTE 'DROP TABLE ' || r.tablename;
    END LOOP;
END $$;
```

## Phase 4: Caching Layer

Reduce database load with intelligent caching.

### Redis Integration

```python
import redis
import json
import psycopg2
from functools import wraps

redis_client = redis.Redis(host='localhost', port=6379, db=0)

def cache_query(expiration=3600):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            # Generate cache key
            cache_key = f"{func.__name__}:{str(args)}:{str(kwargs)}"
            
            # Check cache
            cached = redis_client.get(cache_key)
            if cached:
                return json.loads(cached)
            
            # Execute query
            result = func(*args, **kwargs)
            
            # Cache result
            redis_client.setex(
                cache_key, 
                expiration, 
                json.dumps(result, default=str)
            )
            
            return result
        return wrapper
    return decorator

@cache_query(expiration=300)
def get_user_stats(user_id):
    # Expensive query cached for 5 minutes
    pass
```

### Materialized Views

Pre-compute expensive aggregations:

```sql
CREATE MATERIALIZED VIEW daily_revenue AS
SELECT 
    date_trunc('day', created_at) as day,
    SUM(amount) as revenue,
    COUNT(*) as transactions
FROM orders
WHERE status = 'completed'
GROUP BY 1;

-- Refresh strategy
CREATE INDEX ON daily_revenue(day);

-- Concurrent refresh (doesn't lock reads)
REFRESH MATERIALIZED VIEW CONCURRENTLY daily_revenue;
```

## Phase 5: Horizontal Sharding

When vertical scaling hits limits, shard horizontally.

### Sharding Strategies

**By Customer**:
```python
def get_shard(customer_id):
    return f"shard_{customer_id % 4}"

def query_customer_data(customer_id, query):
    shard = get_shard(customer_id)
    conn = connections[shard]
    return execute_query(conn, query)
```

**Geographic Sharding**:
```python
SHARD_MAP = {
    'US': 'db_us.example.com',
    'EU': 'db_eu.example.com',
    'ASIA': 'db_asia.example.com'
}

def get_connection(user_region):
    return psycopg2.connect(host=SHARD_MAP[user_region])
```

### Foreign Data Wrappers for Cross-Shard Queries

```sql
-- Create foreign server
CREATE SERVER shard2 FOREIGN DATA WRAPPER postgres_fdw
    OPTIONS (host 'shard2.db', port '5432', dbname 'myapp');

-- Import foreign schema
IMPORT FOREIGN SCHEMA public 
FROM SERVER shard2 
INTO shard2_schema;

-- Query across shards
SELECT * FROM local_orders
UNION ALL
SELECT * FROM shard2_schema.orders;
```

## Monitoring and Maintenance

### Essential Metrics

Monitor these PostgreSQL-specific metrics:

```sql
-- Cache hit ratio (should be > 99%)
SELECT 
    sum(heap_blks_hit) / (sum(heap_blks_hit) + sum(heap_blks_read)) as cache_hit_ratio
FROM pg_statio_user_tables;

-- Index usage
SELECT 
    schemaname,
    tablename,
    indexname,
    idx_scan,
    idx_tup_read,
    idx_tup_fetch
FROM pg_stat_user_indexes
ORDER BY idx_scan;

-- Long-running queries
SELECT 
    pid,
    now() - query_start as duration,
    query
FROM pg_stat_activity
WHERE state != 'idle'
AND query_start < now() - interval '1 minute';
```

### Automated Maintenance

```bash
#!/bin/bash
# maintenance.sh - Run weekly

# Vacuum and analyze all databases
psql -U postgres -c "VACUUM ANALYZE;"

# Reindex tables with high bloat
psql -U postgres -c "REINDEX TABLE CONCURRENTLY large_table;"

# Update table statistics
psql -U postgres -c "ANALYZE;"

# Clean up old partitions
psql -U postgres -f cleanup_partitions.sql
```

## Performance Troubleshooting

### Common Issues and Solutions

1. **Slow COUNT(*) queries**
   - Use approximate counts: `SELECT reltuples FROM pg_class`
   - Maintain counter tables updated via triggers

2. **Lock contention**
   - Use SKIP LOCKED for queue tables
   - Consider advisory locks for application-level locking

3. **Autovacuum falling behind**
   - Tune autovacuum_max_workers and autovacuum_naptime
   - Schedule manual VACUUM during low-traffic periods

4. **Connection pool exhaustion**
   - Implement statement-level pooling with PgBouncer
   - Use connection pooling in application

## When to Consider Alternatives

PostgreSQL isn't always the answer:

- **Time-series data**: Consider TimescaleDB or InfluxDB
- **Graph relationships**: Look at Neo4j or Amazon Neptune
- **Document store**: Evaluate MongoDB or Amazon DocumentDB
- **Key-value cache**: Use Redis or Memcached
- **Analytics**: Consider ClickHouse or Amazon Redshift

## Conclusion

PostgreSQL scales remarkably well with proper planning and implementation. Start with configuration optimization, add read replicas as needed, implement partitioning for large tables, add caching layers, and only resort to sharding when absolutely necessary.

Remember: premature optimization is the root of all evil. Scale when you have real performance problems, not hypothetical ones. Monitor continuously, optimize iteratively, and let your application's actual usage patterns guide your scaling decisions.