"use client"
import { motion } from "framer-motion"
import { Sparkle, StarDoodle } from '@/components/doodles'

export function Hero() {
  return (
    <section
      id="hero"
      className="paper paper-margin relative"
      aria-label="Welcome"
    >
      <div className="relative mx-auto min-h-[88vh] max-w-6xl px-5 pb-16 pt-10 sm:px-8">
        {/* doodles */}
        <StarDoodle className="absolute left-8 top-10 h-8 w-8 text-cocoa/60 sm:left-24" />
        <Sparkle className="absolute right-10 top-24 h-7 w-7 text-pink" />
        <StarDoodle className="absolute bottom-28 right-24 h-6 w-6 text-cocoa/50" />
        <Sparkle className="absolute bottom-20 left-16 h-5 w-5 text-cocoa/40" />

        <div className="relative grid items-center gap-6 md:grid-cols-2">
          {/* headline */}
          <div className="relative z-10 order-2 md:order-1">
            <h1 className="font-display leading-[0.9] text-cocoa">
              <span className="block text-6xl sm:text-7xl lg:text-8xl">welcome</span>
              <span className="mt-2 block text-4xl sm:text-5xl lg:text-6xl">
                to my
              </span>
              <span className="mt-1 block text-6xl text-pink sm:text-7xl lg:text-[7rem]">
                portfolio
              </span>
            </h1>

            {/* sticky note */}
            <motion.div
              drag
              dragMomentum={false}
              whileHover={{ y: -8, rotate: 0 }}
              className="mt-10 inline-block absolute z-[-99] cursor-grab active:cursor-grabbing"
            >
              <div className="relative w-44 -rotate-3 bg-butter/80 p-5 pr-16 shadow-md shadow-cocoa/20 border-2 border-[#4A3323]">
                <span className="absolute -top-2 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-pink border-2 border-cocoa" />
                <p className="text-base leading-tight text-cocoa" style={{ fontFamily: 'var(--font-geist), sans-serif' }}>
                  fancy seeing you here
                </p>
              </div>
            </motion.div>
          </div>
          {/* Right Side Image Column */}
          <div className="relative z-10 flex justify-center items-center order-1 md:order-2">
            <motion.img
              drag
              dragMomentum={false}
              whileHover={{ scale: 1.05 }}
              src="https://plain-wnam-prod-public.komododecks.com/202608/05/wSG5DQP9QWFDGWIg8I6K/image.png"
              alt="My portrait"
              className="w-full max-w-130 translate-x-135 h-auto object-contain drop-shadow-xl rotate-5 cursor-grab active:cursor-grabbing relative z-[-99]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
