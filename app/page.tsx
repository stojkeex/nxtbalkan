"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { 
  Users, TrendingUp, Star, Globe, Activity, ShieldCheck, LayoutDashboard, 
  Rocket, Flame, Lightbulb, Layers, Settings, Code, Database, Search, 
  PenTool, MessageSquare, ArrowRight, Award, Zap, GitBranch, Share2, 
  Eye, Target, BarChart, ChevronDown, CheckCircle,
  Cloud, CloudRain, CloudSun, CloudLightning, CloudSnow, Sun, Moon, 
  Droplets, Thermometer, Navigation, MapPin
} from "lucide-react";

//============================================================================
// DATA STRUCTURES (in English)
// All data is centralized for easy editing.
//============================================================================

const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
];

const coreServices = [
    { 
        icon: GitBranch, 
        title: "Digital Strategy & Transformation", 
        description: "We design digital ecosystems that foster growth, innovation, and long-term competitiveness for your brand.",
        color: "cyan"
    },
    { 
        icon: TrendingUp, 
        title: "Performance Marketing & SEO", 
        description: "With precisely targeted campaigns and technical optimization, we increase your visibility, traffic, and conversions.",
        color: "pink"
    },
    { 
        icon: Star, 
        title: "Branding & Creative Direction", 
        description: "We build strong and recognizable brands with visually stunning stories that resonate with your target audience.",
        color: "cyan"
    },
    { 
        icon: Code, 
        title: "Web & Mobile App Development", 
        description: "We create high-quality, scalable, and user-friendly digital products that solve real-world problems.",
        color: "pink"
    }
];

const whyNXT = [
    {
        icon: Lightbulb,
        title: "Innovation in our DNA",
        description: "We constantly explore new technologies and approaches to provide you with solutions that are a step ahead of the competition.",
        color: "cyan",
    },
    {
        icon: Target,
        title: "Data-Driven Decisions",
        description: "Every decision we make is based on in-depth data analysis, ensuring maximum return on your investment (ROI).",
        color: "pink",
    },
    {
        icon: Users,
        title: "A True Partnership",
        description: "We are not just contractors; we are your strategic partner. Your success is our success, so we are fully committed to your goals.",
        color: "cyan",
    },
    {
        icon: ShieldCheck,
        title: "Quality Without Compromise",
        description: "Our high standards of quality and attention to detail ensure that the final products are always top-notch and reliable.",
        color: "pink",
    }
];

const processSteps = [
    {
        title: "1. Discovery & Analysis",
        description: "We take a deep dive into your business, market, and target audience. We understand your challenges and opportunities.",
        icon: Search
    },
    {
        title: "2. Strategy & Planning",
        description: "Based on our findings, we create a comprehensive digital strategy and a detailed execution roadmap.",
        icon: Layers
    },
    {
        title: "3. Design & Prototyping",
        description: "We create intuitive and visually polished user interfaces (UI/UX) that we test with prototypes.",
        icon: PenTool
    },
    {
        title: "4. Development & Implementation",
        description: "Our engineers use cutting-edge technologies to turn your vision into a functioning digital product.",
        icon: Code
    },
    {
        title: "5. Testing & Quality Assurance",
        description: "Through rigorous testing, we ensure the solution is flawless, secure, and performs optimally on all devices.",
        icon: CheckCircle
    },
    {
        title: "6. Launch & Optimization",
        description: "After a successful launch, we monitor performance, collect data, and continuously optimize for even better results.",
        icon: Rocket
    }
];

const testimonials = [
    {
        quote: "Working with NXT Balkan exceeded all our expectations. Their strategic vision and technical execution brought our company a 300% increase in traffic in one year.",
        author: "Mark Novak",
        title: "CEO, TechSolutions Ltd.",
        avatar: "/avatars/avatar1.jpg"
    },
    {
        quote: "The NXT Balkan team not only developed our new mobile app but also became a key part of our team. Their proactivity and dedication are incredible.",
        author: "Ana Kovač",
        title: "Product Manager, Inovativ Co.",
        avatar: "/avatars/avatar2.jpg"
    },
    {
        quote: "Finally, an agency that understands data! Their approach to performance marketing resulted in a 50% lower CPA and a significant increase in ROI.",
        author: "Luka Horvat",
        title: "Marketing Director, E-commerce Ltd.",
        avatar: "/avatars/avatar3.jpg"
    }
];

const faqItems = [
    {
        question: "What is your ideal client?",
        answer: "Our ideal client is an ambitious company that understands the importance of digital presence and is looking for a long-term partner for growth. We successfully collaborate with both growing startups and established companies seeking digital transformation."
    },
    {
        question: "How do you measure the success of projects?",
        answer: "We measure success with predefined Key Performance Indicators (KPIs) that are aligned with your business goals. These can include increased sales, number of leads, organic traffic, brand awareness, or user engagement."
    },
    {
        question: "Do you offer maintenance after the project is completed?",
        answer: "Yes. Our partnership doesn't end with the launch. We offer various maintenance, support, and continuous optimization packages to keep your digital investment secure, updated, and competitive."
    },
    {
        question: "How long does an average project take?",
        answer: "The project duration depends on its complexity and scope. Smaller projects (e.g., a landing page) can take a few weeks, while the development of a complex web application can take several months. We provide a detailed timeline after our initial meeting."
    }
];

//============================================================================
// WEATHER COMPONENT
//============================================================================

const WeatherBackground = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [isDaytime, setIsDaytime] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                // Using OpenWeatherMap API for Ljubljana
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=Ljubljana&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}&units=metric`
                );
                const data = await response.json();
                
                setWeatherData({
                    temp: Math.round(data.main.temp),
                    condition: data.weather[0].main.toLowerCase(),
                    description: data.weather[0].description,
                    feelsLike: Math.round(data.main.feels_like),
                    humidity: data.main.humidity,
                    windSpeed: data.wind.speed,
                    sunrise: new Date(data.sys.sunrise * 1000),
                    sunset: new Date(data.sys.sunset * 1000),
                });

                // Check if it's daytime
                const now = new Date();
                setIsDaytime(now > new Date(data.sys.sunrise * 1000) && now < new Date(data.sys.sunset * 1000));
                
                setLoading(false);
            } catch (error) {
                console.error("Error fetching weather data:", error);
                setLoading(false);
            }
        };

        fetchWeather();
        // Refresh every 30 minutes
        const interval = setInterval(fetchWeather, 1800000);
        return () => clearInterval(interval);
    }, []);

    const getWeatherCondition = () => {
        if (!weatherData) return "clear";
        const condition = weatherData.condition;
        
        if (condition.includes("rain")) return "rain";
        if (condition.includes("thunderstorm")) return "thunder";
        if (condition.includes("snow")) return "snow";
        if (condition.includes("cloud")) return "cloudy";
        return "clear";
    };

    const weatherCondition = getWeatherCondition();

    // Apple Weather-style background gradients
    const backgroundGradients = {
        day: {
            clear: "bg-gradient-to-b from-blue-400 to-blue-600",
            cloudy: "bg-gradient-to-b from-gray-300 to-gray-500",
            rain: "bg-gradient-to-b from-gray-400 to-gray-700",
            thunder: "bg-gradient-to-b from-gray-600 to-gray-900",
            snow: "bg-gradient-to-b from-blue-100 to-blue-300",
        },
        night: {
            clear: "bg-gradient-to-b from-blue-900 to-gray-900",
            cloudy: "bg-gradient-to-b from-gray-700 to-gray-900",
            rain: "bg-gradient-to-b from-gray-800 to-black",
            thunder: "bg-gradient-to-b from-gray-900 to-black",
            snow: "bg-gradient-to-b from-blue-900 to-blue-700",
        },
    };

    const currentBackground = isDaytime 
        ? backgroundGradients.day[weatherCondition]
        : backgroundGradients.night[weatherCondition];

    // Weather condition animations
    const renderWeatherAnimation = () => {
        if (loading) return null;

        const commonProps = {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 1 },
            className: "absolute inset-0 pointer-events-none",
        };

        switch (weatherCondition) {
            case "clear":
                return (
                    <motion.div {...commonProps}>
                        <motion.div
                            animate={{
                                scale: [1, 1.05, 1],
                                opacity: [0.8, 1, 0.8],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute top-1/4 left-1/2 w-32 h-32 rounded-full bg-yellow-300 blur-xl"
                        />
                        {!isDaytime && (
                            <>
                                <motion.div
                                    animate={{
                                        rotate: 360,
                                    }}
                                    transition={{
                                        duration: 120,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    className="absolute top-1/3 left-1/3 w-2 h-2 rounded-full bg-white"
                                />
                                <motion.div
                                    animate={{
                                        rotate: 360,
                                    }}
                                    transition={{
                                        duration: 180,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    className="absolute top-1/4 left-2/3 w-1 h-1 rounded-full bg-white"
                                />
                            </>
                        )}
                    </motion.div>
                );
            case "cloudy":
                return (
                    <motion.div {...commonProps}>
                        <motion.div
                            animate={{
                                x: ["-10%", "10%", "-10%"],
                            }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute top-1/3 left-1/4 w-48 h-16 bg-gray-200/70 rounded-full blur-xl"
                        />
                        <motion.div
                            animate={{
                                x: ["10%", "-10%", "10%"],
                            }}
                            transition={{
                                duration: 40,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 5,
                            }}
                            className="absolute top-1/4 left-1/2 w-64 h-20 bg-gray-300/70 rounded-full blur-xl"
                        />
                    </motion.div>
                );
            case "rain":
                return (
                    <motion.div {...commonProps}>
                        <motion.div
                            animate={{
                                x: ["-10%", "10%", "-10%"],
                            }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute top-1/3 left-1/4 w-48 h-16 bg-gray-400/80 rounded-full blur-xl"
                        />
                        {Array.from({ length: 20 }).map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: -100, x: Math.random() * 100 + "%" }}
                                animate={{ y: "100vh" }}
                                transition={{
                                    duration: Math.random() * 1 + 0.5,
                                    repeat: Infinity,
                                    delay: Math.random() * 2,
                                }}
                                className="absolute w-0.5 h-8 bg-blue-300/50"
                                style={{ left: `${Math.random() * 100}%` }}
                            />
                        ))}
                    </motion.div>
                );
            case "thunder":
                return (
                    <motion.div {...commonProps}>
                        <motion.div
                            animate={{
                                x: ["-5%", "5%", "-5%"],
                                opacity: [0.7, 0.9, 0.7],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute top-1/3 left-1/4 w-64 h-24 bg-gray-700/90 rounded-full blur-xl"
                        />
                        <AnimatePresence>
                            {Array.from({ length: 3 }).map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{
                                        duration: 0.5,
                                        repeat: Infinity,
                                        delay: i * 2 + Math.random(),
                                    }}
                                    className="absolute w-full h-full bg-yellow-200/30"
                                />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                );
            case "snow":
                return (
                    <motion.div {...commonProps}>
                        <motion.div
                            animate={{
                                x: ["-10%", "10%", "-10%"],
                            }}
                            transition={{
                                duration: 40,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute top-1/3 left-1/4 w-48 h-16 bg-gray-300/70 rounded-full blur-xl"
                        />
                        {Array.from({ length: 30 }).map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: -100, x: Math.random() * 100 + "%", rotate: 0 }}
                                animate={{ y: "100vh", rotate: 360 }}
                                transition={{
                                    duration: Math.random() * 5 + 5,
                                    repeat: Infinity,
                                    delay: Math.random() * 5,
                                }}
                                className="absolute w-2 h-2 bg-white/80 rounded-full"
                                style={{ left: `${Math.random() * 100}%` }}
                            />
                        ))}
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <div className={`fixed inset-0 z-0 transition-colors duration-1000 ${currentBackground}`}>
            {renderWeatherAnimation()}
            
            {/* Weather info overlay (optional) */}
            {weatherData && (
                <div className="absolute bottom-8 left-8 text-white opacity-70 text-sm">
                    <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>Ljubljana</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                        <Thermometer size={16} />
                        <span>{weatherData.temp}°C ({weatherData.feelsLike}°C)</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                        <Droplets size={16} />
                        <span>{weatherData.humidity}% humidity</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                        <Navigation size={16} />
                        <span>{weatherData.windSpeed} m/s</span>
                    </div>
                </div>
            )}
        </div>
    );
};

//============================================================================
// HELPER COMPONENTS
//============================================================================

const CelestialBodies = () => {
    const bodies = useMemo(() => [
        // Subtle Galaxy
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
        // Distant Planet
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
        // Small Moon
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
            setTimeout(() => setIsAnimating(false), 4500); // Upočasnjeno trajanje
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
                    transition={{ duration: 4.5, ease: [0.6, -0.05, 0.01, 0.99] }} // Upočasnjeno
                />
            )}
        </AnimatePresence>
    );
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

const AnimatedTextWord = ({ text, className }) => {
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            className={className}
        >
            {words.map((word, index) => (
                <motion.span
                    variants={child}
                    style={{ marginRight: "0.25em" }}
                    key={index}
                >
                    {word}
                </motion.span>
            ))}
        </motion.h1>
    );
};

// Hook to check if the device is mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  return isMobile;
};

//============================================================================
// MAIN PAGE COMPONENT
//============================================================================

export default function HomePage() {
    const isMobile = useIsMobile();
    const heroRef = useRef(null);

    const { scrollYProgress: heroScrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
        enabled: !isMobile
    });

    const logoY = useTransform(heroScrollYProgress, [0, 1], ["0%", "50%"]);
    const textY = useTransform(heroScrollYProgress, [0, 1], ["0%", "100%"]);
    const textOpacity = useTransform(heroScrollYProgress, [0, 0.8], [1, 0]);
    const backgroundOpacity = useTransform(heroScrollYProgress, [0, 0.5], [1, 0]);

    const [activeTestimonial, setActiveTestimonial] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 7000); 
        return () => clearInterval(timer);
    }, []);

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
            {/* Weather Background */}
            <WeatherBackground />
            
            <main className="relative z-10">
                <motion.section
                    ref={heroRef}
                    id="home"
                    className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 z-10 overflow-hidden"
                    style={!isMobile ? { opacity: backgroundOpacity } : {}}
                >
                    <div className="absolute inset-0 bg-black/50 z-0"/>
                    
                    <motion.div 
                        style={!isMobile ? { y: logoY } : {}}
                        className="relative z-10 flex justify-center items-center w-[280px] h-[140px] sm:w-[450px] sm:h-[225px] md:w-[550px] md:h-[275px] mb-8"
                    >
                        <img
                            src="/nxtbalkancolored2.png"
                            alt="NXT Balkan Logo"
                            className="w-full h-full object-contain"
                        />
                    </motion.div>
                    
                    <motion.div style={!isMobile ? { y: textY, opacity: textOpacity } : {}} className="relative z-10 text-center">
                        <AnimatedTextWord 
                            text="Balkan Future"
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter max-w-5xl mx-auto"
                        />

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.5 }}
                            className="text-gray-300 max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl mt-8"
                        >
                            We build bridges between your vision and digital reality. Driving your growth with innovative strategies and cutting-edge technology.
                        </motion.p>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.8 }}
                            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 pt-10"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: '0px 0px 20px rgba(45, 212, 191, 0.5)' }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-300 shadow-lg flex items-center gap-2 w-full sm:w-auto justify-center"
                            >
                                Start Your Project <ArrowRight className="w-5 h-5" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                                whileTap={{ scale: 0.95 }}
                                className="border border-white/30 bg-white/5 text-white font-medium px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-300 flex items-center gap-2 backdrop-blur-sm w-full sm:w-auto justify-center"
                            >
                                Our Services
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 2.5 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2"
                    >
                        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center items-start p-1">
                            <div className="w-1.5 h-3 bg-gray-400 rounded-full" />
                        </div>
                    </motion.div>
                </motion.section>

                <section id="services" className="py-24 sm:py-32 px-6 sm:px-12">
                    <SectionHeader 
                        title="Our Core" 
                        gradientText="Expertise"
                        subtitle="A comprehensive suite of services designed for the digital age. From strategy to execution, we've got you covered."
                    />
                    
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto"
                    >
                        {coreServices.map((service, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                className="group relative bg-gray-900/50 border border-gray-800 rounded-2xl p-6 h-full transition-all duration-300 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2 will-change-transform"
                            >
                                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-${service.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}/>
                                
                                <div className="relative z-10">
                                    <div className="mb-6 w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                                        <service.icon className={`w-7 h-7 text-${service.color}-400`} />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-white">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                <section id="about" className="py-24 sm:py-32 px-6 sm:px-12">
                    <SectionHeader
                        title="Your Strategic"
                        gradientText="Partner"
                        subtitle="We don't just build products. We build partnerships based on trust, transparency, and shared success."
                    />
                    
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-1 lg:grid-cols-3 grid-rows-auto gap-6 max-w-7xl mx-auto"
                    >
                        <motion.div 
                            variants={itemVariants}
                            className="lg:col-span-3 bg-gray-900/50 border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                className="w-full md:w-1/3"
                            >
                                <div className="aspect-square bg-gradient-to-br from-cyan-500/10 to-pink-500/10 rounded-2xl flex items-center justify-center p-8">
                                    <Flame className="w-16 h-16 md:w-24 md:h-24 text-pink-400"/>
                                </div>
                            </motion.div>
                            <div className="w-full md:w-2/3">
                                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">We Are NXT Balkan</h3>
                                <p className="text-gray-300 text-base md:text-lg mb-4">
                                    We are a collective of strategists, designers, and engineers, united by one mission: to create digital experiences that make an impact. We believe in the power of technology to solve complex challenges and generate measurable results.
                                </p>
                                <p className="text-gray-400 text-sm md:text-base">
                                    Our agility allows us to adapt quickly, and our passion drives us to constantly improve. We are your partners on the journey to digital excellence.
                                </p>
                            </div>
                        </motion.div>
                        
                        {whyNXT.map((item, i) => (
                           <motion.div 
                                key={i}
                                variants={itemVariants}
                                className={`group relative bg-gray-900/50 border border-gray-800 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-${item.color}-400/50 hover:shadow-2xl hover:shadow-${item.color}-500/10 hover:-translate-y-2 will-change-transform`}
                            >
                               <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-${item.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}/>
                               
                               <div className="relative z-10">
                                   <div className="mb-5 w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center">
                                       <item.icon className={`w-6 h-6 text-${item.color}-400`} />
                                   </div>
                                   <h4 className="text-xl font-semibold mb-2 text-white">{item.title}</h4>
                                   <p className="text-gray-400 text-sm">{item.description}</p>
                               </div>
                           </motion.div>
                        ))}
                    </motion.div>
                </section>

                <section id="process" className="py-24 sm:py-32 px-6 sm:px-12">
                     <SectionHeader
                        title="Our Proven"
                        gradientText="Process"
                        subtitle="A structured and transparent approach that ensures predictability, quality, and the success of every project."
                    />
                    <div className="max-w-7xl mx-auto">
                        <div className="relative">
                            <div className="absolute left-4 md:left-1/2 top-0 w-px h-full -translate-x-1/2 bg-gradient-to-b from-cyan-500/20 via-pink-500/20 to-transparent" />

                            {processSteps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    className="relative mb-12"
                                >
                                    <div className="absolute left-4 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-black border-2 border-pink-500 z-10">
                                        <div className="w-3 h-3 rounded-full bg-pink-500"/>
                                    </div>
                                    <div className={`md:flex ${index % 2 !== 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                        <div className="ml-12 md:ml-0 md:w-5/12">
                                            <motion.div 
                                                variants={{
                                                    hidden: { opacity: 0, x: isMobile ? -20 : (index % 2 !== 0 ? 100 : -100) },
                                                    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
                                                }}
                                                className="p-6 bg-gray-900/50 border border-gray-800 rounded-2xl shadow-lg w-full will-change-transform"
                                            >
                                                <div className="flex items-center gap-4 mb-3">
                                                    <div className="w-10 h-10 flex-shrink-0 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 rounded-lg flex items-center justify-center">
                                                        <step.icon className="w-5 h-5 text-cyan-400" />
                                                    </div>
                                                    <h3 className="text-lg md:text-xl font-semibold text-white">{step.title}</h3>
                                                </div>
                                                <p className="text-gray-400 text-sm">{step.description}</p>
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
                
                <section className="py-24 sm:py-32 px-6 sm:px-12">
                    <SectionHeader
                        title="What Our"
                        gradientText="Clients Say"
                        subtitle="We are proud of the trust our partners have placed in us. Their stories are our greatest recognition."
                    />
                    <div className="max-w-4xl mx-auto relative h-[380px] sm:h-[300px]">
                        <AnimatePresence>
                            {testimonials.map((testimonial, index) =>
                                index === activeTestimonial && (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -50, scale: 0.9 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="absolute inset-0 bg-gray-900/50 border border-gray-800 rounded-2xl p-8 flex flex-col justify-center items-center text-center"
                                    >
                                        <div className="w-16 h-16 rounded-full mb-4 overflow-hidden border-2 border-cyan-400">
                                             <div className="w-full h-full bg-pink-500/20 flex items-center justify-center">
                                                <Users className="w-8 h-8 text-pink-400"/>
                                            </div>
                                        </div>
                                        <p className="text-base md:text-xl text-gray-300 italic mb-6">"{testimonial.quote}"</p>
                                        <div>
                                            <p className="font-semibold text-white">{testimonial.author}</p>
                                            <p className="text-cyan-400 text-sm">{testimonial.title}</p>
                                        </div>
                                    </motion.div>
                                )
                            )}
                        </AnimatePresence>

                        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTestimonial(index)}
                                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                        index === activeTestimonial ? 'bg-pink-500' : 'bg-gray-700 hover:bg-gray-500'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 sm:py-32 px-6 sm:px-12">
                    <SectionHeader
                        title="Frequently"
                        gradientText="Asked Questions"
                        subtitle="Have a question? You're probably not the first. Here are the answers to the most common questions."
                    />
                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqItems.map((item, index) => (
                            <FAQItem key={index} item={item} />
                        ))}
                    </div>
                </section>

                <section id="contact" className="py-24 sm:py-32 px-6 sm:px-12">
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
                                Ready for the <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500">next step?</span>
                            </h2>
                            <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                                Don't postpone your digital future. Get in touch with us, and together we will create something extraordinary.
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

// Separate component for FAQ items for better state management
const FAQItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div 
            className="border border-gray-800 rounded-2xl overflow-hidden will-change-transform"
            animate={{ borderColor: isOpen ? "rgba(45, 212, 191, 0.5)" : "rgb(31 41 55)" }}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left p-4 sm:p-6"
            >
                <span className="text-base md:text-lg font-medium text-white">{item.question}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="px-4 sm:px-6"
                    >
                        <p className="text-gray-400 pb-6 text-sm md:text-base">{item.answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};
