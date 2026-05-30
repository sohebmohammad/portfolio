const skillGroups = [
  {
    title: "Frontend",
    summary: "Interfaces that are responsive, accessible, and easy to maintain.",
    items: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend",
    summary: "APIs and data flows for real product features.",
    items: ["Node.js", "Express", "Firebase", "MongoDB", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Workflow",
    summary: "Tools that keep code review, debugging, and delivery smooth.",
    items: ["Git", "Vite", "ESLint", "Deployment", "Testing basics", "Performance"],
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-8 max-w-2xl">
        <p className="text-sm font-semibold uppercase text-cyan-300">Skills</p>
        <h2 className="mt-2 text-3xl font-bold text-white">Tools I use to ship better software</h2>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          My strongest work is in React-based products, with enough backend and
          deployment knowledge to move features from idea to production.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {skillGroups.map(({ title, summary, items }) => (
          <div
            key={title}
            className="rounded-lg border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-cyan-300/30"
          >
            <h3 className="text-base font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">{summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-white/10 bg-[#11151d] px-2.5 py-1 text-xs text-slate-300"
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
