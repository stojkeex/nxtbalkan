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
      {/* Floating particles background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-cyan-500/10 to-pink-500/10"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
              x: `${Math.random() * 100 - 50}px`,
              y: `${Math.random() * 100 - 50}px`
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 bg-black z-10">
        <div className="max-w-7xl mx-auto w-full text-center space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8 flex justify-center"
          >
            <div className="w-[200px] h-[80px] sm:w-[300px] sm:h-[120px] relative">
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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight"
          >
            Next-Gen <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">Digital</span> Innovation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-gray-400 max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl"
          >
            We craft digital experiences that blend innovation, performance, and connection to transform your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6"
          >
            <Button className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white font-medium px-8 py-5 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/20">
              Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 font-medium px-8 py-5 rounded-full text-lg transition-all duration-300">
              Explore More
            </Button>
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
            transition={{ duration: 0.8 }}
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
                className="text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-${value.color}-500/10 to-${value.color}-500/20 flex items-center justify-center`}>
                  <value.icon className={`w-8 h-8 text-${value.color}-400`} />
                </div>
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
            transition={{ duration: 0.8 }}
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
                variants={item}
              >
                <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-400/30 transition-all duration-300 rounded-xl h-full group hover:shadow-lg hover:shadow-cyan-500/10">
                  <CardContent className="p-6">
                    <div className="mb-4 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/10 to-pink-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                      <service.icon className="w-6 h-6 text-cyan-400 group-hover:text-pink-400 transition-colors" />
                    </div>
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
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Flame className="w-10 h-10 text-pink-500 mx-auto mb-4" />
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
                variants={item}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-${item.color}-500/10 to-${item.color}-500/20 flex items-center justify-center flex-shrink-0`}>
                    <item.icon className={`w-6 h-6 text-${item.color}-400`} />
                  </div>
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
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-gray-900 to-black backdrop-blur-sm border border-gray-800 rounded-2xl p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-cyan-500/10 to-pink-500/10 animate-pulse"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-br from-pink-500/10 to-cyan-500/10 animate-pulse"></div>
            
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500/10 to-pink-500/10 flex items-center justify-center">
                <Rocket className="w-8 h-8 text-cyan-400" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
                Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">Elevate</span> Your Brand?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Let's create something extraordinary together. Our team is ready to bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white font-medium px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/20">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 font-medium px-8 py-4 rounded-full text-lg transition-all duration-300">
                  Learn More
                </Button>
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
            transition={{ duration: 0.8 }}
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
                variants={item}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-pink-400/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/10 to-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                    <step.icon className="w-5 h-5 text-pink-400 group-hover:text-cyan-400 transition-colors" />
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

      {/* Contact Section */}
      <section className="py-24 px-6 sm:px-12 bg-gradient-to-b from-black to-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
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
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">Contact Info</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/10 to-cyan-500/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Location</h4>
                    <p className="text-gray-400">123 Digital Avenue, Tech District, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500/10 to-pink-500/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <p className="text-gray-400">contact@nxtbalkan.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/10 to-cyan-500/20 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Phone</h4>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300"
                    placeholder="Tell us about your project"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white font-medium py-3 rounded-lg transition-all duration-300">
                  Send Message <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 sm:px-12 bg-black border-t border-gray-800 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-6 bg-cyan-400 rounded-full"></div>
                <div className="w-2 h-8 bg-pink-400 rounded-full"></div>
                <div className="w-2 h-6 bg-cyan-400 rounded-full"></div>
                <span className="ml-2 font-bold">NXT BALKAN</span>
              </div>
              <p className="text-gray-400 text-sm max-w-xs">
                Transforming businesses through innovative digital solutions and strategic thinking.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white"
            >
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                {services.slice(0, 5).map((service, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-cyan-400 transition-colors">
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white"
            >
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-pink-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Contact</a></li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-white"
            >
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-3 mb-6">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a 
                    key={i} 
                    href="#" 
                    className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center hover:bg-gradient-to-br from-cyan-500/10 to-pink-500/10 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
              <Button className="w-full bg-gradient-to-r from-cyan-500/10 to-pink-500/10 border border-gray-800 text-white hover:bg-gray-900 font-medium py-3 rounded-lg transition-all duration-300">
                Subscribe to Newsletter
              </Button>
            </motion.div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} NXT Balkan. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
