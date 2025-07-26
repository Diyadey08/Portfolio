"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

const experiences = [
  {
    title: "Web Development Intern",
    company: "Kalakaar",
    period: "July 2025 - Present",
    location: "Remote",
    type: "Internship",
    description:
      "Currently working as a web development intern at Kalakaar, an educational platform for creative students. Contributing to the development of features for art and design workshops, crash courses, and skill development programs that help students grow their careers in design.",
    technologies: ["React.js", "Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Express.js"],
    link: "#",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Web Development Intern",
    company: "Zidio Development",
    period: "May 2025 - June 2025",
    location: "Remote",
    type: "Internship",
    description:
      "Completed a comprehensive web development internship focusing on modern web technologies and best practices. Gained hands-on experience in full-stack development, working on real-world projects and collaborating with development teams.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "Git"],
    link: "#",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    title: "AI Agent Framework Developer",
    company: "Phoenix Project",
    period: "2024 - Present",
    location: "Remote",
    type: "Project",
    description:
      "Developed a modular AI agent framework enabling developers to build, test, and run intelligent agents with real-world tool access. Implemented dynamic tool execution, selective activation, and onChain deployment as NFTs.",
    technologies: ["Next.js", "Vercel AI SDK", "TypeScript", "Solidity", "OAuth"],
    link: "https://agentix2-git-main-santu8597s-projects.vercel.app",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Full-Stack Developer",
    company: "FundRise Platform",
    period: "2024",
    location: "Remote",
    type: "Project",
    description:
      "Built a modern crowdfunding platform enabling users to create campaigns and reach funding goals through community support. Implemented secure wallet integration and transparent fund management.",
    technologies: ["Next.js", "React", "Blockchain", "Web3", "Tailwind CSS"],
    link: "https://fundrise-tan.vercel.app/",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    title: "MERN Stack Developer",
    company: "IgnisDine & Shopify Projects",
    period: "2023 - 2024",
    location: "Kolkata, India",
    type: "Freelance",
    description:
      "Developed multiple full-stack applications including a smart table booking system and a modern e-commerce platform. Focused on creating intuitive user experiences with real-time functionality.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux Toolkit"],
    gradient: "from-orange-500 to-red-500",
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative"
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My journey in building innovative solutions and gaining valuable experience
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-0 shadow-xl bg-slate-800/70 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group border border-gray-700/50">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                          <div className="flex items-center gap-4 text-gray-300 mb-3">
                            <span className="font-semibold text-lg">{exp.company}</span>
                            <Badge
                              variant="secondary"
                              className={`bg-gradient-to-r ${exp.gradient} text-white border-0 shadow-lg`}
                            >
                              {exp.type}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                        {exp.link && (
                          <motion.a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 rounded-full bg-slate-700/50 hover:bg-slate-600/50 transition-colors border border-gray-600/50"
                          >
                            <ExternalLink className="w-5 h-5 text-emerald-400" />
                          </motion.a>
                        )}
                      </div>

                      <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs hover:bg-emerald-500/10 hover:border-emerald-400/50 transition-colors border-gray-600 text-gray-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
