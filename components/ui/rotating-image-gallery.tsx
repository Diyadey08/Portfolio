"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Minimize2, Maximize2, X, Eye } from "lucide-react"
import { useRotatingImages } from "@/hooks/use-rotating-images"
import { useState, useEffect } from "react"

interface ExperienceImage {
  id: number
  src: string
  alt: string
  title: string
  description: string
}

interface RotatingImageGalleryProps {
  images: ExperienceImage[]
  gradientColors: string
  autoChangeInterval?: number
  className?: string
  showControls?: boolean
  showIndicators?: boolean
}

export function RotatingImageGallery({
  images,
  gradientColors,
  autoChangeInterval = 3000,
  className = "",
  showControls = true,
  showIndicators = true,
}: RotatingImageGalleryProps) {
  const [isMinimized, setIsMinimized] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  
  const {
    currentImage,
    currentIndex,
    nextImage,
    prevImage,
    goToImage,
    handleMouseEnter,
    handleMouseLeave,
    totalImages,
  } = useRotatingImages({
    images,
    autoChangeInterval,
    enableHoverPause: true,
    disableAutoRotation: isFullscreen, // Disable auto-rotation in fullscreen
  })

  // Keyboard navigation for fullscreen
  useEffect(() => {
    if (!isFullscreen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          setIsFullscreen(false)
          break
        case 'ArrowLeft':
          e.preventDefault()
          prevImage()
          break
        case 'ArrowRight':
          e.preventDefault()
          nextImage()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden' // Prevent background scrolling

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isFullscreen, nextImage, prevImage])

  if (!images || images.length === 0) {
    return (
      <div className={`relative group ${className}`}>
        <div className="w-full rounded-lg bg-slate-700/50 animate-pulse flex items-center justify-center min-h-[200px]">
          <span className="text-gray-400 text-sm">Loading images...</span>
        </div>
      </div>
    )
  }

  // Fullscreen Modal Component
  const FullscreenModal = () => (
    <AnimatePresence>
      {isFullscreen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setIsFullscreen(false)}
        >
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Image counter */}
            {totalImages > 1 && (
              <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm">
                {currentIndex + 1} / {totalImages}
              </div>
            )}

            {/* Close button */}
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors text-white"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation buttons for fullscreen */}
            {totalImages > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    prevImage()
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-200 text-white hover:scale-110"
                  title="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    nextImage()
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-200 text-white hover:scale-110"
                  title="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Fullscreen image */}
            <motion.div
              key={currentImage.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-full max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain"
                priority
              />
            </motion.div>

            {/* Image info in fullscreen */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 text-center">
              <h4 className="text-white font-semibold text-lg mb-2">{currentImage.title}</h4>
              <p className="text-gray-300 text-sm mb-3">{currentImage.description}</p>
              
              {/* Manual control hint */}
              <div className="text-gray-400 text-xs mb-3">
                {totalImages > 1 ? (
                  <>Manual control: <kbd className="px-1 py-0.5 bg-gray-600 rounded text-white">←</kbd> <kbd className="px-1 py-0.5 bg-gray-600 rounded text-white">→</kbd> to navigate • <kbd className="px-1 py-0.5 bg-gray-600 rounded text-white">Esc</kbd> to close</>
                ) : (
                  <>Press <kbd className="px-1 py-0.5 bg-gray-600 rounded text-white">Esc</kbd> to close</>
                )}
              </div>
              
              {totalImages > 1 && (
                <div className="flex justify-center gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "bg-white scale-125"
                          : "bg-white/40 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return (
    <>
      <div
        className={`relative group transition-all duration-300 ${className} ${
          isMinimized ? 'h-16 overflow-hidden' : ''
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Control buttons */}
        <div className="absolute top-2 right-2 z-10 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors text-white backdrop-blur-sm"
            title={isMinimized ? "Maximize" : "Minimize"}
          >
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsFullscreen(true)}
            className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors text-white backdrop-blur-sm"
            title="View fullscreen"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        <div className={`relative overflow-hidden rounded-lg bg-slate-800/20 flex items-center justify-center transition-all duration-300 ${
          isMinimized ? 'min-h-[64px]' : 'min-h-[200px]'
        }`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage.id}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="relative flex items-center justify-center w-full"
            >
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                width={500}
                height={300}
                className={`max-w-full rounded-lg object-contain shadow-2xl transition-all duration-300 group-hover:scale-105 ${
                  isMinimized 
                    ? 'h-12 w-auto cursor-pointer' 
                    : 'cursor-pointer'
                }`}
                style={{ 
                  height: isMinimized ? '48px' : 'auto', 
                  minHeight: isMinimized ? '48px' : '200px', 
                  maxHeight: isMinimized ? '48px' : '400px' 
                }}
                onClick={() => setIsFullscreen(true)}
              />
              <div className={`absolute inset-0 ${gradientColors} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Image info overlay - hidden when minimized */}
              {!isMinimized && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 rounded-b-lg"
                >
                  <h4 className="text-white font-semibold text-sm mb-1">{currentImage.title}</h4>
                  <p className="text-gray-300 text-xs leading-relaxed">{currentImage.description}</p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation controls - hidden when minimized */}
          {showControls && totalImages > 1 && !isMinimized && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </button>
            </>
          )}
        </div>

        {/* Image indicators - hidden when minimized */}
        {showIndicators && totalImages > 1 && !isMinimized && (
          <div className="flex justify-center mt-3 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white scale-125"
                    : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Minimized state info */}
        {isMinimized && (
          <div className="absolute bottom-1 left-2 right-12 truncate">
            <span className="text-white text-xs font-medium">{currentImage.title}</span>
          </div>
        )}
      </div>

      {/* Fullscreen Modal */}
      <FullscreenModal />
    </>
  )
}
