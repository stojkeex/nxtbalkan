"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Users, TrendingUp, Star, Globe, Activity } from "lucide-react";

export default function HomePage() {
  const services = [
    {
      icon: Users,
      title: "Community Growth",
      description:
        "Tailored strategies to build, engage and scale active digital communities.",
    },
    {
      icon: TrendingUp,
      title: "Performance Marketing",
      description:
        "ROI-focused marketing funnels that convert browsers into brand advocates.",
    },
    {
      icon: Zap,
      title: "Creative Direction",
      description:
        "Innovative campaigns with high-end visuals, storytelling and motion design.",
    },
    {
      icon: Globe,
      title: "Global Brand Strategy",
      description:
        "Position your brand on the international stage with targeted messaging.",
    },
    {
      icon: Activity,
      title: "Data Intelligence",
      description:
        "Actionable insights and analytics that drive informed creative decisions.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 bg-gradient-to-tr from-[#101010] via-black to-[#090909] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-7xl mx-auto w-full text-center space-y-8"
        >
          <motion.img
            src="/nxtbalkancolored2.png"
            alt="NXT Balkan Logo"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="mx-auto w-64 sm:w-80 md:w-96 lg:w-[450px]"
          />
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.6, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight tracking-wide"
          >
            Crafting <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">Digital Empires</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.9, ease: "easeOut" }}
            className="text-gray-300 max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl"
          >
            We empower brands with sleek aesthetics, immersive content, and meaningful performance-driven digital experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.2, ease: "easeOut" }}
          >
            <Button className="bg-black/30 backdrop-blur-xl border border-white/10 hover:border-cyan-400/40 text-white font-medium px-10 py-5 rounded-full text-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/20">
              Let’s Work Together <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 sm:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">Expertise</span>
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl mt-4">
              A suite of services tailored for forward-thinking brands.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-lg border border-white/10 hover:border-cyan-400/30 transition-all duration-300 rounded-3xl h-full">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-cyan-500/20 to-pink-500/20 flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-base">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 sm:px-12 bg-gradient-to-br from-black to-[#0a0a0a]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { value: "300+", label: "Projects Delivered" },
            { value: "75+", label: "Global Clients" },
            { value: "7y", label: "Experience" },
            { value: "99.8%", label: "Client Retention" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-light bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400">
                {stat.value}
              </div>
              <div className="text-gray-500 text-sm sm:text-base mt-2 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 sm:px-12 bg-black text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl">
            <CardContent className="px-10 py-14">
              <div className="mb-6">
                <Star className="w-10 h-10 mx-auto text-cyan-400" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
                Let’s Build <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">Your Legacy</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Our team of creatives, strategists, and developers are ready to elevate your brand.
              </p>
              <Button className="bg-black/30 backdrop-blur-xl border border-white/10 hover:border-pink-400/40 text-white font-medium px-10 py-5 rounded-full text-lg shadow-lg hover:shadow-pink-500/20">
                Contact Us <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-white/10 bg-black">
        <p className="text-gray-500 text-sm">© 2025 NXT Balkan — Digital Futures Engineered.</p>
      </footer>
    </div>
  );
}
