"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface BlogArticleProps {
  title: string;
  date: string;
  author: string;
  image: string;
  description: string;
  categories: string[];
  readTime: string;
  content: React.ReactNode;
  relatedPosts?: {
    slug: string;
    title: string;
    description: string;
  }[];
}

export default function BlogArticle({
  title,
  date,
  author,
  image,
  description,
  categories,
  readTime,
  content,
  relatedPosts = []
}: BlogArticleProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      {/* Article Header */}
      <article className="pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Back Navigation */}
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8 font-semibold"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {/* Article Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 text-sm text-purple-600 font-semibold mb-4">
              {categories.map((cat, index) => (
                <span 
                  key={cat} 
                  className={`px-3 py-1 rounded-full ${
                    index % 2 === 0 ? 'bg-purple-100' : 'bg-pink-100 text-pink-600'
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              {title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-6">
              {description}
            </p>
            
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>By {author}</span>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {readTime}
              </div>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl mb-12 overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <Image
                src={image}
                alt={title}
                width={image.endsWith('.svg') ? 400 : 800}
                height={image.endsWith('.svg') ? 400 : 450}
                className={image.endsWith('.svg') ? "max-w-md object-contain" : "w-full h-full object-cover rounded-xl"}
              />
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="prose prose-lg max-w-none prose-purple prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
          >
            {content}
          </motion.div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 pt-8 border-t"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map(post => (
                  <Link 
                    key={post.slug}
                    href={`/blog/${post.slug}`} 
                    className="block p-6 rounded-xl border hover:shadow-lg transition-all"
                  >
                    <h4 className="font-semibold text-gray-900 mb-2">{post.title}</h4>
                    <p className="text-gray-600 text-sm">{post.description}</p>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </article>

      <Footer />
    </div>
  );
}