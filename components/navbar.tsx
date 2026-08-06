const links = [
  { label: 'about', href: '#about' },
  { label: 'work', href: '#work' },
  { label: 'say hi', href: '#contact' },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-secondary-foreground/10 bg-blush/90 backdrop-blur-sm">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8"
      >
        <a
          href="#hero"
          className="text-2xl tracking-tight text-cocoa transition-transform hover:-rotate-3"
        >
          sofina.<span className="text-pink">.</span>
        </a>
        <ul className="flex items-center gap-6 text-base font-medium text-cocoa/80 sm:gap-9 sm:text-lg">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative transition-colors hover:text-cocoa"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
