"use client";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Github, ExternalLink, FolderGit2 } from "lucide-react";
import Image from "next/image";

type Project = {
  id: string;
  title: string;
  image?: string; // optional image path
  tags: string[]; // technologies
  primaryTag: string[]; // for small chip on card
  links?: {
    github?: string;
    live?: string;
  };
};

const PROJECTS: Project[] = [
  {
    id: "Matrix",
    title: "Matrix",
    image: "/assets/pr1.png",
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
    image: "/assets/pr2.png",
    tags: ["frontend"],
    primaryTag: ["Angular", "laravel"],
    links: {
      github: "",
      live: "https://melonimiraclewomen.com/",
    },
  },

  {
    id: "class-scheduling-software",
    title: "Class Scheduling software",
    image: "/assets/Screenshot from 2025-09-17 11-18-15.png",
    tags: ["fullstack"],
    primaryTag: ["react", "express", "mongodb"],
    links: {
      github:
        "https://github.com/Tewodros-Tilahun-01/class-scheduling-management-system",
      live: "https://github.com/Tewodros-Tilahun-01/class-scheduling-management-system",
    },
  },

  {
    id: "cinaima-films",
    title: "Cinaima Films",
    image: "/assets/project1-D0-fzN-1.png",
    tags: ["frontend"],
    primaryTag: ["react"],
    links: {
      github: "https://github.com/Tewodros-Tilahun-01/cinema-movie",
      live: "https://tcinema.netlify.app/",
    },
  },
  // {
  //   id: "appointment-scheduling-software",
  //   title: "Appointment Scheduling Software",
  //   image: "/assets/project2-YbFCcYoK.png",
  //   tags: ["fullstack"],
  //   primaryTag: ["react", "express", "mongodb"],
  //   links: {
  //     live: "https://ketero-v1.vercel.app",
  //     github: "https://github.com/Tewodros-Tilahun-01/ketero",
  //   },
  // },
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
}: {
  project: Project;
  aspectRatio?: string;
}) {
  // Default height for first column
  const baseHeight = 170;
  const imageHeight = aspectRatio === "second" ? baseHeight * 1.3 : baseHeight;
  return (
    <div>
      <Card className="p-0 hover:shadow-lg transition-all duration-300  overflow-hidden group">
        <div className="relative" style={{ height: imageHeight + "px" }}>
          {project.image ? (
            <>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-t-xl group-hover:scale-105 transition-all duration-300 "
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </>
          ) : (
            <ProjectImage title={project.title} />
          )}
        </div>

        <div className="px-2 py-4">
          <div className=" flex flex-wrap gap-2 mb-1">
            {project.primaryTag.map((tag) => (
              <Badge
                key={tag}
                className=" text-secondary  px-2 py-1 text-[10px]"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <div className="text-lg px-3 font-semibold text-primary leading-snug">
            {project.title}
          </div>
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
      </Card>
    </div>
  );
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return PROJECTS;
    return PROJECTS.filter((p) => p.tags.includes(filter));
  }, [filter]);

  return (
    <section className="px-6 sm:px-12 md:px-16  lg:pt-14 py-14" id="projects">
      <div className="mb-4">
        <Badge>
          <span>
            <FolderGit2 size={22} />
          </span>
          <span>Projects</span>
        </Badge>
      </div>
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-primary uppercase">
        Explore my projects
      </h2>

      <div className="mt-6 flex flex-wrap gap-3">
        {FILTERS.map((f) => (
          <FilterChip
            key={f}
            label={f === "all" ? "All" : f}
            active={filter === f}
            onClick={() => setFilter(f)}
          />
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2  gap-x-10 gap-y-8">
        {filtered.map((p, i) => (
          <div key={p.id}>
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
