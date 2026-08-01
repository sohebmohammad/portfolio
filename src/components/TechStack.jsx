const groups = [
  {
    title: "Frontend",
    icon: "◈",
    color: "text-violet-400 border-violet-500/20 bg-violet-500/8",
    items: ["React.js", "TypeScript", "JavaScript", "Tailwind CSS", "AngularJS", "HTML", "CSS"],
  },
  {
    title: "Backend & Database",
    icon: "◉",
    color: "text-cyan-400 border-cyan-500/20 bg-cyan-500/8",
    items: ["Node.js", "Express.js", "Firebase", "MongoDB", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Mobile",
    icon: "◐",
    color: "text-indigo-400 border-indigo-500/20 bg-indigo-500/8",
    items: ["React Native", "Expo", "Android (Play Store)", "Push Notifications"],
  },
  {
    title: "Tooling & Cloud",
    icon: "◑",
    color: "text-amber-400 border-amber-500/20 bg-amber-500/8",
    items: ["Git", "AWS", "DevOps", "Vite", "Firebase Hosting", "CI/CD"],
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20">
      <div className="mb-12 max-w-2xl">
        <p className="mono mb-2 text-xs font-medium tracking-widest text-indigo-400 uppercase">Stack</p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Skills & Technologies</h2>
        <p className="mt-3 text-sm leading-6 text-slate-500">
          Tools I use daily to build, ship, and maintain production-grade software.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map(({ title, icon, color, items }) => (
          <div
            key={title}
            className="flex flex-col rounded-xl border border-white/8 bg-[#0d1119] p-5 transition-all hover:border-indigo-500/20 hover:-translate-y-0.5"
          >
            <div className="mb-4 flex items-center gap-2.5">
              <span className={`flex h-8 w-8 items-center justify-center rounded-lg border text-base ${color}`}>{icon}</span>
              <h3 className="text-sm font-semibold text-white">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {items.map((item) => (
                <span
                  key={item}
                  className="mono rounded-md border border-white/8 bg-white/3 px-2.5 py-1 text-[11px] text-slate-400 transition-colors hover:border-indigo-500/30 hover:text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
