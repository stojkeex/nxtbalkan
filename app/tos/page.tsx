"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Zap, Shield, Lock, Globe, Mail } from "lucide-react"
import Link from "next/link"

export default function TermsOfService() {
  const sections = [
    {
      title: "Introduction",
      content: [
        "Welcome to NXT Balkan. These Terms of Service govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms.",
        "NXT Balkan is a music production, artist management, and promotion company specializing in Balkan artists. Our services are designed to bridge traditional Balkan music with global audiences."
      ],
      icon: Shield
    },
    {
      title: "Intellectual Property",
      content: [
        "All content on this website, including music, text, graphics, logos, and software, is the property of NXT Balkan or its content suppliers and protected by international copyright laws.",
        "Artists retain ownership of their original works. By working with NXT Balkan, you grant us a non-exclusive license to promote, distribute, and monetize your content through our network."
      ],
      icon: Lock
    },
    {
      title: "User Responsibilities",
      content: [
        "You agree not to use our services for any unlawful purpose or in any way that might harm, damage, or disparage NXT Balkan or our artists.",
        "When submitting content, you warrant that you own all rights to the material and that it doesn't infringe on any third-party rights."
      ],
      icon: Zap
    },
    {
      title: "Privacy Policy",
      content: [
        "Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information. By using our services, you consent to such processing.",
        "We may collect information about your interactions with our website and services to improve user experience and provide better services to our artists."
      ],
      icon: Shield
    },
    {
      title: "Service Modifications",
      content: [
        "NXT Balkan reserves the right to modify or discontinue, temporarily or permanently, any part of our services with or without notice.",
        "We may revise these Terms of Service at any time by posting the updated terms on our website. Your continued use constitutes acceptance of the revised terms."
      ],
      icon: Globe
    },
    {
      title: "Limitation of Liability",
      content: [
        "NXT Balkan shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of or inability to use our services.",
        "Our total liability for any claims under these terms shall not exceed the amount you paid us for the services in the six months preceding the claim."
      ],
      icon: Shield
    },
    {
      title: "Governing Law",
      content: [
        "These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where NXT Balkan is registered, without regard to its conflict of law provisions.",
        "Any disputes arising from these terms will be resolved through binding arbitration in accordance with the rules of the International Chamber of Commerce."
      ],
      icon: Globe
    },
    {
      title: "Contact Information",
      content: [
        "For any questions about these Terms of Service, please contact us at legal@nxtbalkan.com.",
        "All official notices should be sent to our registered office address as published on our website."
      ],
      icon: Mail
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text leading-tight tracking-tight">
              Terms of Service
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700">
              <CardContent className="p-6 md:p-8">
                <p className="text-gray-300 mb-4">
                  Please read these Terms of Service carefully before using our website or services. These terms constitute a legally binding agreement between you and NXT Balkan.
                </p>
                <p className="text-gray-300">
                  By accessing or using any part of our services, you agree to be bound by these terms. If you do not agree to all the terms, you may not access the website or use any services.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Terms Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-48 flex-shrink-0">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${index % 3 === 0 ? 'from-cyan-400/10 to-blue-500/10' : index % 3 === 1 ? 'from-purple-400/10 to-pink-500/10' : 'from-orange-400/10 to-red-500/10'} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <section.icon className={`h-8 w-8 ${index % 3 === 0 ? 'text-cyan-400' : index % 3 === 1 ? 'text-purple-400' : 'text-orange-400'}`} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${index % 3 === 0 ? 'text-cyan-400' : index % 3 === 1 ? 'text-purple-400' : 'text-orange-400'}`}>
                      {section.title}
                    </h2>
                    <div className="space-y-4">
                      {section.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-gray-300 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Acceptance Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700">
              <CardContent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text">
                  Acceptance of Terms
                </h3>
                <p className="text-gray-300 mb-6">
                  By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree, please refrain from using our services.
                </p>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-600 text-white hover:bg-white hover:text-black transition-all duration-300 px-8"
                  >
                    Contact Us for Questions
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
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
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-500/5" />
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                    Ready to Work With Us?
                  </h2>
                  <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Whether you're an artist looking for representation or a partner interested in collaboration, NXT Balkan is your gateway to the future of Balkan music.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/join-us">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold hover:scale-105 transition-all duration-300 px-8"
                      >
                        Join NXT Balkan
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-gray-600 text-white hover:bg-white hover:text-black transition-all duration-300 px-8"
                      >
                        Contact Legal Team
                      </Button>
                    </Link>
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
