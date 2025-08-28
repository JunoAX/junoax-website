"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Shield,
  CheckCircle,
  ArrowRight,
  Monitor,
  Clock,
  HardDrive,
  AlertTriangle,
  Headphones,
  TrendingUp
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ITServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative px-6 lg:px-8 pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        </div>
        
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
              Managed IT Services
            </h1>
            <p className="mt-6 text-xl md:text-2xl leading-8 text-gray-600 max-w-3xl mx-auto">
              Focus on your business while we handle your IT infrastructure. 
              Comprehensive management, monitoring, and support for growing businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Comprehensive IT Management
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Everything you need to keep your systems running smoothly
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Monitor,
                title: "24/7 Monitoring",
                description: "Proactive monitoring of your entire IT infrastructure to prevent issues before they impact your business.",
                features: ["Server monitoring", "Network health", "Application performance", "Alert management"]
              },
              {
                icon: Shield,
                title: "Security Management",
                description: "Complete security coverage including threat detection, patch management, and compliance support.",
                features: ["Firewall management", "Antivirus updates", "Security patches", "Threat response"]
              },
              {
                icon: HardDrive,
                title: "Backup & Recovery",
                description: "Automated backups and tested disaster recovery plans to protect your critical business data.",
                features: ["Automated backups", "Cloud storage", "Recovery testing", "Data retention policies"]
              },
              {
                icon: Headphones,
                title: "Help Desk Support",
                description: "Responsive technical support for your team when they need it most.",
                features: ["Remote support", "Ticket system", "User training", "Documentation"]
              },
              {
                icon: TrendingUp,
                title: "Infrastructure Planning",
                description: "Strategic planning to ensure your IT infrastructure scales with your business growth.",
                features: ["Capacity planning", "Budget forecasting", "Technology roadmap", "Vendor management"]
              },
              {
                icon: AlertTriangle,
                title: "Incident Response",
                description: "Rapid response to critical issues with clear communication and resolution tracking.",
                features: ["24/7 availability", "Priority escalation", "Root cause analysis", "Prevention planning"]
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-orange-600 to-red-600 mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <ul className="space-y-1">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Plans */}
      <section className="py-24 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Flexible Service Plans
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Choose the level of support that fits your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Essential",
                description: "Core IT support for small teams",
                features: [
                  "Business hours support",
                  "Remote assistance",
                  "Monthly health reports",
                  "Basic monitoring"
                ],
                ideal: "1-10 employees"
              },
              {
                name: "Professional",
                description: "Comprehensive coverage for growing businesses",
                features: [
                  "Extended hours support",
                  "Proactive monitoring",
                  "Security management",
                  "Backup solutions",
                  "Quarterly reviews"
                ],
                ideal: "10-50 employees",
                featured: true
              },
              {
                name: "Enterprise",
                description: "Complete IT department as a service",
                features: [
                  "24/7 support",
                  "Dedicated account manager",
                  "Strategic planning",
                  "Compliance support",
                  "Custom SLAs"
                ],
                ideal: "50+ employees"
              }
            ].map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-8 ${plan.featured ? 'ring-2 ring-orange-600 shadow-xl' : 'shadow-lg'}`}
              >
                {plan.featured && (
                  <div className="bg-orange-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500 mb-6">Ideal for: {plan.ideal}</p>
                <Link
                  href="/contact"
                  className={`block text-center rounded-full px-6 py-3 font-semibold transition-all ${
                    plan.featured
                      ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover:shadow-lg'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Managed IT */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-8">
                Why Businesses Choose Managed IT
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Clock,
                    title: "Predictable Costs",
                    description: "Fixed monthly pricing replaces unpredictable IT expenses"
                  },
                  {
                    icon: Shield,
                    title: "Enhanced Security",
                    description: "Enterprise-level security without enterprise costs"
                  },
                  {
                    icon: TrendingUp,
                    title: "Focus on Growth",
                    description: "Spend time on your business, not IT problems"
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
                      <div className="p-2 rounded-lg bg-gradient-to-r from-orange-600 to-red-600">
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
              className="bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The Numbers Speak</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-orange-600">60%</div>
                  <p className="text-gray-600 text-sm mt-1">Reduction in IT costs</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-orange-600">99.9%</div>
                  <p className="text-gray-600 text-sm mt-1">Average uptime</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-orange-600">&lt; 1hr</div>
                  <p className="text-gray-600 text-sm mt-1">Response time</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-orange-600">24/7</div>
                  <p className="text-gray-600 text-sm mt-1">Monitoring</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              Stop Worrying About IT
            </h2>
            <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
              Let us handle your technology so you can focus on what you do best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="rounded-full bg-white text-orange-600 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Get Your Free Assessment
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