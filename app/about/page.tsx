"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Award,
  Globe,
  Zap,
  Users,
  Music,
  TrendingUp,
  Star,
  ArrowRight,
  Sparkles,
  Crown,
  Heart,
  Target,
} from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const milestones = [
    {
      year: "2020",
      title: "Foundation",
      description: "NXT Balkan was founded with a vision to revolutionize the music industry",
      icon: Star,
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      year: "2021",
      title: "First Studio",
      description: "Opened our state-of-the-art recording facility in Belgrade",
      icon: Music,
      gradient: "from-purple-400 to-pink-500",
    },
    {
      year: "2022",
      title: "International Expansion",
      description: "Partnered with global streaming platforms and labels",
      icon: Globe,
      gradient: "from-orange-400 to-red-500",
    },
    {
      year: "2023",
      title: "AI Integration",
      description: "Launched our AI-powered music discovery and promotion tools",
      icon: Zap,
      gradient: "from-green-400 to-emerald-500",
    },
    {
      year: "2024",
      title: "Global Recognition",
      description: "Recognized as the leading Balkan music agency worldwide",
      icon: Award,
      gradient: "from-yellow-400 to-orange-500",
    },
  ]

  const team = [
    {
      name: "M. Stojanović",
      role: "Founder & CEO",
      bio: "Visionary leader with 15+ years in the music industry, passionate about bridging traditional and modern sounds.",
      gradient: "from-cyan-400 to-purple-500",
      initials: "MS",
    },
    {
      name: "K. Kruljac",
      role: "CEO",
      bio: "Talent scout extraordinaire with an ear for discovering the next big Balkan stars.",
      gradient: "from-purple-400 to-pink-500",
      initials: "KK",
    },
    {
      name: "R. Kavčič",
      role: "Owner",
      bio: "Award-winning producer who has worked with top artists across the Balkans and beyond.",
      gradient: "from-orange-400 to-red-500",
      initials: "RK",
    },
  ]

  const stats = [
    { label: "Countries Reached", value: "50+", icon: Globe, color: "text-cyan-400" },
    { label: "Awards Won", value: "25+", icon: Award, color: "text-purple-400" },
    { label: "Artists Managed", value: "100+", icon: Users, color: "text-pink-400" },
    { label: "Years Experience", value: "4+", icon: Calendar, color: "text-orange-400" },
  ]

  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We live and breathe music, bringing authentic passion to every project we touch.",
      gradient: "from-red-400 to-pink-500",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Constantly pushing boundaries with cutting-edge technology and creative approaches.",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      icon: Crown,
      title: "Excellence",
      description: "Delivering world-class quality in every aspect of our work and partnerships.",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive ecosystem where artists and creators can thrive together.",
      gradient: "from-green-400 to-emerald-500",
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
              🎵 Our Story
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent leading-tight">
              About NXT Balkan
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Born from a passion for Balkan music and a vision for its global future, NXT Balkan represents the perfect
              fusion of tradition and innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="h-5 w-5 mr-2" />
                Our Mission
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                Meet the Team
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
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

      {/* Mission Statement */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Revolutionizing the music industry through innovation and passion
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">Bridging Tradition with Innovation</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                We believe that Balkan music has the power to unite cultures and transcend boundaries. Our mission is to
                amplify these incredible sounds and stories, bringing them to audiences worldwide while preserving their
                authentic essence.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Through cutting-edge technology, strategic partnerships, and unwavering dedication to our artists, we're
                not just promoting music – we're building bridges between worlds.
              </p>
              <Link href="/services">
                <Button className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold hover:scale-105 transition-all duration-300">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Our Services
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-4 text-center">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${value.gradient} flex items-center justify-center mx-auto mb-3`}
                    >
                      <value.icon className="h-6 w-6 text-black" />
                    </div>
                    <h4 className="font-bold text-white mb-2">{value.title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From humble beginnings to global recognition - the NXT Balkan story
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 opacity-30"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                  <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        {index % 2 === 0 ? (
                          <>
                            <div
                              className={`w-10 h-10 rounded-xl bg-gradient-to-r ${milestone.gradient} flex items-center justify-center`}
                            >
                              <milestone.icon className="h-5 w-5 text-black" />
                            </div>
                            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                              {milestone.year}
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                              {milestone.year}
                            </div>
                            <div
                              className={`w-10 h-10 rounded-xl bg-gradient-to-r ${milestone.gradient} flex items-center justify-center`}
                            >
                              <milestone.icon className="h-5 w-5 text-black" />
                            </div>
                          </>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-white">{milestone.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full border-4 border-black"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The visionaries and creators behind the NXT Balkan revolution
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105 h-full">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-r ${member.gradient} rounded-2xl flex items-center justify-center text-2xl font-bold text-black group-hover:scale-110 transition-transform duration-300`}
                    >
                      {member.initials}
                    </div>
                    <h3 className="text-xl font-bold mb-1 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300">
                      {member.name}
                    </h3>
                    <div className="text-gray-400 mb-4 font-medium">{member.role}</div>
                    <p className="text-gray-300 leading-relaxed text-sm">{member.bio}</p>
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
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl mb-6">
                    <Star className="h-8 w-8 text-black" />
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Ready to Join Our Story?
                  </h2>

                  <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Whether you're an artist looking for representation or a partner seeking collaboration, we'd love to
                    hear from you and explore how we can create something amazing together.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/join-us">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold hover:scale-105 transition-all duration-300 px-8"
                      >
                        <Music className="h-5 w-5 mr-2" />
                        Join Our Family
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
                      <Heart className="h-4 w-4 text-red-400" />
                      Passionate Team
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-blue-400" />
                      Global Reach
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-yellow-400" />
                      Award Winning
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
