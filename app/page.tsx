"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Flame, Star, ArrowDown } from "lucide-react";

export default function HomePage() {
  const services = [
    {
      icon: Users,
      title: "Community Growth",
      description:
        "Build, engage, and scale active digital communities with tailored strategies.",
    },
    {
      icon: TrendingUp,
      title: "Performance Marketing",
      description:
        "ROI-driven funnels that turn visitors into loyal advocates.",
    },
    {
      icon: Zap,
      title: "Creative Direction",
      description:
        "High-end visuals, storytelling, and motion design campaigns.",
    },
    {
      icon: Globe,
      title: "Global Strategy",
      description:
        "Position your brand worldwide with targeted messaging.",
    },
    {
      icon: Activity,
      title: "Data Insights",
      description:
        "Actionable analytics to inform your creative decisions.",
    },
    {
      icon: LayoutDashboard,
      title: "UI/UX Design",
      description:
        "Visually stunning, user-friendly experiences across all devices.",
    },
    {
      icon: ShieldCheck,
      title: "Security & Trust",
      description:
        "Robust protection and seamless compliance frameworks.",
    },
    {
      icon: Rocket,
      title: "Startup Growth",
      description:
        "From idea to MVP: accelerate and scale with agility.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-8 bg-gradient-to-br from-[#0f0f0f] via-black to-[#090909] overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-8 z-10">
          {/* Logo Animation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              src="/nxtbalkancolored2.png"
              alt="NXT Balkan Logo"
              className="mx-auto w-64 sm:w-80 md:w-96"
            />
          </motion.div>
          
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl font-extralight tracking-wide leading-tight"
          >
            Next-Gen <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">Digital Leadership</span>
          </motion.h1>
          
          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-gray-300 text-lg sm:text-xl md:text-2xl"
          >
            Transforming businesses into innovative, high-performance digital powerhouses.
          </motion.p>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          >
            <Button className="border border-white/20 bg-black/30 backdrop-blur-xl px-8 py-4 rounded-full text-xl font-medium hover:border-cyan-400/50 hover:bg-black/50 transition-all shadow-lg hover:shadow-cyan-400/30 animate-pulse">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-8 bg-black relative z-0">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-wide">
              Premium <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">Services</span>
            </h2>
            <p className="mt-4 text-gray-400 text-lg sm:text-xl">
              Built for visionary brands shaping the future.
            </p>
          </motion.div>

          {/* Grid of services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-lg border border-white/10 hover:border-cyan-400/30 transition-all duration-300 rounded-3xl h-full shadow-lg hover:scale-105">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-pink-500/20">
                      <service.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <p className="text-gray-300 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <motion.div
        className="h-1 w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent my-16"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Innovation Section */}
      <section className="py-24 px-8 bg-black relative z-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto text-center"
        >
          <Flame className="w-12 h-12 mx-auto mb-4 text-pink-500 animate-pulse" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 tracking-wide">
            We <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-cyan-400 font-medium">Reimagine</span> What's Possible
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto">
            Creating stunning, scalable, and strategic digital ecosystems.
          </p>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-8 bg-black text-center relative z-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Card className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl shadow-lg mx-auto max-w-4xl p-8">
            <div className="mb-6">
              <Star className="w-12 h-12 mx-auto text-cyan-400 animate-spin-slow" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
              Build Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">Digital Legacy</span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Merging strategy, design, and tech into unforgettable digital experiences.
            </p>
            <Button className="border border-white/20 bg-black/30 backdrop-blur-xl px-8 py-4 rounded-full text-xl font-medium hover:border-pink-400/50 hover:bg-black/50 transition-all shadow-lg hover:shadow-pink-400/30">
              Let’s Talk <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Card>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 bg-black text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} NXT Balkan — Crafting Digital Excellence.
      </footer>
      
    </div>
  );
}
