'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const slides = [
  {
    text: "Document First.",
    image: "/images/document-first.jpeg",
    alt: "Robot examining documentation"
  },
  {
    text: "Generate Code.",
    image: "/images/generate-code.jpeg",
    alt: "Robot typing on keyboard"
  },
  {
    text: "Test Driven.",
    image: "/images/test-driven.jpeg",
    alt: "Robot analyzing data"
  },
  {
    text: "AI Powered.",
    image: "/images/ai-powered.jpeg",
    alt: "Heroic robot with cape"
  },
  {
    text: "Future Ready.",
    image: "/images/future-ready.jpeg",
    alt: "Future city worker"
  }
]

export function AnimatedText() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div className="relative w-full h-full">
            <Image
              src={slides[index].image}
              alt={slides[index].alt}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
              priority
            />
          </div>
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4"
            >
              {slides[index].text}
            </motion.h2>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
