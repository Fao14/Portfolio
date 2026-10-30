import { useEffect, useState } from 'react'
import { site } from '../data/site'
import { Link, useRouter } from '../router'
import { Icon } from './Icon'

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '#contact', label: 'Contact' },
]

export function Logo() {
  return (
    <span className="flex items-center gap-2 font-bold tracking-tight text-ink">
      <span className="grid size-7 place-items-center rounded-lg bg-brand text-[11px] font-extrabold text-white">
        FO
      </span>
      {site.name}
    </span>
  )
}

export function Navbar() {
  const { path } = useRouter()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [path])

  const isActive = (to: string) => (to === '/' ? path === '/' : to !== '#contact' && path.startsWith(to))

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled || open ? 'border-line bg-canvas/90 backdrop-blur-md' : 'border-transparent bg-canvas'
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <Link to="/" aria-label={`${site.name}, home`}>
          <Logo />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className={`text-sm font-medium transition-colors hover:text-brand ${
                isActive(l.to) ? 'text-brand' : 'text-body'
              }`}
              aria-current={isActive(l.to) ? 'page' : undefined}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`mailto:${site.email}`}
            className="rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Hire Me
          </a>
        </div>

        <button
          className="grid size-10 place-items-center rounded-lg text-ink md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <Icon name={open ? 'close' : 'menu'} className="size-6" />
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line px-5 pb-5 md:hidden">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block py-3 text-base font-medium ${isActive(l.to) ? 'text-brand' : 'text-ink'}`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`mailto:${site.email}`}
            className="mt-2 block rounded-xl bg-brand px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  )
}
