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
  intro: "Technology leader with 16+ years of experience building reliable digital products across banking, healthcare, and enterprise platforms — now exploring the practical edge of AI.",
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
      company: "BMO & Scotiabank",
      role: "Tech Lead · Full-Stack AI Applications",
      period: "Mar 2021 — Present",
      location: "Toronto · Banking",
      summary: "Leading modern product delivery for enterprise banking clients, translating complex workflows into intuitive, resilient software.",
      highlights: [
        "Built full-stack AI experiences for high-trust banking workflows.",
        "Explored agentic skills and AI-assisted workflows with BMO.",
        "Partnered with designers, product leaders, and engineers across discovery, architecture, and delivery."
      ]
    },
    {
      company: "Mobile Fringe",
      role: "Application Developer",
      period: "2020 — 2021",
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
      location: "Healthcare Products",
      summary: "Worked on software products where correctness, usability, and reliability directly support healthcare professionals.",
      highlights: [
        "Built and supported enterprise software for regulated healthcare environments.",
        "Improved engineering practices through technical guidance and automation."
      ]
    },
    {
      company: "Robert Bosch Engineering Solutions",
      role: "Software Engineer",
      period: "May 2010 — Oct 2013",
      location: "Bengaluru, India",
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
  skills: [
    "React", "Angular", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Node.js",
    "REST APIs", "Java", "Spring", "Python", "Generative AI", "Agentic AI",
    "Prompt Engineering", "RAG", "Test Automation", "Jest", "Cypress",
    "Azure", "Google Cloud", "Docker", "SQL", "Linux", "Agile", "Git", "Figma"
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
    year: ""
  },
  secondEducation: {
    degree: "Master’s Degree",
    school: "VIT University · May 2005 — Jun 2010",
    year: ""
  }
};
