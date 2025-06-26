"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  MapPin, Phone, Mail, Clock, Instagram, Linkedin, Twitter, Send, 
  MessageCircle, Sparkles, ArrowRight, Star, Globe, Users, Target, Home, Info, Briefcase, ShoppingBag, HelpCircle
} from "lucide-react";

//============================================================================
// DATA STRUCTURES
//============================================================================

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "Portfolio", href: "/portfolio", icon: Users },
  { name: "Shop", href: "/shop", icon: ShoppingBag },
  { name: "Contact", href: "/contact", icon: Mail },
];

const contactInfo = [
    { icon: MapPin, title: "Our Location", details: ["Ljubljana, Slovenia", "Trubarjeva cesta 25", "1000 Ljubljana"] },
    { icon: Phone, title: "Phone Numbers", details: ["+386 1 234 5678", "+386 40 123 456"] },
    { icon: Mail, title: "Email Addresses", details: ["info@nxtbalkan.com", "projects@nxtbalkan.com"] },
    { icon: Clock, title: "Business Hours", details: ["Mon - Fri: 9:00 - 18:00", "Sat: 10:00 - 16:00"] },
];

const socialLinks = [
    { icon: Instagram, name: "Instagram", handle: "@nxt.balkan", url: "https://instagram.com/nxt.balkan" },
    { icon: Linkedin, name: "LinkedIn", handle: "NXT Balkan", url: "#" },
    { icon: Twitter, name: "Twitter", handle: "@nxtbalkan", url: "#" },
];

const quickStats = [
    { label: "Response Time", value: "< 24h", icon: Clock, color: "text-cyan-400" },
    { label: "Team Members", value: "15+", icon: Users, color: "text-purple-400" },
    { label: "Languages", value: "5+", icon: Globe, color: "text-pink-400" },
    { label: "Projects", value: "200+", icon: Target, color: "text-orange-400" },
];

//============================================================================
// HELPER COMPONENTS
//============================================================================

const StarrySky = ({ count = 150 }) => {
    const stars = useMemo(() => Array.from({ length: count }).map((_, i) => ({
        id: i, x: `${Math.random() * 100}%`, y: `${Math.random() * 100}%`,
        size: `${Math.random() * 2 + 1}px`, duration: Math.random() * 2 + 2, delay: Math.random() * 3,
    })), [count]);
    return (
        <div className="absolute inset-0 z-0">
            {stars.map(star => (
                <motion.div key={star.id} className="absolute rounded-full bg-white"
                    style={{ top: star.y, left: star.x, width: star.size, height: star.size }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: star.duration, delay: star.delay, repeat: Infinity, ease: "easeInOut" }}/>
            ))}
        </div>
    );
};

const AnimatedTitle = ({ text, gradientText }) => (
     <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tighter">
        {text} <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500">{gradientText}</span>
    </motion.h1>
);

const TiltCard = ({ children, className }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseY = useSpring(y, { stiffness: 300, damping: 30 });
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);
    
    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    const handleMouseLeave = () => { x.set(0); y.set(0); };

    return (
        <motion.div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className={`relative will-change-transform h-full ${className}`}>
            <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
                className="w-full h-full">
                {children}
            </div>
        </motion.div>
    );
}

const FormInput = ({ label, name, type = "text", placeholder, as = "input" }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium mb-2 text-gray-300">{label}</label>
        {as === 'textarea' ? (
            <textarea
                id={name}
                name={name}
                rows={5}
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300"
                placeholder={placeholder}
            />
        ) : (
            <input
                type={type}
                id={name}
                name={name}
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300"
                placeholder={placeholder}
            />
        )}
    </div>
);

//============================================================================
// NAVIGATION COMPONENT
//============================================================================
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsOpen(!isOpen);

  const MobileMenu = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-40 md:hidden bg-black/90 backdrop-blur-lg"
    >
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        {navItems.map((item, index) => (
          <motion.a
            key={item.name}
            href={item.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.08, duration: 0.4 }}
            className={`flex items-center gap-4 text-2xl font-light py-3 px-6 rounded-full transition-colors ${pathname === item.href ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white'}`}
          >
            <item.icon className="h-6 w-6" />
            <span>{item.name}</span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md border-b border-gray-800" : "bg-transparent border-b border-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <a href="/" className="flex-shrink-0">
            <motion.img
              src="/nxtbalkancolored2.png"
              alt="NXT Balkan"
              className="h-16 w-auto"
              whileHover={{ scale: 1.05 }}
            />
          </a>
          
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-baseline space-x-10">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="relative text-sm font-medium group">
                  <span className={`transition-colors ${pathname === item.href ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                    {item.name}
                  </span>
                  {pathname === item.href && (
                    <motion.div
                      layoutId="active-nav-link"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500"
                    />
                  )}
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex items-center">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden md:block bg-white/10 text-white font-medium px-6 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-colors">
              Let's Talk
            </motion.button>
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="p-2 text-white">
                 <div className="w-6 h-6 relative">
                    <motion.span animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 0 : -5 }} className="w-6 h-0.5 bg-white absolute top-1/2"/>
                    <motion.span animate={{ opacity: isOpen ? 0 : 1}} className="w-6 h-0.5 bg-white absolute top-1/2"/>
                    <motion.span animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? 0 : 5 }} className="w-6 h-0.5 bg-white absolute top-1/2"/>
                 </div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
      <AnimatePresence>
        {isOpen && <MobileMenu />}
      </AnimatePresence>
    </>
  );
};


//============================================================================
// MAIN PAGE COMPONENT
//============================================================================
export default function ContactPage() {
    const containerVariants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
    const itemVariants = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } } };

    return (
        <div className="bg-black text-white font-sans overflow-x-hidden antialiased">
             <Navigation />
             <div className="fixed inset-0 z-0 pointer-events-none">
                <StarrySky />
            </div>
            
            <motion.main 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="relative z-10 pt-24" // Added padding to avoid content behind nav
            >
                <section className="min-h-[80vh] flex items-center justify-center px-6 text-center">
                    <div className="space-y-6">
                        <AnimatedTitle text="Get In" gradientText="Touch" />
                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4, ease: "easeOut" }} className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
                           Ready to transform your digital presence? We'd love to hear from you. Let's create something extraordinary together.
                        </motion.p>
                    </div>
                </section>

                <section className="py-16 md:py-24 px-6">
                    <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {quickStats.map((stat, index) => (
                            <motion.div key={index} variants={itemVariants} className="text-center">
                                <stat.icon className={`h-10 w-10 mx-auto mb-4 ${stat.color}`} />
                                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                <section className="py-16 md:py-24 px-6">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true }}>
                            <TiltCard>
                                <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 h-full">
                                    <h2 className="text-3xl font-light mb-6">Send Us a <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400">Message</span></h2>
                                    <form className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <FormInput label="First Name" name="firstName" placeholder="Enter your first name" />
                                            <FormInput label="Last Name" name="lastName" placeholder="Enter your last name" />
                                        </div>
                                        <FormInput label="Email Address" name="email" type="email" placeholder="Enter your email address" />
                                        <FormInput label="Message" name="message" as="textarea" placeholder="Tell us about your project..." />
                                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-semibold py-3 rounded-full flex items-center justify-center gap-2">
                                            <Send className="w-5 h-5"/> Send Message
                                        </motion.button>
                                    </form>
                                </div>
                            </TiltCard>
                        </motion.div>
                        
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true }} className="space-y-8">
                           {contactInfo.map((info, i) => (
                                <motion.div key={info.title} variants={itemVariants}>
                                     <div className="flex items-start gap-4 bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-2xl">
                                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <info.icon className="w-6 h-6 text-cyan-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg text-white mb-1">{info.title}</h3>
                                            {info.details.map((detail) => (
                                                <p key={detail} className="text-gray-400">{detail}</p>
                                            ))}
                                        </div>
                                     </div>
                                </motion.div>
                           ))}
                           <motion.div variants={itemVariants}>
                                <div className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-2xl">
                                    <h3 className="font-semibold text-lg text-white mb-4">Follow Us</h3>
                                    <div className="flex justify-around">
                                        {socialLinks.map(link => (
                                            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-center text-gray-400 hover:text-white transition-colors">
                                                <link.icon className="w-8 h-8 mx-auto mb-1"/>
                                                <span className="text-xs">{link.name}</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                           </motion.div>
                        </motion.div>
                    </div>
                </section>
            </motion.main>
        </div>
    );
}
