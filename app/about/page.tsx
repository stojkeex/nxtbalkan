"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Star, Activity, Rocket, Globe, ShieldCheck, LayoutDashboard, Flame, Lightbulb } from "lucide-react";

export default function AboutPage() {
  // Podatki o ekipi
  const teamMembers = [
    { name: "Ana Novak", role: "Founder & CEO", description: "Visionary leader driving innovation and growth.", imgSrc: "/team/ana.jpg" },
    { name: "Marko Kranjc", role: "Creative Director", description: "Crafts stunning campaigns with storytelling & design.", imgSrc: "/team/marko.jpg" },
    { name: "Sara Petrovic", role: "Head of Marketing", description: "Expert in scaling brands through data-driven strategies.", imgSrc: "/team/sara.jpg" },
    { name: "Luka Zupan", role: "Lead Developer", description: "Builds scalable and performant digital platforms.", imgSrc: "/team/luka.jpg" },
  ];

  // Core Values
  const coreValues = [
    {
      icon: Users,
      title: "Community First",
      description:
        "Building engaged, loyal communities that amplify your brand’s voice and foster genuine connections.",
    },
    {
      icon: Activity,
      title: "Data-Driven",
      description:
        "Using actionable insights and analytics to power strategic decisions and maximize ROI.",
    },
    {
      icon: Star,
      title: "Innovative",
      description:
        "Pushing creative boundaries to deliver standout, memorable digital experiences.",
    },
    {
      icon: Rocket,
      title: "Growth-Focused",
      description:
        "Helping startups and established brands scale rapidly with agile, proven strategies.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Positioning brands on the international stage with tailored, impactful messaging.",
    },
    {
      icon: ShieldCheck,
      title: "Security & Trust",
      description:
        "Prioritizing digital protection and seamless compliance to safeguard your business.",
    },
    {
      icon: LayoutDashboard,
      title: "UI/UX Excellence",
      description:
        "Crafting intuitive and visually captivating user experiences across platforms.",
    },
    {
      icon: Lightbulb,
      title: "Creative Direction",
      description:
        "Leading innovative campaigns blending storytelling, motion design, and visual flair.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 sm:px-12 py-12 sm:py-20 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl sm:text-6xl font-extralight tracking-wide mb-3">
          About <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">NXT Balkan</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
          We are a pioneering digital agency dedicated to transforming brands into next-generation leaders through innovation, creativity, and technology.
        </p>
      </motion.div>

      {/* Our Journey */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 sm:p-12 shadow-lg mb-14 max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-light mb-6 text-center">
          Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-cyan-400 font-medium">Journey</span>
        </h2>
        <p className="text-gray-300 text-base leading-relaxed mb-4">
          Founded in 2017, NXT Balkan has evolved from a small startup to a digital powerhouse, collaborating with visionary brands worldwide. Our expertise spans community growth, performance marketing, creative direction, global brand strategy, and more.
        </p>
        <p className="text-gray-300 text-base leading-relaxed mb-4">
          We build strong relationships and craft innovative solutions that drive real impact, helping businesses thrive in an ever-changing digital landscape.
        </p>
        <p className="text-gray-300 text-base leading-relaxed">
          Our passion lies in merging creativity with data-driven strategies, delivering scalable, engaging, and memorable digital experiences that resonate with audiences.
        </p>
      </motion.section>

      {/* Core Values */}
      <section className="mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl text-center font-light mb-10"
        >
          Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">Core Values</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
          {coreValues.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <Card className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 shadow-lg h-full flex flex-col items-center text-center">
                <div className="mb-3 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/30 to-pink-500/30">
                  <Icon className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 text-white">{title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl text-center font-light mb-10"
        >
          Meet the <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-cyan-400 font-medium">Team</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map(({ name, role, description, imgSrc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 shadow-lg flex flex-col items-center text-center"
            >
              <img
                src={imgSrc}
                alt={name}
                className="w-24 h-24 rounded-full mb-4 object-cover shadow-md"
              />
              <h3 className="text-xl font-semibold mb-1">{name}</h3>
              <p className="text-cyan-400 font-medium mb-2">{role}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
