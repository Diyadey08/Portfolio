"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Phone, Heart, Code, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
                  Diya Dey
                </h3>
              </div>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed max-w-md">
                Full-Stack Developer & Blockchain Enthusiast passionate about creating innovative web solutions and
                exploring emerging technologies that shape the future.
              </p>
              <div className="flex gap-4">
                {[
                  {
                    icon: Phone,
                    href: `tel:${process.env.NEXT_PUBLIC_PHONE || "+919647844040"}`,
                    color: "hover:text-emerald-400",
                    bg: "hover:bg-emerald-400/20",
                  },
                  {
                    icon: Mail,
                    href: `mailto:${process.env.NEXT_PUBLIC_EMAIL || "diyadey310804@gmail.com"}`,
                    color: "hover:text-blue-400",
                    bg: "hover:bg-blue-400/20",
                  },
                  { 
                    icon: Linkedin, 
                    href: process.env.NEXT_PUBLIC_LINKEDIN_URL || "#", 
                    color: "hover:text-purple-400", 
                    bg: "hover:bg-purple-400/20" 
                  },
                  { 
                    icon: Github, 
                    href: process.env.NEXT_PUBLIC_GITHUB_URL || "#", 
                    color: "hover:text-yellow-400", 
                    bg: "hover:bg-yellow-400/20" 
                  },
                ].map((social, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.2, y: -2 }} whileTap={{ scale: 0.9 }}>
                    <Link
                      href={social.href}
                      target={social.href.startsWith('http') ? "_blank" : undefined}
                      rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      className={`text-gray-400 ${social.color} ${social.bg} transition-all duration-300 p-3 rounded-full border border-gray-700/50 hover:border-gray-600`}
                    >
                      <social.icon className="w-6 h-6" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { href: "#about", label: "About" },
                  { href: "#experience", label: "Experience" },
                  { href: "#projects", label: "Projects" },
                  { href: "#skills", label: "Skills" },
                  { href: "#contact", label: "Contact" },
                ].map((link, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6 text-white">Technologies</h4>
              <ul className="space-y-3 text-gray-400">
                {[
                  "React & Next.js",
                  "Node.js & Express",
                  "MongoDB & MySQL",
                  "Blockchain & Solidity",
                  "Python & Machine Learning",
                  "TypeScript & JavaScript",
                ].map((tech, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 hover:text-emerald-400 transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 rounded-full"></div>
                    {tech}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-gray-400 flex items-center gap-2"
              >
                © 2024 Diya Dey. Made with
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                using Next.js & Tailwind CSS
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Button
                  onClick={scrollToTop}
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-400 hover:text-white hover:border-emerald-400 hover:bg-emerald-400/10 transition-all duration-300 bg-transparent"
                >
                  <ArrowUp className="w-4 h-4 mr-2" />
                  Back to Top
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
