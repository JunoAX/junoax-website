"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Home,
  CheckCircle,
  Star,
  Users,
  Trophy,
  Smartphone,
  Monitor,
  ArrowRight,
  TrendingUp,
  Heart,
  Zap
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function HousePointsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative px-6 lg:px-8 pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        </div>
        
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Zap className="h-4 w-4" />
              CURRENTLY IN BETA TESTING
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
              HousePoints
            </h1>
            <p className="text-2xl text-gray-600 mb-4">
              Where Chores Become Adventures
            </p>
            <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
              Transform your family's daily routines with our innovative chore management system. 
              Currently being refined through real-world testing with remarkable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Beta Stats */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white">Beta Testing Results</h2>
            <p className="text-purple-100 mt-2">Real families. Real results.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Task Completion", value: "+73%", icon: CheckCircle },
              { label: "Family Conflicts", value: "-85%", icon: Heart },
              { label: "Kid Engagement", value: "88%", icon: Users },
              { label: "Parent Satisfaction", value: "91%", icon: Star }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-white/80" />
                <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-purple-100 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              How HousePoints Works
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              A complete ecosystem for family task management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Parents Assign Tasks",
                description: "Set up chores, point values, and rewards through the intuitive parent dashboard",
                icon: Users
              },
              {
                step: "2",
                title: "Kids Complete & Trade",
                description: "Children can complete tasks, trade chores with siblings, and track their points",
                icon: Trophy
              },
              {
                step: "3",
                title: "Everyone Wins",
                description: "Kids earn rewards, parents save time, and the whole family stays organized",
                icon: Star
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-2xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-8">
                Core Features That Make the Difference
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Points-Based Rewards",
                    description: "Motivate kids with a transparent point system tied to real rewards"
                  },
                  {
                    title: "Chore Trading Marketplace",
                    description: "Siblings can negotiate and trade tasks, teaching valuable life skills"
                  },
                  {
                    title: "Wall-Mounted Kiosk",
                    description: "Central family hub for checking tasks and claiming completions"
                  },
                  {
                    title: "Mobile Apps",
                    description: "Parents and kids stay connected with dedicated mobile applications"
                  },
                  {
                    title: "Smart Notifications",
                    description: "Gentle reminders keep everyone on track without nagging"
                  },
                  {
                    title: "Progress Analytics",
                    description: "See trends, identify patterns, and celebrate achievements"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <Monitor className="h-24 w-24 mx-auto mb-4 text-purple-600" />
                  <Smartphone className="h-16 w-16 mx-auto text-pink-600" />
                  <p className="mt-4 text-gray-700 font-semibold">Multi-Platform Experience</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            What Beta Families Are Saying
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Our morning routine went from chaos to calm. The kids actually remind us about their chores now!",
                author: "Sarah M.",
                role: "Mother of 3"
              },
              {
                quote: "The chore trading feature is genius. My kids are learning negotiation skills while getting things done.",
                author: "David L.",
                role: "Father of 2"
              },
              {
                quote: "Finally, a system that works for our neurodiverse family. The visual rewards really help my son stay motivated.",
                author: "Jennifer K.",
                role: "Mother of 1"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              Join the HousePoints Beta
            </h2>
            <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
              Be part of the family revolution. Limited spots available for our next beta testing phase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="rounded-full bg-white text-purple-600 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Apply for Beta Access
              </Link>
              <Link
                href="/products"
                className="rounded-full border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white/10 transition-all"
              >
                Explore Other Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}