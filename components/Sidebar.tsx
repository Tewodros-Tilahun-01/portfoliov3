import ThemeToggle from "@/components/ThemeToggle";
import { Info, Briefcase, Code, FolderGit2, Mail } from "lucide-react";
import FadeInView from "./animations/FadeInView";
import StaggerContainer from "./animations/StaggerContainer";
import StaggerItem from "./animations/StaggerItem";

function Sidebar() {
  const items = [
    { id: "#about", label: "About", icon: <Info size={24} /> },
    { id: "#resume", label: "Resume", icon: <Briefcase size={24} /> },
    { id: "#stacks", label: "Stacks", icon: <Code size={24} /> },
    { id: "#projects", label: "Projects", icon: <FolderGit2 size={24} /> },
    { id: "#contact", label: "Contact", icon: <Mail size={24} /> },
  ];

  return (
    <aside className="hidden max-w-10 mx-4 md:flex gap-y-4 flex-col justify-center max-h-min items-center pt-4 sticky top-24">
      <FadeInView delay={0.1}>
        <ThemeToggle />
      </FadeInView>

      <StaggerContainer
        className="flex flex-col items-center gap-4 py-5 rounded-full bg-secondary p-2 shadow-lg ring-1 ring-primary max-h-min"
        staggerDelay={0.2}
      >
        {items.map((item) => (
          <StaggerItem key={item.id} className="relative group">
            <a
              aria-label={item.label}
              href={item.id}
              className="size-12 grid place-items-center rounded-full  text-secondary bg-[#ffffff08]  transition-colors"
            >
              <span className="group-hover:text-green-400">{item.icon}</span>
            </a>
            <span className="pointer-events-none bg-green-400 text-[#323232] font-medium  absolute left-full ml-1 top-1/2 -translate-y-1/2 rounded-2xl border border-custom  px-3 py-1 text-sm  opacity-0 translate-x-1 scale-95 whitespace-nowrap transition-all duration-500 ease-out group-hover:opacity-100    group-hover:translate-x-0    group-hover:scale-100">
              {item.label}
            </span>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </aside>
  );
}

export default Sidebar;
