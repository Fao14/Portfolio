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
      'Built with React and Tailwind CSS: a responsive layout, a services dropdown split by division, a scrolling partner ribbon and section-by-section navigation.',
    stack: ['React', 'Tailwind CSS', 'Figma'],
    image: '/images/gma-hero.jpg',
    liveUrl: 'https://gma-website-fikn.vercel.app/',
    year: '2026',
    caseStudy: {
      eyebrow: 'Development Case Study',
      title: 'GMA Sports & Business: A Premium Consultancy Website',
      subtitle:
        'Designing and developing a high-end, responsive website for an international sports consultancy, balancing prestige with fast, practical performance.',
      snapshot: [
        { label: 'Role', value: 'UI/UX Designer & Developer' },
        { label: 'Stack', value: 'React, Tailwind CSS' },
        { label: 'Timeline', value: 'August 2026' },
        { label: 'Status', value: 'Live' },
      ],
      brief: {
        label: 'Section 1: The Brief',
        heading: 'Modernizing a Professional Hub',
        text: 'GMA needed a website that feels as credible as a top advisory practice, loads quickly and works well on every screen.',
        points: [
          'One responsive codebase for desktop, tablet and mobile',
          'Clear structure for two divisions and eight services',
          'Serif headlines and gold accents on deep navy to signal prestige',
        ],
        image: '/images/gma-hero.jpg',
        imageCaptionLabel: 'Homepage',
        imageCaption: 'The Convergence of Business & Sport',
      },
      build: {
        label: 'Section 2: The Build',
        heading: 'From Figma to Production',
        text: 'I designed the site in Figma and built it in React with Tailwind CSS, so the code follows the design closely.',
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
            title: 'Performance',
            text: 'Optimised images and lightweight components so pages load quickly on mobile networks.',
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
            quote: "Want to check the consultancy's track record before partnering.",
            seeking: 'Credibility & Authority',
          },
          {
            icon: 'flag',
            title: 'Professional Athletes',
            quote: 'Need advice to protect their careers and grow their commercial value.',
            seeking: 'Data & Protection',
          },
          {
            icon: 'handshake',
            title: 'Strategic Partners',
            quote: 'Look for clear structure and easy collaboration.',
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
        heading: 'The Finished Site',
        text: 'A responsive, multi-page site that presents two divisions and eight services clearly, with consultation booking throughout.',
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
      'Built with React and Tailwind CSS: device product cards, a six-country footprint section, insights articles and an enquiry form for booking strategy calls.',
    stack: ['React', 'Tailwind CSS', 'Figma'],
    image: '/images/afritech-hero.jpg',
    liveUrl: 'https://www.afritechsports.com/',
    year: '2025',
    caseStudy: {
      eyebrow: 'Development Case Study',
      title: 'Afritech Sports: A Company Website for Sports Technology',
      subtitle:
        'Developing a bold, responsive company website that explains sports technology to athletes, coaches and governments across Africa.',
      snapshot: [
        { label: 'Role', value: 'UI/UX Designer & Developer' },
        { label: 'Stack', value: 'React, Tailwind CSS' },
        { label: 'Launched', value: 'November 2025' },
        { label: 'Status', value: 'Live' },
      ],
      brief: {
        label: 'Section 1: The Brief',
        heading: 'Simplifying Complex Tech',
        text: 'Afritech sells sports performance devices and advisory services. The site had to explain these clearly to non-technical visitors and turn interest into enquiries.',
        points: [
          'Benefit-led device cards with links to each official product site',
          'Key benefits shown up front, before visitors scroll',
          'One clear path to action: book a strategy call',
        ],
        image: '/images/afritech-hero.jpg',
        imageCaptionLabel: 'Homepage',
        imageCaption: 'Performance, Data & African Sport',
      },
      build: {
        label: 'Section 2: The Build',
        heading: 'Built to Convert',
        text: 'I designed the layout in Figma and developed it in React with Tailwind CSS, with a dark theme, neon accents and a display typeface for the sporty identity.',
        items: [
          {
            title: 'Enquiry form',
            text: 'Country, device and service fields, so every enquiry arrives with what the team needs.',
          },
          {
            title: 'Reusable cards',
            text: 'Pillar, device and service cards built from the same patterns so new items are easy to add.',
          },
          {
            title: 'African footprint',
            text: 'A section for the six countries where Afritech works, with a detail panel for each.',
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
            quote: 'Want to see how a device will improve their training and results, without special setup.',
            seeking: 'Results & Simplicity',
          },
          {
            icon: 'clipboard',
            title: 'Team Coaches',
            quote: 'Need to compare tools quickly and see how they help manage player load and reduce injuries.',
            seeking: 'Clarity & Comparison',
          },
          {
            icon: 'landmark',
            title: 'Federations & Ministries',
            quote: 'Look for a credible partner for digital transformation, data systems and policy.',
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
        text: 'A bold, sporty identity with a clear structure that leads visitors from the offer to getting in touch.',
        shots: [
          {
            image: '/images/afritech-devices.jpg',
            title: 'Devices We Sell',
            text: 'Product cards with key benefits and links to each official product site.',
          },
          {
            image: '/images/afritech-contact.jpg',
            title: 'Lead Capture',
            text: 'A closing call to action and an enquiry form that asks for country, devices and service needed.',
          },
        ],
        highlights: [
          'Device showcase with links to official product sites',
          'Six-country footprint section',
          'Enquiry form for booking strategy calls',
          'Insights articles section',
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
    caseStudy: {
      eyebrow: 'Full-Stack Case Study',
      title: 'Pedni Honey: From Hive to Checkout',
      subtitle:
        'Designing and building a full-stack e-commerce platform for a Kenyan beekeeping supplies business, from the first Figma screens to M-Pesa checkout.',
      snapshot: [
        { label: 'Role', value: 'UI/UX Designer & Developer' },
        { label: 'Stack', value: 'React, FastAPI, PostgreSQL' },
        { label: 'Payments', value: 'M-Pesa (STK Push)' },
        { label: 'Status', value: 'In development' },
      ],
      brief: {
        label: 'Section 1: The Brief',
        heading: 'Taking a Beekeeping Business Online',
        text: 'Pedni Honey supplies beekeeping equipment, honey and training across Kenya. The goal was one platform where customers can browse equipment, pay with M-Pesa and request training or bulk orders,.',
        points: [
          'A product catalogue with categories, search and stock levels',
          'Checkout built around M-Pesa, the way Kenyan customers pay',
          'Request forms for training, bulk orders and consultations',
        ],
        image: '/images/pedni-hero.jpg',
        imageCaptionLabel: 'Homepage',
        imageCaption: "Nature's Golden Gift",
      },
      build: {
        label: 'Section 2: The Build',
        heading: 'A Full-Stack Platform',
        text: 'I designed the store in Figma, built the front end in React with Tailwind CSS, and connected it to a REST API written in FastAPI (Python) with a PostgreSQL database.',
        items: [
          {
            title: 'REST API',
            text: 'Versioned endpoints for products, orders, reviews, newsletters and authentication, documented with OpenAPI.',
          },
          {
            title: 'M-Pesa checkout',
            text: "Checkout sends an STK Push prompt to the customer's phone, and a payment callback confirms the order and stores the M-Pesa receipt.",
          },
          {
            title: 'Product catalogue',
            text: 'Categories, search and stock status on every product, loaded from the API.',
          },
          {
            title: 'Customer accounts',
            text: 'Registration, login, OTP-based password reset, order history and order tracking.',
          },
        ],
      },
      users: {
        label: 'Section 3: The Users',
        heading: 'Who the Store Serves',
        cards: [
          {
            icon: 'users',
            title: 'Home Buyers',
            quote: 'Want pure, local honey and a quick way to pay with M-Pesa.',
            seeking: 'Trust & Easy Payment',
          },
          {
            icon: 'clipboard',
            title: 'Beekeepers',
            quote: 'Need reliable equipment and training to start or grow an apiary.',
            seeking: 'Equipment & Guidance',
          },
          {
            icon: 'building',
            title: 'Bulk Buyers',
            quote: 'Want to request quotes and order in bulk for a business or institution.',
            seeking: 'Quotes & Volume',
          },
        ],
      },
      making: {
        label: 'Section 4: Design to Code',
        heading: 'From Figma to a Working Store',
        text: 'I designed every page in Figma first, then built it as reusable React components: a warm cream-and-gold look, clear sections for products and services, and simple paths to the cart, checkout and training requests.',
        items: [
          {
            title: 'Product cards',
            text: 'One reusable card component for every product, with category, price, stock status and add to cart.',
          },
          {
            title: 'Live updates',
            text: 'Shop pages refresh automatically when products are updated, so prices and stock stay current.',
          },
        ],
        image: '/images/pedni-why.jpg',
      },
      final: {
        label: 'Section 5: The Final Product',
        heading: 'A Store Built for Kenyan Customers',
        text: 'The platform brings shopping and payment together: customers browse equipment, add to cart and pay with M-Pesa in a few steps.',
        shots: [
          {
            image: '/images/pedni-services.jpg',
            title: 'Services',
            text: 'Training, bulk orders and consultations, each with its own request flow.',
          },
          {
            image: '/images/pedni-shop.jpg',
            title: 'Shop',
            text: 'Category filters and search across beekeeping equipment, with stock shown on every card.',
          },
        ],
        highlights: [
          'M-Pesa STK Push checkout with payment confirmation',
          'Product search and category filters',
          'Customer accounts with order tracking',
          'Customer product reviews',
        ],
      },
    },
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
