"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Play,
  ExternalLink,
  Instagram,
  Youtube,
  Music,
  Users,
  TrendingUp,
  Award,
  Headphones,
  Star,
  ArrowRight,
  Sparkles,
  Heart,
  Share2,
} from "lucide-react"
import Link from "next/link"

export default function ArtistsPage() {
  const artists = [
    {
      id: 1,
      name: "Crni Stojke",
      genre: "Modern Folk",
      description:
        "Blending traditional Serbian melodies with contemporary production, creating a unique sound that resonates across generations.",
      image:
        "https://cdn.discordapp.com/attachments/1329893059147862109/1381014903229251738/IMG_20250606_191918_297.webp?ex=6859179a&is=6857c61a&hm=0da4fe127cbb09e5ba1768d56fac4e0aa5a29c98ef73ae188610c60c69a6be5c&",
      stats: {
        streams: "Coming Soon",
        followers: "3.5K",
        releases: "1",
        monthlyListeners: "2.1K",
      },
      social: {
        instagram: "https://www.instagram.com/crni_stojke?igsh=cmpyemU1cDd5djVz&utm_source=qr",
        youtube: "CrniStojke",
        spotify: "#",
      },
      featured: true,
      verified: true,
      gradient: "from-cyan-400 to-blue-500",
      bgGradient: "from-cyan-400/10 to-blue-500/10",
    },
    // Placeholder artists for better showcase
    {
      id: 2,
      name: "Coming Soon",
      genre: "Electronic Fusion",
      description:
        "We're constantly discovering new talent. Stay tuned for exciting announcements of our next artist signings.",
      image: "/placeholder.svg?height=400&width=400",
      stats: {
        streams: "TBA",
        followers: "TBA",
        releases: "TBA",
        monthlyListeners: "TBA",
      },
      social: {
        instagram: "#",
        youtube: "#",
        spotify: "#",
      },
      featured: false,
      verified: false,
      gradient: "from-purple-400 to-pink-500",
      bgGradient: "from-purple-400/10 to-pink-500/10",
      comingSoon: true,
    },
    {
      id: 3,
      name: "Coming Soon",
      genre: "Contemporary Pop",
      description:
        "Our talent scouts are working around the clock to bring you the next generation of Balkan music stars.",
      image: "/placeholder.svg?height=400&width=400",
      stats: {
        streams: "TBA",
        followers: "TBA",
        releases: "TBA",
        monthlyListeners: "TBA",
      },
      social: {
        instagram: "#",
        youtube: "#",
        spotify: "#",
      },
      featured: false,
      verified: false,
      gradient: "from-orange-400 to-red-500",
      bgGradient: "from-orange-400/10 to-red-500/10",
      comingSoon: true,
    },
  ]

  const genres = [
    { name: "All", count: "3", active: true },
    { name: "Modern Folk", count: "1", active: false },
    { name: "Electronic Fusion", count: "0", active: false },
    { name: "Contemporary Pop", count: "0", active: false },
    { name: "Traditional Fusion", count: "0", active: false },
    { name: "Hip-Hop Fusion", count: "0", active: false },
  ]

  const stats = [
    { label: "Total Artists", value: "1", icon: Users, color: "text-cyan-400" },
    { label: "Total Streams", value: "Coming Soon", icon: TrendingUp, color: "text-purple-400" },
    { label: "Awards Won", value: "0", icon: Award, color: "text-orange-400" },
    { label: "Countries Reached", value: "5+", icon: Star, color: "text-pink-400" },
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
              🎤 Meet Our Artists
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
              Our Artists
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Discover the incredible talent that defines the future of Balkan music. Each artist brings their unique
              voice to our diverse musical family.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold hover:scale-105 transition-all duration-300"
              >
                <Headphones className="h-5 w-5 mr-2" />
                Listen Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                Join Our Roster
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
                <Card className="bg-gray-900/50 border-gray-800 text-center">
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

      {/* Genre Filter */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {genres.map((genre, index) => (
              <Button
                key={index}
                variant={genre.active ? "default" : "outline"}
                size="sm"
                className={`${
                  genre.active
                    ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-black hover:scale-105"
                    : "border-gray-600 text-gray-300 hover:bg-white hover:text-black"
                } transition-all duration-300 font-medium`}
              >
                {genre.name}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {genre.count}
                </Badge>
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {artists.map((artist, index) => (
              <motion.div
                key={artist.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group ${artist.featured ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : ""}`}
              >
                <Card
                  className={`bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 h-full overflow-hidden group-hover:scale-[1.02] ${artist.comingSoon ? "opacity-75" : ""}`}
                >
                  <CardContent className="p-0">
                    {/* Artist Image */}
                    <div className="relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-t ${artist.bgGradient} opacity-20`} />

                      <img
                        src={artist.image || "/placeholder.svg"}
                        alt={artist.name}
                        className={`w-full ${artist.featured ? "h-80" : "h-64"} object-cover group-hover:scale-110 transition-transform duration-500 ${artist.comingSoon ? "grayscale" : ""}`}
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        {!artist.comingSoon && (
                          <Button
                            size="lg"
                            className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-black transition-all duration-300 rounded-full w-16 h-16 p-0"
                          >
                            <Play className="h-6 w-6 ml-1" />
                          </Button>
                        )}
                      </div>

                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className={`bg-gradient-to-r ${artist.gradient} text-black font-semibold`}>
                          {artist.genre}
                        </Badge>
                        {artist.verified && (
                          <Badge className="bg-blue-500 text-white">
                            <Star className="h-3 w-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                        {artist.comingSoon && <Badge className="bg-gray-600 text-white">Coming Soon</Badge>}
                      </div>

                      {/* Featured badge */}
                      {artist.featured && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold">
                            <Sparkles className="h-3 w-3 mr-1" />
                            Featured
                          </Badge>
                        </div>
                      )}
                    </div>

                    {/* Artist Info */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3
                            className={`text-xl font-bold mb-1 ${artist.featured ? "bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent" : "text-white"}`}
                          >
                            {artist.name}
                          </h3>
                          <p className="text-gray-400 text-sm leading-relaxed">{artist.description}</p>
                        </div>
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                          <div className="text-sm font-bold text-white">{artist.stats.streams}</div>
                          <div className="text-xs text-gray-400">Streams</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                          <div className="text-sm font-bold text-white">{artist.stats.followers}</div>
                          <div className="text-xs text-gray-400">Followers</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                          <div className="text-sm font-bold text-white">{artist.stats.releases}</div>
                          <div className="text-xs text-gray-400">Releases</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                          <div className="text-sm font-bold text-white">{artist.stats.monthlyListeners}</div>
                          <div className="text-xs text-gray-400">Monthly</div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          {!artist.comingSoon && (
                            <>
                              <Button
                                size="sm"
                                variant="ghost"
                                className="text-gray-400 hover:text-white hover:bg-gray-800 p-2"
                                asChild
                              >
                                <Link href={artist.social.instagram} target="_blank">
                                  <Instagram className="h-4 w-4" />
                                </Link>
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                className="text-gray-400 hover:text-white hover:bg-gray-800 p-2"
                              >
                                <Youtube className="h-4 w-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                className="text-gray-400 hover:text-white hover:bg-gray-800 p-2"
                              >
                                <Music className="h-4 w-4" />
                              </Button>
                            </>
                          )}
                        </div>

                        <div className="flex gap-2">
                          {!artist.comingSoon && (
                            <>
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
                            </>
                          )}

                          <Button
                            size="sm"
                            variant="outline"
                            className={`border-gray-600 text-gray-300 hover:bg-white hover:text-black transition-all duration-300 ${artist.comingSoon ? "opacity-50 cursor-not-allowed" : ""}`}
                            disabled={artist.comingSoon}
                          >
                            {artist.comingSoon ? "Coming Soon" : "View Profile"}
                            {!artist.comingSoon && <ExternalLink className="h-3 w-3 ml-1" />}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Roster CTA */}
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
                    <Users className="h-8 w-8 text-black" />
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Want to Join Our Roster?
                  </h2>

                  <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                    We're always looking for exceptional talent to join the NXT Balkan family. If you have what it
                    takes, we want to hear from you.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/join-us">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold hover:scale-105 transition-all duration-300 px-8"
                      >
                        <Music className="h-5 w-5 mr-2" />
                        Submit Your Demo
                      </Button>
                    </Link>
                    <Link href="/services">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-gray-600 text-white hover:bg-white hover:text-black transition-all duration-300 px-8"
                      >
                        Learn About Our Process
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Button>
                    </Link>
                  </div>

                  <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-400" />
                      Professional Development
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-green-400" />
                      Global Reach
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-purple-400" />
                      Industry Recognition
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
