"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar } from "lucide-react"
import { motion } from "framer-motion"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "diyadey310804@gmail.com",
    href: "mailto:diyadey310804@gmail.com",
    gradient: "from-red-500 to-pink-500",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "(+91) 9647844040",
    href: "tel:+919647844040",
    gradient: "from-emerald-500 to-green-500",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Kolkata, India",
    href: "#",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Calendar,
    title: "Schedule Call",
    value: "Book a meeting",
    href: "#",
    gradient: "from-purple-500 to-indigo-500",
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-4 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
    >
      {/* Background elements */}
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
              Let's Work Together
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="block"
            >
              <Card className="text-center border-0 shadow-xl bg-slate-800/70 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-700/50">
                <CardContent className="p-6">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${method.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{method.title}</h3>
                  <p className="text-gray-400 text-sm">{method.value}</p>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-2xl bg-slate-800/90 backdrop-blur-sm overflow-hidden border border-gray-700/50">
              <CardHeader className="bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 text-white">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <MessageCircle className="w-6 h-6" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                      <Input
                        placeholder="Your Name"
                        className="border-2 border-gray-600 focus:border-emerald-400 transition-colors bg-slate-700/50 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        className="border-2 border-gray-600 focus:border-emerald-400 transition-colors bg-slate-700/50 text-white placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                    <Input
                      placeholder="Project Discussion"
                      className="border-2 border-gray-600 focus:border-emerald-400 transition-colors bg-slate-700/50 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <Textarea
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="border-2 border-gray-600 focus:border-emerald-400 transition-colors resize-none bg-slate-700/50 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 hover:from-emerald-400 hover:via-blue-500 hover:to-purple-500 text-white py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Ready to Start Your Project?</h3>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm always excited to work on new projects and collaborate with amazing people. Whether you need a
                  full-stack web application, blockchain integration, or AI-powered solutions, I'm here to help bring
                  your vision to life.
                </p>
                <p>
                  Let's discuss your requirements and create something extraordinary together. I typically respond
                  within 24 hours and offer free initial consultations.
                </p>
              </div>
            </div>

            <Card className="border-0 shadow-xl bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 text-white">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold mb-4">What I Offer:</h4>
                <ul className="space-y-3">
                  {[
                    "Full-Stack Web Development",
                    "Blockchain & Smart Contract Development",
                    "AI Integration & Machine Learning",
                    "UI/UX Design & Prototyping",
                    "Technical Consulting & Code Review",
                    "Project Architecture & Planning",
                  ].map((service, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      {service}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
