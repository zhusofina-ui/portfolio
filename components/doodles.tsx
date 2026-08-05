import type { SVGProps } from 'react'

/* Small decorative hand-drawn doodles. Purely ornamental (aria-hidden). */

export function Sparkle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2c.7 4.9 2.4 6.6 7.3 7.3-4.9.7-6.6 2.4-7.3 7.3-.7-4.9-2.4-6.6-7.3-7.3C9.6 8.6 11.3 6.9 12 2Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function StarDoodle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 3l2.2 5.6L20 9.3l-4.3 3.6 1.4 5.7L12 15.6 6.9 18.6l1.4-5.7L4 9.3l5.8-.7L12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export function Heart(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 20s-7-4.3-7-9.2A3.8 3.8 0 0 1 12 8a3.8 3.8 0 0 1 7 2.8C19 15.7 12 20 12 20Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export function Squiggle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 80 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M2 12c6-10 14 8 20 0s14 8 20 0 14 8 20 0 14 8 16 4"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export function Arrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 15c3-6 8-9 15-9m0 0-5 1m5-1 1 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}
