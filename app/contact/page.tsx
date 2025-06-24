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
  Linkedin,
  Twitter,
  Send,
  MessageCircle,
  Sparkles,
  ArrowRight,
  Star,
  Globe,
  Users,
  Target,
} from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["Ljubljana, Slovenia", "Trubarjeva cesta 25", "1000 Ljubljana"],
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+386 1 234 5678", "+386 40 123 456", "Available 9:00-18:00"],
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["info@nxtbalkan.com", "projects@nxtbalkan.com", "support@nxtbalkan.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 - 18:00", "Sat: 10:00 - 16:00", "Sun: Closed"],
    },
  ]

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@nxt.balkan",
      url: "https://instagram.com/nxt.balkan",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      handle: "NXT Balkan",
      url: "#",
    },
    {
      icon: Twitter,
      name: "Twitter",
      handle: "@nxtbalkan",
      url: "#",
    },
  ]

  const quickStats = [
    { label: "Response Time", value: "< 24h", icon: Clock, color: "text-cyan-400" },
    { label: "Team Members", value: "15+", icon: Users, color: "text-purple-400" },
    { label: "Languages", value: "5+", icon: Globe, color: "text-pink-400" },
    { label: "Projects", value: "200+", icon: Target, color: "text-orange-400" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 bg-gradient-to-br from-cyan-500/5 via-black to-pink-500/5">
        <div className="max-w-7xl mx-auto text-center space-y-6 sm:space-y-8 lg:space-y-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="mb-6 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-medium px-4 py-2 text-sm">
              Let's Connect
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-6 px-4">
              <span className="text-white">Get In</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent font-medium">
                Touch
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 px-4">
              Ready to transform your digital presence? We'd love to hear from you. Let's create something extraordinary
              together and bring your vision to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400 text-white font-medium px-8 py-4 text-lg rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/20"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 text-lg rounded-full"
              >
                Schedule Call
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-cyan-500/5 to-pink-500/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {quickStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-pink-500/20 flex items-center justify-center">
                  <stat.icon className={`h-6 w-6 sm:h-8 sm:w-8 ${stat.color}`} />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-light bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/80 border border-gray-800">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-light mb-6 text-white">
                    Send Us a{" "}
                    <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                      Message
                    </span>
                  </h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300">First Name</label>
                        <Input
                          className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-cyan-400 rounded-lg"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300">Last Name</label>
                        <Input
                          className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-cyan-400 rounded-lg"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">Email Address</label>
                      <Input
                        type="email"
                        className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-cyan-400 rounded-lg"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">Subject</label>
                      <select className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-400">
                        <option value="" className="bg-gray-800">
                          Select a subject
                        </option>
                        <option value="general" className="bg-gray-800">
                          General Inquiry
                        </option>
                        <option value="web" className="bg-gray-800">
                          Web Development
                        </option>
                        <option value="marketing" className="bg-gray-800">
                          Digital Marketing
                        </option>
                        <option value="branding" className="bg-gray-800">
                          Brand Strategy
                        </option>
                        <option value="consultation" className="bg-gray-800">
                          Free Consultation
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                      <Textarea
                        rows={6}
                        className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-cyan-400 resize-none rounded-lg"
                        placeholder="Tell us about your project, goals, or any questions you have..."
                      />
                    </div>

                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400 text-white font-medium hover:scale-105 transition-all duration-300 rounded-full"
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
                    className="bg-gray-900/80 border border-gray-800 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-2 text-white">{info.title}</h3>
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
              <Card className="bg-gray-900/80 border border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-light mb-4 text-white">
                    Follow{" "}
                    <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Us</span>
                  </h3>
                  <div className="space-y-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-cyan-400/30 transition-all duration-300 group hover:scale-105"
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
                          <social.icon className="h-5 w-5 text-cyan-400" />
                        </div>
                        <div>
                          <div className="font-medium text-white">{social.name}</div>
                          <div className="text-gray-400 text-sm">{social.handle}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Visit Office */}
              <Card className="bg-gray-900/80 border border-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-white">Visit Our Office</h3>
                  <p className="text-gray-300 mb-4">
                    Located in the heart of Ljubljana, our office is open for meetings by appointment.
                  </p>
                  <Button
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:bg-cyan-400 hover:text-black bg-transparent rounded-full"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Schedule a Meeting
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 bg-gradient-to-r from-cyan-500/5 to-pink-500/5">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900/80 border border-gray-800">
              <CardContent className="p-8 sm:p-12 lg:p-16">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8 rounded-full bg-gradient-to-r from-cyan-500/20 to-pink-500/20 flex items-center justify-center">
                  <Star className="h-8 w-8 sm:h-10 sm:w-10 text-cyan-400" />
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-white">
                  Let's{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                    Create Together
                  </span>
                </h2>

                <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
                  Every great project starts with a conversation. Whether you're a startup, established business, or
                  entrepreneur, we're here to help bring your digital vision to life.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400 text-white font-medium px-8 py-4 text-lg rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/20"
                  >
                    <Sparkles className="h-5 w-5 mr-2" />
                    Start Your Project
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-600 text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 text-lg rounded-full"
                  >
                    View Our Work
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </div>

                <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-gray-400">
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
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
