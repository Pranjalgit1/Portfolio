// ============================================================================
// THIS FILE IS THE SINGLE SOURCE OF TRUTH FOR ALL PORTFOLIO CONTENT.
// Every component (Hero, About, Projects, Skills, etc.) imports its text from
// here instead of hardcoding it. This means you almost never need to touch
// component files just to update your name, projects, or skills — edit the
// values below and every place they're used updates automatically.
//
// TODO: replace all "#" placeholder links below with real URLs.
// ============================================================================

// Shown in the Hero section and Footer: your name, tagline, and social links.
export const profile = {
  name: 'Pranjal Chamoli',
  role: 'Computer Science Undergrad & Full-Stack / AI Developer',
  tagline: 'Building full-stack products and AI-powered tools — from trading platforms to code review assistants.',
  location: 'Dehradun, India',
  email: 'pranjalchamoli99@gmail.com',
  links: {
    github: 'https://github.com/Pranjalgit1', 
    linkedin: 'https://www.linkedin.com/in/pranjalchamoli/', 
    leetcode: 'https://leetcode.com/u/pranjalgit1/', 
  },
}

// The paragraph shown in the "About" section (src/components/About.jsx).
export const about = `I'm a Computer Science undergraduate at Graphic Era University, Dehradun, maintaining a 9.45 CGPA. \
I build full-stack web applications and explore applied AI — from Generative AI and LLMs to Retrieval-Augmented \
Generation. I enjoy turning complex problems, like visualizing graph algorithms or automating code review, into \
clean, usable software.`

// Each entry becomes one dot on the vertical timeline in src/components/Timeline.jsx.
// Order matters — they render top to bottom in this array order.
export const education = [
  {
    institution: 'Graphic Era University, Dehradun',
    credential: 'B.Tech in Computer Science & Engineering',
    period: '2024 – 2028',
    detail: '9.45 CGPA',
  },
  {
    institution: 'Rishiram Shikshan Sansthan, Uttarkashi',
    credential: 'CBSE Class XII',
    period: '2023',
    detail: '94.4%',
  },
  {
    institution: 'Rishiram Shikshan Sansthan, Uttarkashi',
    credential: 'CBSE Class X',
    period: '2021',
    detail: '92.0%',
  },
]

// Each object becomes one card in src/components/Projects.jsx (rendered via ProjectCard.jsx).
// To add a project: copy one of these objects and add it to the array.
// To remove a project: delete its object from the array.
export const projects = [
  {
    name: 'TradeX — Stock Trading Platform',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    description:
      'Full-stack stock trading platform with portfolio tracking and order management. Secure Node.js/Express APIs process buy/sell transactions, with React dashboards visualizing holdings and trading activity, backed by MongoDB schemas for users, trades, and portfolios.',
    links: {
      source: '#', // TODO: add source code URL
      demo: 'https://tradex1.vercel.app/',
    },
  },
  {
    name: 'Graph Algorithm Visualizer',
    stack: ['Java', 'JavaFX', 'Data Structures'],
    description:
      'Interactive desktop app visualizing Dijkstra’s, Bellman-Ford, Kruskal’s, and Topological Sort. Features dual Single/Compare execution modes with real-time step animation, synchronized pseudocode highlighting, and a drag-and-drop canvas for editing graphs.',
    links: {
      source: '#', // TODO: add source code URL
      demo: 'https://web-theta-mocha-75.vercel.app/',
    },
  },
  {
    name: 'Quiz Master',
    stack: ['Java', 'JavaFX', 'SQLite', 'Maven'],
    description:
      'Desktop quiz application built with Java 21 and a complete MVC architecture. Uses an embedded SQLite database for offline storage and Maven for build automation, with a results dashboard for performance analytics.',
    links: {
      source: '#', // TODO: add source code URL
    },
  },
]

// Grouped skill categories rendered as cards in src/components/Skills.jsx.
// To add a skill, add a string to an "items" array. To add a whole new
// category, add a new { category, items } object.
export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'C', 'C++', 'SQL', 'JavaScript'],
  },
  {
    category: 'Web Development',
    items: ['HTML', 'CSS', 'Tailwind CSS', 'Node.js', 'Express.js', 'REST APIs'],
  },
  {
    category: 'Cloud Computing',
    items: ['Google Cloud Platform', 'Compute Engine', 'Cloud Storage', 'IAM', 'Virtual Machines'],
  },
  {
    category: 'AI & Machine Learning',
    items: ['Generative AI', 'Large Language Models', 'Retrieval-Augmented Generation'],
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'SQL'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Linux', 'Git', 'GitHub', 'Vercel', 'VS Code', 'Android Studio', 'IntelliJ IDEA'],
  },
]

// Rendered as cards in src/components/Certifications.jsx.
export const certifications = [
  {
    name: 'Google Cloud Computing Foundations Certificate',
    issuer: 'Google Cloud',
    link: '#', // TODO: add credential URL
  },
  {
    name: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    issuer: 'Oracle',
    link: '#', // TODO: add credential URL
  },
  {
    name: 'C++ SkillUp Certification',
    issuer: 'GeeksforGeeks',
    link: '#', // TODO: add credential URL
  },
]

// The links shown in the navbar (src/components/Navbar.jsx). "href" must
// match the "id" of the <section> it should scroll to (e.g. #about matches
// <section id="about"> in About.jsx).
export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]
