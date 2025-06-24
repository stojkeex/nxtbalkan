"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Home, Info, Briefcase, Users, ShoppingBag, Mail, HelpCircle, Instagram } from "lucide-react"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "Portfolio", href: "/portfolio", icon: Users },
  { name: "Shop", href: "/shop", icon: ShoppingBag },
  { name: "Contact", href: "/contact", icon: Mail },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const pathname = usePathname()
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isHelpOpen, setIsHelpOpen] = useState(false)

  const toggleMobileMenu = () => {
    if (isAnimating) return
    setIsAnimating(true)

    if (!isOpen) {
      setScrollPosition(window.scrollY)
      document.body.style.position = "fixed"
      document.body.style.top = `-${window.scrollY}px`
      document.body.style.width = "100%"
    } else {
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
      window.scrollTo(0, scrollPosition)
    }

    setIsOpen(!isOpen)
    setTimeout(() => setIsAnimating(false), 300)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    // Reset body styles on route change
    document.body.style.position = ""
    document.body.style.top = ""
    document.body.style.width = ""
  }, [pathname])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
    }
  }, [])

  const handleLinkClick = () => {
    setIsOpen(false)
    document.body.style.position = ""
    document.body.style.top = ""
    document.body.style.width = ""
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isHelpOpen) {
        const target = event.target as Element
        if (!target.closest(".relative")) {
          setIsHelpOpen(false)
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isHelpOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md border-b border-gray-800"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24 sm:h-26 md:h-28 lg:h-30 xl:h-32">
            {/* Logo - Left Side */}
            <Link href="/" className="flex items-center space-x-2 flex-shrink-0" onClick={handleLinkClick}>
              <motion.img
                src="/nxtbalkancolored2.png"
                alt="NXT Balkan"
                className="h-12 w-auto sm:h-14 md:h-16 lg:h-18 xl:h-20"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
            </Link>

            {/* Centered Navigation - Desktop Only */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={handleLinkClick}
                    className={`relative text-sm font-medium transition-colors hover:text-white group ${
                      pathname === item.href ? "text-white" : "text-gray-300"
                    }`}
                  >
                    <span className="flex items-center space-x-2">
                      <item.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                      <span>{item.name}</span>
                    </span>
                    {pathname === item.href && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-400"
                      />
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Side - Help Button & Mobile Menu */}
            <div className="flex items-center space-x-4 flex-shrink-0">
              {/* Help Dropdown - Desktop Only */}
              <div className="relative hidden md:block">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10 p-2 w-10 h-10 rounded-full transition-all duration-300"
                  onClick={() => setIsHelpOpen(!isHelpOpen)}
                  title="Help & Support"
                >
                  <HelpCircle
                    className={`h-5 w-5 transition-transform duration-300 ${isHelpOpen ? "rotate-180" : ""}`}
                  />
                </Button>

                <AnimatePresence>
                  {isHelpOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-full mt-2 w-64 bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-2xl shadow-2xl overflow-hidden"
                    >
                      {/* Find Us Header */}
                      <div className="px-6 py-4 border-b border-gray-700">
                        <h3 className="text-lg font-medium bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                          Find Us
                        </h3>
                      </div>

                      {/* Social Media Links */}
                      <div className="py-2">
                        <a
                          href="https://instagram.com/nxt.balkan"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 px-6 py-3 text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-200"
                        >
                          <Instagram className="h-5 w-5 text-pink-400" />
                          <span>Instagram</span>
                        </a>
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 px-6 py-3 text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-200"
                        >
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                          </svg>
                          <span>TikTok</span>
                        </a>
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 px-6 py-3 text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-200"
                        >
                          <svg className="h-5 w-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                          </svg>
                          <span>Twitter</span>
                        </a>
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 px-6 py-3 text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-200"
                        >
                          <svg className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                          <span>LinkedIn</span>
                        </a>
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 px-6 py-3 text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-200"
                        >
                          <svg className="h-5 w-5 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                          </svg>
                          <span>YouTube</span>
                        </a>
                      </div>

                      {/* Bottom Section */}
                      <div className="border-t border-gray-700 py-2">
                        <Link
                          href="/terms"
                          className="flex items-center space-x-3 px-6 py-3 text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-200"
                          onClick={() => setIsHelpOpen(false)}
                        >
                          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          <span>Terms of Service</span>
                        </Link>
                        <a
                          href="#"
                          className="flex items-center space-x-3 px-6 py-3 text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-200"
                        >
                          <svg className="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                            />
                          </svg>
                          <span>Donation</span>
                        </a>
                        <a
                          href="#"
                          className="flex items-center space-x-3 px-6 py-3 text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-200"
                        >
                          <svg
                            className="h-5 w-5 text-purple-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                          <span>Community</span>
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden text-white hover:bg-white/10 p-2 w-10 h-10"
                onClick={toggleMobileMenu}
              >
                <div className="relative w-6 h-6 flex flex-col justify-center items-center">
                  <motion.span
                    className="absolute w-6 h-0.5 bg-white rounded-full"
                    animate={{
                      rotate: isOpen ? 45 : 0,
                      y: isOpen ? 0 : -6,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="absolute w-6 h-0.5 bg-white rounded-full"
                    animate={{
                      opacity: isOpen ? 0 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.span
                    className="absolute w-6 h-0.5 bg-white rounded-full"
                    animate={{
                      rotate: isOpen ? -45 : 0,
                      y: isOpen ? 0 : 6,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{
              background: "rgba(0, 0, 0, 0.95)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              touchAction: "none",
            }}
          >
            <div className="absolute inset-0 overflow-y-auto">
              <div className="flex min-h-full flex-col items-center justify-center space-y-6 px-8 py-20 relative z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="mb-8"
                >
                  <img src="/nxtbalkancolored2.png" alt="NXT Balkan" className="h-20 w-auto sm:h-24" />
                </motion.div>

                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.1 + index * 0.08,
                      duration: 0.3,
                      type: "spring",
                      stiffness: 100,
                    }}
                    className="w-full text-center"
                  >
                    <Link
                      href={item.href}
                      className={`inline-flex items-center space-x-4 text-2xl font-light py-3 px-6 rounded-full transition-all duration-300 ${
                        pathname === item.href
                          ? "bg-gradient-to-r from-cyan-500/20 to-pink-500/20 text-white border border-cyan-400/30"
                          : "text-gray-300 hover:bg-white/5 hover:text-white"
                      }`}
                      onClick={handleLinkClick}
                    >
                      <item.icon className="h-6 w-6" />
                      <span>{item.name}</span>
                    </Link>
                  </motion.div>
                ))}

                {/* Find Us Section in Mobile Menu */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 + navItems.length * 0.08,
                    duration: 0.3,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="w-full text-center"
                >
                  <div className="text-lg font-medium bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent mb-4">
                    Find Us
                  </div>

                  {/* Social Media Links */}
                  <div className="space-y-3 mb-6">
                    <a
                      href="https://instagram.com/nxt.balkan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-3 text-lg font-light py-2 px-6 rounded-full text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-300"
                    >
                      <Instagram className="h-5 w-5 text-pink-400" />
                      <span>Instagram</span>
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-3 text-lg font-light py-2 px-6 rounded-full text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-300"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                      </svg>
                      <span>TikTok</span>
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-3 text-lg font-light py-2 px-6 rounded-full text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-300"
                    >
                      <svg className="h-5 w-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                      <span>Twitter</span>
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-3 text-lg font-light py-2 px-6 rounded-full text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-300"
                    >
                      <svg className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-3 text-lg font-light py-2 px-6 rounded-full text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-300"
                    >
                      <svg className="h-5 w-5 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                      <span>YouTube</span>
                    </a>
                  </div>

                  {/* Bottom Section */}
                  <div className="space-y-3 border-t border-gray-700 pt-4">
                    <Link
                      href="/terms"
                      className="flex items-center justify-center space-x-3 text-lg font-light py-2 px-6 rounded-full text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-300"
                      onClick={handleLinkClick}
                    >
                      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <span>Terms of Service</span>
                    </Link>
                    <a
                      href="#"
                      className="flex items-center justify-center space-x-3 text-lg font-light py-2 px-6 rounded-full text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-300"
                    >
                      <svg className="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                        />
                      </svg>
                      <span>Donation</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center space-x-3 text-lg font-light py-2 px-6 rounded-full text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-300"
                    >
                      <svg className="h-5 w-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span>Community</span>
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-12 text-center text-gray-400 text-sm"
                >
                  <p>NXT Balkan - Digital Excellence</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
