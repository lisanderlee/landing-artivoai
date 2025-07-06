'use client'

import { useInView, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

const cardVariants = {
  hidden: {
    y: 50,
    opacity: 0,
    scale: 0.98,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 100,
      mass: 0.5,
    },
  },
}

const textVariants = {
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
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      type: 'spring',
      stiffness: 300,
      damping: 15,
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
  },
  tap: {
    scale: 0.98,
  },
}

export const Cards = ({ dict }) => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, {
    margin: '-100px',
  })

  return (
    <motion.section
      ref={sectionRef}
      className="mx-auto my-10 flex max-w-[1730px] items-center justify-between gap-10 px-10 lg:mt-10 lg:mb-30"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
          },
        },
      }}
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
      <motion.h3 className="font-semibold text-[#4B4B4B]" variants={textVariants}>
        {title}
      </motion.h3>

      <motion.div
        className="relative mt-6 h-71 w-md overflow-hidden rounded-[20px]"
        variants={textVariants}
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

        <motion.div
          className="absolute right-6 bottom-4 z-20"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <Link
            href={link}
            className="inline-block rounded-[10px] bg-white px-3 py-2.5 shadow-md transition-colors hover:bg-gray-50"
          >
            Ver Caso &gt;&gt;
          </Link>
        </motion.div>
      </motion.div>

      <motion.p
        className="mt-7.5 w-2/3 text-xl text-[#636363]"
        variants={textVariants}
        transition={{ delay: 0.2 }}
      >
        {description}
      </motion.p>
    </motion.div>
  )
}
