"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Star, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const projects = [
  {
    title: "FundRise - Crowdfunding Platform",
    description:
      "A modern crowdfunding platform that enables users to create campaigns, reach funding goals, and bring ideas to life through community support. Features secure wallet integration and transparent fund management with real-time updates.",
    image:
      "https://sjc.microlink.io/BM-ahkMY7VncIupujGCNPKa-vdzKviYt-WM0rOU4MZjzEOO57LJbLkXWqhrJN1hXYi33FKYkYesCRIkoxZ35mA.jpeg",
    technologies: ["Next.js", "React", "Blockchain", "Web3", "Tailwind CSS", "Smart Contracts"],
    liveUrl: "https://fundrise-tan.vercel.app/",
    githubUrl: "#",
    featured: true,
    stats: { stars: 24, views: 1200 },
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Phoenix - AI Agent Framework",
    description:
      "A modular AI agent framework enabling developers to build, test, and run intelligent agents with real-world tool access. Features dynamic tool execution, selective activation, and onChain deployment as NFTs for buying and selling AI agents.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "Vercel AI SDK", "TypeScript", "Solidity", "OAuth", "OpenAI"],
    liveUrl: "https://agentix2-git-main-santu8597s-projects.vercel.app",
    githubUrl: "#",
    featured: true,
    stats: { stars: 18, views: 890 },
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    title: "IgnisDine - Smart Table Booking",
    description:
      "A web application offering an intuitive dining experience with real-time booking and reservation management. Users can book tables, view availability, and manage reservations seamlessly with live updates.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    stats: { stars: 12, views: 650 },
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Shopify - Modern Shopping App",
    description:
      "A secure shopping application with the latest product collections. Users can browse products without signup popups and securely complete orders with modern authentication and payment integration.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux Toolkit", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    stats: { stars: 15, views: 780 },
    gradient: "from-blue-500 to-cyan-500",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing my latest work in web development, blockchain, and AI
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`overflow-hidden border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group ${
                  project.featured ? "ring-2 ring-purple-200" : ""
                }`}
              >
                <div className={`grid ${project.featured ? "lg:grid-cols-2" : "lg:grid-cols-5"} gap-0`}>
                  <div className={`relative overflow-hidden ${project.featured ? "lg:col-span-1" : "lg:col-span-2"}`}>
                    <div className="relative h-64 lg:h-full">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                      />

                      {project.featured && (
                        <div className="absolute top-4 left-4">
                          <Badge className={`bg-gradient-to-r ${project.gradient} text-white border-0 shadow-lg`}>
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        </div>
                      )}

                      <div className="absolute bottom-4 right-4 flex gap-2">
                        <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                          <Star className="w-3 h-3" />
                          {project.stats.stars}
                        </div>
                        <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                          <Eye className="w-3 h-3" />
                          {project.stats.views}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`p-8 ${project.featured ? "lg:col-span-1" : "lg:col-span-3"}`}>
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                        {project.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="p-0">
                      <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs hover:bg-purple-50 hover:border-purple-200 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            asChild
                            className={`bg-gradient-to-r ${project.gradient} hover:shadow-lg text-white border-0 transition-all duration-300`}
                          >
                            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </Link>
                          </Button>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            asChild
                            variant="outline"
                            className="border-2 hover:bg-gray-50 transition-all duration-300"
                          >
                            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              Source Code
                            </Link>
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
