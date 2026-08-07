import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fredoka, Caveat, Mystery_Quest, Roboto, Open_Sans, Playfair_Display, Inconsolata, Geist } from 'next/font/google'
import './globals.css'

const fredoka = Fredoka({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
})

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-hand',
  weight: ['400', '500', '600', '700'],
})

const mysteryQuest = Mystery_Quest({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400'],
})

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500', '700'],
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  weight: ['400', '500', '600', '700'],
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
})

const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-inconsolata',
  weight: ['400', '700'],
})

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'sofinas portfolio',
  description:
    'A whimsical, scrapbook-style portfolio template for illustrators, designers, and multidisciplinary creatives.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f6d0d8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${caveat.variable} ${mysteryQuest.variable} ${roboto.variable} ${openSans.variable} ${playfairDisplay.variable} ${inconsolata.variable} ${geist.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
