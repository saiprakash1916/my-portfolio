// Central content source for the entire portfolio.
export const PROFILE = {
  name: "Sai Prakash",
  role: "Senior Java Developer",
  tagline: "Building scalable, enterprise-grade applications with Java, Spring Boot, Microservices & React.",
  location: "Hyderabad, India",
  email: "saiprakash1916@gmail.com",
  resumeUrl: "/Sai_Prakash_Sikhakolli_Resume.pdf",
  socials: {
    github: "https://github.com/saiprakash1916",
    linkedin: "https://www.linkedin.com/in/saiprakashsikhakolli/",
    email: "mailto:saiprakash1916@gmail.com",
  },
  about:
    `I'm a Senior Java Developer with over 5+ years of experience building scalable enterprise applications for the Banking and Financial Services industry. I specialize in Java, Spring Boot, Microservices, REST APIs, and distributed systems, designing secure, reliable, and high-performance backend services that power business-critical applications.

    I enjoy solving complex engineering problems through clean architecture, automation, and performance optimization. Beyond backend development, I'm continuously expanding my expertise in React, Node.js, AI-powered applications, and cloud technologies to build modern, end-to-end software solutions while staying current with emerging technologies.`
};

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "architecture", label: "Architecture" },
  { id: "contact", label: "Contact" },
];


export const TECH_GROUPS = [
  {
    category: "Backend",
    items: ["Java", "Spring Boot", "Spring Data JPA", "Spring Security", "Microservices", "REST APIs"],
  },
  { category: "Databases", items: ["MySQL", "Oracle"] },
  { category: "Frontend", items: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"] },
  { category: "Tools", items: ["Git", "GitHub", "BitBucket", "Maven", "Postman", "Bruno"] },
  { category: "Cloud", items: ["AWS (EC2)", "S3", "IAM"] },
  { category: "Deployment", items: ["Jenkins", "CI/CD", "Docker", "Vercel"] },
];

export const MARQUEE_WORDS = [
  "Java", "Spring Boot", "Microservices", "MySQL", "Docker",
  "Jenkins", "REST APIs", "Splunk", "Spring Data JPA", "AWS", "Hibernate", "CI/CD", "Agile"
];

export const EXPERIENCE = [
  {
    company: "TATA Consultancy Services",
    role: "Senior Java Developer",
    duration: "2023 — Present",
    location: "Hyderabad",
    achievements: [
      "Improved API response time by 40% for banking applications.",
      "Built DSL automation tools, reducing manual effort by 70%.",
      "Reduced production downtime by 80% using Splunk monitoring.",
      "Automated Maven dependency upgrades, reducing effort by 90%.",
    ],
    tech: ["Java", "Spring Boot", "Microservices", "REST APIs", "Jenkins", "Docker", "Splunk", "React.js"],
  },
  {
    company: "Virtusa Consulting Services",
    role: "Associate Engineer",
    duration: "2021 — 2023",
    location: "Chennai",
    achievements: [
      "Improved payment processing efficiency by 30%.",
      "Reduced transaction failures by 20%.",
      "Built an AI-powered multilingual data processing solution.",
      "Optimized SQL queries for transaction validation and reporting.",
    ],
    tech: ["Java", "Spring Boot", "REST APIs", "SQL"],
  },
];

export const PROJECTS = [
  {
    title: "Authentication Service",
    category: "Security",
    description: "Centralised OAuth2 + JWT identity provider with role-based access, refresh rotation and rate limiting.",
    tech: ["Spring Security", "JWT", "MySQL"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    status: "Demo Coming soon",
    demo: "#",
    github: "https://github.com/saiprakash1916/Spring-JWT-Authentication.git",
    featured: true,
  },
  {
    title: "Notification Service",
    category: "Async Messaging",
    description: "Fan-out notification engine (email, SMS, push) with retry queues and template management.",
    tech: ["Spring Boot", "RabbitMQ", "MongoDB"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    status: "in-progress",
    demo: "#",
    github: "https://github.com/",
    featured: false,
  },
  {
    title: "URL Shortener",
    category: "High Throughput",
    description: "Low-latency URL shortener with base62 encoding, Redis hot cache and analytics pipeline.",
    tech: ["Spring Boot", "Redis", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    status: "in-progress",
    demo: "#",
    github: "https://github.com/",
    featured: false,
  },
];

// Microservices architecture nodes for the interactive showcase.
export const SERVICES = [
  {
    id: "gateway",
    name: "API Gateway",
    tagline: "Single entry point",
    responsibilities: "Routing, authentication, rate limiting and request aggregation for all downstream services.",
    endpoints: ["/api/*", "GET /health", "POST /auth/verify"],
    database: "Redis (rate-limit store)",
    communication: "REST + JWT propagation",
    stack: ["Spring Cloud Gateway", "Redis", "Resilience4j"],
  },
  {
    id: "auth",
    name: "Auth Service",
    tagline: "Identity & access",
    responsibilities: "Issues and rotates JWTs, manages users, roles and OAuth2 flows.",
    endpoints: ["POST /login", "POST /refresh", "GET /me"],
    database: "PostgreSQL",
    communication: "REST + events",
    stack: ["Spring Security", "OAuth2", "PostgreSQL"],
  },
  {
    id: "orders",
    name: "Order Service",
    tagline: "Business core",
    responsibilities: "Creates and orchestrates orders, publishes domain events and coordinates sagas.",
    endpoints: ["POST /orders", "GET /orders/{id}", "PATCH /orders/{id}"],
    database: "PostgreSQL",
    communication: "Kafka (event-driven)",
    stack: ["Spring Boot", "Kafka", "PostgreSQL"],
  },
  {
    id: "payments",
    name: "Payment Service",
    tagline: "Money movement",
    responsibilities: "Processes payments idempotently with retries, reconciliation and fraud checks.",
    endpoints: ["POST /payments", "POST /refunds", "GET /payments/{id}"],
    database: "PostgreSQL + ledger",
    communication: "Kafka + REST",
    stack: ["Spring Boot", "Kafka", "Resilience4j"],
  },
  {
    id: "notify",
    name: "Notification Service",
    tagline: "Fan-out",
    responsibilities: "Consumes events and delivers email, SMS and push with retry queues.",
    endpoints: ["Consumes order.*", "Consumes payment.*"],
    database: "MongoDB",
    communication: "Kafka consumer",
    stack: ["Spring Boot", "RabbitMQ", "MongoDB"],
  },
];

export const CERTIFICATIONS = [
  { title: "AWS Certified Developer – Associate", issuer: "Amazon Web Services", year: "2026", verified: true },
  { title: "GitHub Foundations Certification", issuer: "GitHub", year: "2024", verified: true },
  { title: "Generative Al Studio", issuer: "Google", year: "2025", verified: true },
  { title: "Java (Basic)", issuer: "Hacker Rank", year: "2025", verified: true },
];
