import { useEffect } from 'react'
import { projects, type Project } from '../data/projects'
import { Icon } from '../components/Icon'
import { Link } from '../router'
import { BrowserFrame, Button, Container, Eyebrow, Pill } from '../components/ui'

export function CaseStudy({ project }: { project: Project }) {
  const cs = project.caseStudy!
  // Show the real domain in the browser frames; for preview hosting addresses show the project name instead.
  const rawHost = new URL(project.liveUrl).host.replace(/^www\./, '')
  const host = rawHost.endsWith('.vercel.app') ? project.name : rawHost
  const withCaseStudy = projects.filter((p) => p.caseStudy)
  const next = withCaseStudy[(withCaseStudy.findIndex((p) => p.slug === project.slug) + 1) % withCaseStudy.length]
  const others = next && next.slug !== project.slug ? [next] : []

  useEffect(() => {
    document.title = `${project.name} Case Study | Faith Ouma`
    return () => {
      document.title = 'Faith Ouma | UI/UX Designer & Developer'
    }
  }, [project])

  return (
    <article>
      {/* Header */}
      <Container className="pt-10 md:pt-14">
        <Link to="/projects" className="inline-flex items-center gap-1.5 text-sm font-medium text-body hover:text-brand">
          <Icon name="arrowLeft" className="size-4" /> All projects
        </Link>
        <div className="mt-6">
          <Pill>{cs.eyebrow}</Pill>
        </div>
        <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">{cs.title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-body">{cs.subtitle}</p>

        <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
          {cs.snapshot.map((s) => (
            <div key={s.label} className="bg-white p-5">
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted">{s.label}</dt>
              <dd className="mt-1 text-sm font-semibold text-ink">{s.value}</dd>
            </div>
          ))}
        </dl>
      </Container>

      {/* Section 1 */}
      <Container className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
        <div>
          <Eyebrow icon="eye">{cs.brief.label}</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">{cs.brief.heading}</h2>
          <p className="mt-4 leading-relaxed text-body">{cs.brief.text}</p>
          <ul className="mt-6 space-y-3">
            {cs.brief.points.map((pt) => (
              <li key={pt} className="flex gap-3 text-sm text-ink">
                <Icon name="check" className="size-5 shrink-0 text-brand" />
                {pt}
              </li>
            ))}
          </ul>
        </div>
        <figure className="relative overflow-hidden rounded-2xl shadow-2xl shadow-ink/15">
          <img src={cs.brief.image} alt={`${project.name} homepage hero`} className="aspect-[16/9] w-full object-cover" />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-6 pt-16 text-white">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/75">
              {cs.brief.imageCaptionLabel}
            </span>
            <span className="mt-1 block text-lg font-bold">{cs.brief.imageCaption}</span>
          </figcaption>
        </figure>
      </Container>

      {/* The Build */}
      <section className="mb-16 bg-ink text-white md:mb-24">
        <Container className="py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand">
                <Icon name="code" className="size-4" strokeWidth={2.2} />
                {cs.build.label}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">{cs.build.heading}</h2>
              <p className="mt-4 leading-relaxed text-white/70">{cs.build.text}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 font-mono text-xs text-white/90"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {cs.build.items.map((it) => (
                <div key={it.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="font-semibold">{it.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/65">{it.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Users */}
      <Container className="pb-16 md:pb-24">
        <Eyebrow icon="users">{cs.users.label}</Eyebrow>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">{cs.users.heading}</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {cs.users.cards.map((c) => (
            <div key={c.title} className="rounded-2xl border border-line bg-white p-6">
              <span className="grid size-11 place-items-center rounded-xl bg-brand-soft text-brand">
                <Icon name={c.icon} />
              </span>
              <h3 className="mt-5 text-lg font-bold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">“{c.quote}”</p>
              <p className="mt-4 text-sm font-semibold text-brand">Seeking: {c.seeking}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* Section 3 */}
      <Container className="pb-16 md:pb-24">
        <div className="grid items-center gap-10 rounded-3xl bg-blush p-8 sm:p-12 md:grid-cols-2">
          <div>
            <Eyebrow icon="wand">{cs.making.label}</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">{cs.making.heading}</h2>
            <p className="mt-4 leading-relaxed text-body">{cs.making.text}</p>
            <div className="mt-7 grid gap-6 sm:grid-cols-2">
              {cs.making.items.map((it) => (
                <div key={it.title}>
                  <h3 className="font-bold">{it.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-body">{it.text}</p>
                </div>
              ))}
            </div>
          </div>
          <BrowserFrame src={cs.making.image} alt={`${project.name} page section`} url={host} />
        </div>
      </Container>

      {/* Section 4 */}
      <Container className="pb-16 text-center md:pb-24">
        <div className="flex justify-center">
          <Eyebrow icon="star">{cs.final.label}</Eyebrow>
        </div>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{cs.final.heading}</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-body">{cs.final.text}</p>

        <div className="mt-10 grid gap-6 text-left md:grid-cols-2">
          {cs.final.shots.map((s) => (
            <div key={s.title}>
              <BrowserFrame src={s.image} alt={s.title} url={host} />
              <h3 className="mt-4 font-bold">{s.title}</h3>
              <p className="text-sm text-body">{s.text}</p>
            </div>
          ))}
        </div>

        <ul className="mx-auto mt-12 grid max-w-4xl gap-3 text-left sm:grid-cols-2">
          {cs.final.highlights.map((h) => (
            <li key={h} className="flex gap-3 rounded-xl border border-line bg-white px-4 py-3 text-sm">
              <Icon name="check" className="size-5 shrink-0 text-brand" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <Button href={project.liveUrl} icon="arrowUpRight">
            Visit the Live Site
          </Button>
        </div>
      </Container>

      {/* Next project */}
      {others.length > 0 && (
        <Container className="pb-20">
          {others.map((o) => (
            <Link
              key={o.slug}
              to={`/projects/${o.slug}`}
              className="group flex items-center justify-between gap-6 rounded-3xl border border-line bg-white p-6 transition-colors hover:border-brand sm:p-8"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted">Next case study</p>
                <p className="mt-1 text-2xl font-bold group-hover:text-brand">{o.name}</p>
              </div>
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-brand text-white">
                <Icon name="arrowRight" />
              </span>
            </Link>
          ))}
        </Container>
      )}
    </article>
  )
}
