import Image from 'next/image'
import { StarDoodle, Sparkle } from '@/components/doodles'

const paragraphs = [
  "Hey! I'm Lulu :)",
  "welcome to the part of the website where i'm supposed to talk about myself. i'm a multidisciplinary creative who loves making things that feel playful and nostalgic. jack of all trades (and a master of... some).",
  'i love illustrating, animating, designing, filming, and now even 3D design. i graduated last year and i&apos;m hoping to end up making memorable things with memorable people one day.',
  "the software i use includes (but isn't limited to) Procreate, Photoshop, Illustrator, After Effects, DaVinci Resolve, and Blender.",
  "i'm here to make cool things with cool people, so hit me up. thanks for clicking around, and i hope you have fun exploring my site!",
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
              <span className="font-display text-5xl sm:text-6xl">about</span>{' '}
              <span className="font-hand text-5xl font-bold sm:text-6xl">me!</span>
            </h2>
            <div className="space-y-4 font-hand text-2xl leading-snug text-cocoa/90">
              {paragraphs.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>
          </div>
        </div>

        {/* photo collage */}
        <div className="relative mx-auto flex max-w-sm flex-col items-center gap-6">
          <Sparkle className="absolute -right-2 top-4 z-10 h-6 w-6 text-cocoa/50" />
          <figure className="tape w-56 rotate-3 bg-card p-3 pb-8 shadow-lg shadow-cocoa/15">
            <Image
              src="/polaroid-1.png"
              alt="A cozy creative desk with pastel stationery"
              width={400}
              height={400}
              className="h-52 w-full object-cover"
            />
            <figcaption className="mt-2 text-center font-hand text-xl text-cocoa/70">
              my little studio
            </figcaption>
          </figure>
          <figure className="tape w-56 -rotate-2 bg-card p-3 pb-8 shadow-lg shadow-cocoa/15">
            <Image
              src="/polaroid-2.png"
              alt="Colorful art supplies arranged in a flat lay"
              width={400}
              height={400}
              className="h-52 w-full object-cover"
            />
            <figcaption className="mt-2 text-center font-hand text-xl text-cocoa/70">
              tools of the trade
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
