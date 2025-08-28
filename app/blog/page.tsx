"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const blogPosts = [
  {
    slug: "building-housepoints-journey",
    title: "Why We're Building HousePoints: A Personal Journey",
    date: "2025-08-28",
    author: "Tom Gamull",
    image: "/images/family-chores.svg",
    description: "The story behind HousePoints - how a family's daily struggles inspired a solution for everyone.",
    categories: ["Product Development", "Family Tech"],
    readTime: "5 min read"
  },
  {
    slug: "agent-experience-the-next-evolution-in-aiml",
    title: "Agent Experience: The Next Evolution in AI/ML",
    date: "2024-07-15",
    author: "Tom Gamull",
    image: "/images/tech-stack.svg",
    description: "Exploring how AI agents are transforming user experience and developer workflows in modern applications.",
    categories: ["AI/ML", "Developer Experience"],
    readTime: "8 min read"
  },
  {
    slug: "the-future-of-ai-automation-in-business",
    title: "The Future of AI Automation in Business",
    date: "2024-06-20",
    author: "Tom Gamull", 
    image: "/images/automation-tools.svg",
    description: "How AI automation is reshaping business operations and what leaders need to know.",
    categories: ["AI", "Business Transformation"],
    readTime: "6 min read"
  },
  {
    slug: "cloud-security-best-practices",
    title: "Cloud Security Best Practices for 2024",
    date: "2024-05-15",
    author: "Tom Gamull",
    image: "/images/cloud-security.jpg",
    description: "Essential security measures every organization should implement in their cloud infrastructure.",
    categories: ["Cloud Security", "Best Practices"],
    readTime: "7 min read"
  },
  {
    slug: "how-predictive-analytics-is-changing-decision-making",
    title: "How Predictive Analytics is Changing Decision Making",
    date: "2024-04-10",
    author: "Tom Gamull",
    image: "/images/analytics-dashboard.svg",
    description: "The power of data-driven insights and how predictive analytics is revolutionizing business decisions.",
    categories: ["Analytics", "Machine Learning"],
    readTime: "6 min read"
  },
  {
    slug: "ai-tools-productivity",
    title: "AI Tools That Actually Boost Productivity",
    date: "2024-03-22",
    author: "Tom Gamull",
    image: "/images/automation-tools.svg",
    description: "A practical guide to AI tools that deliver real productivity gains for developers and businesses.",
    categories: ["AI Tools", "Productivity"],
    readTime: "5 min read"
  },
  {
    slug: "family-password-security",
    title: "Family Password Security: A Practical Guide",
    date: "2024-02-28",
    author: "Tom Gamull",
    image: "/images/family-passwords.svg",
    description: "How to keep your family's digital life secure with practical password management strategies.",
    categories: ["Security", "Family Tech"],
    readTime: "4 min read"
  },
  {
    slug: "remote-work-setup-guide",
    title: "The Complete Remote Work Setup Guide",
    date: "2024-02-15",
    author: "Tom Gamull",
    image: "/images/remote-work-setup.svg",
    description: "Everything you need to create an effective remote work environment that boosts productivity.",
    categories: ["Remote Work", "Productivity"],
    readTime: "8 min read"
  },
  {
    slug: "kubernetes-migration-lessons",
    title: "Kubernetes Migration: Lessons Learned",
    date: "2024-01-30",
    author: "Tom Gamull",
    image: "/images/tech-stack.svg",
    description: "Real-world insights from migrating enterprise applications to Kubernetes.",
    categories: ["DevOps", "Cloud Native"],
    readTime: "9 min read"
  },
  {
    slug: "postgresql-scaling",
    title: "PostgreSQL Scaling Strategies That Work",
    date: "2024-01-15",
    author: "Tom Gamull",
    image: "/images/data-analytics.jpg",
    description: "Proven techniques for scaling PostgreSQL databases in production environments.",
    categories: ["Database", "Performance"],
    readTime: "7 min read"
  },
  {
    slug: "cost-optimization-cloud",
    title: "Cloud Cost Optimization: Beyond the Basics",
    date: "2023-12-20",
    author: "Tom Gamull",
    image: "/images/cloud-security-shield.svg",
    description: "Advanced strategies for reducing cloud costs without sacrificing performance or reliability.",
    categories: ["Cloud", "Cost Optimization"],
    readTime: "6 min read"
  },
  {
    slug: "small-business-backup-strategy",
    title: "Small Business Backup Strategy That Actually Works",
    date: "2023-12-05",
    author: "Tom Gamull",
    image: "/images/backup-strategy.svg",
    description: "Comprehensive backup strategies designed specifically for small and medium businesses.",
    categories: ["Backup", "Small Business"],
    readTime: "5 min read"
  },
  {
    slug: "zero-trust-architecture",
    title: "Zero Trust Architecture: A Practical Implementation Guide",
    date: "2023-11-20",
    author: "Tom Gamull",
    image: "/images/cloud-security-shield.svg",
    description: "Step-by-step guide to implementing Zero Trust security architecture in your organization.",
    categories: ["Security", "Architecture"],
    readTime: "8 min read"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative px-6 lg:px-8 pt-32 pb-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Insights & Articles
            </h1>
            <p className="mt-6 text-xl md:text-2xl leading-8 text-gray-600 max-w-3xl mx-auto">
              Thoughts on technology, business, and building solutions that matter. 
              From cloud architecture to family tech, we share what we learn.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 p-8 lg:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 text-sm text-purple-600 font-semibold mb-4">
                  <span className="bg-purple-100 px-3 py-1 rounded-full">Featured</span>
                  {blogPosts[0].categories.map(cat => (
                    <span key={cat} className="text-purple-600">{cat}</span>
                  ))}
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  {blogPosts[0].description}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(blogPosts[0].date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                <Link
                  href={`/blog/${blogPosts[0].slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-white font-semibold hover:shadow-lg transition-all hover:scale-105"
                >
                  Read Article <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-square bg-white rounded-2xl p-8 shadow-lg">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    width={400}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              All Articles
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Insights across technology, business, and product development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-purple-600 font-semibold mb-3">
                    {post.categories.map(cat => (
                      <span key={cat} className="bg-purple-100 px-2 py-1 rounded-full">{cat}</span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}