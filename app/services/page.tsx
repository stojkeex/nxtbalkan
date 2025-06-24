"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Music,
  Users,
  Megaphone,
  Globe,
  Mic,
  Headphones,
  Radio,
  TrendingUp,
  Check,
  Star,
  ArrowRight,
  Sparkles,
  Crown,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: Music,
      title: "Music Production",
      description: "Professional recording, mixing, and mastering with state-of-the-art equipment",
      features: [
        "Professional recording studios",
        "Expert mixing and mastering",
        "Beat production & composition",
        "Vocal coaching & direction",
      ],
      gradient: "from-cyan-400 to-blue-500",
      bgGradient: "from-cyan-400/10 to-blue-500/10",
    },
    {
      icon: Users,
      title: "Artist Management",
      description: "Comprehensive career development and strategic planning for artists",
      features: [
        "Career strategy development",
        "Brand building & consulting",
        "Tour booking & management",
        "Contract negotiation",
      ],
      gradient: "from-purple-400 to-pink-500",
      bgGradient: "from-purple-400/10 to-pink-500/10",
    },
    {
      icon: Megaphone,
      title: "Music Promotion",
      description: "Digital marketing campaigns that get your music heard worldwide",
      features: [
        "Spotify playlist placement",
        "Social media marketing",
        "YouTube optimization",
        "TikTok viral campaigns",
      ],
      gradient: "from-orange-400 to-red-500",
      bgGradient: "from-orange-400/10 to-red-500/10",
    },
    {
      icon: Globe,
      title: "Balkan Music Portal",
      description: "Your gateway to discovering and promoting authentic Balkan talent",
      features: [
        "Artist discovery platform",
        "Music streaming integration",
        "Cultural event promotion",
        "Industry networking",
      ],
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-400/10 to-emerald-500/10",
    },
  ]

  const pricingPackages = [
    {
      title: "Starter",
      price: "149",
      currency: "€",
      description: "Perfect for beginners taking their first professional step",
      features: [
        "Basic music production (3 min)",
        "Songwriting assistance",
        "1 promo photo",
        "Basic social promotion",
        "30-min consultation",
      ],
      delivery: "7-10 days",
      featured: false,
      gradient: "from-gray-400 to-gray-600",
    },
    {
      title: "Pro Artist",
      price: "499",
      currency: "€",
      description: "For serious artists ready to grow their brand",
      features: [
        "Full professional production",
        "Recording coaching",
        "Music video (60s)",
        "7-day content plan",
        "Active promotion campaign",
        "PR email outreach",
        "1-month management",
      ],
      delivery: "10-15 days",
      featured: true,
      gradient: "from-cyan-400 to-purple-500",
    },
    {
      title: "Elite Star",
      price: "1499",
      currency: "€",
      description: "All-in-one package for serious music careers",
      features: [
        "2 full productions",
        "High-quality music video",
        "Professional photoshoot",
        "30-day campaign",
        "Paid ads (€50 included)",
        "PR article & interview",
        "Live show organization",
      ],
      delivery: "20-30 days",
      featured: false,
      gradient: "from-yellow-400 to-orange-500",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "Understanding your vision, goals, and unique sound",
      icon: Mic,
      color: "text-cyan-400",
    },
    {
      step: "02",
      title: "Strategy",
      description: "Developing a comprehensive plan for your journey",
      icon: TrendingUp,
      color: "text-purple-400",
    },
    {
      step: "03",
      title: "Production",
      description: "Bringing your music to life with world-class production",
      icon: Headphones,
      color: "text-pink-400",
    },
    {
      step: "04",
      title: "Promotion",
      description: "Strategic marketing campaigns to reach your audience",
      icon: Radio,
      color: "text-orange-400",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge className="mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold px-4 py-2">
              🎵 Professional Music Services
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
              Elevate Your Music
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              From studio to stage, we provide comprehensive solutions for every aspect of your musical journey with the
              NXT Balkan touch.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="h-5 w-5 mr-2" />
                Get Started Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                View Our Work
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Professional music services designed to take your career to the next level
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 h-full group hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.bgGradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="h-6 w-6 text-white" />
                    </div>

                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>

                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <div
                            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-3 flex-shrink-0`}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 px-4 bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Choose Your Package
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Professional packages designed for every stage of your music career
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {pricingPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${pkg.featured ? "md:scale-105" : ""}`}
              >
                {pkg.featured && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl blur opacity-30" />
                )}

                <Card
                  className={`relative bg-gray-900/80 border-gray-800 h-full ${pkg.featured ? "border-cyan-400/50" : ""}`}
                >
                  <CardContent className="p-6">
                    {pkg.featured && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold px-3 py-1">
                          <Crown className="h-3 w-3 mr-1" />
                          Most Popular
                        </Badge>
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <h3
                        className={`text-2xl font-bold mb-2 ${pkg.featured ? "bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent" : "text-white"}`}
                      >
                        {pkg.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>

                      <div className="flex items-baseline justify-center mb-2">
                        <span className="text-sm text-gray-400">{pkg.currency}</span>
                        <span
                          className={`text-4xl font-bold ml-1 ${pkg.featured ? "bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent" : "text-white"}`}
                        >
                          {pkg.price}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">Delivery: {pkg.delivery}</p>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full ${
                        pkg.featured
                          ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-black hover:scale-105"
                          : "bg-white text-black hover:bg-gray-200"
                      } transition-all duration-300 font-semibold`}
                    >
                      {pkg.featured && <Zap className="h-4 w-4 mr-2" />}
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Process
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A proven 4-step approach to transform your musical vision into reality
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-gray-900 border border-gray-700 rounded-2xl flex items-center justify-center group-hover:border-gray-600 transition-all duration-300 group-hover:scale-110">
                    <step.icon className={`h-7 w-7 ${step.color}`} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 text-black rounded-full flex items-center justify-center text-xs font-bold">
                    {step.step}
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-900/50 to-black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700 overflow-hidden">
              <CardContent className="p-8 md:p-12 text-center relative">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-500/5" />

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl mb-6">
                    <Star className="h-8 w-8 text-black" />
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Ready to Elevate Your Music?
                  </h2>

                  <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Join hundreds of artists who have transformed their careers with NXT Balkan. Let's create something
                    extraordinary together.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold hover:scale-105 transition-all duration-300 px-8"
                      >
                        <Sparkles className="h-5 w-5 mr-2" />
                        Start Your Journey
                      </Button>
                    </Link>
                    <Link href="/join-us">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-gray-600 text-white hover:bg-white hover:text-black transition-all duration-300 px-8"
                      >
                        Submit Demo
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Button>
                    </Link>
                  </div>

                  <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      Free Consultation
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      Professional Quality
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      Fast Delivery
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
