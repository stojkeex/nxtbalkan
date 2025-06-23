"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Music, Users, Zap } from "lucide-react"
import Link from "next/link"
import { InteractiveBackground } from "@/components/interactive-background"
import { AnimatedBackground } from "@/components/animated-background"
import { Card3D } from "@/components/3d-card"
import { Testimonials } from "@/components/testimonials"
import { BannerAd, NativeAd, MobileBannerAd } from "@/components/ad-placeholder"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <AnimatedBackground />
      <InteractiveBackground />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4">
        <div className="text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl md:text-8xl font-bold mb-4 tracking-tight gradient-text-neon"
          >
            NXT
            <br />
            BALKAN
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300"
          >
            Where tradition meets innovation. We produce, manage, and promote the next generation of Balkan artists.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <Link href="/artists">
              <Button
                size="lg"
                className="primary-button animated-button magnetic-button ripple-button px-6 py-3 text-lg font-semibold group relative"
              >
                <span className="shimmer"></span>
                <span className="flex items-center relative z-10">
                  Discover Artists
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
            <Link href="/join-us">
              <Button
                variant="outline"
                size="lg"
                className="outline-button animated-button magnetic-button ripple-button px-6 py-3 text-lg font-semibold group relative"
              >
                <span className="shimmer"></span>
                <span className="flex items-center relative z-10">
                  Submit Demo
                  <Music className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                </span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mobile Banner Ad */}
      <div className="px-4 py-4 md:hidden">
        <MobileBannerAd />
      </div>

      {/* Mission Section - Tight spacing */}
      <section className="py-12 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text-alt">OUR MISSION</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              To bridge the gap between traditional Balkan music and the global stage, empowering artists with
              cutting-edge production, strategic management, and innovative promotion techniques.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Music,
                title: "Production",
                description: "State-of-the-art studio facilities and expert producers crafting the perfect sound.",
              },
              {
                icon: Users,
                title: "Management",
                description: "Comprehensive career development, branding, and strategic planning for our artists.",
              },
              {
                icon: Zap,
                title: "Promotion",
                description: "Digital marketing mastery across Spotify, YouTube, TikTok, and beyond.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <Card3D className="professional-card p-6 rounded-2xl hover-card">
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 border-2 border-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 hover-target"
                    whileHover={{ rotateY: 180, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="h-6 w-6" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Ad - Tight spacing */}
      <div className="px-4 py-4">
        <div className="max-w-7xl mx-auto">
          <BannerAd />
        </div>
      </div>

      {/* Testimonials Section - Tight spacing */}
      <Testimonials className="py-12" />

      {/* Native Ad - Tight spacing */}
      <div className="px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <NativeAd />
        </div>
      </div>

      {/* CTA Section - Tight spacing */}
      <section className="py-12 px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <Card3D className="professional-card border border-white/20 rounded-2xl p-8 backdrop-blur-sm hover-card">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 gradient-text-neon"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              Ready to Join the Revolution?
            </motion.h2>
            <p className="text-xl text-gray-300 mb-8">
              Whether you're an artist looking for representation or a music lover seeking the next big sound, NXT
              Balkan is your gateway to the future of music.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/about">
                <Button
                  size="lg"
                  className="primary-button animated-button magnetic-button ripple-button px-6 py-3 text-lg font-semibold group relative"
                >
                  <span className="shimmer"></span>
                  <span className="flex items-center relative z-10">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="outline-button animated-button magnetic-button ripple-button px-6 py-3 text-lg font-semibold group relative"
                >
                  <span className="shimmer"></span>
                  <span className="flex items-center relative z-10">
                    Get In Touch
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
            </div>
          </Card3D>
        </motion.div>
      </section>
    </div>
  )
}
