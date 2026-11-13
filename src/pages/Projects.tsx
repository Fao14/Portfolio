import { useEffect, useState } from 'react'
import { explorations, projects, type Exploration } from '../data/projects'
import { coreSkills, experience, tools } from '../data/site'
import { Icon } from '../components/Icon'
import { Button, Container, Eyebrow, Tag } from '../components/ui'

export function Projects() {
  const [open, setOpen] = useState<Exploration | null>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null)
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <>
      <Container className="pt-14 pb-6 md:pt-20">
        <Eyebrow>Portfolio Showcase</Eyebrow>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Projects & Experience</h1>
        <p className="mt-4 max-w-2xl text-lg text-body">
          Websites and web apps I have developed for clients in sports tech, consultancy and e-commerce, from
          React front ends to a FastAPI and PostgreSQL back end. Each one started as my own Figma design.
        </p>
      </Container>

      {/* Featured projects */}
      <Container className="py-10">
        <h2 className="text-xl font-bold">Featured Projects</h2>
        <div className="mt-6 space-y-8">
          {projects.map((p, i) => (
            <article
              key={p.slug}
              className="grid overflow-hidden rounded-3xl border border-line bg-white md:grid-cols-2"
            >
              <div className={`flex items-center bg-canvas p-4 sm:p-6 ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <img
                  src={p.image}
                  alt={`${p.name} website homepage`}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  className="h-auto w-full rounded-xl border border-line shadow-md"
                />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-10">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand">{p.category}</p>
                  {p.status && (
                    <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-semibold text-amber-800">
                      {p.status}
                    </span>
                  )}
                </div>
                <h3 className="mt-2 text-2xl font-bold">{p.name}</h3>
                <p className="mt-3 leading-relaxed text-body">{p.summary}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.detail}</p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-muted">Built with</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  {p.caseStudy && <Button to={`/projects/${p.slug}`}>View Case Study</Button>}
                  <Button
                    href={p.liveUrl}
                    variant={p.caseStudy ? 'ghost' : 'primary'}
                    icon="arrowUpRight"
                  >
                    Visit Live Site
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>

      {/* Design explorations */}
      <Container className="py-10">
        <h2 className="text-xl font-bold">Design Explorations</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {explorations.map((e) => (
            <button
              key={e.title}
              type="button"
              onClick={() => e.image && setOpen(e)}
              className="group block overflow-hidden rounded-2xl border border-line bg-white text-left transition-shadow hover:shadow-xl hover:shadow-ink/5"
              aria-label={`View ${e.title} design larger`}
            >
              <div className="overflow-hidden">
                {e.image ? (
                  <img
                    src={e.image}
                    alt={`${e.title} design`}
                    loading="lazy"
                    className="aspect-[16/9] w-full border-b border-line object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className={`grid aspect-[16/9] place-items-center bg-gradient-to-br ${e.accent}`}>
                    <Icon name="figma" className="size-10 text-white/90" strokeWidth={1.5} />
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-bold group-hover:text-brand">{e.title}</h3>
                  {e.badge && (
                    <span className="rounded-full bg-sky-100 px-2 py-0.5 text-[11px] font-semibold text-sky-800">
                      {e.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted">{e.type}</p>
              </div>
            </button>
          ))}
        </div>
      </Container>

      {open?.image && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${open.title} design`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm sm:p-10"
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            onClick={() => setOpen(null)}
            className="absolute top-4 right-4 grid size-10 place-items-center rounded-full bg-white text-ink shadow-lg hover:text-brand"
            aria-label="Close"
          >
            <Icon name="close" className="size-5" />
          </button>
          <figure className="max-h-full w-full max-w-5xl overflow-auto rounded-2xl bg-white shadow-2xl" onClick={(ev) => ev.stopPropagation()}>
            <img src={open.image} alt={`${open.title} design`} className="w-full" />
            <figcaption className="p-5">
              <p className="font-bold">
                {open.title}
                {open.badge && <span className="ml-2 rounded-full bg-sky-100 px-2 py-0.5 text-[11px] font-semibold text-sky-800">{open.badge}</span>}
              </p>
              <p className="text-sm text-muted">{open.type}</p>
            </figcaption>
          </figure>
        </div>
      )}

      {/* Experience & skills */}
      <Container className="pt-10 pb-20">
        <div className="grid gap-10 rounded-3xl bg-blush p-8 sm:p-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="text-xl font-bold">Experience</h2>
            <ol className="mt-6 space-y-7 border-l-2 border-brand/30 pl-6">
              {experience.map((x) => (
                <li key={x.role} className="relative">
                  <span className="absolute top-1.5 -left-[31px] size-3 rounded-full bg-brand ring-4 ring-blush" />
                  <h3 className="font-bold">{x.role}</h3>
                  <p className="text-sm font-semibold text-brand">
                    {x.org} · {x.period}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-body">{x.text}</p>
                </li>
              ))}
            </ol>

            <h3 className="mt-9 flex items-center gap-2 font-bold">
              <Icon name="code" className="size-4 text-brand" /> Tools
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {tools.map((t) => (
                <span key={t} className="rounded-lg bg-white px-3 py-1.5 text-sm font-medium shadow-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold">Core Skills</h2>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {coreSkills.map((s) => (
                <li key={s} className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-medium shadow-sm">
                  <Icon name="check" className="size-4 shrink-0 text-brand" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
