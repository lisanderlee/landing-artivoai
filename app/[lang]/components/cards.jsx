'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: {
    y: 60,
    opacity: 0,
    scale: 0.96,
    filter: 'blur(4px)',
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      mass: 0.5,
      duration: 0.8,
    },
  },
}

const contentVariants = {
  hidden: {
    y: 20,
    opacity: 0,
    filter: 'blur(2px)',
  },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: [0.2, 0.8, 0.4, 1],
    },
  },
}

const buttonVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.3,
      type: 'spring',
      stiffness: 300,
      damping: 15,
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: '0 15px 30px -10px rgba(0, 0, 0, 0.15)',
    transition: { duration: 0.2 },
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 },
  },
}

export const Cards = ({ dict }) => {
  return (
    <motion.section
      className="mx-auto my-10 flex max-w-[1730px] items-center justify-between gap-10 px-10 lg:mt-10 lg:mb-30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <Card
        image="/images/card-1.png"
        title={dict.home.cards.card_1.title}
        description={dict.home.cards.card_1.description}
        link="/"
      />
      <Card
        image="/images/card-2.png"
        title={dict.home.cards.card_2.title}
        description={dict.home.cards.card_2.description}
        link="/"
      />
      <Card
        image="/images/card-3.png"
        title={dict.home.cards.card_3.title}
        description={dict.home.cards.card_3.description}
        link="/"
      />
    </motion.section>
  )
}

const Card = ({ image, title, description, link }) => {
  return (
    <motion.div className="relative" variants={cardVariants}>
      {/* Title */}
      <motion.h3 className="font-semibold text-[#4B4B4B]" variants={contentVariants}>
        {title}
      </motion.h3>

      {/* Image Container */}
      <motion.div
        className="relative mt-6 h-71 w-md overflow-hidden rounded-[20px] will-change-transform"
        variants={contentVariants}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3 },
        }}
      >
        <Image
          src={image}
          alt="Cards"
          width={1200}
          height={800}
          className="h-full w-full object-cover"
          priority={false}
          loading="lazy"
        />

        {/* Button */}
        <motion.div
          className="absolute right-6 bottom-4 z-20"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <Link
            href={link}
            className="inline-block rounded-[10px] bg-white px-4 py-2.5 text-sm font-medium shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl"
          >
            Ver Caso &gt;&gt;
          </Link>
        </motion.div>
      </motion.div>

      {/* Description */}
      <motion.p
        className="mt-7.5 w-2/3 text-xl text-[#636363]"
        variants={contentVariants}
        transition={{ delay: 0.2 }}
      >
        {description}
      </motion.p>
    </motion.div>
  )
}
