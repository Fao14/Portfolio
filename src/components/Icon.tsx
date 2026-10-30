// Inline icons (Lucide-style strokes) so the site has no icon dependency.
import type { ReactNode } from 'react'

const paths: Record<string, ReactNode> = {
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUpRight: <path d="M7 17 17 7M8 7h9v9" />,
  arrowLeft: <path d="M19 12H5M11 6l-6 6 6 6" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </>
  ),
  pointer: (
    <>
      <rect x="3" y="4" width="14" height="10" rx="2" />
      <path d="m13 13 7 3-3 1-1 3-3-7Z" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 3 3 5-6" />
    </>
  ),
  code: <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />,
  phone: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
    </>
  ),
  github: (
    <path d="M9 19c-4 1.5-4-2-6-2.5m12 5v-3.5a3 3 0 0 0-.9-2.3c3-.3 6-1.5 6-6.5a5 5 0 0 0-1.4-3.5 4.6 4.6 0 0 0-.1-3.5s-1.1-.3-3.6 1.4a12.4 12.4 0 0 0-6.4 0C6.1 2.4 5 2.7 5 2.7a4.6 4.6 0 0 0-.1 3.5A5 5 0 0 0 3.5 9.7c0 5 3 6.2 6 6.5a3 3 0 0 0-.9 2.3V22" />
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  building: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1M10 21v-3h4v3" />
    </>
  ),
  flag: <path d="M5 21V4m0 0h11l-2 4 2 4H5" />,
  handshake: (
    <path d="m11 17 2 2a1.5 1.5 0 0 0 2-2m-2-2 2.5 2.5a1.5 1.5 0 0 0 2-2L14 12m-3-3 1.5-1.5a2.8 2.8 0 0 1 4 0L21 12M3 11l5-5 3 3-2.5 2.5a1.5 1.5 0 0 0 2 2L14 12m-11-1 6 6" />
  ),
  eye: (
    <>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M21.5 20a6.5 6.5 0 0 0-4-6" />
    </>
  ),
  wand: <path d="m15 4 1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2ZM4 20l10-10M19 13l.5 1 1 .5-1 .5-.5 1-.5-1-1-.5 1-.5.5-1Z" />,
  star: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m12 7 1.5 3 3.3.5-2.4 2.3.6 3.2L12 14.5 9 16l.6-3.2-2.4-2.3 3.3-.5L12 7Z" />
    </>
  ),
  activity: <path d="M3 12h4l3-8 4 16 3-8h4" />,
  clipboard: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4V3h6v1M9 11h6M9 15h4" />
    </>
  ),
  landmark: <path d="M3 21h18M5 18V10M9.5 18V10M14.5 18V10M19 18V10M3 10l9-6 9 6H3Z" />,
  figma: (
    <path d="M9 3h3v6H9a3 3 0 0 1 0-6Zm3 0h3a3 3 0 0 1 0 6h-3V3Zm0 6h3a3 3 0 1 1-3 3V9Zm-3 0h3v6H9a3 3 0 0 1 0-6Zm0 6h3v3a3 3 0 1 1-3-3Z" />
  ),
  server: (
    <>
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 7.5h.01M7 16.5h.01" />
    </>
  ),
  card: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="M2.5 10h19M6.5 15h4" />
    </>
  ),
  rocket: (
    <path d="M5 15c-1.5 1.3-2 4-2 4s2.7-.5 4-2m6-11c3-3 6-3 8-3 0 2 0 5-3 8l-6 5-4-4 5-6ZM9 11 5 10l3-3 4 .5M13 15l1 4 3-3-.5-4M15.5 8.5h.01" />
  ),
  sparkle:<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" />,
}

export type IconProps = { name: string; className?: string; strokeWidth?: number }

export function Icon({ name, className = 'size-5', strokeWidth = 1.8 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? paths.sparkle}
    </svg>
  )
}
