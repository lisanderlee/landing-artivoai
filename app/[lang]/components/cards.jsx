'use client'

import { useInView, motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

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

const Cards = ({ dict }) => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { margin: '-100px' })
  return (
    <section
      ref={sectionRef}
      className="mx-auto my-10 flex max-w-[1730px] items-center justify-between gap-10 px-10 lg:mt-10 lg:mb-30"
    >
      <Card
        image="/images/card-1.png"
        title={dict.home.cards.card_1.title}
        description={dict.home.cards.card_1.description}
        link="/"
        isInView={isInView}
      />
      <Card
        image="/images/card-2.png"
        title={dict.home.cards.card_2.title}
        description={dict.home.cards.card_2.description}
        link="/"
        isInView={isInView}
      />
      <Card
        image="/images/card-3.png"
        title={dict.home.cards.card_3.title}
        description={dict.home.cards.card_3.description}
        link="/"
        isInView={isInView}
      />
    </section>
  )
}

const Card = ({ image, title, description, link, isInView }) => {
  return (
    <div className="relative">
      <motion.h3
        className="font-semibold text-[#4B4B4B]"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h3>

      <motion.div
        className="relative mt-6 h-71 w-md overflow-hidden rounded-[20px]"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Image
          src={image}
          alt="Cards"
          width={1200}
          height={800}
          className="h-full w-full object-cover"
        />

        <motion.div
          className="absolute right-6 bottom-4 z-20"
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 15px 35px -5px rgba(122, 87, 210, 0.3)',
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <Link href={link} className="inline-block rounded-[10px] bg-white px-3 py-2.5 shadow-md">
            Ver Caso &gt;&gt;
          </Link>
        </motion.div>
      </motion.div>

      <motion.p
        className="mt-7.5 w-2/3 text-xl text-[#636363]"
        initial={{ opacity: 0, x: -20, scale: 1.05 }}
        animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        {description}
      </motion.p>
    </div>
  )
}

export { Cards }
