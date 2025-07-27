"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone, Download, ArrowDown } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Orb from "@/components/ui/orb"
import DynamicProfilePicture from "./ui/dynamic-profile-picture"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Mystical Orbs */}
      <div className="absolute top-20 right-20 w-64 h-64 opacity-60">
        <Orb hue={120} hoverIntensity={0.3} />
      </div>
      <div className="absolute bottom-20 left-20 w-48 h-48 opacity-40">
        <Orb hue={240} hoverIntensity={0.4} rotateOnHover={false} />
      </div>
      <div className="absolute top-1/2 right-1/4 w-32 h-32 opacity-30">
        <Orb hue={300} hoverIntensity={0.2} forceHoverState={true} />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-emerald-400/20 to-blue-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-emerald-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Mystical particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>

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
            className="w-32 h-32 mx-auto mb-8"
          >
            <DynamicProfilePicture />
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent relative">
              Diya Dey
              {/* Mystical shimmer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                animate={{
                  x: [-200, 200],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 4,
                }}
              />
            </span>
          </motion.h1>

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
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="lg"
              className="relative bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 hover:from-emerald-400 hover:via-blue-500 hover:to-purple-500 text-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 px-8 py-3 text-lg overflow-hidden group"
            >
              <Link href="#projects">
                <span className="relative z-10 flex items-center">
                  View My Work
                  <ArrowDown className="ml-2 w-4 h-4" />
                </span>

                {/* Mystical energy effect */}
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
              </Link>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="relative border-2 border-emerald-400/50 hover:border-emerald-400 hover:bg-emerald-400/10 text-emerald-400 hover:text-emerald-300 transition-all duration-300 bg-transparent backdrop-blur-sm px-8 py-3 text-lg overflow-hidden group"
            >
              <Link href="#contact">
                <span className="relative z-10 flex items-center">
                  <Download className="mr-2 w-4 h-4" />
                  Download CV
                </span>

                {/* Mystical border glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex justify-center gap-6"
        >
          {[
            { 
              icon: Phone, 
              href: `tel:${process.env.NEXT_PUBLIC_PHONE || "+919647844040"}`, 
              color: "hover:text-emerald-400", 
              bg: "hover:bg-emerald-400/20" 
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
            <motion.div key={index} whileHover={{ scale: 1.2, rotate: 5, y: -2 }} whileTap={{ scale: 0.9 }}>
              <Link
                href={social.href}
                target={social.href.startsWith('http') ? "_blank" : undefined}
                rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className={`relative text-gray-400 ${social.color} ${social.bg} transition-all duration-300 p-3 rounded-full hover:shadow-lg backdrop-blur-sm border border-gray-700/50 hover:border-gray-600 group overflow-hidden`}
              >
                <social.icon className="w-6 h-6 relative z-10" />

                {/* Mystical pulse effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-blue-400/20 to-purple-400/20 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="w-6 h-10 border-2 border-emerald-400/60 rounded-full flex justify-center relative overflow-hidden"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            className="w-1 h-3 bg-emerald-400 rounded-full mt-2 shadow-lg"
          />

          {/* Mystical glow */}
          <div className="absolute inset-0 bg-emerald-400/20 rounded-full animate-pulse" />
        </motion.div>
      </motion.div>
    </section>
  )
}
