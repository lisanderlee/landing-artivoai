'use client'

import { HeroSection } from './hero-section'
import { NavBar } from './navbar'
import { InputSection } from './input-section'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export const HeroWrapper = ({ dict, lang }) => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  return (
    <div ref={containerRef}>
      <motion.div
        className="min-h-screen bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat p-4"
        style={{ y: backgroundY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <motion.div
          className="relative z-10 rounded-[20px] bg-[radial-gradient(68.61%_51.48%_at_13.55%_20.28%,_rgba(253,253,253,0.49)_0%,_rgba(231,231,231,0.49)_100%)] px-6 lg:pr-10 lg:pl-20"
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          whileHover={{
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
            transition: { duration: 0.3 },
          }}
        >
          <NavBar dict={dict} lang={lang} />
          <HeroSection dict={dict} />

          <motion.p
            className="overflow-hidden text-center text-[15px] text-[#878787]"
            style={{ y: textY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            {' '}
            <motion.span
              className="inline-block"
              animate={{ x: [0, -100] }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'linear',
              }}
            >
              Flux - ChatGPT - VEO 3 - Kling - Flux Pro - Flux - ChatGPT - VEO 3 - Kling - Flux Pro
              - Flux - ChatGPT - VEO 3 - Kling - Flux Pro - Flux - ChatGPT - VEO 3 - Kling - Flux
              Pro - Flux - ChatGPT - VEO 3 - Flux - ChatGPT - VEO 3 - Kling - Flux Pro - Flux{' '}
            </motion.span>
          </motion.p>
        </motion.div>
      </motion.div>
      <InputSection dict={dict} />
    </div>
  )
}
