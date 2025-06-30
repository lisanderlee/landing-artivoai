'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export const MarqueeText = () => {
  // Duplicate the content multiple times for seamless loop
  const marqueeContent = Array(8)
    .fill(null)
    .map((_, index) => (
      <div key={index} className="flex items-center whitespace-nowrap">
        <span className="text-[120px] font-semibold text-gray-900">Request a demo</span>
        <div className="mx-20 flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-sm">
          <Image
            src="/images/logo-icon-dark.svg"
            alt="Logo"
            width={112}
            height={112}
            className="h-9 w-9 object-cover"
          />
        </div>
      </div>
    ))

  return (
    <div className="mb-16 w-full overflow-hidden">
      <motion.div
        className="flex"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          },
        }}
      >
        {marqueeContent}
      </motion.div>
    </div>
  )
}
