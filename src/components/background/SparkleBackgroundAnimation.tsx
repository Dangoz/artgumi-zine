// SparkleBackgroundAnimation.tsx
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Sparkle {
  id: string
  x: number
  y: number
  size: number
}

const generateSparkle = (): Sparkle => ({
  id: Math.random().toString(36).substr(2, 9), // Unique ID for key prop
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
  size: Math.random() * (60 - 15) + 15, // Size between 5px and 20px
})

const SparkleBackgroundAnimation: React.FC = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      // Add several new sparkles at once
      setSparkles((prevSparkles) => [
        ...prevSparkles,
        ...Array.from({ length: 5 }, generateSparkle), // Generate 5 sparkles at once
      ])
    }, 2000) // New sparkles every second

    // Clear interval on component unmount
    return () => clearInterval(interval)
  }, [])

  const removeSparkle = (id: string) => {
    setSparkles((prevSparkles) => prevSparkles.filter((sparkle) => sparkle.id !== id))
  }

  return (
    <AnimatePresence>
      {sparkles.map((sparkle) => (
        <motion.img
          key={sparkle.id}
          src="/assets/sparkle1.png" // Adjust the path to your sparkle image asset
          alt="Sparkle"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0, sparkle.size / 20] }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          onAnimationComplete={() => removeSparkle(sparkle.id)}
          style={{
            position: 'fixed',
            width: sparkle.size, // Use the size for width
            height: sparkle.size, // Use the size for height
            top: sparkle.y,
            left: sparkle.x,
            pointerEvents: 'none', // So it doesn't interfere with clicking
          }}
          className="z-30"
        />
      ))}
    </AnimatePresence>
  )
}

export default SparkleBackgroundAnimation
