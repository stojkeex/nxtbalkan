// Updated React Component for NXT Balkan Homepage
// Clean, minimal, and styled using brand logo gradient (cyan to pink)

"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users, TrendingUp, Star, Globe, Activity, ShieldCheck, LayoutDashboard,
  Rocket, Lightbulb, Layers, Settings, PenTool, Mail, Phone, MapPin,
  Facebook, Twitter, Instagram, Linkedin, ArrowRight, ChevronDown, Award
} from "lucide-react";

const gradient = "bg-gradient-to-r from-cyan-400 to-pink-400";
const textGradient = "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400";

export default function Index() {
  const services = [
    { icon: Users, title: "Community Growth", description: "Build, engage, and scale digital communities." },
    { icon: TrendingUp, title: "Performance Marketing", description: "Marketing funnels that convert." },
    { icon: Star, title: "Creative Direction", description: "Campaigns with visuals, storytelling and design." },
    { icon: Globe, title: "Global Brand Strategy", description: "Position your brand internationally." },
    { icon: Activity, title: "Data Intelligence", description: "Insights that drive creative decisions." },
    { icon: LayoutDashboard, title: "UI/UX Design", description: "Intuitive and stunning interfaces." },
    { icon: ShieldCheck, title: "Security & Trust", description: "Top-tier protection and compliance." },
    { icon: Rocket, title: "Startup Acceleration", description: "Idea to MVP and scale fast." }
  ];

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
        >
          <span className={textGradient}>NXT BALKAN</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 max-w-xl"
        >
          Digital transformation for the next generation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <Button className={`${gradient} text-white px-6 py-4 rounded-full text-lg flex items-center gap-2`}>
            Start Your Journey <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-6 py-4 rounded-full text-lg">
            Learn More <ChevronDown className="w-5 h-5" />
          </Button>
        </motion.div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2 className="text-4xl font-light text-center mb-12">
            Premium <span className={textGradient}>Services</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card className="bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 rounded-xl h-full">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-cyan-500/20 to-pink-500/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                    <p className="text-gray-400 text-sm">{description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 bg-black text-center">
        <motion.h2 className="text-4xl font-light mb-6">
          Get in <span className={textGradient}>Touch</span>
        </motion.h2>
        <p className="text-gray-400 text-lg mb-8">
          Let's build your digital future together.
        </p>
        <div className="flex justify-center">
          <Button className={`${gradient} text-white px-6 py-4 rounded-full text-lg flex items-center gap-2`}>
            Contact Us <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-center border-t border-white/10">
        <p className="text-gray-500 text-sm">© 2024 NXT Balkan. All rights reserved.</p>
      </footer>
    </main>
  );
}
