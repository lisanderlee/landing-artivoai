'use client'

import { motion } from 'motion/react'
import { Diamond, Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export const Pricing = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.2, 0.8, 0.4, 1],
      },
    }),
  }

  return (
    <section className="mx-auto my-10 max-w-[1730px] px-10 text-[#1D0D27] lg:mt-10 lg:mb-30">
      <div className="flex w-full flex-col items-center justify-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ margin: '0px 0px -100px 0px' }}
          className="rounded-[40px] border border-[#7A57D2] px-10 py-1.5 font-medium text-[#09090B] shadow-[0px_4px_12.7px_0px_rgba(177,177,177,0.25)]"
        >
          Pricing
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ margin: '0px 0px -100px 0px' }}
          className="mt-6 max-w-4xl text-6xl font-medium"
        >
          Simple, Flexible Pricing
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ margin: '0px 0px -100px 0px' }}
          className="mt-2.5 max-w-2xl text-[20px] leading-6.5 text-black"
        >
          Pricing plans for businesses at every stage of growth.
        </motion.p>
      </div>
      <div className="mt-13 grid grid-cols-3 gap-11">
        <PricingCard
          title="Starter"
          description="Get started with artivo at no cost."
          price="Free"
          buttonText="Get Started"
          features={['Credits', 'Credits', 'Credits']}
          variants={cardVariants}
        />

        <PricingCard
          title="Plus"
          description="For small teams and startups."
          price="$22"
          buttonText="Get Started"
          features={['Credits', 'Credits', 'Credits']}
          isPopular
          variants={cardVariants}
        />

        <PricingCard
          title="Pro"
          description="For growing teams and businesses."
          price="$60"
          buttonText="Get Started"
          features={['Credits', 'Credits', 'Credits']}
          variants={cardVariants}
        />
      </div>

      {/* Enterprise section */}

      <motion.div
        className="mt-10 flex w-full items-end justify-between rounded-[20px] px-9 py-6 shadow-[0px_1px_12.7px_-7px_rgba(0,0,0,0.25)]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
      >
        <div className="flex gap-22">
          <motion.div className="max-w-84" variants={itemVariants} custom={0}>
            <h6 className="flex items-center">
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Star className="h-5.5 w-5.5 fill-[#8AB0FE] text-[#8AB0FE]" />
              </motion.span>
              <span className="ml-2 text-5xl font-semibold text-[#09090B]">Enterprise</span>
            </h6>
            <motion.p
              className="mt-6 text-lg leading-8 font-light text-[#575757]"
              variants={itemVariants}
              custom={1}
            >
              No pierdas tu ventaja competitiva. Trae a tu compania al proximo siglo con la ayuda de
              Artivo.
            </motion.p>
          </motion.div>

          <motion.div
            className="text-lg font-light text-[#26172F]"
            variants={itemVariants}
            custom={2}
          >
            <p>What&apos;s included:</p>
            <ul className="mt-3 list-none space-y-1 pl-0">
              {[0, 1, 2].map((i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-2"
                  variants={itemVariants}
                  custom={3 + i}
                >
                  <Diamond className="h-4 w-4 fill-[#1B0C26] text-[#1B0C26]" />
                  <span className="text-[#36283E]">Credits</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="flex h-full w-full flex-1 items-stretch justify-end"
          variants={itemVariants}
          custom={6}
        >
          <motion.button
            className="cursor-pointer rounded-[10px] border px-10 py-2 text-[20px] leading-8 transition-all hover:bg-[#1B0C25] hover:text-zinc-50"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

const PricingCard = ({ title, description, price, buttonText, features, isPopular, variants }) => {
  return (
    <motion.div
      className="relative max-w-[480px] rounded-[20px] border p-3 shadow-[0px_1px_12.7px_-7px_rgba(0,0,0,0.25)]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={variants}
    >
      {isPopular && (
        <motion.div
          className="absolute -top-3 -right-3 z-10 rounded-[50px] bg-[#1B0C26] px-3 text-[15px] text-[#F7F6F7]"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: 'spring', delay: 0.2 }}
          viewport={{ once: true }}
        >
          Popular
        </motion.div>
      )}

      <div
        className={
          isPopular
            ? 'mb-6 rounded-[15px] bg-[#F7F6F7] px-4 py-3'
            : 'mb-6 rounded-[15px] bg-white px-4 py-3'
        }
      >
        <div className="flex items-center">
          <motion.span
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Star className="h-5.5 w-5.5 fill-[#8AB0FE] text-[#8AB0FE]" />
          </motion.span>
          <span className="ml-2 text-[20px] font-semibold text-[#09090B]">{title}</span>
        </div>
        <p className="text-lg leading-8 font-light text-[#575757]">{description}</p>
      </div>

      <div className="px-4 pb-30">
        <h6 className="mt-8 text-5xl font-medium text-[#09090B]">
          {price}
          {price !== 'Free' && (
            <span className="text-[17px] font-light text-[#26172F]">/month</span>
          )}
        </h6>
        <motion.button
          className={`mt-6 w-full cursor-pointer rounded-[10px] border py-2 text-[20px] leading-8 transition-all ${
            isPopular
              ? 'bg-[#09090B] text-white hover:bg-[#F5F5F5] hover:text-zinc-800'
              : 'bg-white text-[#09090B] hover:bg-[#1B0C26] hover:text-zinc-50'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {buttonText}
        </motion.button>

        <div className="mt-9 text-lg font-light text-[#26172F]">
          <p>What&apos;s included:</p>
          <ul className="mt-3 list-none space-y-1 pl-0">
            {features.map((feature, i) => (
              <motion.li
                key={i}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                viewport={{ once: true }}
              >
                <Diamond className="h-4 w-4 fill-[#1B0C26] text-[#1B0C26]" />
                <span className="text-[#36283E]">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}
