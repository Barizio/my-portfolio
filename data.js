/*
 * data.js — SINGLE SOURCE OF TRUTH for all site content.
 *
 * To update the site you almost never touch HTML. Edit the object below and the
 * renderers in render.js rebuild every page. See design.md §8 for the map of
 * "what do I edit to change X".
 *
 * Ordering matters: arrays render top-to-bottom in the order written here.
 */
window.PORTFOLIO = {
  /* ---- Identity & hero ------------------------------------------------ */
  profile: {
    name: "Adebare Adesokan",
    wordmark: "adebare.dev",
    kicker: "// full-stack & ai engineer",
    // Hero name is rendered UPPERCASE; split into lines for the big display.
    heroLines: ["ADEBARE", "ADESOKAN"],
    role: "Full-Stack & AI Engineer",
    pitch:
      "I build full-stack products and AI-powered systems — from LLM integrations " +
      "and agentic workflows to high-performance backends. Shipped in regulated " +
      "fintech at Ecobank, tested and documented APIs at Bazara Tech, and won the " +
      "Google AI4Culture Hackathon. Anthropic-certified in Claude and Claude Code.",
    stack: [
      "Java", "Spring Boot", "Python", "TypeScript",
      "React", "React Native", "Claude Code", "PostgreSQL",
    ],
    email: "adesokanadebare@gmail.com",
    phone: "+234 904 686 4128",
    resume: "resume.pdf",
    links: {
      github: "https://github.com/Barizio",
      linkedin: "https://www.linkedin.com/in/adebare-adesokan-570b7b260",
    },
    // Decorative code block beside the hero. Keep it short.
    codeObject: {
      name: '"Adebare Adesokan"',
      focus: '"Full-Stack / AI"',
      stack: ['"Java"', '"Spring Boot"', '"Python"', '"React"', '"Claude Code"'],
      certified: '"Anthropic: Claude + Claude Code"',
      seeking: '"SWE internships & early-career roles"',
    },
  },

  /* ---- About + stats -------------------------------------------------- */
  about: {
    heading: "Who I Am",
    paragraphs: [
      "I'm a Computer Science undergraduate and software engineer focused on AI " +
        "engineering — building LLM-powered products and agentic workflows on a " +
        "foundation of scalable, reliable systems.",
      "My background spans regulated fintech and fast-moving product teams: I built " +
        "Spring Boot REST APIs and a normalized MySQL schema at Ecobank, shipped " +
        "React / React Native banking features used by 1M+ users, and handled API " +
        "testing, debugging and technical documentation at Bazara Tech. I lean on an " +
        "AI-augmented workflow with Claude Code to ship faster — the engineering " +
        "judgment is mine.",
    ],
  },
  stats: [
    { value: "1M+", label: "Users reached at Ecobank" },
    { value: "~1.4M", label: "Orders/sec matching engine" },
    { value: "3", label: "Hackathons placed (1 win)" },
    { value: "4", label: "Anthropic + BCG credentials" },
  ],

  /* ---- Skills (grouped clusters) ------------------------------------- */
  skills: [
    {
      label: "// languages & frameworks",
      items: ["Java", "Spring Boot", "Python", "TypeScript", "C++", "Rust",
              "ReactJS", "React Native", "NestJS", "Node.js", "Tailwind CSS"],
    },
    {
      label: "// ai & emerging tech",
      items: ["Claude Code", "Anthropic API", "Model Context Protocol",
              "Prompt Engineering", "OpenAI API", "LangChain", "FastAPI", "Solidity"],
    },
    {
      label: "// databases & tools",
      items: ["MySQL", "PostgreSQL", "SQL", "Docker", "Git", "Postman"],
    },
    {
      label: "// core competencies",
      items: ["RESTful API Development", "Backend Engineering", "Database Design",
              "Product Operations", "Agile Collaboration", "Technical Documentation"],
    },
  ],

  /* ---- Selected engineering projects ---------------------------------- */
  projects: [
    {
      name: "Matching Engine",
      badge: "Java 21",
      description:
        "A production-quality limit order-book matching engine with strict " +
        "price-time priority, integer-tick pricing, O(1) cancel, and a benchmark " +
        "harness clocking ~1.4M orders/sec.",
      tags: ["Java 21", "Concurrency", "Low-Latency", "Benchmarks"],
      detail: "matching-engine.html",
      source: "https://github.com/Barizio/matching-engine",
    },
    {
      name: "Afara AI",
      badge: "AI · Hackathon Winner",
      flag: "🏆",
      description:
        "An AI platform for preserving African cultural heritage through artifact " +
        "recognition and language translation. Winner of the Google AI4Culture Hackathon.",
      tags: ["AI", "Computer Vision", "NLP"],
      source:
        "https://www.linkedin.com/feed/update/urn:li:activity:7206233774013968384/",
    },
    {
      name: "LandLedger",
      badge: "Solidity",
      description:
        'A blockchain-based property registry: ERC-721 land titles with a "Two-Gate" ' +
        "security layer (3-of-3 multi-signature quorum + biometric identity hash) and " +
        "IPFS off-chain storage.",
      tags: ["Solidity", "ERC-721", "IPFS", "Multi-sig"],
      detail: "landledger.html",
      source: "https://github.com/Barizio/landchain",
    },
    {
      name: "Rust Kernel + Bootloader",
      badge: "Rust",
      description:
        "A freestanding x86-64 kernel written in Rust on the bootloader_api crate — " +
        "hardware interrupt handling and a framebuffer text writer, booting on bare " +
        "metal with no standard library.",
      tags: ["Rust", "x86-64", "Bare Metal", "no_std"],
      source: "https://github.com/Barizio/kernel_with_bootloader",
    },
    {
      name: "Shift Management System",
      badge: "Java",
      description:
        "Designed for staff at my school to automate shift logging and tracking, " +
        "replacing manual paper logs.",
      tags: ["Java", "Desktop App"],
      detail: "shift-management.html",
      source: "https://github.com/Barizio/SAASMS",
    },
    {
      name: "Integrated Circular Farming & Packaging",
      badge: "Concept Study",
      description:
        "A closed-loop systems design pairing IoT-enabled vertical farming with " +
        "biodegradable packaging production to tackle food insecurity and plastic " +
        "pollution in Nigeria — mapped to cooperative / NGO distribution routes and " +
        "aligned to UN SDGs 2, 11 and 12.",
      tags: ["Systems Design", "IoT", "Sustainability"],
    },
    {
      name: "BlockBlast Solver",
      badge: "Python",
      description:
        "A personal project: an AI tool that searches for the best possible moves in " +
        "the mobile game BlockBlast.",
      tags: ["Python", "Search", "Heuristics"],
      source: "https://github.com/Barizio/BlockBlast-Solver",
    },
  ],

  /* ---- Front-end showcase --------------------------------------------- */
  showcase: [
    {
      name: "Aurora",
      badge: "Canvas",
      description:
        "A concept landing page for an ambient AI copilot. Dark glassmorphism over an " +
        "animated gradient-mesh background rendered on <canvas>, with cursor glow, " +
        "magnetic buttons and 3D card tilt — no libraries, no build step.",
      tags: ["Canvas", "Vanilla JS", "Glassmorphism"],
      live: "https://barizio.github.io/aurora/",
      source: "https://github.com/Barizio/aurora",
    },
    {
      name: "MONOLITH",
      badge: "Interactive",
      description:
        "A neo-brutalist site for an independent type foundry, built around an " +
        "interactive live specimen — editable text, a size slider and live weight " +
        "switching — plus a running Berlin clock and a kinetic hero.",
      tags: ["Neo-brutalism", "Typography", "Interactive"],
      live: "https://barizio.github.io/monolith/",
      source: "https://github.com/Barizio/monolith",
    },
    {
      name: "Atelier Vesper",
      badge: "Editorial",
      description:
        "A quiet, editorial storefront for a botanical perfume house. Orchestrated " +
        "scroll reveals, a masked line-by-line hero, a custom cursor and a CSS-only " +
        "bottle — luxury restraint over noise.",
      tags: ["Editorial", "Scroll Animation", "CSS Art"],
      live: "https://barizio.github.io/atelier/",
      source: "https://github.com/Barizio/atelier",
    },
  ],

  /* ---- Experience + education (single timeline) ----------------------- */
  experience: [
    {
      role: "Product Intern",
      org: "Bazara Tech",
      date: "Jul – Sep 2025",
      summary:
        "API testing, debugging and technical documentation across a fast-moving " +
        "B2B product cycle — from sprint planning to QA and release.",
      bullets: [
        "Conducted API testing and debugging across multiple product features, " +
          "flagging issues early and contributing to more stable releases.",
        "Produced clear technical documentation for APIs and internal processes, " +
          "reducing onboarding friction for new contributors.",
        "Participated in daily scrum, gaining firsthand exposure to how engineering " +
          "priorities are set and features tracked from development to delivery.",
      ],
    },
    {
      role: "Software Engineering Intern",
      org: "Ecobank Transnational Incorporated",
      date: "Jul – Oct 2024",
      summary:
        "Built and optimized Spring Boot REST APIs and a normalized MySQL schema for " +
        "high-volume requests in a regulated financial environment.",
      bullets: [
        "Built and maintained RESTful backend APIs using Spring Boot, enabling secure " +
          "handling of high-volume user requests in a regulated financial environment.",
        "Designed a normalized MySQL schema, reducing query complexity and supporting " +
          "long-term data integrity; optimized critical queries to cut response latency.",
        "Collaborated with front-end developers to align API contracts and resolved " +
          "production bugs in a live, customer-facing environment.",
      ],
    },
    {
      role: "Software Engineering Intern",
      org: "Ecobank Transnational Incorporated",
      date: "Aug – Sep 2023",
      summary:
        "Shipped React / React Native banking features used by 1M+ active users; " +
        "deployed a NestJS + Docker backend platform.",
      bullets: [
        "Developed responsive web and mobile banking applications with React and " +
          "React Native, improving cross-platform experience for 1M+ active users.",
        "Implemented automated regression tests with React Component Testing, reducing " +
          "manual QA effort and improving release reliability.",
        "Architected and deployed a scalable backend platform using NestJS and Docker.",
      ],
    },
    {
      role: "IT Intern",
      org: "TotalEnergies",
      date: "Aug – Sep 2022",
      summary:
        "Kept a critical enterprise environment at zero downtime — ticketing, incident " +
        "resolution and asset lifecycle tracking for 50+ devices.",
      bullets: [
        "Managed the IT ticketing system, resolving hardware and software incidents to " +
          "maintain zero-downtime operations across a critical enterprise environment.",
        "Conducted IT asset inventory and lifecycle tracking for 50+ devices, improving " +
          "allocation accuracy and compliance.",
      ],
    },
    {
      role: "B.Sc. Computer Science",
      org: "Pan-Atlantic University",
      date: "Oct 2022 – Dec 2026",
      summary: "B.Sc. in Computer Science.",
      bullets: [
        "Relevant coursework: Data Structures & Algorithms, Systems Analysis & Design, " +
          "Database Management, Principles of Software Engineering, Compiler " +
          "Construction, Intro to Artificial Intelligence, Digital Logic Design.",
        "Prior schooling: Loyola Jesuit College, Abuja.",
      ],
      isEducation: true,
    },
  ],

  /* ---- Certifications ------------------------------------------------- */
  certifications: [
    {
      issuer: "Anthropic",
      name: "Claude Code Certification",
      date: "2026",
      description:
        "Agentic software development with Claude Code — MCP servers, hooks, " +
        "automation, and multi-step engineering workflows.",
      tags: ["AI Agents", "Model Context Protocol", "AI-Assisted Development"],
      verify: "https://verify.skilljar.com/c/2qo4ht46qwpq",
    },
    {
      issuer: "Anthropic",
      name: "Claude 101",
      date: "2026",
      description:
        "Foundations of building with Claude — capabilities, effective prompting, and " +
        "practical LLM workflows.",
      tags: ["Prompt Engineering", "Large Language Models", "Generative AI"],
      verify: "https://verify.skilljar.com/c/7qwks2bt9rv9",
    },
    {
      issuer: "BCG / Forage",
      name: "Digital Transformation Job Simulation",
      date: "Jul 2026",
      description:
        "Built a new app to help hypothetical client CoffeeCo combat declining sales: " +
        "researched app-driven customer engagement trends in F&B, analyzed customer " +
        "pain-point data to recommend which issue to solve, and prioritized features " +
        "into an agile plan in Trello.",
      tags: ["Product Strategy", "Market Research", "Agile / Trello"],
    },
  ],

  /* ---- Achievements (about page) -------------------------------------- */
  achievements: [
    "<strong>Winner — Google AI4Culture Hackathon</strong> (Centenary Project " +
      "Incentive): led development of an AI-powered cultural platform under " +
      "competitive, deadline-driven conditions.",
    "<strong>2nd Place — TIC Hackathon:</strong> led development of a " +
      "financial-inclusivity platform for MSMEs, featuring cashflow tracking and " +
      "automated credit-score analysis.",
    "<strong>5th Place — 2025 GBSN Africa Business Concept Challenge:</strong> " +
      "presented a scalable concept aligned with sustainable development among top " +
      "African innovators.",
  ],

  /* ---- Community service (about page) --------------------------------- */
  community: [
    "Peer-to-peer tutoring program organizer, Pan-Atlantic University — 2024–Present.",
    "Teaching volunteer, Dreams from the Slum Initiative (Lagos) — 2019.",
    "Caregiver volunteer, Vigilant Heart Charitable Society Orphanage — 2021.",
    "Common Entrance exam tutor — 2017–2022.",
  ],

  /* ---- Contact -------------------------------------------------------- */
  contact: {
    headlineLines: ["Let's Build", "Something", "Amazing"],
    blurb:
      "I'm open to software engineering internships and early-career roles — " +
      "especially in full-stack and AI engineering. If you're building something " +
      "ambitious, I'd love to hear about it.",
  },
};
