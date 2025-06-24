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
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Subtle background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-cyan-500/5 via-black to-pink-500/5 pointer-events-none" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-4 sm:space-y-6 lg:space-y-10">
          {/* Animated Logo - Mobile Version */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-4 block sm:hidden"
          >
            <svg width="100%" height="120" viewBox="0 0 320 160" className="mx-auto w-full max-w-xs">
              <defs>
                <linearGradient id="logoGradientMobile" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00bcd4" />
                  <stop offset="100%" stopColor="#e91e63" />
                </linearGradient>
              </defs>

              {/* Mobile NXT Letters - Closer Together */}
              <text
                x="110"
                y="60"
                fontSize="50"
                fontWeight="900"
                fontFamily="Arial, sans-serif"
                fill="none"
                stroke="url(#logoGradientMobile)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="400"
                strokeDashoffset="400"
                textAnchor="middle"
                style={{ animation: "letterN 10s ease-in-out infinite" }}
              >
                N
              </text>
              <text
                x="140"
                y="60"
                fontSize="50"
                fontWeight="900"
                fontFamily="Arial, sans-serif"
                fill="none"
                stroke="url(#logoGradientMobile)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="400"
                strokeDashoffset="400"
                textAnchor="middle"
                style={{ animation: "letterX 10s ease-in-out infinite" }}
              >
                X
              </text>
              <text
                x="170"
                y="60"
                fontSize="50"
                fontWeight="900"
                fontFamily="Arial, sans-serif"
                fill="none"
                stroke="url(#logoGradientMobile)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="300"
                strokeDashoffset="300"
                textAnchor="middle"
                style={{ animation: "letterT 10s ease-in-out infinite" }}
              >
                T
              </text>

              {/* Mobile BALKAN Letters - Closer Together */}
              <text
                x="85"
                y="110"
                fontSize="30"
                fontWeight="900"
                fontFamily="Arial, sans-serif"
                fill="none"
                stroke="url(#logoGradientMobile)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="300"
                strokeDashoffset="300"
                textAnchor="middle"
                style={{ animation: "letterB 10s ease-in-out infinite" }}
              >
                B
              </text>
              <text
                x="105"
                y="110"
                fontSize="30"
                fontWeight="900"
                fontFamily="Arial, sans-serif"
                fill="none"
                stroke="url(#logoGradientMobile)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="250"
                strokeDashoffset="250"
                textAnchor="middle"
                style={{ animation: "letterA1 10s ease-in-out infinite" }}
              >
                A
              </text>
              <text
                x="125"
                y="110"
                fontSize="30"
                fontWeight="900"
                fontFamily="Arial, sans-serif"
                fill="none"
                stroke="url(#logoGradientMobile)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="200"
                strokeDashoffset="200"
                textAnchor="middle"
                style={{ animation: "letterL 10s ease-in-out infinite" }}
              >
                L
              </text>
              <text
                x="145"
                y="110"
                fontSize="30"
                fontWeight="900"
                fontFamily="Arial, sans-serif"
                fill="none"
                stroke="url(#logoGradientMobile)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="300"
                strokeDashoffset="300"
                textAnchor="middle"
                style={{ animation: "letterK 10s ease-in-out infinite" }}
              >
                K
              </text>
              <text
                x="165"
                y="110"
                fontSize="30"
                fontWeight="900"
                fontFamily="Arial, sans-serif"
                fill="none"
                stroke="url(#logoGradientMobile)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="250"
                strokeDashoffset="250"
                textAnchor="middle"
                style={{ animation: "letterA2 10s ease-in-out infinite" }}
              >
                A
              </text>
              <text
                x="185"
                y="110"
                fontSize="30"
                fontWeight="900"
                fontFamily="Arial, sans-serif"
                fill="none"
                stroke="url(#logoGradientMobile)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="250"
                strokeDashoffset="250"
                textAnchor="middle"
                style={{ animation: "letterN2 10s ease-in-out infinite" }}
              >
                N
              </text>
            </svg>
          </motion.div>

          {/* Animated Logo - Desktop Version */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 hidden sm:block"
          >
            <svg
              width="100%"
              height="400"
              viewBox="0 0 700 400"
              className="mx-auto w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl"
            >
              <defs>
                <linearGradient id="logoGradientDesktop" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00bcd4" />
                  <stop offset="100%" stopColor="#e91e63" />
                </linearGradient>
              </defs>

              {/* Desktop NXT Letters - Much Closer Together */}
              <text
                x="250"
                y="160"
                fontSize="140"
                fontWeight="900"
                fontFamily="Arial, sans-serif"
                fill="none"
                stroke="url(#logoGradientDesktop)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="1200"
                strokeDashoffset="1200"
                textAnchor="middle"
                style={{ animation: "letterN 10s ease-in-out infinite" }}
              >
                N
              </text>
              <text
                x="350"
                y="160"
                fontSize="140"
                fontWeight="900"
                fontFamily="Arial, sans-serif"
                fill="none"
                stroke="url(#logoGradientDesktop)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="1200"
                strokeDashoffset="1200"
                textAnchor="middle"
                style={{ animation: "letterX 10s ease-in-out infinite" }}
              >
                X
              </text>
              <text
                x="450"
                y="160"
                fontSize="140"
                fontWeight="900"
                fontFamily="Arial, sans-serif"
                fill="none"
                stroke="url(#logoGradientDesktop)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="900"
                strokeDashoffset="900"
                textAnchor="middle"
                style={{ animation: "letterT 10s ease-in-out infinite" }}
              >
                T
              </text>

              {/* Desktop BALKAN Letters - Much Closer Together */}
              <text
                x="200"
                y="280"
                fontSize="90"
                fontWeight="900"
                fontFamily="Arial, sans-serif"
                fill="none"
                stroke="url(#logoGradientDesktop)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="900"
                strokeDashoffset="900"
                textAnchor="middle"
                style={{ animation: "letterB 10s ease-in-out infinite" }}
              >
                B
              </text>
              <text
                x="260"
                y="280"
                fontSize="90"
                fontWeight="900"
                fontFamily="Arial, sans-serif"
                fill="none"
                stroke="url(#logoGradientDesktop)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="750"
                strokeDashoffset="750"
                textAnchor="middle"
                style={{ animation: "letterA1 10s ease-in-out infinite" }}
              >
                A
              </text>
              <text
                x="320"
                y="280"
                fontSize="90"
                fontWeight="900"
                fontFamily="Arial, sans-serif"
                fill="none"
                stroke="url(#logoGradientDesktop)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="600"
                strokeDashoffset="600"
                textAnchor="middle"
                style={{ animation: "letterL 10s ease-in-out infinite" }}
              >
                L
              </text>
              <text
                x="380"
                y="280"
                fontSize="90"
                fontWeight="900"
                fontFamily="Arial, sans-serif"
                fill="none"
                stroke="url(#logoGradientDesktop)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="900"
                strokeDashoffset="900"
                textAnchor="middle"
                style={{ animation: "letterK 10s ease-in-out infinite" }}
              >
                K
              </text>
              <text
                x="440"
                y="280"
                fontSize="90"
                fontWeight="900"
                fontFamily="Arial, sans-serif"
                fill="none"
                stroke="url(#logoGradientDesktop)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="750"
                strokeDashoffset="750"
                textAnchor="middle"
                style={{ animation: "letterA2 10s ease-in-out infinite" }}
              >
                A
              </text>
              <text
                x="500"
                y="280"
                fontSize="90"
                fontWeight="900"
                fontFamily="Arial, sans-serif"
                fill="none"
                stroke="url(#logoGradientDesktop)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="750"
                strokeDashoffset="750"
                textAnchor="middle"
                style={{ animation: "letterN2 10s ease-in-out infinite" }}
              >
                N
              </text>
            </svg>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
            className="text-2xl sm:text-4xl lg:text-6xl xl:text-7xl font-light tracking-wide px-4"
          >
            Digital Excellence
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
            className="text-sm sm:text-lg lg:text-xl xl:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4"
          >
            We craft exceptional digital experiences that elevate brands and drive meaningful connections.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="px-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400 text-white font-medium px-6 py-3 sm:px-8 sm:py-6 lg:px-12 lg:py-8 text-sm sm:text-lg lg:text-xl rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30 w-full sm:w-auto"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-20"
          >
            <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-light mb-4 px-4">
              What We{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Deliver</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-400/30 transition-all duration-300 h-full group hover:scale-105 hover:-translate-y-2">
                  <CardContent className="p-4 sm:p-6 lg:p-10 text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-20 lg:h-20 mx-auto mb-3 sm:mb-4 lg:mb-8 rounded-full bg-gradient-to-r from-cyan-500/20 to-pink-500/20 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                      <service.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-10 lg:w-10 text-cyan-400" />
                    </div>
                    <h3 className="text-base sm:text-lg lg:text-2xl font-medium mb-2 sm:mb-3 lg:mb-6 text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-xs sm:text-sm lg:text-lg">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-32 px-4 sm:px-6 bg-gradient-to-r from-cyan-500/5 to-pink-500/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-12">
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
                <div className="text-xl sm:text-2xl lg:text-5xl xl:text-6xl font-light bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent mb-1 sm:mb-2 lg:mb-4">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-xs sm:text-sm lg:text-lg uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 lg:py-32 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden">
              <CardContent className="p-6 sm:p-8 lg:p-16">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 mx-auto mb-4 sm:mb-6 lg:mb-10 rounded-full bg-gradient-to-r from-cyan-500/20 to-pink-500/20 flex items-center justify-center">
                  <Star className="h-6 w-6 sm:h-8 sm:w-8 lg:h-12 lg:w-12 text-cyan-400" />
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-light mb-3 sm:mb-4 lg:mb-8 text-white px-4">
                  Ready to{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                    Elevate
                  </span>{" "}
                  Your Brand?
                </h2>

                <p className="text-gray-300 mb-4 sm:mb-6 lg:mb-10 text-sm sm:text-base lg:text-xl leading-relaxed px-4">
                  Let's discuss how we can transform your digital presence and drive exceptional results.
                </p>

                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400 text-white font-medium px-6 py-3 sm:px-8 sm:py-6 lg:px-12 lg:py-8 text-sm sm:text-base lg:text-xl rounded-full transition-all duration-300 shadow-lg shadow-pink-500/20 w-full sm:w-auto"
                >
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 lg:py-16 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-xs sm:text-sm lg:text-base">
            © 2024 NXT Balkan. Crafting digital excellence.
          </p>
        </div>
      </footer>

      <style jsx>{`
        /* Faster animation cycle - 10 seconds total, no pause */
        @keyframes letterN {
          0% { stroke-dashoffset: 1200; }
          10% { stroke-dashoffset: 0; }
          70% { stroke-dashoffset: 0; }
          90% { stroke-dashoffset: -1200; }
          100% { stroke-dashoffset: -1200; }
        }
        
        @keyframes letterX {
          0% { stroke-dashoffset: 1200; }
          10% { stroke-dashoffset: 1200; }
          20% { stroke-dashoffset: 0; }
          70% { stroke-dashoffset: 0; }
          80% { stroke-dashoffset: -1200; }
          100% { stroke-dashoffset: -1200; }
        }
        
        @keyframes letterT {
          0% { stroke-dashoffset: 900; }
          20% { stroke-dashoffset: 900; }
          30% { stroke-dashoffset: 0; }
          70% { stroke-dashoffset: 0; }
          70% { stroke-dashoffset: -900; }
          100% { stroke-dashoffset: -900; }
        }
        
        @keyframes letterB {
          0% { stroke-dashoffset: 900; }
          30% { stroke-dashoffset: 900; }
          40% { stroke-dashoffset: 0; }
          60% { stroke-dashoffset: 0; }
          70% { stroke-dashoffset: -900; }
          100% { stroke-dashoffset: -900; }
        }
        
        @keyframes letterA1 {
          0% { stroke-dashoffset: 750; }
          40% { stroke-dashoffset: 750; }
          50% { stroke-dashoffset: 0; }
          55% { stroke-dashoffset: 0; }
          65% { stroke-dashoffset: -750; }
          100% { stroke-dashoffset: -750; }
        }
        
        @keyframes letterL {
          0% { stroke-dashoffset: 600; }
          50% { stroke-dashoffset: 600; }
          60% { stroke-dashoffset: 0; }
          50% { stroke-dashoffset: 0; }
          60% { stroke-dashoffset: -600; }
          100% { stroke-dashoffset: -600; }
        }
        
        @keyframes letterK {
          0% { stroke-dashoffset: 900; }
          60% { stroke-dashoffset: 900; }
          70% { stroke-dashoffset: 0; }
          45% { stroke-dashoffset: 0; }
          55% { stroke-dashoffset: -900; }
          100% { stroke-dashoffset: -900; }
        }
        
        @keyframes letterA2 {
          0% { stroke-dashoffset: 750; }
          70% { stroke-dashoffset: 750; }
          80% { stroke-dashoffset: 0; }
          40% { stroke-dashoffset: 0; }
          50% { stroke-dashoffset: -750; }
          100% { stroke-dashoffset: -750; }
        }
        
        @keyframes letterN2 {
          0% { stroke-dashoffset: 750; }
          80% { stroke-dashoffset: 750; }
          90% { stroke-dashoffset: 0; }
          35% { stroke-dashoffset: 0; }
          45% { stroke-dashoffset: -750; }
          100% { stroke-dashoffset: -750; }
        }
      `}</style>
    </div>
  )
}
