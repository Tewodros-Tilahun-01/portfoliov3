export type Project = {
  id: string;
  title: string;
  description?: string;
  fullDescription?: string;
  image?: string;
  images?: string[];
  tags: string[];
  primaryTag: string[];
  features?: string[];
  role?: string;
  date?: string;
  links?: {
    github?: string;
    live?: string;
  };
};

export const PROJECTS: Project[] = [
  {
    id: "filtech",
    title: "filtech.et",
    description: "Modern tech solutions platform",
    fullDescription:
      "A comprehensive technology solutions platform built with Angular, featuring modern UI/UX design and responsive layouts. This project showcases enterprise-level frontend development with advanced state management and component architecture.",
    image: "/assets/pr3.png",
    images: ["/assets/pr3.png", "/assets/pr2.png"],
    tags: ["frontend"],
    primaryTag: ["Angular"],
    role: "Frontend Developer",
    date: "2024",
    features: [
      "Modern responsive design",
      "Advanced state management",
      "Component-based architecture",
      "Enterprise-level scalability",
    ],
    links: {
      live: "https://filtech.et",
      github: "",
    },
  },
  {
    id: "matrix",
    title: "Matrix",
    description: "Enterprise management system",
    fullDescription:
      "A full-featured enterprise management system built with Angular and Laravel. Includes user management, analytics dashboard, and real-time data processing. Features include role-based access control, data visualization, and comprehensive reporting tools.",
    image: "/assets/pr1.png",
    images: ["/assets/pr1.png"],
    tags: ["frontend"],
    primaryTag: ["Angular", "laravel"],
    role: "Full Stack Developer",
    date: "2024",
    features: [
      "User management system",
      "Analytics dashboard",
      "Real-time data processing",
      "Role-based access control",
      "Data visualization",
    ],
    links: {
      github: "",
      live: "https://matrix.onevas.et/",
    },
  },
  {
    id: "womens-empowerment",
    title: "Women's Empowerment",
    description: "Community empowerment platform",
    fullDescription:
      "A platform dedicated to women's empowerment initiatives, built with Angular and Laravel. Features include community forums, resource sharing, event management, and success story showcases. The platform aims to connect and empower women through technology.",
    image: "/assets/pr2.png",
    images: ["/assets/pr2.png"],
    tags: ["frontend"],
    primaryTag: ["Angular", "laravel"],
    role: "Full Stack Developer",
    date: "2024",
    features: [
      "Community forums",
      "Resource sharing",
      "Event management",
      "Success story showcases",
      "User engagement tools",
    ],
    links: {
      github: "",
      live: "https://melonimiraclewomen.com/",
    },
  },
  {
    id: "class-scheduling-software",
    title: "Class Scheduling Software",
    description: "Automated class scheduling system",
    fullDescription:
      "A comprehensive class scheduling management system built with React, Express, and MongoDB. Features include automated schedule generation, conflict detection, room allocation, and teacher assignment. The system optimizes class schedules based on multiple constraints and preferences.",
    image: "/assets/Screenshot from 2025-09-17 11-18-15.png",
    images: ["/assets/Screenshot from 2025-09-17 11-18-15.png"],
    tags: ["fullstack"],
    primaryTag: ["react", "express", "mongodb"],
    role: "Full Stack Developer",
    date: "2025",
    features: [
      "Automated schedule generation",
      "Conflict detection",
      "Room allocation system",
      "Teacher assignment",
      "Constraint optimization",
    ],
    links: {
      github:
        "https://github.com/Tewodros-Tilahun-01/class-scheduling-management-system",
      live: "https://github.com/Tewodros-Tilahun-01/class-scheduling-management-system",
    },
  },
  {
    id: "cinema-films",
    title: "Cinema Films",
    description: "Movie discovery and browsing app",
    fullDescription:
      "A modern movie discovery application built with React. Features include movie search, detailed information display, ratings, reviews, and personalized recommendations. Integrates with movie databases to provide up-to-date information about films, cast, and crew.",
    image: "/assets/project1-D0-fzN-1.png",
    images: ["/assets/project1-D0-fzN-1.png"],
    tags: ["frontend"],
    primaryTag: ["react"],
    role: "Frontend Developer",
    date: "2024",
    features: [
      "Movie search functionality",
      "Detailed information display",
      "Ratings and reviews",
      "Personalized recommendations",
      "Cast and crew information",
    ],
    links: {
      github: "https://github.com/Tewodros-Tilahun-01/cinema-movie",
      live: "https://tcinema.netlify.app/",
    },
  },
];

export function getProjectById(id: string): Project | undefined {
  return PROJECTS.find((project) => project.id === id);
}

export function getAllProjectIds(): string[] {
  return PROJECTS.map((project) => project.id);
}
