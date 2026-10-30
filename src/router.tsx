import {
  createContext,
  useContext,
  useEffect,
  useState,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from 'react'

// A tiny client-side router so the site needs no extra dependencies.
// vercel.json rewrites every path to index.html so deep links work.

const RouterContext = createContext<{ path: string; navigate: (to: string) => void }>({
  path: '/',
  navigate: () => {},
})

export function Router({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(() => window.location.pathname)

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const navigate = (to: string) => {
    const [pathname, hash] = to.split('#')
    if (pathname && pathname !== window.location.pathname) {
      window.history.pushState({}, '', to)
      setPath(pathname)
      if (!hash) window.scrollTo({ top: 0 })
    } else if (!pathname) {
      window.history.pushState({}, '', to)
    }
    if (hash) {
      // Wait for the new page to render before scrolling to the section
      requestAnimationFrame(() =>
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' }),
      )
    }
  }

  return <RouterContext.Provider value={{ path, navigate }}>{children}</RouterContext.Provider>
}

export const useRouter = () => useContext(RouterContext)

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }

export function Link({ to, onClick, children, ...rest }: LinkProps) {
  const { navigate } = useRouter()
  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e)
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
    e.preventDefault()
    navigate(to)
  }
  return (
    <a href={to} onClick={handle} {...rest}>
      {children}
    </a>
  )
}
