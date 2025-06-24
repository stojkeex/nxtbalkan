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
              Pricing{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Packages</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
              Choose the plan that fits your needs and budget
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {pricingPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`border ${
                    pkg.featured ? "border-pink-500 bg-pink-900/40" : "border-gray-800 bg-gray-900/80"
                  } hover:scale-105 transition-all duration-300 shadow-lg shadow-pink-500/30`}
                >
                  <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                    <h3
                      className={`text-xl sm:text-2xl font-semibold mb-2 ${
                        pkg.featured
                          ? "text-pink-400"
                          : "text-white"
                      }`}
                    >
                      {pkg.title}
                    </h3>

                    <p className="text-gray-400 mb-4 text-sm sm:text-base flex-grow">{pkg.description}</p>

                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white leading-none">
                        {pkg.currency}
                        {pkg.price}
                      </span>
                      <span className="text-gray-400 text-sm ml-1">/ package</span>
                    </div>

                    <ul className="mb-6 space-y-2 text-gray-300 text-sm sm:text-base">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <Check className="w-4 h-4 mr-2 text-cyan-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <p className="text-gray-400 text-sm mb-4">
                      Delivery time: <span className="text-white font-semibold">{pkg.delivery}</span>
                    </p>

                    <Button
                      className={`mt-auto ${
                        pkg.featured ? "bg-pink-500 hover:bg-pink-600" : "bg-cyan-500 hover:bg-cyan-600"
                      } text-white font-medium w-full py-3 rounded-full transition-all duration-300`}
                    >
                      Choose Plan
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
              Our Process{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                Simplified
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
              Step-by-step approach to ensure your project’s success
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/80 border border-gray-800 rounded-lg p-6 flex flex-col items-center text-center group hover:border-cyan-400/50 hover:bg-gray-800 transition-all duration-300"
              >
                <div
                  className={`mb-4 w-14 h-14 rounded-full flex items-center justify-center border-2 ${step.color} border-current text-2xl font-bold select-none`}
                >
                  {step.step}
                </div>

                <step.icon className={`mb-4 ${step.color} w-10 h-10`} />

                <h3 className="text-lg font-semibold mb-2 text-white">{step.title}</h3>

                <p className="text-gray-400 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
