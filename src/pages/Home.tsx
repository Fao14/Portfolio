import { projects } from '../data/projects'
import { site, skills } from '../data/site'
import { Link } from '../router'
import { Icon } from '../components/Icon'
import { Button, Container, Eyebrow, Pill } from '../components/ui'

export function Home() {
  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden">
        <Container className="grid items-center gap-12 py-14 md:grid-cols-[1.1fr_1fr] md:py-24">
          <div>
            {site.availableForWork && <Pill>Available for work</Pill>}
            <h1 className="mt-5 text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-7xl">
              {site.firstName}
              <br />
              <span className="text-brand">{site.lastName}</span>
            </h1>
            <p className="mt-6 text-lg font-semibold text-ink">{site.role}</p>
            <p className="mt-2 max-w-md text-lg leading-relaxed text-body">{site.intro}</p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Main technologies">
              {site.heroStack.map((t) => (
                <li
                  key={t}
                  className="rounded-lg border border-line bg-white px-2.5 py-1 font-mono text-xs font-medium text-ink"
                >
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/projects">View Projects</Button>
              <Button href={`mailto:${site.email}`} variant="ghost" icon="mail">
                Get in Touch
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm md:max-w-md">
            <div
              className="absolute -inset-10 rounded-full bg-brand/25 blur-3xl"
              aria-hidden="true"
            />
            <img
              src={site.photo}
              alt={`Portrait of ${site.name}`}
              className="relative aspect-[6/7] w-full rounded-3xl object-cover shadow-2xl shadow-brand/20"
            />
          </div>
        </Container>
      </section>

      {/* About */}
      <section className="border-t border-line">
        <Container className="py-16 md:py-20">
          <Eyebrow>The Story</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-body">{site.about}</p>

          <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-3 sm:gap-4">
            {site.stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-line bg-white p-4 sm:p-5">
                <dt className="text-xs text-muted sm:text-sm">{s.label}</dt>
                <dd className="mt-1 text-2xl font-extrabold text-brand sm:text-3xl">{s.value}</dd>
              </div>
            ))}
          </dl>

          {/* Skills band */}
          <h3 className="mt-14 text-xl font-bold">What I Do</h3>
          <div className="mt-5 grid gap-8 rounded-3xl bg-blush p-8 sm:grid-cols-2 sm:p-10 lg:grid-cols-3">
            {skills.map((s) => (
              <div key={s.title}>
                <span className="grid size-10 place-items-center rounded-xl bg-white text-brand shadow-sm">
                  <Icon name={s.icon} />
                </span>
                <h3 className="mt-4 font-bold">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-body">{s.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Selected work */}
      <section className="border-t border-line">
        <Container className="py-16 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Selected Work</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Live client websites</h2>
            </div>
            <Link to="/projects" className="flex items-center gap-1 text-sm font-semibold text-brand hover:underline">
              All projects <Icon name="arrowRight" className="size-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.map((p) => (
              <Link
                key={p.slug}
                to={p.caseStudy ? `/projects/${p.slug}` : '/projects'}
                className="group overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-xl hover:shadow-ink/5"
              >
                <div className="aspect-[16/10] overflow-hidden bg-canvas">
                  <img
                    src={p.image}
                    alt={`${p.name} website`}
                    loading="lazy"
                    className="size-full object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand">{p.category}</p>
                  <h3 className="mt-1 text-lg font-bold">{p.name}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-body">{p.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
