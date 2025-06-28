'use client'

import { useRef } from 'react'
import { useInView, motion } from 'motion/react'
import { Diamond, Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export const Pricing = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { margin: '-100px' })
  return (
    <section
      ref={sectionRef}
      className="mx-auto my-10 max-w-[1730px] px-10 text-[#1D0D27] lg:mt-10 lg:mb-30"
    >
      <div className="flex w-full flex-col items-center justify-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="rounded-[40px] border border-[#7A57D2] px-10 py-1.5 font-medium text-[#09090B] shadow-[0px_4px_12.7px_0px_rgba(177,177,177,0.25)]"
        >
          Pricing
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-4xl text-6xl font-medium"
        >
          Simple, Flexible Pricing
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-2.5 max-w-2xl text-[20px] leading-6.5 text-black"
        >
          Pricing plans for businesses at every stage of growth.
        </motion.p>
      </div>
      <div className="mt-13 grid grid-cols-3 gap-11">
        <PricingCard
          isInView={isInView}
          title="Starter"
          description="Get started with artivo at no cost."
          price="Free"
          buttonText="Get Started"
          features={['Credits', 'Credits', 'Credits']}
        />

        <PricingCard
          isInView={isInView}
          title="Plus"
          description="For small teams and startups."
          price="$22"
          buttonText="Get Started"
          features={['Credits', 'Credits', 'Credits']}
          isPopular
        />
        <PricingCard
          isInView={isInView}
          title="Pro"
          description="For growing teams and businesses."
          price="$60"
          buttonText="Get Started"
          features={['Credits', 'Credits', 'Credits']}
        />
      </div>
    </section>
  )
}

const PricingCard = ({ title, description, price, buttonText, features, isPopular }) => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { margin: '-100px' })
  return (
    <motion.div
      ref={sectionRef}
      className="relative max-w-[480px] rounded-[20px] border p-3 shadow-[0px_1px_12.7px_-7px_rgba(0,0,0,0.25)]"
      initial={{ opacity: 0, x: -20, scale: 1.05 }}
      animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className={cn(isPopular ? 'bg-[#F7F6F7]' : 'bg-white', 'mb-6 rounded-[15px] px-4 py-3')}>
        <div className="flex items-center">
          <Star className="h-5.5 w-5.5 fill-[#8AB0FE] text-[#8AB0FE]" />
          <span className="ml-2 text-[20px] font-semibold text-[#09090B]">{title}</span>
          {isPopular && (
            <span className="ml-3 rounded-[50px] bg-[#1B0C26] px-3 text-[15px] text-[#F7F6F7]">
              Popular
            </span>
          )}
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
        <button
          className={cn(
            'mt-6 w-full cursor-pointer rounded-[10px] border py-2 text-[20px] leading-8 transition-all',
            isPopular
              ? 'bg-[#09090B] text-white hover:bg-[#1B0C26] hover:text-white'
              : 'bg-white text-[#09090B] hover:bg-[#F5F5F5] hover:text-zinc-800',
          )}
        >
          {buttonText}
        </button>

        <div className="mt-9 text-lg font-light text-[#26172F]">
          <p>What&apos;s included:</p>
          <ul className="mt-3 list-none space-y-1 pl-0">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <Diamond className="h-4 w-4 fill-[#1B0C26] text-[#1B0C26]" />
                <span className="text-[#36283E]">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}
