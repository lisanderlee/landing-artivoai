'use client'

import { motion } from 'framer-motion'
import { BotMessageSquare } from 'lucide-react'
import Image from 'next/image'

export const UseCases = ({ dict }) => {
  // Animation variants

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
      },
    },
  }

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const circleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 10,
      },
    },
  }

  const svgVariants = {
    hidden: { rotate: -30, opacity: 0 },
    visible: {
      rotate: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  }

  const messageVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  }

  const rightMessageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  }

  return (
    <motion.section
      className="mx-auto my-10 grid max-w-[1730px] grid-cols-5 gap-10 px-10 text-[#1D0D27] lg:mt-10 lg:mb-30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
    >
      {/* First Card */}
      <motion.div
        className="relative col-span-3 flex h-full items-center justify-between gap-7 rounded-[20px] bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat py-8 pr-16 pl-13"
        variants={cardVariants}
      >
        <div className="absolute inset-0 rounded-[20px] bg-white/10 backdrop-blur-[89px]" />
        <div className="relative z-10 flex-1">
          <motion.h4
            className="text-[40px] leading-10 font-semibold"
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
          >
            Todos los modelos de AI en un solo lugar.
          </motion.h4>
          <motion.p
            className="mt-4.5 w-6/7 text-[20px]"
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            transition={{ delay: 0.1 }}
          >
            un solo precio por todo los modelos un solo precio por todo los modelos un solo precio
            por todo los modelos
          </motion.p>
        </div>
        <div className="relative z-10 flex flex-1 items-center justify-center">
          <motion.div
            className="flex h-81 w-81 items-center justify-center rounded-full bg-[#D2CCD98C]"
            initial="hidden"
            whileInView="visible"
            variants={circleVariants}
            transition={{ delay: 0.05 }}
          >
            <motion.div
              className="relative flex h-57 w-57 items-center justify-center rounded-full bg-[#F7DCCFA8] shadow-[0px_-2px_26px_-7px_rgba(0,0,0,0.25)]"
              initial="hidden"
              whileInView="visible"
              variants={circleVariants}
              transition={{ delay: 0.1 }}
            >
              <motion.div
                className="absolute top-0 left-8 h-12 w-12 rounded-full bg-white"
                initial="hidden"
                whileInView="visible"
                variants={circleVariants}
                transition={{ delay: 0.2 }}
              />
              <motion.div
                className="absolute top-1/2 -right-6.5 h-13 w-13 -translate-y-1/2 transform rounded-full bg-white"
                initial="hidden"
                whileInView="visible"
                variants={circleVariants}
                transition={{ delay: 0.3 }}
              />
              <motion.div
                className="absolute bottom-0 left-7 h-14 w-14 rounded-full bg-white"
                initial="hidden"
                whileInView="visible"
                variants={circleVariants}
                transition={{ delay: 0.4 }}
              />
              <motion.div
                className="flex h-24.5 w-24.5 items-center justify-center rounded-full bg-zinc-800"
                variants={circleVariants}
                transition={{ delay: 0.5 }}
              >
                <Image
                  src="/images/logo-icon.svg"
                  width={100}
                  height={100}
                  alt="Logo Icon"
                  className="h-8 w-8"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Second Card */}
      <motion.div
        className="relative col-span-2 flex h-full items-center justify-between gap-7 rounded-[20px] bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat px-11 py-8"
        initial="hidden"
        whileInView="visible"
        variants={cardVariants}
        transition={{ delay: 0.2 }}
      >
        <div className="absolute inset-0 rounded-[20px] bg-white/10 backdrop-blur-[89px]" />
        <div className="relative z-10 flex-1">
          <motion.h4
            className="w-9/10 text-[40px] leading-10 font-semibold"
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
          >
            Integrate con nuestra API y produce en cantidad
          </motion.h4>
          <motion.p
            className="mt-4.5 w-9/10 text-[20px]"
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            transition={{ delay: 0.1 }}
          >
            Escribe prompts, navega y accede a todas las herramientas en español, con soporte en tu
            idioma cuando lo necesites.
          </motion.p>
        </div>
        <motion.div
          className="absolute right-0 bottom-0 h-46 w-46"
          initial="hidden"
          whileInView="visible"
          variants={svgVariants}
        >
          <svg
            width="184"
            height="184"
            viewBox="0 0 187 187"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M159.4 30.6L187 3M3 187L30.6 159.4M53.6 108.8L76.6 85.8M81.2 136.4L104.2 113.4M42.5603 171.36C44.6116 173.418 47.0491 175.052 49.7329 176.166C52.4168 177.281 55.2943 177.854 58.2003 177.854C61.1063 177.854 63.9838 177.281 66.6677 176.166C69.3515 175.052 71.789 173.418 73.8403 171.36L95.0003 150.2L39.8003 95L18.6403 116.16C16.5819 118.211 14.9486 120.649 13.8342 123.333C12.7198 126.017 12.1461 128.894 12.1461 131.8C12.1461 134.706 12.7198 137.583 13.8342 140.267C14.9486 142.951 16.5819 145.389 18.6403 147.44L42.5603 171.36ZM95 39.8003L150.2 95.0003L171.36 73.8403C173.418 71.789 175.052 69.3515 176.166 66.6677C177.281 63.9838 177.854 61.1063 177.854 58.2003C177.854 55.2943 177.281 52.4168 176.166 49.7329C175.052 47.0491 173.418 44.6116 171.36 42.5603L147.44 18.6403C145.389 16.5819 142.951 14.9486 140.267 13.8342C137.583 12.7198 134.706 12.1461 131.8 12.1461C128.894 12.1461 126.017 12.7198 123.333 13.8342C120.649 14.9486 118.211 16.5819 116.16 18.6403L95 39.8003Z"
              stroke="#09090B"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Third Card */}
      <motion.div
        className="relative col-span-5 grid grid-cols-3 gap-10 rounded-[20px] bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat py-12 pr-16 pl-13"
        initial="hidden"
        whileInView="visible"
        variants={cardVariants}
        transition={{ delay: 0.4 }}
      >
        <div className="absolute inset-0 rounded-[20px] bg-white/10 backdrop-blur-[89px]" />

        <div className="relative col-span-1">
          <motion.div
            className="flex h-9 w-9 items-center justify-center rounded-md bg-zinc-800"
            initial="hidden"
            whileInView="visible"
            variants={circleVariants}
            transition={{ delay: 0.05 }}
          >
            <BotMessageSquare className="h-4 w-4 text-white" />
          </motion.div>
          <motion.h4
            className="mt-3 text-[40px] leading-10 font-semibold"
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            transition={{ delay: 0.1 }}
          >
            Utiliza nuestros bots inteligentes para crear tus prompt.
          </motion.h4>
          <motion.p
            className="mt-5 text-[20px]"
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            transition={{ delay: 0.1 }}
          >
            Escribe prompts, navega y accede a todas las herramientas en español, con soporte en tu
            idioma cuando lo necesites.
          </motion.p>
        </div>

        <div className="relative col-span-2 flex translate-y-20 flex-col items-center justify-center gap-4">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="flex w-full items-center gap-4"
              initial="hidden"
              whileInView="visible"
              custom={i}
              variants={i % 2 === 0 ? messageVariants : rightMessageVariants}
              transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
            >
              {i % 2 === 0 ? (
                <>
                  <div className="h-25 w-4/5 rounded-[40px] bg-[#FFFFFF4F] shadow-[0px_4px_12.7px_0px_rgba(177,177,177,0.25)]" />
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-800">
                    <BotMessageSquare className="h-6 w-6 text-zinc-50" />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-800">
                    <BotMessageSquare className="h-6 w-6 text-zinc-50" />
                  </div>
                  <div className="h-17 w-4/5 rounded-[40px] bg-[#FFFFFF4F] shadow-[0px_4px_12.7px_0px_rgba(177,177,177,0.25)]" />
                </>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  )
}
