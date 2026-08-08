"use client"
import { motion } from "framer-motion"
import { Sparkle, StarDoodle } from '@/components/doodles'
import { useState } from 'react'
import Link from 'next/link';

export function Hero() {
  const [isSnapping, setIsSnapping] = useState(false)
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
            <motion.img
  drag
  dragMomentum={false}
  whileHover={{ scale: 1.05 }}
  
  onPointerDownCapture={() => setIsSnapping(!isSnapping)}
  
  src={isSnapping ? "/download (5).png" : "/download (6).png"}
  alt="Movie Clapboard"
  className="absolute -top-37 -left-94 w-[330px] h-auto object-contain pointer-events-auto z-[-10] opacity-70 -rotate-15 cursor-pointer"
/>
            <h1 className="font-display leading-[0.9] text-cocoa pointer-events-none">
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
                  this portfolio is best viewed on desktop!
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
              className="w-full max-w-150 translate-x-170 h-auto object-contain drop-shadow-xl rotate-5 cursor-grab active:cursor-grabbing"
            />
    
          </div>
        </div>
      </div>

      {/* Interactive Manila Folder to Workstation */}
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
<Link href="#work" className="block outline-none">
<motion.div 
      className="relative w-[420px] cursor-pointer"
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      variants={{
        rest: { scale: 1 },
        hover: { scale: 1.02 },
        tap: { scale: 0.95 }
      }}
    >
      {/* Peeking Photo 1 (Left) */}
      <motion.img 
        src="/IMG_7366.JPG" 
        alt="Work preview 1" 
        className="absolute bottom-80 -right-80 w-50 h-auto object-cover rounded-md shadow-md z-20 origin-bottom-left"
        variants={{
          rest: { y: 0, x: "-50%", rotate: 0, opacity: 0 },
          hover: { y: -120, x: "-120%", rotate: -25, opacity: 1 }
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />

      {/* Peeking Photo 2 (Center) */}
      <motion.img 
        src="/IMG_7250.JPG" 
        alt="Work preview 2" 
        className="absolute bottom-80 -right-80 w-50 h-auto object-cover rounded-md shadow-md z-20 origin-bottom"
        variants={{
          rest: { y: 0, x: "-50%", rotate: 0, opacity: 0 },
          hover: { y: -150, x: "-50%", rotate: 0, opacity: 1 }
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.05 }}
      />

      {/* Peeking Photo 3 (Right) */}
      <motion.img 
        src="/IMG_7382.jpg" 
        alt="Work preview 3" 
        className="absolute bottom-80 -right-80 w-50 h-auto object-cover rounded-md shadow-md z-20 origin-bottom-right"
        variants={{
          rest: { y: 0, x: "-50%", rotate: 0, opacity: 0 },
          hover: { y: -120, x: "20%", rotate: 25, opacity: 1 }
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
      />

      {/*  Folder */}
      <img 
        src="/folder.png" 
        alt="My Work Folder" 
        className="relative bottom-30 -right-80 -rotate-90 z-10 w-full h-auto drop-shadow-3xl"
      />

      {/* text on the folder */}
      <span className="absolute bottom-80 -right-130 -translate-x-1/2 -translate-y-1/2 z-20 font-display text-cocoa text-3xl pointer-events-none -rotate-3 w-full text-center">
        click to view my workstation!
      </span>
      </motion.div>

    </Link>
  </div>

      {/* Lace */}
  <img 
  src="/download (9).png" 
  alt="New loose photo" 
  className="absolute top-150 right-40 w-110 h-auto object-cover rounded-[2rem] rotate-90 z-10" 
/>

<img 
  src="/download (9).png" 
  alt="New loose photo" 
  className="absolute top-150 left-195 w-110 h-auto object-cover rounded-[2rem] rotate-90 z-10" 
/>

<img 
  src="/download (9).png" 
  alt="New loose photo" 
  className="absolute top-150 left-15 w-110 h-auto object-cover rounded-[2rem] rotate-90 z-10" 
/>

{/* Hand-drawn Arrow and Text pointing to Clapboard */}
<div className="absolute top-[57%] left-[8%] z-30 flex items-center gap-2 -rotate-6 pointer-events-none">
  <span className="font-display text-cocoa text-[26px]">
    click me!
  </span>
  {/* Hand-drawn style custom SVG */}
  <svg 
    width="50" 
    height="50" 
    viewBox="0 0 100 100" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="text-cocoa"
  >
    {/* The curved stem */}
    <path d="M 15,85 Q 40,40 85,15" />
    {/* The arrowhead */}
    <path d="M 50,15 L 85,15 L 80,50" />
  </svg>
</div>

   </section>
  )
}
