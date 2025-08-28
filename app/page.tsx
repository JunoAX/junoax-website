"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Cloud, 
  Shield, 
  Code2, 
  Rocket, 
  BarChart3, 
  CheckCircle,
  Home,
  Users,
  Trophy,
  TrendingUp
} from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative px-6 lg:px-8 pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        </div>
        
        <div className="mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
              Transform Your Business with{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Strategic Technology
              </span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl leading-8 text-gray-600 max-w-3xl mx-auto">
              JunoAI Innovations provides strategic technology consulting and custom software development. 
              We help businesses leverage modern technology to solve real problems and drive growth.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                href="/products"
                className="text-lg font-semibold leading-6 text-gray-900 flex items-center gap-2 hover:gap-3 transition-all"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { label: "Years Experience", value: "15+", icon: Trophy },
              { label: "Technology Stack", value: "Full Stack", icon: TrendingUp },
              { label: "Client Focus", value: "100%", icon: Users },
              { label: "Support Available", value: "24/7", icon: CheckCircle }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-purple-600">Our Services</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Why Organizations Choose JunoAI
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Cloud,
                title: "Cloud Excellence",
                description: "Expert guidance on AWS, Azure, and GCP implementations with a focus on cost optimization",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Shield,
                title: "Security First",
                description: "Zero Trust architecture, compliance frameworks, and comprehensive security assessments",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: Code2,
                title: "Custom Development",
                description: "Purpose-built applications using modern architectures to solve specific business challenges",
                gradient: "from-orange-500 to-red-500"
              },
              {
                icon: CheckCircle,
                title: "Proven Delivery",
                description: "Committed to on-time delivery with clear communication and measurable results",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                icon: Rocket,
                title: "DevOps Excellence",
                description: "CI/CD pipelines, container orchestration, and infrastructure as code implementations",
                gradient: "from-indigo-500 to-purple-500"
              },
              {
                icon: BarChart3,
                title: "Data & Analytics",
                description: "Business intelligence, data warehousing, and machine learning solutions",
                gradient: "from-yellow-500 to-orange-500"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.gradient} mb-5`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HousePoints Feature Section */}
      <section className="py-24 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 text-purple-600 font-semibold mb-4">
                <Home className="h-5 w-5" />
                FEATURED PRODUCT
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                HousePoints: Making Chores Fun
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Transform your family's daily routines with our innovative chore management system. 
                Currently in successful beta testing with remarkable results.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Points-based rewards system that motivates kids",
                  "Chore trading marketplace between siblings",
                  "Wall-mounted kiosk for family coordination",
                  "Mobile apps for on-the-go management"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
              
              <Link
                href="/products/housepoints"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Learn More About HousePoints <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur-3xl opacity-30" />
              <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Beta Testing Results</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold">+73%</div>
                    <div className="text-purple-100">Task Completion</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">-85%</div>
                    <div className="text-purple-100">Family Conflicts</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">88%</div>
                    <div className="text-purple-100">Kid Engagement</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">91%</div>
                    <div className="text-purple-100">Parent Satisfaction</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              Ready to Transform Your Technology?
            </h2>
            <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
              Let's discuss how our expertise can help you achieve your business objectives. 
              Schedule a consultation to explore strategic solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="rounded-full bg-white text-purple-600 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/products"
                className="rounded-full border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white/10 transition-all"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
