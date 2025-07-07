'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { ImageIcon, Film, Focus, Replace, Grip, Ratio } from 'lucide-react'

export const HeroSection = ({ dict }) => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.8,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const wordVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.section
      ref={sectionRef}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto mb-32 flex max-w-[1730px] items-center justify-between gap-6 pt-25"
    >
      <div className="w-full lg:w-4/7">
        <motion.h1 className="w-full text-8xl font-normal text-black" style={{ y: textY }}>
          <motion.span className="inline-block" variants={wordVariants} custom={0}>
            {dict.home.title.pre}{' '}
          </motion.span>
          <motion.span
            className="relative inline-block text-[#7A57D2]"
            variants={wordVariants}
            custom={1}
          >
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
              }}
              style={{
                background: 'linear-gradient(90deg, #7A57D2, #A78BFA, #7A57D2)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {dict.home.title.highlight}{' '}
            </motion.span>
          </motion.span>
          <motion.span className="mb-4 inline-block" variants={wordVariants} custom={2}>
            {dict.home.title.post}
          </motion.span>
        </motion.h1>
        <motion.p className="w-2/3 text-lg text-[#585858] lg:mt-8" variants={itemVariants}>
          {dict.home.description}
        </motion.p>
        <motion.button
          className="relative mt-6 cursor-pointer overflow-hidden rounded-[50px] bg-white px-4.5 py-4 text-lg font-semibold text-[#7A57D2] transition-colors hover:bg-gray-100 lg:mt-10"
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 15px 35px -5px rgba(122, 87, 210, 0.3)',
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#7A57D2]/10 to-transparent"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }}
          />
          <span className="relative z-10">{dict.buttons.start_creating}</span>
        </motion.button>
      </div>
      <motion.div
        className="flex w-full items-center justify-between lg:w-3/7"
        variants={itemVariants}
        style={{ y: imageY }}
      >
        <div className="hidden w-4/5 flex-row-reverse items-end justify-start lg:flex">
          <motion.div
            initial={{ x: 100, opacity: 0, rotate: 5 }}
            animate={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
              }}
            >
              <Image
                width={700}
                height={900}
                src="/images/image-tool-lg.webp"
                alt={dict.home.image_alts.image_lg}
                className="max-w-[493px] rounded-[36px] object-cover"
              />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0, rotate: -5 }}
            animate={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 1.4, ease: 'easeOut' }}
          >
            <motion.div
              className="-mr-10 -mb-10 h-60 w-60 overflow-hidden rounded-[38px]"
              animate={{
                y: [0, 15, 0],
                rotate: [0, -1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
                delay: 1,
              }}
            >
              <Image
                width={400}
                height={400}
                src="/images/image-tool-can.png"
                alt={dict.home.image_alts.image_sm}
                className="h-60 w-60 object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="hidden flex-col items-center justify-center gap-4 lg:flex"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.button
                className="relative overflow-hidden rounded-md bg-zinc-800 p-2.5 text-white transition-colors hover:bg-white hover:text-zinc-800"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
                }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'easeInOut',
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#7A57D2] to-[#A78BFA]"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <ImageIcon className="h-4 w-4" />
              </motion.button>
            </TooltipTrigger>
            <TooltipContent side="left" className="bg-white text-zinc-800">
              <p>{dict.home.tools.image}</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="rounded-md bg-zinc-800 p-2.5 text-white transition-colors hover:bg-white hover:text-zinc-800">
                <Film className="h-4 w-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="left" className="bg-white text-zinc-800">
              <p>{dict.home.tools.video}</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="rounded-md bg-zinc-800 p-2.5 text-white transition-colors hover:bg-white hover:text-zinc-800">
                <Focus className="h-4 w-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="left" className="bg-white text-zinc-800">
              <p>{dict.home.tools.background}</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="rounded-md bg-zinc-800 p-2.5 text-white transition-colors hover:bg-white hover:text-zinc-800">
                <Replace className="h-4 w-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="left" className="bg-white text-zinc-800">
              <p>{dict.home.tools.product}</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="rounded-md bg-zinc-800 p-2.5 text-white transition-colors hover:bg-white hover:text-zinc-800">
                <Grip className="h-4 w-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="left" className="bg-white text-zinc-800">
              <p>{dict.home.tools.upscale}</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="rounded-md bg-zinc-800 p-2.5 text-white transition-colors hover:bg-white hover:text-zinc-800">
                <Ratio className="h-4 w-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="left" className="bg-white text-zinc-800">
              <p>{dict.home.tools.resize}</p>
            </TooltipContent>
          </Tooltip>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
