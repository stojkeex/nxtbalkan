"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, TrendingUp, Zap } from "lucide-react"

export default function HomePage() {
  const services = [
    {
      icon: Users,
      title: "Social Media Management",
      description: "We craft content and strategies that drive engagement and build your online presence.",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Results-driven campaigns that amplify your reach, conversions, and ROI.",
    },
    {
      icon: Zap,
      title: "Brand Strategy",
      description: "We create bold, modern brands that resonate and stand out in crowded markets.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-black">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src="/nxtbalkancolored2.png"
          alt="NXT Balkan Logo"
          className="w-60 md:w-72 lg:w-80 mb-8"
        />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-light"
        >
          Digital Excellence<br />
          <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent font-semibold">
            Redefined
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-gray-400 text-lg sm:text-xl max-w-2xl mt-6"
        >
          We design digital experiences that connect, inspire, and deliver real results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-10"
        >
          <Button size="lg" className="rounded-full px-8 py-4 text-lg font-medium bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400 transition shadow-lg shadow-cyan-500/20">
            Get Started <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </section>

      {/* Services */}
      <section className="py-24 bg-black px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-light text-white mb-16"
          >
            Our <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent font-medium">Services</span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/80 border border-gray-800 hover:border-cyan-500/50 transition-all">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 flex justify-center items-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500/20 to-pink-500/20">
                      <service.icon className="text-cyan-400 w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-24 bg-black text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl font-light text-white mb-6">
            Ready to <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent font-medium">elevate</span> your digital presence?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Let's build something extraordinary together.
          </p>
          <Button size="lg" className="rounded-full px-8 py-4 text-lg font-medium bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400 transition shadow-lg">
            Contact Us <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </section>
    </div>
  )
}
