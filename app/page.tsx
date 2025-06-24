"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge
import { ArrowRight, Users, Zap, Star, Globe, Award, TrendingUp, Mail, Phone, LayoutDashboard, BarChart2, Smartphone } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const services = [
    {
      icon: LayoutDashboard,
      title: "Social Media Management",
      description: "Complete management of your social profiles with data-driven strategies for maximum engagement.",
    },
    {
      icon: BarChart2,
      title: "Content Strategy",
      description: "Tailored content plans that align with your brand voice and business objectives.",
    },
    {
      icon: Smartphone,
      title: "Influencer Marketing",
      description: "Strategic partnerships with influencers to amplify your brand's reach.",
    },
    {
      icon: Zap,
      title: "Paid Advertising",
      description: "Precision-targeted ad campaigns that convert across all platforms.",
    },
  ]

  const stats = [
    { label: "Clients Served", value: "200+", icon: Users },
    { label: "Countries Reached", value: "30+", icon: Globe },
    { label: "Campaigns Managed", value: "500+", icon: Award },
    { label: "Years Experience", value: "5+", icon: TrendingUp },
  ]

  const testimonials = [
    {
      name: "Nikola Petrović",
      role: "CEO, Fashion Brand",
      content: "Our social media presence transformed completely after working with Balkan Agency. Engagement is up 300%.",
      rating: 5,
    },
    {
      name: "Ana Marković",
      role: "Marketing Director",
      content: "Their data-driven approach to content strategy delivered real business results, not just vanity metrics.",
      rating: 5,
    },
    {
      name: "Marko Jovanović",
      role: "E-commerce Founder",
      content: "The influencer campaigns they organized brought us our best sales quarter ever. Highly recommend!",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Glass-like background effect */}
      <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-black to-black" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge variant="outline" className="mb-4 bg-cyan-500/10 border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/20">
              Social Media Experts
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white">Balkan</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-400">Agency</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              We elevate Balkan brands through cutting-edge social media strategies, data-driven campaigns, 
              and influencer partnerships that deliver measurable results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-medium hover:from-cyan-400 hover:to-cyan-500 transition-all duration-300 px-8 shadow-lg shadow-cyan-500/20"
                >
                  Our Services
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-700 text-white bg-black/50 hover:bg-white hover:text-black transition-all duration-300 px-8"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-cyan-500/20 transition-colors duration-300">
                      <stat.icon className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white">Our Services</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive solutions tailored for the modern Balkan market
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 h-full hover:shadow-lg hover:shadow-cyan-500/10">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white">Client Success</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-cyan-400/80 text-cyan-400/80" />
                      ))}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 italic">"{testimonial.content}"</p>
                    <div className="mt-4 pt-4 border-t border-gray-800">
                      <div className="font-medium text-white">{testimonial.name}</div>
                      <div className="text-xs text-cyan-400/80">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-[url('/grid.svg')] bg-cover bg-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 overflow-hidden relative">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2" />
              
              <CardContent className="p-8 md:p-12 text-center relative z-10">
                <div className="w-16 h-16 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-cyan-400" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white">
                    Ready to Transform Your Social Presence?
                  </span>
                </h2>

                <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Schedule a free consultation with our team to discuss how we can help your brand dominate social media.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-medium hover:from-cyan-400 hover:to-cyan-500 transition-all duration-300 px-8 shadow-lg shadow-cyan-500/20"
                    >
                      Book a Call
                      <Phone className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-gray-700 text-white bg-black/50 hover:bg-white hover:text-black transition-all duration-300 px-8"
                    >
                      Email Us
                      <Mail className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
