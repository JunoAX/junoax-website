const fs = require('fs');
const path = require('path');

const blogArticles = [
  {
    slug: 'cloud-security-best-practices',
    title: 'Cloud Security Best Practices for 2024',
    date: '2024-05-15',
    author: 'Tom Gamull',
    image: '/images/cloud-security.jpg',
    description: 'Essential security measures every organization should implement in their cloud infrastructure.',
    categories: ['Cloud Security', 'Best Practices'],
    readTime: '7 min read'
  },
  {
    slug: 'ai-tools-productivity',
    title: 'AI Tools That Actually Boost Productivity',
    date: '2024-03-22',
    author: 'Tom Gamull',
    image: '/images/automation-tools.svg',
    description: 'A practical guide to AI tools that deliver real productivity gains for developers and businesses.',
    categories: ['AI Tools', 'Productivity'],
    readTime: '5 min read'
  },
  {
    slug: 'family-password-security',
    title: 'Family Password Security: A Practical Guide',
    date: '2024-02-28',
    author: 'Tom Gamull',
    image: '/images/family-passwords.svg',
    description: "How to keep your family's digital life secure with practical password management strategies.",
    categories: ['Security', 'Family Tech'],
    readTime: '4 min read'
  },
  {
    slug: 'how-predictive-analytics-is-changing-decision-making',
    title: 'How Predictive Analytics is Changing Decision Making',
    date: '2024-04-10',
    author: 'Tom Gamull',
    image: '/images/analytics-dashboard.svg',
    description: 'The power of data-driven insights and how predictive analytics is revolutionizing business decisions.',
    categories: ['Analytics', 'Machine Learning'],
    readTime: '6 min read'
  },
  {
    slug: 'remote-work-setup-guide',
    title: 'The Complete Remote Work Setup Guide',
    date: '2024-02-15',
    author: 'Tom Gamull',
    image: '/images/remote-work-setup.svg',
    description: 'Everything you need to create an effective remote work environment that boosts productivity.',
    categories: ['Remote Work', 'Productivity'],
    readTime: '8 min read'
  },
  {
    slug: 'kubernetes-migration-lessons',
    title: 'Kubernetes Migration: Lessons Learned',
    date: '2024-01-30',
    author: 'Tom Gamull',
    image: '/images/tech-stack.svg',
    description: 'Real-world insights from migrating enterprise applications to Kubernetes.',
    categories: ['DevOps', 'Cloud Native'],
    readTime: '9 min read'
  },
  {
    slug: 'postgresql-scaling',
    title: 'PostgreSQL Scaling Strategies That Work',
    date: '2024-01-15',
    author: 'Tom Gamull',
    image: '/images/data-analytics.jpg',
    description: 'Proven techniques for scaling PostgreSQL databases in production environments.',
    categories: ['Database', 'Performance'],
    readTime: '7 min read'
  },
  {
    slug: 'cost-optimization-cloud',
    title: 'Cloud Cost Optimization: Beyond the Basics',
    date: '2023-12-20',
    author: 'Tom Gamull',
    image: '/images/cloud-security-shield.svg',
    description: 'Advanced strategies for reducing cloud costs without sacrificing performance or reliability.',
    categories: ['Cloud', 'Cost Optimization'],
    readTime: '6 min read'
  },
  {
    slug: 'small-business-backup-strategy',
    title: 'Small Business Backup Strategy That Actually Works',
    date: '2023-12-05',
    author: 'Tom Gamull',
    image: '/images/backup-strategy.svg',
    description: 'Comprehensive backup strategies designed specifically for small and medium businesses.',
    categories: ['Backup', 'Small Business'],
    readTime: '5 min read'
  },
  {
    slug: 'zero-trust-architecture',
    title: 'Zero Trust Architecture: A Practical Implementation Guide',
    date: '2023-11-20',
    author: 'Tom Gamull',
    image: '/images/cloud-security-shield.svg',
    description: 'Step-by-step guide to implementing Zero Trust security architecture in your organization.',
    categories: ['Security', 'Architecture'],
    readTime: '8 min read'
  }
];

// Simple template for remaining articles
const createSimplePage = (article) => {
  return `import BlogArticle from "@/components/BlogArticle";

export default function ${article.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}() {
  const content = (
    <>
      <h2>${article.title}</h2>
      
      <p>${article.description}</p>
      
      <p>This article covers essential insights and practical strategies for ${article.categories.join(' and ').toLowerCase()}. Our experience working with various organizations has shown that success in this area requires both strategic planning and practical implementation.</p>
      
      <h3>Key Takeaways</h3>
      <ul>
        <li>Understanding the fundamentals and best practices</li>
        <li>Real-world implementation strategies</li>
        <li>Common challenges and how to overcome them</li>
        <li>Future trends and considerations</li>
      </ul>
      
      <p>For a detailed consultation on how these strategies can benefit your organization, contact our team.</p>
      
      <div className="not-prose bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 my-8">
        <p className="text-lg font-semibold text-gray-900 mb-4">Need help with ${article.categories[0].toLowerCase()}?</p>
        <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-white font-semibold hover:shadow-lg transition-all hover:scale-105">
          Get Expert Consultation
        </a>
      </div>
    </>
  );

  return (
    <BlogArticle
      title="${article.title}"
      date="${article.date}"
      author="${article.author}"
      image="${article.image}"
      description="${article.description}"
      categories={${JSON.stringify(article.categories)}}
      readTime="${article.readTime}"
      content={content}
    />
  );
}`;
};

// Create directories and files
blogArticles.forEach(article => {
  const dirPath = path.join(__dirname, '..', 'app', 'blog', article.slug);
  const filePath = path.join(dirPath, 'page.tsx');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  // Only create if file doesn't exist
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, createSimplePage(article));
    console.log(`Created: ${article.slug}`);
  } else {
    console.log(`Skipped (exists): ${article.slug}`);
  }
});

console.log('Blog pages generation complete!');