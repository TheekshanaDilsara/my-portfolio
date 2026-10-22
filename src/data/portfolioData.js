export const personalInfo = {
  name: "Theekshana Dilsara Sugathnath",
  shortName: "Theekshana Dilsara",
  monogram: "TD",
  title: "Data Science Undergraduate & Software Engineer",
  institution: "Sri Lanka Institute of Information Technology (SLIIT)",
  location: "Sri Lanka",
  coordinates: "LAT 6.9271° N, LON 79.8612° E",
  status: "Available for Internships & Projects",
  headline: "ARCHITECTING INTELLIGENT SYSTEMS FROM DATA & CODE",
  tagline: "Bridging statistical rigor, machine learning, and full-stack software development to solve high-impact real-world problems.",
  bio: [
    "I am a passionate Data Science undergraduate at SLIIT with deep interests in machine learning, statistical computing, analytics, and software engineering. My background blends analytical exploration with practical product engineering—building everything from high-dimensional customer behavior dashboards to full-stack e-commerce platforms and native Android applications.",
    "Driven by curiosity and engineering discipline, I focus on turning raw transactional and spatial data into actionable insights, scalable algorithms, and intuitive digital experiences that deliver measurable impact."
  ],
  stats: [
    { label: "Completed Projects", value: "6+", highlight: "Web, Mobile, Analytics" },
    { label: "Transactions Analyzed", value: "3.9K+", highlight: "Customer Behavior BI" },
    { label: "Technologies Mastered", value: "15+", highlight: "Python, SQL, React, Java" },
    { label: "Academic Specialization", value: "Data Science", highlight: "SLIIT BSc (Hons)" },
  ],
  contact: {
    email: "theekshanadilsaras@gmail.com",
    phones: ["+94 70 197 3380", "+94 77 575 7740"],
    linkedin: "https://www.linkedin.com/in/theekshana-sugathnath-959258311",
    github: "https://github.com/TheekshanaDilsara",
    resumeUrl: "/Theekshana Dilsara CV Resume.pdf",
  }
};

export const skillsData = [
  {
    category: "Data Science & Machine Learning",
    icon: "Brain",
    description: "Statistical modeling, predictive algorithms, and exploratory data workflows",
    skills: [
      { name: "Python", level: "Core", tags: ["Pandas", "NumPy", "Scikit-Learn"] },
      { name: "R Language", level: "Advanced", tags: ["Statistical Computing", "ggplot2"] },
      { name: "Machine Learning", level: "Applied", tags: ["Supervised", "Clustering", "Evaluation"] },
      { name: "Exploratory Data Analysis", level: "Core", tags: ["EDA", "Feature Engineering"] },
      { name: "Statistical Inference", level: "Theory", tags: ["Hypothesis Testing", "Probability"] },
      { name: "Data Cleaning & ETL", level: "Production", tags: ["Data Pipelines", "Transformation"] },
    ]
  },
  {
    category: "Data Analytics & Business Intelligence",
    icon: "BarChart",
    description: "Enterprise dashboards, DAX queries, metric architecture, and visual storytelling",
    skills: [
      { name: "Power BI Desktop", level: "Specialist", tags: ["Dashboards", "DAX", "Data Modeling"] },
      { name: "SQL & Databases", level: "Advanced", tags: ["MySQL", "PostgreSQL", "SQL Server"] },
      { name: "Data Visualization", level: "Advanced", tags: ["Matplotlib", "Seaborn", "Plotly"] },
      { name: "Business Analytics", level: "Applied", tags: ["Cohort Analysis", "KPI Design"] },
      { name: "Relational Modeling", level: "Core", tags: ["Star Schema", "Normalization"] },
    ]
  },
  {
    category: "Full-Stack Web & Software Engineering",
    icon: "Code",
    description: "Modern component architectures, REST APIs, and responsive web systems",
    skills: [
      { name: "JavaScript & React", level: "Proficient", tags: ["Next.js", "React Hooks", "ES6+"] },
      { name: "Tailwind CSS & Styling", level: "Proficient", tags: ["Modern CSS", "Responsive UI"] },
      { name: "RESTful API Integration", level: "Core", tags: ["JSON", "Endpoints", "Fetch API"] },
      { name: "Database Engineering", level: "Core", tags: ["Relational & MongoDB NoSQL"] },
      { name: "System Architecture", level: "Foundational", tags: ["MVC", "Authentication", "CRUD"] },
    ]
  },
  {
    category: "Mobile Application Development",
    icon: "Smartphone",
    description: "Native Android development, local storage, lifecycle, and Material UX",
    skills: [
      { name: "Android Studio", level: "Proficient", tags: ["Java", "Android SDK", "XML UI"] },
      { name: "Mobile UI/UX Design", level: "Core", tags: ["Material 3", "Widgets", "Dark Mode"] },
      { name: "Local Data & State", level: "Core", tags: ["SQLite", "SharedPrefs", "Alarms"] },
      { name: "App Lifecycle Management", level: "Applied", tags: ["Background Services", "Notifications"] },
    ]
  },
  {
    category: "Automotive Electronics & Hardware",
    icon: "Cpu",
    description: "Microcontroller EEPROM reading, diagnostics protocols, and technical drafting",
    skills: [
      { name: "EEPROM Read / Write", level: "Certified", tags: ["iProg+", "EEPROM Programmers"] },
      { name: "Automotive ECU Diagnostics", level: "Trained", tags: ["OBD Protocols", "Fault Diagnosis"] },
      { name: "AutoCAD 2D / 3D", level: "Certified", tags: ["Technical Drafting", "3D Modeling"] },
    ]
  },
  {
    category: "Tools, Workflows & Collaboration",
    icon: "Terminal",
    description: "Version control, developer ergonomics, and collaborative execution",
    skills: [
      { name: "Git & GitHub", level: "Daily", tags: ["Branching", "Pull Requests", "CI"] },
      { name: "VS Code & JetBrains", level: "Daily", tags: ["Debugging", "Extensions"] },
      { name: "EmailJS & Integrations", level: "Production", tags: ["API Services", "Webhooks"] },
      { name: "Documentation & Presentation", level: "Professional", tags: ["Technical Writing", "Reports"] },
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    slug: "customer-behavior-analysis",
    title: "Customer Behavior Analysis Dashboard",
    tagline: "Enterprise BI telemetry uncovering transactional trends across 3,900+ purchases",
    type: "Individual Research Project",
    category: "Data Science",
    featured: true,
    accent: "orange",
    description:
      "Analyzed customer shopping behavior using real transactional records of 3,900+ purchases across diverse product categories. Developed a high-impact interactive Power BI dashboard delivering deep visual intelligence into purchasing habits, customer segmentation, and product affinity.",
    highlights: [
      "Extracted actionable revenue insights from 3,900+ customer transaction rows across multi-attribute categories.",
      "Engineered bespoke DAX measures for dynamic customer lifetime value and cross-category affinity indexes.",
      "Designed interactive multi-slice visual panels: demographic distributions, gender vs category trends, and seasonal spikes.",
      "Provided strategic recommendations for retail inventory optimization and targeted promotional campaigns."
    ],
    technologies: ["Power BI", "Python", "DAX", "SQL", "Pandas", "Data Modeling"],
    icon: "📊",
    githubUrl: "https://github.com/TheekshanaDilsara/Customer_behavior_analysis",
    videoUrl: "/videos/customer_dashboard-demo.mp4",
    youtubeUrl: "https://youtu.be/b4PePVsl0fg",
    posterImage: null,
  },
  {
    id: 2,
    slug: "aura-shopping-platform",
    title: "AURA — Online Shopping Platform",
    tagline: "Full-stack apparel e-commerce system with fluid browsing and session persistence",
    type: "Collaborative Engineering",
    category: "Web Development",
    featured: true,
    accent: "amber",
    description:
      "Developed an end-to-end e-commerce apparel platform with an emphasis on seamless customer interactions, catalog filtering, responsive aesthetics, and secure user account lifecycle management with relational database persistence.",
    highlights: [
      "Engineered dynamic product catalog showcasing varied apparel categories with instantaneous client filtering.",
      "Implemented secure user registration, profile management, and persistent cart workflows.",
      "Designed an elegant, accessible dark-and-light UI with high-performance responsive grid layouts.",
      "Integrated normalized database schemas for transaction tracking and inventory syncing."
    ],
    technologies: ["Full Stack Web", "Database Design", "User Authentication", "CSS Grid", "JavaScript"],
    icon: "🛍️",
    githubUrl: "https://github.com/TheekshanaDilsara/AURA-Shopping-Platform",
    videoUrl: "/videos/aura-demo.mp4",
    youtubeUrl: "https://youtu.be/RJlySkKHcGM",
    posterImage: null,
  },
  {
    id: 3,
    slug: "eldercare-management-system",
    title: "ElderCare — Elder Home Management & AI Assistant",
    tagline: "Comprehensive care ecosystem with role-based access and intelligent query chatbot",
    type: "Collaborative Engineering",
    category: "Web Development",
    featured: true,
    accent: "emerald",
    description:
      "Engineered a holistic management portal for residential elder care facilities supporting 4 distinct user tiers: Elder Residents, Medical/Care Staff, Facility Operators, and Family Guardians, augmented with an automated AI support assistant.",
    highlights: [
      "Architected multi-role authentication and authorization pipelines for staff, operators, and family guardians.",
      "Integrated an automated conversational AI assistant with instant query resolution and operator escalation.",
      "Implemented automated email notification dispatch for resident health updates and admission milestones.",
      "Constructed a private guardian portal offering real-time visibility into resident welfare, schedules, and medical notes."
    ],
    technologies: ["Web Systems", "AI Chatbot", "Role-Based Access Control", "Relational DB", "Email Services"],
    icon: "🏥",
    githubUrl: "https://github.com/TheekshanaDilsara/ElderCare-Elder-Home-System",
    videoUrl: "/videos/eldercare-demo.mp4",
    youtubeUrl: "https://youtu.be/S0F8WcjYKew",
    posterImage: null,
  },
  {
    id: 4,
    slug: "drivemate-vehicle-maintenance",
    title: "DriveMate — Vehicle Maintenance Mobile App",
    tagline: "Native Android utility for fleet maintenance tracking, odometer telemetry, and service reminders",
    type: "Individual Product",
    category: "Mobile Development",
    featured: true,
    accent: "rose",
    description:
      "Engineered a native Android application in Android Studio (Java) dedicated to personal vehicle maintenance management. Features robust multi-vehicle registration, scheduled service reminders, cost analytics, and digital logbook exports.",
    highlights: [
      "Engineered multi-vehicle garage management with detailed vehicle specs, odometer logs, and service history.",
      "Implemented automated Android alarm manager notifications for time- and mileage-based service intervals.",
      "Built expense tracking algorithms calculating cost-per-mile and periodic maintenance cost summaries.",
      "Crafted an intuitive Material Design interface adhering to mobile usability and tactile feedback standards."
    ],
    technologies: ["Android Studio", "Java", "SQLite", "AlarmManager", "Material Design UI"],
    icon: "🚗",
    githubUrl: "https://github.com/TheekshanaDilsara/DriveMate-MobileAppliacation",
    videoUrl: "/videos/drivemate-demo.mp4",
    youtubeUrl: "https://youtu.be/L7eNscXTvAs",
    posterImage: null,
  },
  {
    id: 5,
    slug: "fitpro-fitness-tracker",
    title: "FitPro+ — Fitness & Habit Tracking App",
    tagline: "Feature-dense Android tracker featuring habit streaks, home-screen widgets, and daily mood journaling",
    type: "Individual Product",
    category: "Mobile Development",
    featured: false,
    accent: "cyan",
    description:
      "Constructed an advanced habit and fitness tracking application for Android. Features customized recurring routines, interactive home-screen widgets, streak gamification, dark mode ergonomics, and an integrated daily mood journal.",
    highlights: [
      "Created habit scheduling engine supporting custom frequency algorithms, reminders, and milestone tracking.",
      "Implemented interactive Android App Widgets allowing users to check in directly from their home screen.",
      "Designed an integrated Mood Journal with sentiment tracking to analyze correlations between exercise and mental well-being.",
      "Engineered fluid dark mode transitions optimized for low-light night-time usage and battery efficiency."
    ],
    technologies: ["Android Studio", "Java", "App Widgets", "Local Storage", "Habit Analytics"],
    icon: "💪",
    githubUrl: "https://github.com/TheekshanaDilsara/FitPro-_Fitness-and-Habbit-Tracker",
    videoUrl: "/videos/fitpro-demo.mp4",
    youtubeUrl: "https://youtu.be/eTiVKNgFfRM",
    posterImage: null,
  },
  {
    id: 6,
    slug: "catchme-bus-tickets",
    title: "CatchMe — Bus Ticket Reservation System",
    tagline: "Scalable transit booking portal with account lifecycle management and transit fleet routing",
    type: "Collaborative Engineering",
    category: "Web Development",
    featured: false,
    accent: "sky",
    description:
      "Constructed a reliable web-based public transit booking application designed to streamline inter-city bus reservations. Offers passengers intuitive route lookups, seat selection, profile lifecycle management, and administrative fleet controls.",
    highlights: [
      "Developed user account management workflows: profile customization, secure credentials, and booking archives.",
      "Built schedule search algorithms enabling users to query departures by origin, destination, and timetable.",
      "Implemented administrative control panels for bus operators to update seat inventories and trip statuses.",
      "Designed relational schema workflows ensuring zero double-booking during peak reservation requests."
    ],
    technologies: ["Full-Stack Web", "Database Management", "Session Security", "Transit APIs"],
    icon: "🚌",
    githubUrl: "https://github.com/TheekshanaDilsara/CatchMe-BusTicket-reservation-system",
    videoUrl: "/videos/catchme-demo.mp4",
    youtubeUrl: "https://youtu.be/n45SKcyk1Ww",
    posterImage: null,
  }
];

export const educationData = [
  {
    degree: "BSc (Hons) in Data Science",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    period: "2023 — Present",
    status: "Currently Pursuing",
    badge: "Undergraduate Degree",
    description:
      "Rigorous academic curriculum specializing in statistical machine learning, exploratory analytics, distributed data systems, predictive algorithms, and relational/NoSQL architectures. Actively applying theoretical frameworks into production-grade data pipelines and real-world projects.",
    courses: [
      "Machine Learning & Statistical Modeling",
      "Data Analytics & Exploratory Data Analysis",
      "Database Systems & Data Warehousing",
      "Software Engineering & Object-Oriented Design",
      "Data Structures & Algorithms"
    ]
  },
  {
    degree: "G.C.E. Advanced Level — Mathematics Stream",
    institution: "Dharmaraja College, Kandy",
    period: "Completed",
    status: "Completed",
    badge: "Secondary Education",
    description:
      "Completed secondary education in the Combined Mathematics stream, establishing rigorous mathematical foundations in calculus, algebra, mechanics, and statistics that serve as the bedrock for advanced machine learning and algorithmic problem-solving.",
    courses: ["Combined Mathematics", "Physics", "Chemistry"]
  },
  {
    degree: "Automotive Electronics & Diagnostics (OBD)",
    institution: "OBD Academy",
    period: "Certified",
    status: "Certified",
    badge: "Technical Specialization",
    description:
      "Hands-on technical service training in automotive electrical architectures, ECU communication protocols, microcontroller EEPROM read/write routines, and hardware diagnostic equipment.",
    courses: ["Microcontroller EEPROM Programmers (iProg+)", "ECU Reading Fundamentals", "Automotive OBD Protocol Diagnostics"]
  },
  {
    degree: "AutoDesk AutoCAD Certificate Course",
    institution: "3D ART Institute",
    period: "Certified",
    status: "Certified",
    badge: "CAD Certification",
    description:
      "Accredited training program in computer-aided design (CAD), mastering 2D technical drafting, geometric dimensioning, and 3D architectural modeling with industry-standard Autodesk toolsets.",
    courses: ["2D Technical Drafting", "3D Geometric Modeling", "Spatial Design & Blueprint Interpretation"]
  },
  {
    degree: "G.C.E. Ordinary Level",
    institution: "Sri Chandananda Buddhist College",
    period: "Completed",
    status: "Completed",
    badge: "Foundational Education",
    description:
      "Completed foundational secondary schooling with distinguished academic results across mathematics, sciences, and English language communication.",
    courses: ["Mathematics", "Science", "Information & Communication Technology", "English"]
  }
];

export const professionalQualities = [
  { name: "Analytical Problem Solving", desc: "Deconstructing ambiguous challenges into systematic hypotheses and algorithmic solutions." },
  { name: "Data-Driven Decision Making", desc: "Grounding architectural choices and product iterations on verifiable empirical metrics." },
  { name: "Full-Stack Versatility", desc: "Navigating seamlessly across ML notebooks, backend database schemas, and frontend interfaces." },
  { name: "Engineering Craft & Clean Code", desc: "Commitment to readability, maintainability, modularity, and reproducible data workflows." },
  { name: "Collaborative Agile Execution", desc: "Demonstrated success in multi-disciplinary team projects with clear version control and communication." },
  { name: "Continuous Learning & Agility", desc: "Rapidly mastering emerging frameworks, libraries, and analytical techniques." }
];
