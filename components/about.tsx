import { StarDoodle, Sparkle } from '@/components/doodles'

const paragraphs = [
  "hey! I'm sofina, a gr10 student at markham district high school!",
  "i love being creative and designing things that feel playful and nostalgic. jack of all trades (and a master of... some).",
  "for softwares, i mostly use Canva, but im working on expanding towards Adobe and video editing softwares (davinci, capcut, etc)",
  "i'm here to make cool things with cool people (thats you!) thanks for clicking around and have fun exploring my site! ",
]
export function About() {
  return (
    <section
      id="about"
      className="paper relative overflow-hidden py-20"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 md:grid-cols-[1.4fr_1fr]">
        {/* speech bubble */}
        <div className="relative">
          <StarDoodle className="absolute -left-2 -top-6 h-8 w-8 text-pink" />
          <div className="relative rounded-[2.5rem] bg-blush px-7 py-9 shadow-lg shadow-cocoa/10 sm:px-10">
            {/* bubble tail */}
            <span
              aria-hidden="true"
              className="absolute -bottom-4 left-16 h-8 w-8 rotate-45 bg-blush"
            />
            <h2
              id="about-heading"
              className="mb-6 text-cocoa"
            >
              <span className="font-display text-5xl sm:text-6xl">about me!</span>
            </h2>
            <div className="space-y-4 text-base font-normal leading-snug text-cocoa/90" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
              {paragraphs.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>
          </div>
        </div>


      </div>
<div className="relative flex items-center justify-center">
  <img 
    src="/abtmepic.jpg" 
    alt="Picture of me" 
    className="-mt-100 translate-x-90 w-65 h-auto object-cover rounded-[2rem] rotate-5 shadow-lg border-4 border-white/50"
  />
  {/* Text & Arrow Annotation */}
  <div className="absolute z-20 pointer-events-none -mt-[550px] -translate-x-[930px] flex flex-col items-center">
    
    <span className="text-xl text-cocoa font-display translate-x-28 -rotate-8 mb-2">
      this is one of my digicams i use for photography!
    </span>

    <svg width="40" height="60" viewBox="0 0 50 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-pink drop-shadow-sm">
      <path d="M15 5 Q 5 35, 30 60" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M15 60 L 35 63 L 30 45" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    
  </div>
<img 
    src="/abtmepic2.jpg" 
    alt="Second picture" 
    className="-mt-70 -translate-x-[830px] w-85 h-auto object-cover rounded-[2rem] -rotate-10 shadow-lg border-4 border-cream"
  />
</div>
<img 
    src="/testing12.jpg" 
    alt="Third picture" 
    className="w-95 translate-x-[1620px] -mt-75 h-auto object-cover rounded-[2rem] rotate-8 shadow-lg border-3 border-pink"  />
  
    <img 
    src="/IMG_5529 4.jpg" 
    alt="Fourth picture" 
    className="w-70 translate-x-[1350px] -mt-80 h-auto object-cover rounded-[2rem] -rotate-5 shadow-lg border-3 border-pink"  />
    </section>
  )
}
