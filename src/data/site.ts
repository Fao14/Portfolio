// Edit this file to update your personal details across the whole site.

export const site = {
  name: 'Faith Ouma',
  firstName: 'Faith',
  lastName: 'Ouma',
  role: 'Developer & UI/UX Designer',
  intro:
    'I build fast, responsive websites and web apps with React, TypeScript and Tailwind CSS, and I design them in Figma first so they are easy to use.',
  heroStack: ['React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'PostgreSQL'],
  location: 'Nairobi, Kenya',
  email: 'faithouma003@gmail.com',
  // Shown in the footer. Use the format you want visitors to see.
  phone: '0728 311 097',
  phoneHref: 'tel:+254728311097',
  linkedin: 'https://www.linkedin.com/in/faith-ouma-5565b2280',
  github: 'https://github.com/Fao14',
  photo: '/images/faith.jpg',
  availableForWork: true,

  about:
    "I'm a developer who builds responsive websites and web apps with React, TypeScript and Tailwind CSS. I've shipped live sites for clients in sports tech, consultancy and e-commerce, and I'm building a full-stack store with a FastAPI back end, PostgreSQL and M-Pesa payments. My UI/UX background means I design in Figma before I code, so what I build is easy to use as well as solid.",

  stats: [
    { label: 'Projects Completed', value: '3' },
    { label: 'Experience', value: '1½ Years' },
    { label: 'Happy Clients', value: '3' },
  ],

  footerBlurb:
    "Building fast, responsive web experiences from design to deployment. Let's work together to create something amazing.",
}

export const skills = [
  {
    icon: 'code',
    title: 'Front-End Development',
    text: 'React, TypeScript and JavaScript apps built from reusable components.',
  },
  {
    icon: 'layers',
    title: 'Responsive UI',
    text: 'Mobile-first layouts with Tailwind CSS that work on every screen.',
  },
  {
    icon: 'server',
    title: 'APIs & Back-End',
    text: 'REST APIs with FastAPI and Node.js, backed by PostgreSQL.',
  },
  {
    icon: 'card',
    title: 'Payments',
    text: 'M-Pesa checkout integrated into an e-commerce flow.',
  },
  {
    icon: 'rocket',
    title: 'Deployment',
    text: 'Git and GitHub workflows with automatic deploys on Vercel.',
  },
  {
    icon: 'pointer',
    title: 'UI/UX Design',
    text: 'Wireframes and prototypes in Figma before a line of code.',
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
