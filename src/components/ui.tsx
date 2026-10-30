import type { ReactNode } from 'react'
import { Link } from '../router'
import { Icon } from './Icon'

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>
}

export function Eyebrow({ children, icon }: { children: ReactNode; icon?: string }) {
  return (
    <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand">
      {icon && <Icon name={icon} className="size-4" strokeWidth={2.2} />}
      {children}
    </p>
  )
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-brand-soft px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand">
      {children}
    </span>
  )
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-brand/25 bg-white px-2.5 py-1 text-xs font-medium text-brand-dark">
      {children}
    </span>
  )
}

type ButtonProps = {
  to?: string
  href?: string
  children: ReactNode
  variant?: 'primary' | 'ghost'
  icon?: string
  className?: string
}

export function Button({ to, href, children, variant = 'primary', icon = 'arrowRight', className = '' }: ButtonProps) {
  const styles =
    variant === 'primary'
      ? 'bg-brand text-white shadow-lg shadow-brand/25 hover:bg-brand-dark'
      : 'border border-ink/15 bg-white text-ink hover:border-brand hover:text-brand'
  const cls = `group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors ${styles} ${className}`
  const content = (
    <>
      {children}
      <Icon name={icon} className="size-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.2} />
    </>
  )
  if (href)
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {content}
      </a>
    )
  return (
    <Link to={to ?? '/'} className={cls}>
      {content}
    </Link>
  )
}

// Shows a website screenshot inside a simple browser window frame.
export function BrowserFrame({
  src,
  alt,
  url,
  className = '',
  eager = false,
}: {
  src: string
  alt: string
  url?: string
  className?: string
  eager?: boolean
}) {
  return (
    <figure className={`overflow-hidden rounded-2xl border border-line bg-white shadow-xl shadow-ink/5 ${className}`}>
      <div className="flex items-center gap-2 border-b border-line bg-white px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        {url && (
          <span className="ml-3 truncate rounded-md bg-canvas px-3 py-0.5 text-[11px] text-muted">{url}</span>
        )}
      </div>
      <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} className="block w-full" />
    </figure>
  )
}
