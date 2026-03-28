"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  Calendar,
  User,
} from "lucide-react";
import { getProjectById } from "@/lib/projects-data";
import {
  FadeInView,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();

  const projectId = params.id as string;
  const project = getProjectById(projectId);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return (
      <section className="min-h-[90vh] flex items-center justify-center bg-secondary bg-[linear-gradient(120deg,rgba(255,255,255,0.08),rgba(255,255,255,0))] lg:rounded-tr-4xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">
            Project Not Found
          </h1>
          <button
            onClick={() => router.push("/")}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-secondary hover:bg-accent/90 transition-colors"
          >
            <ArrowLeft className="size-4" />
            Back to Home
          </button>
        </div>
      </section>
    );
  }

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
    <section className="flex flex-col w-full md:col-start-2 lg:col-start-3">
      <div className="pb-8 bg-secondary bg-[linear-gradient(120deg,rgba(255,255,255,0.08),rgba(255,255,255,0))] lg:rounded-tr-4xl">
        <div className="px-6 sm:px-12 md:px-16 py-8 lg:py-14">
          {/* Back Button */}
          <FadeInView delay={0.1}>
            <button
              onClick={() => router.push("/#projects")}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-lg bg-tertiary text-primary hover:bg-accent hover:text-accent-secondary transition-colors"
            >
              <ArrowLeft className="size-4" />
              Back to Projects
            </button>
          </FadeInView>

          {/* Image Gallery */}
          <FadeInView delay={0.2}>
            <div className="p-0 mb-6 overflow-hidden rounded-md ">
              <div className={`relative aspect-video `}>
                {images.length > 0 && (
                  <Image
                    src={images[currentImageIndex]}
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-contain"
                    priority
                  />
                )}
              </div>

              {/* Navigation Controls - Below Image */}
              {hasMultipleImages && (
                <div className="flex items-center justify-between px-4 py-3 bg-tertiary/50">
                  {/* Image Indicators - Left/Center */}
                  <div className="flex gap-2 flex-1 justify-center">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`h-2 rounded-full transition-all ${
                          index === currentImageIndex
                            ? "bg-accent w-8"
                            : "bg-op  w-2"
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Navigation Buttons - Right */}
                  <div className="flex items-center gap-2">
                    <div className="px-3 py-1 rounded-lg bg-tertiary text-secondary text-sm font-medium">
                      {currentImageIndex + 1} / {images.length}
                    </div>
                    <div className="flex gap-1">
                      <button
                        onClick={prevImage}
                        className="p-2 rounded-lg bg-tertiary text-primary hover:bg-accent hover:text-accent-secondary transition-all"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="size-4" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="p-2 rounded-lg bg-tertiary text-primary hover:bg-accent hover:text-accent-secondary transition-all"
                        aria-label="Next image"
                      >
                        <ChevronRight className="size-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </FadeInView>

          {/* Project Title & Meta Info */}
          <div className="mb-8">
            <FadeInView delay={0.3}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-4">
                {project.title}
              </h1>
            </FadeInView>

            <FadeInView delay={0.3}>
              <div className="flex flex-wrap gap-4 text-secondary">
                {project.role && (
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-tertiary">
                    <User className="size-4" />
                    <span className="font-medium">{project.role}</span>
                  </div>
                )}
                {project.date && (
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-tertiary">
                    <Calendar className="size-4" />
                    <span className="font-medium">{project.date}</span>
                  </div>
                )}
              </div>
            </FadeInView>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Technologies */}
              <FadeInView delay={0.4}>
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    Technologies
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.primaryTag.map((tag) => (
                      <Badge
                        key={tag}
                        className="text-secondary px-4 py-2 text-sm font-medium"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </FadeInView>

              {/* Description */}
              <FadeInView delay={0.5}>
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    About this project
                  </h2>
                  <p className="text-secondary leading-relaxed text-lg">
                    {project.fullDescription || project.description}
                  </p>
                </div>
              </FadeInView>

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <FadeInView delay={0.6}>
                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-4">
                      Key Features
                    </h2>
                    <StaggerContainer className="space-y-3" staggerDelay={0.1}>
                      {project.features.map((feature, index) => (
                        <StaggerItem key={index}>
                          <div className="flex items-start gap-3 p-3 rounded-lg bg-tertiary/50 hover:bg-tertiary transition-colors">
                            <div className="mt-1.5 size-2 rounded-full bg-accent shrink-0" />
                            <p className="text-secondary text-base">
                              {feature}
                            </p>
                          </div>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </div>
                </FadeInView>
              )}
            </div>

            {/* Sidebar - Links */}
            <div className="lg:col-span-1">
              <FadeInView delay={0.7}>
                <div className="space-y-4">
                  {project.links?.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="group relative flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl bg-gradient-to-r from-accent to-accent/80 text-accent-secondary font-semibold text-lg overflow-hidden transition-all hover:shadow-lg hover:shadow-accent/20"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-white/20 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                      <ExternalLink className="size-5 relative z-10" />
                      <span className="relative z-10">View Live Site</span>
                    </a>
                  )}
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl border-2 border-primary/20 text-primary font-semibold text-lg hover:border-accent hover:bg-accent/10 transition-all"
                    >
                      <Github className="size-5" />
                      <span>View on GitHub</span>
                    </a>
                  )}
                </div>
              </FadeInView>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
