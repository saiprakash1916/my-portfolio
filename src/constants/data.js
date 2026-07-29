// Central content source for the entire portfolio.
export const PROFILE = {
  name: "Sai Prakash",
  role: "Senior Java Backend Developer",
  tagline: "Building scalable backend systems using Java, Spring Boot and Microservices.",
  location: "Hyderabad, India",
  email: "saiprakash1916@gmail.com",
  resumeUrl: "/Sai_Prakash_Sikhakolli_Resume.pdf",
  socials: {
    github: "https://github.com/saiprakash1916",
    linkedin: "https://www.linkedin.com/in/saiprakashsikhakolli/",
    email: "mailto:saiprakash1916@gmail.com",
  },
  about:
    "I'm a Senior Java Backend Developer with 5+ years of experience designing and shipping distributed systems that stay fast under load. I specialise in Spring Boot microservices, event-driven architectures, clean domain modelling and cloud-native deployments — turning complex requirements into resilient, observable services.",
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

export const MANIFESTO = [
  {
    no: "01",
    title: "Design for failure",
    body: "Every service assumes the network is hostile. Retries, circuit breakers and idempotency are not afterthoughts — they are the contract.",
  },
  {
    no: "02",
    title: "Boundaries over cleverness",
    body: "Clean domain boundaries and explicit contracts beat clever abstractions. Code should read like the business talks.",
  },
  {
    no: "03",
    title: "Observability first",
    body: "If it isn't measured, it's broken silently. Structured logs, traces and metrics ship with the feature, not after the incident.",
  },
];

export const TECH_GROUPS = [
  {
    category: "Backend",
    items: ["Java", "Spring Boot", "Spring Security", "Microservices", "REST APIs", "Hibernate", "JPA"],
  },
  { category: "Databases", items: ["MySQL", "PostgreSQL", "Oracle", "MongoDB"] },
  { category: "Frontend", items: ["React", "JavaScript", "Tailwind CSS"] },
  { category: "Tools", items: ["Git", "GitHub", "Maven", "Gradle", "Docker", "Jenkins", "Postman"] },
  { category: "Cloud", items: ["AWS (EC2)", "S3", "IAM"] },
  { category: "Deployment", items: ["Vercel", "Netlify", "Docker"] },
];

export const MARQUEE_WORDS = [
  "Spring Boot", "Microservices", "Kafka", "PostgreSQL", "Docker",
  "Kubernetes", "REST APIs", "gRPC", "Redis", "AWS", "Hibernate", "CI/CD",
];

export const EXPERIENCE = [
  {
    company: "FinCore Systems",
    role: "Senior Backend Engineer",
    duration: "2023 — Present",
    location: "Bengaluru",
    achievements: [
      "Led migration of a monolith to 12 Spring Boot microservices, cutting deploy time by 70%.",
      "Designed event-driven payments pipeline handling 4M+ daily transactions with Kafka.",
      "Introduced distributed tracing, reducing mean time to resolution by 45%.",
    ],
    tech: ["Java 17", "Spring Boot", "Kafka", "PostgreSQL", "Docker"],
  },
  {
    company: "NexaRetail",
    role: "Backend Engineer",
    duration: "2021 — 2023",
    location: "Hyderabad",
    achievements: [
      "Built an e-commerce order service scaling to 50k concurrent users.",
      "Implemented OAuth2 + JWT auth service reused across 8 teams.",
      "Optimised JPA queries and caching, improving p95 latency by 60%.",
    ],
    tech: ["Java 11", "Spring Security", "Redis", "MySQL", "AWS"],
  },
  {
    company: "ByteBridge Labs",
    role: "Java Developer",
    duration: "2019 — 2021",
    location: "Pune",
    achievements: [
      "Delivered REST APIs for a hospital management platform used by 30+ clinics.",
      "Automated CI/CD with Jenkins, enabling weekly releases.",
      "Wrote integration test suites raising coverage from 40% to 85%.",
    ],
    tech: ["Java 8", "Spring MVC", "Hibernate", "Oracle", "Jenkins"],
  },
];

export const PROJECTS = [
  {
    title: "Banking Microservices",
    category: "Distributed Systems",
    description: "Event-driven core-banking platform with accounts, ledger, payments and fraud services communicating over Kafka.",
    tech: ["Spring Boot", "Kafka", "PostgreSQL", "Docker"],
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=1200&q=80",
    demo: "#",
    github: "https://github.com/",
    featured: true,
  },
  {
    title: "E-Commerce Backend",
    category: "Scalable APIs",
    description: "Catalog, cart, order and inventory services with Redis caching and an API gateway handling 50k concurrent users.",
    tech: ["Spring Cloud", "Redis", "MySQL", "AWS"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    demo: "#",
    github: "https://github.com/",
    featured: true,
  },
  {
    title: "Authentication Service",
    category: "Security",
    description: "Centralised OAuth2 + JWT identity provider with role-based access, refresh rotation and rate limiting.",
    tech: ["Spring Security", "JWT", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    demo: "#",
    github: "https://github.com/",
    featured: false,
  },
  {
    title: "Hospital Management",
    category: "Enterprise",
    description: "Modular platform for appointments, records and billing serving 30+ clinics with audit logging.",
    tech: ["Spring MVC", "Hibernate", "Oracle"],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    demo: "#",
    github: "https://github.com/",
    featured: false,
  },
  {
    title: "Notification Service",
    category: "Async Messaging",
    description: "Fan-out notification engine (email, SMS, push) with retry queues and template management.",
    tech: ["Spring Boot", "RabbitMQ", "MongoDB"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
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
  { title: "Oracle Certified Professional: Java SE 11", issuer: "Oracle", year: "2022", verified: true },
  { title: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2023", verified: true },
  { title: "Spring Professional Certification", issuer: "VMware", year: "2023", verified: true },
  { title: "Docker Certified Associate", issuer: "Docker Inc.", year: "2024", verified: true },
];
