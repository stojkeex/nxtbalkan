"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users, TrendingUp, Star, Globe, Activity,
  ShieldCheck, LayoutDashboard, Rocket, Flame,
  Lightbulb, Layers, Settings, Code, Database,
  Graph, PenTool, MessageSquare, ChevronDown,
  Mail, Phone, MapPin, Facebook, Twitter,
  Instagram, Linkedin, ArrowRight, Award
} from "lucide-react";
import Image from "next/image";

export default function Index() {
  const services = [
    { icon: Users, title: "Community Growth", description: "Tailored strategies to build and scale active digital communities." },
    { icon: TrendingUp, title: "Performance Marketing", description: "ROI-focused marketing that converts browsers into buyers." },
    { icon: Star, title: "Creative Direction", description: "Innovative campaigns with high-end visuals and storytelling." },
    { icon: Globe, title: "Global Strategy", description: "Position your brand internationally with targeted messaging." },
    { icon: Activity, title: "Data Intelligence", description: "Actionable insights that drive creative decisions." },
    { icon: LayoutDashboard, title: "UI/UX Design", description: "Intuitive user experiences across all platforms." },
    { icon: ShieldCheck, title: "Security", description: "Top-tier digital protection and compliance frameworks." },
    { icon: Rocket, title: "Startup Acceleration", description: "From idea to MVP with our agile launch model." }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-cyan-500/10 to-pink-500/10"
            style={{
              width: `${Math.random() * 80 + 50}px`,
              height: `${Math.random() * 80 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.1, 0.3, 0.1],
              x: `${Math.random() * 80 - 40}px`,
              y: `${Math.random() * 80 - 40}px`
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 bg-black z-10">
        <div className="max-w-7xl mx-auto w-full text-center space-y-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-10 flex justify-center"
          >
            <div className="w-[380px] h-[200px] sm:w-[530px] sm:h-[250px] relative">
              <Image
                src="/nxtbalkancolored2.png"
                alt="NXT Balkan Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight leading-tight"
          >
            Next-Gen <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">Digital</span> Innovation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-gray-400 max-w-3xl mx-auto text-xl sm:text-2xl"
          >
            Crafting bold, performant, emotion-driven digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-5 pt-8"
          >
            <Button className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white font-medium px-8 py-5 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-pink-500/20">
              Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 font-medium px-8 py-5 rounded-full text-lg transition-all duration-300">
              Explore More
            </Button>
          </motion.div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black z-0"></div>
      </section>
            {/* Values Section */}
      <section className="py-24 px-6 sm:px-12 bg-black relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              Core <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-semibold">Values</span>
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
              The principles that drive our mission and relationships.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {[
              { icon: Lightbulb, title: "Innovation", description: "Solutions that push boundaries.", color: "cyan" },
              { icon: Award, title: "Excellence", description: "Attention to every detail.", color: "pink" },
              { icon: Users, title: "Collaboration", description: "Unified teamwork fuels results.", color: "purple" }
            ].map((value, i) => (
              <motion.div
                key={i}
                variants={item}
                className="text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-${value.color}-500/10 to-${value.color}-500/20 flex items-center justify-center`}>
                  <value.icon className={`w-8 h-8 text-${value.color}-400`} />
                </div>
                <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services / Expertise Section */}
      <section className="py-24 px-6 sm:px-12 bg-gradient-to-b from-black via-gray-900/80 to-black relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-semibold">Expertise</span>
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
              Specialized digital services to grow your brand.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, i) => (
              <motion.div key={i} variants={item}>
                <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-pink-500/30 transition-all duration-300 rounded-xl h-full group hover:shadow-lg hover:shadow-pink-500/10">
                  <CardContent className="p-6">
                    <div className="mb-4 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/10 to-pink-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                      <service.icon className="w-6 h-6 text-cyan-400 group-hover:text-pink-400 transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-white">{service.title}</h3>
                    <p className="text-gray-400 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
            {/* Testimonials Section */}
      <section className="py-24 px-6 sm:px-12 bg-black relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }} 
            className="text-4xl font-light text-white mb-16"
          >
            What <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-semibold">Clients Say</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-xl"
              >
                <p className="text-gray-300 mb-4">"Their creativity and precision transformed our online presence!"</p>
                <div className="text-pink-400 font-semibold">Client {i + 1}</div>
                <div className="text-sm text-gray-500">Company {i + 1}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 px-6 sm:px-12 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-light text-white mb-12">
            Powered By <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-cyan-400 font-semibold">Technology</span>
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-10 text-white text-3xl">
            {['Next.js', 'Tailwind CSS', 'Vercel', 'Framer Motion', 'Lucide Icons', 'OpenAI', 'TypeScript'].map((tech, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="px-6 py-4 bg-gray-900/50 border border-gray-800 rounded-lg backdrop-blur-sm shadow-md hover:shadow-cyan-500/10 transition-all"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-24 px-6 sm:px-12 bg-black text-white text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light mb-16">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-semibold">Impact</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[{label: 'Clients', val: 120}, {label: 'Projects', val: 340}, {label: 'Awards', val: 15}, {label: 'Countries', val: 22}].map(({label, val}, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <div className="text-5xl font-bold text-pink-400">{val}+</div>
                <div className="mt-2 text-gray-400">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating CTA Section */}
      <section className="relative py-32 bg-gradient-to-br from-cyan-950 via-black to-pink-950 text-white overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="text-5xl font-light mb-6">
            Launch With <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-cyan-400 font-semibold">Us</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">Let’s craft the future together. Schedule your first consultation today.</p>
          <Button className="bg-gradient-to-r from-cyan-500 to-pink-500 px-10 py-5 text-lg font-medium rounded-full">
            Book a Call
          </Button>
        </motion.div>
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400/10 to-pink-500/10"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{ y: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
      </section>
            {/* Process Section */}
      <section className="py-24 px-6 sm:px-12 bg-black relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-semibold">Process</span>
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
              A clear, structured approach to deliver exceptional results.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Lightbulb, title: "Discovery", description: "Deep dive into your business and audience needs." },
              { icon: LayoutDashboard, title: "Strategy", description: "Comprehensive plan aligned with your objectives." },
              { icon: PenTool, title: "Design", description: "Stunning, user-centric interfaces that engage." },
              { icon: Rocket, title: "Build", description: "Implementation with cutting-edge technology." }
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={item}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-pink-400/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/10 to-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                    <step.icon className="w-6 h-6 text-pink-400 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>



