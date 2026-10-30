import { site } from '../data/site'
import { Container } from './ui'
import { Icon } from './Icon'
import { Logo } from './Navbar'

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-16 bg-white">
      <Container className="py-16">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 rounded-3xl bg-ink px-8 py-10 text-white sm:px-12 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Have a project in mind?</h2>
            <p className="mt-2 max-w-md text-white/70">
              I build websites and web apps end to end, from design to deployment. Tell me about your idea and let's make it real.
            </p>
          </div>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            <Icon name="mail" className="size-5" />
            Email Me
          </a>
        </div>

        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-body">{site.footerBlurb}</p>
            <div className="mt-5 flex gap-3">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid size-10 place-items-center rounded-xl border border-line text-body transition-colors hover:border-brand hover:text-brand"
              >
                <Icon name="linkedin" />
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid size-10 place-items-center rounded-xl border border-line text-body transition-colors hover:border-brand hover:text-brand"
              >
                <Icon name="github" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-ink">Contact Info</h3>
            <ul className="mt-4 space-y-3 text-sm text-body">
              <li>
                <a href={site.phoneHref} className="flex items-center gap-3 hover:text-brand">
                  <Icon name="phone" className="size-4 text-brand" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 break-all hover:text-brand">
                  <Icon name="mail" className="size-4 shrink-0 text-brand" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="pin" className="size-4 text-brand" />
                {site.location}
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-14 border-t border-line pt-6 text-xs text-muted">
          © {new Date().getFullYear()} {site.name}. Designed in Figma, built with React & Tailwind CSS.
        </p>
      </Container>
    </footer>
  )
}
