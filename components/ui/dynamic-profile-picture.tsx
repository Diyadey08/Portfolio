"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"

interface ProfileImage {
  id: number
  src: string
  alt: string
  title: string
  hue: number
}

interface ProfileSettings {
  autoChangeInterval: number
  transitionDuration: number
  enableHoverPause: boolean
  showIndicators: boolean
}

interface ProfileData {
  profileImages: ProfileImage[]
  settings: ProfileSettings
}

export default function DynamicProfilePicture() {
  const [profileData, setProfileData] = useState<ProfileData | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const loadProfileData = async () => {
      try {
        const response = await fetch("/profile-images.json")
        const data: ProfileData = await response.json()
        setProfileData(data)
      } catch (error) {
        console.error("Failed to load profile images:", error)
        // Fallback data
        setProfileData({
          profileImages: [
            {
              id: 1,
              src: "/placeholder.svg?height=120&width=120&text=Profile+1",
              alt: "Diya Dey - Profile 1",
              title: "Professional",
              hue: 120,
            },
            {
              id: 2,
              src: "/placeholder.svg?height=120&width=120&text=Profile+2",
              alt: "Diya Dey - Profile 2",
              title: "Creative",
              hue: 240,
            },
            {
              id: 3,
              src: "/placeholder.svg?height=120&width=120&text=Profile+3",
              alt: "Diya Dey - Profile 3",
              title: "Casual",
              hue: 300,
            },
          ],
          settings: {
            autoChangeInterval: 4000,
            transitionDuration: 800,
            enableHoverPause: true,
            showIndicators: true,
          },
        })
      }
    }

    loadProfileData()
  }, [])

  useEffect(() => {
    if (!profileData || !isPlaying) return

    const shouldPause = profileData.settings.enableHoverPause && isHovered

    if (!shouldPause) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % profileData.profileImages.length)
      }, profileData.settings.autoChangeInterval)
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [profileData, isPlaying, isHovered])

  const handlePrevious = () => {
    if (!profileData) return
    setCurrentIndex((prev) => (prev - 1 + profileData.profileImages.length) % profileData.profileImages.length)
  }

  const handleNext = () => {
    if (!profileData) return
    setCurrentIndex((prev) => (prev + 1) % profileData.profileImages.length)
  }

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  if (!profileData) {
    return (
      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 p-1 animate-pulse">
        <div className="w-full h-full rounded-full bg-slate-950" />
      </div>
    )
  }

  const currentImage = profileData.profileImages[currentIndex]
  const currentHue = currentImage?.hue || 120

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Frame Container (no filter here) */}
      <motion.div
        className="w-32 h-32 rounded-full bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 p-1 shadow-2xl relative overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center relative overflow-hidden">
          {/* Image itself (unfiltered) */}
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={currentImage.src}
              alt={currentImage.alt}
              className="w-full h-full object-cover rounded-full relative z-10"
              initial={{ opacity: 0, scale: 1.1, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotate: -5 }}
              transition={{ duration: profileData.settings.transitionDuration / 1000 }}
            />
          </AnimatePresence>

          {/* Glow overlay with hue-rotate */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-blue-500/20 to-purple-500/20 rounded-full"
            animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ filter: `hue-rotate(${currentHue}deg)` }}
          />

          {/* Border hue effect */}
          <div
            className="absolute inset-0 rounded-full border-2 border-emerald-400/30"
            style={{ filter: `hue-rotate(${currentHue}deg)` }}
          />
        </div>

        {/* Navigation Controls */}
        <motion.div
          className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <motion.button
            onClick={handlePrevious}
            className="w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-slate-800/80 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-4 h-4" />
          </motion.button>

          <motion.button
            onClick={handleNext}
            className="w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-slate-800/80 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

        {/* Play/Pause Button */}
        <motion.button
          onClick={togglePlayPause}
          className="absolute top-2 right-2 w-6 h-6 rounded-full bg-slate-900/80 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
        </motion.button>
      </motion.div>

      {/* Image Title */}
      <motion.div
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ y: 10, opacity: 0 }}
        whileHover={{ y: 0, opacity: 1 }}
      >
        <div className="bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white whitespace-nowrap">
          {currentImage.title}
        </div>
      </motion.div>

      {/* Indicators */}
      {profileData.settings.showIndicators && (
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {profileData.profileImages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-emerald-400 scale-125" : "bg-gray-600 hover:bg-gray-400"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              style={{
                filter: index === currentIndex ? `hue-rotate(${currentHue}deg)` : "none",
              }}
            />
          ))}
        </div>
      )}

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/60 rounded-full"
            style={{
              left: `${20 + ((i * 60) % 80)}%`,
              top: `${20 + ((i * 40) % 60)}%`,
              filter: `hue-rotate(${currentHue + i * 60}deg)`,
            }}
            animate={{ y: [-5, -15, -5], opacity: [0, 1, 0], scale: [0, 1, 0] }}
            transition={{ duration: 2 + Math.random(), repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>
    </div>
  )
}
