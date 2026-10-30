import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { projects } from './data/projects'
import { CaseStudy } from './pages/CaseStudy'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { Router, useRouter } from './router'

function Page() {
  const { path } = useRouter()
  const clean = path.replace(/\/+$/, '') || '/'

  if (clean === '/projects') return <Projects />

  const match = clean.match(/^\/projects\/([\w-]+)$/)
  if (match) {
    const project = projects.find((p) => p.slug === match[1] && p.caseStudy)
    if (project) return <CaseStudy project={project} />
  }
  return <Home />
}

export default function App() {
  return (
    <Router>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Page />
      </main>
      <Footer />
    </Router>
  )
}
