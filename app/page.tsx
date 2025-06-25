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
  // Data
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

  const values = [
    { icon: Lightbulb, title: "Innovation", description: "Cutting-edge solutions that push boundaries and set standards.", color: "cyan" },
    { icon: Award, title: "Excellence", description: "Exceptionally high standards in every detail of our work.", color: "pink" },
    { icon: Users, title: "Collaboration", description: "Collective intelligence to achieve shared goals.", color: "purple" }
  ];

  const features = [
    { icon: Lightbulb, title: "Future Vision", description: "We anticipate trends to keep your digital presence impactful.", color: "cyan" },
    { icon: Layers, title: "Holistic Approach", description: "Seamless integration of all digital touchpoints.", color: "pink" },
    { icon: Rocket, title: "Rapid Growth", description: "Agile methodologies for accelerated adaptation.", color: "purple" },
    { icon: Settings, title: "Sustainability", description: "Solutions that evolve with your business needs.", color: "cyan" }
  ];

  const processSteps = [
    { icon: Lightbulb, title: "Discovery", description: "Deep dive into your business and audience needs." },
    { icon: LayoutDashboard, title: "Strategy", description: "Comprehensive plan aligned with your objectives." },
    { icon: PenTool, title: "Design", description: "Stunning, user-centric interfaces that engage." },
    { icon: Rocket, title: "Build", description: "Implementation with cutting-edge technology." }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const cardItem = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      transition: {
        duration: 8 + Math.random() * 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const backgroundParticle = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: [1, 1.5, 1],
      opacity: [0.1, 0.3, 0.1],
      x: `${Math.random() * 100 - 50}px`,
      y: `${Math.random() * 100 - 50}px`,
      transition: {
        duration: 15 + Math.random() * 10,
        repeat: Infinity,
        delay: Math.random() * 5
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Enhanced floating particles background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-cyan-500/10 to-pink-500/10"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial="hidden"
            animate="visible"
            variants={backgroundParticle}
          />
        ))}
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-[0.02]"></div>
        
        {/* Animated gradient blobs */}
        <motion.div 
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-cyan-500/5 to-pink-500/10 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-pink-500/5 to-cyan-500/10 blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 bg-black z-10">
        <div className="max-w-7xl mx-auto w-full text-center space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
            className="mb-8 flex justify-center"
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
            transition={{ duration: 1, delay: 0.6, type: "spring" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight"
          >
            Next-Gen <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">Digital</span> Innovation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, type: "spring" }}
            className="text-gray-400 max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl"
          >
            We craft digital experiences that blend innovation, performance, and connection to transform your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, type: "spring" }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white font-medium px-8 py-5 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/20">
                Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 font-medium px-8 py-5 rounded-full text-lg transition-all duration-300">
                Explore More
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-0"></div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 sm:px-12 bg-black relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
              Core <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">Values</span>
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
              The principles that drive our work and define our relationships.
            </p>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {values.map((value, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover="hover"
                className="text-center"
              >
                <motion.div 
                  className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-${value.color}-500/10 to-${value.color}-500/20 flex items-center justify-center`}
                  variants={floatingVariants}
                  animate="float"
                >
                  <value.icon className={`w-8 h-8 text-${value.color}-400`} />
                </motion.div>
                <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400">
                  {value.title}
                </h3>
                <p className="text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 sm:px-12 bg-gradient-to-b from-black to-gray-900/50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">Expertise</span>
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
              Specialized services designed for digital transformation.
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
              <motion.div
                key={i}
                variants={cardItem}
                whileHover="hover"
              >
                <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-400/30 transition-all duration-300 rounded-xl h-full group hover:shadow-lg hover:shadow-cyan-500/10">
                  <CardContent className="p-6">
                    <motion.div 
                      className="mb-4 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/10 to-pink-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <service.icon className="w-6 h-6 text-cyan-400 group-hover:text-pink-400 transition-colors" />
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-3 text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 sm:px-12 bg-black relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-center mb-12"
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Flame className="w-10 h-10 text-pink-500 mx-auto mb-4" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
              Why <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-cyan-400 font-medium">Choose Us</span>
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto">
              We combine strategy, creativity, and technology to deliver exceptional results.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {features.map((item, i) => (
              <motion.div
                key={i}
                variants={cardItem}
                whileHover="hover"
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300 relative overflow-hidden"
              >
                {/* Animated background element */}
                <motion.div 
                  className={`absolute -right-10 -top-10 w-32 h-32 rounded-full bg-gradient-to-br from-${item.color}-500/5 to-${item.color}-500/10 blur-xl`}
                  animate={{
                    x: [0, 10, 0],
                    y: [0, 10, 0],
                    opacity: [0.05, 0.1, 0.05]
                  }}
                  transition={{
                    duration: 8 + Math.random() * 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="flex items-start gap-4 relative z-10">
                  <motion.div 
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br from-${item.color}-500/10 to-${item.color}-500/20 flex items-center justify-center flex-shrink-0`}
                    whileHover={{ rotate: 10 }}
                  >
                    <item.icon className={`w-6 h-6 text-${item.color}-400`} />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 sm:px-12 bg-gradient-to-b from-black to-gray-900 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring" }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-gray-900 to-black backdrop-blur-sm border border-gray-800 rounded-2xl p-8 sm:p-12 relative overflow-hidden">
            {/* Enhanced animated background elements */}
            <motion.div 
              className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-cyan-500/10 to-pink-500/10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
                x: [-20, 0, -20],
                y: [-20, 0, -20]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-br from-pink-500/10 to-cyan-500/10"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.2, 0.1],
                x: [20, 0, 20],
                y: [20, 0, 20]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            
            <div className="relative z-10 text-center">
              <motion.div 
                className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500/10 to-pink-500/10 flex items-center justify-center"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Rocket className="w-8 h-8 text-cyan-400" />
              </motion.div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
                Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">Elevate</span> Your Brand?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Let's create something extraordinary together. Our team is ready to bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white font-medium px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/20">
                    Get Started <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 font-medium px-8 py-4 rounded-full text-lg transition-all duration-300">
                    Learn More
                  </Button>
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 sm:px-12 bg-black relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">Process</span>
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
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                variants={cardItem}
                whileHover="hover"
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-pink-400/30 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Animated connector lines */}
                {i < processSteps.length - 1 && (
                  <motion.div 
                    className="hidden lg:block absolute -right-6 top-1/2 h-[2px] w-12 bg-gradient-to-r from-pink-500/20 to-cyan-500/20"
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 + 0.3 }}
                  />
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <motion.div 
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/10 to-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <step.icon className="w-5 h-5 text-pink-400 group-hover:text-cyan-400 transition-colors" />
                  </motion.div>
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

      {/* Contact Section */}
      <section className="py-24 px-6 sm:px-12 bg-gradient-to-b from-black to-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
              Let's <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">Connect</span>
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
              Get in touch to discuss your project or learn more about our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 relative overflow-hidden"
            >
              {/* Animated background elements */}
              <motion.div 
                className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500/5 to-cyan-500/10 blur-xl"
                animate={{
                  x: [0, 10, 0],
                  y: [0, 10, 0],
                  opacity: [0.05, 0.1, 0.05]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-6 text-white">Contact Info</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/10 to-cyan-500/20 flex items-center justify-center"
                      whileHover={{ rotate: 10 }}
                    >
                      <MapPin className="w-6 h-6 text-cyan-400" />
                    </motion.div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Location</h4>
                      <p className="text-gray-400">123 Digital Avenue, Tech District, NY 10001</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500/10 to-pink-500/20 flex items-center justify-center"
                      whileHover={{ rotate: 10 }}
                    >
                      <Mail className="w-6 h-6 text-pink-400" />
                    </motion.div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Email</h4>
                      <p className="text-gray-400">contact@nxtbalkan.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/10 to-cyan-500/20 flex items-center justify-center"
                      whileHover={{ rotate: 10 }}
                    >
                      <Phone className="w-6 h-6 text-cyan-400" />
                    </motion.div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Phone</h4>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 relative overflow-hidden"
            >
              {/* Animated background elements */}
              <motion.div 
                className="absolute -left-10 -bottom-10 w-32 h-32 rounded-full bg-gradient-to-br from-pink-500/5 to-pink-500/10 blur-xl"
                animate={{
                  x: [0, -10, 0],
                  y: [0, -10, 0],
                  opacity: [0.05, 0.1, 0.05]
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-6 text-white">Send a Message</h3>
                <form className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300"
                      placeholder="Your email"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300"
                      placeholder="Tell us about your project"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <Button className="w-full bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white font-medium py-3 rounded-lg transition-all duration-300">
                      Send Message <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 sm:px-12 bg-black relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
              What Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">Clients Say</span>
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
              Hear from businesses that have transformed with our solutions.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { 
                quote: "Their creativity and strategic vision helped us double our revenue in 6 months.",
                author: "Elena D., TechFounder",
                color: "cyan"
              },
              { 
                quote: "The UX overhaul was a game changer. Engagement went through the roof.",
                author: "Mark T., Product Manager",
                color: "pink"
              },
              { 
                quote: "Best digital agency we've ever worked with. Period.",
                author: "Amina R., COO",
                color: "cyan"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                variants={cardItem}
                whileHover="hover"
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 relative overflow-hidden"
              >
                {/* Animated quote mark */}
                <motion.div 
                  className={`absolute -top-4 -left-4 text-${testimonial.color}-500/10 text-7xl font-serif`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  "
                </motion.div>
                <p className="text-gray-400 relative z-10">{testimonial.quote}</p>
                <p className={`mt-4 text-${testimonial.color}-400 font-medium relative z-10`}>— {testimonial.author}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 px-6 sm:px-12 bg-black relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
              Trusted <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-cyan-400 font-medium">By</span>
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
              We partner with industry leaders and innovative startups.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-12"
          >
            {[1, 2, 3, 4].map((partner, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image 
                  src={`/partner${partner}.png`} 
                  alt={`Partner ${partner}`} 
                  width={160} 
                  height={60} 
                  className="h-12 w-auto grayscale hover:grayscale-0 transition duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 px-6 sm:px-12 bg-black relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
              Industry <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">Recognition</span>
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
              Our work has been recognized by leading industry organizations.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { title: "🏆 Best UX Design 2024", description: "European Design Conference", color: "pink" },
              { title: "🏆 Digital Agency of the Year", description: "Startup World Awards", color: "cyan" },
              { title: "🏆 Innovation in Tech", description: "Balkan Tech Summit", color: "pink" },
              { title: "🏆 Creative Excellence", description: "Global Digital Awards", color: "cyan" }
            ].map((award, i) => (
              <motion.div
                key={i}
                variants={cardItem}
                whileHover="hover"
                className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl relative overflow-hidden"
              >
                {/* Animated trophy */}
                <motion.div
                  className="absolute -top-4 -right-4 text-5xl opacity-10"
                  animate={{
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  🏆
                </motion.div>
                <p className={`text-${award.color}-400 font-bold text-xl mb-2 relative z-10`}>{award.title}</p>
                <p className="text-gray-400 text-sm relative z-10">{award.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 sm:px-12 bg-black relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
              Frequently <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">Asked Questions</span>
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
              Answers to common questions about our services and process.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            {[
              { 
                question: "How long does a typical project take?", 
                answer: "Most projects take between 4 to 12 weeks depending on the scope and complexity.",
                color: "pink"
              },
              { 
                question: "What industries do you specialize in?", 
                answer: "We work with tech startups, e-commerce brands, fintech, education, and more.",
                color: "cyan"
              },
              { 
                question: "Do you offer post-launch support?", 
                answer: "Yes, we offer ongoing maintenance, performance optimization, and growth strategy.",
                color: "pink"
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-b border-gray-800 pb-6"
              >
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="cursor-pointer"
                >
                  <h3 className={`text-xl font-medium text-${faq.color}-400`}>{faq.question}</h3>
                  <motion.p 
                    className="text-gray-400 mt-2"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
