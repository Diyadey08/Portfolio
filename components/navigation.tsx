"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Code } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import TrueFocus from "./ui/true-focus"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Detect active section
      const sections = ["hero", "about", "experience", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section === "hero" ? "" : section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section === "hero" ? "" : section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#about", label: "About", id: "about" },
    { href: "#experience", label: "Experience", id: "experience" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#skills", label: "Skills", id: "skills" },
    { href: "#contact", label: "Contact", id: "contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-slate-950/95 backdrop-blur-xl shadow-2xl border-b border-emerald-500/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg relative overflow-hidden group-hover:shadow-2xl transition-all duration-300">
                <Code className="w-6 h-6 text-white z-10" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-400/30 via-blue-500/30 to-purple-500/30"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />
              </div>

              {/* TrueFocus name shimmer effect */}
<div className="relative inline-block">
  <TrueFocus
    sentence="Diya Dey"
    manualMode={false}
    blurAmount={3}
    borderColor="#fbbf24"
    glowColor="rgba(251, 191, 36, 0.8)"
    animationDuration={0.4}
    pauseBetweenAnimations={2}
  />

  {/* Subtle shimmer overlay around the text */}
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent -skew-x-12 pointer-events-none rounded-full"
    animate={{ x: [-25, 25] }}
    transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
  />
</div>

            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`relative px-6 py-3 text-lg font-medium transition-all duration-300 rounded-xl group ${
                    activeSection === item.id
                      ? "text-yellow-300 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 border border-emerald-400/30"
                      : "text-yellow-300 hover:text-yellow-400"
                  }`}
                >
                  {item.label}

                  {/* Mystical glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-blue-400/10 to-purple-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                    whileHover={{ scale: 1.05 }}
                  />

                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 rounded-xl border border-emerald-400/30 -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  {/* Underline effect */}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 group-hover:w-full transition-all duration-500"></span>

                  {/* Mystical particles */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-emerald-400 rounded-full"
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${10 + i * 20}%`,
                        }}
                        animate={{
                          y: [-2, -8, -2],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
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
                className="relative bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 hover:from-emerald-400 hover:via-blue-500 hover:to-purple-500 text-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 px-8 py-3 text-lg font-semibold overflow-hidden group"
              >
                <Link href="#contact">
                  <span className="relative z-10">Hire Me</span>

                  {/* Mystical shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    animate={{
                      x: [-100, 200],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 3,
                    }}
                  />

                  {/* Pulsing glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-blue-500/20 to-purple-500/20 animate-pulse" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Navigation Toggle */}
          <motion.button
            className="lg:hidden p-2 rounded-lg hover:bg-slate-800/50 transition-colors text-yellow-300 relative overflow-hidden group"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
              className="lg:hidden bg-slate-950/98 backdrop-blur-xl border-t border-emerald-500/20 overflow-hidden"
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
                      className={`block py-3 px-4 text-yellow-300 hover:text-yellow-400 hover:bg-gradient-to-r hover:from-emerald-500/10 hover:via-blue-500/10 hover:to-purple-500/10 rounded-lg transition-all duration-300 font-medium relative group ${
                        activeSection === item.id
                          ? "bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 border border-emerald-400/30"
                          : ""
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 via-blue-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
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
                    className="w-full bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 hover:from-emerald-400 hover:via-blue-500 hover:to-purple-500 text-white shadow-lg relative overflow-hidden group"
                  >
                    <Link href="#contact" onClick={() => setIsOpen(false)}>
                      <span className="relative z-10">Hire Me</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-blue-500/20 to-purple-500/20 animate-pulse" />
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
