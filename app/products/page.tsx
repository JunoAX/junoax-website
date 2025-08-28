"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Cloud, 
  Shield, 
  Code2, 
  Home, 
  CheckCircle,
  ArrowRight,
  Users,
  Zap,
  Target,
  TrendingUp
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const products = [
  {
    id: "housepoints",
    title: "HousePoints",
    category: "SaaS Product",
    description: "Revolutionary family chore management system currently in successful beta testing",
    longDescription: "HousePoints transforms household management with a gamified approach that makes chores engaging for kids and management easier for parents. Currently being refined through real-world testing with remarkable results.",
    icon: Home,
    features: [
      "Points-based rewards system",
      "Chore trading marketplace", 
      "Wall-mounted family kiosk",
      "Mobile apps for all family members"
    ],
    metrics: {
      completion: "+73%",
      satisfaction: "91%",
      engagement: "88%"
    },
    link: "/products/housepoints",
    gradient: "from-purple-600 to-pink-600"
  },
  {
    id: "consulting",
    title: "Strategic Consulting",
    category: "Professional Services",
    description: "Enterprise technology strategy and digital transformation guidance",
    longDescription: "Our consulting team brings decades of experience helping organizations navigate complex technology decisions. We provide strategic guidance on cloud adoption, security frameworks, and digital transformation initiatives.",
    icon: Target,
    features: [
      "Cloud architecture design",
      "Security assessments",
      "Technology roadmapping",
      "Cost optimization analysis"
    ],
    link: "/products/consulting",
    gradient: "from-blue-600 to-cyan-600"
  },
  {
    id: "development",
    title: "Custom Development",
    category: "Software Services",
    description: "Purpose-built applications designed for your specific business needs",
    longDescription: "We create custom software solutions using modern architectures and best practices. From web applications to mobile apps, we deliver scalable, maintainable code that solves real business problems.",
    icon: Code2,
    features: [
      "Full-stack web development",
      "Mobile app development",
      "API design and integration",
      "Database architecture"
    ],
    link: "/products/development",
    gradient: "from-green-600 to-emerald-600"
  },
  {
    id: "managed-it",
    title: "Managed IT Services",
    category: "Ongoing Support",
    description: "Comprehensive IT management and support for growing businesses",
    longDescription: "Let us handle your IT infrastructure while you focus on your core business. Our managed services include monitoring, maintenance, security, and strategic planning to keep your systems running smoothly.",
    icon: Shield,
    features: [
      "24/7 monitoring and support",
      "Security management",
      "Backup and disaster recovery",
      "Infrastructure optimization"
    ],
    link: "/products/it-services",
    gradient: "from-orange-600 to-red-600"
  }
];

export default function ProductsPage() {
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
              Our Products & Services
            </h1>
            <p className="mt-6 text-xl md:text-2xl leading-8 text-gray-600 max-w-3xl mx-auto">
              From innovative software products to enterprise consulting, we deliver solutions that drive business success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                        {product.category}
                      </span>
                      <h3 className="text-3xl font-bold text-gray-900 mt-2">
                        {product.title}
                      </h3>
                    </div>
                    <div className={`p-3 rounded-2xl bg-gradient-to-r ${product.gradient}`}>
                      <product.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {product.longDescription}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {product.metrics && (
                    <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-gray-50 rounded-xl">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{product.metrics.completion}</div>
                        <div className="text-xs text-gray-600">Task Completion</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{product.metrics.satisfaction}</div>
                        <div className="text-xs text-gray-600">Satisfaction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{product.metrics.engagement}</div>
                        <div className="text-xs text-gray-600">Engagement</div>
                      </div>
                    </div>
                  )}
                  
                  <Link
                    href={product.link}
                    className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${product.gradient} px-6 py-3 text-white font-semibold hover:shadow-lg transition-all hover:scale-105`}
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Why Organizations Choose JunoAI
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Expert Team", value: "15+ Years", description: "Average experience" },
              { icon: Zap, title: "Fast Delivery", value: "2x Faster", description: "Than industry average" },
              { icon: TrendingUp, title: "ROI Focused", value: "32%", description: "Average cost reduction" },
              { icon: CheckCircle, title: "Proven Results", value: "94%", description: "Client satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{stat.title}</h3>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <p className="text-sm text-gray-600 mt-1">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}