export const personalInfo = {
  name: "Merve Özdemir",
  title: "Full-Stack & Backend Engineer",
  subtitle: "Specializing in Microservices, IoT Telemetry Architecture, Secure Auth & Cloud-Native Solutions",
  status: "Project Assistant @ KoçDigital",
  statusType: "active", // active, available
  location: "Gebze, Kocaeli / Türkiye",
  email: "merve.ozdemir1441@gmail.com",
  phone: "+90 551 190 4544",
  linkedin: "https://linkedin.com/in/meerveozdemir",
  github: "https://github.com/mmerve1",
  summary: `Computer Engineering graduate with hands-on experience in full-stack software development, backend engineering, and enterprise IoT platforms. Skilled in developing RESTful APIs, microservices architectures, and modern web solutions using C#, Node.js, Spring Boot, React, and Vue.js. Through key roles at KoçDigital and SDT Space & Defence Technologies, I gained practical expertise in enterprise software systems, Keycloak authentication, real-time data handling, and Agile methodologies.`
};

export const stats = [
  { label: "B.Sc. Computer Eng. GPA", value: "3.40 / 4.00" },
  { label: "Enterprise Experience", value: "3+ Roles" },
  { label: "Core Technologies", value: "C# • Node • Spring" },
  { label: "Key Specialization", value: "Microservices & IoT" }
];

export const experiences = [
  {
    id: "kocdigital-pa",
    role: "Project Assistant",
    company: "KoçDigital",
    location: "Istanbul, Türkiye",
    period: "Oct 2025 – Present",
    type: "Full-Time / Project",
    badge: "Current Role",
    color: "#00f2fe",
    highlights: [
      "Developed and maintained RESTful APIs using C# (.NET) and Node.js in a microservices architecture.",
      "Engineered real-time telemetry pipelines and backend features for the enterprise Platform360 IoT platform.",
      "Contributed to frontend feature deployment and UI integrations using React and Vue.js.",
      "Resolved production backend issues, enhanced API throughput, and optimized SQL/NoSQL queries in Agile sprints."
    ],
    skills: ["C#", "Node.js", "Microservices", "React", "Vue.js", "Platform360 IoT", "REST APIs", "Agile"]
  },
  {
    id: "sdt-intern",
    role: "Software Engineering Intern",
    company: "SDT Space and Defence Technologies",
    location: "Ankara, Türkiye",
    period: "Aug 2025 – Sep 2025",
    type: "Internship",
    color: "#4facfe",
    highlights: [
      "Configured and containerized Keycloak authentication & authorization server using Docker.",
      "Implemented enterprise-grade OAuth2 authorization flows and JWT token verification mechanisms.",
      "Developed secure backend microservices using Java Spring Boot and validated REST endpoints via Postman.",
      "Enhanced security posture for defense-grade application architectures and frontend integration."
    ],
    skills: ["Java", "Spring Boot", "Keycloak", "Docker", "OAuth2", "JWT", "Postman", "Security"]
  },
  {
    id: "kocdigital-intern",
    role: "Software Engineering Intern",
    company: "KoçDigital",
    location: "Istanbul, Türkiye",
    period: "Jul 2025 – Aug 2025",
    type: "Internship",
    color: "#667eea",
    highlights: [
      "Actively contributed to Platform360 IoT platform development within the IoT Engineering department.",
      "Built and refactored RESTful microservices written in C# for telemetry data handling.",
      "Integrated live telemetry streams and resolved cross-layer production bugs in frontend and backend systems."
    ],
    skills: ["C#", ".NET Core", "IoT Telemetry", "RESTful APIs", "Bug Fixing", "Agile"]
  },
  {
    id: "kou-hci-intern",
    role: "Volunteer Software Intern",
    company: "KOU HCI Lab",
    location: "Kocaeli, Türkiye",
    period: "Jul 2024 – Aug 2024",
    type: "Research Intern",
    color: "#a855f7",
    highlights: [
      "Developed a mobile application processing live EEG brainwave data from Neurosky Mindwave hardware.",
      "Engineered real-time signal processing and interactive human-computer interaction (HCI) UI elements.",
      "Explored brain-computer interfaces (BCI) for interactive mobile applications."
    ],
    skills: ["Kotlin", "Flutter", "Neurosky Mindwave", "EEG Data Processing", "HCI", "Real-Time Systems"]
  }
];

export const projects = [
  {
    id: "eventhub",
    title: "EventHub – Event Management Platform",
    category: "Full-Stack",
    period: "2025",
    description: "Enterprise-grade full-stack event management platform providing custom event creation, recommendation engines, ticket booking, and user management.",
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "REST API"],
    features: [
      "RESTful API service architecture for event CRUD and user management",
      "Personalized event recommendation algorithm based on user preferences",
      "Responsive interactive UI with state management and authentication"
    ],
    github: "https://github.com/mmerve1",
    featured: true
  },
  {
    id: "dynamic-stock",
    title: "Dynamic Priority Sorting & Stock Management System",
    category: "Backend",
    period: "2025",
    description: "High-throughput multithreaded transaction prioritization and inventory management engine for dynamic customer order queues.",
    tech: ["Node.js", "PostgreSQL", "Multithreading", "Express.js"],
    features: [
      "Dynamic customer prioritization algorithm based on waiting time and customer tiers",
      "Multithreaded queue processor for concurrent stock transactions",
      "Real-time inventory logging, monitoring dashboard APIs, and audit trails"
    ],
    github: "https://github.com/mmerve1",
    featured: true
  },
  {
    id: "kelime-mayinlari",
    title: "Kelime Mayınları (Word Mines Game)",
    category: "Mobile",
    period: "2025",
    description: "Native Android word-puzzle mobile game featuring grid matrix word discovery, bomb tiles, customizable difficulty levels, and sound design.",
    tech: ["Android", "Kotlin", "Jetpack Compose", "Material Design 3", "MVVM"],
    features: [
      "Built with modern Android Jetpack Compose declarative UI architecture",
      "State-driven MVVM pattern with clean separation of game logic and UI",
      "Custom animations, dynamic grid generator, and local high score tracking"
    ],
    github: "https://github.com/mmerve1/Kelime-Mayinlari",
    featured: true
  },
  {
    id: "brainwave-game",
    title: "Brainwave-Based Mobile Game",
    category: "Mobile & IoT",
    period: "2024",
    description: "Innovative mobile application leveraging Neurosky Mindwave EEG headsets to process real-time cognitive brainwave signals for gameplay control.",
    tech: ["Flutter", "Neurosky Mindwave SDK", "OpenCV", "Cognitive Signals"],
    features: [
      "Real-time EEG telemetry decoding (Attention & Meditation metrics)",
      "Computer vision integration for head tracking and gesture recognition",
      "Interactive human-computer interaction (HCI) feedback loop"
    ],
    github: "https://github.com/mmerve1",
    featured: false
  },
  {
    id: "online-shop",
    title: "Online Shop Ordering App",
    category: "Mobile",
    period: "2024",
    description: "Cross-platform mobile e-commerce store application with dynamic shopping cart, product filter, offline cache, and authentication.",
    tech: ["Flutter", "Dart", "SQLite", "State Management"],
    features: [
      "Local SQLite persistence for cart and offline order queues",
      "Dynamic cart state updating with instant total calculations",
      "Sleek mobile UI designed for optimum customer conversion"
    ],
    github: "https://github.com/mmerve1",
    featured: false
  }
];

export const skillCategories = [
  {
    title: "Backend & Architecture",
    icon: "Server",
    skills: [
      { name: "C# / .NET Core", level: 90 },
      { name: "Node.js & Express", level: 88 },
      { name: "Java / Spring Boot", level: 82 },
      { name: "RESTful API Design", level: 95 },
      { name: "Microservices Architecture", level: 85 },
      { name: "OAuth2 / JWT / Keycloak", level: 85 }
    ]
  },
  {
    title: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "C#", level: 92 },
      { name: "JavaScript / TypeScript", level: 88 },
      { name: "Kotlin", level: 85 },
      { name: "Java", level: 82 },
      { name: "Python", level: 80 },
      { name: "C", level: 85 }
    ]
  },
  {
    title: "Frontend Development",
    icon: "Layout",
    skills: [
      { name: "React.js", level: 85 },
      { name: "Vue.js", level: 80 },
      { name: "HTML5 / CSS3 / Modern Web", level: 90 },
      { name: "Jetpack Compose (Android)", level: 85 },
      { name: "Bootstrap / Tailwind", level: 88 }
    ]
  },
  {
    title: "Databases & Tools / Cloud",
    icon: "Database",
    skills: [
      { name: "PostgreSQL & MySQL", level: 88 },
      { name: "SQLite & Firebase Firestore", level: 82 },
      { name: "Docker & Containerization", level: 80 },
      { name: "Git / GitHub / DevOps Exposure", level: 92 },
      { name: "Postman API Testing", level: 90 },
      { name: "OpenCV & TensorFlow", level: 75 }
    ]
  }
];

export const education = [
  {
    institution: "Kocaeli University",
    degree: "B.Sc. in Computer Engineering",
    period: "2022 – 2026",
    location: "Kocaeli, Türkiye",
    gpa: "3.40 / 4.00",
    details: "Focusing on Software Engineering, Data Structures & Algorithms, Distributed Systems, Database Management, and IoT Systems."
  },
  {
    institution: "42 Kocaeli",
    degree: "Open Algorithm & Data Structures Program",
    period: "2024",
    location: "Kocaeli, Türkiye",
    gpa: "Completed",
    details: "Intensive project-based software engineering based on Ecole 42 peer-learning methodology. Advanced Unix, C programming, memory allocation, and problem-solving."
  }
];

export const certifications = [
  { title: "Frontend Web Development Path", issuer: "Patika / Coursera", year: "2024", topic: "HTML, CSS, Bootstrap, JavaScript, Data Structures" },
  { title: "Git & GitHub Version Control Certificate", issuer: "Version Control & Collaboration", year: "2024", topic: "Branching strategies, CI/CD basics, Git workflow" },
  { title: "IEEE Student Member", issuer: "IEEE Computer Society Türkiye", year: "2024 – 2025", topic: "Active Student Activities Team Member" }
];

export const references = [
  {
    name: "Hande Öncü",
    title: "Senior Business Analyst",
    company: "Fibabanka via Elsify",
    email: "handebetulecir@gmail.com"
  },
  {
    name: "Sadık Eser",
    title: "System Engineer",
    company: "SDT Space & Defence Technologies",
    email: "seser@sdt.com.tr"
  },
  {
    name: "Necati Kesici",
    title: "Senior System Engineer",
    company: "SDT Space & Defence Technologies",
    email: "mehmet.demir@sdt.com.tr"
  }
];
