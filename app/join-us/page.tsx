"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Upload,
  Music,
  Users,
  Award,
  CheckCircle,
  HelpCircle,
  TrendingUp,
  Headphones,
  Radio,
  Star,
  Sparkles,
  ArrowRight,
} from "lucide-react"
import { useState } from "react"

export default function JoinUsPage() {
  const [activeTab, setActiveTab] = useState("artist")

  const requirements = [
    "Original music compositions",
    "High-quality audio recordings",
    "Professional attitude and commitment",
    "Willingness to collaborate and grow",
    "Passion for Balkan music and culture",
  ]

  const process = [
    {
      step: "01",
      title: "Submit Your Demo",
      description: "Upload your best tracks and tell us your story",
      icon: Upload,
      color: "text-cyan-400",
    },
    {
      step: "02",
      title: "Initial Review",
      description: "Our A&R team evaluates your submission within 48 hours",
      icon: TrendingUp,
      color: "text-purple-400",
    },
    {
      step: "03",
      title: "Interview Process",
      description: "Selected artists are invited for a detailed discussion",
      icon: Headphones,
      color: "text-pink-400",
    },
    {
      step: "04",
      title: "Welcome to NXT",
      description: "Begin your journey with personalized development plan",
      icon: Star,
      color: "text-orange-400",
    },
  ]

  const faqs = [
    {
      question: "What genres do you accept?",
      answer:
        "We welcome all genres that incorporate Balkan elements, from traditional folk to modern electronic fusion.",
    },
    {
      question: "Do I need professional recordings?",
      answer:
        "While professional quality is preferred, we also consider high-quality demos that showcase your potential.",
    },
    {
      question: "What does the management contract include?",
      answer:
        "Our contracts are artist-friendly and include career development, promotion, distribution, and creative support.",
    },
    {
      question: "How long does the review process take?",
      answer: "We review all submissions within 48 hours and respond with next steps or feedback.",
    },
  ]

  const benefits = [
    {
      icon: Music,
      title: "Professional Production",
      description: "Access to state-of-the-art studios and expert producers",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      icon: Users,
      title: "Career Management",
      description: "Dedicated team for strategic planning and development",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      icon: Radio,
      title: "Global Promotion",
      description: "Worldwide marketing campaigns and playlist placements",
      gradient: "from-orange-400 to-red-500",
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Awards, nominations, and industry connections",
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
              🎤 Join the Revolution
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
              Join NXT Balkan
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Ready to take your music to the next level? Join the NXT Balkan family and let's create the future of
              music together. Your journey to global recognition starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="h-5 w-5 mr-2" />
                Start Application
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                View Requirements
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-4 bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Why Join NXT Balkan?
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 text-center hover:border-gray-700 transition-all duration-300 hover:scale-105 h-full">
                  <CardContent className="p-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${benefit.gradient} flex items-center justify-center mx-auto mb-3`}
                    >
                      <benefit.icon className="h-6 w-6 text-black" />
                    </div>
                    <h3 className="font-bold text-white mb-2 text-sm">{benefit.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <div className="bg-gray-900/50 p-2 rounded-2xl border border-gray-800">
              <div className="flex space-x-2">
                {[
                  { id: "artist", label: "Artists", icon: Music },
                  { id: "producer", label: "Producers", icon: Users },
                  { id: "songwriter", label: "Songwriters", icon: Award },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-black"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    <tab.icon className="h-4 w-4" />
                    <span className="font-semibold">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Submission Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Submit Your Demo
                  </h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300">Artist/Stage Name</label>
                        <Input
                          className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-cyan-400"
                          placeholder="Your stage name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300">Real Name</label>
                        <Input
                          className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-cyan-400"
                          placeholder="Your real name"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300">Email Address</label>
                        <Input
                          type="email"
                          className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-cyan-400"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300">Phone Number</label>
                        <Input
                          className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-cyan-400"
                          placeholder="+381 XX XXX XXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">Genre/Style</label>
                      <select className="w-full bg-gray-800/50 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:border-cyan-400">
                        <option value="" className="bg-gray-800">
                          Select your primary genre
                        </option>
                        <option value="traditional" className="bg-gray-800">
                          Traditional Balkan
                        </option>
                        <option value="modern-folk" className="bg-gray-800">
                          Modern Folk
                        </option>
                        <option value="electronic" className="bg-gray-800">
                          Electronic Fusion
                        </option>
                        <option value="pop" className="bg-gray-800">
                          Contemporary Pop
                        </option>
                        <option value="hip-hop" className="bg-gray-800">
                          Hip-Hop Fusion
                        </option>
                        <option value="other" className="bg-gray-800">
                          Other
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">Tell Us Your Story</label>
                      <Textarea
                        rows={4}
                        className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-cyan-400 resize-none"
                        placeholder="Share your musical journey, influences, and what makes you unique..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">Upload Your Demo</label>
                      <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 text-center hover:border-cyan-400 transition-colors duration-300">
                        <Upload className="h-10 w-10 mx-auto mb-3 text-gray-400" />
                        <p className="text-gray-300 mb-2">Drag and drop your files here, or click to browse</p>
                        <p className="text-gray-500 text-sm mb-3">
                          Supported formats: MP3, WAV, FLAC (Max 50MB per file)
                        </p>
                        <Button
                          variant="outline"
                          className="border-gray-700 text-gray-300 hover:bg-cyan-400 hover:text-black bg-transparent"
                        >
                          Choose Files
                        </Button>
                      </div>
                    </div>

                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold hover:scale-105 transition-all duration-300"
                    >
                      <Sparkles className="h-5 w-5 mr-2" />
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Information Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Requirements */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    What We're Looking For
                  </h3>
                  <div className="space-y-3">
                    {requirements.map((requirement, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{requirement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Process */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Our Process
                  </h3>
                  <div className="space-y-4">
                    {process.map((step, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 text-black rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {step.step}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1 text-white">{step.title}</h4>
                          <p className="text-gray-300 text-sm">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* FAQs */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-gray-800/30 p-4 rounded-lg border border-gray-700">
                        <div className="flex items-start space-x-3">
                          <HelpCircle className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold mb-2 text-white text-sm">{faq.question}</h4>
                            <p className="text-gray-300 text-xs leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
