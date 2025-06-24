"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Youtube,
  Twitter,
  Send,
  MessageCircle,
  Sparkles,
  ArrowRight,
  Star,
  Globe,
  Users,
  Music,
} from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["Belgrade, Serbia", "Knez Mihailova 42", "11000 Belgrade"],
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+381 11 123 4567", "+381 64 123 4567", "Available 24/7"],
      gradient: "from-purple-400 to-pink-500",
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["info@nxtbalkan.com", "artists@nxtbalkan.com", "press@nxtbalkan.com"],
      gradient: "from-orange-400 to-red-500",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 - 18:00", "Sat: 10:00 - 16:00", "Sun: Closed"],
      gradient: "from-green-400 to-emerald-500",
    },
  ]

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@nxtbalkan",
      url: "https://instagram.com/nxt.balkan",
      gradient: "from-pink-400 to-purple-500",
    },
    {
      icon: Youtube,
      name: "YouTube",
      handle: "NXT Balkan Official",
      url: "#",
      gradient: "from-red-400 to-pink-500",
    },
    {
      icon: Twitter,
      name: "Twitter",
      handle: "@nxtbalkan",
      url: "#",
      gradient: "from-blue-400 to-cyan-500",
    },
  ]

  const quickStats = [
    { label: "Response Time", value: "< 24h", icon: Clock, color: "text-cyan-400" },
    { label: "Team Members", value: "15+", icon: Users, color: "text-purple-400" },
    { label: "Languages", value: "5+", icon: Globe, color: "text-pink-400" },
    { label: "Projects", value: "200+", icon: Music, color: "text-orange-400" },
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
              💬 Let's Connect
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
              Get In Touch
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Ready to start your musical journey with us? We'd love to hear from you. Let's create something
              extraordinary together and bring your vision to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold hover:scale-105 transition-all duration-300"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                Schedule Call
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickStats.map((stat, index) => (
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

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Send Us a Message
                  </h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300">First Name</label>
                        <Input
                          className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-cyan-400"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300">Last Name</label>
                        <Input
                          className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-cyan-400"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">Email Address</label>
                      <Input
                        type="email"
                        className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-cyan-400"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">Subject</label>
                      <select className="w-full bg-gray-800/50 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:border-cyan-400">
                        <option value="" className="bg-gray-800">
                          Select a subject
                        </option>
                        <option value="general" className="bg-gray-800">
                          General Inquiry
                        </option>
                        <option value="artist" className="bg-gray-800">
                          Artist Management
                        </option>
                        <option value="production" className="bg-gray-800">
                          Music Production
                        </option>
                        <option value="promotion" className="bg-gray-800">
                          Music Promotion
                        </option>
                        <option value="press" className="bg-gray-800">
                          Press & Media
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                      <Textarea
                        rows={6}
                        className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-cyan-400 resize-none"
                        placeholder="Tell us about your project, goals, or any questions you have..."
                      />
                    </div>

                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold hover:scale-105 transition-all duration-300"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Info Cards */}
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}
                        >
                          <info.icon className="h-6 w-6 text-black" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2 text-white">{info.title}</h3>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-gray-300 text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Media */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Follow Us
                  </h3>
                  <div className="space-y-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 group hover:scale-105"
                      >
                        <div
                          className={`w-10 h-10 bg-gradient-to-r ${social.gradient} rounded-full flex items-center justify-center`}
                        >
                          <social.icon className="h-5 w-5 text-black" />
                        </div>
                        <div>
                          <div className="font-semibold text-white">{social.name}</div>
                          <div className="text-gray-400 text-sm">{social.handle}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Visit Studio */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Visit Our Studio</h3>
                  <p className="text-gray-300 mb-4">
                    Located in the heart of Belgrade, our studio is open for visits by appointment.
                  </p>
                  <Button
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:bg-cyan-400 hover:text-black bg-transparent"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Schedule a Visit
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
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
                    Let's Create Together
                  </h2>

                  <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Every great project starts with a conversation. Whether you're an artist, producer, or music
                    enthusiast, we're here to help bring your vision to life.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold hover:scale-105 transition-all duration-300 px-8"
                    >
                      <Sparkles className="h-5 w-5 mr-2" />
                      Start Your Project
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-gray-600 text-white hover:bg-white hover:text-black transition-all duration-300 px-8"
                    >
                      View Our Work
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </div>

                  <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-cyan-400" />
                      Quick Response
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-purple-400" />
                      Expert Team
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-pink-400" />
                      Global Reach
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
