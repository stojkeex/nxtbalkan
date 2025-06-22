"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Home, Info, Briefcase, Users, ShoppingBag, Mail, UserPlus } from "lucide-react"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "Artists", href: "/artists", icon: Users },
  { name: "Shop", href: "/shop", icon: ShoppingBag },
  { name: "Contact", href: "/contact", icon: Mail },
  { name: "Join Us", href: "/join-us", icon: UserPlus },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const pathname = usePathname()
  const [scrollPosition, setScrollPosition] = useState(0)

  const toggleMobileMenu = () => {
    if (isAnimating) return
    setIsAnimating(true)
    
    if (!isOpen) {
      setScrollPosition(window.scrollY)
      document.body.style.position = 'fixed'
      document.body.style.top = `-${window.scrollY}px`
      document.body.style.width = '100%'
    } else {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
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
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.width = ''
  }, [pathname])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
    }
  }, [])

  const handleLinkClick = () => {
    setIsOpen(false)
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.width = ''
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
              <motion.img
                src="/images/nxt-balkan-logo.png"
                alt="NXT Balkan"
                className="h-8 w-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
            </Link>

            <div className="hidden md:flex items-center space-x-8">
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
                    <motion.div layoutId="activeTab" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white" />
                  )}
                </Link>
              ))}
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-white hover:bg-white/10 animated-button p-2 w-10 h-10"
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
      </motion.nav>

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
              touchAction: "none" // Prepreči scroll na mobilnih
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
                  <img src="/images/nxt-balkan-logo.png" alt="NXT Balkan" className="h-16 w-auto" />
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
                      stiffness: 100
                    }}
                    className="w-full text-center"
                  >
                    <Link
                      href={item.href}
                      className={`inline-flex items-center space-x-4 text-2xl font-bold py-2 px-4 rounded-lg ${
                        pathname === item.href 
                          ? "bg-white/10 text-white" 
                          : "text-gray-300 hover:bg-white/5 hover:text-white"
                      }`}
                      onClick={handleLinkClick}
                    >
                      <item.icon className="h-6 w-6" />
                      <span>{item.name}</span>
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-12 text-center text-gray-400 text-sm"
                >
                  <p>NXT Balkan - Revolutionizing Music</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}