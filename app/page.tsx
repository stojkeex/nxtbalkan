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
  Infinity, 
  ShieldCheck, 
  LayoutDashboard, 
  Layers, 
  Flame, 
  Lightbulb, 
  Rocket, 
  Code, 
  Database, 
  Graph, 
  PenTool, 
  MessageSquare, 
  Settings, 
  ChevronDown, 
  ChevronUp, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  ArrowRight
} from "lucide-react";

export default function HomePage() {
  const services = [
    {
      icon: Users,
      title: "Community Growth",
      description: "Tailored strategies to build, engage and scale active digital communities.",
      detail: "Our community growth services help brands foster meaningful connections with their audience through strategic engagement, content curation, and community management. We create ecosystems where brands and customers coexist and thrive together."
    },
    {
      icon: TrendingUp,
      title: "Performance Marketing",
      description: "ROI-focused marketing funnels that convert browsers into brand advocates.",
      detail: "We design and implement high-converting marketing funnels that maximize your return on investment. Our data-driven approach ensures every marketing dollar works harder, smarter, and delivers measurable results."
    },
    {
      icon: Star,
      title: "Creative Direction",
      description: "Innovative campaigns with high-end visuals, storytelling and motion design.",
      detail: "Our creative team crafts visually stunning and user-centric interfaces that captivate audiences and communicate your brand's unique story. From concept to execution, we bring your vision to life with cutting-edge design and production values."
    },
    {
      icon: Globe,
      title: "Global Brand Strategy",
      description: "Position your brand on the international stage with targeted messaging.",
      detail: "We develop comprehensive global brand strategies that resonate across cultures and markets. Our approach ensures consistency while adapting to local nuances, helping your brand expand its reach and influence worldwide."
    },
    {
      icon: Activity,
      title: "Data Intelligence",
      description: "Actionable insights and analytics that drive informed creative decisions.",
      detail: "Our data intelligence services transform raw data into strategic insights. We use advanced analytics and visualization tools to identify patterns, predict trends, and guide your decision-making with confidence."
    },
    {
      icon: LayoutDashboard,
      title: "UI/UX Design",
      description: "Visually captivating and intuitive user experiences across all platforms.",
      detail: "We create beautiful, functional interfaces that delight users and achieve business goals. Our user-centered design process ensures your digital products are not just aesthetically pleasing but also highly usable and effective."
    },
    {
      icon: ShieldCheck,
      title: "Security & Trust",
      description: "Top-tier digital protection and seamless compliance frameworks.",
      detail: "In an increasingly complex digital landscape, we provide robust security solutions and compliance frameworks that protect your assets, build customer trust, and keep your operations running smoothly."
    },
    {
      icon: Rocket,
      title: "Startup Acceleration",
      description: "Go from idea to MVP and scale fast with our agile build & launch model.",
      detail: "Our startup acceleration program helps visionary entrepreneurs transform ideas into market-ready products. We provide the expertise, resources, and support needed to navigate the challenging early stages of growth."
    }
  ];
  const testimonials = [
    {
      name: "Mark Johnson",
      role: "CEO, TechVision",
      text: "NXT Balkan transformed our digital presence from good to exceptional. Their strategic approach and creative execution exceeded our expectations.",
      company: "TechVision Inc."
    },
    {
      name: "Sarah Chen",
      role: "Marketing Director, Global Brands",
      text: "Working with NXT Balkan has been a game-changer for our marketing efforts. Their data-driven insights have significantly improved our campaign performance.",
      company: "Global Brands Ltd."
    },
    {
      name: "Alex Rodriguez",
      role: "Founder, StartupX",
      text: "From concept to launch, NXT Balkan was our ideal partner. Their startup acceleration services helped us navigate the complex journey with confidence.",
      company: "StartupX Ventures"
    }
  ];
  const technologies = [
    { name: "Web Development", icon: Code },
    { name: "Data Analytics", icon: Database },
    { name: "AI Integration", icon: Graph },
    { name: "Design Systems", icon: PenTool },
    { name: "Content Strategy", icon: MessageSquare },
    { name: "DevOps", icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section with Parallax Effect */}
      <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 bg-gradient-to-tr from-[#0a0a0a] via-black to-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-0 left-0 w-full h-full"
              style={{
                background: "radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.05) 0%, rgba(0, 0, 0, 0) 70%)"
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: i * 0.1 }}
            ></motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="max-w-7xl mx-auto w-full text-center space-y-8"
        >
          <motion.img
            src="/nxtbalkancolored2.png"
            alt="NXT Balkan Logo"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="mx-auto w-64 sm:w-80 md:w-96 lg:w-[450px] drop-shadow-[0_0_30px_rgba(0,255,255,0.1)]"
          />
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.6, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight tracking-wide"
          >
            Next-Gen <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">Digital Leadership</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.9, ease: "easeOut" }}
            className="text-gray-300 max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl"
          >
            We transform businesses into cutting-edge digital powerhouses that thrive on innovation, performance, and connection.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <Button className="bg-black/30 backdrop-blur-xl border border-white/10 hover:border-cyan-400/40 text-white font-medium px-10 py-5 rounded-full text-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 animate-pulse">
              Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="bg-black/20 border border-white/10 hover:border-pink-400/40 text-white font-medium px-10 py-5 rounded-full text-xl transition-all duration-300">
              Learn More <ChevronDown className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-cyan-500/10 to-pink-500/10"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.3
              }}
              initial={{ scale: 0 }}
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            ></motion.div>
          ))}
        </div>
      </section>
      {/* Values Section */}
      <section className="py-32 px-6 sm:px-12 bg-black/90">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">Values</span>
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl mt-4">
              Guiding principles that shape our approach and define our success.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: Users,
                title: "Innovation",
                description: "We embrace cutting-edge technologies and methodologies to deliver solutions that push boundaries and set new standards.",
                color: "from-cyan-500"
              },
              {
                icon: Award,
                title: "Excellence",
                description: "We set exceptionally high standards for ourselves and our work, constantly striving for perfection in every detail.",
                color: "from-purple-500"
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "We believe in the power of collective intelligence and work closely with our clients to achieve shared goals.",
                color: "from-amber-500"
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-{value.color}/20 to-{value.color}/40 flex items-center justify-center">
                  <value.icon className={`w-8 h-8 text-${value.color.split('-')[1]}-400 animate-pulse`} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">
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
      {/* Services Section with Expandable Cards */}
      <section className="py-32 px-6 sm:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light">
              Premium <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">Services</span>
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl mt-4">
              Built for visionary brands shaping the future.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.1 }}
                className="relative"
              >
                <div className="Card className="bg-white/5 backdrop-blur-lg border border-white/10 hover:border-cyan-400/30 transition-all duration-300 rounded-3xl h-full shadow-xl">
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Motion Divider */}
      <motion.div
        className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.5 }}
      />
      {/* Innovation Section */}
      <section className="py-28 px-6 sm:px-12 bg-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-12"
          >
            <Flame className="w-12 h-12 text-pink-500 mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
              We <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-cyan-400 font-medium">Reimagine</span> What's Possible
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl">
              Our mission is simple: create stunning, scalable, and strategic digital ecosystems.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                icon: Lightbulb,
                title: "Future-Forward Thinking",
                description: "We don't just react to trends; we anticipate them. Our forward-thinking approach ensures your digital presence remains relevant and impactful in an ever-changing landscape.",
                color: "from-cyan-500"
              },
              {
                icon: Layers,
                title: "Holistic Integration",
                description: "We connect all digital touchpoints to create a seamless ecosystem that works in harmony. From strategy to execution, we ensure every element supports your overarching goals.",
                color: "from-purple-500"
              },
              {
                icon: Rocket,
                title: "Accelerated Growth",
                description: "We implement agile methodologies that accelerate your growth trajectory. Our iterative approach allows for rapid adaptation and continuous improvement.",
                color: "from-pink-500"
              },
              {
                icon: Settings,
                title: "Sustainable Solutions",
                description: "We build solutions that evolve with your business needs. Our forward-thinking architecture ensures longevity and adaptability in a rapidly changing digital world.",
                color: "from-amber-500"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.2 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-{item.color}/20 to-{item.color}/40 flex items-center justify-center flex-shrink-0">
                    <item.icon className={`w-6 h-6 text-${item.color.split('-')[1]}-400 animate-pulse`} />
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
          </motion.div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-32 px-6 sm:px-12 bg-black text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 hover:border-pink-400/20 text-white font-medium px-10 py-14 relative z-10">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-gradient-to-br from-cyan-500/10 to-pink-500/10 opacity-50"></div>
            <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-gradient-to-br from-pink-500/10 to-cyan-500/10 opacity-50"></div>
            
            <div className="relative z-10">
              <div className="mb-6">
                <Star className="w-10 h-10 mx-auto text-cyan-400 animate-spin-slow" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
                Build Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">Digital Legacy</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                We merge strategy, design, and technology into unforgettable digital experiences.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button className="bg-gradient-to-r from-cyan-500/20 to-pink-500/20 backdrop-blur-xl border border-white/10 hover:border-cyan-400/40 text-white font-medium px-10 py-5 rounded-full text-lg shadow-lg hover:shadow-cyan-500/20 animate-bounce">
                  Let’s Talk <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="bg-black/20 border border-white/10 hover:border-pink-400/40 text-white font-medium px-10 py-5 rounded-full text-lg transition-all duration-300">
                  Request a Consultation <ChevronDown className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </section>
      {/* Process Section */}
      <section className="py-32 px-6 sm:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">Process</span>
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl mt-4">
              A structured yet flexible approach to deliver exceptional results.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
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
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.2 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-32 px-6 sm:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light">
              Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">Touch</span>
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl mt-4">
              Let's discuss how we can help you achieve your digital vision.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-6 text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Our Location</h4>
                    <p className="text-gray-300">123 Innovation Drive, Tech District, New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email Us</h4>
                    <p className="text-gray-300">info@nxtbalkan.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Call Us</h4>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">Send Us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                    placeholder="Tell us about your project"
                  ></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-cyan-500/20 to-pink-500/20 backdrop-blur-xl border border-white/10 hover:border-cyan-400/40 text-white font-medium py-3 rounded-lg transition-all duration-300">
                  Send Message <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-16 px-6 sm:px-12 bg-black/90 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="text-white"
            >
              <img src="/nxtbalkancolored2.png" alt="NXT Balkan Logo" className="w-40 h-auto mb-4" />
              <p className="text-gray-400 max-w-xs">
                We transform businesses into cutting-edge digital powerhouses that thrive on innovation, performance, and connection.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="text-white"
            >
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
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
              transition={{ duration: 0.9, delay: 0.4 }}
              className="text-white"
            >
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
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
              transition={{ duration: 0.9, delay: 0.6 }}
              className="text-white"
            >
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4 mb-6">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500/20 transition-colors">
                  <Facebook className="w-5 h-5 text-gray-300 hover:text-cyan-400" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500/20 transition-colors">
                  <Twitter className="w-5 h-5 text-gray-300 hover:text-cyan-400" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500/20 transition-colors">
                  <Instagram className="w-5 h-6 text-gray-300 hover:text-cyan-400" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-gray-300 hover:text-cyan-400" />
                </a>
              </div>
              <Button variant="outline" className="bg-black/30 border border-white/10 hover:border-pink-400/40 text-white font-medium px-6 py-3 rounded-full transition-all duration-300">
                Subscribe to Newsletter <ChevronDown className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
          <div className="border-t border-white/5 mt-16 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2023 NXT Balkan. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
