import Image from 'next/image'
import { Sparkle, StarDoodle } from '@/components/doodles'

export function Hero() {
  return (
    <section
      id="hero"
      className="paper paper-margin relative overflow-hidden"
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
            <div className="mt-10 inline-block">
              <div className="relative w-44 -rotate-3 bg-butter/80 p-5 shadow-md shadow-cocoa/20">
                <span className="absolute -top-2 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-pink" />
                <p className="font-hand text-2xl leading-tight text-cocoa">
                  fancy seeing you here
                </p>
              </div>
            </div>
          </div>

          {/* illustration */}
          <div className="relative order-1 flex justify-center md:order-2">
            <div
              aria-hidden="true"
              className="absolute h-64 w-64 rounded-full bg-pink/70 blur-2xl sm:h-80 sm:w-80"
            />
            <Image
              src="/hero-character.png"
              alt="Illustrated character sitting on a pink orb, welcoming visitors to the portfolio"
              width={520}
              height={620}
              priority
              className="relative h-auto w-[280px] rotate-1 rounded-[2rem] shadow-xl shadow-cocoa/15 ring-4 ring-card sm:w-[360px] lg:w-[440px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
