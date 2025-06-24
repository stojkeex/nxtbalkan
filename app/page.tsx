"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Users, TrendingUp, Zap, Globe, Activity, 
  LayoutDashboard, ShieldCheck, Rocket, 
  ArrowRight, Star, Layers, 
  Flame, Lightbulb, Infinity, 
  ChevronDown, ChevronUp, 
  Code, Cpu, Database, 
  Globe2, BarChart, 
  Headphones, Mail, Phone, 
  Instagram, Twitter, Facebook, 
  ExternalLink, Calendar, 
  Award, Users as TeamIcon, 
  Building, Heart, 
  Shield, Lock, 
  MessageSquare, 
  Coffee, 
  Gift, 
  Target, 
  Sparkles, 
  Layers2, 
  Globe3, 
  Database2 
} from "lucide-react";

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedService, setExpandedService] = useState(null);
  const [activeTab, setActiveTab] = useState('services');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);
  
  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechVision Inc.",
      content: "NXT Balkan transformed our digital presence from a fledgling startup to an industry leader. Their strategic approach and innovative solutions exceeded all our expectations.",
      avatar: "https://picsum.photos/seed/sarah123/100/100.jpg"
    },
    {
      name: "Michael Chen",
      role: "CTO, Global Systems",
      content: "The team at NXT Balkan has a rare combination of technical expertise and creative vision. They don't just build products; they craft experiences that resonate with users.",
      avatar: "https://picsum.photos/seed/michael456/100/100.jpg"
    },
    {
      name: "Elena Rodriguez",
      role: "Marketing Director, Future Brands",
      content: "Working with NXT Balkan was a game-changer for our brand. Their data-driven approach to marketing has significantly increased our ROI and customer engagement.",
      avatar: "https://picsum.photos/seed/elena789/100/100.jpg"
    }
  ];
  
  // Services data with more detailed descriptions
  const services = [
    {
      icon: Users,
      title: "Community Growth",
      shortDesc: "Build & scale active digital communities",
      longDesc: "We develop comprehensive strategies to build, engage, and scale active digital communities that drive meaningful interactions and foster brand loyalty. Our approach combines data analysis, user psychology, and cutting-edge engagement techniques.",
      features: ["Community strategy development", "Engagement optimization", "Growth acceleration", "Moderation systems"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: TrendingUp,
      title: "Performance Marketing",
      shortDesc: "ROI-focused marketing funnels",
      longDesc: "Our performance marketing solutions are designed to maximize your return on investment through meticulously crafted conversion funnels. We leverage advanced analytics and A/B testing to continuously optimize your marketing campaigns.",
      features: ["Funnel architecture design", "Multi-channel campaign management", "Performance analytics", "Continuous optimization"],
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Zap,
      title: "Creative Direction",
      shortDesc: "Innovative visual campaigns",
      longDesc: "We bring your brand vision to life with high-impact creative campaigns that combine stunning visuals, compelling storytelling, and cutting-edge motion design. Our creative team works closely with you to ensure every campaign aligns with your brand identity.",
      features: ["Brand storytelling", "Visual identity development", "Motion graphics", "Cross-platform content creation"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Global Brand Strategy",
      shortDesc: "International positioning",
      longDesc: "We help position your brand on the global stage with culturally sensitive messaging and targeted strategies that resonate across different markets. Our team has extensive experience in international brand development and expansion.",
      features: ["Market analysis", "Cultural adaptation", "Global messaging", "Expansion strategy"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Activity,
      title: "Data Intelligence",
      shortDesc: "Actionable insights & analytics",
      longDesc: "Our data intelligence services transform raw data into actionable insights that drive informed creative and strategic decisions. We implement advanced analytics frameworks and visualization tools to make complex data accessible and actionable.",
      features: ["Predictive analytics", "Behavioral analysis", "Performance metrics", "Competitive intelligence"],
      color: "from-yellow-500 to-amber-500"
    },
    {
      icon: LayoutDashboard,
      title: "UI/UX Design",
      shortDesc: "Captivating user experiences",
      longDesc: "We create visually captivating and intuitive user experiences across all platforms, ensuring seamless interactions that delight users and drive engagement. Our design process is human-centered, focusing on usability, accessibility, and aesthetic appeal.",
      features: ["User research", "Wireframing & prototyping", "Visual design", "Usability testing"],
      color: "from-red-500 to-orange-500"
    },
    {
      icon: ShieldCheck,
      title: "Security & Trust",
      shortDesc: "Digital protection & compliance",
      longDesc: "We provide top-tier digital protection solutions and seamless compliance frameworks to safeguard your digital assets and build customer trust. Our security protocols are designed to meet the highest industry standards and evolving threats.",
      features: ["Security architecture", "Compliance management", "Risk assessment", "Continuous monitoring"],
      color: "from-emerald-500 to-lime-500"
    },
    {
      icon: Rocket,
      title: "Startup Acceleration",
      shortDesc: "From idea to scale",
      longDesc: "Our startup acceleration program helps you go from concept to MVP and beyond, with an agile build and launch model designed for rapid growth. We provide comprehensive support across product development, market entry, and scaling operations.",
      features: ["MVP development", "Go-to-market strategy", "Funding support", "Growth optimization"],
      color: "from-indigo-500 to-violet-500"
    }
  ];
  
  // Case studies data
  const caseStudies = [
    {
      title: "Revolutionizing E-commerce for Global Retailer",
      client: "Global Retail Solutions",
      challenge: "Low conversion rates and outdated digital experience",
      solution: "Comprehensive UX redesign and performance marketing integration",
      result: "120% increase in conversion rates and 85% improvement in user satisfaction",
      image: "https://picsum.photos/seed/ecommerce123/800/500.jpg"
    },
    {
      title: "Building Digital Infrastructure for Financial Tech",
      client: "FinTech Innovators",
      challenge: "Scalability issues and security concerns",
      solution: "Custom cloud architecture with advanced security protocols",
      result: "99.99% uptime and compliance with global financial regulations",
      image: "https://picsum.photos/seed/finTech456/800/500.jpg"
    },
    {
      title: "Transforming Healthcare Patient Experience",
      client: "MediCare Systems",
      challenge: "Complex patient journey and low engagement",
      solution: "Integrated patient portal with AI-powered support",
      result: "40% increase in patient engagement and 25% reduction in administrative costs",
      image: "https://picsum.photos/seed/healthcare789/800/500.jpg"
    }
  ];
  
  // Technologies data
  const technologies = [
    { name: "React", icon: <Code size={24} /> },
    { name: "Node.js", icon: <Cpu size={24} /> },
    { name: "MongoDB", icon: <Database size={24} /> },
    { name: "GraphQL", icon: <Code size={24} /> },
    { name: "Docker", icon: <Code size={24} /> },
    { name: "AWS", icon: <Globe2 size={24} /> },
    { name: "TypeScript", icon: <Code size={24} /> },
    { name: "Next.js", icon: <Code size={24} /> }
  ];
  
  // Team members data
  const team = [
    {
      name: "Alex Petrovic",
      role: "Founder & CEO",
      bio: "Alex brings over 15 years of experience in digital transformation and has led numerous successful tech ventures across Europe and North America.",
      image: "https://picsum.photos/seed/alex123/200/200.jpg"
    },
    {
      name: "Ivana Novak",
      role: "Chief Creative Officer",
      bio: "Ivana is an award-winning designer with a passion for creating meaningful digital experiences that connect brands with their audiences.",
      image: "https://picsum.photos/seed/ivana456/200/200.jpg"
    },
    {
      name: "Marko Jovanovic",
      role: "CTO",
      bio: "Marko leads our technical innovation, ensuring our solutions are cutting-edge, scalable, and future-proof in an ever-evolving digital landscape.",
      image: "https://picsum.photos/seed/marko789/200/200.jpg"
    }
  ];
  
  // Blog posts data
  const blogPosts = [
    {
      title: "The Future of Digital Transformation in 2023",
      excerpt: "Exploring the key trends and technologies that will shape digital transformation strategies in the coming year.",
      date: "Nov 15, 2023",
      image: "https://picsum.photos/seed/blog1/600/400.jpg",
      author: "Alex Petrovic",
      readTime: "8 min read"
    },
    {
      title: "Building Scalable Architectures for Modern Applications",
      excerpt: "A deep dive into cloud-native architectures and microservices that can scale with your business needs.",
      date: "Oct 28, 2023",
      image: "https://picsum.photos/seed/blog2/600/400.jpg",
      author: "Marko Jovanovic",
      readTime: "12 min read"
    },
    {
      title: "UX Design Principles That Drive Conversion",
      excerpt: "How to apply user-centered design principles to create experiences that convert visitors into customers.",
      date: "Oct 10, 2023",
      image: "https://picsum.photos/seed/blog3/600/400.jpg",
      author: "Ivana Novak",
      readTime: "10 min read"
    }
  ];
  
  // FAQ data
  const faqs = [
    {
      question: "What makes NXT Balkan different from other digital agencies?",
      answer: "NXT Balkan combines strategic thinking, technical excellence, and creative innovation in a way that few agencies can match. Our team brings diverse backgrounds and deep expertise across multiple disciplines, allowing us to approach challenges from multiple angles and deliver truly transformative solutions."
    },
    {
      question: "How do you approach project timelines and delivery?",
      answer: "We believe in transparent and realistic timelines. We work closely with clients to understand their goals and constraints, then develop a phased approach that allows for flexibility while ensuring timely delivery. Our agile methodologies enable us to adapt to changing requirements without compromising quality."
    },
    {
      question: "What industries do you specialize in?",
      answer: "While we work across various sectors, we have particular expertise in technology, finance, healthcare, retail, and media. Our experience spans from early-stage startups to established enterprises, and we're adept at tailoring our approach to each industry's unique challenges and opportunities."
    },
    {
      question: "How do you measure the success of your projects?",
      answer: "We define success metrics collaboratively with our clients at the outset of each project. These typically include quantifiable business outcomes like conversion rates, engagement metrics, cost savings, or revenue growth, alongside qualitative measures of user satisfaction and brand impact."
    },
    {
      question: "What is your process for ongoing support after project completion?",
      answer: "We believe in building long-term partnerships with our clients. Our post-launch support includes performance monitoring, optimization recommendations, and regular check-ins. We offer various maintenance packages to ensure your digital assets continue to perform at their best and evolve with your business needs."
    }
  ];
  
  // Values data
  const values = [
    {
      title: "Innovation",
      description: "We constantly push boundaries and explore new possibilities to deliver cutting-edge solutions.",
      icon: <Sparkles size={32} />
    },
    {
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical principles in all our interactions.",
      icon: <Shield size={32} />
    },
    {
      title: "Excellence",
      description: "We strive for perfection in every detail, never settling for anything less than exceptional.",
      icon: <Award size={32} />
    },
    {
      title: "Collaboration",
      description: "We believe in the power of diverse perspectives and work closely with clients as partners.",
      icon: <Users size={32} />
    }
  ];
  
  // Stats data
  const stats = [
    { number: "200+", label: "Projects Completed" },
    { number: "50+", label: "Global Clients" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" }
  ];
  
  // Navigation items
  const navItems = [
    { title: "Home", href: "#hero" },
    { title: "Services", href: "#services" },
    { title: "Case Studies", href: "#case-studies" },
    { title: "About", href: "#about" },
    { title: "Team", href: "#team" },
    { title: "Blog", href: "#blog" },
    { title: "Contact", href: "#contact" }
  ];
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Testimonial auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  // Service auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [services.length]);
  
  // Toggle service expansion
  const toggleService = (index) => {
    if (expandedService === index) {
      setExpandedService(null);
    } else {
      setExpandedService(index);
    }
  };
  
  // Toggle dark/light mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  // Scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };
  
  // Hero section animation variants
  const heroVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 1,
        staggerChildren: 0.2
      }
    }
  };
  
  // Service card animation variants
  const serviceCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  // Testimonial animation variants
  const testimonialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  // Stats animation variants
  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  
  // Case study animation variants
  const caseStudyVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  
  // Button animation variants
  const buttonVariants = {
    hover: { 
      scale: 1.05,
      transition: { 
        duration: 0.3
      }
    },
    tap: { 
      scale: 0.95,
      transition: { 
        duration: 0.1
      }
    }
  };
  
  // Dark/Light mode toggle
  const themeClass = isDarkMode 
    ? "bg-black text-white" 
    : "bg-white text-gray-900";
  
  const cardClass = isDarkMode 
    ? "bg-white/5 backdrop-blur-lg border border-white/10" 
    : "bg-gray-100 backdrop-blur-lg border border-gray-200";
  
  const buttonClass = isDarkMode 
    ? "bg-black/30 backdrop-blur-xl border border-white/10 hover:border-cyan-400/40 text-white" 
    : "bg-gray-800/30 backdrop-blur-xl border border-gray-200 hover:border-cyan-400/40 text-gray-900";
  
  return (
    <div className={`min-h-screen ${themeClass} transition-colors duration-500 ease-in-out`}>
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
             <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="flex items-center justify-between h-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex items-center"
            >
              <img 
                src="/nxtbalkancolored2.png" 
                alt="NXT Balkan Logo" 
                className="h-10 w-auto"
              />
            </motion.div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.title}
                  className="text-white/70 hover:text-white hover:after:block after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-cyan-400 after:opacity-0 hover:after:opacity-100 transition-all duration-300 relative"
                  onClick={() => scrollToSection(item.href.substring(1))}
                >
                  {item.title}
                </motion.button>
              ))}
              <motion.button
                className={`px-6 py-2 rounded-full ${buttonClass} transition-all duration-300`}
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                Get Started
              </motion.button>
            </nav>
            
            {/* Dark/Light Mode Toggle */}
            <motion.button
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDarkMode ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-gray-800" />
              )}
            </motion.button>
            
            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? (
                <ChevronUp size={20} className="text-white" />
              ) : (
                <ChevronDown size={20} className="text-white" />
              )}
            </motion.button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <motion.div
          className="fixed inset-0 bg-black/95 z-50 md:hidden"
          initial={{ opacity: 0, pointerEvents: "none" }}
          animate={isMenuOpen ? { opacity: 1, pointerEvents: "auto" } : { opacity: 0, pointerEvents: "none" }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 px-8">
            {navItems.map((item) => (
              <motion.button
                key={item.title}
                className="text-white text-xl hover:text-cyan-400 transition-all duration-300"
                onClick={() => scrollToSection(item.href.substring(1))}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.title}
              </motion.button>
            ))}
            <motion.button
              className={`mt-8 px-8 py-3 rounded-full ${buttonClass} transition-all duration-300`}
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
            >
              Get Started
            </motion.button>
            <motion.button
              className="mt-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
              onClick={() => {
                toggleDarkMode();
                setTimeout(() => setIsMenuOpen(false), 300);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDarkMode ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-gray-800" />
              )}
            </motion.button>
          </div>
        </motion.div>
      </header>
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 bg-gradient-to-tr from-[#101010] via-black to-[#090909] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/10 to-pink-500/10"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            animate={{ opacity: 0.2, scale: 1.1, rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, repeatType: "loop" }}
            className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-br from-cyan-500/5 to-pink-500/5"
          />
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
              opacity: [0.1, 0.2, 0.1],
              y: [0, -20, 0],
              x: [0, 20, 0]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
            className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-gradient-to-br from-cyan-500/5 to-pink-500/5"
          />
        </div>
        
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto w-full text-center space-y-12"
        >
          <motion.img
            src="/nxtbalkancolored2.png"
            alt="NXT Balkan Logo"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: 0.3 } }
            }}
            className="mx-auto w-64 sm:w-80 md:w-96 lg:w-[450px] drop-shadow-[0_0_30px_rgba(0,255,255,0.1)]"
          />
          
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 1.3, delay: 0.6 } }
            }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight tracking-wide"
          >
            Next-Gen <span className="gradient-text font-medium">Digital Leadership</span>
          </motion.h1>
          
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1.1, delay: 0.9 } }
            }}
            className="text-gray-300 max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl"
          >
            We transform businesses into cutting-edge digital powerhouses that thrive on innovation, performance, and connection.
          </motion.p>
          
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1.1, delay: 1.2 } }
            }}
          >
            <motion.button
              className={`bg-black/30 backdrop-blur-xl border border-white/10 hover:border-cyan-400/40 text-white font-medium px-10 py-5 rounded-full text-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 animate-pulse`}
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
            >
              Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
          
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1.1, delay: 1.4 } }
            }}
            className="flex justify-center mt-8"
          >
            <motion.div
              className="flex space-x-4"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 hover:bg-cyan-500/20"
              >
                <Play size={24} className="text-white" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 hover:bg-cyan-500/20"
              >
                <FileText size={24} className="text-white" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 hover:bg-cyan-500/20"
              >
                <Mail size={24} className="text-white" />
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="absolute bottom-10 left-0
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 2 }}
        >
          <div className="flex items-center text-white/70">
            <span className="mr-2">Scroll</span>
            <motion.div
              className="w-6 h-6 border-2 border-white/50 rounded-full flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown size={16} className="text-white/70" />
            </motion.div>
          </div>
        </motion.div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-32 px-6 sm:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light">
              Premium <span className="gradient-text font-medium">Services</span>
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl mt-4">
              Built for visionary brands shaping the future.
            </p>
          </motion.div>
          
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white/5 backdrop-blur-lg rounded-full p-1">
              {[
                { name: "Services", value: "services" },
                { name: "Case Studies", value: "case-studies" },
                { name: "Technologies", value: "technologies" }
              ].map((tab) => (
                <motion.button
                  key={tab.value}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.value 
                      ? "bg-cyan-500/20 text-cyan-400" 
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                  onClick={() => setActiveTab(tab.value)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab.name}
                </motion.button>
              ))}
            </div>
          </div>
          
          {activeTab === "services" && (
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
                  <Card 
                    className={`h-full ${cardClass} transition-all duration-300 hover:border-cyan-400/30 hover:shadow-lg`}
                    onClick={() => toggleService(i)}
                  >
                    <CardContent className="p-8 text-center">
                      <div className="mb-6 w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-cyan-500/20 to-pink-500/20 flex items-center justify-center">
                        <service.icon className={`w-8 h-8 text-cyan-400`} />
                      </div>
                      <h3 className="text-xl font-semibold mb-4 text-white">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-base">
                        {service.shortDesc}
                      </p>
                      <motion.div
                        className="absolute bottom-4 right-4"
                        animate={{ rotate: expandedService === i ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={20} className="text-gray-400" />
                      </motion.div>
                    </CardContent>
                  </Card>
                  
                  {expandedService === i && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl"
                    >
                      <p className="text-gray-300 mb-6">
                        {service.longDesc}
                      </p>
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-start"
                          >
                            <span className="inline-block w-5 h-5 rounded-full bg-cyan-500/20 flex-shrink-0 mr-3 mt-0.5 flex items-center justify-center">
                              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                            </span>
                            <span className="text-gray-300">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                      <motion.button
                        className={`w-full py-3 rounded-full ${buttonClass} transition-all duration-300`}
                        whileHover="hover"
                        whileTap="tap"
                        variants={buttonVariants}
                      >
                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                      </motion.button>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
          
          {activeTab === "case-studies" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((caseStudy, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="group"
                >
                  <Card 
                    className={`h-full ${cardClass} overflow-hidden rounded-3xl`}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={caseStudy.image} 
                        alt={caseStudy.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-semibold text-white">{caseStudy.title}</h3>
                        <p className="text-gray-300 text-sm">{caseStudy.client}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-300 mb-4">{caseStudy.challenge}</p>
                      <p className="text-gray-400 mb-4">{caseStudy.solution}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-cyan-400 font-medium">{caseStudy.result}</p>
                        <motion.button
                          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink size={16} className="text-white" />
                        </motion.button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
          
          {activeTab === "technologies" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {technologies.map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl flex flex-col items-center justify-center h-32"
                >
                  <motion.div
                    animate={{ rotate: [0, 20, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="mb-3"
                  >
                    {tech.icon}
                  </motion.div>
                  <span className="text-gray-300 text-center">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Motion Divider */}
      <motion.div
        className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.5 }}
      />
      
      {/* Testimonials Section */}
      <section className="py-28 px-6 sm:px-12 bg-gradient-to-b from-black to-black/80">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light">
              Client <span className="gradient-text font-medium">Testimonials</span>
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl mt-4 max-w-3xl mx-auto">
              Hear from our clients about the impact we've made on their businesses and digital presence.
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, i) => (
                <motion.div
                  key={i}
                  ref={(el) => {
                    if (el) {
                      const index = Array.from(el.parentNode?.children || []).indexOf(el);
                      if (index === currentTestimonial) {
                        testimonialRef.current = el;
                      }
                    }
                  }}
                  className={`testimonial-card ${i === currentTestimonial ? 'active' : ''}`}
                >
                  <Card 
                    className={`h-full ${cardClass} p-8`}
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 italic mb-6">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center justify-center">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star}
                            size={16}
                            className={star <= 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}
                          />
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
              <div className="flex space-x-2">
                {testimonials.map((_, i) => (
                  <motion.button
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i === currentTestimonial ? "bg-cyan-400" : "bg-white/30"
                    }`}
                    onClick={() => setCurrentTestimonial(i)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  />
                ))}
              </div>
            </div>
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
      
      {/* About Section */}
      <section id="about" className="py-28 px-6 sm:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              <h2 className="text-4xl sm:text-5xl font-light mb-6">
                Who <span className="gradient-text font-medium">We Are</span>
              </h2>
              <p className="text-gray-300 text-lg">
                NXT Balkan is a forward-thinking digital innovation studio dedicated to helping businesses navigate the complex digital landscape. We combine strategic thinking with technical excellence to deliver transformative digital experiences that drive real business results.
              </p>
              <p className="text-gray-300 text-lg">
                Founded in 2015, we've grown from a small team of passionate developers to a full-service digital agency with clients across Europe, North America, and Asia. Our diverse background and global perspective allows us to approach challenges from multiple angles and deliver truly innovative solutions.
              </p>
              <motion.button
                className={`mt-6 px-8 py-4 rounded-full ${buttonClass} transition-all duration-300 text-base`}
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                Learn More About Us
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="relative rounded-3xl overflow-hidden aspect-video">
                <img 
                  src="https://picsum.photos/seed/nxtbalkan/800/450.jpg" 
                  alt="NXT Balkan Team" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Our Story, Our Mission
                  </h3>
                  <p className="text-gray-300">
                    We believe in the power of technology to transform businesses and improve lives.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-light mb-6">
                  Our <span className="gradient-text font-medium">Values</span>
                </h3>
                <div className="space-y-6">
                  {values.map((value, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.2 }}
                      className="flex items-start"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-pink-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                        {value.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-medium mb-2 text-white">
                          {value.title}
                        </h4>
                        <p className="text-gray-300">
                          {value.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-light mb-6">
                  Our <span className="gradient-text font-medium">Approach</span>
                </h3>
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-medium text-white">Discovery</h4>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500/20 to-pink-500/20 flex items-center justify-center">
                        <span className="text-cyan-400 font-medium">1</span>
                      </div>
                    </div>
                    <p className="text-gray-300">
                      We start by deeply understanding your business goals, target audience, and competitive landscape. Our discovery phase includes stakeholder interviews, market research, and competitive analysis to establish a solid foundation for success.
                    </p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white/5 backdrop-blur-lg border-white/10 rounded-2xl p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-medium text-white">Strategy</h4>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500/20 to-pink-500/20 flex items-center justify-center">
                        <span className="text-cyan-400 font-medium">2</span>
                      </div>
                    </div>
                    <p className="text-gray-300">
                      Based on our discovery findings, we develop a comprehensive digital strategy that aligns with your business objectives. This includes user journey mapping, content strategy, technology selection, and a detailed implementation roadmap.
                    </p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-medium text-white">Execution</h4>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500/20 to-pink-500/20 flex items-center justify-center">
                        <span className="text-cyan-400 font-medium">3</span>
                      </div>
                    </div>
                    <p className="text-gray-300">
                      Our multidisciplinary team brings the strategy to life with pixel-perfect design and robust development. We follow agile methodologies, maintaining constant communication and delivering incremental value throughout the process.
                    </p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-medium text-white">Optimization</h4>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500/20 to-pink-500/20 flex items-center justify-center">
                        <span className="text-cyan-400 font-medium">4</span>
                      </div>
                    </div>
                    <p className="text-gray-300">
                      We believe that the work doesn't end at launch. Our optimization phase involves continuous monitoring, A/B testing, and iterative improvements to ensure your digital assets continue to perform and evolve with changing market dynamics.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
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
      
      {/* Team Section */}
      <section id="team" className="py-28 px-6 sm:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-light">
              Meet <span className="gradient-text font-medium">Our Team</span>
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl mt-4">
              The talented individuals who bring our vision to life.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="group"
              >
                <Card 
                  className={`h-full ${cardClass} overflow-hidden rounded-3xl`}
                >
                  <div className="relative">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {member.name}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">
                        {member.role}
                      </p>
                      <p className="text-gray-300 text-sm">
                        {member.bio}
                      </p>
                      <div className="flex mt-4 space-x-3">
                        <motion.button
                          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Mail size={16} className="text-white" />
                        </motion.button>
                        <motion.button
                          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Headphones size={16} className="text-white" />
                        </motion.button>
                        <motion.button
                          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink size={16} className="text-white" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </Card>
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
      
      {/* Blog Section */}
      <section id="blog" className="py-28 px-6 sm:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-light">
              Our <span className="gradient-text font-medium">Insights</span>
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl mt-4">
              Stay updated with our latest thoughts and industry insights.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="group"
              >
                <Card 
                  className={`h-full ${cardClass} overflow-hidden rounded-3xl`}
                >
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-cyan-500/20 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full">
                      {post.readTime}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <img 
                        src={`https://picsum.photos/seed/${post.author.replace(/\s/g, '')}/32/32.jpg`} 
                        alt={post.author} 
                        className="w-6 h-6 rounded-full mr-2"
                      />
                      <span className="text-gray-400 text-xs">{post.author}</span>
                    </div>
                    <h3 className="text-xl font-medium mb-2 text-white">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-xs">{post.date}</span>
                      <motion.button
                        className="text-cyan-400 hover:text-cyan-300 transition-all duration-300"
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Read More <ArrowRight className="ml-1" size={14} />
                      </motion.button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.button
              className={`px-8 py-3 rounded-full ${buttonClass} transition-all duration-300 flex items-center`}
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
            >
              View All Articles <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      {/* Motion Divider */}
      <motion.div
        className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.5 }}
      />
      
      {/* Contact Section */}
      <section id="contact" className="py-28 px-6 sm:px-12 bg-gradient-to-b from-black to-black/90">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-light">
              Get In <span className="gradient-text font-medium">Touch</span>
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl mt-4">
              Let's discuss how we can help your business thrive in the digital age.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-light mb-6">
                  Let Us Help You
                </h3>
                <p className="text-gray-300">
                  Ready to transform your digital presence? Our team is here to answer your questions and discuss how we can help you achieve your business goals.
                </p>
              </div>
              
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center"
                >
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center mr-4">
                    <Mail size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email Us</h4>
                    <p className="text-gray-300 text-sm">info@nxtbalkan.com</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center"
                >
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center mr-4">
                    <Phone size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Call Us</h4>
                    <p className="text-gray-300 text-sm">+381 11 123 4567</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-center"
                >
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center mr-4">
                    <Instagram size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Instagram</h4>
                    <p className="text-gray-300 text-sm">@nxtbalkan</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex items-center"
                >
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center mr-4">
                    <Twitter size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Twitter</h4>
                    <p className="text-gray-300 text-sm">@nxtbalkan</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex items-center"
                >
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center mr-4">
                    <Facebook size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Facebook</h4>
                    <p className="text-gray-300 text-sm">NXT Balkan</p>
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
                className="mt-8"
              >
                <motion.button
                  className={`w-full py-3 rounded-full ${buttonClass} transition-all duration-300 flex items-center justify-center`}
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                >
                  Book a Consultation <Calendar className="ml-2 w-5 h-5" />
                </motion.button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8"
            >
              <h3 className="text-xl font-medium mb-6 text-white">
                Send Us a Message
              </h3>
              <motion.form
                className="space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: {
                    0: { opacity: 0, y: 20 },
                    0.1: { opacity: 0, y: 20 },
                    0.2: { opacity: 0, y: 20 },
                    0.3: { opacity: 0, y: 0 },
                    0.4: { opacity: 1, y: 0 }
                  }
                }}
              >
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  variants={{
                    visible: {
                      0.2: { opacity: 0, y: 20 },
                      0.3: { opacity: 0, y: 20 },
                      0.4: { opacity: 0, y: 0 }
                    }
                  }}
                >
                  <motion.div
                    className="relative"
                    variants={{
                      visible: {
                        0.4: { opacity: 0, y: 20 },
                        0.5: { opacity: 0, y: 20 },
                        0.: { opacity: 0, y: 0 }
                      }
                    }}
                  >
                    <label className="block text-gray-300 text-sm mb-2">Full Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300"
                        placeholder="Your name"
                      />
                      <div className="absolute top-3 right-3 text-gray-400">
                        <User size={18} />
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="relative"
                    variants={{
                      visible: {
                        0.6: { opacity: 0, y: 20 },
                        0.7: { opacity: 0, y: 20 },
                        0.8: { opacity: 0, y: 0 }
                      }
                    }}
                  >
                    <label className="block text-gray-300 text-sm mb-2">Company</label>
                    <div className="relative">
                      <input
                        type="text"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300"
                        placeholder="Your company"
                      />
                      <div className="absolute top-3 right-3 text-gray-400">
                        <Building size={18} />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
                
                <motion.div
                  className="relative"
                  variants={{
                    visible: {
                      0.8: { opacity: 0, y: 20 },
                      0.9: { opacity: 0, y: 20 },
                      1: { opacity: 0, y: 0 }
                    }
                  }}
                >
                  <label className="block text-gray-300 text-sm mb-2">Email Address</label>
                  <div className="relative">
                    <input
                      type="email"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300"
                      placeholder="Your email"
                    />
                    <div className="absolute top-3 right-3 text-gray-400">
                      <Mail size={18} />
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  className="relative"
                  variants={{
                    visible: {
                      1: { opacity: 0, y: 20 },
                      1.1: { opacity: 0, y: 20 },
                      1.2: { opacity: 0, y: 0 }
                    }
                  }}
                >
                  <label className="block text-gray-300 text-sm mb-2">Project Type</label>
                  <div className="relative">
                    <select
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300"
                    >
                      <option value="" disabled>Select your project type</option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="brand">Brand & Design</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="other">Other Services</option>
                    </select>
                    <div className="absolute top-3 right-3 text-gray-400 pointer-events-none">
                      <ChevronDown size={18} />
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  className="relative"
                  variants={{
                    visible: {
                      1.2: { opacity: 0, y: 20 },
                      1.3: { opacity: 0, y: 20 },
                      1.4: { opacity: 0, y: 0 }
                    }
                  }}
                >
                  <label className="block text-gray-300 text-sm mb-2">Your Message</label>
                  <div className="relative">
                    <textarea
                      rows="4"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300"
                      placeholder="Tell us about your project and how we can help"
                    ></textarea>
                  </div>
                </motion.div>
                
                <motion.div
                  variants={{
                    visible: {
                      1.4: { opacity: 0, y: 20 },
                      1.5: { opacity: 0, y: 20 },
                      1.6: { opacity: 0, y: 0 }
                    }
                  }}
                >
                  <motion.button
                    className={`w-full py-3 rounded-full ${buttonClass} transition-all duration-300 flex items-center justify-center`}
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonVariants}
                  >
                    Send Message <ArrowRight className="ml-2 w-5 h-5" />
                  </motion.button>
                </motion.div>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 text-center border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img 
              src="/nxtbalkancolored2.png" 
              alt="NXT Balkan Logo" 
              className="h-12 w-auto mx-auto mb-8"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
          >
            <div>
              <h4 className="text-white font-medium mb-4">Services</h4>
              <ul className="space-y-2">
                {services.slice(0, 4).map((service, i) => (
                  <motion.li
                    key={i}
                    className="text-gray-400 text-sm hover:text-cyan-400 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {service.title}
                  </motion.li>
                ))}
                <motion.li
                  className="text-gray-400 text-sm hover:text-cyan-400 transition-all duration-300 cursor-pointer"
                  whileHover={{ x: 5 }}
                  onClick={() => window.scrollTo({ top: document.getElementById('services').offsetTop - 80, behavior: 'smooth' })}
                >
                  View All Services
                </motion.li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                <motion.li
                  className="text-gray-400 text-sm hover:text-cyan-400 transition-all duration-300 cursor-pointer"
                  whileHover={{ x: 5 }}
                  onClick={() => window.scrollTo({ top: document.getElementById('about').offsetTop - 80, behavior: 'smooth' })}
                >
                  About Us
                </motion.li>
                <motion.li
                  className="text-gray-400 text-sm hover:text-cyan-400 transition-all duration-300 cursor-pointer"
                  whileHover={{ x: 5 }}
                  onClick={() => window.scrollTo({ top: document.getElementById('team').offsetTop - 80, behavior: 'smooth' })}
                >
                  Our Team
                </motion.li>
                <motion.li
                  className="text-gray-400 text-sm hover:text-cyan-400 transition-all duration-300 cursor-pointer"
                  whileHover={{ x: 5 }}
                  onClick={() => window.scrollTo({ top: document.getElementById('blog').offsetTop - 80, behavior: 'smooth' })}
                >
                  Blog
                </motion.li>
                <motion.li
                  className="text-gray-400 text-sm hover:text-cyan-400 transition-all duration-300 cursor-pointer"
                  whileHover={{ x: 5 }}
                  onClick={() => window.scrollTo({ top: document.getElementById('contact').offsetTop - 80, behavior: 'smooth' })}
                >
                  Contact Us
                </motion.li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Resources</h4>
              <ul className="space-y-2">
                <motion.li
                  className="text-gray-400 text-sm hover:text-cyan-400 transition-all duration-300 cursor-pointer"
                  whileHover={{ x: 5 }}
                  onClick={() => window.open('https://www.youtube.com', '_blank')}
                >
                  Tutorials
                </motion.li>
                <motion.li
                  className="text-gray-400 text-sm hover:text-cyan-400 transition-all duration-300 cursor-pointer"
                  whileHover={{ x: 5 }}
                  onClick={() => window.open('https://www.youtube.com', '_blank')}
                >
                  Case Studies
                </motion.li>
                <motion.li
                  className="text-gray-400 text-sm hover:text-cyan-400 transition-all duration-300 cursor-pointer"
                  whileHover={{ x: 5 }}
                  onClick={() => window.open('https://www.youtube.com', '_blank')}
                >
                  Blog Posts
                </motion.li>
                <motion.li
                  className="text-gray-400 text-sm hover:text-cyan-400 transition-all duration-300 cursor-pointer"
                  whileHover={{ x: 5 }}
                  onClick={() => window.open('https://www.youtube.com', '_blank')}
                >
                  FAQ
                </motion.li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Contact</h4>
              <ul className="space-y-2">
                <motion.li
                  className="text-gray-400 text-sm hover:text-cyan-400 transition-all duration-300 cursor-pointer"
                  whileHover={{ x: 5 }}
                  onClick={() => window.open('mailto:info@nxtbalkan.com')}
                >
                  info@nxtbalkan.com
                </motion.li>
                <motion.li
                  className="text-gray-400 text-sm hover:text-cyan-400 transition-all duration-300 cursor-pointer"
                  whileHover={{ x: 5 }}
                  onClick={() => window.open('tel:+381111234567')}
                >
                  +381 11 123 4567
                </motion.li>
                <motion.li
                  className="text-gray-400 text-sm hover:text-cyan-400 transition-all duration-300 cursor-pointer"
                  whileHover={{ x: 5 }}
                  onClick={() => window.open('https://maps.google.com', '_blank')}
                >
                  Belgrade, Serbia
                </motion.li>
              </ul>
              
              <div className="flex space-x-4 mt-6">
                <motion.a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Facebook size={20} className="text-white" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Twitter size={20} className="text-white" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram size={20} className="text-white" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <LinkedIn size={20} className="text-white" />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-t border-white/10 pt-8"
          >
            <p className="text-gray-500 text-sm">
              © 2025 NXT Balkan. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6 mt-4">
              <motion.a
                href="#"
                className="text-gray-500 text-xs hover:text-cyan-400 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-500 text-xs hover:text-cyan-400 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                Terms of Service
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-500 text-xs hover:text-cyan-400 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                Cookie Policy
              </motion.a>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
