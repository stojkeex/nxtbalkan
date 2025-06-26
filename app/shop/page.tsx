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
      description: "Premium quality t-shirt featuring the iconic NXT Balkan logo. Made from 100% organic cotton for maximum comfort.",
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
      description: "Cozy premium hoodie with the signature NXT Balkan design. Perfect for casual wear or professional events.",
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
      description: "Stylish cap with embroidered NXT Balkan logo. Adjustable fit for maximum comfort.",
      sizes: ["One Size"],
      colors: ["Black", "White"],
    },
];

const categories = [
    { name: "All", count: products.length },
    { name: "Apparel", count: products.filter((p) => p.category === "Apparel").length },
    { name: "Accessories", count: products.filter((p) => p.category === "Accessories").length },
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

const PurchaseModal = ({ product, size, color, onClose, onBack }) => {
    const generateWhatsAppMessage = () => `Hi! I'm interested in purchasing the ${product.name} (€${product.price}) in size ${size} and color ${color}. Can you help me with the order?`;
    const generateEmailMessage = () => `Subject: Order Inquiry - ${product.name}&body=Hi,%0D%0A%0D%0AI'm interested in purchasing:%0D%0A%0D%0AProduct: ${product.name}%0D%0APrice: €${product.price}%0D%0ASize: ${size}%0D%0AColor: ${color}%0D%0A%0D%0ACan you help me with the order process?%0D%0A%0D%0AThank you!`;
    
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-gray-900 border border-gray-700 rounded-2xl max-w-md w-full"
        >
            <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-medium bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Contact Us to Order</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white"><X className="h-5 w-5" /></button>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
                    <h3 className="font-medium text-white mb-2">Order Summary</h3>
                    <div className="space-y-1 text-sm">
                        <div className="flex justify-between"><span className="text-gray-300">Product:</span><span className="text-white">{product.name}</span></div>
                        <div className="flex justify-between"><span className="text-gray-300">Size:</span><span className="text-white">{size}</span></div>
                        <div className="flex justify-between"><span className="text-gray-300">Color:</span><span className="text-white">{color}</span></div>
                        <div className="flex justify-between font-medium"><span className="text-gray-300">Price:</span><span className="text-white">€{product.price}</span></div>
                    </div>
                </div>
                <div className="space-y-3">
                    <a href={`https://wa.me/YOUR_PHONE_NUMBER?text=${encodeURIComponent(generateWhatsAppMessage())}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full transition-colors gap-2"><MessageCircle className="h-5 w-5"/>Order via WhatsApp</a>
                    <a href="https://instagram.com/nxt.balkan" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full transition-all gap-2"><Instagram className="h-5 w-5"/>Order via Instagram</a>
                    <a href={`mailto:info@nxtbalkan.com?${generateEmailMessage()}`} className="flex items-center justify-center w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors gap-2"><Mail className="h-5 w-5"/>Order via Email</a>
                </div>
                <button onClick={onBack} className="w-full mt-4 text-sm text-gray-400 hover:text-white">Back to product</button>
            </div>
        </motion.div>
    );
};

const ProductModal = ({ product, onClose }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [view, setView] = useState('details'); 

  return (
    <motion.div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <AnimatePresence mode="wait">
        {view === 'details' ? (
          <motion.div
            key="details"
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
                  <button onClick={() => setView('purchase')} className="w-full bg-gradient-to-r from-cyan-500 to-pink-500 hover:scale-105 transition-transform text-white font-medium py-3 rounded-full flex items-center justify-center gap-2">
                    <ShoppingBag className="h-5 w-5" /> Buy Now - €{product.price}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <PurchaseModal key="purchase" product={product} size={selectedSize} color={selectedColor} onClose={onClose} onBack={() => setView('details')} />
        )}
      </AnimatePresence>
    </motion.div>
  );
};


//============================================================================
// MAIN PAGE COMPONENT
//============================================================================
export default function ShopPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [filteredProducts, setFilteredProducts] = useState(products.filter(p => !p.featured));
    const [selectedProduct, setSelectedProduct] = useState(null);
    const featuredProduct = products.find(p => p.featured);

    const containerVariants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
    const cardVariants = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } } };

    const handleFilter = (category) => {
        setActiveCategory(category);
        const nonFeatured = products.filter(p => !p.featured);
        if (category === "All") setFilteredProducts(nonFeatured);
        else setFilteredProducts(nonFeatured.filter(p => p.category === category));
    };

    return (
        <div className="bg-black text-white font-sans overflow-x-hidden antialiased">
             <div className="fixed inset-0 z-0 pointer-events-none">
                <StarrySky />
            </div>
            
            <motion.main 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="relative z-10"
            >
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

                {featuredProduct && (
                     <section className="px-6 pb-16 md:pb-24">
                        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{once: true}} transition={{duration: 0.8, ease: "easeOut"}} className="max-w-7xl mx-auto">
                           <div onClick={() => setSelectedProduct(featuredProduct)} className="cursor-pointer group relative bg-gray-900/50 border border-gray-800 rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                                <div className="relative z-10 text-center md:text-left">
                                    <span className="px-3 py-1 text-sm font-semibold rounded-full bg-pink-500/20 text-pink-300">Featured Product</span>
                                    <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-4">{featuredProduct.name}</h2>
                                    <p className="text-gray-400 mb-6">{featuredProduct.description}</p>
                                    <button className="px-6 py-3 bg-white text-black font-semibold rounded-full">View Product</button>
                                </div>
                                <motion.div whileHover={{scale: 1.05}} className="relative z-10">
                                    <img src={featuredProduct.image} alt={featuredProduct.name} className="w-full h-auto object-cover rounded-2xl"/>
                                </motion.div>
                           </div>
                        </motion.div>
                    </section>
                )}

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
                    <motion.div layout variants={containerVariants} initial="hidden" animate="show" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
                                Have a <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500">question?</span>
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
            </motion.main>
        </div>
    );
}
