"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, Info, Briefcase, Users, ShoppingBag, Mail, HelpCircle, Instagram, Twitter
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

const socialLinks = [
    { icon: Instagram, name: "Instagram", url: "https://instagram.com/nxt.balkan" },
    { icon: Twitter, name: "Twitter", url: "#" },
    { name: "TikTok", url: "#", svg: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg> },
];

//============================================================================
// NAVIGATION COMPONENT
//============================================================================
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activePath, setActivePath] = useState("/"); // Default active path

  // Simulate pathname for demonstration in a non-Next.js environment
  useEffect(() => {
    // In a real Next.js app, you would use:
    // import { usePathname } from 'next/navigation';
    // const pathname = usePathname();
    // setActivePath(pathname);
    if (typeof window !== 'undefined') {
        setActivePath(window.location.pathname);
    }
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleMobileMenu = () => setIsOpen(!isOpen);

  // Mobile Menu Sub-component
  const MobileMenu = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed inset-0 z-40 md:hidden bg-black/80 backdrop-blur-xl"
    >
        <motion.div 
            className="flex flex-col items-center justify-center h-full"
            variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
            }}
            initial="hidden"
            animate="show"
        >
            {navItems.map((item) => (
                <motion.a
                    key={item.name}
                    href={item.href}
                    variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                    className={`flex items-center gap-4 text-3xl font-light py-4 px-6 rounded-full transition-colors ${activePath === item.href ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                >
                    <item.icon className="h-6 w-6" />
                    <span>{item.name}</span>
                </motion.a>
            ))}
            <motion.div 
                className="mt-12 flex space-x-6"
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.8}}
            >
                {socialLinks.map(link => (
                    <a key={link.name} href={link.url} className="text-gray-400 hover:text-white transition-colors">{link.icon ? <link.icon/> : link.svg}</a>
                ))}
            </motion.div>
        </motion.div>
    </motion.div>
  );

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md border-b border-gray-800" : "bg-transparent border-b border-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <a href="/" className="flex-shrink-0">
            <motion.img
              src="https://nxtbalkan.com/wp-content/uploads/2024/05/nxtbalkancolored2.png"
              alt="NXT Balkan"
              className="h-16 w-auto"
              whileHover={{ scale: 1.05 }}
            />
          </a>
          
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-baseline space-x-10">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="relative text-sm font-medium group py-2">
                  <span className={`transition-colors ${activePath === item.href ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                    {item.name}
                  </span>
                  {activePath === item.href && (
                    <motion.div
                      layoutId="active-nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500"
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    />
                  )}
                   <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex items-center">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden md:block bg-white/10 text-white font-medium px-6 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-colors">
              Let's Talk
            </motion.button>
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="p-2 text-white z-50 relative">
                 <div className="w-6 h-6 relative">
                    <motion.span 
                        animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 0 : -5 }}
                        transition={{duration: 0.3}} 
                        className="w-6 h-0.5 bg-white absolute top-1/2 left-0"/>
                    <motion.span 
                        animate={{ opacity: isOpen ? 0 : 1}} 
                        transition={{duration: 0.2}} 
                        className="w-6 h-0.5 bg-white absolute top-1/2 left-0"/>
                    <motion.span 
                        animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? 0 : 5 }} 
                        transition={{duration: 0.3}}
                        className="w-6 h-0.5 bg-white absolute top-1/2 left-0"/>
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
