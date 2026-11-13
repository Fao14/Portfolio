// Edit this file to update your personal details across the whole site.

export const site = {
  name: 'Faith Ouma',
  firstName: 'Faith',
  lastName: 'Ouma',
  role: 'UI/UX Designer & Developer',
  intro:
    "I'm a UI/UX designer and developer based in Nairobi, and a Business Information Technology student at Co-operative University of Kenya. I design and build full-stack products end to end.",
  location: 'Nairobi, Kenya',
  email: 'faithouma003@gmail.com',
  // Shown in the footer. Use the format you want visitors to see.
  phone: '0726 311 097',
  phoneHref: 'tel:+254726311097',
  linkedin: 'https://www.linkedin.com/in/faith-ouma-5565b2280',
  github: 'https://github.com/Fao14',
  photo: '/images/faith.jpg',
  availableForWork: true,

  about: [
    "My journey into tech started in 2023, when I taught myself UI/UX design. I began with the fundamentals (design principles and user research), then practised on small projects: writing user stories, mapping user flows, and learning how to turn what a client asks for into something people can actually use. Along the way I learned to look at the market too, and to design for the business as well as the user.",
    "From there I wanted to build what I designed, so I learned front-end and then back-end development. In 2025 I started freelancing and took on my first clients. In 2026 I joined Little as a UI/UX design and front-end development intern, where I moved from designing interfaces to building them in production code with React and TypeScript.",
    "Today I take projects from the first idea and wireframe all the way to a live product.",
  ],

  stats: [
    { label: 'Live client sites', value: '2' },
    { label: 'Clients', value: '3' },
    { label: 'Designing since', value: '2023' },
  ],

  footerBlurb: 'Websites and web apps, from design to deployment.',
}

export const skills = [
  {
    icon: 'figma',
    title: 'UI Design',
    text: 'High-fidelity interfaces and interactive prototypes in Figma and Framer.',
  },
  {
    icon: 'users',
    title: 'UX Design',
    text: 'User research, user stories, user flows and wireframes that shape what gets built.',
  },
  {
    icon: 'code',
    title: 'Front-End Development',
    text: 'React and TypeScript apps built from reusable components, with mobile-first Tailwind CSS layouts that work on every screen.',
  },
  {
    icon: 'server',
    title: 'APIs & Back-End',
    text: 'REST APIs built with FastAPI and PostgreSQL.',
  },
  {
    icon: 'card',
    title: 'Payments',
    text: "M-Pesa checkout integration with Safaricom's Daraja API.",
  },
  {
    icon: 'rocket',
    title: 'Deployment',
    text: 'Git and GitHub workflows with automatic deploys on Vercel.',
  },
] as const

export const experience = [
  {
    role: 'Freelance Developer & UI/UX Designer',
    org: 'Self-employed',
    period: 'Nov 2025 – Present',
    text: 'Building websites end to end for clients in sports tech, consultancy and e-commerce: React and Tailwind front ends, a FastAPI and PostgreSQL back end with M-Pesa payments, and deployment on Vercel. Each project starts as a Figma design.',
  },
  {
    role: 'UI/UX Design & Front-End Development Intern',
    org: 'Little',
    period: 'Jun 2026 – Sep 2026',
    text: 'Moved from UI/UX design into front-end development, implementing designs with React, JavaScript and TypeScript. Also redesigned a product interface and designed new features as high-fidelity Figma prototypes.',
  },
]

export const coreSkills = [
  'React',
  'TypeScript',
  'JavaScript',
  'Tailwind CSS',
  'REST APIs',
  'FastAPI (Python)',
  'Node.js',
  'PostgreSQL',
  'M-Pesa Integration',
  'UI/UX & Figma',
]

export const tools = ['Git', 'GitHub', 'Vercel', 'Figma', 'Framer']
