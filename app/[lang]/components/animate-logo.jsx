'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const LogoIcon = ({ className }) => (
  <svg
    width="116"
    height="31"
    viewBox="0 0 116 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="116" height="31" rx="4" fill="currentColor" />
    <path
      d="M20 8h-8v15h3v-5h5c3.3 0 6-2.7 6-6s-2.7-4-6-4zm0 6h-5v-4h5c1.1 0 2 .9 2 2s-.9 2-2 2z"
      fill="white"
    />
    <path d="M35 8h-3v15h3V8zM45 8h-8v15h8v-2h-5v-3h4v-2h-4v-3h5V8z" fill="white" />
    <path
      d="M55 8h-8v15h3v-5h5c3.3 0 6-2.7 6-6s-2.7-4-6-4zm0 6h-5v-4h5c1.1 0 2 .9 2 2s-.9 2-2 2z"
      fill="white"
    />
    <circle cx="75" cy="15.5" r="7.5" fill="white" />
    <path d="M75 11v9l6-4.5-6-4.5z" fill="currentColor" />
    <text x="88" y="20" fill="currentColor" fontSize="12" fontWeight="bold">
      LOGO
    </text>
  </svg>
)

export default function AnimateLogo() {
  const [showLogo, setShowLogo] = useState(true)
  const [animationPhase, setAnimationPhase] = useState(0)

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationPhase(1), 1500)

    const timer2 = setTimeout(() => setAnimationPhase(2), 2000)

    const timer3 = setTimeout(() => setAnimationPhase(3), 2500)

    const timer4 = setTimeout(() => setShowLogo(false), 3500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [])

  const getAnimationProps = () => {
    switch (animationPhase) {
      case 0: // Initial reveal
        return {
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
          opacity: 1,
        }
      case 1: // Spin and prepare
        return {
          x: 0,
          y: 0,
          scale: [1, 1.2, 0.8, 1],
          rotate: [0, 180, 360, 720],
          opacity: 1,
        }
      case 2: // Pre-flight preparation
        return {
          x: 0,
          y: 0,
          scale: 0.7,
          rotate: 720,
          opacity: 1,
        }
      case 3: // Move to top-left corner
        return {
          x: 'calc(-50vw + 116px)',
          y: 'calc(-50vh + 64px)',
          scale: 1,
          rotate: 1080,
          opacity: 0.8,
        }
      default:
        return {
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
          opacity: 1,
        }
    }
  }

  return (
    <AnimatePresence>
      {showLogo && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated background overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/80 to-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: animationPhase < 3 ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />

          {/* Particle effects */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-2 w-2 rounded-full bg-white"
                style={{
                  left: `${20 + ((i * 3) % 60)}%`,
                  top: `${20 + ((i * 7) % 60)}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: animationPhase < 2 ? Number.POSITIVE_INFINITY : 0,
                  repeatType: 'loop',
                }}
              />
            ))}
          </div>

          {/* Main logo container */}
          <motion.div
            className="relative z-10"
            animate={getAnimationProps()}
            transition={{
              duration: animationPhase === 3 ? 1.5 : animationPhase === 1 ? 1 : 0.5,
              ease: animationPhase === 3 ? [0.25, 0.46, 0.45, 0.94] : 'easeOut',
              type: animationPhase === 3 ? 'tween' : 'spring',
              stiffness: animationPhase === 3 ? undefined : 200,
            }}
          >
            {/* Revealing circle effect */}
            <motion.div
              className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              initial={{ scale: 2, opacity: 1 }}
              animate={{
                scale: animationPhase >= 1 ? 0 : 2,
                opacity: animationPhase >= 1 ? 0 : 0.8,
              }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            />

            {/* Glow rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-lg border-2 border-white/30"
                initial={{ scale: 1, opacity: 0 }}
                animate={{
                  scale: animationPhase >= 1 ? [1, 2, 3] : 1,
                  opacity: animationPhase >= 1 ? [0.5, 0.2, 0] : 0,
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.2,
                  repeat: animationPhase >= 1 && animationPhase < 3 ? Number.POSITIVE_INFINITY : 0,
                  repeatType: 'loop',
                }}
              />
            ))}

            {/* Logo with morphing effect */}
            <motion.div
              className="relative z-10"
              animate={{
                rotateY: animationPhase === 1 ? [0, 180, 360] : 0,
                rotateX: animationPhase === 2 ? [0, 15, 0] : 0,
              }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            >
              <LogoIcon className="text-white drop-shadow-2xl" />
            </motion.div>

            {/* Energy trails for movement */}
            {animationPhase === 3 && (
              <motion.div
                className="absolute inset-0 h-1 w-32 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: [0, 1, 0], scaleX: [0, 1, 0] }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                style={{ transformOrigin: 'left center' }}
              />
            )}
          </motion.div>

          {/* Text animation */}
          <motion.div
            className="absolute bottom-1/3 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: animationPhase < 2 ? 1 : 0,
              y: animationPhase < 2 ? 0 : -50,
            }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.h1
              className="mb-2 text-4xl font-bold text-white"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: animationPhase < 2 ? Number.POSITIVE_INFINITY : 0,
                repeatType: 'reverse',
              }}
            >
              Welcome
            </motion.h1>
            <motion.p
              className="text-lg text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Preparing your experience...
            </motion.p>
          </motion.div>

          {/* Loading progress bar */}
          <motion.div
            className="absolute bottom-20 left-1/2 h-1 w-64 -translate-x-1/2 transform overflow-hidden rounded-full bg-white/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: animationPhase < 3 ? 1 : 0 }}
          >
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
              initial={{ width: '0%' }}
              animate={{ width: `${(animationPhase + 1) * 25}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
