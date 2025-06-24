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

const testimonials = [
  {
    name: "Maja T.",
    role: "CEO, NordicFit",
    text: "They took our digital presence from static to cinematic. 10/10 execution.",
  },
  {
    name: "Igor B.",
    role: "Founder, ScaleRight",
    text: "True professionals. Delivered brand, voice, and viral campaigns on time and on point.",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans tracking-tight relative overflow-x-hidden">
      {/* Background Blur Layer */}
      <div className="absolute inset-0 z-0 bg-black bg-opacity-80 backdrop-blur-2xl" />

      {/* NAVBAR */}
      <nav className="fixed z-20 w-full top-0 px-8 py-6 flex justify-between items-center backdrop-blur-md bg-black/50 border-b border-white/10">
        <div className="text-2xl font-bold text-white">NXT Balkan</div>
        <div className="space-x-6">
          <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
          <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
          <a href="#testimonials" className="text-gray-300 hover:text-white transition">Testimonials</a>
          <Button className="bg-white/10 backdrop-blur-xl text-white px-6 py-2 rounded-full border border-white/10 hover:bg-white/20 transition">Contact</Button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6 pt-36">
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
      <section id="features" className="py-28 px-6 relative z-10">
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
                <Card className="bg-white/5 border border-white/10 backdrop-blur-lg shadow-xl hover:scale-105 hover:shadow-cyan-500/30 transition-all">
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

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-28 px-6 bg-black relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.3 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-xl"
              >
                <p className="text-lg text-gray-300 mb-4">“{testimonial.text}”</p>
                <p className="text-sm text-gray-500">— {testimonial.name}, {testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-6 border-t border-white/10 bg-black/80 backdrop-blur-xl text-gray-400 text-center relative z-10">
        <p className="text-sm">© {new Date().getFullYear()} NXT Balkan. All rights reserved.</p>
      </footer>
    </div>
  )
}
