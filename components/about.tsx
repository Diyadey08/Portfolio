"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Code, Brain, Award, Target, Zap } from "lucide-react"
import { motion } from "framer-motion"

const stats = [
  { label: "Years of Experience", value: "3+", icon: Target },
  { label: "Projects Completed", value: "15+", icon: Code },
  { label: "Technologies Mastered", value: "20+", icon: Zap },
  { label: "CGPA", value: "9.35", icon: Award },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">About Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/20 shadow-xl"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-purple-600" />
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Passionate Developer & Innovator</h3>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                I'm a full-stack web developer with expertise in modern JavaScript frameworks, blockchain technology,
                and machine learning. Currently pursuing B.Tech in Computer Science with specialization in IoT, Cyber
                Security, and Blockchain Technology.
              </p>
              <p>
                My passion lies in creating innovative solutions that bridge the gap between traditional web development
                and emerging technologies like blockchain and AI. I believe in writing clean, efficient code that not
                only works but also scales.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
                sharing knowledge with the developer community.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {[
              {
                icon: GraduationCap,
                title: "Education",
                subtitle: "B.Tech CSE - Heritage Institute of Technology",
                detail: "YGPA: 9.35 | Expected 2027",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: Code,
                title: "Specialization",
                subtitle: "Full-Stack Development & Blockchain",
                detail: "MERN Stack, Next.js, Solidity",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                icon: Brain,
                title: "AI & Machine Learning",
                subtitle: "Python, TensorFlow, Data Science",
                detail: "Scikit-learn, Pandas, NumPy",
                gradient: "from-purple-500 to-pink-500",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="overflow-hidden border-0 shadow-xl bg-white/70 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${item.gradient} text-white`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h4>
                        <p className="text-gray-700 font-medium mb-1">{item.subtitle}</p>
                        <p className="text-sm text-gray-500">{item.detail}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
