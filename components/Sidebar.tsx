import ThemeToggle from "@/components/ThemeToggle";
import { Info, Briefcase, Code, FolderGit2, Mail } from "lucide-react";

function Sidebar() {
  const items = [
    { id: "#about", label: "About", icon: <Info size={24} /> },
    { id: "#resume", label: "Resume", icon: <Briefcase size={24} /> },
    { id: "#stacks", label: "Stacks", icon: <Code size={24} /> },
    { id: "#projects", label: "Projects", icon: <FolderGit2 size={24} /> },
    { id: "#contact", label: "Contact", icon: <Mail size={24} /> },
  ];

  return (
    <aside className="hidden max-w-18 md:flex gap-y-4 flex-col justify-center max-h-min items-center pt-4 sticky top-24">
      <ThemeToggle />

      <div className="flex flex-col items-center gap-4 rounded-full bg-secondary p-3 shadow-lg ring-1 ring-primary max-h-min">
        {items.map((item) => (
          <div key={item.id} className="relative group ">
            <a
              aria-label={item.label}
              href={item.id}
              className="size-12 grid place-items-center rounded-full  text-secondary  transition-colors"
            >
              <span className="group-hover:text-green-400">{item.icon}</span>
            </a>
            <span className=" z-10 absolute left-full ml-2 top-1/2 -translate-y-1/2  border border-custom group-hover:bg-green-300 text-black text-sm px-2 py-1 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none rounded-2xl">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
