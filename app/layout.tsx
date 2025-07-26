import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Diya Dey - Full-Stack Developer & Blockchain Enthusiast",
  description:
    "Portfolio of Diya Dey - Full-stack web developer skilled in MERN stack, Next.js, blockchain technology, and machine learning.",
  keywords: "web developer, blockchain, full-stack, React, Next.js, MERN stack, portfolio",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        {children}
        
      </body>
    </html>
  )
}
