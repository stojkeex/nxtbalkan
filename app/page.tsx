"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Users, TrendingUp, Star, Globe, Activity, Infinity, ShieldCheck, LayoutDashboard, Layers, Flame, Lightbulb, Rocket } from "lucide-react";

export default function HomePage() {
  const services = [
    {
      icon: Users,
      title: "Community Growth",
      description:
        "Tailored strategies to build, engage and scale active digital communities.",
    },
    {
      icon: TrendingUp,
      title: "Performance Marketing",
      description:
        "ROI-focused marketing funnels that convert browsers into brand advocates.",
    },
    {
      icon: Zap,
      title: "Creative Direction",
      description:
        "Innovative campaigns with high-end visuals, storytelling and motion design.",
    },
    {
      icon: Globe,
      title: "Global Brand Strategy",
      description:
        "Position your brand on the international stage with targeted messaging.",
    },
    {
      icon: Activity,
      title: "Data Intelligence",
      description:
        "Actionable insights and analytics that drive informed creative decisions.",
    },
    {
      icon: LayoutDashboard,
      title: "UI/UX Design",
      description:
        "Visually captivating and intuitive user experiences across all platforms.",
    },
    {
      icon: ShieldCheck,
      title: "Security & Trust",
      description:
        "Top-tier digital protection and seamless compliance frameworks.",
    },
    {
      icon: Rocket,
      title: "Startup Acceleration",
      description:
        "Go from idea to MVP and scale fast with our agile build & launch model.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 bg-gradient-to-tr from-[#101010] via-black to-[#090909] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-7xl mx-auto w-full text-center space-y-8"
        >
          <motion.img
            src="/nxtbalkancolored2.png"
            alt="NXT Balkan Logo"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="mx-auto w-64 sm:w-80 md:w-96 lg:w-[450px] drop-shadow-[0_0_30px_rgba(0,255,255,0.1)]"
          />
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.6, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight tracking-wide"
          >
            Next-Gen <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">Digital Leadership</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.9, ease: "easeOut" }}
            className="text-gray-300 max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl"
          >
            We transform businesses into cutting-edge digital powerhouses that thrive on innovation, performance, and connection.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.2, ease: "easeOut" }}
          >
            <Button className="bg-black/30 backdrop-blur-xl border border-white/10 hover:border-cyan-400/40 text-white font-medium px-10 py-5 rounded-full text-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 animate-pulse">
              Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 sm:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light">
              Premium <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">Services</span>
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl mt-4">
              Built for visionary brands shaping the future.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-lg border border-white/10 hover:border-cyan-400/30 transition-all duration-300 rounded-3xl h-full shadow-xl">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-cyan-500/20 to-pink-500/20 flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-base">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Motion Divider */}
      <motion.div
        className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.5 }}
      />

      {/* New Section: Innovation */}
      <section className="py-28 px-6 sm:px-12 bg-black">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto text-center"
        >
          <Flame className="w-12 h-12 text-pink-500 mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
            We <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-cyan-400 font-medium">Reimagine</span> What's Possible
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl">
            Our mission is simple: create stunning, scalable, and strategic digital ecosystems.
          </p>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-28 px-6 sm:px-12 bg-black text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl shadow-lg">
            <CardContent className="px-10 py-14">
              <div className="mb-6">
                <Star className="w-10 h-10 mx-auto text-cyan-400 animate-spin-slow" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
                Build Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 font-medium">Digital Legacy</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                We merge strategy, design, and technology into unforgettable digital experiences.
              </p>
              <Button className="bg-black/30 backdrop-blur-xl border border-white/10 hover:border-pink-400/40 text-white font-medium px-10 py-5 rounded-full text-lg shadow-lg hover:shadow-pink-500/20 animate-bounce">
                Let’s Talk <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-white/10 bg-black">
        <p className="text-gray-500 text-sm">© 2025 NXT Balkan — Digital Futures Engineered.</p>
      </footer>
    </div>
  );
}
