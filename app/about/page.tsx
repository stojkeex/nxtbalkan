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
  TrendingUp,
  Star,
  ArrowRight,
  Sparkles,
  Crown,
  Heart,
  Target,
} from "lucide-react"

export default function AboutPage() {
  const milestones = [
    {
      year: "2020",
      title: "Foundation",
      description: "NXT Balkan was founded with a vision to revolutionize digital excellence",
      icon: Star,
    },
    {
      year: "2021",
      title: "First Major Project",
      description: "Launched our flagship digital transformation initiative",
      icon: Zap,
    },
    {
      year: "2022",
      title: "International Expansion",
      description: "Partnered with global brands and expanded our reach worldwide",
      icon: Globe,
    },
    {
      year: "2023",
      title: "Innovation Leadership",
      description: "Pioneered cutting-edge solutions in digital marketing and brand strategy",
      icon: TrendingUp,
    },
    {
      year: "2024",
      title: "Global Recognition",
      description: "Recognized as a leading digital agency with award-winning campaigns",
      icon: Award,
    },
  ]

  const team = [
    {
      name: "M. Stojanović",
      role: "Founder & CEO",
      bio: "Visionary leader with 15+ years in digital innovation, passionate about transforming brands through strategic excellence.",
      initials: "MS",
    },
    {
      name: "K. Kruljac",
      role: "CEO",
      bio: "Strategic mastermind with expertise in scaling businesses and building lasting partnerships across global markets.",
      initials: "KK",
    },
    {
      name: "R. Kavčič",
      role: "Owner",
      bio: "Creative director and brand strategist who has crafted award-winning campaigns for industry leaders.",
      initials: "RK",
    },
  ]

  const stats = [
    { label: "Countries Reached", value: "50+", icon: Globe },
    { label: "Awards Won", value: "25+", icon: Award },
    { label: "Projects Completed", value: "200+", icon: TrendingUp },
    { label: "Years Experience", value: "5+", icon: Calendar },
  ]

  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We live and breathe digital excellence, bringing authentic passion to every project we touch.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Constantly pushing boundaries with cutting-edge technology and creative approaches.",
    },
    {
      icon: Crown,
      title: "Excellence",
      description: "Delivering world-class quality in every aspect of our work and partnerships.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive ecosystem where brands and creators can thrive together.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 bg-gradient-to-br from-cyan-500/5 via-black to-pink-500/5">
        <div className="max-w-7xl mx-auto text-center space-y-6 sm:space-y-8 lg:space-y-10">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 sm:mb-8"
          >
            <img
              src="/nxtbalkancolored2.png"
              alt="NXT Balkan Logo"
              className="mx-auto w-48 h-auto sm:w-64 md:w-80 lg:w-96"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Badge className="mb-6 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-medium px-4 py-2 text-sm">
              Our Story
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-6 px-4">
              <span className="text-white">About</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent font-medium">
                NXT Balkan
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 px-4">
              Born from a passion for digital excellence and a vision for transformative brand experiences, NXT Balkan
              represents the perfect fusion of innovation and strategic thinking.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400 text-white font-medium px-8 py-4 text-lg rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/20"
              >
                <Sparkles className="h-5 w-5 mr-2" />
                Our Mission
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 text-lg rounded-full"
              >
                Meet the Team
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-cyan-500/5 to-pink-500/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-pink-500/20 flex items-center justify-center">
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-400" />
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

      {/* Mission Statement */}
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 text-white">
              Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Mission</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
              Revolutionizing digital experiences through innovation and excellence
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-light mb-6 text-white">
                Bridging Innovation with Excellence
              </h3>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
                We believe that exceptional digital experiences have the power to transform businesses and connect
                brands with their audiences in meaningful ways. Our mission is to amplify these connections through
                strategic innovation and creative excellence.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8">
                Through cutting-edge technology, strategic partnerships, and unwavering dedication to our clients, we're
                not just creating campaigns – we're building lasting digital legacies.
              </p>
              <Button className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400 text-white font-medium px-8 py-4 text-lg rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/20">
                <TrendingUp className="h-5 w-5 mr-2" />
                Our Services
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 sm:gap-6"
            >
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/80 border border-gray-800 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-pink-500/20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <value.icon className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" />
                    </div>
                    <h4 className="font-medium text-white mb-2 text-sm sm:text-base">{value.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 bg-gradient-to-r from-cyan-500/5 to-pink-500/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 text-white">
              Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
              From humble beginnings to global recognition - the NXT Balkan story
            </p>
          </motion.div>

          <div className="space-y-8 sm:space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8"
              >
                <div className="flex items-center gap-4 sm:w-48 flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-cyan-500/20 to-pink-500/20 flex items-center justify-center">
                    <milestone.icon className="h-6 w-6 sm:h-7 sm:w-7 text-cyan-400" />
                  </div>
                  <div className="text-xl sm:text-2xl font-light bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                    {milestone.year}
                  </div>
                </div>

                <Card className="bg-gray-900/80 border border-gray-800 hover:border-cyan-400/30 transition-all duration-300 flex-1">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-medium mb-2 sm:mb-3 text-white">{milestone.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{milestone.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 text-white">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
              The visionaries and creators behind the NXT Balkan revolution
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="bg-gray-900/80 border border-gray-800 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105 h-full">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                      {member.initials}
                    </div>
                    <h3 className="text-lg sm:text-xl font-medium mb-1 sm:mb-2 text-white group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {member.name}
                    </h3>
                    <div className="text-gray-400 mb-3 sm:mb-4 font-medium text-sm sm:text-base">{member.role}</div>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
                  Ready to{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                    Join Our Story?
                  </span>
                </h2>

                <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
                  Whether you're a brand looking for transformation or a partner seeking collaboration, we'd love to
                  hear from you and explore how we can create something amazing together.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400 text-white font-medium px-8 py-4 text-lg rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/20"
                  >
                    <Users className="h-5 w-5 mr-2" />
                    Work With Us
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-600 text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 text-lg rounded-full"
                  >
                    Get In Touch
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </div>

                <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-pink-400" />
                    Passionate Team
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-cyan-400" />
                    Global Reach
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-yellow-400" />
                    Award Winning
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
