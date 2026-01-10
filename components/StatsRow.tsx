interface Stat {
  label: string;
  value: string;
  sublabel?: string;
}

const defaultStats: Stat[] = [
  { value: "5", label: "Completed", sublabel: "Projects" },
  { value: "3", label: "Years", sublabel: "of Experience" },
];

function StatsRow({ stats = defaultStats }: { stats?: Stat[] }) {
  return (
    <div className="grid grid-cols-3 gap-6 bg-secondary">
      {stats.map((s) => (
        <div key={s.label} className="rounded-2xl p-6 text-center">
          <div className="text-4xl font-extrabold">{s.value}</div>
          <div className="mt-2 text-sm text-secondary">{s.label}</div>
          {s.sublabel && (
            <div className="text-xs text-tertiary">{s.sublabel}</div>
          )}
        </div>
      ))}
    </div>
  );
}
export default StatsRow;
