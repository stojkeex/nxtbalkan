"use client";

// Since the request specified a single file, all components,
// animations, and data are defined here. In a real-world project,
// this would be split into multiple files for better organization.

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  Users, Globe, TrendingUp, Zap, Target, Check, Star, ArrowRight, Sparkles, Crown, Palette 
} from "lucide-react";

//============================================================================
// DATA STRUCTURES (Content from the provided file)
//============================================================================

const services = [
    {
      icon: Users,
      title: "Social Media Management",
      description: "Strategic social media presence that drives engagement and builds lasting connections.",
      features: [
        "Content strategy & planning",
        "Community management",
        "Influencer partnerships",
        "Performance analytics",
      ],
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven campaigns that deliver measurable results and maximize ROI.",
      features: [
        "PPC advertising campaigns",
        "SEO optimization",
        "Email marketing automation",
        "Conversion optimization",
      ],
    },
    {
      icon: Palette,
      title: "Brand Strategy",
      description: "Comprehensive brand development that resonates with your target audience.",
      features: [
        "Brand identity design",
        "Visual identity systems",
        "Brand positioning strategy",
        "Creative campaign development",
      ],
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites that convert visitors into customers.",
      features: [
        "Custom website development",
        "E-commerce solutions",
        "Mobile optimization",
        "Performance optimization",
      ],
    },
];

const pricingPackages = [
    {
      title: "Starter",
      price: "999",
      currency: "€",
      description: "Perfect for small businesses taking their first digital step.",
      features: [
        "Social media setup (3 platforms)",
        "Basic brand guidelines",
        "Landing page design",
        "Monthly performance report",
      ],
      delivery: "2-3 weeks",
      featured: false,
    },
    {
      title: "Professional",
      price: "2,499",
      currency: "€",
      description: "For growing businesses ready to scale their digital presence.",
      features: [
        "Complete digital strategy",
        "Full brand identity package",
        "Professional website",
        "3-month marketing campaign",
        "Weekly strategy calls",
      ],
      delivery: "4-6 weeks",
      featured: true,
    },
    {
      title: "Enterprise",
      price: "Contact Us",
      currency: "",
      description: "Comprehensive solution for established businesses seeking market leadership.",
      features: [
        "Multi-platform digital ecosystem",
        "Advanced analytics setup",
        "Custom integrations & APIs",
        "Dedicated account manager",
      ],
      delivery: "Custom",
      featured: false,
    },
];

const process = [
    { step: "01", title: "Discovery", description: "Understanding your goals, audience, and market position.", icon: Target },
    { step: "02", title: "Strategy", description: "Developing a comprehensive digital roadmap tailored to you.", icon: TrendingUp },
    { step: "03", title: "Execution", description: "Implementing solutions with precision and attention to detail.", icon: Zap },
    { step: "04", title: "Optimization", description: "Continuous monitoring and improvement for maximum performance.", icon: Sparkles },
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

// NEW: Interactive 3D Tilt Card Component
const TiltCard = ({ children, className, variants }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 300, damping: 30, restDelta: 0.001 });
    const mouseY = useSpring(y, { stiffness: 300, damping: 30, restDelta: 0.001 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

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
            <div 
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className={`w-full h-full ${className}`}
            >
                {children}
            </div>
        </motion.div>
    )
}


//============================================================================
// MAIN "SERVICES" PAGE COMPONENT
//============================================================================

export default function ServicesPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };
    
    const cardVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        show: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { type: "spring", stiffness: 50, damping: 15 }
        }
    };
    
    const glassCardClass = "bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl transition-all duration-300 relative overflow-hidden";

    return (
        <div className="bg-black text-white font-sans overflow-x-hidden antialiased">
            
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
            
            <main className="relative z-10">
                {/* Hero Section */}
                <section className="min-h-[80vh] flex items-center justify-center px-6 text-center">
                     <div className="space-y-6">
                        <AnimatedTitle text="Our Suite of" gradientText="Digital Services" />
                        <motion.p
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                           className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto"
                        >
                           From strategy to execution, we provide comprehensive digital solutions that transform your brand and drive meaningful results.
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
                                Get Started Today <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </motion.div>
                    </div>
                </section>
                
                {/* Services Grid */}
                <section id="services-grid" className="py-16 md:py-24 px-6">
                    <SectionHeader title="What We" gradientText="Deliver" subtitle="Professional digital services designed to accelerate your business growth."/>
                    <motion.div 
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.1 }}
                      className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto"
                    >
                        {services.map((service, index) => (
                            <TiltCard key={index} variants={cardVariants}>
                                <div className={`p-8 h-full flex flex-col group ${glassCardClass}`}>
                                    <div className="mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-pink-500/20 flex items-center justify-center transform-style-3d group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                                        <service.icon className="w-8 h-8 text-cyan-400"/>
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-3 text-white">{service.title}</h3>
                                    <p className="text-gray-400 mb-6 flex-grow">{service.description}</p>
                                    <ul className="space-y-3">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-center text-gray-300">
                                                <Check className="w-5 h-5 mr-3 text-cyan-400 flex-shrink-0"/>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </TiltCard>
                        ))}
                    </motion.div>
                </section>
                
                {/* Pricing Packages */}
                <section id="pricing" className="py-16 md:py-24 px-6">
                    <SectionHeader title="Flexible" gradientText="Pricing" subtitle="Choose the plan that fits your needs and budget."/>
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch"
                    >
                        {pricingPackages.map((pkg, index) => (
                             <TiltCard key={index} variants={cardVariants} className="h-full">
                                <div className={`p-8 flex flex-col h-full ${glassCardClass} ${pkg.featured ? 'border-pink-500/50' : ''}`}>
                                    {pkg.featured && (
                                        <div className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-pink-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>
                                    )}
                                    <h3 className={`text-2xl font-semibold mb-2 ${pkg.featured ? 'text-pink-400' : 'text-white'}`}>{pkg.title}</h3>
                                    <p className="text-gray-400 mb-6 flex-grow">{pkg.description}</p>
                                    <div className="mb-6 text-center">
                                        <span className="text-5xl font-bold">{pkg.price}</span>
                                        {pkg.currency && <span className="text-3xl font-bold ml-1">{pkg.currency}</span>}
                                        <span className="text-gray-400 block mt-1">/ package</span>
                                    </div>
                                    <ul className="mb-8 space-y-3 text-gray-300">
                                        {pkg.features.map((feature, i) => (
                                            <li key={i} className="flex items-center">
                                                <Check className="w-5 h-5 mr-3 text-cyan-400 flex-shrink-0"/>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-sm text-gray-500 text-center mb-6">Delivery time: {pkg.delivery}</p>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`mt-auto w-full py-3 rounded-full font-semibold transition-all duration-300 ${pkg.featured ? 'bg-pink-500 hover:bg-pink-600 text-white' : 'bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-300'}`}
                                    >
                                        Choose Plan
                                    </motion.button>
                                </div>
                            </TiltCard>
                        ))}
                    </motion.div>
                </section>
                
                {/* Process Section */}
                <section id="process" className="py-16 md:py-24 px-6">
                     <SectionHeader title="Our Process" gradientText="Simplified" subtitle="A step-by-step approach to ensure your project's success."/>
                     <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
                    >
                        {process.map((step, index) => (
                            <TiltCard key={index} variants={cardVariants}>
                                <div className={`text-center p-6 h-full ${glassCardClass}`}>
                                    <div className="mb-4 text-pink-400 font-bold text-6xl opacity-20">{step.step}</div>
                                    <step.icon className="w-10 h-10 mx-auto mb-4 text-cyan-400"/>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                                    <p className="text-gray-400 text-sm">{step.description}</p>
                                </div>
                            </TiltCard>
                        ))}
                     </motion.div>
                </section>

            </main>
        </div>
    );
}

