"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  Target, 
  Heart, 
  Award,
  Code2,
  Shield,
  Rocket,
  TrendingUp,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function AboutPage() {
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
              Technology Innovation with Purpose
            </h1>
            <p className="mt-6 text-xl md:text-2xl leading-8 text-gray-600 max-w-3xl mx-auto">
              JunoAI Innovations combines deep technical expertise with strategic business acumen 
              to deliver transformative technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower organizations with strategic technology solutions that drive measurable business outcomes. 
                We bridge the gap between cutting-edge technology and practical business needs, ensuring every 
                implementation delivers real value.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 mb-6">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the trusted technology partner for organizations seeking to transform their operations 
                through innovative solutions. We envision a future where technology seamlessly enhances 
                every aspect of business and daily life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Our Core Values
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Client Success",
                description: "Your success is our success. We measure ourselves by the outcomes we deliver."
              },
              {
                icon: Shield,
                title: "Security First",
                description: "Security isn't an afterthought. It's built into everything we create."
              },
              {
                icon: Code2,
                title: "Technical Excellence",
                description: "We maintain the highest standards in code quality and system architecture."
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "Great solutions come from great partnerships with our clients."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-4 rounded-2xl bg-white shadow-lg mb-4">
                  <value.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-8">
                Deep Expertise Across Industries
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With extensive experience in enterprise technology, we help organizations 
                achieve their technology goals. We bring expertise in:
              </p>
              
              <div className="space-y-4">
                {[
                  "Cloud Architecture (AWS, Azure, GCP)",
                  "Security & Compliance (HIPAA, SOC2, PCI)",
                  "Modern Application Development",
                  "Data Analytics & Machine Learning",
                  "DevOps & Infrastructure Automation",
                  "Digital Transformation Strategy"
                ].map((expertise, index) => (
                  <motion.div
                    key={expertise}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{expertise}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { number: "15+", label: "Years Experience" },
                { number: "Multiple", label: "Industries Served" },
                { number: "100%", label: "Client Focused" },
                { number: "Full", label: "Stack Expertise" }
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Our Team
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Dedicated professionals passionate about solving complex technology challenges
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                JunoAI Innovations brings together experienced technology professionals with diverse backgrounds 
                in enterprise consulting, cloud architecture, and software development. Our team has worked with 
                organizations ranging from startups to Fortune 500 companies.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We believe in direct collaboration and personal service. When you work with us, you work directly 
                with experienced consultants who understand both technology and business.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {[
                  { label: "Enterprise Experience", value: "15+ Years" },
                  { label: "Technology Focus", value: "Full Stack" },
                  { label: "Approach", value: "Hands-On" }
                ].map((item) => (
                  <div key={item.label} className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                    <div className="text-sm text-gray-600">{item.label}</div>
                    <div className="text-xl font-semibold text-purple-600 mt-1">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              What Sets Us Apart
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "Proven Track Record", description: "Successful projects across industries" },
              { icon: Shield, title: "Security First", description: "Best practices in every solution" },
              { icon: TrendingUp, title: "Growth Partnership", description: "We scale with your business" },
              { icon: Users, title: "Personal Service", description: "Direct access to consultants" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <item.icon className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
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
              Ready to Work with Experts?
            </h2>
            <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
              Let's discuss how our expertise can help transform your technology challenges into competitive advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="rounded-full bg-white text-purple-600 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Start a Conversation
              </Link>
              <Link
                href="/products"
                className="rounded-full border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                View Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}