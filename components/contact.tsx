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
          Let&apos;s build something{' '}
          <span className="font-hand text-5xl text-butter drop-shadow-sm sm:text-7xl">
            fun!
          </span>
        </h2>

        <a
          href="mailto:zhusofina@gmail.com"
          className="mt-10 inline-block border-b-4 border-cocoa/50 pb-1 text-2xl font-normal text-cocoa transition-colors hover:border-pink hover:text-pink sm:text-4xl"
        >
          zhusofina@gmail.com
        </a>

        <Squiggle className="mx-auto mt-12 h-6 w-40 text-pink" />

        <div className="mt-10 flex items-center justify-center gap-6 text-2xl text-cocoa/70">
          <a href="#" className="transition-colors hover:text-cocoa" style={{ fontFamily: 'var(--font-geist), sans-serif' }}>
           instagram: @sofinazhu_
          </a>
        </div>
        
      </div>
    </section>
  )
}
