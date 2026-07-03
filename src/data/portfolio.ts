import type { NavLink, PortfolioData } from "@/types/portfolio";

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const portfolioData: PortfolioData = {
  name: "Ajay Chaurasiya",
  title: "Full Stack Developer",
  subtitle:
    "Building AI platforms, SaaS products, dashboards, and modern web applications across the full stack.",
  hero: {
    greeting: "Hi, I'm",
    badge: "MERN Stack · AI Platforms · SaaS",
    tagline:
      "I take ideas from concept to production with clean architecture and thoughtful user experience.",
    location: "India · Open to Remote",
    availability: "Open to Opportunities",
    highlights: [
      {
        title: "AI Platforms & SaaS",
        description:
          "Human-in-the-loop evaluation systems, multi-role marketplaces, and scalable product workflows.",
      },
      {
        title: "Full Stack MERN",
        description:
          "React and Next.js frontends, Node.js APIs, MongoDB data layers, and end-to-end feature delivery.",
      },
      {
        title: "Dashboards & Analytics",
        description:
          "Interactive charts, reporting flows, and performance insights for data-heavy applications.",
      },
      {
        title: "Marketplaces & Platforms",
        description:
          "Multi-role authentication, project lifecycles, vendor-client workflows, and scalable dashboard experiences.",
      },
    ],
    stats: [
      { value: "10 Mo", label: "Experience" },
      { value: "8+", label: "Projects" },
      { value: "MERN", label: "Stack" },
      { value: "2", label: "Companies" },
    ],
    techPills: [
      "React.js",
      "Next.js",
      "Node.js",
      "MongoDB",
      "TypeScript",
      "Tailwind CSS",
    ],
    ctaPrimary: { label: "View Projects", href: "#projects" },
    ctaSecondary: { label: "Contact Me", href: "#contact" },
  },
  about: {
    tagline:
      "Turning complex product ideas into scalable, user-focused web applications.",
    paragraphs: [
      "I'm Ajay Chaurasiya, a Full Stack Developer who enjoys turning complex requirements into software people actually want to use. I care about how a product feels, not just whether the code works.",
      "I like owning features end to end: understanding the problem, shaping the UI, building the API, modeling the data, and shipping something polished enough for real users.",
      "Clean architecture, readable code, and fast interfaces matter to me. I prefer building products that are easy to maintain, iterate on, and scale as teams and requirements grow.",
      "I'm currently open to full-time roles, freelance work, and collaborations where I can contribute across the stack and help ship meaningful products.",
    ],
    coreStrengths: {
      tagline: "How I approach every project.",
      description:
        "These are the principles that guide my work, from planning and implementation through testing and delivery.",
      stats: [],
    },
    highlights: [
      {
        id: "full-stack",
        title: "Full Stack Ownership",
        description:
          "Leading features from UI components through API design, database modeling, and deployment.",
        longDescription:
          "I don't just work on isolated tasks. I take ownership across the entire feature lifecycle, from translating requirements into UI flows and building REST APIs to modeling MongoDB schemas and wiring everything together for production-ready delivery.",
        keyPoints: [
          "End-to-end feature development across frontend and backend",
          "REST API design with structured request/response patterns",
          "MongoDB schema design and efficient data queries",
          "Component-driven UI with reusable, maintainable code",
          "Comfortable debugging issues across the full stack",
        ],
        appliedIn: [
          "JupiLens marketplace workflows",
          "Cuvet Tech client applications",
          "Note Taking App & Blog App",
        ],
      },
      {
        id: "ai-saas",
        title: "Complex Product Systems",
        description:
          "Designing workflow-heavy interfaces with access control, reviewer flows, and data-rich screens.",
        longDescription:
          "Some products need more than CRUD. I enjoy working on systems with layered permissions, multi-step workflows, and interfaces that stay clear even when the logic behind them is complex.",
        keyPoints: [
          "Human-in-the-loop AI evaluation and scoring systems",
          "Multi-role platforms with authentication and permissions",
          "SaaS dashboards with metrics, charts, and reporting",
          "Workflow-driven UIs for complex business logic",
          "Translating product requirements into scalable features",
        ],
        appliedIn: [
          "CrowdEval AI evaluation platform",
          "Video Analytics Dashboard",
          "AI Trip Planner",
        ],
      },
      {
        id: "production",
        title: "Production Mindset",
        description:
          "Writing clean, performant, and maintainable code built for real-world use.",
        longDescription:
          "I approach development with a production-first mindset, prioritizing clean architecture, responsive performance, readable code, and user experience that feels polished. I build software meant to ship, scale, and be maintained, not just demo well.",
        keyPoints: [
          "Clean, modular code with clear separation of concerns",
          "Responsive, accessible UI across devices",
          "Performance-aware frontend and efficient API design",
          "SEO-friendly structure for content-driven products",
          "Deployment-ready builds with modern tooling",
        ],
        appliedIn: [
          "Jupiter AI Labs corporate website",
          "Portfolio & business websites",
          "Production dashboards and platforms",
        ],
      },
    ],
    whatIBuild: {
      tagline: "A closer look at the kinds of products I've shipped.",
      description:
        "Each area below includes real project examples, capabilities, and the stack used to build them.",
      stats: [],
    },
    focusAreas: [
      {
        id: "marketplace",
        title: "Marketplace Platforms",
        description:
          "Multi-role systems connecting clients, vendors, and freelancers with secure workflows and dashboards.",
        longDescription:
          "I build marketplace platforms that handle complex user roles, project lifecycles, and dashboard experiences. From authentication and role management to posting, matching, and tracking, every layer is designed for clarity and scale.",
        capabilities: [
          "Multi-role authentication and access control",
          "Project posting, bidding, and workflow management",
          "Dedicated dashboards per user type",
          "Status tracking and notification flows",
          "Admin oversight and platform management",
        ],
        examples: ["JupiLens: Freelancing & Job Marketplace"],
        techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
      },
      {
        id: "ai-evaluation",
        title: "AI Evaluation Systems",
        description:
          "Human-in-the-loop platforms for reviewing, scoring, and quality-checking LLM responses.",
        longDescription:
          "AI evaluation systems require structured reviewer workflows, consistent scoring, and reliable QA pipelines. I build platforms that help teams assess LLM output quality with dashboards, reviewer portals, and analytics built in.",
        capabilities: [
          "Reviewer assignment and workflow management",
          "Multi-criteria scoring and rubric systems",
          "Quality assurance and review pipelines",
          "LLM response evaluation interfaces",
          "Throughput and quality analytics",
        ],
        examples: ["CrowdEval: AI Evaluation Platform"],
        techStack: ["React.js", "Node.js", "MongoDB", "REST APIs"],
      },
      {
        id: "analytics",
        title: "Analytics Dashboards",
        description:
          "Data-rich dashboards with metrics, charts, reporting, and performance insights.",
        longDescription:
          "Analytics dashboards need to make complex data feel simple. I build interfaces with real-time metrics, interactive visualizations, custom reports, and trend analysis so teams can monitor performance and act on insights quickly.",
        capabilities: [
          "Real-time metrics and KPI tracking",
          "Interactive charts and data visualizations",
          "Custom report generation and exports",
          "Performance trend and comparison views",
          "Filterable, role-based dashboard layouts",
        ],
        examples: ["Video Analytics Dashboard"],
        techStack: ["React.js", "Node.js", "MongoDB", "Chart Libraries"],
      },
      {
        id: "business-websites",
        title: "Business Websites",
        description:
          "Modern corporate and product websites with service pages, SEO, and responsive design.",
        longDescription:
          "Business websites are often the first impression for a company. I build multi-page corporate sites with dedicated service landing pages, clean information architecture, fast performance, and SEO-friendly structure.",
        capabilities: [
          "Multi-page service and product showcases",
          "Corporate branding and responsive layouts",
          "SEO-optimized metadata and content structure",
          "Lead-focused landing page design",
          "Performance-tuned, accessible UI",
        ],
        examples: [
          "Jupiter AI Labs Website",
          "AI Trip Planner",
          "Blog App",
        ],
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      },
    ],
    stats: [],
  },
  skillsSection: {
    tagline: "The tools and practices behind my day-to-day development.",
    description:
      "From frontend frameworks and backend APIs to databases, testing, and deployment, this is the stack I use to build and ship products.",
    stats: [],
    development: {
      tagline: "A structured process from idea to production-ready software.",
      description:
        "I don't just write code. I follow a deliberate development workflow and set of practices that keep projects organized, maintainable, and ready to ship. Every feature moves through planning, building, testing, and deployment with quality in mind.",
      stats: [
        { value: "5", label: "Workflow Stages" },
        { value: "6", label: "Core Practices" },
        { value: "E2E", label: "Process Coverage" },
        { value: "Quality", label: "Driven Delivery" },
      ],
      workflow: [
        {
          step: "01",
          label: "Understand",
          description: "Break down requirements, define scope, and plan feature architecture.",
        },
        {
          step: "02",
          label: "Design",
          description: "Structure UI flows, API endpoints, and database models before coding.",
        },
        {
          step: "03",
          label: "Build",
          description: "Implement frontend components, backend logic, and database integration.",
        },
        {
          step: "04",
          label: "Test",
          description: "Validate APIs with Postman, debug across the stack, and fix edge cases.",
        },
        {
          step: "05",
          label: "Ship",
          description: "Deploy with Docker, host on Digital Ocean, and deliver production builds.",
        },
      ],
      practices: [
        {
          id: "component-driven",
          title: "Component-Driven UI",
          description:
            "Reusable React components with consistent patterns and responsive Tailwind layouts.",
          longDescription:
            "I build UIs as composable, reusable components, keeping layouts consistent, logic separated, and interfaces responsive across devices. This makes features faster to build and easier to maintain as products grow.",
          keyPoints: [
            "Reusable React component architecture",
            "Responsive design with Tailwind CSS",
            "Consistent UI patterns across pages",
            "Framer Motion for polished interactions",
          ],
          tools: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"],
        },
        {
          id: "api-first",
          title: "API-First Backend",
          description:
            "RESTful APIs with clear endpoints, structured responses, and secure data handling.",
          longDescription:
            "Backend development starts with well-defined API contracts. I design RESTful endpoints with clear request/response structures, middleware for auth and validation, and organized route handlers that scale with product complexity.",
          keyPoints: [
            "RESTful endpoint design and documentation",
            "Middleware for auth and error handling",
            "Structured JSON responses",
            "Separation of routes, controllers, and services",
          ],
          tools: ["Node.js", "Express.js", "REST APIs", "Postman"],
        },
        {
          id: "data-modeling",
          title: "Thoughtful Data Modeling",
          description:
            "MongoDB schemas and SQL queries designed for clarity, performance, and scale.",
          longDescription:
            "Data is the foundation of every application. I design MongoDB collections with clear relationships, write efficient queries, and use SQL where relational structure matters, always thinking about how data will be read, written, and scaled.",
          keyPoints: [
            "MongoDB schema and collection design",
            "CRUD operations and data validation",
            "SQL querying for relational data",
            "Indexing and query optimization awareness",
          ],
          tools: ["MongoDB", "SQL", "Mongoose"],
        },
        {
          id: "version-control",
          title: "Version Control & Collaboration",
          description:
            "Git workflows and GitHub collaboration for organized, team-friendly development.",
          longDescription:
            "Clean version control is essential for solo and team projects. I use Git with meaningful commits, branch-based workflows, and GitHub for code review and collaboration, keeping project history clear and changes traceable.",
          keyPoints: [
            "Feature branch workflows",
            "Clear, descriptive commit messages",
            "Pull requests and code review readiness",
            "Repository organization and README documentation",
          ],
          tools: ["Git", "GitHub"],
        },
        {
          id: "testing-debugging",
          title: "Testing & Debugging",
          description:
            "API validation, cross-stack debugging, and thorough checks before deployment.",
          longDescription:
            "Before shipping, I validate features end to end by testing APIs with Postman, checking UI behavior across breakpoints, and debugging issues across frontend, backend, and database layers to catch problems early.",
          keyPoints: [
            "API endpoint testing with Postman",
            "Cross-stack error tracing and debugging",
            "Input validation and edge case handling",
            "Browser and responsive layout checks",
          ],
          tools: ["Postman", "Browser DevTools", "Node.js"],
        },
        {
          id: "deployment",
          title: "Deployment Ready",
          description:
            "Docker containerization, cloud hosting, and optimized production builds.",
          longDescription:
            "I build with deployment in mind from the start, creating production-ready Next.js builds, containerizing apps with Docker, and deploying to cloud platforms like Digital Ocean and Vercel for reliable, accessible products.",
          keyPoints: [
            "Production builds with Next.js",
            "Docker container setup",
            "Digital Ocean and Vercel deployment",
            "Environment configuration and optimization",
          ],
          tools: ["Docker", "Digital Ocean", "Vercel", "Next.js"],
        },
      ],
    },
  },
  skillCategories: [
    {
      id: "frontend",
      title: "Frontend",
      description:
        "Building responsive, interactive user interfaces with modern JavaScript frameworks and utility-first styling.",
      highlights: [
        "Component-based React architecture",
        "Next.js App Router & SSR",
        "Type-safe development with TypeScript",
      ],
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "JavaScript", level: 92 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      id: "backend",
      title: "Backend",
      description:
        "Designing and building scalable server-side logic, REST APIs, and business workflows with Node.js.",
      highlights: [
        "RESTful API architecture",
        "Authentication & middleware",
        "Server-side business logic",
      ],
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 85 },
        { name: "REST APIs", level: 90 },
      ],
    },
    {
      id: "database",
      title: "Database",
      description:
        "Working with document and relational databases for storage, queries, and data-driven application features.",
      highlights: [
        "MongoDB schema design",
        "CRUD operations & aggregations",
        "SQL querying & data relations",
      ],
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "SQL", level: 80 },
      ],
    },
    {
      id: "tools",
      title: "Tools & DevOps",
      description:
        "Development tooling, version control, API testing, containerization, and cloud deployment.",
      highlights: [
        "Git & GitHub workflows",
        "Docker containerization",
        "Digital Ocean deployment",
      ],
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 88 },
        { name: "Postman", level: 85 },
        { name: "Docker", level: 78 },
        { name: "Digital Ocean", level: 75 },
      ],
    },
  ],
  projectsSection: {
    tagline: "Selected work from professional roles and personal builds.",
    description:
      "Browse projects by category to see the problems they solved, the features shipped, and the technologies used in each build.",
    stats: [
      { value: "8", label: "Total Projects" },
      { value: "4", label: "Work Projects" },
      { value: "4", label: "Side Projects" },
      { value: "Full Stack", label: "My Approach" },
    ],
  },
  projects: [
    {
      id: "jupilens",
      title: "JupiLens",
      category: "work",
      type: "Marketplace Platform",
      role: "Full Stack Developer",
      status: "Completed",
      description:
        "A freelancing and job marketplace connecting clients, vendors, and freelancers with role-based workflows and dashboards.",
      longDescription:
        "JupiLens is a comprehensive freelancing and job marketplace platform designed to connect clients, vendors, and freelancers in a seamless ecosystem. I worked on authentication, role management, project workflows, and dashboard functionality across the full stack.",
      problem:
        "Clients, vendors, and freelancers needed a single platform to post projects, manage workflows, and track progress without fragmented tools.",
      solution:
        "Built a multi-role marketplace with secure authentication, dedicated dashboards per user type, and end-to-end project lifecycle management.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      tags: ["Marketplace", "SaaS", "Multi-role"],
      features: [
        "Multi-role authentication with access control",
        "Client project posting and vendor matching",
        "Freelancer and vendor dashboards",
        "Project workflow and status tracking",
        "Admin management and oversight tools",
      ],
      highlights: [
        "Designed role-based flows for three distinct user types",
        "Implemented secure auth and protected API routes",
        "Built dashboard views tailored to each user role",
      ],
    },
    {
      id: "crowdeval",
      title: "CrowdEval",
      category: "work",
      type: "AI Evaluation Platform",
      role: "Full Stack Developer",
      status: "Completed",
      description:
        "Human-in-the-loop AI platform for evaluating LLM responses with reviewer workflows, scoring, and quality assurance.",
      longDescription:
        "CrowdEval is a sophisticated human-in-the-loop AI evaluation platform built for assessing LLM response quality. I contributed to reviewer workflows, scoring systems, QA processes, and the dashboards that help teams monitor evaluation quality at scale.",
      problem:
        "AI teams needed a structured way to evaluate LLM outputs with human reviewers, consistent scoring, and quality control.",
      solution:
        "Developed a platform with reviewer assignment workflows, multi-criteria scoring, QA pipelines, and analytics for tracking evaluation performance.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      tags: ["AI/ML", "HITL", "SaaS"],
      features: [
        "LLM response evaluation workflows",
        "Multi-reviewer scoring and rubrics",
        "Quality assurance and review pipelines",
        "Reviewer management portal",
        "Analytics and reporting dashboards",
      ],
      highlights: [
        "Built reviewer-facing workflows for consistent LLM evaluation",
        "Implemented scoring systems with QA checkpoints",
        "Created dashboards for tracking review throughput and quality",
      ],
    },
    {
      id: "jupiter-ai-labs",
      title: "Jupiter AI Labs Website",
      category: "work",
      type: "Corporate Website",
      role: "Full Stack Developer",
      status: "Live",
      description:
        "Corporate website with AI service pages including Egocentric Data Collection and enterprise AI solutions.",
      longDescription:
        "A modern corporate website for Jupiter AI Labs showcasing AI services and solutions. I built multiple service landing pages, structured content sections, and a responsive layout optimized for clarity, performance, and SEO.",
      problem:
        "The company needed a professional web presence to present multiple AI services clearly to enterprise clients.",
      solution:
        "Delivered a multi-page corporate site with dedicated service pages, consistent branding, responsive design, and SEO-friendly structure.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      tags: ["Corporate", "AI Services", "SEO"],
      features: [
        "Multi-page service showcase",
        "Egocentric Data Collection service page",
        "AI data solutions landing pages",
        "Responsive and accessible layouts",
        "SEO-optimized metadata and structure",
      ],
      highlights: [
        "Structured content for multiple AI service offerings",
        "Built fast, responsive pages with modern UI patterns",
        "Optimized for search visibility and professional presentation",
      ],
    },
    {
      id: "video-analytics",
      title: "Video Analytics Dashboard",
      category: "work",
      type: "Analytics Dashboard",
      role: "Full Stack Developer",
      status: "Completed",
      description:
        "Analytics platform for video metrics, interactive charts, reporting, and performance insights.",
      longDescription:
        "A powerful video analytics dashboard providing comprehensive metrics, interactive charts, detailed reporting, and actionable performance insights. I worked on data visualization components, reporting flows, and the backend APIs powering the metrics.",
      problem:
        "Teams needed a centralized view of video performance data with charts, trends, and exportable reports.",
      solution:
        "Built a dashboard with real-time metrics, interactive visualizations, custom report generation, and performance trend analysis.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Chart Libraries"],
      tags: ["Dashboard", "Analytics", "Data Viz"],
      features: [
        "Real-time video metrics tracking",
        "Interactive charts and visualizations",
        "Custom report generation",
        "Performance trend analysis",
        "Export and sharing capabilities",
      ],
      highlights: [
        "Designed data-heavy UI that stays readable and actionable",
        "Integrated charting for metrics and trend analysis",
        "Built reporting flows for team-level insights",
      ],
    },
    {
      id: "resumforge",
      title: "Resumforge",
      category: "side",
      type: "Resume Builder",
      role: "Full Stack Developer",
      status: "Live",
      description:
        "Modern resume builder for creating professional, ATS-friendly resumes with live preview, templates, and PDF export.",
      longDescription:
        "Resumforge is a full-featured resume creation platform that helps users build polished, job-ready resumes without design friction. It combines a structured section-based editor with real-time preview, professional templates, and one-click PDF export so users can go from blank page to downloadable resume in minutes.",
      problem:
        "Job seekers often struggle with formatting resumes, keeping content consistent across sections, and exporting a clean PDF that works with ATS systems.",
      solution:
        "Built an intuitive resume builder with guided sections, live preview, reusable templates, and reliable PDF export for professional, ATS-friendly output.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React.js", "PDF Export"],
      tags: ["SaaS", "Productivity", "Resume"],
      features: [
        "Section-based resume editor (experience, education, skills)",
        "Real-time live preview as content updates",
        "Professional resume templates",
        "One-click PDF download and export",
        "Clean, responsive UI for fast resume creation",
      ],
      highlights: [
        "Designed a guided workflow for building resumes section by section",
        "Implemented live preview for instant visual feedback",
        "Built PDF export for polished, shareable resume output",
      ],
    },
    {
      id: "ai-trip-planner",
      title: "AI Trip Planner",
      category: "side",
      type: "AI Travel App",
      role: "Full Stack Developer",
      status: "In Progress",
      description:
        "AI-powered travel planner that generates personalized itineraries, recommendations, and day-by-day schedules.",
      longDescription:
        "AI Trip Planner is a smart travel assistant that helps users plan trips effortlessly. It combines AI-generated recommendations with an intuitive interface so users can build customized itineraries, explore destinations, and organize activities across multiple days.",
      problem:
        "Travel planning is time-consuming. Users struggle to organize destinations, activities, and schedules in one place.",
      solution:
        "Created an AI-assisted planner that generates itineraries, suggests destinations, and structures trips day by day with budget awareness.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "AI APIs"],
      tags: ["AI", "Travel", "SaaS"],
      features: [
        "AI-powered itinerary generation",
        "Personalized destination recommendations",
        "Day-by-day trip scheduling",
        "Budget and activity planning",
        "Save and share travel plans",
      ],
      highlights: [
        "Integrated AI for smart travel recommendations",
        "Designed an intuitive trip planning workflow",
        "Structured multi-day itinerary management",
      ],
    },
    {
      id: "note-taking-app",
      title: "Note Taking App",
      category: "side",
      type: "Productivity App",
      role: "Full Stack Developer",
      status: "Completed",
      description:
        "Fast note-taking app for creating, organizing, and searching notes with a distraction-free editor.",
      longDescription:
        "A modern note-taking app built for productivity and simplicity. Users can create rich text notes, organize them into categories, search instantly, and access content across sessions through a smooth, responsive interface.",
      problem:
        "Users need a lightweight tool to capture ideas quickly, organize notes, and find content without friction.",
      solution:
        "Built a clean note-taking app with real-time editing, categories, full-text search, and auto-save for a seamless writing experience.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
      tags: ["Productivity", "CRUD", "Search"],
      features: [
        "Create and edit notes in real time",
        "Category and tag organization",
        "Full-text search across notes",
        "Auto-save and draft recovery",
        "Clean, distraction-free editor",
      ],
      highlights: [
        "Implemented fast search across note content",
        "Built auto-save for reliable note persistence",
        "Focused on minimal UI for distraction-free writing",
      ],
    },
    {
      id: "blog-app",
      title: "Blog App",
      category: "side",
      type: "Content Platform",
      role: "Full Stack Developer",
      status: "Completed",
      description:
        "Full-featured blogging platform for publishing articles, managing posts, and delivering a modern reading experience.",
      longDescription:
        "Blog App is a complete content publishing platform where authors can write, edit, and publish articles. It includes post management, category tagging, responsive article layouts, and an admin-friendly workflow for maintaining a personal or professional blog.",
      problem:
        "Authors needed a simple but capable platform to write, publish, and manage blog content without heavy CMS overhead.",
      solution:
        "Developed a blogging platform with a rich editor, post management dashboard, categories, and SEO-friendly article pages.",
      techStack: ["Next.js", "Node.js", "MongoDB", "REST APIs"],
      tags: ["CMS", "Blog", "Publishing"],
      features: [
        "Article creation and publishing workflow",
        "Rich text editor with markdown support",
        "Post categories and tagging",
        "Author dashboard for content management",
        "SEO-friendly article pages",
      ],
      highlights: [
        "Built end-to-end publishing workflow from draft to live",
        "Created author dashboard for content management",
        "Optimized article pages for readability and SEO",
      ],
    },
  ],
  experienceSection: {
    tagline: "Two full-time roles across product-focused engineering teams.",
    description:
      "My professional experience includes MERN stack development at Cuvet Tech and full stack product work at Jupiter AI Labs, with ownership across frontend, backend, and database layers.",
    stats: [],
  },
  experience: [
    {
      id: "jupiter-ai-labs",
      company: "Jupiter AI Labs",
      role: "Full Stack Developer",
      employmentType: "Full-time",
      duration: "March 2026 - June 2026",
      period: "Previous Role",
      location: "Noida",
      summary:
        "Worked as a Full Stack Developer on AI-focused products including evaluation platforms, analytics dashboards, and corporate web experiences. Built features across the stack used in live AI and data products.",
      techStack: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TypeScript",
      ],
      responsibilities: [
        "Built frontend interfaces for AI and analytics products",
        "Developed backend APIs for platform and dashboard features",
        "Integrated MongoDB for data storage and retrieval",
        "Contributed to dashboard and reporting workflows",
        "Supported AI platform development and QA tooling",
      ],
      achievements: [
        "Shipped features on AI evaluation and analytics platforms",
        "Built corporate service pages with modern, SEO-friendly UI",
        "Gained experience in AI product workflows and data dashboards",
      ],
      projects: [
        "CrowdEval: AI Evaluation Platform",
        "Jupiter AI Labs Website",
        "Video Analytics Dashboard",
      ],
    },
    {
      id: "cuvet-tech",
      company: "Cuvet Tech",
      role: "MERN Stack Developer",
      employmentType: "Full-time",
      duration: "6 Months",
      period: "Previous Role",
      location: "Remote",
      summary:
        "Worked as a MERN Stack Developer building and maintaining full stack web applications. Focused on delivering responsive frontends, scalable REST APIs, and MongoDB-backed features for client and internal products.",
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JavaScript",
        "REST APIs",
      ],
      responsibilities: [
        "Developed responsive UI components with React.js",
        "Built and maintained RESTful APIs using Node.js and Express.js",
        "Designed MongoDB schemas and integrated database operations",
        "Implemented authentication, CRUD flows, and business logic",
        "Collaborated on feature planning, code reviews, and deployments",
      ],
      achievements: [
        "Delivered multiple full stack features from UI to database layer",
        "Improved API structure and data handling for scalable growth",
        "Strengthened MERN stack fundamentals across real product work",
      ],
      projects: [
        "Client-facing web applications",
        "Internal business tools",
        "API-driven dashboard features",
      ],
    },
  ],
  educationSection: {
    tagline:
      "Bachelor of Technology in Computer Science and Engineering from Dr. A. P. J. Abdul Kalam Technical University.",
    description:
      "Completed a four-year undergraduate program focused on core computer science fundamentals, software engineering, and practical development. Graduated with an honors degree and a strong academic record.",
    stats: [
      { value: "4 Yrs", label: "Duration" },
      { value: "8.0", label: "GPA" },
      { value: "Honors", label: "Degree" },
      { value: "B.Tech", label: "Qualification" },
    ],
  },
  education: [
    {
      id: "aktu-btech-cse",
      institution: "Dr. A. P. J. Abdul Kalam Technical University",
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      duration: "2021 - 2025",
      period: "Undergraduate",
      gpa: "8.0",
      honors: "Honors Degree",
      highlights: [
        "Completed B.Tech in Computer Science and Engineering",
        "Graduated with an honors degree",
        "Built strong foundations in algorithms, data structures, and software development",
      ],
    },
  ],
  contactSection: {
    tagline: "Let's build something great together.",
    description:
      "I'm open to full-time roles, freelance projects, internships, and collaborations. Tell me what you're building and I'll get back to you within 24 to 48 hours.",
    responseTime: "Within 24 to 48 hours",
    location: "India · Remote Friendly",
    stats: [
      { value: "24h", label: "Typical Response" },
      { value: "Remote", label: "Work Preference" },
      { value: "4", label: "Social Channels" },
      { value: "100%", label: "Open to Connect" },
    ],
    reasons: [
      {
        title: "Full-Time Roles",
        description:
          "MERN stack and full stack developer positions with product-focused teams.",
      },
      {
        title: "Freelance Projects",
        description:
          "Web apps, dashboards, APIs, and SaaS features from concept to deployment.",
      },
      {
        title: "AI & SaaS Products",
        description:
          "Platforms, evaluation systems, analytics tools, and modern business websites.",
      },
      {
        title: "Collaborations",
        description:
          "Startup ideas, open-source contributions, and long-term product partnerships.",
      },
    ],
  },
  socialLinks: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ajaychaurasiya1/",
      handle: "linkedin.com/in/ajaychaurasiya1",
      icon: "linkedin",
    },
    {
      name: "GitHub",
      href: "https://github.com/ajaychaurasiya1/",
      handle: "github.com/ajaychaurasiya1",
      icon: "github",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/velthrix?igsh=MWp3bmpiYnN3MGJsaw==",
      handle: "@velthrix",
      icon: "instagram",
    },
    {
      name: "Email",
      href: "mailto:ajaychaurasiya44440@gmail.com",
      handle: "ajaychaurasiya44440@gmail.com",
      icon: "email",
    },
  ],
  email: "ajaychaurasiya44440@gmail.com",
};
