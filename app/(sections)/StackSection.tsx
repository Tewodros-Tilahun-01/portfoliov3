import { Badge } from "@/components/ui/badge";
import {
  FaReact,
  FaServer,
  FaGitAlt,
  FaBox,
  FaBookOpen,
  FaUsers,
  FaStar,
  FaAngular,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiExpo,
  SiTailwindcss,
  SiReactquery,
  SiRedux,
} from "react-icons/si";
import type { ReactNode } from "react";
import { Code } from "lucide-react";
import {
  FadeInView,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import AnimatedCircularStat from "../../components/animations/AnimatedCircularStat";
import AnimatedSkillBar from "../../components/animations/AnimatedSkillBar";
import AnimatedLanguageRow from "../../components/animations/AnimatedLanguageRow";

type Skill = {
  name: string;
  percent: number;
  icon: ReactNode;
  color?: string;
};

type Language = {
  name: string;
  percent: number;
  flag: string;
};

// Tool stack (square items with colorful rings)
const toolStack: Skill[] = [
  {
    name: "React",
    percent: 90,
    icon: <FaReact size={32} />,
    color: "#61dafb",
  },
  {
    name: "Next.js",
    percent: 85,
    icon: <SiNextdotjs size={32} />,
    color: "#ffffff",
  },
  {
    name: "Angular.js",
    percent: 80,
    icon: <FaAngular size={32} color="#e64e1c" />,
    color: "#ffffff",
  },
  {
    name: "Tailwind",
    percent: 88,
    icon: <SiTailwindcss size={32} />,
    color: "#38bdf8",
  },
  {
    name: "React Query",
    percent: 82,
    icon: <SiReactquery size={32} />,
    color: "#FF4154",
  },
  {
    name: "Redux Toolkit",
    percent: 85,
    icon: <SiRedux size={32} />,
    color: "#764abc",
  },
  {
    name: "Node.js",
    percent: 82,
    icon: <FaServer size={32} />,
    color: "#6cc24a",
  },
  {
    name: "Express",
    percent: 75,
    icon: <SiExpress size={32} />,
    color: "#ff9900",
  },
  {
    name: "PostgreSQL",
    percent: 80,
    icon: <SiPostgresql size={32} />,
    color: "#336791",
  },
  {
    name: "Prisma",
    percent: 74,
    icon: <FaBox size={32} />,
    color: "#2d3748",
  },
  {
    name: "MongoDB",
    percent: 78,
    icon: <SiMongodb size={32} />,
    color: "#10aa50",
  },
  {
    name: "Docker",
    percent: 76,
    icon: <SiDocker size={32} />,
    color: "#2496ed",
  },
  {
    name: "Git",
    percent: 84,
    icon: <FaGitAlt size={32} />,
    color: "#f05032",
  },
  {
    name: "React Native",
    percent: 72,
    icon: <FaReact size={32} />,
    color: "#0078d4",
  },
  {
    name: "Expo",
    percent: 78,
    icon: <SiExpo size={32} />,
    color: "#ffffff",
  },
];

const generalSkills: Skill[] = [
  { name: "Analytical", percent: 90, icon: <FaBookOpen size={16} /> },
  { name: "Teamwork", percent: 72, icon: <FaUsers size={16} /> },
  { name: "Learning", percent: 82, icon: <FaBookOpen size={16} /> },
  { name: "Leadership", percent: 70, icon: <FaStar size={16} /> },
];

const languages: Language[] = [
  { name: "Amharic", percent: 100, flag: "🇪🇹" },
  { name: "English", percent: 80, flag: "🇬🇧" },
];

function SectionBadge({ children }: { children: string }) {
  return (
    <div className="mb-1 flex items-center gap-3">
      <Badge>
        <span>
          <Code size={22} />
        </span>
        <span className="text-xl uppercase">{children}</span>
      </Badge>
    </div>
  );
}

export default function StackSection() {
  return (
    <section
      className="px-4 sm:px-4 md:px-15 py-2 sm:py-8 md:py-8 pt-4"
      id="stacks"
    >
      <div className="mt-10">
        <SectionBadge>tech Stack</SectionBadge>
        <br />
        <StaggerContainer
          className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
          staggerDelay={0.05}
        >
          {toolStack.map((s) => (
            <StaggerItem key={s.name}>
              <AnimatedCircularStat {...s} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <div className="mt-10">
        <Badge>General Skills</Badge>
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6"
          staggerDelay={0.1}
        >
          {generalSkills.map((s) => (
            <StaggerItem key={s.name}>
              <AnimatedSkillBar {...s} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <div className="mt-10">
        <Badge>Languages</Badge>
        <StaggerContainer
          className="bg-transparent border-none"
          staggerDelay={0.1}
        >
          {languages.map((l) => (
            <StaggerItem key={l.name}>
              <AnimatedLanguageRow {...l} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
