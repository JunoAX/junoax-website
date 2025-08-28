"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Target,
  CheckCircle,
  ArrowRight,
  Cloud,
  Shield,
  TrendingUp,
  Users,
  Lightbulb,
  BarChart
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ConsultingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative px-6 lg:px-8 pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        </div>
        
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
              Strategic Technology Consulting
            </h1>
            <p className="mt-6 text-xl md:text-2xl leading-8 text-gray-600 max-w-3xl mx-auto">
              Navigate complex technology decisions with confidence. We provide strategic guidance 
              on cloud adoption, security frameworks, and digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Our Consulting Services
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Expert guidance tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Cloud,
                title: "Cloud Architecture & Strategy",
                description: "Design scalable, cost-effective cloud solutions on AWS, Azure, or GCP. We help you choose the right platform and architecture for your needs.",
                features: [
                  "Platform selection and migration planning",
                  "Cost optimization strategies",
                  "Hybrid cloud architectures",
                  "Disaster recovery planning"
                ]
              },
              {
                icon: Shield,
                title: "Security & Compliance",
                description: "Implement robust security frameworks that protect your business while maintaining compliance with industry regulations.",
                features: [
                  "Security assessments and audits",
                  "Zero Trust architecture design",
                  "HIPAA, SOC2, PCI compliance",
                  "Incident response planning"
                ]
              },
              {
                icon: TrendingUp,
                title: "Digital Transformation",
                description: "Transform your business operations with strategic technology implementations that drive efficiency and innovation.",
                features: [
                  "Process automation strategy",
                  "Legacy system modernization",
                  "Data analytics implementation",
                  "Change management support"
                ]
              },
              {
                icon: BarChart,
                title: "Technology Roadmapping",
                description: "Develop comprehensive technology strategies aligned with your business goals and growth plans.",
                features: [
                  "3-5 year technology planning",
                  "Budget forecasting and optimization",
                  "Vendor selection and management",
                  "Risk assessment and mitigation"
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Our Consulting Approach
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              A proven methodology for delivering results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Discovery", description: "Understand your business, challenges, and goals" },
              { step: "2", title: "Analysis", description: "Evaluate current state and identify opportunities" },
              { step: "3", title: "Strategy", description: "Develop tailored recommendations and roadmap" },
              { step: "4", title: "Implementation", description: "Support execution and measure success" }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-8">
                Why Choose Our Consulting Services
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Lightbulb,
                    title: "Strategic Thinking",
                    description: "We focus on solutions that align with your business objectives, not just technical implementations."
                  },
                  {
                    icon: Users,
                    title: "Direct Collaboration",
                    description: "Work directly with experienced consultants who understand both technology and business."
                  },
                  {
                    icon: Target,
                    title: "Results Focused",
                    description: "Our success is measured by your outcomes, with clear KPIs and measurable improvements."
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600">
                        <benefit.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Engagement Options</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900">Quick Assessment</h4>
                  <p className="text-gray-600 text-sm mt-1">2-3 day evaluation with actionable recommendations</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900">Strategic Planning</h4>
                  <p className="text-gray-600 text-sm mt-1">4-6 week comprehensive strategy development</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900">Ongoing Advisory</h4>
                  <p className="text-gray-600 text-sm mt-1">Monthly retainer for continuous guidance</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              Ready to Transform Your Technology Strategy?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Let's discuss how our consulting services can help you achieve your business objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="rounded-full bg-white text-blue-600 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/products"
                className="rounded-full border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                View All Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}