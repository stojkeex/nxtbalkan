"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  TrendingUp, 
  Star, 
  Globe, 
  Activity, 
  ShieldCheck, 
  LayoutDashboard, 
  Rocket,
  Flame, 
  Lightbulb, 
  Layers, 
  Settings,
  Code, 
  Database, 
  Graph, 
  PenTool, 
  MessageSquare, 
  ChevronDown, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowRight,
  Award
} from "lucide-react";

export default function Index() {
  const services = [
    {
      icon: Users,
      title: "Community Growth",
      description: "Tailored strategies to build, engage and scale active digital communities."
    },
    {
      icon: TrendingUp,
      title: "Performance Marketing",
      description: "ROI-focused marketing funnels that convert browsers into brand advocates."
    },
    {
      icon: Star,
      title: "Creative Direction",
      description: "Innovative campaigns with high-end visuals, storytelling and motion design."
    },
    {
      icon: Globe,
      title: "Global Brand Strategy",
      description: "Position your brand on the international stage with targeted messaging."
    },
    {
      icon: Activity,
      title: "Data Intelligence",
      description: "Actionable insights and analytics that drive informed creative decisions."
    },
    {
      icon: LayoutDashboard,
      title: "UI/UX Design",
      description: "Visually captivating and intuitive user experiences across all platforms."
    },
    {
      icon: ShieldCheck,
      title: "Security & Trust",
      description: "Top-tier digital protection and seamless compliance frameworks."
    },
    {
      icon: Rocket,
      title: "Startup Acceleration",
      description: "Go from idea to MVP and scale fast with our agile build & launch model."
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and methodologies to deliver solutions that push boundaries and set new standards.",
      color: "cyan"
    },
    {
      icon: Award,
      title: "Excellence", 
      description: "We set exceptionally high standards for ourselves and our work, constantly striving for perfection in every detail.",
      color: "purple"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of collective intelligence and work closely with our clients to achieve shared goals.",
      color: "amber"
    }
  ];

  const features = [
    {
      icon: Lightbulb,
      title: "Future-Forward Thinking",
      description: "We don't just react to trends; we anticipate them. Our forward-thinking approach ensures your digital presence remains relevant and impactful.",
      color: "cyan"
    },
    {
      icon: Layers,
      title: "Holistic Integration",
      description: "We connect all digital touchpoints to create a seamless ecosystem that works in harmony.",
      color: "purple"
    },
    {
      icon: Rocket,
      title: "Accelerated Growth",
      description: "We implement agile methodologies that accelerate your growth trajectory with rapid adaptation.",
      color: "pink"
    },
    {
      icon: Settings,
      title: "Sustainable Solutions",
      description: "We build solutions that evolve with your business needs, ensuring longevity and adaptability.",
      color: "amber"
    }
  ];

  const processSteps = [
    {
      icon: Lightbulb,
      title: "Discovery",
      description: "We dive deep into your business, goals, and audience to understand the core challenges and opportunities."
    },
    {
      icon: LayoutDashboard,
      title: "Strategy",
      description: "We develop a comprehensive digital strategy that aligns with your business objectives and market position."
    },
    {
      icon: PenTool,
      title: "Design",
      description: "Our design team creates visually stunning and user-centric interfaces that delight and engage."
    },
    {
      icon: Rocket,
      title: "Implementation",
      description: "We bring your vision to life with cutting-edge technology and best practices in development."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 bg-gradient-to-tr from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-pink-500/5"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
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
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: Math.random() * 8 + 8,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>

        <motion.div className="max-w-7xl mx-auto w-full text-center space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="mb-8"
          >
            <div className="w-64 sm:w-80 md:w-96 lg:w-[450px] h-32 mx-auto bg-gradient-to-r from-cyan-400 to-pink-400 rounded-lg flex items-center justify-center">
              <span className="text-black text-2xl font-bold">NXT BALKAN</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide"
          >
            Next-Gen <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">Digital Leadership</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.9 }}
            className="text-gray-300 max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl"
          >
            We transform businesses into cutting-edge digital powerhouses that thrive on innovation, performance, and connection.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.2 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <Button className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white font-medium px-10 py-6 rounded-full text-lg transition-all duration-300 shadow-lg">
              Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 font-medium px-10 py-6 rounded-full text-lg transition-all duration-300">
              Learn More <ChevronDown className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 sm:px-12 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">Values</span>
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl">
              Guiding principles that shape our approach and define our success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-${value.color}-500/20 to-${value.color}-500/40 flex items-center justify-center`}>
                  <value.icon className={`w-8 h-8 text-${value.color}-400`} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {value.title}
                </h3>
                <p className="text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
              Premium <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">Services</span>
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl">
              Built for visionary brands shaping the future.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-lg border border-white/10 hover:border-cyan-400/30 transition-all duration-300 rounded-2xl h-full">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-cyan-500/20 to-pink-500/20 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-24 px-6 sm:px-12 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-12"
          >
            <Flame className="w-10 h-10 text-pink-500 mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
              We <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-cyan-400 font-medium">Reimagine</span> What's Possible
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl">
              Our mission is simple: create stunning, scalable, and strategic digital ecosystems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-${item.color}-500/20 to-${item.color}-500/40 flex items-center justify-center flex-shrink-0`}>
                    <item.icon className={`w-6 h-6 text-${item.color}-400`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 hover:border-pink-400/20 transition-all duration-300 rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-cyan-500/10 to-pink-500/10"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-br from-pink-500/10 to-cyan-500/10"></div>
            
            <div className="relative z-10">
              <Star className="w-8 h-8 mx-auto text-cyan-400 mb-4" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
                Build Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">Digital Legacy</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                We merge strategy, design, and technology into unforgettable digital experiences.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white font-medium px-8 py-4 rounded-full text-lg transition-all duration-300">
                  Let's Talk <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 font-medium px-8 py-4 rounded-full text-lg transition-all duration-300">
                  Request Consultation <ChevronDown className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 sm:px-12 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">Process</span>
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl">
              A structured yet flexible approach to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.2 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-pink-500/20 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 sm:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
              Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">Touch</span>
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl">
              Let's discuss how we can help you achieve your digital vision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Our Location</h4>
                    <p className="text-gray-300">123 Innovation Drive, Tech District, New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email Us</h4>
                    <p className="text-gray-300">info@nxtbalkan.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Call Us</h4>
                    <p className="text-gray-300">+1 (555) 123-456-7890</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">Send Us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300"
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
      <footer className="py-16 px-6 sm:px-12 bg-gray-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <div className="w-32 h-8 bg-gradient-to-r from-cyan-400 to-pink-400 rounded flex items-center justify-center mb-4">
                <span className="text-black text-sm font-bold">NXT BALKAN</span>
              </div>
              <p className="text-gray-400 text-sm max-w-xs">
                We transform businesses into cutting-edge digital powerhouses that thrive on innovation, performance, and connection.
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
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Community Growth</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Performance Marketing</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Creative Direction</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Global Brand Strategy</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Data Intelligence</a></li>
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
                <li><a href="#" className="hover:text-cyan-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Our Process</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact Us</a></li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-white"
            >
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-3 mb-4">
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500/20 transition-colors">
                  <Facebook className="w-4 h-4 text-gray-300 hover:text-cyan-400" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500/20 transition-colors">
                  <Twitter className="w-4 h-4 text-gray-300 hover:text-cyan-400" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500/20 transition-colors">
                  <Instagram className="w-4 h-4 text-gray-300 hover:text-cyan-400" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500/20 transition-colors">
                  <Linkedin className="w-4 h-4 text-gray-300 hover:text-cyan-400" />
                </a>
              </div>
              <Button className="bg-black/20 border border-white/10 hover:border-cyan-400/40 text-white font-medium px-4 py-2 rounded-lg text-sm transition-all duration-300">
                Subscribe to Newsletter
              </Button>
            </motion.div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2024 NXT Balkan. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
