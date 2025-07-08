'use client'

import React from 'react'
import { motion } from 'motion/react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const Faqs = ({ dict }) => {
  return (
    <section className="mx-auto my-10 grid max-w-[1730px] grid-cols-1 gap-30 rounded-[20px] px-10 pt-15 pb-50 pl-12 text-[#1D0D27] shadow-sm md:grid-cols-3 lg:mt-10 lg:mb-30">
      <div className="col-span-1">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-max rounded-[40px] border border-[#7A57D2] px-10 py-1.5 font-medium text-[#09090B] shadow-[0px_4px_12.7px_0px_rgba(177,177,177,0.25)]"
        >
          FAQ
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-4xl text-6xl font-medium text-[#09090B]"
        >
          Frequently Asked Questions
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 max-w-2xl text-xl font-normal text-[#09090B]"
        >
          Still have a question?
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-2.5 max-w-2xl text-xl font-normal text-[#7F7F7F]"
        >
          Contact us! We'll be happy to help you.
        </motion.p>
      </div>
      <motion.div
        className="col-span-2 pr-28"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-normal text-[#09090B]">
              Question 1
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-lg text-balance text-[#7F7F7F]">
              <p>
                Our flagship product combines cutting-edge technology with sleek design. Built with
                premium materials, it offers unparalleled performance and reliability.
              </p>
              <p>
                Key features include advanced processing capabilities, and an intuitive user
                interface designed for both beginners and experts.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-normal text-[#09090B]">
              Question 2
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-lg text-balance text-[#7F7F7F]">
              <p>
                Our flagship product combines cutting-edge technology with sleek design. Built with
                premium materials, it offers unparalleled performance and reliability.
              </p>
              <p>
                Key features include advanced processing capabilities, and an intuitive user
                interface designed for both beginners and experts.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-normal text-[#09090B]">
              Question 3
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-lg text-balance text-[#7F7F7F]">
              <p>
                Our flagship product combines cutting-edge technology with sleek design. Built with
                premium materials, it offers unparalleled performance and reliability.
              </p>
              <p>
                Key features include advanced processing capabilities, and an intuitive user
                interface designed for both beginners and experts.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </section>
  )
}
