"use client"

import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, ExternalLink, Briefcase, GraduationCap, Code2 } from "lucide-react"
import { motion } from "framer-motion"
import { Timeline } from "@/components/ui/timeline"
import { RotatingImageGallery } from "@/components/ui/rotating-image-gallery"
import { useState, useEffect } from "react"

export default function Experience() {
  const [experienceImages, setExperienceImages] = useState<any>(null)

  useEffect(() => {
    fetch('/experience-images.json')
      .then(response => response.json())
      .then(data => setExperienceImages(data.experienceImages))
      .catch(error => console.error('Error loading experience images:', error))
  }, [])
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <div className="mb-8">
            <div className="flex items-start gap-4 mb-6 p-6 rounded-2xl bg-slate-800/70 backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
              <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg">
                <Briefcase className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Web Development Intern</h3>
                <div className="flex items-center gap-4 text-gray-300 mb-3">
                  <span className="font-semibold text-lg">Kalakaar</span>
                  <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 shadow-lg">
                    Current
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    July 2025 - Present
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Remote
                  </div>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Currently working as a web development intern at Kalakaar, an educational platform for creative
                  students. Contributing to the development of features for art and design workshops, crash courses, and
                  skill development programs.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React.js", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"].map((tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-xs hover:bg-emerald-500/10 hover:border-emerald-400/50 transition-colors border-gray-600 text-gray-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-6 p-6 rounded-2xl bg-slate-800/70 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Web Development Intern</h3>
                <div className="flex items-center gap-4 text-gray-300 mb-3">
                  <span className="font-semibold text-lg">Zidio Development</span>
                  <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-0 shadow-lg">
                    Completed
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    May 2025 - June 2025
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Remote
                  </div>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Completed a comprehensive web development internship focusing on modern web technologies and best
                  practices. Gained hands-on experience in full-stack development and collaborated with development
                  teams.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "Git"].map((tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-xs hover:bg-blue-500/10 hover:border-blue-400/50 transition-colors border-gray-600 text-gray-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <RotatingImageGallery
              images={experienceImages?.kalakaar || []}
              gradientColors="bg-gradient-to-r from-emerald-500/20 to-teal-500/20"
              className="w-full"
            />
            <RotatingImageGallery
              images={experienceImages?.zidio || []}
              gradientColors="bg-gradient-to-r from-blue-500/20 to-indigo-500/20"
              className="w-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <div className="mb-8">
            <div className="flex items-start gap-4 mb-6 p-6 rounded-2xl bg-slate-800/70 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg">
                <Code2 className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">AI Agent Framework Developer</h3>
                <div className="flex items-center gap-4 text-gray-300 mb-3">
                  <span className="font-semibold text-lg">Phoenix Project</span>
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 shadow-lg">
                    Project
                  </Badge>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Developed a modular AI agent framework enabling developers to build, test, and run intelligent agents
                  with real-world tool access. Implemented dynamic tool execution and onChain deployment as NFTs.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "Vercel AI SDK", "TypeScript", "Solidity", "OAuth"].map((tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-xs hover:bg-purple-500/10 hover:border-purple-400/50 transition-colors border-gray-600 text-gray-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <motion.a
                href="https://agentix2-git-main-santu8597s-projects.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-slate-700/50 hover:bg-slate-600/50 transition-colors border border-gray-600/50"
              >
                <ExternalLink className="w-5 h-5 text-purple-400" />
              </motion.a>
            </div>

            <div className="flex items-start gap-4 mb-6 p-6 rounded-2xl bg-slate-800/70 backdrop-blur-sm border border-rose-500/20 hover:border-rose-500/40 transition-all duration-300">
              <div className="p-3 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg">
                <Code2 className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Full-Stack Developer</h3>
                <div className="flex items-center gap-4 text-gray-300 mb-3">
                  <span className="font-semibold text-lg">FundRise Platform</span>
                  <Badge className="bg-gradient-to-r from-rose-500 to-pink-500 text-white border-0 shadow-lg">
                    Project
                  </Badge>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Built a modern crowdfunding platform enabling users to create campaigns and reach funding goals
                  through community support. Implemented secure wallet integration and transparent fund management.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "React", "Blockchain", "Web3", "Tailwind CSS"].map((tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-xs hover:bg-rose-500/10 hover:border-rose-400/50 transition-colors border-gray-600 text-gray-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <motion.a
                href="https://fundrise-tan.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-slate-700/50 hover:bg-slate-600/50 transition-colors border border-gray-600/50"
              >
                <ExternalLink className="w-5 h-5 text-rose-400" />
              </motion.a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <RotatingImageGallery
              images={experienceImages?.fundrise || []}
              gradientColors="bg-gradient-to-r from-rose-500/20 to-pink-500/20"
              className="w-full"
            />
            <RotatingImageGallery
              images={experienceImages?.phoenix || []}
              gradientColors="bg-gradient-to-r from-purple-500/20 to-pink-500/20"
              className="w-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <div className="mb-8">
            <div className="flex items-start gap-4 mb-6 p-6 rounded-2xl bg-slate-800/70 backdrop-blur-sm border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
              <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg">
                <Code2 className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">MERN Stack Developer</h3>
                <div className="flex items-center gap-4 text-gray-300 mb-3">
                  <span className="font-semibold text-lg">IgnisDine & Shopify Projects</span>
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 shadow-lg">
                    Freelance
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    2023 - 2024
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Kolkata, India
                  </div>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Developed multiple full-stack applications including a smart table booking system and a modern
                  e-commerce platform. Focused on creating intuitive user experiences with real-time functionality.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-bold mb-4 text-white">Key Achievements:</h4>
            <div className="space-y-3">
              {[
                "✅ Built IgnisDine - Smart table booking system with real-time availability",
                "✅ Developed Shopify clone with secure payment integration",
                "✅ Implemented Socket.io for live updates and notifications",
                "✅ Created responsive designs with modern UI/UX principles",
                "✅ Integrated Redux Toolkit for state management",
              ].map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 text-sm text-gray-300"
                >
                  {achievement}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {["MongoDB", "Express.js", "React.js", "Node.js", "Redux Toolkit", "Socket.io"].map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xs hover:bg-orange-500/10 hover:border-orange-400/50 transition-colors border-gray-600 text-gray-300"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <RotatingImageGallery
              images={experienceImages?.ignisDine || []}
              gradientColors="bg-gradient-to-r from-orange-500/20 to-red-500/20"
              className="w-full"
            />
            <RotatingImageGallery
              images={experienceImages?.shopify || []}
              gradientColors="bg-gradient-to-r from-orange-500/20 to-red-500/20"
              className="w-full"
            />
          </div>
        </div>
      ),
    },
  ]

  return (
    <section
      id="experience"
      className="py-24 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
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
              Experience Timeline
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My journey in building innovative solutions and gaining valuable experience
          </p>
        </motion.div>

        <Timeline data={data} />
      </div>
    </section>
  )
}
