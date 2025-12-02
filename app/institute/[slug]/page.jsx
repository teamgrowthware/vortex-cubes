"use client";
import { useState, useEffect } from "react";
import {
  Code2,
  Layers,
  Smartphone,
  Flame,
  Palette,
  TrendingUp,
} from "lucide-react";


import { useParams } from "next/navigation";

export default function Page() {
  const { slug } = useParams();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const courses = [
   {
  slug: "mern-stack",
  id: 1,
  icon: Code2,
  title: "MERN Stack Development",
  duration: "12 Months (Beginner to Advanced)",
  level: "Beginner → Advanced",
  overview:
    "Become a complete Full Stack MERN Developer by learning MongoDB, Express.js, React.js and Node.js with real-world projects, modern tools, authentication, deployment, and best practices.",

  topics: [
    // 🔰 FUNDAMENTALS
    {
      name: "Web Fundamentals",
      desc: "How web works, client-server model, HTTP/HTTPS, DNS, browsers, hosting basics",
    },
    {
      name: "HTML5",
      desc: "Semantic HTML, forms, accessibility, SEO-friendly structure",
    },
    {
      name: "CSS3",
      desc: "Flexbox, Grid, responsive design, animations, Tailwind CSS",
    },
    {
      name: "JavaScript (Core)",
      desc: "Variables, scope, closures, hoisting, ES6+, async/await, promises",
    },

    // ⚛️ FRONTEND – REACT
    {
      name: "React.js Basics",
      desc: "JSX, components, props, state, events",
    },
    {
      name: "React Hooks",
      desc: "useState, useEffect, useContext, useRef, custom hooks",
    },
    {
      name: "React Routing",
      desc: "React Router, dynamic routes, protected routes",
    },
    {
      name: "State Management",
      desc: "Context API, Redux Toolkit, global state patterns",
    },
    {
      name: "Forms & Validation",
      desc: "Controlled components, form validation, error handling",
    },
    {
      name: "Performance Optimization",
      desc: "Lazy loading, memoization, code splitting",
    },

    // 🟢 BACKEND – NODE + EXPRESS
    {
      name: "Node.js Fundamentals",
      desc: "Event loop, non-blocking IO, modules, NPM, environment variables",
    },
    {
      name: "Express.js",
      desc: "Middleware, routing, REST APIs, MVC architecture",
    },
    {
      name: "Authentication",
      desc: "JWT, access & refresh tokens, role-based access control (RBAC)",
    },
    {
      name: "Authorization & Security",
      desc: "Password hashing (bcrypt), CORS, rate limiting, helmet",
    },

    // 🍃 DATABASE – MONGODB
    {
      name: "MongoDB Basics",
      desc: "Documents, collections, CRUD operations",
    },
    {
      name: "Mongoose ODM",
      desc: "Schemas, models, validation, population",
    },
    {
      name: "Advanced MongoDB",
      desc: "Indexes, aggregation pipeline, relationships",
    },

    // 🌐 FULL STACK INTEGRATION
    {
      name: "API Integration",
      desc: "Connecting React frontend with Node backend using Axios / Fetch",
    },
    {
      name: "Error Handling",
      desc: "Central error handling, try/catch, validation errors",
    },

    // 🔐 ADVANCED FEATURES
    {
      name: "File Uploads",
      desc: "Multer, Cloudinary, image/video uploads",
    },
    {
      name: "Real-time Applications",
      desc: "Sockets using Socket.io (chat apps, notifications)",
    },
    {
      name: "Payment Integration",
      desc: "Razorpay / Stripe payment gateway integration",
    },

    // 🚀 DEPLOYMENT & DEVOPS
    {
      name: "Version Control",
      desc: "Git, GitHub, pull requests, branching strategy",
    },
    {
      name: "Deployment",
      desc: "Frontend on Vercel/Netlify, Backend on Render/AWS",
    },
    {
      name: "Production Optimization",
      desc: "Environment configs, security, performance, logs",
    },

    // 🧠 INTERVIEW & CAREER
    {
      name: "Interview Preparation",
      desc: "Common MERN interview questions, system design basics",
    },
    {
      name: "Resume & Portfolio",
      desc: "GitHub profile, portfolio website, live projects",
    },
  ],

  projects: [
    "Portfolio Website",
    "Authentication System (Login / Signup)",
    "CRUD App (Admin Dashboard)",
    "E-commerce Website",
    "Chat Application (Real-time)",
    "Blog / CMS Platform",
    "Final Capstone Project (Industry-level)",
  ],

  tools: [
    "VS Code",
    "Postman",
    "MongoDB Atlas",
    "Git & GitHub",
    "Vercel",
    "Render",
    "AWS (Basics)",
  ],

  career:
    "Full Stack Developer, MERN Developer, Backend Developer, Frontend Developer",

 
  tags: [
    "JavaScript",
    "MERN",
    "Full Stack",
    "MongoDB",
    "React",
    "Node.js",
    "Express",
    "REST APIs",
  ],
},

   {
  slug: "mean-stack",
  id: 2,
  icon: Layers,
 
  title: "MEAN Stack Development",
  duration: "12 Months (Beginner to Advanced)",
  level: "Beginner → Advanced",

  overview:
    "Master the MEAN Stack (MongoDB, Express.js, Angular, Node.js) to build scalable, secure, and high-performance enterprise-level web applications using TypeScript and modern frontend architecture.",

  // 📚 SYLLABUS
  topics: [
    // 🔰 FUNDAMENTALS
    {
      name: "Web Fundamentals",
      desc: "Client–server architecture, HTTP/HTTPS, REST APIs, MVC vs MVVM, browsers & hosting basics",
    },
    {
      name: "HTML5",
      desc: "Semantic elements, forms, accessibility, SEO-friendly structure",
    },
    {
      name: "CSS3",
      desc: "Flexbox, Grid, responsive layouts, animations, Tailwind / SCSS",
    },
    {
      name: "JavaScript Core",
      desc: "ES6+, closures, async/await, promises, modules",
    },

    // 🅰️ FRONTEND – ANGULAR
    {
      name: "TypeScript",
      desc: "Types, interfaces, classes, decorators, generics",
    },
    {
      name: "Angular Fundamentals",
      desc: "Components, templates, data binding, directives, pipes",
    },
    {
      name: "Angular Architecture",
      desc: "Modules, services, dependency injection, best practices",
    },
    {
      name: "Angular Routing",
      desc: "Lazy loading modules, guarded routes, role-based routing",
    },
    {
      name: "Forms & Validation",
      desc: "Template-driven forms, reactive forms, custom validators",
    },
    {
      name: "State Management",
      desc: "RxJS, Observables, Subjects, NgRx basics",
    },
    {
      name: "UI Libraries",
      desc: "Angular Material, PrimeNG, enterprise UI patterns",
    },

    // 🟢 BACKEND – NODE + EXPRESS
    {
      name: "Node.js Core",
      desc: "Event loop, non-blocking I/O, environment variables, NPM",
    },
    {
      name: "Express.js",
      desc: "REST API design, middleware, routing, MVC pattern",
    },
    {
      name: "Authentication",
      desc: "JWT authentication, session handling, RBAC",
    },
    {
      name: "Security & Performance",
      desc: "CORS, bcrypt, rate limiting, helmet, data validation",
    },

    // 🍃 DATABASE – MONGODB
    {
      name: "MongoDB Fundamentals",
      desc: "Collections, documents, CRUD operations",
    },
    {
      name: "Mongoose ODM",
      desc: "Schemas, models, validation, population",
    },
    {
      name: "Advanced MongoDB",
      desc: "Indexes, aggregation pipeline, relations",
    },

    // 🌐 FULL STACK CONNECT
    {
      name: "Frontend–Backend Integration",
      desc: "Secure API consumption in Angular using HttpClient",
    },
    {
      name: "Error Handling",
      desc: "Global error interceptors, API error responses",
    },

    // 🔐 ADVANCED FEATURES
    {
      name: "File Upload",
      desc: "Multipart uploads, Cloud storage (AWS S3 / Cloudinary)",
    },
    {
      name: "Real-time Applications",
      desc: "Socket.io with Angular + Node",
    },
    {
      name: "Caching & Optimization",
      desc: "Redis basics, API performance improvement",
    },

    // 🚀 DEPLOYMENT & PRODUCTION
    {
      name: "Version Control",
      desc: "Git, GitHub workflows, collaboration practices",
    },
    {
      name: "Deployment",
      desc: "Angular build, backend hosting, environment configs",
    },
    {
      name: "Enterprise Practices",
      desc: "Logging, security audits, scalability strategies",
    },

    // 🧠 CAREER PREP
    {
      name: "Interview Preparation",
      desc: "Angular + MEAN interview questions, system design basics",
    },
    {
      name: "Resume & Portfolio",
      desc: "Enterprise-oriented projects & GitHub profile",
    },
  ],

  // 🧪 PROJECTS
  projects: [
    "Angular Admin Dashboard",
    "Authentication & Role-Based Access System",
    "Enterprise CRM System",
    "E-commerce Backend with Angular Frontend",
    "Real-time Notification System",
    "Final Capstone Project (Industry-level)",
  ],

  // 🛠 TOOLS & TECH
  tools: [
    "VS Code",
    "Angular CLI",
    "Postman",
    "MongoDB Atlas",
    "Git & GitHub",
    "Docker (Basics)",
    "AWS (Basics)",
  ],

  // 🎯 CAREER OUTCOMES
  career:
    "Angular Developer, MEAN Stack Developer, Enterprise Application Developer",

 

  tags: [
    "MEAN",
    "Angular",
    "TypeScript",
    "MongoDB",
    "Node.js",
    "Express",
    "Enterprise Apps",
  ],
},

    {
  slug: "react-native",
  id: 3,
  icon:  Smartphone,
  title: "React Native Mobile App Development",
  duration: "12 Months (Beginner to Advanced)",
  level: "Beginner → Advanced",

  overview:
    "Become a professional Mobile App Developer by building high-performance Android & iOS applications using React Native, modern JavaScript, APIs, Firebase, and real-world projects.",

  // 📚 SYLLABUS
  topics: [
    // 🔰 FUNDAMENTALS
    {
      name: "Mobile App Fundamentals",
      desc: "How mobile apps work, Android vs iOS, native vs hybrid, app life cycle",
    },
    {
      name: "JavaScript Basics",
      desc: "ES6+, arrow functions, async/await, promises, modules",
    },
    {
      name: "React Fundamentals",
      desc: "JSX, components, props, state, hooks overview",
    },

    // ⚛️ REACT NATIVE CORE
    {
      name: "React Native Basics",
      desc: "View, Text, Image, ScrollView, StyleSheet",
    },
    {
      name: "Layout & Styling",
      desc: "Flexbox, responsive layouts, pixel density handling",
    },
    {
      name: "Core Components",
      desc: "FlatList, SectionList, Pressable, Modal, SafeAreaView",
    },
    {
      name: "Hooks in React Native",
      desc: "useState, useEffect, useContext, custom hooks",
    },

    // 🧭 NAVIGATION
    {
      name: "Navigation",
      desc: "React Navigation, stack navigation, tab navigation, drawer navigation",
    },
    {
      name: "Deep Linking",
      desc: "Handling external links and in-app navigation",
    },

    // 🌐 API & DATA
    {
      name: "API Integration",
      desc: "REST APIs using Fetch & Axios",
    },
    {
      name: "State Management",
      desc: "Context API, Redux Toolkit, global state handling",
    },
    {
      name: "Local Storage",
      desc: "AsyncStorage, secure storage concepts",
    },

    // 🔐 AUTHENTICATION & SECURITY
    {
      name: "Authentication",
      desc: "Email/password login, JWT based auth",
    },
    {
      name: "Firebase Authentication",
      desc: "OTP login, Google login",
    },

    // 🔥 FIREBASE & NATIVE FEATURES
    {
      name: "Firebase Integration",
      desc: "Firestore, Realtime Database, Cloud Functions (basic)",
    },
    {
      name: "Push Notifications",
      desc: "Firebase Cloud Messaging (FCM)",
    },
    {
      name: "Camera & Media",
      desc: "Camera access, image picker, permissions handling",
    },
    {
      name: "Device APIs",
      desc: "Location (GPS), sensors, haptics",
    },

    // ⚡ PERFORMANCE & QUALITY
    {
      name: "Performance Optimization",
      desc: "Re-render optimization, memoization, flatlist performance",
    },
    {
      name: "Error Handling",
      desc: "Global error handling, crash handling",
    },
    {
      name: "Testing",
      desc: "Basic testing, debugging, logging",
    },

    // 🚀 DEPLOYMENT
    {
      name: "App Build Process",
      desc: "Android APK / AAB builds, iOS IPA overview",
    },
    {
      name: "Play Store Deployment",
      desc: "Publishing Android apps, Play Console guidelines",
    },
    {
      name: "App Store Overview",
      desc: "iOS app publishing process (overview)",
    },

    // 🧠 CAREER PREP
    {
      name: "Project Architecture",
      desc: "Folder structure, scalable app patterns",
    },
    {
      name: "Interview Preparation",
      desc: "React Native interview questions & mobile concepts",
    },
    {
      name: "Portfolio Building",
      desc: "Play Store published apps & GitHub repositories",
    },
  ],

  // 🧪 PROJECTS
  projects: [
    "Todo App",
    "Authentication App (OTP / Login)",
    "REST API Based Mobile App",
    "E-commerce Mobile App",
    "Chat App with Firebase",
    "Location Based App",
    "Final Capstone App (Production ready)",
  ],

  // 🛠 TOOLS & TECH
  tools: [
    "VS Code",
    "Android Studio",
    "React Native CLI",
    "Expo",
    "Firebase",
    "Postman",
    "Git & GitHub",
  ],

  // 🎯 CAREER OUTCOMES
  career:
    "Mobile App Developer, React Native Developer, Cross-Platform App Developer",

  salary:
    "₹4–14 LPA (Freshers) | ₹18–30+ LPA (Experienced)",

  tags: [
    "React Native",
    "Mobile Development",
    "Android",
    "iOS",
    "JavaScript",
    "Cross Platform Apps",
  ],
},

    {
  slug: "flutter",
  id: 4,
  icon:  Flame,
  title: "Flutter Mobile App Development",
  duration: "12 Months (Beginner to Advanced)",
  level: "Beginner → Advanced",

  overview:
    "Become a professional Flutter Developer by building high-performance, beautiful cross-platform mobile applications using Dart, Flutter framework, Firebase, APIs, and real-world projects.",

  // 📚 SYLLABUS
  topics: [
    // 🔰 FUNDAMENTALS
    {
      name: "Mobile App Fundamentals",
      desc: "Native vs hybrid apps, Android vs iOS, app life cycle, rendering concepts",
    },
    {
      name: "Dart Programming",
      desc: "Syntax, variables, functions, OOP, async/await, futures, streams",
    },

    // 🧱 FLUTTER CORE
    {
      name: "Flutter Basics",
      desc: "Setup, widgets, widget tree, hot reload",
    },
    {
      name: "Widgets Overview",
      desc: "Stateless vs Stateful widgets, layout widgets",
    },
    {
      name: "UI Layouts",
      desc: "Row, Column, Stack, Flex, MediaQuery, responsive UI",
    },
    {
      name: "Styling & Theming",
      desc: "Themes, colors, fonts, dark mode, custom UI design",
    },

    // ⚙️ STATE MANAGEMENT
    {
      name: "State Management Concepts",
      desc: "setState, inherited widgets, state lifecycle",
    },
    {
      name: "Provider",
      desc: "Simple & scalable state management",
    },
    {
      name: "Bloc / Cubit",
      desc: "Enterprise-grade state management patterns",
    },

    // 🧭 NAVIGATION & ROUTING
    {
      name: "Navigation",
      desc: "Named routes, navigation stack, passing data",
    },
    {
      name: "Deep Linking",
      desc: "Handling app links & URL-based navigation",
    },

    // 🌐 API & DATA
    {
      name: "REST API Integration",
      desc: "HTTP requests, JSON parsing, error handling",
    },
    {
      name: "Local Storage",
      desc: "SharedPreferences, Hive, SQLite basics",
    },

    // 🔐 AUTHENTICATION & FIREBASE
    {
      name: "Firebase Setup",
      desc: "Firebase project setup, Android & iOS integration",
    },
    {
      name: "Firebase Authentication",
      desc: "Email/Password, Google Sign-In, OTP login",
    },
    {
      name: "Firebase Database",
      desc: "Firestore & Realtime Database",
    },
    {
      name: "Push Notifications",
      desc: "Firebase Cloud Messaging (FCM)",
    },

    // 📱 DEVICE & NATIVE FEATURES
    {
      name: "Camera & Media",
      desc: "Image picker, camera access, permissions",
    },
    {
      name: "Location Services",
      desc: "GPS, maps, background location",
    },
    {
      name: "Sensors & Device APIs",
      desc: "Accelerometer, gyroscope, haptics",
    },

    // ⚡ PERFORMANCE & QUALITY
    {
      name: "Performance Optimization",
      desc: "Widget rebuild optimization, isolates, lazy loading",
    },
    {
      name: "Animations",
      desc: "Implicit & explicit animations, Hero animations",
    },
    {
      name: "Error Handling",
      desc: "Exceptions, global error handling, debugging",
    },
    {
      name: "Testing",
      desc: "Unit testing, widget testing (basics)",
    },

    // 🚀 DEPLOYMENT
    {
      name: "Build & Release",
      desc: "Android APK/AAB builds, signing configs",
    },
    {
      name: "Play Store Deployment",
      desc: "Play Console setup, store listing, policies",
    },
    {
      name: "iOS App Store Overview",
      desc: "iOS build & publishing process (overview)",
    },

    // 🧠 CAREER PREP
    {
      name: "Project Architecture",
      desc: "Clean architecture, scalable folder structure",
    },
    {
      name: "Interview Preparation",
      desc: "Flutter interview questions, Dart concepts",
    },
    {
      name: "Portfolio & Career",
      desc: "GitHub projects, published apps, freelancing",
    },
  ],

  // 🧪 PROJECTS
  projects: [
    "Todo App",
    "Authentication App",
    "REST API Based App",
    "Chat Application (Firebase)",
    "E-commerce Mobile App",
    "Location Based App",
    "Final Capstone Production App",
  ],

  // 🛠 TOOLS & TECH
  tools: [
    "VS Code / Android Studio",
    "Flutter SDK",
    "Dart",
    "Firebase",
    "Postman",
    "Git & GitHub",
  ],

  // 🎯 CAREER OUTCOMES
  career:
    "Flutter Developer, Mobile App Developer, Cross-Platform App Developer",

  

  tags: [
    "Flutter",
    "Dart",
    "Cross Platform",
    "Android",
    "iOS",
    "Mobile Development",
  ],
},

    {
  slug: "ui-ux-design",
  id: 5,
  icon: Palette,
  title: "UI / UX Design (User Interface & User Experience)",
  duration: "12 Months (Beginner to Advanced)",
  level: "Beginner → Advanced",

  overview:
    "Become a professional UI/UX Designer by mastering user-centered design, design thinking, wireframing, prototyping, usability testing, and modern design tools like Figma to create beautiful and meaningful digital experiences.",

  // 📚 SYLLABUS
  topics: [
    // 🔰 FUNDAMENTALS
    {
      name: "Introduction to UI & UX",
      desc: "Difference between UI & UX, design roles, product vs user mindset",
    },
    {
      name: "Design Thinking",
      desc: "Empathize, Define, Ideate, Prototype, Test methodology",
    },
    {
      name: "Human–Computer Interaction (HCI)",
      desc: "How users interact with digital products, usability principles",
    },

    // 🧍 USER RESEARCH
    {
      name: "User Research",
      desc: "Qualitative & quantitative research, interviews, surveys",
    },
    {
      name: "User Personas",
      desc: "Creating personas, empathy maps, user goals & pain points",
    },
    {
      name: "User Journey Mapping",
      desc: "Customer journey maps, experience flows",
    },

    // 🧱 INFORMATION ARCHITECTURE
    {
      name: "Information Architecture",
      desc: "Content organization, navigation systems, sitemaps",
    },
    {
      name: "User Flows",
      desc: "Task flows, screen flows, decision trees",
    },

    // 📝 WIREFRAMING
    {
      name: "Wireframing",
      desc: "Low-fidelity & high-fidelity wireframes",
    },
    {
      name: "Design Patterns",
      desc: "Common UI patterns for web & mobile apps",
    },

    // 🎨 UI DESIGN
    {
      name: "Visual Design Principles",
      desc: "Balance, contrast, hierarchy, consistency",
    },
    {
      name: "Color Theory",
      desc: "Color psychology, accessibility, contrast ratios",
    },
    {
      name: "Typography",
      desc: "Font pairing, readability, hierarchy",
    },
    {
      name: "Iconography & Imagery",
      desc: "Icons, illustrations, image usage best practices",
    },

    // 🧰 TOOLS
    {
      name: "Figma",
      desc: "Frames, components, variants, auto-layout",
    },
    {
      name: "Prototyping",
      desc: "Interactive prototypes, micro-interactions",
    },
    {
      name: "Design Systems",
      desc: "Reusable components, tokens, style guides",
    },

    // ♿ ACCESSIBILITY
    {
      name: "Accessibility (WCAG)",
      desc: "Color contrast, keyboard navigation, screen readers",
    },
    {
      name: "Inclusive Design",
      desc: "Designing for all users & abilities",
    },

    // 🧪 TESTING
    {
      name: "Usability Testing",
      desc: "User testing, A/B testing, usability metrics",
    },
    {
      name: "Design Validation",
      desc: "Feedback loops, design iteration",
    },

    // 🔄 HANDOFF & COLLABORATION
    {
      name: "Developer Handoff",
      desc: "Design specs, assets, collaboration with developers",
    },
    {
      name: "Collaboration Tools",
      desc: "Working in teams, design reviews, feedback handling",
    },

    // 🧠 CAREER PREP
    {
      name: "Portfolio Building",
      desc: "Case studies, storytelling, personal branding",
    },
    {
      name: "Interview Preparation",
      desc: "UI/UX interview questions, design challenges",
    },
    {
      name: "Freelancing & Career",
      desc: "Client handling, pricing, career paths in design",
    },
  ],

  // 🧪 PROJECTS
  projects: [
    "UX Case Study (Problem → Solution)",
    "Mobile App UI Design",
    "Website Redesign Project",
    "Dashboard UI Design",
    "Design System Creation",
    "Final Capstone UI/UX Project",
  ],

  // 🛠 TOOLS & SOFTWARE
  tools: [
    "Figma",
    "Adobe XD",
    "Miro / Whimsical",
    "Notion",
    "Zeplin / Figma Dev Mode",
  ],

  // 🎯 CAREER OUTCOMES
  career:
    "UI Designer, UX Designer, Product Designer, Interaction Designer",

  
  tags: [
    "UI Design",
    "UX Design",
    "Figma",
    "Design Thinking",
    "User Research",
    "Prototyping",
  ],
},
{
  slug: "digital-marketing",
  id: 6,
  icon: TrendingUp,
  title: "Digital Marketing & Growth Strategy",
  duration: "12 Months (Beginner to Advanced)",
  level: "Beginner → Advanced",

  overview:
    "Become a result-driven Digital Marketing professional by mastering SEO, Social Media Marketing, Paid Ads, Content Strategy, Analytics, and conversion optimization to grow brands, businesses, and online presence.",

  // 📚 SYLLABUS
  topics: [
    // 🔰 FUNDAMENTALS
    {
      name: "Introduction to Digital Marketing",
      desc: "What is digital marketing, channels, funnels, online consumer behavior",
    },
    {
      name: "Marketing Fundamentals",
      desc: "Branding, positioning, value proposition, marketing psychology",
    },

    // 🔍 SEO (SEARCH ENGINE OPTIMIZATION)
    {
      name: "SEO Basics",
      desc: "How search engines work, on-page vs off-page SEO",
    },
    {
      name: "On-Page SEO",
      desc: "Keyword research, meta tags, content optimization, internal linking",
    },
    {
      name: "Technical SEO",
      desc: "Site speed, mobile optimization, indexing, schema, Core Web Vitals",
    },
    {
      name: "Off-Page SEO",
      desc: "Backlinks, link building strategies, outreach",
    },
    {
      name: "Local SEO",
      desc: "Google My Business, local rankings, reviews",
    },

    // ✍️ CONTENT MARKETING
    {
      name: "Content Strategy",
      desc: "Content planning, calendars, funnels, storytelling",
    },
    {
      name: "Blogging & Copywriting",
      desc: "SEO content, persuasive copywriting, headline writing",
    },
    {
      name: "Video Marketing",
      desc: "YouTube strategy, reels, shorts, video SEO",
    },

    // 📱 SOCIAL MEDIA MARKETING (SMM)
    {
      name: "Social Media Fundamentals",
      desc: "Platform overview: Instagram, Facebook, LinkedIn, Twitter",
    },
    {
      name: "Instagram Marketing",
      desc: "Reels strategy, growth hacks, analytics",
    },
    {
      name: "Facebook & LinkedIn Marketing",
      desc: "Business pages, B2B strategy, lead generation",
    },
    {
      name: "Community Building",
      desc: "Engagement, brand voice, audience retention",
    },

    // 💰 PAID ADVERTISING (PPC)
    {
      name: "Google Ads",
      desc: "Search ads, display ads, keyword bidding, quality score",
    },
    {
      name: "Facebook & Instagram Ads",
      desc: "Campaign setup, audience targeting, creatives",
    },
    {
      name: "Ad Optimization",
      desc: "A/B testing, scaling campaigns, reducing ad spend",
    },

    // 📧 EMAIL & AUTOMATION
    
    {
      name: "Marketing Automation",
      desc: "Funnels, drip campaigns, CRM concepts",
    },

    // 🤝 AFFILIATE & INFLUENCER MARKETING
    {
      name: "Affiliate Marketing",
      desc: "Affiliate models, tracking, commission structures",
    },
    {
      name: "Influencer Marketing",
      desc: "Brand collaborations, influencer outreach",
    },

    // 📊 ANALYTICS & DATA
    {
      name: "Google Analytics",
      desc: "Traffic analysis, user behavior, conversions",
    },
    {
      name: "Google Search Console",
      desc: "Performance, indexing, SEO insights",
    },
    {
      name: "Conversion Rate Optimization (CRO)",
      desc: "Landing pages, funnels, heatmaps",
    },

    // 🛡️ ONLINE REPUTATION
    {
      name: "Online Reputation Management (ORM)",
      desc: "Reviews, brand monitoring, crisis handling",
    },

    // 🧠 ADVANCED STRATEGY
    {
      name: "Growth Hacking",
      desc: "Rapid experimentation, scaling techniques",
    },
    {
      name: "Digital Marketing Strategy",
      desc: "End-to-end campaign planning & execution",
    },

    // 🧠 CAREER PREP
    {
      name: "Freelancing & Agency Model",
      desc: "Client acquisition, proposals, pricing",
    },
    {
      name: "Interview & Career Preparation",
      desc: "Job roles, marketing case studies, portfolio",
    },
  ],

  // 🧪 PROJECTS
  projects: [
    "SEO Audit & Optimization Project",
    "Social Media Growth Strategy",
    "Paid Ads Campaign (Live Simulation)",
    "Content Marketing Plan",
    "Lead Generation Funnel",
    "Final Digital Marketing Capstone Project",
  ],

  // 🛠 TOOLS & PLATFORMS
  tools: [
    "Google Analytics",
    "Google Search Console",
    "Google Ads",
    "Facebook Ads Manager",
    "Canva",
    "SEMrush / Ahrefs",
    "Mailchimp / Brevo",
  ],

  // 🎯 CAREER OUTCOMES
  career:
    "Digital Marketer, SEO Specialist, PPC Expert, Social Media Manager, Growth Marketer",

  

  tags: [
    "Digital Marketing",
    "SEO",
    "Social Media",
    "Google Ads",
    "Content Marketing",
    "Analytics",
    "Growth Marketing",
  ],
}

  ];

  // ✅ slug se course pick karo
  const course = courses.find(
    (c) => c.slug.toLowerCase() === slug.toLowerCase()
  );

  // ❌ agar slug galat ho
  if (!course) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-3xl font-bold">❌ Course Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-8 lg:px-16 py-24 w-full">

      <header
        className={`mb-10 transition-all duration-700 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
        }`}
      >
        <h1 className="text-5xl font-bold mb-3 flex items-center gap-3">
  <course.icon className="w-10 h-10 text-white" />
  {course.title}
</h1>

        <p className="text-gray-400">⏱ {course.duration}</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-3">📚 What You’ll Learn</h2>
        <ul className="space-y-2">
          {course.topics.map((topic, i) => (
            <li key={i} className="text-gray-300">
              ✅{" "}
              {typeof topic === "string" ? (
                topic
              ) : (
                <>
                  <strong className="text-white">{topic.name}:</strong>{" "}
                  {topic.desc}
                </>
              )}
            </li>
          ))}
        </ul>
      </section>

      <div className="flex gap-2 flex-wrap mb-6">
        {course.tags.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-white/10 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="bg-white/5 p-5 rounded-xl">
        <h3 className="font-bold mb-2">💼 Career Scope</h3>
        <p className="text-gray-300">{course.career}</p>
      </div>
    </div>
  );
}
