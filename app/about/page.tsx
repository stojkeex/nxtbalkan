"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Users,
  Star,
  Activity,
  Rocket,
  Globe,
  ShieldCheck,
  LayoutDashboard,
  Lightbulb,
  Flame,
  MessageCircle,
  Heart,
} from "lucide-react";

export default function AboutPage() {
  const teamMembers = [
    { name: "Ana Novak", role: "Founder & CEO", description: "Visionary leader driving innovation and growth.", imgSrc: "/team/ana.jpg" },
    { name: "Marko Kranjc", role: "Creative Director", description: "Crafts stunning campaigns with storytelling & design.", imgSrc: "/team/marko.jpg" },
    { name: "Sara Petrovic", role: "Head of Marketing", description: "Expert in scaling brands through data-driven strategies.", imgSrc: "/team/sara.jpg" },
    { name: "Luka Zupan", role: "Lead Developer", description: "Builds scalable and performant digital platforms.", imgSrc: "/team/luka.jpg" },
  ];

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

  const testimonials = [
    {
      name: "Eva K.",
      role: "CEO, InnovateX",
      quote:
        "NXT Balkan transformed our digital presence — their team is creative, reliable, and results-driven.",
      imgSrc: "/testimonials/eva.jpg",
    },
    {
      name: "Matej S.",
      role: "Founder, ScaleUp",
      quote:
        "The strategic insights and execution blew us away. Our growth accelerated in months, not years.",
      imgSrc: "/testimonials/matej.jpg",
    },
    {
      name: "Jana P.",
      role: "CMO, BrightTech",
      quote:
        "A true partner in creativity and data-driven marketing — couldn’t recommend more.",
      imgSrc: "/testimonials/jana.jpg",
    },
  ];

  const partners = [
    { name: "TechWave", logo: "/partners/techwave.png" },
    { name: "FutureLabs", logo: "/partners/futurelabs.png" },
    { name: "GlobalReach", logo: "/partners/globalreach.png" },
    { name: "BrightSolutions", logo: "/partners/brightsolutions.png" },
  ];

  const stories = [
    {
      title: "How We Helped Scale a Startup to Series A",
      excerpt:
        "Discover the strategy and execution behind a rapid growth story that took a startup from idea to funding in less than a year.",
      imgSrc: "/stories/startup-scale.jpg",
    },
    {
      title: "Rebranding a Global Tech Leader",
      excerpt:
        "See how we crafted a fresh brand identity and digital presence for an international tech company.",
      imgSrc: "/stories/rebranding.jpg",
    },
    {
      title: "Driving Engagement Through Community Building",
      excerpt:
        "Learn about our approach to creating and nurturing digital communities that boost loyalty and sales.",
      imgSrc: "/stories/community-building.jpg",
    },
  ];

  const cardVariants = {
    offscreen: { opacity: 0, y: 30, scale: 0.97 },
    onscreen: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", bounce: 0.25, duration: 0.7 },
    },
    hover: {
      scale: 1.02,
      y: -3,
      transition: { duration: 0.25, ease: "easeInOut" },
      boxShadow: "0 10px 20px rgba(255, 105, 180, 0.25)", // mehkejša roza senca
      borderRadius: "2rem", // poudarimo ovalnost tudi med hoverjem
    },
  };

  return (
    <div
      className="min-h-screen bg-black text-white px-6 sm:px-12 pt-40 pb-16 max-w-7xl mx-auto space-y-28"
      // pt-40 = več prostora od vrha, da ni blizu navbarja
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-5xl sm:text-6xl font-extralight tracking-wide mb-4">
          About{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">
            NXT Balkan
          </span>
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
          We are a pioneering digital agency dedicated to transforming brands into next-generation leaders through innovation, creativity, and technology.
        </p>
      </motion.div>

      {/* Our Journey */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-[2rem] p-10 sm:p-14 shadow-lg max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-light mb-6">
          Our{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-cyan-400 font-medium">
            Journey
          </span>
        </h2>
        <p className="text-gray-300 text-base leading-relaxed mb-4 max-w-xl mx-auto">
          Founded in 2017, NXT Balkan has evolved from a small startup to a digital powerhouse, collaborating with visionary brands worldwide. Our expertise spans community growth, performance marketing, creative direction, global brand strategy, and more.
        </p>
        <p className="text-gray-300 text-base leading-relaxed mb-4 max-w-xl mx-auto">
          We build strong relationships and craft innovative solutions that drive real impact, helping businesses thrive in an ever-changing digital landscape.
        </p>
        <p className="text-gray-300 text-base leading-relaxed max-w-xl mx-auto">
          Our passion lies in merging creativity with data-driven strategies, delivering scalable, engaging, and memorable digital experiences that resonate with audiences.
        </p>
      </motion.section>

      {/* Vision & Mission (dvostolpec) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-[2rem] p-10 shadow-lg flex flex-col items-center text-center"
        >
          <Flame className="w-12 h-12 text-pink-500 mb-6" />
          <h3 className="text-3xl font-light mb-4">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-cyan-400 font-medium">
              Vision
            </span>
          </h3>
          <p className="text-gray-300 leading-relaxed max-w-md">
            To be the premier digital transformation partner that empowers brands globally to innovate, grow, and inspire with cutting-edge technology and creativity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-[2rem] p-10 shadow-lg flex flex-col items-center text-center"
        >
          <Lightbulb className="w-12 h-12 text-cyan-400 mb-6" />
          <h3 className="text-3xl font-light mb-4">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">
              Mission
            </span>
          </h3>
          <p className="text-gray-300 leading-relaxed max-w-md">
            To deliver innovative, data-driven digital solutions that help businesses scale, engage audiences, and build lasting digital legacies.
          </p>
        </motion.div>
      </section>

      {/* Core Values */}
      <section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl text-center font-light mb-14"
        >
          Our{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">
            Core Values
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {coreValues.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={i}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              whileHover="hover"
              variants={cardVariants}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-[2rem] p-7 shadow-lg h-full flex flex-col items-center text-center cursor-pointer select-none">
                <div className="mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/30 to-pink-500/30">
                  <Icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
                <p className="text-gray-300 text-sm">{description}</p>
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
          className="text-4xl text-center font-light mb-14"
        >
          Meet the{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-cyan-400 font-medium">
            Team
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {teamMembers.map(({ name, role, description, imgSrc }, i) => (
            <motion.div
              key={i}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              whileHover="hover"
              variants={cardVariants}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-[2rem] p-6 shadow-lg cursor-pointer select-none flex flex-col items-center text-center">
                <img
                  src={imgSrc}
                  alt={name}
                  className="rounded-full w-32 h-32 object-cover mb-4 border-2 border-cyan-400"
                  loading="lazy"
                />
                <h3 className="text-lg font-semibold text-white">{name}</h3>
                <p className="text-cyan-400 text-sm font-medium mb-2">{role}</p>
                <p className="text-gray-300 text-xs">{description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stories Section */}
      <section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl text-center font-light mb-14"
        >
          Success{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-cyan-400 font-medium">
            Stories
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {stories.map(({ title, excerpt, imgSrc }, i) => (
            <motion.div
              key={i}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              whileHover="hover"
              variants={cardVariants}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-[2rem] p-5 shadow-lg cursor-pointer select-none flex flex-col">
                <img
                  src={imgSrc}
                  alt={title}
                  className="rounded-xl mb-5 object-cover h-48 w-full"
                  loading="lazy"
                />
                <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
                <p className="text-gray-300 text-sm flex-grow">{excerpt}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl text-center font-light mb-14"
        >
          Our{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">
            Partners
          </span>
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-14 max-w-5xl mx-auto items-center">
          {partners.map(({ name, logo }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="w-36 h-20 flex items-center justify-center filter grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
              title={name}
            >
              <img src={logo} alt={name} className="max-h-16 object-contain" loading="lazy" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl text-center font-light mb-14"
        >
          What Our{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-cyan-400 font-medium">
            Clients Say
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {testimonials.map(({ name, role, quote, imgSrc }, i) => (
            <motion.div
              key={i}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              whileHover="hover"
              variants={cardVariants}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-[2rem] p-7 shadow-lg cursor-pointer select-none flex flex-col items-center text-center">
                <img
                  src={imgSrc}
                  alt={name}
                  className="rounded-full w-20 h-20 object-cover mb-4 border-2 border-pink-500"
                  loading="lazy"
                />
                <p className="text-gray-300 italic mb-4">"{quote}"</p>
                <h4 className="text-white font-semibold">{name}</h4>
                <p className="text-pink-500 text-sm">{role}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
