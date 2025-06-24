"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ShoppingBag,
  Star,
  Eye,
  Heart,
  Truck,
  Shield,
  RotateCcw,
  CreditCard,
  Sparkles,
  Crown,
  ArrowRight,
  X,
  MessageCircle,
  Instagram,
  Mail,
  Check,
} from "lucide-react"
import { useState } from "react"

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [showPurchaseModal, setShowPurchaseModal] = useState(false)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")

  const products = [
    {
      id: 1,
      name: "NXT Balkan Classic T-Shirt",
      price: 25.0,
      originalPrice: 35.0,
      image: "/placeholder.svg?height=400&width=400",
      category: "T-Shirts",
      rating: 4.8,
      reviews: 124,
      description:
        "Premium quality black t-shirt featuring the iconic NXT Balkan logo with headphones and sound wave design. Made from 100% organic cotton for maximum comfort and durability. Perfect for concerts, casual wear, or showing your support for Balkan music culture.",
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      features: ["100% Organic Cotton", "Pre-shrunk fabric", "Reinforced seams", "Machine washable", "Unisex fit"],
      colors: ["Black", "White", "Navy"],
      inStock: true,
      isNew: false,
      isBestseller: true,
      discount: 29,
      gradient: "from-cyan-400 to-blue-500",
      bgGradient: "from-cyan-400/10 to-blue-500/10",
    },
    {
      id: 2,
      name: "NXT Balkan Premium Hoodie",
      price: 45.0,
      originalPrice: 60.0,
      image: "/placeholder.svg?height=400&width=400",
      category: "Hoodies",
      rating: 4.9,
      reviews: 89,
      description:
        "Cozy premium hoodie with the signature NXT Balkan design. Perfect for studio sessions or casual wear. Features a spacious front pocket and adjustable drawstring hood. Made with high-quality cotton blend for ultimate comfort.",
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      features: [
        "80% Cotton, 20% Polyester",
        "Fleece-lined interior",
        "Kangaroo pocket",
        "Adjustable drawstring",
        "Ribbed cuffs and hem",
      ],
      colors: ["Black", "Gray", "Navy"],
      inStock: true,
      isNew: true,
      isBestseller: false,
      discount: 25,
      gradient: "from-purple-400 to-pink-500",
      bgGradient: "from-purple-400/10 to-pink-500/10",
    },
    {
      id: 3,
      name: "Off-White x NXT Balkan Limited Edition",
      price: 65.0,
      originalPrice: 85.0,
      image: "/placeholder.svg?height=400&width=400",
      category: "Limited Edition",
      rating: 5.0,
      reviews: 45,
      description:
        "Exclusive collaboration piece featuring a unique crossed arrows design with the NXT Balkan logo. Limited production run - only 500 pieces available worldwide. Each piece comes with a numbered authenticity tag and collector's packaging.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      features: [
        "Premium cotton blend",
        "Limited edition design",
        "Numbered authenticity tag",
        "Collector's packaging",
        "Exclusive collaboration",
      ],
      colors: ["Black"],
      inStock: true,
      isNew: false,
      isBestseller: false,
      isLimited: true,
      discount: 24,
      gradient: "from-orange-400 to-red-500",
      bgGradient: "from-orange-400/10 to-red-500/10",
    },
    {
      id: 4,
      name: "NXT Balkan Snapback Cap",
      price: 20.0,
      originalPrice: 25.0,
      image: "/placeholder.svg?height=400&width=400",
      category: "Accessories",
      rating: 4.7,
      reviews: 67,
      description:
        "Stylish snapback cap with embroidered NXT Balkan logo. Adjustable fit for maximum comfort. Perfect accessory to complete your NXT Balkan look. High-quality construction ensures long-lasting wear.",
      sizes: ["One Size"],
      features: ["Embroidered logo", "Adjustable snapback", "Curved brim", "Cotton blend", "One size fits all"],
      colors: ["Black", "White", "Red"],
      inStock: true,
      isNew: true,
      isBestseller: false,
      discount: 20,
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-400/10 to-emerald-500/10",
    },
  ]

  const categories = [
    { name: "All", count: products.length },
    { name: "T-Shirts", count: products.filter((p) => p.category === "T-Shirts").length },
    { name: "Hoodies", count: products.filter((p) => p.category === "Hoodies").length },
    { name: "Limited Edition", count: products.filter((p) => p.category === "Limited Edition").length },
    { name: "Accessories", count: products.filter((p) => p.category === "Accessories").length },
  ]

  const features = [
    { icon: Truck, title: "Free Shipping", description: "On orders over €50" },
    { icon: RotateCcw, title: "Easy Returns", description: "30-day return policy" },
    { icon: Shield, title: "Secure Payment", description: "Direct contact ordering" },
    { icon: CreditCard, title: "Multiple Payment", description: "Cards, PayPal, Crypto" },
  ]

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((product) => product.category === selectedCategory)

  const handleViewProduct = (product: any) => {
    setSelectedProduct(product)
    setSelectedSize(product.sizes[0])
    setSelectedColor(product.colors[0])
  }

  const handleBuyProduct = () => {
    setShowPurchaseModal(true)
  }

  const generateWhatsAppMessage = () => {
    if (!selectedProduct) return ""
    return `Hi! I'm interested in purchasing the ${selectedProduct.name} (€${selectedProduct.price}) in size ${selectedSize} and color ${selectedColor}. Can you help me with the order?`
  }

  const generateEmailMessage = () => {
    if (!selectedProduct) return ""
    return `Subject: Order Inquiry - ${selectedProduct.name}&body=Hi,%0D%0A%0D%0AI'm interested in purchasing:%0D%0A%0D%0AProduct: ${selectedProduct.name}%0D%0APrice: €${selectedProduct.price}%0D%0ASize: ${selectedSize}%0D%0AColor: ${selectedColor}%0D%0A%0D%0ACan you help me with the order process?%0D%0A%0D%0AThank you!`
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge className="mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold px-4 py-2">
              🛍️ Official Merchandise
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
              NXT Shop
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Wear the revolution. Express your passion for Balkan music with our exclusive merchandise collection that
              supports our artists.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold hover:scale-105 transition-all duration-300"
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                Shop Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                Size Guide
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 text-center">
                  <CardContent className="p-4">
                    <feature.icon className="h-6 w-6 text-cyan-400 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-white mb-1">{feature.title}</div>
                    <div className="text-xs text-gray-400">{feature.description}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-4"
          >
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={selectedCategory === category.name ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.name)}
                className={`${
                  selectedCategory === category.name
                    ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-black hover:scale-105"
                    : "border-gray-600 text-gray-300 hover:bg-white hover:text-black"
                } transition-all duration-300 font-medium`}
              >
                {category.name}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </motion.div>

          <div className="text-center text-gray-400 text-sm">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => handleViewProduct(product)}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 h-full overflow-hidden group-hover:scale-[1.02]">
                  <CardContent className="p-0">
                    {/* Product Image */}
                    <div className="relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-t ${product.bgGradient} opacity-20`} />

                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-black transition-all duration-300"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-black transition-all duration-300"
                          >
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-2">
                        {product.isNew && (
                          <Badge className="bg-green-500 text-white font-semibold">
                            <Sparkles className="h-3 w-3 mr-1" />
                            New
                          </Badge>
                        )}
                        {product.isBestseller && (
                          <Badge className="bg-orange-500 text-white font-semibold">
                            <Crown className="h-3 w-3 mr-1" />
                            Bestseller
                          </Badge>
                        )}
                        {product.isLimited && <Badge className="bg-red-500 text-white font-semibold">Limited</Badge>}
                      </div>

                      {/* Discount badge */}
                      {product.discount && (
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold">
                            -{product.discount}%
                          </Badge>
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {product.category}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs text-gray-400">
                            {product.rating} ({product.reviews})
                          </span>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold mb-2 text-white line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300">
                        {product.name}
                      </h3>

                      {/* Colors */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs text-gray-400">Colors:</span>
                        <div className="flex gap-1">
                          {product.colors.slice(0, 3).map((color, colorIndex) => (
                            <div
                              key={colorIndex}
                              className={`w-4 h-4 rounded-full border border-gray-600 ${
                                color === "Black"
                                  ? "bg-black"
                                  : color === "White"
                                    ? "bg-white"
                                    : color === "Navy"
                                      ? "bg-blue-900"
                                      : color === "Gray"
                                        ? "bg-gray-500"
                                        : "bg-red-500"
                              }`}
                            />
                          ))}
                          {product.colors.length > 3 && (
                            <div className="text-xs text-gray-400">+{product.colors.length - 3}</div>
                          )}
                        </div>
                      </div>

                      {/* Price */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-white">€{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-400 line-through">€{product.originalPrice}</span>
                          )}
                        </div>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black hover:scale-105 transition-all duration-300"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-900/50 to-black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700 overflow-hidden">
              <CardContent className="p-8 md:p-12 text-center relative">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-500/5" />

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl mb-6">
                    <ShoppingBag className="h-8 w-8 text-black" />
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Join the NXT Family
                  </h2>

                  <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Every purchase supports our artists and helps us continue revolutionizing the Balkan music scene.
                    Wear your passion, support the movement.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold hover:scale-105 transition-all duration-300 px-8"
                    >
                      <Sparkles className="h-5 w-5 mr-2" />
                      Browse All Products
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-gray-600 text-white hover:bg-white hover:text-black transition-all duration-300 px-8"
                    >
                      Size Guide
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </div>

                  <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Truck className="h-4 w-4 text-green-400" />
                      Free Shipping €50+
                    </div>
                    <div className="flex items-center gap-2">
                      <RotateCcw className="h-4 w-4 text-blue-400" />
                      30-Day Returns
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-purple-400" />
                      Direct Contact
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-gray-900 border border-gray-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Product Details
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Product Image */}
                <div className="relative">
                  <img
                    src={selectedProduct.image || "/placeholder.svg"}
                    alt={selectedProduct.name}
                    className="w-full h-96 object-cover rounded-xl"
                  />
                  {selectedProduct.isLimited && (
                    <Badge className="absolute top-4 left-4 bg-red-500 text-white font-semibold">Limited Edition</Badge>
                  )}
                </div>

                {/* Product Info */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{selectedProduct.category}</Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">
                          {selectedProduct.rating} ({selectedProduct.reviews} reviews)
                        </span>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">{selectedProduct.name}</h3>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-bold text-white">€{selectedProduct.price}</span>
                      {selectedProduct.originalPrice && (
                        <span className="text-xl text-gray-400 line-through">€{selectedProduct.originalPrice}</span>
                      )}
                      {selectedProduct.discount && (
                        <Badge className="bg-red-500 text-white">-{selectedProduct.discount}%</Badge>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed">{selectedProduct.description}</p>

                  {/* Size Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Size</label>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.sizes.map((size: string) => (
                        <Button
                          key={size}
                          variant={selectedSize === size ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedSize(size)}
                          className={
                            selectedSize === size
                              ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-black"
                              : "border-gray-600 text-gray-300 hover:bg-white hover:text-black"
                          }
                        >
                          {size}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Color Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Color</label>
                    <div className="flex gap-3">
                      {selectedProduct.colors.map((color: string) => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`w-8 h-8 rounded-full border-2 ${
                            selectedColor === color ? "border-cyan-400" : "border-gray-600"
                          } ${
                            color === "Black"
                              ? "bg-black"
                              : color === "White"
                                ? "bg-white"
                                : color === "Navy"
                                  ? "bg-blue-900"
                                  : color === "Gray"
                                    ? "bg-gray-500"
                                    : "bg-red-500"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-1">Selected: {selectedColor}</p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Features</h4>
                    <ul className="space-y-2">
                      {selectedProduct.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300">
                          <Check className="h-4 w-4 text-green-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Buy Button */}
                  <Button
                    onClick={handleBuyProduct}
                    size="lg"
                    className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold hover:scale-105 transition-all duration-300"
                  >
                    <ShoppingBag className="h-5 w-5 mr-2" />
                    Buy Now - €{selectedProduct.price}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Purchase Modal */}
      {showPurchaseModal && selectedProduct && (
        <div className="fixed inset-0 z-60 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-gray-900 border border-gray-700 rounded-2xl max-w-md w-full"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Contact Us to Order
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowPurchaseModal(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Order Summary */}
              <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-white mb-2">Order Summary</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Product:</span>
                    <span className="text-white">{selectedProduct.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Size:</span>
                    <span className="text-white">{selectedSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Color:</span>
                    <span className="text-white">{selectedColor}</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span className="text-gray-300">Price:</span>
                    <span className="text-white">€{selectedProduct.price}</span>
                  </div>
                </div>
              </div>

              {/* Contact Options */}
              <div className="space-y-3">
                <p className="text-gray-300 text-sm mb-4">
                  Choose your preferred contact method to complete your order:
                </p>

                <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <a
                    href={`https://wa.me/YOUR_WHATSAPP_NUMBER?text=${encodeURIComponent(generateWhatsAppMessage())}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Order via WhatsApp
                  </a>
                </Button>

                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                >
                  <a href="https://instagram.com/nxt.balkan" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5 mr-2" />
                    Order via Instagram
                  </a>
                </Button>

                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <a href={`mailto:info@nxtbalkan.com?${generateEmailMessage()}`}>
                    <Mail className="h-5 w-5 mr-2" />
                    Order via Email
                  </a>
                </Button>
              </div>

              <p className="text-xs text-gray-400 mt-4 text-center">
                Our team will contact you within 24 hours to confirm your order and arrange payment & shipping.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
