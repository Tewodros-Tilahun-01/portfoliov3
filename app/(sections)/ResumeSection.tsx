import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  BookOpenText,
  Briefcase,
  Building2,
  Landmark,
  SchoolIcon,
} from "lucide-react";
import {
  FadeInView,
  StaggerContainer,
  StaggerItem,
  TextReveal,
} from "@/components/animations";

type TimelineItem = {
  title: string;
  company: string;
  location: string;
  range: string;
  summary: string;
};

const experience: TimelineItem[] = [
  {
    title: "front end developer",
    company: "ALET Technologies",
    location: "addis abeba",
    range: "10/2025 - 12/2025",
    summary:
      "Delivered Angular projects, building modular, scalable front-end features and collaborating closely with backend engineers",
  },
  {
    title: "full stack developer",
    company: "University of Gondar’s ICT Directorate",
    location: "Gondar",
    range: "07/2024 – 10/2024",
    summary:
      "Built user interfaces for seamless appointment booking, focusing on accessibility and user experience with scalable, responsive design principles",
  },
];

type SimpleCard = {
  range: string;
  title: string;
  subtitle: string;
  body: string;
  cta?: string;
};

const courses: SimpleCard[] = [
  {
    range: "2025 – present",
    title: "A2SV",
    subtitle: "remote",
    body: "I am currently training with A2SV (Africa to Silicon Valley), a program that up skills high- potential African students, connects them with top Silicon Valley companies,",
    cta: "",
  },
  {
    range: "2023 – 2024",
    title: "The Odin Project",
    subtitle: "remote",
    body: "The Odin Project is a comprehensive, self-paced online program designed to teach full-stack web development from scratch",
    cta: "",
  },
];

const education: SimpleCard[] = [
  {
    range: "2022 - 2025",
    title: "BA in Information Technologies",
    subtitle: "bahir dar - Ethiopia",
    body: "developed strong skills in programming, system design, and problem-solving. more specifically in web and Mobile app development to create innovative and efficient solutions.",
    cta: "",
  },
  {
    range: "2020 – 2022",
    title: "Dsm",
    subtitle: "Gondar - Ethiopia",
    body: "learn communication, teamwork time management and foundational knowledge in subjects like math, writing and technology.",
    cta: "",
  },
];

function TimelineColumn({
  items,
  align,
}: {
  items: TimelineItem[];
  align: "left" | "right";
}) {
  return (
    <div className="relative">
      <div className="hidden md:block absolute left-0 right-0 top-7 h-0.5 bg-border-custom" />
      <StaggerContainer
        className="grid gap-10 md:grid-cols-2"
        staggerDelay={0.3}
      >
        {items.map((it, idx) => (
          <StaggerItem
            key={idx}
            className={align === "left" ? "order-1" : "order-2 md:col-start-2"}
          >
            <div className="rounded-lg text-tertiary mb-2  px-2 py-1 border border-gray-600 max-w-min text-nowrap text-xs ">
              {it.range}
            </div>
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-semibold text-primary capitalize">
                {it.title}
              </h3>
            </div>
            <div className="mt-2 text-xs uppercase tracking-wide text-tertiary">
              {it.location.split(",")[0]} · {it.company.toUpperCase()}
            </div>
            <p className="mt-4 text-secondary leading-relaxed">{it.summary}</p>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}

function InfoCard({
  item,
  icon,
}: {
  item: SimpleCard;
  icon: "course" | "edu";
}) {
  return (
    <FadeInView>
      <Card className="p-6 relative">
        <span className="absolute -left-[23px] top-6 rounded-full bg-gray-600 w-2.5 h-2.5"></span>
        <div className="rounded-lg text-tertiary mb-2  px-2 py-1 border border-gray-500 max-w-min text-nowrap text-xs  ">
          {item.range}
        </div>
        <div className="mt-2 flex items-center justify-between">
          <h4 className="text-lg font-semibold text-primary capitalize">
            {item.title}
          </h4>
        </div>
        <div className="text-sm text-secondary mt-1">{item.subtitle}</div>
        <p className="mt-4 text-secondary leading-relaxed line-clamp-4">
          {item.body}
        </p>
      </Card>
    </FadeInView>
  );
}

export default function ResumeSection() {
  return (
    <section className="px-2 sm:px-12 md:px-10 py-4 pt-12" id="resume">
      <FadeInView delay={0.1}>
        <div className="md:mb-6">
          <Badge>
            <span>
              <Briefcase size={22} />
            </span>
            <span className="text-primary">Resume</span>
          </Badge>
        </div>
      </FadeInView>

      <TextReveal delay={0.2}>
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-primary">
          Work Experience & Education
        </h2>
      </TextReveal>

      <FadeInView delay={0.4} className="mt-10">
        <TimelineColumn items={experience} align="left" />
      </FadeInView>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <FadeInView delay={0.6} className="mt-12 grid grid-cols-1  gap-6">
          <div>
            <div className="mb-4">
              <Badge>
                <span>
                  <Building2 className="size-6" />
                </span>
                <span className="text-primary">Courses</span>
              </Badge>
            </div>
            <div className="flex">
              <div className="min-h-full w-0.5 mt-6  rounded-full bg-divider mr-4"></div>
              <StaggerContainer
                className="grid flex-1 gap-6"
                staggerDelay={0.2}
              >
                {courses.map((c, i) => (
                  <StaggerItem key={i}>
                    <InfoCard item={c} icon="course" />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </FadeInView>

        <FadeInView delay={0.8} className="mt-12 grid grid-cols-1  gap-6">
          <div>
            <div className="mb-4">
              <Badge>
                <span>
                  <Landmark className="size-6" />
                </span>
                <span>Education</span>
              </Badge>
            </div>
            <div className="flex lg:ml-5">
              <div className="min-h-full w-0.5 mt-6  rounded-full bg-divider mr-4"></div>
              <StaggerContainer
                className="grid flex-1 gap-6"
                staggerDelay={0.2}
              >
                {education.map((e, i) => (
                  <StaggerItem key={i}>
                    <InfoCard item={e} icon="edu" />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
