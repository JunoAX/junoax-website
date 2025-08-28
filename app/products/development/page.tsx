"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Code2,
  CheckCircle,
  ArrowRight,
  Smartphone,
  Globe,
  Database,
  Cpu,
  Zap,
  Shield
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function DevelopmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative px-6 lg:px-8 pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        </div>
        
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
              Custom Software Development
            </h1>
            <p className="mt-6 text-xl md:text-2xl leading-8 text-gray-600 max-w-3xl mx-auto">
              Purpose-built applications designed for your specific business needs. 
              We deliver scalable, maintainable solutions using modern architectures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Development Services */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Development Capabilities
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Full-stack expertise across platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Web Applications",
                description: "Modern, responsive web apps built with React, Next.js, and robust backend systems.",
                technologies: ["React/Next.js", "Node.js/Python", "PostgreSQL/MongoDB", "AWS/Azure"]
              },
              {
                icon: Smartphone,
                title: "Mobile Development",
                description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
                technologies: ["React Native", "Flutter", "iOS/Android Native", "Progressive Web Apps"]
              },
              {
                icon: Database,
                title: "API & Integration",
                description: "Scalable APIs and seamless integrations with third-party services and legacy systems.",
                technologies: ["RESTful APIs", "GraphQL", "Microservices", "Event-driven architecture"]
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-1">
                  {service.technologies.map((tech, i) => (
                    <div key={i} className="text-sm text-gray-700 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {tech}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Our Development Process
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Agile methodology with continuous delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                phase: "Discovery",
                description: "Requirements gathering, user research, and technical planning",
                icon: "💡"
              },
              {
                phase: "Design",
                description: "UI/UX design, architecture planning, and prototype development",
                icon: "🎨"
              },
              {
                phase: "Development",
                description: "Agile sprints with continuous integration and regular demos",
                icon: "⚡"
              },
              {
                phase: "Deployment",
                description: "Testing, deployment, monitoring, and ongoing support",
                icon: "🚀"
              }
            ].map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center"
              >
                <div className="text-4xl mb-4">{phase.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{phase.phase}</h3>
                <p className="text-gray-600 text-sm">{phase.description}</p>
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
                Built for Success
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Zap,
                    title: "Performance First",
                    description: "Optimized code that scales with your business growth"
                  },
                  {
                    icon: Shield,
                    title: "Security Built-In",
                    description: "Security best practices from day one, not as an afterthought"
                  },
                  {
                    icon: Cpu,
                    title: "Modern Architecture",
                    description: "Clean, maintainable code using industry best practices"
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
                      <div className="p-2 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600">
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
              className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technology Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 text-sm">Frontend</h4>
                  <p className="text-gray-600 text-xs mt-1">React, Next.js, Vue, Angular</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 text-sm">Backend</h4>
                  <p className="text-gray-600 text-xs mt-1">Node.js, Python, .NET, Java</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 text-sm">Database</h4>
                  <p className="text-gray-600 text-xs mt-1">PostgreSQL, MongoDB, Redis</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 text-sm">Cloud</h4>
                  <p className="text-gray-600 text-xs mt-1">AWS, Azure, GCP, Netlify</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
              Let's discuss your project and how we can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="rounded-full bg-white text-green-600 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Start Your Project
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