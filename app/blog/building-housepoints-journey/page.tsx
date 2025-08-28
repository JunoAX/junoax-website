"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function BuildingHousePointsJourney() {
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
              <span className="bg-purple-100 px-3 py-1 rounded-full">Product Development</span>
              <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full">Family Tech</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Why We're Building HousePoints: A Personal Journey
            </h1>
            
            <p className="text-xl text-gray-600 mb-6">
              The story behind HousePoints - how a family's daily struggles inspired a solution for everyone.
            </p>
            
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>By Tom Gamull</span>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                August 28, 2025
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                5 min read
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
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/images/family-chores.svg"
                alt="Family chores illustration"
                width={300}
                height={300}
                className="max-w-xs max-h-xs object-contain"
              />
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="prose prose-lg max-w-none prose-purple"
          >
            <h2>The Spark That Started It All</h2>
            
            <p>Like many parents, I found myself in a constant battle with household chores. The nagging, the forgotten tasks, the arguments about who did what - it was exhausting. As someone who builds software for a living, I kept thinking, "There has to be a better way."</p>

            <h3>The Problem Was Personal</h3>

            <p>In my own home, we tried everything:</p>
            <ul>
              <li>Chore charts on the fridge (ignored after week two)</li>
              <li>Reward stickers (lost their appeal quickly)</li>
              <li>Apps designed for adults (too complicated for kids)</li>
              <li>Basic reminder systems (became background noise)</li>
            </ul>

            <p>Nothing stuck. The existing solutions were either too simple to be engaging or too complex for family use. They also didn't account for the reality of modern families - varying schedules, different age groups, and the need for flexibility.</p>

            <h3>The "Aha" Moment</h3>

            <p>The breakthrough came when I watched my kids spend hours engaged with their favorite games, trading virtual items, completing quests, and celebrating achievements. They understood complex game economies but "forgot" simple chores.</p>

            <p>That's when it clicked: <strong>We don't need another chore app. We need a family operating system that happens to manage chores.</strong></p>

            <h3>Building for Real Families</h3>

            <p>HousePoints started as a simple point tracker for my own family. But as I shared the concept with other parents, I discovered universal challenges:</p>

            <blockquote>
              <p><strong>Single Parent:</strong> "I need something that works when I'm not home"<br/>
              <strong>Divorced Dad:</strong> "How do I coordinate with my ex's house?"<br/>
              <strong>Mom of Teens:</strong> "My kids need different motivation than my 6-year-old"<br/>
              <strong>Grandparent:</strong> "I watch the kids twice a week - can I participate?"</p>
            </blockquote>

            <p>Each conversation added depth to the vision. HousePoints needed to be flexible enough for any family structure while remaining simple enough for a 5-year-old to use.</p>

            <h3>The Technical Challenge</h3>

            <p>Building HousePoints presented unique technical challenges:</p>
            <ul>
              <li><strong>Multi-device synchronization</strong> (web, kiosk, mobile)</li>
              <li><strong>Real-time updates</strong> across all interfaces</li>
              <li><strong>Kid-proof UI</strong> that's also powerful for parents</li>
              <li><strong>Offline capability</strong> for the kiosk display</li>
              <li><strong>Privacy-first architecture</strong> for family data</li>
            </ul>

            <p>We chose a modern tech stack that prioritizes reliability and user experience over trendy frameworks.</p>

            <h3>Early Testing Revelations</h3>

            <p>Testing with my own family revealed surprising insights:</p>
            <ol>
              <li><strong>Kids wanted ownership</strong> - They needed to feel the system was partly theirs</li>
              <li><strong>Visual feedback matters</strong> - Celebrations, animations, and progress bars were crucial</li>
              <li><strong>Flexibility is key</strong> - Rigid systems broke down during busy weeks</li>
              <li><strong>Trading created engagement</strong> - Letting siblings negotiate point trades was genius</li>
              <li><strong>Meal planning integration</strong> - This wasn't planned but became essential</li>
            </ol>

            <h3>Where We Are Now</h3>

            <p>HousePoints is currently running in our household and a handful of beta testing families. The feedback has been incredible:</p>
            <ul>
              <li>Chore completion rates up 70%</li>
              <li>Family conflicts about tasks down significantly</li>
              <li>Kids actively asking for more responsibilities</li>
              <li>Parents reporting less daily stress</li>
            </ul>

            <h3>The Road Ahead</h3>

            <p>We're taking our time to get this right. Every feature is tested in real homes with real families. We're not rushing to market because we believe in building something that truly works, not just something that demos well.</p>

            <h3>Why This Matters</h3>

            <p>HousePoints isn't just about chores. It's about:</p>
            <ul>
              <li>Teaching life skills naturally</li>
              <li>Reducing family friction</li>
              <li>Creating positive associations with responsibility</li>
              <li>Preparing kids for adulthood</li>
              <li>Giving parents time back</li>
            </ul>

            <h3>Join Our Journey</h3>

            <p>If you're tired of the chore wars and want to be part of something different, we'd love to hear from you. We're selectively adding beta families who can provide feedback and help shape the product.</p>

            <p>This isn't just another app launch. It's a mission to make family life a little easier, one task at a time.</p>

            <div className="not-prose bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 my-8">
              <p className="text-lg font-semibold text-gray-900 mb-4">Want to follow our progress or join the beta?</p>
              <Link 
                href="/products/housepoints" 
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-white font-semibold hover:shadow-lg transition-all hover:scale-105"
              >
                Learn About HousePoints <ExternalLink className="h-4 w-4" />
              </Link>
            </div>

            <hr className="my-8" />

            <p><em>This post was written by the founder of JunoAI Innovations, LLC, sharing the personal journey behind HousePoints development.</em></p>
          </motion.div>

          {/* Related Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 pt-8 border-t"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/ai-tools-productivity" className="block p-6 rounded-xl border hover:shadow-lg transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">AI Tools That Actually Boost Productivity</h4>
                <p className="text-gray-600 text-sm">A practical guide to AI tools that deliver real productivity gains for developers and businesses.</p>
              </Link>
              <Link href="/blog/family-password-security" className="block p-6 rounded-xl border hover:shadow-lg transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Family Password Security: A Practical Guide</h4>
                <p className="text-gray-600 text-sm">How to keep your family's digital life secure with practical password management strategies.</p>
              </Link>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  );
}