"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Cpu, Terminal, Cloud, Zap, Palette } from "lucide-react"
import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Globe,
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"],
    color: "text-blue-400",
    gradient: "from-blue-500 to-cyan-500",
    level: 95,
  },
  {
    title: "Backend Development",
    icon: Code,
    skills: ["Node.js", "Express.js", "Python", "Django", "RESTful APIs", "GraphQL"],
    color: "text-emerald-400",
    gradient: "from-emerald-500 to-green-500",
    level: 90,
  },
  {
    title: "Database & Storage",
    icon: Database,
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Firebase"],
    color: "text-purple-400",
    gradient: "from-purple-500 to-pink-500",
    level: 85,
  },
  {
    title: "Blockchain & Web3",
    icon: Zap,
    skills: ["Solidity", "Web3.js", "Ethereum", "Smart Contracts", "DeFi"],
    color: "text-yellow-400",
    gradient: "from-yellow-500 to-orange-500",
    level: 80,
  },
  {
    title: "AI & Machine Learning",
    icon: Cpu,
    skills: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "OpenAI API"],
    color: "text-indigo-400",
    gradient: "from-indigo-500 to-purple-500",
    level: 75,
  },
  {
    title: "DevOps & Tools",
    icon: Terminal,
    skills: ["Git", "Docker", "AWS", "Vercel", "Linux", "CI/CD"],
    color: "text-red-400",
    gradient: "from-red-500 to-pink-500",
    level: 85,
  },
  {
    title: "Design & UI/UX",
    icon: Palette,
    skills: ["Figma", "Adobe XD", "Responsive Design", "User Experience"],
    color: "text-pink-400",
    gradient: "from-pink-500 to-rose-500",
    level: 70,
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    skills: ["Google Cloud", "AWS", "Vercel", "Netlify", "MongoDB Atlas"],
    color: "text-cyan-400",
    gradient: "from-cyan-500 to-blue-500",
    level: 80,
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-0 shadow-xl bg-slate-800/70 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group overflow-hidden border border-gray-700/50">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                          {category.title}
                        </CardTitle>
                        <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${category.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`h-2 rounded-full bg-gradient-to-r ${category.gradient}`}
                          />
                        </div>
                        <span className="text-xs text-gray-400 mt-1">{category.level}% Proficiency</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge
                            variant="secondary"
                            className="text-xs hover:bg-emerald-500/20 hover:text-emerald-300 transition-colors cursor-default bg-slate-700/50 text-gray-300 border-gray-600"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
