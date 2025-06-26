"use client";

// Since the request specified a single file, all components,
// animations, and data are defined here. In a real-world project,
// this would be split into multiple files for better organization.

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, Star, Activity, Rocket, Globe, ShieldCheck, LayoutDashboard, 
  Lightbulb, Flame, ArrowRight
} from "lucide-react";

//============================================================================
// DATA STRUCTURES (in English)
//============================================================================

const teamMembers = [
    { name: "Ana Novak", role: "Founder & CEO", description: "Visionary leader driving innovation and growth.", imgSrc: "https://placehold.co/200x200/1e1b4b/ffffff?text=AN" },
    { name: "Marko Kranjc", role: "Creative Director", description: "Crafts stunning campaigns with storytelling & design.", imgSrc: "https://placehold.co/200x200/1e1b4b/ffffff?text=MK" },
    { name: "Sara Petrovic", role: "Head of Marketing", description: "Expert in scaling brands through data-driven strategies.", imgSrc: "https://placehold.co/200x200/1e1b4b/ffffff?text=SP" },
    { name: "Luka Zupan", role: "Lead Developer", description: "Builds scalable and performant digital platforms.", imgSrc: "https://placehold.co/200x200/1e1b4b/ffffff?text=LZ" },
];

const coreValues = [
    { icon: Users, title: "Community First", description: "Building engaged, loyal communities that amplify your brand’s voice and foster genuine connections." },
    { icon: Activity, title: "Data-Driven", description: "Using actionable insights and analytics to power strategic decisions and maximize ROI." },
    { icon: Star, title: "Innovative", description: "Pushing creative boundaries to deliver standout, memorable digital experiences." },
    { icon: Rocket, title: "Growth-Focused", description: "Helping startups and established brands scale rapidly with agile, proven strategies." },
];

const partners = [
    { name: "TechWave", logo: "https://placehold.co/160x60/ffffff/000000?text=TechWave" },
    { name: "FutureLabs", logo: "https://placehold.co/160x60/ffffff/000000?text=FutureLabs" },
    { name: "GlobalReach", logo: "https://placehold.co/160x60/ffffff/000000?text=GlobalReach" },
    { name: "BrightSolutions", logo: "https://placehold.co/160x60/ffffff/000000?text=BrightSolutions" },
];


//============================================================================
// HELPER COMPONENTS (reused from HomePage for consistency)
//============================================================================

// Starry Sky Background Component
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
                    style={{
                        top: star.y,
                        left: star.x,
                        width: star.size,
                        height: star.size,
                    }}
                    animate={{
                        opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                        duration: star.duration,
                        delay: star.delay,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            ))}
            <ShootingStar />
        </div>
    );
};

// Shooting Star Component
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
                    style={{
                        top: `${path.startY}%`,
                        left: `${path.startX}%`,
                        width: '3px', 
                        height: '3px',
                        filter: 'blur(1px)', 
                    }}
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    animate={{ 
                        x: `calc(${path.endX - path.startX}vw)`, 
                        y: `calc(${path.endY - path.startY}vh)`,
                        opacity: [0, 1, 0.5, 0] 
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 4.5, ease: [0.6, -0.05, 0.01, 0.99] }}
                />
            )}
        </AnimatePresence>
    );
}

// Celestial Bodies Component
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
                    <path d="M 50,50 m -30,0 a 30,30 0 0,1 0,60" fill="none" stroke="white" strokeWidth="1" strokeDasharray="2 2"/>
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
        { 
            id: 'moon', 
            style: { top: '30%', left: '75%', width: '25px', height: '25px', opacity: 0.4 },
            animate: { x: -40, y: 60 },
            transition: { duration: 150, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" },
            svg: (
                 <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" fill="rgba(200, 200, 200, 0.8)"/>
                    <circle cx="35" cy="35" r="10" fill="rgba(255, 255, 255, 0.3)"/>
                    <circle cx="65" cy="60" r="5" fill="rgba(255, 255, 255, 0.2)"/>
                 </svg>
            )
        }
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

//============================================================================
// MAIN "ABOUT US" PAGE COMPONENT
//============================================================================

export default function AboutPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 } 
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <div className="bg-black text-white font-sans overflow-x-hidden antialiased">
            
            {/* Background elements from HomePage */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <StarrySky />
                <CelestialBodies />
                <motion.div
                    className="absolute top-[-20%] left-[-20%] w-[800px] h-[800px] bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl md:blur-[150px] opacity-20 md:opacity-30"
                    animate={{ x: [0, 100, -50, 0], y: [0, -50, 100, 0] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
                />
                <motion.div
                    className="absolute bottom-[-20%] right-[-20%] w-[700px] h-[700px] bg-gradient-to-tl from-pink-500/20 to-transparent rounded-full blur-3xl md:blur-[150px] opacity-20 md:opacity-30"
                    animate={{ x: [0, -100, 50, 0], y: [0, 50, -100, 0] }}
                    transition={{ duration: 45, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
                />
            </div>
            
            <main className="relative z-10 pt-24 md:pt-32 pb-16 md:pb-24">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-center px-6"
                >
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tighter">
                        The Story of <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500">NXT Balkan</span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mt-6">
                        We are a pioneering digital agency dedicated to transforming brands into next-generation leaders through innovation, creativity, and technology.
                    </p>
                </motion.div>

                {/* Main Content Sections */}
                <div className="mt-20 md:mt-32 space-y-20 md:space-y-32 px-6">
                    {/* Our Journey Section */}
                    <motion.section 
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="max-w-4xl mx-auto bg-gray-900/50 border border-gray-800 rounded-3xl p-8 md:p-12 text-center backdrop-blur-sm"
                    >
                        <h2 className="text-3xl md:text-4xl font-light mb-6">
                            Our <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-cyan-400">Journey</span>
                        </h2>
                        <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
                            Founded in 2017, NXT Balkan has evolved from a small startup to a digital powerhouse. Our passion lies in merging creativity with data-driven strategies to deliver scalable, engaging, and memorable digital experiences that resonate with audiences worldwide.
                        </p>
                    </motion.section>

                    {/* Vision & Mission Section */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <motion.div
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 md:p-10 flex flex-col items-center text-center backdrop-blur-sm"
                        >
                            <Flame className="w-12 h-12 text-pink-500 mb-6"/>
                            <h3 className="text-2xl md:text-3xl font-light mb-4">Our Vision</h3>
                            <p className="text-gray-400 leading-relaxed">
                                To be the premier digital transformation partner that empowers brands globally to innovate, grow, and inspire.
                            </p>
                        </motion.div>
                        <motion.div
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 md:p-10 flex flex-col items-center text-center backdrop-blur-sm"
                        >
                            <Lightbulb className="w-12 h-12 text-cyan-400 mb-6"/>
                            <h3 className="text-2xl md:text-3xl font-light mb-4">Our Mission</h3>
                            <p className="text-gray-400 leading-relaxed">
                                To deliver innovative, data-driven digital solutions that help businesses scale and build lasting digital legacies.
                            </p>
                        </motion.div>
                    </section>
                    
                    {/* Core Values Section */}
                    <section>
                        <SectionHeader title="Our Core" gradientText="Values" subtitle="The principles that drive our work and define our relationships."/>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto"
                        >
                            {coreValues.map((value, i) => (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    className="group relative bg-gray-900/50 border border-gray-800 rounded-2xl p-6 h-full transition-all duration-300 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2 will-change-transform text-center"
                                >
                                    <div className="relative z-10 flex flex-col items-center">
                                        <div className="mb-6 w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                                            <value.icon className="w-7 h-7 text-cyan-400" />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-3 text-white">
                                            {value.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm">
                                            {value.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </section>

                    {/* Team Section */}
                    <section>
                        <SectionHeader title="Meet the" gradientText="Team" subtitle="The architects of digital excellence. A blend of creativity, strategy, and technical prowess." />
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto"
                        >
                            {teamMembers.map((member, i) => (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 text-center will-change-transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/10"
                                >
                                    <img
                                        src={member.imgSrc}
                                        alt={member.name}
                                        className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-cyan-400/50"
                                        loading="lazy"
                                    />
                                    <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                                    <p className="text-cyan-400 mb-2">{member.role}</p>
                                    <p className="text-gray-400 text-sm">{member.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </section>
                    
                    {/* Partners Section */}
                    <section>
                         <SectionHeader title="Trusted By" gradientText="Innovators" subtitle="We are proud to collaborate with industry leaders and visionary startups." />
                         <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 1 }}
                            className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 max-w-4xl mx-auto"
                         >
                            {partners.map((partner, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.1 }}
                                    className="filter grayscale hover:grayscale-0 transition-all duration-300"
                                >
                                    <img src={partner.logo} alt={partner.name} className="h-10 md:h-12" loading="lazy" />
                                </motion.div>
                            ))}
                         </motion.div>
                    </section>

                    {/* CTA Section */}
                    <section id="contact" className="pt-12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-5xl mx-auto bg-gradient-to-br from-cyan-500/10 via-black to-pink-500/10 border border-gray-800 rounded-3xl p-8 sm:p-16 text-center relative overflow-hidden"
                        >
                            <div className="absolute -top-20 -left-20 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl" />
                            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-pink-500/10 rounded-full blur-3xl" />
                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tighter mb-6">
                                    Ready to build the <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500">future?</span>
                                </h2>
                                <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                                    Let's connect and discuss how we can elevate your brand to the next level.
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
                </div>
            </main>
        </div>
    );
}
