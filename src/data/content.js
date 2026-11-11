/**
 * ============================================================
 *  CENTRAL CONTENT FILE — single source of truth for the site.
 *  Update your placeholders here (email, LinkedIn, photo, links)
 *  and they propagate across the whole portfolio.
 * ============================================================
 */

export const profile = {
  name: "Mirembe Jane Mugeni",
  shortName: "Mirembe",
  initials: "MJ",
  title: "Software Engineering Apprentice | Python Backend Developer",
  location: "Kampala, Uganda",
  tagline: "I create, transform and see what others don't.",
  philosophy: "Confidence is to be shown and not talked about.",
  heroHeadline: ["Building Technology.", "Solving Problems.", "Creating Impact."],
  heroIntro:
    "I'm Mirembe Jane Mugeni, a Software Engineering Apprentice and Python Backend Developer passionate about building scalable digital solutions that solve real-world problems.",
  aboutTitle: "Creating, transforming & seeing what others don't",
  // ✅ Real details below — verified 2026-11-10.
  email: "mirembejanegift@gmail.com",
  emailIsPlaceholder: false,
  linkedin: "https://www.linkedin.com/in/mirembe-jane/",
  linkedinIsPlaceholder: false,
  github: "https://github.com/mirembejanegift",
  // Local photo: your portrait lives at public/images/profile/mirembe.jpg ✅
  photo: "/images/profile/mirembe.jpg",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Experience", href: "#experience" },
  { label: "Interests", href: "#interests" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  paragraphs: [
    "I'm Mirembe Jane Mugeni, a Software Engineering Apprentice and Python Backend Developer from Uganda with a passion for building technology-driven solutions that solve real-world problems.",
    "My journey into technology has taught me that growth comes from curiosity, consistency, discipline and the willingness to solve difficult problems. I enjoy working on challenging projects, learning new technologies, collaborating with other developers and transforming ideas into practical solutions.",
  ],
  beyondCodeLabel: "Beyond code, you'll find me",
  beyondCode: ["Travelling", "Meeting new people", "Music", "Sports"],
  ambition:
    "My ambition is to become a highly skilled software engineer, build impactful technology solutions and contribute to the growth of Africa's technology ecosystem.",
};

export const skillCategories = [
  {
    id: "backend",
    title: "Backend Development",
    description: "My core strength — designing and building server-side systems.",
    skills: [
      { name: "Python", level: "Proficient" },
      { name: "Django", level: "Proficient" },
      { name: "Django REST Framework", level: "Proficient" },
      { name: "REST API Development", level: "Proficient" },
      { name: "Authentication & Authorization", level: "Working Knowledge" },
      { name: "Backend Architecture", level: "Working Knowledge" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    description: "Structuring and managing the data behind applications.",
    skills: [
      { name: "PostgreSQL", level: "Proficient" },
      { name: "SQL", level: "Proficient" },
      { name: "Database Design", level: "Working Knowledge" },
      { name: "Data Modelling", level: "Working Knowledge" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Growing my ability to build complete user interfaces.",
    skills: [
      { name: "HTML5", level: "Working Knowledge" },
      { name: "CSS3", level: "Working Knowledge" },
      { name: "JavaScript", level: "Currently Learning" },
    ],
  },
  {
    id: "tools",
    title: "Development Tools",
    description: "The workflow that keeps my projects organised and collaborative.",
    skills: [
      { name: "Git", level: "Proficient" },
      { name: "GitHub", level: "Proficient" },
      { name: "VS Code", level: "Proficient" },
      { name: "Postman", level: "Working Knowledge" },
      { name: "Swagger / OpenAPI", level: "Working Knowledge" },
    ],
  },
  {
    id: "additional",
    title: "Additional Technologies",
    description: "Expanding into the ecosystem around modern backend systems.",
    skills: [
      { name: "Celery", level: "Working Knowledge" },
      { name: "Redis", level: "Working Knowledge" },
      { name: "Docker", level: "Currently Learning" },
      { name: "CI/CD", level: "Currently Learning" },
      { name: "Cloud Computing", level: "Currently Learning" },
    ],
  },
];

export const proficiencyLevels = {
  Proficient: "Apply confidently in real projects",
  "Working Knowledge": "Applied in projects, continuing to deepen",
  "Currently Learning": "Actively studying and practising",
};

export const projects = [
  {
    id: "ugexim",
    featured: true,
    name: "UGExim",
    subtitle: "Integrated Client Management & Loan Operations Platform",
    role: "Backend & Data Lead",
    status: "Ongoing — one of my major current projects",
    image: null, // ⚠️ PLACEHOLDER — add a screenshot when available
    imagesPath: "/images/ugexim", // ⚠️ Placeholder until you supply screenshots in public/images/ugexim
    images: [], // add filenames here as you supply them, e.g. ["dashboard.png", "loan-workflow.png"]
    description:
      "An integrated client management and loan operations platform designed to improve how financial institutions manage client onboarding, loan applications, credit appraisal, documentation and approval workflows — replacing manual and email-based processes with a centralized digital platform.",
    contributions: [
      "Backend API development using Django and Django REST Framework",
      "Database design and management using PostgreSQL",
      "Implementation of backend business logic",
      "Development of application and credit appraisal workflows",
      "Authentication and role-based access control",
      "Supporting document management and application tracking",
      "Collaborating with frontend developers and other backend engineers",
      "Team collaboration with Git and GitHub",
    ],
    technologies: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Celery", "Redis", "Git & GitHub"],
    links: {
      repo: null, // ⚠️ PLACEHOLDER — private/unreleased repository; not published yet
      repoNote: "Private project — repository link coming soon",
      demo: null,
      demoNote: "Live demo not available yet",
    },
    achievement: null,
  },
  {
    id: "bodaboda",
    name: "Boda Boda Payment Tracking System",
    subtitle: "Motorcycle Ownership Payment Management",
    status: "In planning — proposed system",
    image: null, // ⚠️ PLACEHOLDER — add a screenshot/design when available
    imagesPath: "/images/bodaboda", // ⚠️ Placeholder until you supply screenshots in public/images/bodaboda
    images: [], // add filenames here as you supply them, e.g. ["payments-tracker.png"]
    description:
      "A system designed to help motorcycle owners manage ownership payments and financial records for fleets of roughly 6–15 motorcycles — replacing manual Excel-based payment tracking with a centralized digital system.",
    highlightsLabel: "Planned features",
    highlights: [
      "Motorcycle registration and management",
      "Rider information management",
      "Weekly payment tracking",
      "Recording cash and Mobile Money payments",
      "Tracking total amounts paid",
      "Calculating outstanding balances",
      "Identifying overdue payments and arrears",
      "Generating payment histories and reports",
    ],
    technologies: ["Python", "Django", "Django REST Framework", "PostgreSQL"],
    links: {
      repo: null, // ⚠️ PLACEHOLDER — repository link not published yet
      repoNote: "Repository link coming soon",
      demo: null,
      demoNote: "Not built yet — system in planning",
    },
    achievement: null,
  },
  {
    id: "cropxcel",
    name: "CropXcel",
    subtitle: "Agricultural Technology Solution",
    role: "Hackathon Team Member",
    image: null, // ⚠️ PLACEHOLDER — add a screenshot when available
    imagesPath: "/images/cropxcel", // ⚠️ Placeholder until you supply screenshots in public/images/cropxcel
    images: [], // add filenames here as you supply them
    description:
      "An agricultural technology solution developed to address challenges affecting farmers through technology-driven information and weather data — built collaboratively under hackathon conditions to solve a real problem for farming communities.",
    highlights: [
      "Collaborative innovation under hackathon conditions",
      "Weather data integration via the Open-Meteo API",
      "Technology-driven information for farmers",
    ],
    technologies: ["Python", "Flask", "Open-Meteo API"],
    links: {
      repo: null, // ⚠️ PLACEHOLDER — repository link not published yet
      repoNote: "Repository link coming soon",
      demo: null,
      demoNote: "Live demo not available yet",
    },
    achievement: "GirlCode Pan-African Hackathon · Kampala, 2026",
  },
];

export const achievements = [
  {
    title: "GirlCode Pan-African Hackathon",
    detail: "Kampala, 2026 · built CropXcel, an AgriTech solution for farmers, with a collaborative team",
    icon: "trophy",
  },
  {
    title: "Certificate in Software Engineering with Python",
    detail: "Refactory Academy — practical, project-driven software engineering training",
    icon: "graduation",
  },
  {
    title: "Selected for the Refactory Apprenticeship Program",
    detail: "Growing through real-world projects, Agile teamwork and mentorship",
    icon: "badge",
  },
  {
    title: "Real-World Software Application Experience",
    detail: "Building production-track systems like UGExim for financial institutions",
    icon: "code",
  },
  {
    title: "Collaborative Software Engineering Projects",
    detail: "Teamwork, Git workflows, code reviews and Agile practices",
    icon: "users",
  },
];

export const education = [
  {
    title: "Software Engineering Apprentice",
    organisation: "Refactory Apprenticeship Program",
    period: "2026 · Present",
    current: true,
    points: [
      "Developing technical and professional skills through practical software engineering projects",
      "Teamwork with Agile practices and real-world problem-solving",
      "Collaborative development with Git and GitHub",
    ],
  },
  {
    title: "Certificate in Software Engineering with Python",
    organisation: "Refactory Academy",
    period: "2026",
    current: false,
    photo: "/images/achievements/refactory-certificate-ceremony.jpg",
    photoAlt: "Mirembe Jane Mugeni at her Refactory Academy certificate ceremony",
    points: [
      "Practical software engineering training with Python",
      "Django development and backend engineering",
      "Database management and Git-based collaborative development",
      "Software development principles and building practical software solutions",
    ],
  },
  {
    title: "Additional Learning",
    organisation: "Continuous professional development",
    period: "Ongoing",
    current: false,
    points: [
      "Cloud computing certifications — currently in progress",
      "Continuous self-learning in software engineering and emerging technologies",
    ],
  },
];

export const interests = [
  { title: "Backend Software Engineering", icon: "server", description: "Designing robust APIs, services and systems" },
  { title: "AI & Machine Learning", icon: "sparkles", description: "Exploring intelligent solutions to real problems" },
  { title: "FinTech", icon: "coins", description: "Technology that makes finance accessible and reliable" },
  { title: "AgriTech", icon: "sprout", description: "Empowering farmers with data-driven tools" },
  { title: "Cloud Computing", icon: "cloud", description: "Deploying systems that scale" },
  { title: "Tech for African Communities", icon: "globe", description: "Building solutions with local impact" },
];

export const contactIntro =
  "Have an idea, opportunity or project in mind? Let's build something meaningful together.";
