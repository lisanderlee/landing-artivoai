'use client'

import { PlugZap, RefreshCcwDot, Shrink, Shuffle } from 'lucide-react'
import Image from 'next/image'
import { motion, useInView } from 'motion/react'
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
              transition={{ duration: 0.6 }}
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
              transition={{ duration: 0.6, delay: 1.4 }}
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
              transition={{ delay: 0.6 }}
            >
              <motion.svg
                width="71"
                height="31"
                viewBox="0 0 71 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative"
                initial={{ scaleX: 0, transformOrigin: 'left center' }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <path
                  d="M2 13.5C0.89543 13.5 0 14.3954 0 15.5C0 16.6046 0.89543 17.5 2 17.5V13.5ZM69.9142 16.9142C70.6953 16.1332 70.6953 14.8668 69.9142 14.0858L57.1863 1.35786C56.4052 0.576816 55.1389 0.576816 54.3579 1.35786C53.5768 2.13891 53.5768 3.40524 54.3579 4.18629L65.6716 15.5L54.3579 26.8137C53.5768 27.5948 53.5768 28.8611 54.3579 29.6421C55.1389 30.4232 56.4052 30.4232 57.1863 29.6421L69.9142 16.9142ZM2 15.5V17.5H68.5V15.5V13.5H2V15.5Z"
                  fill="white"
                  className="opacity-30"
                />
                <motion.path
                  d="M2 13.5C0.89543 13.5 0 14.3954 0 15.5C0 16.6046 0.89543 17.5 2 17.5V13.5ZM69.9142 16.9142C70.6953 16.1332 70.6953 14.8668 69.9142 14.0858L57.1863 1.35786C56.4052 0.576816 55.1389 0.576816 54.3579 1.35786C53.5768 2.13891 53.5768 3.40524 54.3579 4.18629L65.6716 15.5L54.3579 26.8137C53.5768 27.5948 53.5768 28.8611 54.3579 29.6421C55.1389 30.4232 56.4052 30.4232 57.1863 29.6421L69.9142 16.9142ZM2 15.5V17.5H68.5V15.5V13.5H2V15.5Z"
                  fill="url(#lineGradient)"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  strokeDasharray={'0 1'}
                  transition={{
                    duration: 1.2,
                    delay: 0.8,
                    ease: 'easeInOut',
                  }}
                />
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <motion.stop
                      offset="0%"
                      stopColor="#0073E6"
                      whileInView={{ offset: ['-100%', '100%'] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: 'loop',
                        repeatDelay: 2,
                        ease: 'linear',
                      }}
                    />
                    <motion.stop
                      offset="100%"
                      stopColor="#0073E600"
                      whileInView={{ offset: ['0%', '200%'] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'linear',
                        repeatDelay: 2,
                      }}
                    />
                  </linearGradient>
                </defs>
              </motion.svg>
            </motion.div>
          </div>
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
              gridColumnStart: 11,
              gridColumnEnd: 15,
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
              gridColumnStart: 16,
              gridColumnEnd: 20,
              gridRowStart: 9,
              gridRowEnd: 12,
            }}
          />
        </div>

        {/* <div className="absolute top-7 left-[10%] h-full w-1/3">
          <div className="relative h-30">
            <AnimatedBox x={160} y={0} isInView={isInView} index={0} />
            <AnimatedBox x={360} y={0} isInView={isInView} index={1} />
          </div>

          <div className="relative mt-5 h-30">
            <AnimatedBox x={0} y={0} isInView={isInView} index={0} />
            <Connector
              path="M120,60 Q160,120 200,180"
              from={{ x: 120, y: 60 }}
              to={{ x: 200, y: 180 }}
            />
          </div>
          <div className="relative mt-[57px] h-[112px]">
            <AnimatedBox x={60} y={0} width={228} height={112} isInView={isInView} index={0} />
            <Connector
              path="M114,56 Q180,150 250,220"
              from={{ x: 114, y: 56 }}
              to={{ x: 250, y: 220 }}
            />
          </div>

          <div className="relative mt-15 h-30">
            <AnimatedBox x={120} y={0} isInView={isInView} index={0} />
            <AnimatedBox x={320} y={0} isInView={isInView} index={1} />
            <Connector
              path="M140,60 Q200,200 280,280"
              from={{ x: 140, y: 60 }}
              to={{ x: 280, y: 280 }}
            />
          </div>
          <motion.div
            animate={{ x: [0, 15, 30], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0 * 0.3 }}
            className="absolute right-0 h-2 w-2 rounded-full bg-blue-500"
          />
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
        </div> */}
        {/* <div className="absolute top-[20%] right-[10%] w-[30%]">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="relative mb-16 space-y-10"
          >
            <OutputBox />
            <OutputBox />
            <OutputBox />
            <Connector
              path="M0,30 Q-100,30 -180,80"
              from={{ x: 0, y: 30 }}
              to={{ x: -180, y: 80 }}
              rightSide
            />
          </motion.div>
        </div> */}
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
