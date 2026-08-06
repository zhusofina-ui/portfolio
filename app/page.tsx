import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Work } from '@/components/work'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Contact />
    </main>
  )
}
