interface Stat {
  label: string;
  value: string;
  sublabel?: string;
}

const defaultStats: Stat[] = [
  { value: "5", label: "Completed", sublabel: " Projects" },
  { value: "2", label: "Years", sublabel: "of Experience" },
  {
    value: "4",
    label: "Clients",
    sublabel: "Worldwide",
  },
];

function StatsRow({ stats = defaultStats }: { stats?: Stat[] }) {
  return (
    <div className="grid grid-cols-3 gap-6 ">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-2xl p-6 text-left flex items-center gap-3"
        >
          <div className="text-[3rem] font-extrabold">{s.value}</div>
          <div className="md:text-base text-sm ">
            <div className="text-secondary">{s.label}</div>
            {s.sublabel && (
              <div className="mr-2 text-secondary">{s.sublabel}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
export default StatsRow;
