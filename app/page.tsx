"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, TrendingUp, Zap } from "lucide-react"

export default function HomePage() {
  const services = [
    {
      icon: Users,
      title: "Social Media Strategy",
      description: "Tailored campaigns that amplify engagement and build lasting communities.",
    },
    {
      icon: TrendingUp,
      title: "Performance Marketing",
      description: "Precision-targeted ads with clear KPIs, built for ROI and rapid growth.",
    },
    {
      icon: Zap,
      title: "Creative Branding",
      description: "We design magnetic brand identities that resonate and convert.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white font-sans tracking-tight">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90 z-0" />
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src="/nxtbalkancolored2.png"
          alt="NXT Balkan Logo"
          className="w-64 md:w-72 lg:w-80 mb-10 z-10 relative"
        />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent z-10"
        >
          We Are the Digital Shift
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl z-10"
        >
          A creative digital agency for bold brands that dare to lead.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-10 z-10"
        >
          <Button size="lg" className="rounded-full px-8 py-4 text-lg font-semibold bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400 shadow-xl shadow-cyan-500/20 transition-all">
            Let’s Build Something <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="py-28 px-6 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-12"
          >
            Our Expertise
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border border-white/10 hover:border-cyan-500/40 backdrop-blur-lg transition-all duration-300 group hover:scale-[1.02] shadow-xl">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="flex justify-center items-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400/20 to-pink-500/20 mx-auto group-hover:rotate-6 transition-all">
                      <service.icon className="text-cyan-400 w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <p className="text-gray-400 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 bg-gradient-to-br from-black via-gray-900 to-black text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            Ready to launch your brand into the future?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Let’s co-create experiences that move people and markets.
          </p>
          <Button size="lg" className="rounded-full px-8 py-4 text-lg font-semibold bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400 shadow-xl transition">
            Contact Our Team <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </section>
    </div>
  )
}
