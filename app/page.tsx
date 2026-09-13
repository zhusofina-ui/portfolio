import InteractiveWhiteboard from '@/components/ui/drawing'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Work } from '@/components/work'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Work />
      <InteractiveWhiteboard />
      <Contact />
    </main>
  )
}