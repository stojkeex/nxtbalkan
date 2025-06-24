"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Globe, TrendingUp, Zap, Target, Check, Star, ArrowRight, Sparkles, Crown, Palette } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Users,
      title: "Social Media Management",
      description: "Strategic social media presence that drives engagement and builds lasting connections",
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
      description: "Data-driven campaigns that deliver measurable results and maximize ROI",
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
      description: "Comprehensive brand development that resonates with your target audience",
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
      description: "Modern, responsive websites that convert visitors into customers",
      features: [
        "Custom website development",
        "E-commerce solutions",
        "Mobile optimization",
        "Performance optimization",
      ],
    },
  ]

  const pricingPackages = [
    {
      title: "Starter",
      price: "999",
      currency: "€",
      description: "Perfect for small businesses taking their first digital step",
      features: [
        "Social media setup (3 platforms)",
        "Basic brand guidelines",
        "Landing page design",
        "Monthly performance report",
        "Email support",
      ],
      delivery: "2-3 weeks",
      featured: false,
    },
    {
      title: "Professional",
      price: "2,499",
      currency: "€",
      description: "For growing businesses ready to scale their digital presence",
      features: [
        "Complete digital strategy",
        "Full brand identity package",
        "Professional website",
        "3-month marketing campaign",
        "Weekly strategy calls",
        "Priority support",
        "Performance optimization",
      ],
      delivery: "4-6 weeks",
      featured: true,
    },
    {
      title: "Enterprise",
      price: "4,999",
      currency: "€",
      description: "Comprehensive solution for established businesses seeking market leadership",
      features: [
        "Multi-platform digital ecosystem",
        "Advanced analytics setup",
        "Custom integrations",
        "6-month growth strategy",
        "Dedicated account manager",
        "24/7 priority support",
        "Quarterly strategy reviews",
      ],
      delivery: "6-8 weeks",
      featured: false,
    },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "Understanding your business goals, target audience, and market position",
      icon: Target,
      color: "text-cyan-400",
    },
    {
      step: "02",
      title: "Strategy",
      description: "Developing a comprehensive digital roadmap tailored to your objectives",
      icon: TrendingUp,
      color: "text-purple-400",
    },
    {
      step: "03",
      title: "Execution",
      description: "Implementing solutions with precision and attention to detail",
      icon: Zap,
      color: "text-pink-400",
    },
    {
      step: "04",
      title: "Optimization",
      description: "Continuous monitoring and improvement for maximum performance",
      icon: Sparkles,
      color: "text-orange-400",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 bg-gradient-to-br from-cyan-500/5 via-black to-pink-500/5">
        <div className="max-w-7xl mx-auto text-center space-y-6 sm:space-y-8 lg:space-y-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="mb-6 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-medium px-4 py-2 text-sm">
              Our Services
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-6 px-4">
              <span className="text-white">Elevate Your</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent font-medium">
                Digital Presence
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 px-4">
              From strategy to execution, we provide comprehensive digital solutions that transform your brand and drive
              meaningful results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400 text-white font-medium px-8 py-4 text-lg rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/20"
              >
                <Sparkles className="h-5 w-5 mr-2" />
                Get Started Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 text-lg rounded-full"
              >
                View Our Work
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 text-white">
              What We{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Deliver</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
              Professional digital services designed to accelerate your business growth
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/80 border border-gray-800 hover:border-cyan-400/30 transition-all duration-300 h-full group hover:scale-105">
                  <CardContent className="p-6 sm:p-8">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-cyan-500/20 to-pink-500/20 flex items-center justify-center mb-4 sm:mb-6 group-hover:from-cyan-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                      <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-cyan-400" />
                    </div>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-3 sm:mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                      {service.description}
                    </p>

                    <ul className="space-y-2 sm:space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm sm:text-base text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 bg-gradient-to-r from-cyan-500/5 to-pink-500/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 text-white">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Package</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
              Flexible solutions designed for every stage of your business journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {pricingPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${pkg.featured ? "md:scale-105" : ""}`}
              >
                {pkg.featured && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-2xl blur opacity-30" />
                )}

                <Card
                  className={`relative bg-gray-900/80 border-gray-800 h-full ${
                    pkg.featured ? "border-cyan-400/50" : ""
                  }`}
                >
                  <CardContent className="p-6 sm:p-8">
                    {pkg.featured && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-medium px-3 py-1">
                          <Crown className="h-3 w-3 mr-1" />
                          Most Popular
                        </Badge>
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <h3
                        className={`text-xl sm:text-2xl font-medium mb-2 ${
                          pkg.featured
                            ? "bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent"
                            : "text-white"
                        }`}
                      >
                        {pkg.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>

                      <div className="flex items-baseline justify-center mb-2">
                        <span className="text-sm text-gray-400">{pkg.currency}</span>
                        <span
                          className={`text-3xl sm:text-4xl font-light ml-1 ${
                            pkg.featured
                              ? "bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent"
                              : "text-white"
                          }`}
                        >
                          {pkg.price}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">Delivery: {pkg.delivery}</p>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full ${
                        pkg.featured
                          ? "bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400 text-white hover:scale-105"
                          : "bg-white text-black hover:bg-gray-200"
                      } transition-all duration-300 font-medium rounded-full`}
                    >
                      {pkg.featured && <Zap className="h-4 w-4 mr-2" />}
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 text-white">
              Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
              A proven 4-step approach to transform your digital vision into reality
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-gray-900/80 border border-gray-800 rounded-full flex items-center justify-center group-hover:border-cyan-400/30 transition-all duration-300 group-hover:scale-110">
                    <step.icon className={`h-6 w-6 sm:h-7 sm:w-7 ${step.color}`} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-full flex items-center justify-center text-xs font-medium">
                    {step.step}
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-medium mb-2 sm:mb-3 text-white group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{step.description}</p>
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
                  <Star className="h-8 w-8 sm:h-10 sm:w-10 text-cyan-400" />
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-white">
                  Ready to{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                    Transform Your Business?
                  </span>
                </h2>

                <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
                  Join hundreds of businesses who have accelerated their growth with NXT Balkan. Let's create something
                  extraordinary together.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400 text-white font-medium px-8 py-4 text-lg rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/20"
                  >
                    <Sparkles className="h-5 w-5 mr-2" />
                    Start Your Journey
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-600 text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 text-lg rounded-full"
                  >
                    Schedule Consultation
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </div>

                <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400" />
                    Free Consultation
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400" />
                    Professional Quality
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400" />
                    Fast Delivery
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
