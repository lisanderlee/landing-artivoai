'use client'

import { useInView, motion, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

export const Cards = ({ dict }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }
  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="mx-auto my-10 flex max-w-[1730px] items-center justify-between gap-10 px-10 lg:mt-10 lg:mb-30"
    >
      <Card
        image="/images/card-1.png"
        title={dict.home.cards.card_1.title}
        description={dict.home.cards.card_1.description}
        link="/"
        variants={cardVariants}
        index={0}
      />
      <Card
        image="/images/card-2.png"
        title={dict.home.cards.card_2.title}
        description={dict.home.cards.card_2.description}
        link="/"
        variants={cardVariants}
        index={1}
      />
      <Card
        image="/images/card-3.png"
        title={dict.home.cards.card_3.title}
        description={dict.home.cards.card_3.description}
        link="/"
        variants={cardVariants}
        index={2}
      />
    </motion.section>
  )
}

const Card = ({ image, title, description, link, variants, index }) => {
  return (
    <motion.div variants={variants} className="group">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="z-20 font-semibold text-[#4B4B4B]"
      >
        {title}
      </motion.h3>
      <motion.div
        className="relative mt-6 h-71 w-md overflow-hidden rounded-[20px]"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
          viewport={{ once: true }}
          className="h-full w-full"
        >
          <Image
            src={image}
            alt="Cards"
            width={1200}
            height={800}
            className="h-full w-full rounded-[20px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <Link
            href={link}
            className="absolute right-6 bottom-4 rounded-[10px] bg-white px-3 py-2.5 transition-all duration-300 hover:bg-gray-50 hover:shadow-lg"
          >
            Ver Caso &gt;&gt;
          </Link>
        </motion.div>
      </motion.div>
      <motion.p
        className="mt-7.5 w-2/3 text-xl text-[#636363]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
        viewport={{ once: true }}
      >
        {description}
      </motion.p>
    </motion.div>
  )
}
