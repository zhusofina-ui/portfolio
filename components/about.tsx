import { StarDoodle, Sparkle } from '@/components/doodles'

const paragraphs = [
  "Hey! I'm sofina :)",
  "welcome to the part of the website where i'm supposed to talk about myself. i'm a multidisciplinary creative who loves making things that feel playful and nostalgic. jack of all trades (and a master of... some).",
  'i love designing and attend markham district high school! i&apos;m hoping to end up making memorable things with memorable people one day.',
  "the software i use includes (but isn't limited to) Canva, XXXXXX",
  "i'm here to make cool things with cool people, so hit me up. ",
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
    </section>
  )
}
