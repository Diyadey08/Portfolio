"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

const experiences = [
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
    gradient: "from-blue-500 to-cyan-500",
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
    gradient: "from-green-500 to-emerald-500",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50 relative">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              <Card className="overflow-hidden border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                          <div className="flex items-center gap-4 text-gray-600 mb-3">
                            <span className="font-semibold text-lg">{exp.company}</span>
                            <Badge
                              variant="secondary"
                              className={`bg-gradient-to-r ${exp.gradient} text-white border-0`}
                            >
                              {exp.type}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
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
                            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                          >
                            <ExternalLink className="w-5 h-5 text-gray-600" />
                          </motion.a>
                        )}
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs hover:bg-purple-50 hover:border-purple-200 transition-colors"
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
