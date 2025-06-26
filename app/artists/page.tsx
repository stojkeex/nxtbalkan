"use client";

// Since the request specified a single file, all components,
// animations, and data are defined here. In a real-world project,
// this would be split into multiple files for better organization.

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  ExternalLink, Globe, Users, TrendingUp, Award, Star, ArrowRight, 
  Sparkles, Heart, Share2, Zap, Target 
} from "lucide-react";

//============================================================================
// DATA STRUCTURES (Content from the provided file)
//============================================================================

const projects = [
    {
      id: 1,
      name: "E-Commerce Revolution",
      category: "Web Development",
      description: "Complete digital transformation for a leading retail brand, resulting in a 300% increase in online sales and an enhanced user experience.",
      image: "https://placehold.co/600x400/1e1b4b/ffffff?text=Project+1",
      stats: { increase: "+300%", users: "50K+", conversion: "8.5%", timeline: "3 months" },
      technologies: ["Next.js", "Shopify", "Analytics"],
      featured: true,
    },
    {
      id: 2,
      name: "Brand Identity Redesign",
      category: "Brand Strategy",
      description: "Complete brand overhaul for a tech startup, increasing brand recognition by 250%.",
      image: "https://placehold.co/600x400/1e1b4b/ffffff?text=Project+2",
      stats: { increase: "+250%", users: "25K+", conversion: "12.3%", timeline: "6 weeks" },
      technologies: ["Figma", "Adobe Suite", "Brand Guidelines"],
      featured: false,
    },
    {
      id: 3,
      name: "Viral Social Media Campaign",
      category: "Digital Marketing",
      description: "A multi-platform social media strategy that generated viral content and increased follower engagement by 400%.",
      image: "https://placehold.co/600x400/1e1b4b/ffffff?text=Project+3",
      stats: { increase: "+400%", users: "100K+", conversion: "15.2%", timeline: "2 months" },
      technologies: ["Meta Ads", "TikTok", "Analytics"],
      featured: false,
    },
    {
      id: 4,
      name: "FinTech Mobile App UX",
      category: "Web Development",
      description: "Crafting a seamless and secure mobile banking experience, boosting user retention by 50%.",
      image: "https://placehold.co/600x400/1e1b4b/ffffff?text=Project+4",
      stats: { increase: "+50%", users: "150K+", retention: "25%", timeline: "4 months" },
      technologies: ["Figma", "React Native", "UX Research"],
      featured: false,
    },
     {
      id: 5,
      name: "SaaS Platform Rebranding",
      category: "Brand Strategy",
      description: "A complete rebranding for a B2B SaaS company to attract enterprise clients.",
      image: "https://placehold.co/600x400/1e1b4b/ffffff?text=Project+5",
      stats: { increase: "+75% leads", users: "N/A", "deal size": "+40%", timeline: "3 months" },
      technologies: ["Brand Architecture", "Content Strategy", "Webflow"],
      featured: false,
    },
];

const categories = [
    { name: "All", count: "5" },
    { name: "Web Development", count: "2" },
    { name: "Brand Strategy", count: "2" },
    { name: "Digital Marketing", count: "1" },
];

const stats = [
    { label: "Projects Completed", value: "200+", icon: Target, color: "text-cyan-400" },
    { label: "Client Satisfaction", value: "99%", icon: Heart, color: "text-pink-400" },
    { label: "Awards Won", value: "25+", icon: Award, color: "text-orange-400" },
    { label: "Countries Served", value: "50+", icon: Globe, color: "text-purple-400" },
];

//============================================================================
// HELPER COMPONENTS (reused for consistency)
//============================================================================

const StarrySky = () => {
    const stars = useMemo(() => {
        return Array.from({ length: 150 }).map((_, i) => ({
            id: i,
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            size: `${Math.random() * 2 + 1}px`,
            duration: Math.random() * 2 + 2,
            delay: Math.random() * 3,
        }));
    }, []);

    return (
        <div className="absolute inset-0 z-0">
            {stars.map(star => (
                <motion.div
                    key={star.id}
                    className="absolute rounded-full bg-white"
                    style={{ top: star.y, left: star.x, width: star.size, height: star.size }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: star.duration, delay: star.delay, repeat: Infinity, ease: "easeInOut" }}
                />
            ))}
            <ShootingStar />
        </div>
    );
};

const ShootingStar = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => setIsAnimating(false), 4500);
        }, 15000);
        return () => clearInterval(interval);
    }, []);
    
    const path = useMemo(() => {
        const startX = Math.random() * 100;
        const startY = -10;
        const endX = startX - (Math.random() * 40 + 20);
        const endY = 110;
        return { startX, startY, endX, endY };
    }, [isAnimating]);

    return (
        <AnimatePresence>
            {isAnimating && (
                <motion.div
                    className="absolute rounded-full bg-white" 
                    style={{ top: `${path.startY}%`, left: `${path.startX}%`, width: '3px', height: '3px', filter: 'blur(1px)' }}
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    animate={{ x: `calc(${path.endX - path.startX}vw)`, y: `calc(${path.endY - path.startY}vh)`, opacity: [0, 1, 0.5, 0] }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 4.5, ease: [0.6, -0.05, 0.01, 0.99] }}
                />
            )}
        </AnimatePresence>
    );
}

const CelestialBodies = () => {
    const bodies = useMemo(() => [
        { 
            id: 'galaxy', 
            style: { top: '15%', left: '10%', width: '200px', height: '200px', opacity: 0.1, filter: 'blur(10px)' },
            animate: { rotate: 360, x: 50, y: 20 },
            transition: { duration: 240, repeat: Infinity, ease: "linear", repeatType: "mirror" },
            svg: (
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 50,50 m -40,0 a 40,40 0 1,0 80,0 a 40,40 0 1,0 -80,0" fill="none" stroke="white" strokeWidth="1"/>
                    <path d="M 50,50 m -20,0 a 20,20 0 1,0 40,0 a 20,20 0 1,0 -40,0" fill="white"/>
                </svg>
            )
        },
        { 
            id: 'planet1', 
            style: { top: '70%', left: '80%', width: '80px', height: '80px', opacity: 0.2, filter: 'blur(3px)' },
            animate: { x: -100, y: -50 },
            transition: { duration: 180, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" },
            svg: (
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="45" fill="rgba(255, 255, 255, 0.3)"/>
                    <ellipse cx="50" cy="50" rx="48" ry="20" fill="none" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="2" transform="rotate(-30 50 50)"/>
                </svg>
            )
        },
    ], []);

    return(
        <>
            {bodies.map(body => (
                <motion.div
                    key={body.id}
                    className="absolute will-change-transform"
                    style={body.style}
                    animate={body.animate}
                    transition={body.transition}
                >
                    {body.svg}
                </motion.div>
            ))}
        </>
    )
}

const SectionHeader = ({ title, subtitle, gradientText }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
    >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tighter mb-4">
            {title} <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500">{gradientText}</span>
        </h2>
        <p className="text-base md:text-xl text-gray-400">{subtitle}</p>
    </motion.div>
);

const AnimatedTitle = ({ text, gradientText }) => (
     <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tighter"
     >
        {text} <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500">{gradientText}</span>
    </motion.h1>
);

const TiltCard = ({ children, className, variants }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 300, damping: 30, restDelta: 0.001 });
    const mouseY = useSpring(y, { stiffness: 300, damping: 30, restDelta: 0.001 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);
    
    const glowX = useTransform(mouseX, [-0.5, 0.5], ["-100%", "100%"]);
    const glowY = useTransform(mouseY, [-0.5, 0.5], ["-100%", "100%"]);


    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const { width, height, left, top } = rect;
        const mouseXVal = e.clientX - left;
        const mouseYVal = e.clientY - top;
        const xPct = mouseXVal / width - 0.5;
        const yPct = mouseYVal / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            variants={variants}
            className="relative will-change-transform"
        >
             <div className="absolute inset-0 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl" />

             <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                    opacity: useTransform(mouseX, (v) => Math.abs(v) > 0.1 || Math.abs(y.get()) > 0.1 ? 1 : 0),
                    background: useTransform(
                        [glowX, glowY],
                        ([latestX, latestY]) => `radial-gradient(400px at ${latestX} ${latestY}, rgba(255, 255, 255, 0.1), transparent)`
                    ),
                }}
            />
            <div 
                style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
                className={`w-full h-full p-6 md:p-8 ${className}`}
            >
                {children}
            </div>
        </motion.div>
    )
}

//============================================================================
// MAIN "ARTIST/PORTFOLIO" PAGE COMPONENT
//============================================================================

export default function ArtistPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [filteredProjects, setFilteredProjects] = useState(projects);
    
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };
    
    const cardVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 50, damping: 15 } }
    };

    const handleFilter = (category) => {
        setActiveCategory(category);
        if (category === "All") {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(p => p.category === category));
        }
    }
    
    return (
        <div className="bg-black text-white font-sans overflow-x-hidden antialiased">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <StarrySky />
                <CelestialBodies />
            </div>
            
            <main className="relative z-10">
                {/* Hero Section */}
                <section className="min-h-[80vh] flex items-center justify-center px-6 text-center">
                     <div className="space-y-6">
                        <AnimatedTitle text="Our Digital" gradientText="Showcase" />
                        <motion.p
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                           className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto"
                        >
                           Discover the exceptional projects that highlight our expertise in digital transformation, brand development, and strategic innovation.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 pt-4"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: '0px 0px 20px rgba(45, 212, 191, 0.5)' }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-300 shadow-lg flex items-center gap-2 w-full sm:w-auto justify-center"
                            >
                                Start Your Project <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </motion.div>
                    </div>
                </section>
                
                 {/* Stats Section */}
                <section className="py-16 md:py-24 px-6">
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="text-center"
                            >
                                <stat.icon className={`h-10 w-10 mx-auto mb-4 ${stat.color}`} />
                                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                 {/* Category Filter */}
                <section className="py-8 px-6 sticky top-0 z-20 bg-black/50 backdrop-blur-md">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-wrap justify-center gap-3"
                        >
                            {categories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => handleFilter(category.name)}
                                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                                activeCategory === category.name
                                    ? "bg-gradient-to-r from-cyan-500 to-pink-500 text-white shadow-lg shadow-cyan-500/20"
                                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/80 hover:text-white"
                                }`}
                            >
                                {category.name}
                                <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${activeCategory === category.name ? 'bg-white/20' : 'bg-gray-700'}`}>
                                    {category.count}
                                </span>
                            </button>
                            ))}
                        </motion.div>
                    </div>
                </section>
                
                {/* Projects Grid */}
                <section id="projects" className="py-16 md:py-24 px-6">
                    <motion.div 
                        layout
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
                    >
                        <AnimatePresence>
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    variants={cardVariants}
                                    initial="hidden"
                                    animate="show"
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ type: "spring", stiffness: 50, damping: 15 }}
                                    className={`group ${project.featured ? "md:col-span-2 lg:col-span-2" : "md:col-span-1"}`}
                                >
                                    <TiltCard className="h-full">
                                        <div className="flex flex-col h-full">
                                            <div className="relative mb-4">
                                                <img src={project.image} alt={project.name} className="w-full h-64 object-cover rounded-2xl" />
                                                <div className="absolute inset-0 bg-black/20 rounded-2xl" />
                                                <div className="absolute top-4 left-4 flex gap-2">
                                                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-500/20 text-cyan-300 backdrop-blur-sm">{project.category}</span>
                                                    {project.featured && <span className="px-3 py-1 text-xs font-semibold rounded-full bg-pink-500/20 text-pink-300 backdrop-blur-sm">Featured</span>}
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-semibold mb-2 text-white">{project.name}</h3>
                                            <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>
                                            
                                            <div className="grid grid-cols-2 gap-3 mb-4 text-center">
                                                {Object.entries(project.stats).map(([key, value]) => (
                                                    <div key={key} className="bg-white/5 p-2 rounded-lg">
                                                        <div className="text-lg font-bold text-white">{value}</div>
                                                        <div className="text-xs text-gray-400 capitalize">{key}</div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="flex flex-wrap gap-2 mt-auto">
                                                {project.technologies.map((tech, i) => (
                                                    <span key={i} className="px-2 py-1 text-xs rounded bg-gray-800/80 text-gray-300">{tech}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </TiltCard>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </section>

                {/* CTA Section */}
                <section id="contact" className="py-16 md:py-24 px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-5xl mx-auto bg-gradient-to-br from-cyan-500/10 via-black to-pink-500/10 border border-gray-800 rounded-3xl p-8 sm:p-16 text-center relative overflow-hidden"
                    >
                        <div className="absolute -top-20 -left-20 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl" />
                        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-pink-500/10 rounded-full blur-3xl" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tighter mb-6">
                                Ready to create your <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500">masterpiece?</span>
                            </h2>
                            <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                                Let's connect and discuss how we can turn your vision into our next success story.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: '0px 0px 30px rgba(217, 70, 239, 0.5)' }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-semibold px-10 sm:px-12 py-4 sm:py-5 rounded-full text-lg sm:text-xl transition-all duration-300 shadow-lg"
                            >
                                Schedule a Consultation
                            </motion.button>
                        </div>
                    </motion.div>
                </section>
            </main>
        </div>
    );
}
