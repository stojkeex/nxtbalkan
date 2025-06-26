"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  ShoppingBag, Star, Eye, Heart, Truck, Shield, RotateCcw, CreditCard, 
  Sparkles, HandMetal, ArrowRight, X, MessageCircle, Instagram, Mail, Check 
} from "lucide-react";

//============================================================================
// DATA STRUCTURES
//============================================================================

const products = [
    {
      id: 1,
      name: "NXT Balkan Premium T-Shirt",
      price: 29.99,
      image: "https://placehold.co/600x600/1e1b4b/ffffff?text=T-Shirt",
      category: "Apparel",
      rating: 4.9,
      reviews: 156,
      description: "Premium quality t-shirt featuring the iconic NXT Balkan logo.",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Black", "White", "Navy"],
    },
    {
      id: 2,
      name: "NXT Balkan Premium Hoodie",
      price: 59.99,
      image: "https://placehold.co/600x600/1e1b4b/ffffff?text=Hoodie",
      category: "Apparel",
      rating: 4.8,
      reviews: 89,
      description: "Cozy premium hoodie with the signature NXT Balkan design.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "Gray", "Navy"],
    },
    {
      id: 3,
      name: "NXT Balkan Limited Edition Cap",
      price: 24.99,
      image: "https://placehold.co/600x600/1e1b4b/ffffff?text=Cap",
      category: "Accessories",
      rating: 4.7,
      reviews: 67,
      description: "Stylish cap with embroidered NXT Balkan logo.",
      sizes: ["One Size"],
      colors: ["Black", "White"],
    },
    {
      id: 4,
      name: "NXT Balkan Laptop Sleeve",
      price: 39.99,
      image: "https://placehold.co/600x600/1e1b4b/ffffff?text=Sleeve",
      category: "Tech",
      rating: 4.9,
      reviews: 124,
      description: "Premium laptop sleeve with NXT Balkan branding.",
      sizes: ["13 inch", "15 inch"],
      colors: ["Black", "Gray"],
    },
];

const categories = [
    { name: "All", count: products.length },
    { name: "Apparel", count: products.filter((p) => p.category === "Apparel").length },
    { name: "Accessories", count: products.filter((p) => p.category === "Accessories").length },
    { name: "Tech", count: products.filter((p) => p.category === "Tech").length },
];

const features = [
    { icon: Truck, title: "Free Shipping", description: "On orders over €50" },
    { icon: RotateCcw, title: "Easy Returns", description: "30-day return policy" },
    { icon: Shield, title: "Secure Payment", description: "Encrypted and safe" },
    { icon: CreditCard, title: "Multiple Payments", description: "Cards, PayPal, Crypto" },
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

//============================================================================
// MODAL COMPONENTS
//============================================================================

const ProductModal = ({ product, onClose }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  return (
    <motion.div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
        className="bg-gray-900 border border-gray-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        <div className="p-6">
          <div className="flex items-start justify-between mb-6">
            <h2 className="text-2xl font-medium bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Product Details</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white"><X className="h-5 w-5" /></button>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded-xl" />
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-500/20 text-cyan-300">{product.category}</span>
                  <div className="flex items-center gap-1"><Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /><span>{product.rating} ({product.reviews} reviews)</span></div>
                </div>
                <h3 className="text-3xl font-medium text-white mb-2">{product.name}</h3>
                <div className="flex items-center gap-3"><span className="text-3xl font-light text-white">€{product.price}</span></div>
              </div>
              <p className="text-gray-300 leading-relaxed">{product.description}</p>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Size</label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => <button key={size} onClick={() => setSelectedSize(size)} className={`px-4 py-2 text-sm rounded-full transition-colors ${selectedSize === size ? 'bg-cyan-500 text-white' : 'bg-gray-800 hover:bg-gray-700'}`}>{size}</button>)}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Color</label>
                <div className="flex gap-3">
                  {product.colors.map((color) => <button key={color} onClick={() => setSelectedColor(color)} className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? "border-cyan-400" : "border-gray-600"}`} style={{backgroundColor: color.toLowerCase()}}/>)}
                </div>
                <p className="text-sm text-gray-400 mt-1">Selected: {selectedColor}</p>
              </div>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-pink-500 hover:scale-105 transition-transform text-white font-medium py-3 rounded-full flex items-center justify-center gap-2">
                <ShoppingBag className="h-5 w-5" /> Buy Now - €{product.price}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

//============================================================================
// SHOP PAGE CONTENT
//============================================================================
const ShopContent = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const containerVariants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
    const cardVariants = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } } };

    const handleFilter = (category) => {
        setActiveCategory(category);
        if (category === "All") setFilteredProducts(products);
        else setFilteredProducts(products.filter(p => p.category === category));
    };

    return(
        <>
            <section className="min-h-[80vh] flex items-center justify-center px-6 text-center">
                <div className="space-y-6">
                    <AnimatedTitle text="NXT Balkan" gradientText="Store" />
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4, ease: "easeOut" }} className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
                        Discover our exclusive collection of premium merchandise that represents digital excellence and innovation.
                    </motion.p>
                </div>
            </section>
            <section className="py-16 md:py-24 px-6">
                <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {features.map((stat, index) => (
                        <motion.div key={index} variants={cardVariants} className="text-center">
                            <stat.icon className={`h-10 w-10 mx-auto mb-4 text-cyan-400`} />
                            <h3 className="font-semibold text-white">{stat.title}</h3>
                            <p className="text-sm text-gray-400">{stat.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
            <section className="py-8 px-6 sticky top-0 z-20 bg-black/50 backdrop-blur-md">
                <div className="max-w-7xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-wrap justify-center gap-3">
                        {categories.map((category, index) => (
                        <button key={index} onClick={() => handleFilter(category.name)} className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${activeCategory === category.name ? "bg-gradient-to-r from-cyan-500 to-pink-500 text-white shadow-lg shadow-cyan-500/20" : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/80 hover:text-white"}`}>
                            {category.name}
                            <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${activeCategory === category.name ? 'bg-white/20' : 'bg-gray-700'}`}>{category.count}</span>
                        </button>
                        ))}
                    </motion.div>
                </div>
            </section>
            <section id="products" className="py-16 md:py-24 px-6">
                <motion.div layout variants={containerVariants} initial="hidden" animate="show" className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    <AnimatePresence>
                        {filteredProducts.map((product) => (
                            <motion.div key={product.id} layout variants={cardVariants} exit={{ opacity: 0, scale: 0.8 }} onClick={() => setSelectedProduct(product)} className="cursor-pointer">
                                <TiltCard className="h-full">
                                    <div className="flex flex-col h-full bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6">
                                        <div className="relative mb-4"><img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-2xl" /><div className="absolute inset-0 bg-black/20 rounded-2xl" /></div>
                                        <h3 className="text-lg font-semibold mb-1 text-white">{product.name}</h3>
                                        <div className="flex items-center justify-between text-sm text-gray-400 mb-3"><span>{product.category}</span><div className="flex items-center gap-1"><Star className="h-4 w-4 text-yellow-400"/><span>{product.rating} ({product.reviews})</span></div></div>
                                        <p className="text-gray-400 text-sm mb-4 flex-grow">{product.description}</p>
                                        <div className="flex items-center justify-between mt-auto"><p className="text-xl font-bold text-white">€{product.price}</p><div className="p-2 rounded-full bg-cyan-500/20"><Eye className="w-5 h-5 text-cyan-300"/></div></div>
                                    </div>
                                </TiltCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>
             <AnimatePresence>
                {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
            </AnimatePresence>
        </>
    )
}

// INTRO SCENE - IZBOLJŠANA VERZIJA Z REALNIMI VRATI
const IntroScene = ({ onEnter }) => {
    const [isZooming, setIsZooming] = useState(false);
    
    const handleClick = () => {
        setIsZooming(true);
        setTimeout(() => {
            onEnter();
        }, 1500);
    };

    return (
        <div className="fixed inset-0 z-50 overflow-hidden" style={{ perspective: "800px" }}>
            <motion.div 
                className="absolute inset-0" 
                style={{ transformStyle: "preserve-3d" }}
                animate={isZooming ? {
                    scale: 10,
                    opacity: 0,
                    transition: { duration: 1.5, ease: [0.6, 0.01, -0.05, 0.95] }
                } : {}}
            >
                <StarrySky count={50} />
                <motion.div 
                    className="absolute inset-0"
                    style={{
                        transform: "translateY(50%) rotateX(80deg)",
                        backgroundImage: `repeating-linear-gradient(to bottom, transparent, transparent 49.5%, rgba(0, 255, 255, 0.2) 50%, transparent 50.5%), repeating-linear-gradient(to right, transparent, transparent 49.5%, rgba(255, 105, 180, 0.2) 50%, transparent 50.5%)`,
                        backgroundSize: "80px 80px",
                    }}
                    animate={{ backgroundPosition: "0px 160px" }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }} 
                />
                <div className="absolute inset-0" style={{ transform: "translateZ(-800px)" }}>
                    <div className="absolute bottom-0 left-[10%] w-[10%] h-[100%] bg-gradient-to-t from-indigo-900 to-transparent" />
                    <div className="absolute bottom-0 left-[25%] w-[8%] h-[120%] bg-gradient-to-t from-indigo-900 to-transparent" />
                    <div className="absolute bottom-0 right-[15%] w-[12%] h-[110%] bg-gradient-to-t from-indigo-900 to-transparent" />
                    <div className="absolute bottom-0 right-[30%] w-[7%] h-[130%] bg-gradient-to-t from-indigo-900 to-transparent" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center" style={{ transform: "translateZ(-100px)" }}>
                    <motion.div 
                        initial={{ opacity: 0, y: 50, scale: 0.8 }} 
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }} 
                        className="relative z-10 flex flex-col items-center group cursor-pointer"
                        onClick={handleClick}
                        whileHover={{ scale: 1.05 }}
                    >
                        {/* Nova struktura za bolj realistična vrata */}
                        <div className="relative w-64 h-96 md:w-80 md:h-[28rem]">
                            {/* Okvir vrat */}
                            <motion.div 
                                className="w-full h-full border-8 border-gray-800 rounded-lg overflow-hidden shadow-2xl"
                                style={{
                                    boxShadow: '0 0 60px rgba(0, 255, 255, 0.6), inset 0 0 30px rgba(0, 255, 255, 0.4)',
                                    backgroundColor: 'rgba(30, 27, 75, 0.7)'
                                }}
                            >
                                {/* Notranjost trgovine - skozi vrata */}
                                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm overflow-hidden">
                                    <motion.div 
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{
                                            backgroundImage: "url('https://media.istockphoto.com/id/1311627464/photo/modern-facade-of-clothes-store-with-empty-signboard-3d-illustration.jpg?s=612x612&w=0&k=20&c=2prRy82LzSPRdvR9923CPwRwzia3gLGNPwVNNE85fIU=')",
                                            transform: 'translateZ(20px)'
                                        }}
                                        animate={isZooming ? { 
                                            scale: 1.2,
                                            transition: { duration: 1.5 }
                                        } : {
                                            scale: 1,
                                            transition: { duration: 10, repeat: Infinity, repeatType: "mirror" }
                                        }}
                                    />
                                </div>
                                
                                {/* Detajli vrat - kljuka, okras */}
                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                                    <motion.div 
                                        className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center border-2 border-gray-600 shadow-lg"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <HandMetal className="w-6 h-6 text-gray-300" />
                                    </motion.div>
                                </div>
                                
                                {/* Napis na vratih */}
                                <div className="absolute bottom-8 left-0 right-0 text-center">
                                    <motion.div 
                                        className="inline-block px-4 py-2 bg-black/50 rounded-full backdrop-blur-sm"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 2 }}
                                    >
                                        <span className="text-white font-medium text-lg">Enter Store</span>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

//============================================================================
// MAIN WRAPPER COMPONENT
//============================================================================
export default function ShopPageWrapper() {
    const [scene, setScene] = useState('intro');

    return (
        <div className="bg-black text-white font-sans overflow-x-hidden antialiased">
             <div className="fixed inset-0 z-0 pointer-events-none">
                <StarrySky />
            </div>
            
            <AnimatePresence>
                {scene === 'intro' && (
                    <IntroScene onEnter={() => setScene('shop')} />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {scene === 'shop' && (
                    <motion.main 
                        key="content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="relative z-10"
                    >
                        <ShopContent/>
                    </motion.main>
                )}
            </AnimatePresence>
        </div>
    );
}
