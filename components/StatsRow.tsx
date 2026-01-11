import StaggerContainer from "./animations/StaggerContainer";
import StaggerItem from "./animations/StaggerItem";

interface Stat {
  label: string;
  value: string;
  sublabel?: string;
}

const defaultStats: Stat[] = [
  { value: "5", label: "Completed", sublabel: " Projects" },
  { value: "2", label: "Years of", sublabel: " Experience" },
  {
    value: "4",
    label: "Clients",
    sublabel: "Worldwide",
  },
];

function StatsRow({ stats = defaultStats }: { stats?: Stat[] }) {
  return (
    <StaggerContainer
      className="grid grid-cols-3 md:gap-6 gap-2 mt-6 lg:mt-0"
      staggerDelay={0.2}
    >
      {stats.map((s) => (
        <StaggerItem
          key={s.label}
          className="rounded-2xl md:p-3 text-left flex items-center gap-3"
        >
          <div className="lg:text-[4rem] text-lg font-medium font-heading text-primary">
            {s.value}
          </div>
          <div className="md:text-base text-xs ">
            <div className="text-secondary">{s.label}</div>
            {s.sublabel && (
              <div className="mr-2 text-secondary">{s.sublabel}</div>
            )}
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}

export default StatsRow;
