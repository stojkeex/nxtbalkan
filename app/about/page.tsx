"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Zap, Globe, Activity, ShieldCheck, Rocket, Star, Flame, Lightbulb, Infinity, LayoutDashboard, Layers, ShieldCheck as ShieldIcon } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 bg-gradient-to-tr from-[#101010] via-black to-[#090909] overflow-hidden text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight tracking-wide max-w-4xl"
        >
          About <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">NXT Balkan</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: "easeOut" }}
          className="text-gray-400 max-w-3xl mt-6 text-lg sm:text-xl"
        >
          NXT Balkan is a forward-thinking digital agency focused on innovation, community growth, and cutting-edge technology.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.6, ease: "easeOut" }}
          className="mt-10"
        >
          <Button className="bg-black/30 backdrop-blur-xl border border-white/10 hover:border-cyan-400/40 text-white font-medium px-10 py-5 rounded-full text-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 animate-pulse">
            Learn More
          </Button>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-28 px-6 sm:px-12 bg-black">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">Core Values</span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl mt-4 max-w-3xl mx-auto">
            Innovation, Integrity, and Community are the pillars that drive us.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl shadow-xl h-full">
              <CardContent className="p-8 text-center">
                <Flame className="w-10 h-10 text-pink-400 mx-auto mb-4 animate-pulse" />
                <h3 className="text-xl font-semibold mb-2 text-white">Innovation</h3>
                <p className="text-gray-300 text-base">
                  We constantly push boundaries to deliver creative digital solutions.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Card className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl shadow-xl h-full">
              <CardContent className="p-8 text-center">
                <ShieldIcon className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Integrity</h3>
                <p className="text-gray-300 text-base">
                  Transparency and honesty are at the core of all our partnerships.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl shadow-xl h-full">
              <CardContent className="p-8 text-center">
                <Users className="w-10 h-10 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Community</h3>
                <p className="text-gray-300 text-base">
                  Building meaningful connections and empowering digital communities.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-28 px-6 sm:px-12 bg-black">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto text-center mb-20"
        >
          <Lightbulb className="w-12 h-12 text-cyan-400 mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-4">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto">
            A timeline of milestones that shaped who we are today.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-12">
          {[
            { year: "2015", event: "Founded by passionate digital pioneers." },
            { year: "2017", event: "Launched first global marketing campaign." },
            { year: "2019", event: "Expanded to new markets across Europe." },
            { year: "2021", event: "Integrated cutting-edge AI in our services." },
            { year: "2024", event: "Became industry leaders in digital innovation." },
          ].map(({ year, event }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="flex items-start space-x-6"
            >
              <div className="text-cyan-400 font-semibold text-lg min-w-[60px]">{year}</div>
              <p className="text-gray-300 text-left text-base sm:text-lg">{event}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-28 px-6 sm:px-12 bg-black">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto text-center mb-20"
        >
          <Infinity className="w-12 h-12 text-pink-400 mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light">
            Meet Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-cyan-400 font-medium">Team</span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl mt-4 max-w-3xl mx-auto">
            Talented digital strategists, designers, and developers passionate about your success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            { name: "Ana Kovač", role: "Founder & CEO" },
            { name: "Marko Petrić", role: "Lead Developer" },
            { name: "Sara Novak", role: "Creative Director" },
            { name: "Luka Horvat", role: "Marketing Strategist" },
            { name: "Tina Zupan", role: "UI/UX Designer" },
            { name: "Ivan Žagar", role: "Data Analyst" },
          ].map(({ name, role }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.1 }}
            >
              <Card className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl shadow-xl h-full flex flex-col items-center justify-center p-8 text-center">
                <div className="mb-6 w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500/20 to-pink-500/20 flex items-center justify-center text-cyan-400 text-4xl font-bold select-none">
                  {name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{name}</h3>
                <p className="text-gray-300">{role}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-white/10 bg-black">
        <p className="text-gray-500 text-sm">© 2025 NXT Balkan — Digital Futures Engineered.</p>
      </footer>
    </div>
  );
}
