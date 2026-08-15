import { Squiggle } from '@/components/doodles'

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-blush py-28"
      aria-labelledby="contact-heading"
    >
     <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
  <h2
    id="contact-heading"
    className="text-4xl font-normal leading-tight text-cocoa sm:text-6xl"
  >
    let&apos;s build something{' '}
    <span className="font-hand text-5xl text-butter drop-shadow-sm sm:text-7xl">
      fun 
    </span>
  </h2>

  <a
    href="mailto:sofinazhu2023@gmail.com"
    className="mt-10 inline-block border-b-4 border-cocoa/50 pb-1 text-2xl font-normal text-cocoa transition-colors hover:border-pink hover:text-pink sm:text-4x"
  >
    sofinazhu2023@gmail.com
  </a>

  <Squiggle className="mx-auto mt-12 h-6 w-40 text-pink" />

  <div className="mt-10 flex flex-col items-center justify-center gap-6 text-2xl text-cocoa/70">
    <a href="#" className="transition-colors hover:text-cocoa" style={{ fontFamily: 'var(--font-geist), sans-serif' }}>
      instagram: @sofinazhu_
  </a>
  <span 
    className="text-lg text-cocoa/60" 
    style={{ fontFamily: 'var(--font-geist), sans-serif' }}
  >
    let's listen to music! 🎵
  </span>
</div>


   <div className="mt-8 mx-auto w-full max-w-md rounded-2xl border-2 border-[#4A3323] bg-[#4A3323] overflow-hidden shadow-[4px_4px_0px_#4A3323]">
  <iframe
    src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?si=ZTCnLiLURtOVilJRgeCl2g"
    width="100%"
    height="152"
    frameBorder="0"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
    className="w-full opacity-90 mix-blend-luminosity contrast-150"
  />
</div>
</div>
    </section>
  )
}
