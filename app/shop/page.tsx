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
      name: "NXT Balkan Premium T-Shirt",
      price: 29.99,
      originalPrice: 39.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "Apparel",
      rating: 4.9,
      reviews: 156,
      description:
        "Premium quality t-shirt featuring the iconic NXT Balkan logo with modern design elements. Made from 100% organic cotton for maximum comfort and durability. Perfect for showcasing your connection to digital excellence and innovation.",
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      features: ["100% Organic Cotton", "Pre-shrunk fabric", "Reinforced seams", "Machine washable", "Unisex fit"],
      colors: ["Black", "White", "Navy"],
      inStock: true,
      isNew: false,
      isBestseller: true,
      discount: 25,
    },
    {
      id: 2,
      name: "NXT Balkan Premium Hoodie",
      price: 59.99,
      originalPrice: 79.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "Apparel",
      rating: 4.8,
      reviews: 89,
      description:
        "Cozy premium hoodie with the signature NXT Balkan design. Perfect for casual wear or professional events. Features a spacious front pocket and adjustable drawstring hood. Made with high-quality cotton blend for ultimate comfort.",
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
    },
    {
      id: 3,
      name: "NXT Balkan Limited Edition Cap",
      price: 24.99,
      originalPrice: 34.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "Accessories",
      rating: 4.7,
      reviews: 67,
      description:
        "Stylish cap with embroidered NXT Balkan logo. Adjustable fit for maximum comfort. Perfect accessory to complete your professional look. High-quality construction ensures long-lasting wear.",
      sizes: ["One Size"],
      features: ["Embroidered logo", "Adjustable strap", "Curved brim", "Cotton blend", "One size fits all"],
      colors: ["Black", "White", "Navy"],
      inStock: true,
      isNew: false,
      isBestseller: false,
      isLimited: true,
      discount: 29,
    },
    {
      id: 4,
      name: "NXT Balkan Laptop Sleeve",
      price: 39.99,
      originalPrice: 49.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "Tech",
      rating: 4.9,
      reviews: 124,
      description:
        "Premium laptop sleeve with NXT Balkan branding. Padded interior protects your device while showcasing your professional style. Perfect for business meetings, conferences, or daily use.",
      sizes: ["13 inch", "15 inch", "17 inch"],
      features: ["Padded protection", "Water-resistant", "Zipper closure", "Slim profile", "Premium materials"],
      colors: ["Black", "Gray"],
      inStock: true,
      isNew: true,
      isBestseller: true,
      discount: 20,
    },
  ]

  const categories = [
    { name: "All", count: products.length },
    { name: "Apparel", count: products.filter((p) => p.category === "Apparel").length },
    { name: "Accessories", count: products.filter((p) => p.category === "Accessories").length },
    { name: "Tech", count: products.filter((p) => p.category === "Tech").length },
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
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 bg-gradient-to-br from-cyan-500/5 via-black to-pink-500/5">
        <div className="max-w-7xl mx-auto text-center space-y-6 sm:space-y-8 lg:space-y-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="mb-6 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-medium px-4 py-2 text-sm">
              Official Store
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-6 px-4">
              <span className="text-white">NXT Balkan</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent font-medium">
                Store
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 px-4">
              Discover our exclusive collection of premium merchandise that represents digital excellence and
              innovation. Wear your passion for quality and style.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400 text-white font-medium px-8 py-4 text-lg rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/20"
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                Shop Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 text-lg rounded-full"
              >
                Size Guide
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-cyan-500/5 to-pink-500/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-pink-500/20 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-400" />
                </div>
                <div className="text-sm sm:text-base font-medium text-white mb-1">{feature.title}</div>
                <div className="text-xs sm:text-sm text-gray-400">{feature.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 bg-black">
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
                    ? "bg-gradient-to-r from-cyan-500 to-pink-500 text-white hover:scale-105"
                    : "border-gray-600 text-gray-300 hover:bg-white hover:text-black"
                } transition-all duration-300 font-medium rounded-full`}
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
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
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
                <Card className="bg-gray-900/80 border border-gray-800 hover:border-cyan-400/30 transition-all duration-300 h-full overflow-hidden group-hover:scale-105">
                  <CardContent className="p-0">
                    {/* Product Image */}
                    <div className="relative overflow-hidden">
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
                            className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-black transition-all duration-300 rounded-full"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-black transition-all duration-300 rounded-full"
                          >
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-2">
                        {product.isNew && (
                          <Badge className="bg-green-500 text-white font-medium">
                            <Sparkles className="h-3 w-3 mr-1" />
                            New
                          </Badge>
                        )}
                        {product.isBestseller && (
                          <Badge className="bg-orange-500 text-white font-medium">
                            <Crown className="h-3 w-3 mr-1" />
                            Bestseller
                          </Badge>
                        )}
                        {product.isLimited && <Badge className="bg-red-500 text-white font-medium">Limited</Badge>}
                      </div>

                      {/* Discount badge */}
                      {product.discount && (
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-medium">
                            -{product.discount}%
                          </Badge>
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="p-4 sm:p-6">
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

                      <h3 className="text-lg font-medium mb-2 text-white line-clamp-2 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
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
                          <span className="text-lg font-medium text-white">€{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-400 line-through">€{product.originalPrice}</span>
                          )}
                        </div>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400 text-white hover:scale-105 transition-all duration-300 rounded-full"
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
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 bg-gradient-to-r from-cyan-500/5 to-pink-500/5">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900/80 border border-gray-800">
              <CardContent className="p-8 sm:p-12 lg:p-16">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8 rounded-full bg-gradient-to-r from-cyan-500/20 to-pink-500/20 flex items-center justify-center">
                  <ShoppingBag className="h-8 w-8 sm:h-10 sm:w-10 text-cyan-400" />
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-white">
                  Join the{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                    NXT Family
                  </span>
                </h2>

                <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
                  Every purchase supports our mission of digital excellence and innovation. Wear your passion, showcase
                  your style, and be part of the movement.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400 text-white font-medium px-8 py-4 text-lg rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/20"
                  >
                    <Sparkles className="h-5 w-5 mr-2" />
                    Browse All Products
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-600 text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 text-lg rounded-full"
                  >
                    Size Guide
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </div>

                <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-gray-400">
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
                    Secure Ordering
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
                <h2 className="text-2xl font-medium bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
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
                    <Badge className="absolute top-4 left-4 bg-red-500 text-white font-medium">Limited Edition</Badge>
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
                    <h3 className="text-3xl font-medium text-white mb-2">{selectedProduct.name}</h3>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-light text-white">€{selectedProduct.price}</span>
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
                              ? "bg-gradient-to-r from-cyan-500 to-pink-500 text-white"
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
                    <h4 className="text-lg font-medium text-white mb-3">Features</h4>
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
                    className="w-full bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400 text-white font-medium hover:scale-105 transition-all duration-300 rounded-full"
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
                <h2 className="text-xl font-medium bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
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
                <h3 className="font-medium text-white mb-2">Order Summary</h3>
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
                  <div className="flex justify-between font-medium">
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

                <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full">
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
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full"
                >
                  <a href="https://instagram.com/nxt.balkan" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5 mr-2" />
                    Order via Instagram
                  </a>
                </Button>

                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full">
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
