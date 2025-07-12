'use client'

import { PlugZap, RefreshCcwDot, Shrink, Shuffle } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'motion/react'
import React, { useEffect, useRef, useState } from 'react'

export const RoadMap = ({ dict }) => {
  return (
    <section className="mx-auto my-10 max-w-[1730px] px-10 text-[#1D0D27] lg:mt-10 lg:mb-30">
      <div className="flex w-full flex-col items-center justify-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-[40px] border border-[#7A57D2] px-10 py-1.5 font-medium text-[#09090B] shadow-[0px_4px_12.7px_0px_rgba(177,177,177,0.25)]"
        >
          UNA INTEGRACION CON TODO EL AI
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-4xl text-6xl font-medium"
        >
          API para empresas super poderasa.
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-2.5 max-w-2xl text-[20px] leading-6.5 text-black"
        >
          Integra una sola ves y deja que artivo te traiga los mejores modelso sin tener que hacer
          nada.
        </motion.p>
      </div>

      <div className="relative mt-12 flex h-[655px] w-full items-center justify-between gap-7 rounded-[20px] bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat px-11 py-8">
        <div className="absolute inset-0 rounded-[20px] bg-white/10 backdrop-blur-[89px]" />
        <figure className="relative grid h-full flex-1 grid-cols-16 grid-rows-12">
          <div className="relative col-start-5 col-end-13 row-start-1 row-end-3 grid h-full w-full grid-cols-8 grid-rows-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="h-full w-full rounded-[20px] bg-white shadow-sm"
              style={{
                gridColumnStart: 1,
                gridColumnEnd: 4,
                gridRowStart: 1,
                gridRowEnd: 3,
              }}
            />
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.4 }}
              className="h-full w-full rounded-[20px] bg-white shadow-sm"
              style={{
                gridColumnStart: 6,
                gridColumnEnd: 9,
                gridRowStart: 1,
                gridRowEnd: 3,
              }}
            />
            <motion.div
              className="col-start-4 col-end-6 row-start-1 row-end-3 flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <svg className="relative h-full w-full" viewBox="0 0 71 31" fill="none">
                <path d="M2 13.5C0.89543 13.5 0 14.3954 0 15.5C0 16.6046 0.89543 17.5 2 17.5V13.5ZM69.9142 16.9142C70.6953 16.1332 70.6953 14.8668 69.9142 14.0858L57.1863 1.35786C56.4052 0.576816 55.1389 0.576816 54.3579 1.35786C53.5768 2.13891 53.5768 3.40524 54.3579 4.18629L65.6716 15.5L54.3579 26.8137C53.5768 27.5948 53.5768 28.8611 54.3579 29.6421C55.1389 30.4232 56.4052 30.4232 57.1863 29.6421L69.9142 16.9142ZM2 15.5V17.5H68.5V15.5V13.5H2V15.5Z" />
                <motion.path
                  d="M2 13.5C0.89543 13.5 0 14.3954 0 15.5C0 16.6046 0.89543 17.5 2 17.5V13.5ZM69.9142 16.9142C70.6953 16.1332 70.6953 14.8668 69.9142 14.0858L57.1863 1.35786C56.4052 0.576816 55.1389 0.576816 54.3579 1.35786C53.5768 2.13891 53.5768 3.40524 54.3579 4.18629L65.6716 15.5L54.3579 26.8137C53.5768 27.5948 53.5768 28.8611 54.3579 29.6421C55.1389 30.4232 56.4052 30.4232 57.1863 29.6421L69.9142 16.9142ZM2 15.5V17.5H68.5V15.5V13.5H2V15.5Z"
                  fill="url(#lineGradient)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: [1, 1, 0, 0] }}
                  strokeDasharray={'0 1'}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                    ease: 'easeInOut',
                    times: [0, 0.1, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0073E6" />
                    <stop offset="100%" stopColor="#0073E600" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>
          <motion.div
            className="col-start-13 col-end-17 row-start-2 row-end-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <svg viewBox="0 0 152 234" fill="none" className="h-full w-full">
              <motion.path
                d="M2 0.5C0.89543 0.5 0 1.39543 0 2.5C0 3.60457 0.89543 4.5 2 4.5V0.5ZM150.914 219.914C151.695 219.133 151.695 217.867 150.914 217.086L138.186 204.358C137.405 203.577 136.139 203.577 135.358 204.358C134.577 205.139 134.577 206.405 135.358 207.186L146.672 218.5L135.358 229.814C134.577 230.595 134.577 231.861 135.358 232.642C136.139 233.423 137.405 233.423 138.186 232.642L150.914 219.914ZM2 2.5V4.5H52V2.5V0.5H2V2.5ZM76 26.5H74V194.5H76H78V26.5H76ZM100 218.5V220.5H149.5V218.5V216.5H100V218.5ZM76 194.5H74C74 208.859 85.6406 220.5 100 220.5V218.5V216.5C87.8497 216.5 78 206.65 78 194.5H76ZM52 2.5V4.5C64.1503 4.5 74 14.3497 74 26.5H76H78C78 12.1406 66.3594 0.5 52 0.5V2.5Z"
                fill="url(#lineGradient)"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{
                  pathLength: 1,
                  opacity: [0, 1, 1, 0],
                }}
                strokeDasharray={'0 1'}
                transition={{
                  duration: 0.4,
                  delay: 0.6,
                  ease: 'easeInOut',
                  times: [0, 0.1, 0.9, 1],
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              />
            </svg>
          </motion.div>

          {/* Second box to center Connector */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 * 0.1 }}
            className="h-full w-full rounded-[20px] bg-white shadow-sm"
            style={{
              gridColumnStart: 2,
              gridColumnEnd: 5,
              gridRowStart: 4,
              gridRowEnd: 6,
            }}
          />

          <div className="col-start-5 col-end-17 row-start-4 row-end-9">
            <svg
              viewBox="0 0 516 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
            >
              <path
                d="M2 0.5C0.89543 0.5 0 1.39543 0 2.5C0 3.60457 0.89543 4.5 2 4.5V0.5ZM514.914 85.9142C515.695 85.1332 515.695 83.8668 514.914 83.0858L502.186 70.3579C501.405 69.5768 500.139 69.5768 499.358 70.3579C498.577 71.1389 498.577 72.4052 499.358 73.1863L510.672 84.5L499.358 95.8137C498.577 96.5948 498.577 97.8611 499.358 98.6421C500.139 99.4232 501.405 99.4232 502.186 98.6421L514.914 85.9142ZM2 2.5V4.5H234V2.5V0.5H2V2.5ZM258 26.5H256V60.5H258H260V26.5H258ZM282 84.5V86.5H513.5V84.5V82.5H282V84.5ZM258 60.5H256C256 74.8594 267.641 86.5 282 86.5V84.5V82.5C269.85 82.5 260 72.6503 260 60.5H258ZM234 2.5V4.5C246.15 4.5 256 14.3497 256 26.5H258H260C260 12.1406 248.359 0.5 234 0.5V2.5Z"
                fill="white"
                fillOpacity="0.61"
              />
            </svg>
          </div>

          {/* third box to center Connector */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 + 2 * 0.1 }}
            className="h-full w-full rounded-[20px] bg-white shadow-sm"
            style={{
              gridColumnStart: 4,
              gridColumnEnd: 9,
              gridRowStart: 7,
              gridRowEnd: 9,
            }}
          />

          <div className="col-start-9 col-end-17 row-start-9 row-end-7">
            <svg
              className="h-full"
              viewBox="0 0 364 113"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 109C0.89543 109 0 109.895 0 111C0 112.105 0.89543 113 2 113V109ZM362.914 16.9142C363.695 16.1332 363.695 14.8668 362.914 14.0858L350.186 1.35786C349.405 0.576816 348.139 0.576816 347.358 1.35786C346.577 2.13891 346.577 3.40524 347.358 4.18629L358.672 15.5L347.358 26.8137C346.577 27.5948 346.577 28.8611 347.358 29.6421C348.139 30.4232 349.405 30.4232 350.186 29.6421L362.914 16.9142ZM2 111V113H158V111V109H2V111ZM182 87H184V39.5H182H180V87H182ZM206 15.5V17.5H361.5V15.5V13.5H206V15.5ZM182 39.5H184C184 27.3497 193.85 17.5 206 17.5V15.5V13.5C191.641 13.5 180 25.1406 180 39.5H182ZM158 111V113C172.359 113 184 101.359 184 87H182H180C180 99.1503 170.15 109 158 109V111Z"
                fill="white"
                fillOpacity="0.61"
              />
            </svg>
          </div>

          {/* last two boxes */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="h-full w-full rounded-[20px] bg-white shadow-sm"
            style={{
              gridColumnStart: 6,
              gridColumnEnd: 9,
              gridRowStart: 10,
              gridRowEnd: 12,
            }}
          />
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="h-full w-full rounded-[20px] bg-white shadow-sm"
            style={{
              gridColumnStart: 11,
              gridColumnEnd: 14,
              gridRowStart: 10,
              gridRowEnd: 12,
            }}
          />
          {/* lastBox2 to center Connector */}
          <div className="col-start-13 col-end-17 row-start-11 row-end-7">
            <svg
              className="h-full w-full"
              viewBox="0 0 180 282"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 278C0.89543 278 0 278.895 0 280C0 281.105 0.89543 282 2 282V278ZM178.914 16.9142C179.695 16.1332 179.695 14.8668 178.914 14.0858L166.186 1.35786C165.405 0.576816 164.139 0.576816 163.358 1.35786C162.577 2.13891 162.577 3.40524 163.358 4.18629L174.672 15.5L163.358 26.8137C162.577 27.5948 162.577 28.8611 163.358 29.6421C164.139 30.4232 165.405 30.4232 166.186 29.6421L178.914 16.9142ZM2 280V282H66V280V278H2V280ZM90 256H92V39.5H90H88V256H90ZM114 15.5V17.5H177.5V15.5V13.5H114V15.5ZM90 39.5H92C92 27.3497 101.85 17.5 114 17.5V15.5V13.5C99.6406 13.5 88 25.1406 88 39.5H90ZM66 280V282C80.3594 282 92 270.359 92 256H90H88C88 268.15 78.1503 278 66 278V280Z"
                fill="white"
                fillOpacity="0.61"
              />
            </svg>
          </div>
        </figure>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-24 w-24">
          <Image
            src="/images/logo-icon-dark.svg"
            alt="logo"
            width={100}
            height={100}
            className="relative h-full w-full"
          />
        </motion.div>
        <div className="relative grid h-full flex-1 grid-cols-24 grid-rows-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="h-full w-full rounded-[20px] bg-white shadow-sm"
            style={{
              gridColumnStart: 5,
              gridColumnEnd: 9,
              gridRowStart: 1,
              gridRowEnd: 4,
            }}
          />
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="h-full w-full rounded-[20px] bg-white shadow-sm"
            style={{
              gridColumnStart: 10,
              gridColumnEnd: 14,
              gridRowStart: 1,
              gridRowEnd: 4,
            }}
          />
          {/* second row */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 + 1 * 0.1 }}
            className="h-full w-full rounded-[20px] bg-white shadow-sm"
            style={{
              gridColumnStart: 8,
              gridColumnEnd: 12,
              gridRowStart: 5,
              gridRowEnd: 8,
            }}
          />
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 + 1 * 0.1 }}
            className="h-full w-full rounded-[20px] bg-white shadow-sm"
            style={{
              gridColumnStart: 13,
              gridColumnEnd: 17,
              gridRowStart: 5,
              gridRowEnd: 8,
            }}
          />
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 + 1 * 0.1 }}
            className="-mr-4 h-full w-full rounded-[20px] bg-white shadow-sm"
            style={{
              gridColumnStart: 18,
              gridColumnEnd: 22,
              gridRowStart: 5,
              gridRowEnd: 8,
            }}
          />

          {/* third row */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 + 2 * 0.1 }}
            className="h-full w-full rounded-[20px] bg-white shadow-sm"
            style={{
              gridColumnStart: 9,
              gridColumnEnd: 13,
              gridRowStart: 9,
              gridRowEnd: 12,
            }}
          />
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 + 2 * 0.1 }}
            className="h-full w-full rounded-[20px] bg-white shadow-sm"
            style={{
              gridColumnStart: 14,
              gridColumnEnd: 18,
              gridRowStart: 9,
              gridRowEnd: 12,
            }}
          />

          <svg
            className="col-start-1 col-end-4 row-start-7 row-end-2 h-full"
            viewBox="0 0 235 279"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 274.5C0.89543 274.5 0 275.395 0 276.5C0 277.605 0.89543 278.5 2 278.5V274.5ZM233.914 16.4142C234.695 15.6332 234.695 14.3668 233.914 13.5858L221.186 0.857864C220.405 0.0768156 219.139 0.0768156 218.358 0.857864C217.577 1.63891 217.577 2.90524 218.358 3.68629L229.672 15L218.358 26.3137C217.577 27.0948 217.577 28.3611 218.358 29.1421C219.139 29.9232 220.405 29.9232 221.186 29.1421L233.914 16.4142ZM2 276.5V278.5H93.5V276.5V274.5H2V276.5ZM117.5 252.5H119.5V39H117.5H115.5V252.5H117.5ZM141.5 15V17H232.5V15V13H141.5V15ZM117.5 39H119.5C119.5 26.8497 129.35 17 141.5 17V15V13C127.141 13 115.5 24.6406 115.5 39H117.5ZM93.5 276.5V278.5C107.859 278.5 119.5 266.859 119.5 252.5H117.5H115.5C115.5 264.65 105.65 274.5 93.5 274.5V276.5Z"
              fill="white"
              fillOpacity="0.61"
            />
          </svg>
          <div className="col-start-1 col-end-8 row-start-7 row-end-7 flex h-full w-full items-start">
            <svg viewBox="0 0 229 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2 13.5C0.89543 13.5 0 14.3954 0 15.5C0 16.6046 0.89543 17.5 2 17.5V13.5ZM227.914 16.9142C228.695 16.1332 228.695 14.8668 227.914 14.0858L215.186 1.35786C214.405 0.576816 213.139 0.576816 212.358 1.35786C211.577 2.13891 211.577 3.40524 212.358 4.18629L223.672 15.5L212.358 26.8137C211.577 27.5948 211.577 28.8611 212.358 29.6421C213.139 30.4232 214.405 30.4232 215.186 29.6421L227.914 16.9142ZM2 15.5V17.5H226.5V15.5V13.5H2V15.5Z"
                fill="white"
                fillOpacity="0.61"
              />
            </svg>
          </div>

          <svg
            viewBox="0 0 317 265"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="col-start-1 col-end-11 row-start-7 row-end-11 h-full"
          >
            <path
              d="M2 0.5C0.89543 0.5 0 1.39543 0 2.5C0 3.60457 0.89543 4.5 2 4.5V0.5ZM315.914 251.414C316.695 250.633 316.695 249.367 315.914 248.586L303.186 235.858C302.405 235.077 301.139 235.077 300.358 235.858C299.577 236.639 299.577 237.905 300.358 238.686L311.672 250L300.358 261.314C299.577 262.095 299.577 263.361 300.358 264.142C301.139 264.923 302.405 264.923 303.186 264.142L315.914 251.414ZM2 2.5V4.5H134.5V2.5V0.5H2V2.5ZM158.5 26.5H156.5V226H158.5H160.5V26.5H158.5ZM182.5 250V252H314.5V250V248H182.5V250ZM158.5 226H156.5C156.5 240.359 168.141 252 182.5 252V250V248C170.35 248 160.5 238.15 160.5 226H158.5ZM134.5 2.5V4.5C146.65 4.5 156.5 14.3497 156.5 26.5H158.5H160.5C160.5 12.1406 148.859 0.5 134.5 0.5V2.5Z"
              fill="white"
              fillOpacity="0.61"
            />
          </svg>
        </div>
      </div>
      <motion.div
        className="mt-5 flex items-center justify-around gap-30 text-2xl text-zinc-950"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
      >
        <FeatureItem>
          <PlugZap className="h-6 w-6" />
          Una integracion.
        </FeatureItem>
        <FeatureItem>
          <Shrink className="h-6 w-6" />
          Todos los modelos.
        </FeatureItem>
        <FeatureItem>
          <RefreshCcwDot className="h-6 w-6" />
          Procesamiento en lote.
        </FeatureItem>
        <FeatureItem>
          <Shuffle className="h-6 w-6" />
          Workflows personalizados.
        </FeatureItem>
      </motion.div>
    </section>
  )
}

const DynamicSVGPath = () => {
  const element1Ref = useRef(null)
  const element2Ref = useRef(null)
  const [pathData, setPathData] = useState('')
  const [gradientId] = useState(`gradient-${Math.random().toString(36).substr(2, 9)}`)

  useEffect(() => {
    const updatePath = () => {
      if (element1Ref.current && element2Ref.current) {
        const rect1 = element1Ref.current.getBoundingClientRect()
        const rect2 = element2Ref.current.getBoundingClientRect()

        // Calculate center points of both elements
        const startX = rect1.left + rect1.width / 2
        const startY = rect1.top + rect1.height / 2
        const endX = rect2.left + rect2.width / 2
        const endY = rect2.top + rect2.height / 2

        // Create a straight line path
        const data = `M ${startX} ${startY} L ${endX} ${endY}`
        setPathData(data)
      }
    }

    // Initial update
    updatePath()

    // Update on resize
    window.addEventListener('resize', updatePath)
    return () => window.removeEventListener('resize', updatePath)
  }, [])

  return (
    <div className="relative col-start-5 col-end-13 row-start-1 row-end-3 grid h-full w-full grid-cols-8 grid-rows-2">
      {/* Your elements */}
      <motion.div
        ref={element1Ref}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="h-full w-full rounded-[20px] bg-white shadow-sm"
        style={{
          gridColumnStart: 1,
          gridColumnEnd: 4,
          gridRowStart: 1,
          gridRowEnd: 3,
        }}
      />
      <motion.div
        ref={element2Ref}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="h-full w-full rounded-[20px] bg-white shadow-sm"
        style={{
          gridColumnStart: 6,
          gridColumnEnd: 9,
          gridRowStart: 1,
          gridRowEnd: 3,
        }}
      />

      {/* SVG Path */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 5,
        }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
        <motion.path
          d={pathData}
          stroke={`url(#${gradientId})`}
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        />
      </svg>
    </div>
  )
}

// const AnimatedBox = ({ isInView, x, y, width = 120, height = 120, index }) => (
//   <motion.div
//     initial={{ opacity: 0, x: -50 }}
//     animate={isInView ? { opacity: 1, x: 0 } : {}}
//     transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
//     className={`absolute rounded-[20px] bg-white shadow-sm`}
//     style={{
//       width: `${width}px`,
//       height: `${height}px`,
//       left: `${x}px`,
//       top: `${y}px`,
//     }}
//   />
// )

const Connector = ({ path, from, to, rightSide = false }) => (
  <motion.svg
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: 1 }}
    className={`absolute ${rightSide ? 'right-0' : 'left-0'}`}
    style={{
      top: `${from.y}px`,
      left: `${from.x}px`,
      width: `${Math.abs(to.x - from.x)}px`,
      height: `${Math.abs(to.y - from.y)}px`,
    }}
  >
    <path d={`M0,0 ${path}`} stroke="#3B82F6" strokeWidth="2" fill="none" strokeDasharray="0 1" />
  </motion.svg>
)

const OutputBox = () => (
  <motion.div className="h-24 w-40 rounded-lg bg-blue-100 shadow-md" whileHover={{ scale: 1.05 }} />
)

const LShapedConnector = ({ isInView }) => (
  <svg className="pointer-events-none absolute z-5 h-full w-full">
    <motion.path
      d="M2 0.5C0.89543 0.5 0 1.39543 0 2.5C0 3.60457 0.89543 4.5 2 4.5V0.5ZM150.914 219.914C151.695 219.133 151.695 217.867 150.914 217.086L138.186 204.358C137.405 203.577 136.139 203.577 135.358 204.358C134.577 205.139 134.577 206.405 135.358 207.186L146.672 218.5L135.358 229.814C134.577 230.595 134.577 231.861 135.358 232.642C136.139 233.423 137.405 233.423 138.186 232.642L150.914 219.914ZM2 2.5V4.5H52V2.5V0.5H2V2.5ZM76 26.5H74V194.5H76H78V26.5H76ZM100 218.5V220.5H149.5V218.5V216.5H100V218.5ZM76 194.5H74C74 208.859 85.6406 220.5 100 220.5V218.5V216.5C87.8497 216.5 78 206.65 78 194.5H76ZM52 2.5V4.5C64.1503 4.5 74 14.3497 74 26.5H76H78C78 12.1406 66.3594 0.5 52 0.5V2.5Z"
      stroke="rgba(255,255,255,0.61)"
      strokeWidth="3"
      fill="none"
      markerEnd="url(#arrowhead)"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
      transition={{ duration: 1.5, delay: 1.2 }}
    />
  </svg>
)

const LShapedConnectors = ({ isInView }) => (
  <svg className="pointer-events-none absolute inset-0 z-5 h-full w-full">
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#3B82F6" />
      </marker>
      <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
        <stop offset="50%" stopColor="#3B82F6" stopOpacity="1" />
        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
      </linearGradient>
    </defs>

    {/* Top Input Connector - Similar to first SVG */}
    <motion.path
      d="M2 0.5C0.89543 0.5 0 1.39543 0 2.5C0 3.60457 0.89543 4.5 2 4.5V0.5ZM150.914 219.914C151.695 219.133 151.695 217.867 150.914 217.086L138.186 204.358C137.405 203.577 136.139 203.577 135.358 204.358C134.577 205.139 134.577 206.405 135.358 207.186L146.672 218.5L135.358 229.814C134.577 230.595 134.577 231.861 135.358 232.642C136.139 233.423 137.405 233.423 138.186 232.642L150.914 219.914ZM2 2.5V4.5H52V2.5V0.5H2V2.5ZM76 26.5H74V194.5H76H78V26.5H76ZM100 218.5V220.5H149.5V218.5V216.5H100V218.5ZM76 194.5H74C74 208.859 85.6406 220.5 100 220.5V218.5V216.5C87.8497 216.5 78 206.65 78 194.5H76ZM52 2.5V4.5C64.1503 4.5 74 14.3497 74 26.5H76H78C78 12.1406 66.3594 0.5 52 0.5V2.5Z"
      stroke="rgba(255,255,255,0.61)"
      strokeWidth="3"
      fill="none"
      markerEnd="url(#arrowhead)"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
      transition={{ duration: 1.5, delay: 1.2 }}
    />

    {/* Middle Left Input Connector - Similar to second SVG */}
    <motion.path
      d="M 160 315 L 250 315 Q 260 315 260 325 L 260 340 Q 260 350 270 350 L 350 350"
      stroke="rgba(255,255,255,0.61)"
      strokeWidth="3"
      fill="none"
      markerEnd="url(#arrowhead)"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
      transition={{ duration: 1.5, delay: 1.4 }}
    />

    {/* Bottom Left Input Connector - Similar to third SVG */}
    <motion.path
      d="M 175 525 L 270 525 Q 280 525 280 515 L 280 380 Q 280 370 290 370 L 350 370"
      stroke="rgba(255,255,255,0.61)"
      strokeWidth="3"
      fill="none"
      markerEnd="url(#arrowhead)"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
      transition={{ duration: 1.5, delay: 1.6 }}
    />

    {/* Bottom Input Connector - Similar to fourth SVG */}
    <motion.path
      d="M 240 595 L 300 595 Q 310 595 310 585 L 310 390 Q 310 380 320 380 L 350 380"
      stroke="rgba(255,255,255,0.61)"
      strokeWidth="3"
      fill="none"
      markerEnd="url(#arrowhead)"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
      transition={{ duration: 1.5, delay: 1.8 }}
    />

    {/* Center to Output Connectors */}
    {[
      { from: { x: 415, y: 330 }, to: { x: 550, y: 300 } },
      { from: { x: 415, y: 350 }, to: { x: 550, y: 350 } },
      { from: { x: 415, y: 370 }, to: { x: 550, y: 400 } },
    ].map((connector, index) => (
      <motion.path
        key={`output-${index}`}
        d={`M ${connector.from.x} ${connector.from.y} L ${connector.to.x} ${connector.to.y}`}
        stroke="#8B5CF6"
        strokeWidth="3"
        fill="none"
        markerEnd="url(#arrowhead)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 1.5, delay: 2.0 + index * 0.2 }}
      />
    ))}

    {/* Animated Flow Particles */}
    {/* Top connector flow */}
    <motion.circle
      r="4"
      fill="#3B82F6"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: [0, 1, 0] } : {}}
      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 2.5 }}
    >
      <animateMotion dur="3s" repeatCount="indefinite" begin="2.5s">
        <mpath href="#flow-path-1" />
      </animateMotion>
    </motion.circle>
    <path
      id="flow-path-1"
      d="M 180 105 L 280 105 Q 290 105 290 115 L 290 320 Q 290 330 300 330 L 350 330"
      fill="none"
      opacity="0"
    />

    {/* Middle connector flow */}
    <motion.circle
      r="4"
      fill="#3B82F6"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: [0, 1, 0] } : {}}
      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 3 }}
    >
      <animateMotion dur="3s" repeatCount="indefinite" begin="3s">
        <mpath href="#flow-path-2" />
      </animateMotion>
    </motion.circle>
    <path
      id="flow-path-2"
      d="M 160 315 L 250 315 Q 260 315 260 325 L 260 340 Q 260 350 270 350 L 350 350"
      fill="none"
      opacity="0"
    />

    {/* Output flows */}
    {[0, 1, 2].map((index) => (
      <motion.circle
        key={`output-flow-${index}`}
        r="4"
        fill="#8B5CF6"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: [0, 1, 0] } : {}}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 4 + index * 0.3 }}
      >
        <animateMotion dur="2s" repeatCount="indefinite" begin={`${4 + index * 0.3}s`}>
          <mpath href={`#output-flow-path-${index}`} />
        </animateMotion>
      </motion.circle>
    ))}

    {/* Output flow paths */}
    <path id="output-flow-path-0" d="M 415 330 L 550 300" fill="none" opacity="0" />
    <path id="output-flow-path-1" d="M 415 350 L 550 350" fill="none" opacity="0" />
    <path id="output-flow-path-2" d="M 415 370 L 550 400" fill="none" opacity="0" />
  </svg>
)

const FeatureItem = ({ children }) => {
  return (
    <motion.div
      className="my-4 flex items-center gap-3.5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
    >
      <motion.span
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="flex items-center gap-3.5"
      >
        {children}
      </motion.span>
    </motion.div>
  )
}
