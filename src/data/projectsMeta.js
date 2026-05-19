/**
 * Portfolio project metadata (images mapped in Projects.jsx).
 * categories: used for stack filter (single-select + demo filter).
 * img: key into imageMap in Projects.jsx
 */

export const STACK_FILTER_IDS = [
  { id: 'all', label: 'All stacks' },
  { id: 'mern', label: 'MERN' },
  { id: 'nodejs', label: 'Node / APIs' },
  { id: 'react-vite', label: 'React / Vite' },
  { id: 'nextjs', label: 'Next.js' },
  { id: 'python-ai', label: 'Python & AI / ML' },
  { id: 'django', label: 'Django' },
  { id: 'php', label: 'PHP' },
  { id: 'cpp', label: 'C++' },
  { id: 'linkedin', label: 'LinkedIn highlights' },
];

export const DEMO_FILTER_IDS = [
  { id: 'all', label: 'All projects' },
  { id: 'live', label: 'Live demo' },
  { id: 'no-demo', label: 'No demo (repo / LinkedIn)' },
];

export const projectsMeta = [
  {
    img: 'placeholder',
    title: 'BizPilotHub — Multi-Tenant SaaS Starter (In Progress)',
    bullets: [
      'MERN + TypeScript starter for production-style SaaS products.',
      'Auth, workspaces, RBAC, notifications, and audit logging.',
      'Multi-tenant patterns you can extend for real customers.',
    ],
    repoLink: 'https://github.com/UroojFatim/BizPilotHub',
    categories: ['mern'],
  },
  {
    img: 'placeholder',
    title: 'Aitek Solutions — Client Frontend',
    bullets: [
      'React dashboard and features for AiTek client delivery.',
      'API-driven UI, scalable component structure, Tailwind-ready styling.',
      'Built for maintainability alongside a dedicated backend.',
    ],
    repoLink: 'https://github.com/UroojFatim/Aitek_solutions_frontend',
    categories: ['react-vite'],
  },
  {
    img: 'placeholder',
    title: 'Aitek Solutions — Backend & APIs',
    bullets: [
      'Node/JavaScript services: REST-style APIs and persistence.',
      'Supports authenticated dashboards and integration workflows.',
      'Pairs with the AiTek React frontend for full-stack delivery.',
    ],
    repoLink: 'https://github.com/UroojFatim/Aitek_solutions_backend',
    categories: ['nodejs'],
  },
  {
    img: 'placeholder',
    title: 'WOA (Wolf of Arches) — Dashboard & Features',
    bullets: [
      'Engineering contribution to the WOA dashboard at AiTek Solutions.',
      'Feature implementation in a production-minded web environment.',
      'React, Next.js, Tailwind, and API integration (see LinkedIn).',
    ],
    profileLink: 'https://www.linkedin.com/in/urooj-fatima-588ba2296/',
    categories: ['linkedin', 'react-vite'],
  },
  {
    img: 'placeholder',
    title: 'AceOfAesthetics — Web Platform',
    bullets: [
      'Developed and maintained the AceOfAesthetics web platform (AiTek).',
      'User-focused flows, responsive UI, and ongoing feature delivery.',
      'Details and context on LinkedIn experience section.',
    ],
    profileLink: 'https://www.linkedin.com/in/urooj-fatima-588ba2296/',
    categories: ['linkedin', 'react-vite'],
  },
  {
    img: 'placeholder',
    title: 'Aitek Solutions — Company Website',
    bullets: [
      'Public TypeScript site: clear messaging and fast load times.',
      'Responsive layout and deployment on Vercel.',
      'Brand-facing experience for AiTek Solutions.',
    ],
    demoLink: 'https://aitek-website.vercel.app',
    repoLink: 'https://github.com/UroojFatim/aitek-website',
    categories: ['react-vite'],
  },
  {
    img: 'placeholder',
    title: 'United Stories of America — Podcast Web App',
    bullets: [
      'Podcast discovery and listening experience in production.',
      'Media-oriented UX and reliable client-side navigation.',
      'Deployed for AiTek-style content delivery.',
    ],
    demoLink: 'https://unitedstoriesofamerica.vercel.app',
    repoLink: 'https://github.com/UroojFatim/unitedstoriesofamerica',
    categories: ['react-vite'],
  },
  {
    img: 'placeholder',
    title: 'tMust — E-Commerce (TypeScript)',
    bullets: [
      'Catalog, cart, and commerce UX with TypeScript safety.',
      'Component-driven structure ready for API expansion.',
      'Live deployment for feedback and demos.',
    ],
    demoLink: 'https://t-must.vercel.app',
    repoLink: 'https://github.com/UroojFatim/tMust',
    categories: ['nextjs', 'react-vite'],
  },
  {
    img: 'placeholder',
    title: 'University RAG Chatbot — Document-Grounded Q&A',
    bullets: [
      'Upload PDF/PPTX; answers cite sources from your materials only.',
      'FastAPI + LangChain/LangGraph + ChromaDB + Groq + Streamlit.',
      'Demonstrates RAG pipelines and vector retrieval done right.',
    ],
    repoLink: 'https://github.com/UroojFatim/university-rag',
    categories: ['python-ai'],
  },
  {
    img: 'placeholder',
    title: 'IMDB Sentiment Analysis — NLP / ML',
    bullets: [
      'Classifies reviews with negation-aware text handling.',
      'Python + scikit-learn; embeddings for stronger signal.',
      'Great template for analytics and moderation experiments.',
    ],
    repoLink: 'https://github.com/UroojFatim/Sentiment-Analysis',
    categories: ['python-ai'],
  },
  {
    img: 'placeholder',
    title: 'Cynosure Digital — Client POC (React + Vite)',
    bullets: [
      'High-polish POC for AiTek evaluation under deadline.',
      'Interactive UI, responsive layout, smooth navigation.',
      'React + Vite — stakeholder-ready delivery.',
    ],
    demoLink: 'https://cynosure-digital.vercel.app/',
    repoLink: 'https://github.com/UroojFatim/Cynosure_Digital',
    categories: ['react-vite'],
  },
  {
    img: 'placeholder',
    title: 'AI Virtual Try-On — Backend (FYP, In Progress)',
    bullets: [
      'Python backend for AI-assisted virtual try-on (in progress).',
      'API boundaries for image-centric retail workflows.',
      'Positions toward scalable inference and product integration.',
    ],
    repoLink: 'https://github.com/UroojFatim/Try_On_Backend',
    categories: ['python-ai'],
  },
  {
    img: 'plant',
    title: 'PlantPalace — React E-Commerce for Plant Care 🌿',
    bullets: [
      'Vite + React: search, catalog, and checkout-oriented UX.',
      'Competition-tested delivery (runner-up) under tight timelines.',
      'Responsive UI and performance-conscious bundling.',
    ],
    demoLink: 'https://plant-palace-beta.vercel.app/',
    repoLink: 'https://github.com/UroojFatim/PlantPalace',
    categories: ['react-vite'],
  },
  {
    img: 'theater',
    title: 'Theater — Show Listings & Schedules 🎬',
    bullets: [
      'MERN-course project: explore shows, schedules, and theater content.',
      'React SPA with API-driven updates and mobile-friendly layout.',
      'Clear information architecture for content-heavy apps.',
    ],
    demoLink: 'https://theater-snowy.vercel.app/',
    repoLink: 'https://github.com/UroojFatim/Theater',
    categories: ['mern', 'react-vite'],
  },
  {
    img: 'evechic',
    title: 'EveChic Boutique — PHP E-Commerce 🛍️',
    bullets: [
      'Fashion storefront: HTML, CSS, Bootstrap, PHP, JavaScript.',
      'Product listings, cart flows, and modular PHP structure.',
      'Solid Web Engineering fundamentals and database-backed paths.',
    ],
    repoLink: 'https://github.com/UroojFatim/EveChic_Boutique',
    categories: ['php'],
  },
  {
    img: 'jobsphere',
    title: 'JobSphere — Job Portal (PHP) 💼',
    bullets: [
      'Candidates search/apply; employers post and manage roles.',
      'PHP-backed CRUD with practical hiring workflows.',
      'Separation of concerns for job data and applications.',
    ],
    repoLink: 'https://github.com/UroojFatim/Job-Sphere',
    categories: ['php'],
  },
  {
    img: 'pickbazar',
    title: 'PickBazar — Next.js E-Commerce 🛒',
    bullets: [
      'Next.js + Tailwind: search, filters, and cart management.',
      'Shopify Partner ecosystem integration.',
      'Deployed on Vercel with team project-management practice.',
    ],
    demoLink: 'https://pickbazar-e-commerce-template.vercel.app/',
    repoLink: 'https://github.com/EponymousBearer/pickbazar_e-commerce_template',
    categories: ['nextjs'],
  },
  {
    img: 'psy',
    title: 'PsyAssess — Django Personality Assessment 🧠💼',
    bullets: [
      'Django + MySQL with psychology experts for valid assessments.',
      'Admin-managed tests and secure, reviewable results.',
      'Supports hiring teams who need structured personality insight.',
    ],
    repoLink: 'https://github.com/UroojFatim/Personality_Assessment_Website',
    categories: ['django'],
  },
  {
    img: 'dailytimes',
    title: 'DailyTimes — News & Articles POC 📰',
    bullets: [
      'React POC for editorial layout and component architecture.',
      'Responsive typography and fast perceived performance.',
      'Client-style demo for Neplen-style requirements.',
    ],
    demoLink: 'https://daily-times-alpha.vercel.app/',
    repoLink: 'https://github.com/UroojFatim/DailyTimes',
    categories: ['react-vite'],
  },
  {
    img: 'color',
    title: 'Color Detector — OpenCV Assistive Tool 🎨',
    bullets: [
      'Python + OpenCV: dominant color from camera or image input.',
      'NumPy-backed pixel analysis; useful accessibility angle.',
      'Demonstrates practical computer vision fundamentals.',
    ],
    repoLink: 'https://github.com/UroojFatim/ColorDetector',
    categories: ['python-ai'],
  },
  {
    img: 'library',
    title: 'Library Management System — C++ 📚',
    bullets: [
      'Console app: catalog, lend, return, borrower tracking.',
      'Structured data for efficient search and updates.',
      'Strong C++ fundamentals for operational software.',
    ],
    repoLink: 'https://github.com/UroojFatim/Library-Management-System',
    categories: ['cpp'],
  },
  {
    img: 'airline',
    title: 'Airline Reservation System — C++ (DSA & OOP) ✈️',
    bullets: [
      'Bookings, cancellations, and passenger records with OOP.',
      'DSA-style structures for scalable in-memory operations.',
      'DBMS-course CEP with clear transaction-style flows.',
    ],
    repoLink: 'https://github.com/UroojFatim/CEP-Project',
    categories: ['cpp'],
  },
  {
    img: 'placeholder',
    title: 'Theft Detection System — Raspberry Pi (OOP)',
    bullets: [
      '3rd-semester OOP: hardware + software security concept.',
      'Raspberry Pi integration and object-oriented design.',
      'Details on LinkedIn projects section.',
    ],
    profileLink: 'https://www.linkedin.com/in/urooj-fatima-588ba2296/',
    categories: ['linkedin'],
  },
  {
    img: 'placeholder',
    title: 'Traffic Light Sensor — Intersection Logic',
    bullets: [
      '1st-semester build: sensors and flow regulation concepts.',
      'Hands-on systems thinking and integration basics.',
      'Documented on LinkedIn as early engineering foundation.',
    ],
    profileLink: 'https://www.linkedin.com/in/urooj-fatima-588ba2296/',
    categories: ['linkedin'],
  },
];
