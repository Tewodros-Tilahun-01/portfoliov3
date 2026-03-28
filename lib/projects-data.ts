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
    images: [
      "/assets/f.png",
      "/assets/f16.png",
      "/assets/f10.png",
      "/assets/f12.png",
      "/assets/f15.png",
      "/assets/f21.png",
      "/assets/f18.png",
      "/assets/f20.png",
      "/assets/fgg2.png",
    ],
    tags: ["frontend"],
    primaryTag: ["Angular", "laravel"],
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
    title: "matrix.onevas.et",
    description: "Enterprise management system",
    fullDescription:
      "Matrix provides leading digital learning experiences, specializing in accessible language courses for mobile users. Master German, Spanish, French, English, and Arabic – directly through your telecom provider. Expand your horizons, unlock new opportunities, and connect with the world through our engaging lessons.",
    image: "/assets/pr1.png",
    images: [
      "/assets/m12.png",
      "/assets/m2.png",
      "/assets/m9.png",
      "/assets/m3.png",
      "/assets/m5.png",
      "/assets/m7.png",
      "/assets/m6.png",
      "/assets/mgg.png",
    ],
    tags: ["frontend"],
    primaryTag: ["Angular", "laravel"],
    role: "Frontend Developer",
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
    images: [
      "/assets/w13.png",
      "/assets/w2.png",
      "/assets/w1.png",
      "/assets/w3.png",
      "/assets/w5.png",
      "/assets/w8.png",
      "/assets/w9.png",
      "/assets/w12.png",
      "/assets/w14.png",
      "/assets/w15.png",
      "/assets/wgg.png",
    ],
    tags: ["frontend"],
    primaryTag: ["Angular", "laravel"],
    role: "Frontend Developer",
    date: "2024",
    features: [
      "Community forums",
      "Resource sharing",
      "Event management",
      "Connect with top employers seeking talented women professionals",
      "partner institutions offering discounts and scholarships",
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
    image: "/assets/s1.png",
    images: [
      "/assets/s1.png",
      "/assets/s2.png",
      "/assets/s3.png",
      "/assets/s4.png",
      "/assets/s5.png",
      "/assets/s6.png",
      "/assets/s7.png",
      "/assets/s8.png",
    ],
    tags: ["fullstack"],
    primaryTag: ["react", "express", "mongodb"],
    role: "Full Stack Developer",
    date: "2025",
    features: [
      "Automated schedule generation",
      "Conflict detection",
      "Room allocation system",
      "Teacher assignment",
      "Free Room showing",
    ],
    links: {
      github:
        "https://github.com/Tewodros-Tilahun-01/class-scheduling-management-system",
      live: "",
    },
  },
  {
    id: "cinema-films",
    title: "Cinema Films",
    description: "Movie discovery and browsing app",
    fullDescription:
      "A modern movie discovery application built with React. Features include movie search, detailed information display, ratings, reviews, and personalized recommendations. Integrates with movie databases to provide up-to-date information about films, cast, and crew.",
    image: "/assets/project1-D0-fzN-1.png",
    images: [
      "/assets/project1-D0-fzN-1.png",
      "/assets/mv1.png",
      "/assets/mv2.png",
      "/assets/mv3.png",
    ],
    tags: ["frontend"],
    primaryTag: ["react"],
    role: "Frontend Developer",
    date: "2024",
    features: [
      "Movie search functionality",
      "Detailed information display",
      "Ratings and reviews",
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
