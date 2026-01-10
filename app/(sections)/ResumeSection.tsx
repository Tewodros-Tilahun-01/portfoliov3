import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Building2, Landmark } from "lucide-react";

type TimelineItem = {
  title: string;
  company: string;
  location: string;
  range: string;
  summary: string;
};

const experience: TimelineItem[] = [
  {
    title: "University of Gondar’s ICT Directorate",
    company: "UOG",
    location: "Gondar",
    range: "07/2024 – 10/2024",
    summary:
      "Built user interfaces for seamless appointment booking, focusing on accessibility and user experience",
  },
  {
    title: "Freelance",
    company: "",
    location: "remote",
    range: "2023 – 2024",
    summary:
      "translates designs into functional, responsive user interfaces using HTML, CSS, and JavaScript, often leveraging frameworks like React to build interactive web pages and applications ",
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

function Dot() {
  return <span className="block size-2 rounded-full bg-accent" />;
}

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
      <div className="grid gap-10 md:grid-cols-2">
        {items.map((it, idx) => (
          <div
            key={idx}
            className={align === "left" ? "order-1" : "order-2 md:col-start-2"}
          >
            <div className="text-sm text-accent mb-2">{it.range}</div>
            <div className="flex items-center gap-3">
              <Dot />
              <h3 className="text-xl font-semibold text-primary">{it.title}</h3>
            </div>
            <div className="mt-2 text-xs uppercase tracking-wide text-tertiary">
              {it.location.split(",")[0]} · {it.company.toUpperCase()}
            </div>
            <p className="mt-4 text-secondary leading-relaxed">{it.summary}</p>
          </div>
        ))}
      </div>
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
    <Card className="p-6 ">
      <div className="text-[11px] uppercase tracking-wider text-tertiary">
        {item.range}
      </div>
      <div className="mt-2 flex items-center justify-between">
        <h4 className="text-lg font-semibold text-primary">{item.title}</h4>
        <span className="opacity-70">
          {icon === "course" ? (
            <Building2 className="size-8" />
          ) : (
            <Landmark className="size-8" />
          )}
        </span>
      </div>
      <div className="text-sm text-secondary mt-1">{item.subtitle}</div>
      <p className="mt-4 text-secondary leading-relaxed">{item.body}</p>
    </Card>
  );
}

export default function ResumeSection() {
  return (
    <section className="px-6 sm:px-12 md:px-16 py-4" id="resume">
      <div className="md:mb-6">
        <Badge>
          <span>💼</span>
          <span>Resume</span>
        </Badge>
      </div>
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-primary">
        Work Experience & Education
      </h2>

      <div className="mt-10">
        <TimelineColumn items={experience} align="left" />
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <div className="mb-4">
            <Badge>
              <span>📚</span>
              <span>Courses</span>
            </Badge>
          </div>
          <div className="grid gap-6">
            {courses.map((c, i) => (
              <InfoCard key={i} item={c} icon="course" />
            ))}
          </div>
        </div>

        <div>
          <div className="mb-4">
            <Badge>
              <span>🏛️</span>
              <span>Education</span>
            </Badge>
          </div>
          <div className="grid gap-6">
            {education.map((e, i) => (
              <InfoCard key={i} item={e} icon="edu" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
