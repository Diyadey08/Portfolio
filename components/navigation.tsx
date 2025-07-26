"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Code } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-emerald-500/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
                Diya Dey
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-yellow-300 hover:text-yellow-400 transition-all duration-300 font-medium relative group text-lg"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                    whileHover={{ scale: 1.1 }}
                  />
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                className="bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 hover:from-emerald-400 hover:via-blue-500 hover:to-purple-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 px-6 py-2 text-lg font-semibold"
              >
                <Link href="#contact">Hire Me</Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Navigation Toggle */}
          <motion.button
            className="lg:hidden p-2 rounded-lg hover:bg-slate-800/50 transition-colors text-yellow-300"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-slate-900/98 backdrop-blur-md border-t border-emerald-500/20 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block py-3 px-4 text-yellow-300 hover:text-yellow-400 hover:bg-gradient-to-r hover:from-emerald-500/10 hover:via-blue-500/10 hover:to-purple-500/10 rounded-lg transition-all duration-300 font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="pt-4"
                >
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 hover:from-emerald-400 hover:via-blue-500 hover:to-purple-500 text-white shadow-lg"
                  >
                    <Link href="#contact" onClick={() => setIsOpen(false)}>
                      Hire Me
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
