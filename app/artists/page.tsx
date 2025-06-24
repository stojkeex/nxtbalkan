"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ExternalLink,
  Globe,
  Users,
  TrendingUp,
  Award,
  Star,
  ArrowRight,
  Sparkles,
  Heart,
  Share2,
  Zap,
  Target,
} from "lucide-react"

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      name: "E-Commerce Revolution",
      category: "Web Development",
      description:
        "Complete digital transformation for a leading retail brand, resulting in 300% increase in online sales and enhanced user experience.",
      image: "/placeholder.svg?height=400&width=400",
      stats: {
        increase: "+300%",
        users: "50K+",
        conversion: "8.5%",
        timeline: "3 months",
      },
      technologies: ["Next.js", "Shopify", "Analytics"],
      featured: true,
      completed: true,
    },
    {
      id: 2,
      name: "Brand Identity Redesign",
      category: "Brand Strategy",
      description:
        "Complete brand overhaul for a tech startup, including logo design, visual identity, and marketing materials that increased brand recognition by 250%.",
      image: "/placeholder.svg?height=400&width=400",
      stats: {
        increase: "+250%",
        users: "25K+",
        conversion: "12.3%",
        timeline: "6 weeks",
      },
      technologies: ["Figma", "Adobe Suite", "Brand Guidelines"],
      featured: false,
      completed: true,
    },
    {
      id: 3,
      name: "Social Media Campaign",
      category: "Digital Marketing",
      description:
        "Multi-platform social media strategy that generated viral content and increased follower engagement by 400% across all channels.",
      image: "/placeholder.svg?height=400&width=400",
      stats: {
        increase: "+400%",
        users: "100K+",
        conversion: "15.2%",
        timeline: "2 months",
      },
      technologies: ["Meta Ads", "TikTok", "Analytics"],
      featured: false,
      completed: true,
    },
  ]

  const categories = [
    { name: "All", count: "3", active: true },
    { name: "Web Development", count: "1", active: false },
    { name: "Brand Strategy", count: "1", active: false },
    { name: "Digital Marketing", count: "1", active: false },
    { name: "E-Commerce", count: "1", active: false },
    { name: "Mobile Apps", count: "0", active: false },
  ]

  const stats = [
    { label: "Projects Completed", value: "200+", icon: Target, color: "text-cyan-400" },
    { label: "Client Satisfaction", value: "99%", icon: Heart, color: "text-pink-400" },
    { label: "Awards Won", value: "25+", icon: Award, color: "text-orange-400" },
    { label: "Countries Served", value: "50+", icon: Globe, color: "text-purple-400" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 bg-gradient-to-br from-cyan-500/5 via-black to-pink-500/5">
        <div className="max-w-7xl mx-auto text-center space-y-6 sm:space-y-8 lg:space-y-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="mb-6 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-medium px-4 py-2 text-sm">
              Our Work
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-6 px-4">
              <span className="text-white">Our</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent font-medium">
                Portfolio
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 px-4">
              Discover the exceptional projects that showcase our expertise in digital transformation, brand
              development, and strategic innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400 text-white font-medium px-8 py-4 text-lg rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/20"
              >
                <Sparkles className="h-5 w-5 mr-2" />
                View All Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 text-lg rounded-full"
              >
                Start Your Project
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

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={category.active ? "default" : "outline"}
                size="sm"
                className={`${
                  category.active
                    ? "bg-gradient-to-r from-cyan-500 to-pink-500 text-white hover:scale-105"
                    : "border-gray-600 text-gray-300 hover:bg-white hover:text-black"
                } transition-all duration-300 font-medium rounded-full`}
              >
                {category.name}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group ${project.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                <Card className="bg-gray-900/80 border border-gray-800 hover:border-cyan-400/30 transition-all duration-300 h-full overflow-hidden group-hover:scale-105">
                  <CardContent className="p-0">
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.name}
                        className={`w-full ${project.featured ? "h-80" : "h-64"} object-cover group-hover:scale-110 transition-transform duration-500`}
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button
                          size="lg"
                          className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-black transition-all duration-300 rounded-full"
                        >
                          <ExternalLink className="h-5 w-5 mr-2" />
                          View Project
                        </Button>
                      </div>

                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-medium">
                          {project.category}
                        </Badge>
                        {project.completed && (
                          <Badge className="bg-green-500 text-white">
                            <Star className="h-3 w-3 mr-1" />
                            Completed
                          </Badge>
                        )}
                      </div>

                      {/* Featured badge */}
                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-medium">
                            <Sparkles className="h-3 w-3 mr-1" />
                            Featured
                          </Badge>
                        </div>
                      )}
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <div className="mb-4">
                        <h3
                          className={`text-lg sm:text-xl font-medium mb-2 ${
                            project.featured
                              ? "bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent"
                              : "text-white"
                          }`}
                        >
                          {project.name}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                          <div className="text-sm font-medium text-white">{project.stats.increase}</div>
                          <div className="text-xs text-gray-400">Growth</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                          <div className="text-sm font-medium text-white">{project.stats.users}</div>
                          <div className="text-xs text-gray-400">Users</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                          <div className="text-sm font-medium text-white">{project.stats.conversion}</div>
                          <div className="text-xs text-gray-400">Conversion</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                          <div className="text-sm font-medium text-white">{project.stats.timeline}</div>
                          <div className="text-xs text-gray-400">Timeline</div>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-gray-400 hover:text-white hover:bg-gray-800 p-2"
                          >
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-gray-400 hover:text-white hover:bg-gray-800 p-2"
                          >
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>

                        <Button
                          size="sm"
                          variant="outline"
                          className="border-gray-600 text-gray-300 hover:bg-white hover:text-black transition-all duration-300 rounded-full"
                        >
                          View Details
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Start Your Project CTA */}
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
                  <Zap className="h-8 w-8 sm:h-10 sm:w-10 text-cyan-400" />
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-white">
                  Ready to{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                    Start Your Project?
                  </span>
                </h2>

                <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
                  Join hundreds of businesses who have transformed their digital presence with NXT Balkan. Let's create
                  something extraordinary together.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400 text-white font-medium px-8 py-4 text-lg rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/20"
                  >
                    <Target className="h-5 w-5 mr-2" />
                    Start Your Project
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-600 text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 text-lg rounded-full"
                  >
                    View Our Process
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </div>

                <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-400" />
                    Award-Winning Results
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-400" />
                    Proven Growth
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-purple-400" />
                    Expert Team
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
