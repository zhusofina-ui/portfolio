import { Heart, Squiggle } from '@/components/doodles'

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-blush py-28"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Heart className="mx-auto mb-6 h-10 w-10 text-pink" />
        <h2
          id="contact-heading"
          className="text-4xl font-bold leading-tight text-cocoa sm:text-6xl"
        >
          Let&apos;s build something{' '}
          <span className="font-hand text-5xl text-butter drop-shadow-sm sm:text-7xl">
            fun.
          </span>
        </h2>

        <a
          href="mailto:hello@lulu.studio"
          className="mt-10 inline-block border-b-4 border-cocoa/50 pb-1 text-3xl font-semibold text-cocoa transition-colors hover:border-pink hover:text-pink sm:text-5xl"
        >
          hello@lulu.studio
        </a>

        <Squiggle className="mx-auto mt-12 h-6 w-40 text-pink" />

        <div className="mt-10 flex items-center justify-center gap-6 font-hand text-2xl text-cocoa/70">
          <a href="#" className="transition-colors hover:text-cocoa">
            instagram
          </a>
          <span aria-hidden="true">·</span>
          <a href="#" className="transition-colors hover:text-cocoa">
            behance
          </a>
          <span aria-hidden="true">·</span>
          <a href="#" className="transition-colors hover:text-cocoa">
            youtube
          </a>
        </div>

        <p className="mt-16 text-sm text-cocoa/50">
          made with love · a playful portfolio template
        </p>
      </div>
    </section>
  )
}
