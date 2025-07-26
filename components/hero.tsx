"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone, Download, ArrowDown } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-emerald-400/30 to-blue-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400/30 to-pink-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-r from-blue-400/30 to-emerald-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 p-1 shadow-2xl"
          >
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-4xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
              DD
            </div>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
              Diya Dey
            </span>
          </h1>

          <div className="relative">
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
              Full-Stack Developer &
              <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                {" "}
                Blockchain Enthusiast
              </span>
            </h2>
          </div>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Crafting innovative web experiences with cutting-edge technologies. Passionate about
            <span className="text-emerald-400 font-medium"> blockchain</span>,
            <span className="text-blue-400 font-medium"> AI</span>, and creating
            <span className="text-purple-400 font-medium"> seamless user experiences</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 hover:from-emerald-400 hover:via-blue-500 hover:to-purple-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 px-8 py-3 text-lg"
          >
            <Link href="#projects">
              View My Work
              <ArrowDown className="ml-2 w-4 h-4" />
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-2 border-emerald-400/50 hover:border-emerald-400 hover:bg-emerald-400/10 text-emerald-400 hover:text-emerald-300 transition-all duration-300 transform hover:scale-105 bg-transparent backdrop-blur-sm px-8 py-3 text-lg"
          >
            <Link href="#contact">
              <Download className="mr-2 w-4 h-4" />
              Download CV
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex justify-center gap-6"
        >
          {[
            { icon: Phone, href: "tel:+919647844040", color: "hover:text-emerald-400", bg: "hover:bg-emerald-400/20" },
            {
              icon: Mail,
              href: "mailto:diyadey310804@gmail.com",
              color: "hover:text-blue-400",
              bg: "hover:bg-blue-400/20",
            },
            { icon: Linkedin, href: "#", color: "hover:text-purple-400", bg: "hover:bg-purple-400/20" },
            { icon: Github, href: "#", color: "hover:text-yellow-400", bg: "hover:bg-yellow-400/20" },
          ].map((social, index) => (
            <motion.div key={index} whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
              <Link
                href={social.href}
                className={`text-gray-400 ${social.color} ${social.bg} transition-all duration-300 p-3 rounded-full hover:shadow-lg backdrop-blur-sm border border-gray-700/50 hover:border-gray-600`}
              >
                <social.icon className="w-6 h-6" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            className="w-1 h-3 bg-emerald-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
