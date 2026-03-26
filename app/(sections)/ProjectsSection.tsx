"use client";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Github,
  ExternalLink,
  FolderGit2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import {
  FadeInView,
  StaggerContainer,
  StaggerItem,
  TextReveal,
} from "@/components/animations";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

type Project = {
  id: string;
  title: string;
  description?: string;
  fullDescription?: string;
  image?: string;
  images?: string[]; // Multiple images for gallery
  tags: string[];
  primaryTag: string[];
  links?: {
    github?: string;
    live?: string;
  };
};

const PROJECTS: Project[] = [
  {
    id: "filtech",
    title: "filtech.et",
    description: "Modern tech solutions platform",
    fullDescription:
      "A comprehensive technology solutions platform built with Angular, featuring modern UI/UX design and responsive layouts. This project showcases enterprise-level frontend development with advanced state management and component architecture.",
    image: "/assets/pr3.png",
    images: ["/assets/pr3.png", "/assets/pr3.png"], // Add more images here
    tags: ["frontend"],
    primaryTag: ["Angular"],
    links: {
      live: "https://filtech.et",
      github: "",
    },
  },
  {
    id: "Matrix",
    title: "Matrix",
    description: "Enterprise management system",
    fullDescription:
      "A full-featured enterprise management system built with Angular and Laravel. Includes user management, analytics dashboard, and real-time data processing. Features include role-based access control, data visualization, and comprehensive reporting tools.",
    image: "/assets/pr1.png",
    images: ["/assets/pr1.png"], // Add more images here
    tags: ["frontend"],
    primaryTag: ["Angular", "laravel"],
    links: {
      github: "",
      live: "https://matrix.onevas.et/",
    },
  },
  {
    id: "Women's Empowerment",
    title: "Women's Empowerment",
    description: "Community empowerment platform",
    fullDescription:
      "A platform dedicated to women's empowerment initiatives, built with Angular and Laravel. Features include community forums, resource sharing, event management, and success story showcases. The platform aims to connect and empower women through technology.",
    image: "/assets/pr2.png",
    images: ["/assets/pr2.png"], // Add more images here
    tags: ["frontend"],
    primaryTag: ["Angular", "laravel"],
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
    images: ["/assets/Screenshot from 2025-09-17 11-18-15.png"], // Add more images here
    tags: ["fullstack"],
    primaryTag: ["react", "express", "mongodb"],
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
    images: ["/assets/project1-D0-fzN-1.png"], // Add more images here
    tags: ["frontend"],
    primaryTag: ["react"],
    links: {
      github: "https://github.com/Tewodros-Tilahun-01/cinema-movie",
      live: "https://tcinema.netlify.app/",
    },
  },
];

const FILTERS = ["all", "fullstack", "frontend"] as const;

type Filter = (typeof FILTERS)[number];

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={[
        "px-4 h-9 rounded-full text-sm",
        active
          ? "bg-accent text-accent-secondary"
          : "bg-tertiary text-secondary",
      ].join(" ")}
    >
      {label.toUpperCase()}
    </button>
  );
}

function ProjectImage({ title }: { title: string }) {
  // Placeholder gradient box when no real image is provided
  return (
    <div
      className="h-56 w-full rounded-xl bg-gradient-to-br from-neutral-600/30 to-neutral-800/30"
      aria-label={title}
    />
  );
}

function ActionLink({
  href,
  label,
  icon,
}: {
  href?: string;
  label: string;
  icon: React.ReactNode;
}) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 px-3 h-9 rounded-full bg-tertiary text-primary hover:bg-accent hover:text-accent-secondary transition-colors ring-1 ring-primary/30"
    >
      {icon}
      <span className="text-sm">{label}</span>
    </a>
  );
}

function ProjectCard({
  project,
  aspectRatio,
  onClick,
}: {
  project: Project;
  aspectRatio?: string;
  onClick: () => void;
}) {
  const baseHeight = 170;
  const imageHeight = aspectRatio === "second" ? baseHeight * 1.3 : baseHeight;
  return (
    <FadeInView>
      <Card
        className="p-0 hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
        onClick={onClick}
      >
        <div className="relative" style={{ height: imageHeight + "px" }}>
          {project.image ? (
            <>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-t-xl group-hover:scale-105 transition-all duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </>
          ) : (
            <ProjectImage title={project.title} />
          )}
        </div>

        <div className="relative px-2 py-4 group overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-tl from-cyan-300/30 to-transparent
               opacity-0 group-hover:opacity-100
               transition-opacity duration-300"
          />

          <div className="relative z-10">
            <div className="flex flex-wrap gap-2 mb-1">
              {project.primaryTag.map((tag) => (
                <Badge
                  key={tag}
                  className="text-secondary px-2 py-1 text-[10px]"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="text-lg px-3 font-semibold text-primary leading-snug">
              {project.title}
            </div>

            {project.description && (
              <p className="text-sm text-secondary px-3 mt-2 line-clamp-2">
                {project.description}
              </p>
            )}

            <div className="mt-3 px-3 flex items-center gap-3">
              <ActionLink
                href={project.links?.github}
                label="GitHub"
                icon={<Github className="size-4" />}
              />
              <ActionLink
                href={project.links?.live}
                label="Live"
                icon={<ExternalLink className="size-4" />}
              />
            </div>
          </div>
        </div>
      </Card>
    </FadeInView>
  );
}

function ProjectDetailModal({
  project,
  open,
  onClose,
}: {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const images =
    project.images || ([project.image].filter(Boolean) as string[]);
  const hasMultipleImages = images.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogClose onClose={onClose} />
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
        </DialogHeader>

        <div className="px-6 pb-6">
          {/* Image Gallery */}
          <div className="relative mb-6 rounded-xl overflow-hidden bg-tertiary">
            <div className="relative aspect-video">
              {images.length > 0 && (
                <Image
                  src={images[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
              )}
            </div>

            {/* Navigation Arrows */}
            {hasMultipleImages && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="size-6 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="size-6 text-white" />
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? "bg-white w-8"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.primaryTag.map((tag) => (
              <Badge key={tag} className="text-secondary px-3 py-1">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-primary mb-2">
              About this project
            </h3>
            <p className="text-secondary leading-relaxed">
              {project.fullDescription ||
                project.description ||
                "No description available."}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-tertiary text-primary hover:bg-accent hover:text-accent-secondary transition-colors ring-1 ring-primary/30"
              >
                <Github className="size-5" />
                <span>View on GitHub</span>
              </a>
            )}
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-secondary hover:bg-accent/90 transition-colors"
              >
                <ExternalLink className="size-5" />
                <span>View Live Site</span>
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const filtered = useMemo(() => {
    if (filter === "all") return PROJECTS;
    return PROJECTS.filter((p) => p.tags.includes(filter));
  }, [filter]);

  return (
    <section className="px-6 sm:px-12 md:px-16  lg:pt-14 py-14" id="projects">
      <FadeInView delay={0.1}>
        <div className="mb-4">
          <Badge>
            <span>
              <FolderGit2 size={22} />
            </span>
            <span>Projects</span>
          </Badge>
        </div>
      </FadeInView>

      <TextReveal delay={0.3}>
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-primary uppercase">
          Explore my projects
        </h2>
      </TextReveal>

      <FadeInView delay={0.5} className="mt-6 flex flex-wrap gap-3">
        {FILTERS.map((f) => (
          <FilterChip
            key={f}
            label={f === "all" ? "All" : f}
            active={filter === f}
            onClick={() => setFilter(f)}
          />
        ))}
      </FadeInView>

      <StaggerContainer
        className="mt-8 grid grid-cols-1 lg:grid-cols-2  gap-x-10 gap-y-8"
        staggerDelay={0.15}
      >
        {filtered.map((p) => (
          <StaggerItem key={p.id}>
            <ProjectCard project={p} onClick={() => handleProjectClick(p)} />
          </StaggerItem>
        ))}
      </StaggerContainer>

      <ProjectDetailModal
        project={selectedProject}
        open={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
