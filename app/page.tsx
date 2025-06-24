"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Flame, UserCheck, Sparkles, ShieldCheck, ArrowRight } from "lucide-react"

const features = [
  {
    title: "Social Growth",
    description: "Custom content, algorithms & story-driven campaigns that grow your tribe.",
    icon: Flame,
  },
  {
    title: "Full Strategy",
    description: "End-to-end digital direction: from branding to traffic to conversion.",
    icon: UserCheck,
  },
  {
    title: "Design Systems",
    description: "Visuals that adapt, breathe, and convert — for web, mobile, and beyond.",
    icon: Sparkles,
  },
  {
    title: "Scalable Ads",
    description: "Performance-focused campaigns that actually scale.",
    icon: ShieldCheck,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans tracking-tight relative">
      {/* Background Blur Layer */}
      <div className="absolute inset-0 z-0 bg-black bg-opacity-80 backdrop-blur-2xl" />

      {/* HERO */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
        >
          The Future is Crafted
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-xl text-gray-300 max-w-2xl"
        >
          We build brands, products & stories that don’t just live online – they lead it.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10"
        >
          <Button className="bg-white/10 backdrop-blur-xl border border-white/10 text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all text-lg shadow-lg">
            Work With Us <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="py-28 px-6 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-white"
          >
            What We Do
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border border-white/10 backdrop-blur-lg shadow-xl transition-all hover:scale-105 hover:shadow-cyan-500/30">
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-4">
                      <feature.icon className="text-cyan-400 w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="relative z-10 py-24 px-6 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            Why NXT Balkan?
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            Because we merge Balkan boldness with global elegance. We don’t just follow trends — we define them.
          </p>
          <Button className="bg-white/10 backdrop-blur-xl border border-white/10 text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all text-lg shadow-lg">
            Learn About Our Process
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-28 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            Let’s make something iconic.
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Schedule a call with our lead team – and let's start shaping your digital dominance.
          </p>
          <Button className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400 text-white px-8 py-4 rounded-full text-lg shadow-lg transition-all">
            Book Discovery Call
          </Button>
        </motion.div>
      </section>
    </div>
  )
}
