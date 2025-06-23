"use client"

import { motion } from "framer-motion"
import { ScrollProgress } from "@/components/scroll-progress"
import { AnimatedBackground } from "@/components/animated-background"
import { Button } from "@/components/ui/button"
import { Music, Users, Megaphone, Globe, Mic, Headphones, Radio, TrendingUp, Check, X } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: Music,
      title: "Music Production",
      description: "State-of-the-art recording, mixing, and mastering services",
      features: [
        "Professional recording studios",
        "Expert mixing and mastering",
        "Beat production and composition",
        "Vocal coaching and direction",
        "Live session recording",
      ],
      color: "from-white to-gray-300",
    },
    {
      icon: Users,
      title: "Artist Management",
      description: "Comprehensive career development and strategic planning",
      features: [
        "Career strategy development",
        "Brand building and image consulting",
        "Tour booking and management",
        "Contract negotiation",
        "Financial planning and budgeting",
      ],
      color: "from-gray-300 to-white",
    },
    {
      icon: Megaphone,
      title: "Music Promotion",
      description: "Digital marketing and promotional campaigns",
      features: [
        "Spotify playlist placement",
        "Social media marketing",
        "YouTube channel optimization",
        "TikTok viral campaigns",
        "Press and media relations",
      ],
      color: "from-white to-gray-400",
    },
    {
      icon: Globe,
      title: "Balkan Music Portal",
      description: "Your gateway to discovering and promoting Balkan talent",
      features: [
        "Artist discovery platform",
        "Music streaming integration",
        "Cultural event promotion",
        "Industry networking",
        "Educational resources",
      ],
      color: "from-gray-400 to-white",
    },
  ]

  const pricingPackages = [
    {
      title: "Starter Pack",
      price: "€149",
      description: "For beginners who want to take their first professional step into the music world.",
      features: [
        { name: "1x basic music production (up to 3 minutes)", included: false },
        { name: "Basic songwriting / arrangement", included: true },
        { name: "1x promo photo for social media", included: true },
        { name: "Basic IG/FB promotion (1 post + 1 story)", included: false },
        { name: "30-minute music career consultation", included: false },
      ],
      delivery: "7–10 days",
      featured: false,
    },
    {
      title: "Pro Artist Pack",
      price: "€499",
      description: "For serious artists looking to grow their brand and music quality.",
      features: [
        { name: "Full professional production (beat + mix & master)", included: true },
        { name: "Songwriting & recording coaching", included: true },
        { name: "1x music video (basic production, up to 60s)", included: true },
        { name: "Social media content plan (IG, TikTok, YT – 7 days)", included: true },
        { name: "Active promotion (3 posts, 5 stories, 1 shoutout)", included: true },
        { name: "PR email campaign (pitching to 5 platforms/media)", included: true },
        { name: "Basic artist management plan (1 month)", included: true },
      ],
      delivery: "10–15 days",
      featured: true,
    },
    {
      title: "Elite Star Pack",
      price: "€1499",
      description: "All-in-one package for artists ready to go all-in on their music career.",
      features: [
        { name: "Full production (up to 2 songs: beat, vocals, mix/master)", included: true },
        { name: "High-quality music video (location + editing, up to 2 min)", included: true },
        { name: "Photoshoot for cover, press kit, and social media", included: true },
        { name: "Full TikTok & Instagram campaign (30-day content)", included: true },
        { name: "Paid promo campaign (meta ads up to €50 included)", included: true },
        { name: "PR article + potential interview on music media", included: true },
        { name: "Personalized artist management (1 month)", included: true },
        { name: "1 live show / showcase organization (if desired)", included: true },
      ],
      delivery: "20–30 days",
      featured: false,
    },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We start by understanding your vision, goals, and unique sound.",
      icon: Mic,
    },
    {
      step: "02",
      title: "Strategy",
      description: "Develop a comprehensive plan tailored to your artistic journey.",
      icon: TrendingUp,
    },
    {
      step: "03",
      title: "Production",
      description: "Bring your music to life with our world-class production team.",
      icon: Headphones,
    },
    {
      step: "04",
      title: "Promotion",
      description: "Launch your music to the world with strategic marketing campaigns.",
      icon: Radio,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <ScrollProgress />
      <AnimatedBackground />

      <div className="pt-32 pb-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-8 gradient-text">OUR SERVICES</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From studio to stage, we provide comprehensive solutions for every aspect of your musical journey.
            </p>
          </motion.div>

          {/* Pricing Packages Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text-neon">Our Packages</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPackages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative ${pkg.featured ? "scale-105 z-10" : ""}`}
                >
                  {pkg.featured && (
                    <div className="absolute -top-3 -left-3 -right-3 -bottom-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-md opacity-30 z-0"></div>
                  )}
                  <div className={`professional-card p-8 rounded-xl h-full relative z-10 ${pkg.featured ? "border-2 border-white/20 glow-border" : "border border-white/10"}`}>
                    <div className="mb-6">
                      <h3 className={`text-2xl font-bold mb-2 ${pkg.featured ? "gradient-text-neon" : "text-white"}`}>{pkg.title}</h3>
                      <p className="text-gray-400 mb-4">{pkg.description}</p>
                      <div className="text-4xl font-bold gradient-text">{pkg.price}</div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          {feature.included ? (
                            <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          ) : (
                            <X className="h-5 w-5 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                          )}
                          <span className={feature.included ? "text-gray-100" : "text-gray-500"}>{feature.name}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="text-sm text-gray-400 mt-auto">
                      <p>Delivery time: <span className="text-white">{pkg.delivery}</span></p>
                    </div>

                    <Button
                      className="w-full mt-6 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                    >
                      Get Started
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Services Grid */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="professional-card p-8 rounded-2xl hover-lift glow-border h-full">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-white/20 to-white/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 glow-border">
                        <service.icon className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2 glow-text">{service.title}</h3>
                        <p className="text-gray-400">{service.description}</p>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text-alt">Our Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                      <step.icon className="h-8 w-8" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="professional-card p-16 rounded-2xl glow-border">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text-neon">Ready to Elevate Your Music?</h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Whether you're an emerging artist or an established act, we have the expertise and resources to take
                your music to the next level.
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-gray-200 transition-all duration-300 px-8 py-4 text-lg font-semibold"
                  >
                    Get Started Today
                  </Button>
                </Link>
                <Link href="/join-us">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 text-lg font-semibold bg-transparent"
                  >
                    Submit Your Demo
                  </Button>
                </Link>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}
