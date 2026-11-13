// All project content lives here. Case-study pages are generated from this data.

export type IconName =
  | 'building'
  | 'flag'
  | 'handshake'
  | 'eye'
  | 'users'
  | 'wand'
  | 'star'
  | 'activity'
  | 'clipboard'
  | 'landmark'

export type CaseStudy = {
  eyebrow: string
  title: string
  subtitle: string
  snapshot: { label: string; value: string }[]
  brief: {
    label: string
    heading: string
    text: string
    points: string[]
    image: string
    imageCaptionLabel: string
    imageCaption: string
  }
  build: {
    label: string
    heading: string
    text: string
    items: { title: string; text: string }[]
  }
  users: {
    label: string
    heading: string
    cards: { icon: IconName; title: string; quote: string; seeking: string }[]
  }
  making: {
    label: string
    heading: string
    text: string
    items: { title: string; text: string }[]
    image: string
  }
  final: {
    label: string
    heading: string
    text: string
    shots: { image: string; title: string; text: string }[]
    highlights: string[]
  }
}

export type Project = {
  slug: string
  name: string
  client: string
  category: string
  summary: string
  // One short line for the home page cards.
  short: string
  detail: string
  stack: string[]
  image: string
  liveUrl: string
  status?: string
  year: string
  caseStudy?: CaseStudy
}

export const projects: Project[] = [
  {
    slug: 'gma',
    name: 'GMA Sports & Business',
    client: 'GMA Global Sports & Business Advisory',
    category: 'Multi-page website · React',
    short: 'Multi-page website for a Nairobi sports and business consultancy.',
    summary:
      'Designed and developed a multi-page React website for a Nairobi sports and business consultancy, with two service divisions, eight services and a consultation-booking flow.',
    detail:
      'Built with React and Tailwind CSS from my own Figma design: a responsive layout, a services dropdown split by division, a scrolling partner ribbon and section-by-section navigation. Deployed on Vercel.',
    stack: ['React', 'Tailwind CSS', 'Vercel', 'Figma'],
    image: '/images/gma-hero.jpg',
    liveUrl: 'https://gma-website-fikn.vercel.app/',
    year: '2026',
    caseStudy: {
      eyebrow: 'Development Case Study',
      title: 'GMA Sports: Strategic Digital Ecosystem',
      subtitle:
        'Designing and developing a high-end, responsive website for an international sports consultancy, balancing prestige with fast, practical performance.',
      snapshot: [
        { label: 'Role', value: 'Developer & UI/UX Designer' },
        { label: 'Stack', value: 'React, Tailwind CSS' },
        { label: 'Timeline', value: 'Aug 2026 – Present' },
        { label: 'Hosting', value: 'Live on Vercel' },
      ],
      brief: {
        label: 'Section 1: The Brief',
        heading: 'Modernizing a Professional Hub',
        text: 'GMA needed a digital home that matches the elite world of sports management. It is a consultancy, not a traditional law firm, so the site had to feel as credible as a top advisory practice while loading quickly and working well on every screen.',
        points: [
          'One responsive codebase for desktop, tablet and mobile',
          'Clear structure for two divisions and eight services',
          'Serif headlines and gold accents on deep navy to signal prestige',
        ],
        image: '/images/gma-hero.jpg',
        imageCaptionLabel: 'Live site',
        imageCaption: 'The Convergence of Business & Sport',
      },
      build: {
        label: 'Section 2: The Build',
        heading: 'From Figma to Production',
        text: 'I designed the site in Figma and then developed it myself in React with Tailwind CSS, so the code follows the design closely. It is deployed on Vercel and stays live there until the client moves it to their own domain.',
        items: [
          {
            title: 'Responsive layouts',
            text: 'Tailwind utility classes keep spacing, type and grids consistent from mobile to wide desktop.',
          },
          {
            title: 'Navigation',
            text: 'A sticky header with a Services dropdown grouped into Consultancy and Legal divisions.',
          },
          {
            title: 'Interactive sections',
            text: 'A continuously scrolling ribbon of organisations, plus leadership, partners and insights sections.',
          },
          {
            title: 'Deployment',
            text: 'Hosted on Vercel, so each update I push goes live without manual uploads.',
          },
        ],
      },
      users: {
        label: 'Section 3: The Users',
        heading: 'Who the Site Serves',
        cards: [
          {
            icon: 'building',
            title: 'Corporate Clients',
            quote:
              "I need to verify the consultancy's track record and professional standing before initiating a partnership.",
            seeking: 'Credibility & Authority',
          },
          {
            icon: 'flag',
            title: 'Professional Athletes',
            quote:
              'I require specialized data support and legal advice to protect my career and maximize my commercial potential.',
            seeking: 'Data & Protection',
          },
          {
            icon: 'handshake',
            title: 'Strategic Partners',
            quote:
              'I look for an organized ecosystem where collaboration is streamlined and project goals are clearly outlined.',
            seeking: 'Structure & Efficiency',
          },
        ],
      },
      making: {
        label: 'Section 4: Design to Code',
        heading: 'From Information Hierarchy to UI',
        text: 'I restructured complex consultancy information into digestible blocks, with two divisions, eight disciplines and six reasons to choose GMA, and turned each block into a reusable section on a 12-column grid.',
        items: [
          {
            title: 'Content Structuring',
            text: "Putting 'Who We Are' and 'What We Do' first to build trust immediately.",
          },
          {
            title: 'Visual Language',
            text: 'A consistent icon set in gold on navy cards, repeated across service and feature sections.',
          },
        ],
        image: '/images/gma-who-we-are.jpg',
      },
      final: {
        label: 'Section 5: The Final Product',
        heading: 'Precision in Every Pixel',
        text: 'The finished site is fast, responsive and trustworthy, positioning GMA as a premier choice for strategic advisory in the sports industry.',
        shots: [
          {
            image: '/images/gma-services.jpg',
            title: 'Eight Disciplines, Two Divisions',
            text: 'Service cards built as one repeatable component in a responsive grid.',
          },
          {
            image: '/images/gma-why.jpg',
            title: 'Why Choose GMA',
            text: 'Six differentiators laid out in a three-column grid that stacks on mobile.',
          },
        ],
        highlights: [
          'Services dropdown split by Consultancy and Legal division',
          'Continuously scrolling ribbon of organisations',
          'Leadership profiles, partners and insights sections',
          'Consultation call to action repeated through the page',
        ],
      },
    },
  },
  {
    slug: 'afritech',
    name: 'Afritech Sports',
    client: 'Afritech Sports Technology & Innovation Group',
    category: 'Company website · React',
    short: 'Company website for a pan-African sports technology firm.',
    summary:
      'Designed and built the company website for a pan-African sports technology firm: device showcase, six-country footprint and a lead-capture enquiry form.',
    detail:
      'Built with React and Tailwind CSS: device product cards, a six-country footprint section, insights articles and a detailed enquiry form with dropdowns, multi-select and a required consent checkbox.',
    stack: ['React', 'Tailwind CSS', 'Figma'],
    image: '/images/afritech-hero.jpg',
    liveUrl: 'https://www.afritechsports.com/',
    year: '2025',
    caseStudy: {
      eyebrow: 'Development Case Study',
      title: 'Afritech Sports: Data-Driven Storytelling',
      subtitle:
        'Developing a bold, responsive company website that explains sports technology to athletes, coaches and governments across Africa.',
      snapshot: [
        { label: 'Role', value: 'Developer & UI/UX Designer' },
        { label: 'Stack', value: 'React, Tailwind CSS' },
        { label: 'Launched', value: 'November 2025' },
        { label: 'Status', value: 'Live at afritechsports.com' },
      ],
      brief: {
        label: 'Section 1: The Brief',
        heading: 'Simplifying Complex Tech',
        text: 'Afritech distributes performance devices such as Soccerbee, OliverPro, Blazepod and A-Champs ROX Pro, and also advises ministries on digital transformation and AI data governance. The site had to explain all of this to non-technical visitors and turn their interest into enquiries.',
        points: [
          'Benefit-led device cards with links to each official product site',
          'Proof up front: 200+ teams, 50+ countries, 45% lower injury risk',
          'One clear path to action: book a strategy call',
        ],
        image: '/images/afritech-hero.jpg',
        imageCaptionLabel: 'Live site',
        imageCaption: 'Performance, Data & African Sport',
      },
      build: {
        label: 'Section 2: The Build',
        heading: 'Built to Convert',
        text: 'I designed the layout in Figma and developed it in React with Tailwind CSS, with a dark theme, neon accents and a display typeface for the sporty identity.',
        items: [
          {
            title: 'Enquiry form',
            text: 'Required fields, a country dropdown, multi-select for devices, a service dropdown and a required privacy consent checkbox.',
          },
          {
            title: 'Reusable cards',
            text: 'Pillar, device and service cards built from the same patterns so new items are easy to add.',
          },
          {
            title: 'African footprint',
            text: 'A country list for Kenya, Rwanda, Namibia, Uganda, South Africa and Nigeria with a detail panel for each.',
          },
          {
            title: 'In-page navigation',
            text: 'Anchor links from the header to About, Solutions, Devices and Contact, plus external product and social links.',
          },
        ],
      },
      users: {
        label: 'Section 3: The Users',
        heading: 'Who the Site Speaks To',
        cards: [
          {
            icon: 'activity',
            title: 'Performance Athletes',
            quote:
              'I want to see how a device will improve my training and my results, without needing a team or special setup.',
            seeking: 'Results & Simplicity',
          },
          {
            icon: 'clipboard',
            title: 'Team Coaches',
            quote:
              'I need to compare tools quickly and understand how they help me manage player load and reduce injuries.',
            seeking: 'Clarity & Comparison',
          },
          {
            icon: 'landmark',
            title: 'Federations & Ministries',
            quote:
              'I need a credible partner for digital transformation, data systems and policy across our region.',
            seeking: 'Trust & Expertise',
          },
        ],
      },
      making: {
        label: 'Section 4: Design to Code',
        heading: 'From Product to Story',
        text: 'Instead of a catalogue, the page tells a story: who Afritech is, what it sells, where it works and why to choose it, ending in an enquiry form that captures what each lead needs.',
        items: [
          {
            title: 'Strategic Wireframing',
            text: 'Mapping the flow from three pillars to devices, footprint, services and contact.',
          },
          {
            title: 'Structured Presentation',
            text: 'Equal-weight device cards with three key benefits each and a link to the official site.',
          },
        ],
        image: '/images/afritech-solutions.jpg',
      },
      final: {
        label: 'Section 5: The Final Product',
        heading: 'A Platform Built for Action',
        text: 'The live site pairs a bold sporty identity with practical structure, so visitors understand the offer in seconds and know exactly how to get in touch.',
        shots: [
          {
            image: '/images/afritech-devices.jpg',
            title: 'Devices We Sell',
            text: 'Product cards backed by real performance statistics.',
          },
          {
            image: '/images/afritech-contact.jpg',
            title: 'Lead Capture',
            text: 'A closing call to action and an enquiry form that asks for country, devices and service needed.',
          },
        ],
        highlights: [
          'Six-country footprint with Kenya as headquarters',
          'Eight service areas from grassroots development to smart stadiums',
          'Enquiry form with dropdowns, multi-select and consent checkbox',
          'Insights articles on AI, wearables and federation data systems',
        ],
      },
    },
  },
  {
    slug: 'pedni-honey',
    name: 'Pedni Honey',
    client: 'Pedni Honey',
    category: 'Full-stack e-commerce',
    short: 'Full-stack store with M-Pesa checkout for a beekeeping business.',
    summary:
      'Full-stack e-commerce platform for a beekeeping supplies business: React front end, FastAPI and PostgreSQL back end, and M-Pesa checkout.',
    detail:
      'React and Tailwind CSS front end talking to a REST API I built with FastAPI (Python), backed by a PostgreSQL database, with M-Pesa payments at checkout.',
    stack: ['React', 'Tailwind CSS', 'FastAPI', 'Python', 'PostgreSQL', 'REST API', 'M-Pesa'],
    image: '/images/pedni-hero.jpg',
    liveUrl: 'https://pedni-honey.vercel.app/',
    status: 'In development',
    year: '2026',
  },
]

// Figma explorations shown on the Projects page.
// image: a picture of the design (put it in public/images). Without one, a coloured placeholder shows.
// Clicking a card opens the picture larger on the page.
export type Exploration = {
  title: string
  type: string
  image?: string
  // Section snapshots shown one after another when the card is opened.
  gallery?: string[]
  badge?: string
  accent: string
}

export const explorations: Exploration[] = [
  {
    title: 'Mchezaji Platform',
    type: 'Grassroots sports platform connecting young athletes with scouts and teams.',
    image: '/images/mchezaji.jpg',
    gallery: [
      '/images/mchezaji-design-01-hero.jpg',
      '/images/mchezaji-design-02-sports.jpg',
      '/images/mchezaji-design-03-level-up.jpg',
      '/images/mchezaji-design-04-built-for-everyone.jpg',
      '/images/mchezaji-design-05-analytics.jpg',
      '/images/mchezaji-design-06-learn.jpg',
      '/images/mchezaji-design-07-scouting.jpg',
      '/images/mchezaji-design-08-team.jpg',
      '/images/mchezaji-design-09-community.jpg',
      '/images/mchezaji-design-10-footer.jpg',
    ],
    accent: 'from-sky-400 to-emerald-400',
  },
  {
    title: 'Pedni Honey',
    type: 'Early Figma design for a honey e-commerce website',
    image: '/images/pedni-figma.jpg',
    gallery: [
      '/images/pedni-design-1-hero.jpg',
      '/images/pedni-design-2-about.jpg',
      '/images/pedni-design-3-products.jpg',
      '/images/pedni-design-4-values.jpg',
      '/images/pedni-design-5-contact.jpg',
    ],
    accent: 'from-amber-300 to-amber-500',
  },
  {
    title: 'Onboarding & Profile App',
    type: 'Mobile app flow from onboarding to login to a user profile, with bold editorial typography.',
    image: '/images/onboarding-app.jpg',
    accent: 'from-lime-300 to-emerald-400',
  },
  {
    title: 'Sign-up & Login Flow',
    type: 'Mobile authentication flow: email-first entry, social sign-in, account creation and returning-user login.',
    image: '/images/signup-flow.jpg',
    accent: 'from-emerald-400 to-zinc-800',
  },
]
