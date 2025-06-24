"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Zap, Users, TrendingUp, Star } from "lucide-react"

export default function HomePage() {
  const services = [
    {
      icon: Users,
      title: "Social Media Management",
      description: "Strategic social media presence that drives engagement and growth.",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven campaigns that deliver measurable results.",
    },
    {
      icon: Zap,
      title: "Brand Strategy",
      description: "Comprehensive brand development for the modern market.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 bg-gradient-to-br from-cyan-500/5 via-black to-pink-500/5">
        <div className="max-w-7xl mx-auto text-center space-y-6 sm:space-y-8 lg:space-y-10">
          {/* Static Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 sm:mb-8"
          >
            <img
              src="/nxtbalkancolored2.png"
              alt="NXT Balkan Logo"
              className="mx-auto w-64 h-auto sm:w-80 md:w-96 lg:w-[450px] xl:w-[500px]"
            />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-wide px-4"
          >
            <span className="text-white">Digital Excellence</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent font-medium">
              Redefined
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4"
          >
            We craft exceptional digital experiences that elevate brands and drive meaningful connections.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="px-4 pt-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400 text-white font-medium px-8 py-4 sm:px-10 sm:py-6 lg:px-12 lg:py-8 text-lg sm:text-xl lg:text-2xl rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30 w-full sm:w-auto"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-4 px-4 text-white">
              What We{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Deliver</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/80 border border-gray-800 hover:border-cyan-400/30 transition-all duration-300 h-full group hover:scale-105 hover:-translate-y-2">
                  <CardContent className="p-6 sm:p-8 lg:p-10 text-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-4 sm:mb-6 lg:mb-8 rounded-full bg-gradient-to-r from-cyan-500/20 to-pink-500/20 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                      <service.icon className="h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-cyan-400" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-3 sm:mb-4 lg:mb-6 text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 bg-gradient-to-r from-cyan-500/5 to-pink-500/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {[
              { value: "200+", label: "Projects" },
              { value: "50+", label: "Clients" },
              { value: "5+", label: "Years" },
              { value: "99%", label: "Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 120 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent mb-2 sm:mb-3 lg:mb-4">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900/80 border border-gray-800">
              <CardContent className="p-8 sm:p-12 lg:p-16">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-6 sm:mb-8 lg:mb-10 rounded-full bg-gradient-to-r from-cyan-500/20 to-pink-500/20 flex items-center justify-center">
                  <Star className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-cyan-400" />
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-4 sm:mb-6 lg:mb-8 text-white px-4">
                  Ready to{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                    Elevate
                  </span>{" "}
                  Your Brand?
                </h2>

                <p className="text-gray-300 mb-6 sm:mb-8 lg:mb-10 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed px-4">
                  Let's discuss how we can transform your digital presence and drive exceptional results.
                </p>

                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400 text-white font-medium px-8 py-4 sm:px-10 sm:py-6 lg:px-12 lg:py-8 text-lg sm:text-xl lg:text-2xl rounded-full transition-all duration-300 shadow-lg shadow-pink-500/20 w-full sm:w-auto"
                >
                  Get In Touch
                  <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 border-t border-gray-800 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
            © 2024 NXT Balkan. Crafting digital excellence.
          </p>
        </div>
      </footer>
    </div>
  )
}
