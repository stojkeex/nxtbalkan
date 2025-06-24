"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Music, Users, Zap, Star, Sparkles, TrendingUp, Award, Globe, Heart } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const services = [
    {
      icon: Music,
      title: "Production",
      description: "State-of-the-art studio facilities and expert producers crafting the perfect sound.",
      gradient: "from-cyan-400 to-blue-500",
      bgGradient: "from-cyan-400/10 to-blue-500/10",
    },
    {
      icon: Users,
      title: "Management",
      description: "Comprehensive career development, branding, and strategic planning for our artists.",
      gradient: "from-purple-400 to-pink-500",
      bgGradient: "from-purple-400/10 to-pink-500/10",
    },
    {
      icon: Zap,
      title: "Promotion",
      description: "Digital marketing mastery across Spotify, YouTube, TikTok, and beyond.",
      gradient: "from-orange-400 to-red-500",
      bgGradient: "from-orange-400/10 to-red-500/10",
    },
  ]

  const stats = [
    { label: "Artists Managed", value: "100+", icon: Users, color: "text-cyan-400" },
    { label: "Countries Reached", value: "50+", icon: Globe, color: "text-purple-400" },
    { label: "Awards Won", value: "25+", icon: Award, color: "text-pink-400" },
    { label: "Years Experience", value: "4+", icon: TrendingUp, color: "text-orange-400" },
  ]

  const testimonials = [
    {
      name: "Marko Petrović",
      role: "Recording Artist",
      content: "NXT Balkan transformed my career. Their innovative approach and dedication are unmatched.",
      rating: 5,
    },
    {
      name: "Ana Jovanović",
      role: "Music Producer",
      content: "Working with NXT Balkan has been incredible. They truly understand the Balkan music scene.",
      rating: 5,
    },
    {
      name: "Stefan Nikolić",
      role: "Singer-Songwriter",
      content: "The best decision I made was joining NXT Balkan. They've helped me reach global audiences.",
      rating: 5,
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
           

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 gradient-text leading-tight tracking-tight">
            NXT
            <br />
            BALKAN
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Where tradition meets innovation. We produce, manage, and promote the next generation of Balkan artists,
              bridging cultures through the universal language of music.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/artists">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold hover:scale-105 transition-all duration-300 px-8"
                >
                  <Music className="h-5 w-5 mr-2" />
                  Discover Artists
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link href="/join-us">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-white hover:text-black transition-all duration-300 px-8"
                >
                  <Sparkles className="h-5 w-5 mr-2" />
                  Submit Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 text-center hover:border-gray-700 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-4">
                    <stat.icon className={`h-6 w-6 ${stat.color} mx-auto mb-2`} />
                    <div className="text-xl md:text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Our Mission
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Bridging traditional Balkan music with the global stage through innovation and passion
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 h-full group-hover:scale-[1.02]">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.bgGradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            What Artists Say
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Hear from the talented artists who trust us with their musical journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 h-full hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-4 italic">"{testimonial.content}"</p>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
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
               <div className="flex justify-center mb-6"> {/* Dodan flex container za centriranje */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl">
              <Star className="h-8 w-8 text-black" />
              </div>
               </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
                  Ready to Join the Revolution?
                  </h2>

                  <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Whether you're an artist looking for representation or a music lover seeking the next big sound, NXT
                    Balkan is your gateway to the future of music.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/about">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold hover:scale-105 transition-all duration-300 px-8"
                      >
                        <Heart className="h-5 w-5 mr-2" />
                        Learn More About Us
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-gray-600 text-white hover:bg-white hover:text-black transition-all duration-300 px-8"
                      >
                        Get In Touch
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Button>
                    </Link>
                  </div>

                  <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Music className="h-4 w-4 text-cyan-400" />
                      Professional Production
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-purple-400" />
                      Artist Management
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-pink-400" />
                      Global Promotion
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
