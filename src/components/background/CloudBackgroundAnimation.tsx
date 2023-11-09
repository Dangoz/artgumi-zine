// CloudBackgroundAnimation.tsx
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Cloud {
  id: string
  x: number
  y: number
  size: number
  direction: 'left' | 'right' | 'diagonal'
}

const generateCloud = (): Cloud => {
  const directionTypes: Cloud['direction'][] = ['left', 'right', 'diagonal']
  const direction = directionTypes[Math.floor(Math.random() * directionTypes.length)]

  return {
    id: Math.random().toString(36).substr(2, 9),
    x: direction === 'right' ? -200 : window.innerWidth, // Start position based on direction
    y: Math.random() * window.innerHeight * 0.8, // Clouds in the upper 80% of the screen
    size: Math.random() * (150 - 50) + 50, // Random size between 50px and 150px
    direction,
  }
}

const CloudBackgroundAnimation: React.FC = () => {
  const [clouds, setClouds] = useState<Cloud[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setClouds((prevClouds) => [
        ...prevClouds,
        ...Array.from({ length: 2 }, generateCloud), // Generate 2 clouds at once
      ])
    }, 4000) // New clouds every 4 seconds

    return () => clearInterval(interval)
  }, [])

  const removeCloud = (id: string) => {
    setClouds((prevClouds) => prevClouds.filter((cloud) => cloud.id !== id))
  }

  return (
    <AnimatePresence>
      {clouds.map((cloud) => (
        <motion.img
          key={cloud.id}
          src="/assets/cloud1.png" // Adjust the path to your cloud image asset
          alt="Cloud"
          initial={{ x: cloud.x, y: cloud.y }}
          animate={{
            x: cloud.direction === 'right' ? [cloud.x, window.innerWidth + 200] : [cloud.x, -200],
            y: cloud.direction === 'diagonal' ? [cloud.y, cloud.y + 100] : cloud.y,
            opacity: [1, 0],
          }}
          exit={{ opacity: 0 }}
          transition={{
            duration: Math.random() * (30 - 15) + 15, // Duration between 15 and 30 seconds
            ease: 'linear',
          }}
          onAnimationComplete={() => removeCloud(cloud.id)}
          style={{
            position: 'fixed',
            width: cloud.size, // Use the size for width
            height: 'auto', // Keep the aspect ratio of the cloud
            pointerEvents: 'none',
          }}
          className="z-30"
        />
      ))}
    </AnimatePresence>
  )
}

export default CloudBackgroundAnimation
