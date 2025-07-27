"use client"

import { useState, useEffect, useCallback } from 'react'

interface ExperienceImage {
  id: number
  src: string
  alt: string
  title: string
  description: string
}

interface UseRotatingImagesProps {
  images: ExperienceImage[]
  autoChangeInterval?: number
  enableHoverPause?: boolean
  disableAutoRotation?: boolean
}

export function useRotatingImages({
  images,
  autoChangeInterval = 3000,
  enableHoverPause = true,
  disableAutoRotation = false,
}: UseRotatingImagesProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [images.length])

  const prevImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }, [images.length])

  const goToImage = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  const handleMouseEnter = useCallback(() => {
    if (enableHoverPause) {
      setIsPaused(true)
    }
  }, [enableHoverPause])

  const handleMouseLeave = useCallback(() => {
    if (enableHoverPause) {
      setIsPaused(false)
    }
  }, [enableHoverPause])

  useEffect(() => {
    if (images.length <= 1 || isPaused || disableAutoRotation) return

    const interval = setInterval(nextImage, autoChangeInterval)
    return () => clearInterval(interval)
  }, [nextImage, autoChangeInterval, isPaused, images.length, disableAutoRotation])

  return {
    currentImage: images[currentIndex] || images[0],
    currentIndex,
    nextImage,
    prevImage,
    goToImage,
    handleMouseEnter,
    handleMouseLeave,
    totalImages: images.length,
  }
}
