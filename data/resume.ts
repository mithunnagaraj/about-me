export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
};

export type Project = {
  name: string;
  label: string;
  description: string;
  tags: string[];
  accent: "coral" | "mint";
  href?: string;
};

export const resume = {
  name: "Mithun Nagaraj",
  role: "Full-Stack AI Engineer",
  location: "Toronto, Canada",
  email: "mithunlike@gmail.com",
  intro: "Technology leader with 16+ years building reliable digital products across banking, healthcare, and enterprise. I bring full-stack engineering, product thinking, and human-centered design together to make complex technology useful.",
  bio: [
    "I’m a technology leader and AI enthusiast who enjoys working at the intersection of engineering, product thinking, and human-centered design. My sweet spot is making complex technology feel clear and useful.",
    "Across banking and healthcare, I’ve led teams, shaped architecture, and delivered full-stack experiences where reliability matters. Today, I’m especially curious about generative AI, agentic workflows, and what happens when good engineering meets thoughtful product design."
  ],
  social: {
    github: "https://github.com/mithunnagaraj",
    linkedin: "https://www.linkedin.com/in/mithun-nagaraj/",
    resume: "#contact"
  },
  experience: [
    {
      company: "BMO",
      role: "Tech Lead · Full-Stack AI Applications",
      period: "2025 — Present",
      location: "Toronto, Canada",
      summary: "Led an 8-person engineering team delivering wealth management platforms for web and mobile, with a focus on micro-frontend architecture, AI-enabled features, and Adobe Analytics-driven UX improvements.",
      highlights: [
        "Led and mentored an 8-member engineering team, driving delivery excellence and technical best practices across the wealth platform.",
        "Delivered an AI-powered chat feature for wealth platform users, providing trade-related education and advice with UI components dynamically generated from the AI's responses, driving a 30%+ increase in self-serve education engagement.",
        "Single-handedly designed and managed a set of agentic skills for the project, enabling high-reliability AI code generation aligned with best practices and enterprise security standards.",
        "Optimized agent prompting and skill design to reduce token consumption by ~40%, lowering AI code-generation costs for the team.",
        "Used Adobe Analytics to instrument and analyze user journeys across the wealth platform, identifying friction points that informed feature prioritization and improved conversion on key advice flows by double digits.",
        "Owned end-to-end feature delivery from requirements through production release, governing service integrations, APIs, and data contracts across systems."
      ]
    },
    {
      company: "Scotiabank",
      role: "Tech Lead · Payments & Small Business Platforms",
      period: "2021 — 2025",
      location: "Toronto, Canada",
      summary: "Led development of payment and small business banking platforms, focused on system reliability, performance optimization, and seamless integration across distributed services supporting high-volume financial transactions.",
      highlights: [
        "Led delivery of batch processing workflows and core banking features supporting high-volume financial transactions across distributed services.",
        "Improved system reliability and reduced production incidents by streamlining CI/CD pipelines for repeatable, low-risk deployments.",
        "Optimized batch and API performance, cutting processing time for key payment workflows and improving throughput under peak load.",
        "Drove Agile ceremonies, sprint planning, and estimations, aligning cross-functional teams with business and regulatory stakeholders."
      ]
    },
    {
      company: "Mobile Fringe",
      role: "Application Developer",
      period: "2019 — 2021",
      location: "Toronto, Canada",
      summary: "Delivered mobile-first product experiences and contributed across the full application lifecycle in a fast-moving product environment.",
      highlights: [
        "Developed maintainable user experiences across web and mobile surfaces.",
        "Collaborated closely with clients to turn ideas into shippable features."
      ]
    },
    {
      company: "GE Healthcare & Philips",
      role: "Senior Software Engineer / Technical Specialist",
      period: "2013 — 2019",
      location: "Toronto, Canada & Brazil",
      summary: "Worked on software products where correctness, usability, and reliability directly support healthcare professionals.",
      highlights: [
        "Built and supported enterprise software for regulated healthcare environments.",
        "Improved engineering practices through technical guidance and automation."
      ]
    },
    {
      company: "Robert Bosch Engineering Solutions",
      role: "Software Engineer",
      period: "2010 — 2013",
      location: "Bengaluru, India & Germany",
      summary: "Started my engineering journey building dependable systems and learning to sweat the details that make software last.",
      highlights: [
        "Contributed to software engineering projects from implementation through verification.",
        "Developed a foundation in disciplined, collaborative engineering."
      ]
    }
  ] satisfies Experience[],
  projects: [
    {
      name: "Smart Data Vault",
      label: "A calmer home for important data",
      description: "A full-stack AI application designed to organize data and turn scattered information into useful context.",
      tags: ["Next.js", "TypeScript", "AI", "Vercel"],
      accent: "coral",
      href: "https://smart-data-vault.vercel.app/"
    },
    {
      name: "Best Pick AI",
      label: "Multi-model AI comparison platform",
      description: "A practical way to compare AI models and find the right tool for the job, with transparent reasoning at the center.",
      tags: ["React", "AI APIs", "Product design"],
      accent: "mint"
    }
  ] satisfies Project[],
  skillGroups: [
    {
      name: "Product & Experience",
      description: "Turning user needs into clear, thoughtful digital experiences.",
      skills: ["React", "Angular", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Figma"]
    },
    {
      name: "Application Engineering",
      description: "Building connected, maintainable applications and services.",
      skills: ["Node.js", "REST APIs", "Java", "Spring", "Python", "SQL"]
    },
    {
      name: "AI & Intelligent Systems",
      description: "Exploring practical AI capabilities and retrieval-based experiences.",
      skills: ["Generative AI", "Agentic AI", "Prompt Engineering", "RAG"]
    },
    {
      name: "Quality & SDLC",
      description: "Exposure across the software development life cycle, from discovery and design through development, testing, deployment, and ongoing support.",
      skills: ["Test Automation", "Jest", "Cypress", "Agile", "Git"]
    },
    {
      name: "Cloud & Platforms",
      description: "Working with cloud platforms and modern delivery environments.",
      skills: ["Azure", "Google Cloud", "Docker", "Linux"]
    }
  ],
  certifications: [
    { title: "Agentic AI", issuer: "University of Waterloo", year: "2025" },
    { title: "Azure AI Fundamentals", issuer: "Microsoft", year: "2024" },
    { title: "Generative AI Fundamentals", issuer: "Google Cloud", year: "2024" },
    { title: "Google Prompting Essentials", issuer: "Google", year: "2024" },
    { title: "Digital Transformation with Google Cloud", issuer: "Google Cloud", year: "2023" },
    { title: "Sun Certified Java Programmer", issuer: "Sun Microsystems", year: "2010" }
  ],
  education: {
    degree: "Postgraduate Certificate, User Experience (UX) Design",
    school: "Humber College · Sep 2019 — May 2020",
    year: "2020"
  },
  secondEducation: {
    degree: "Master’s Degree",
    school: "VIT University · May 2005 — Jun 2010",
    year: "2010"
  }
};
