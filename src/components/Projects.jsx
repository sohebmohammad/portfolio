const projects = [
  {
    title: "Quick Commerce Logistics App",
    label: "Mobile · Production",
    labelColor: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    description:
      "Real-time logistics platform for quick-commerce operations — mobile workflows for riders and an admin dashboard for fleet management.",
    impact: "Shipped to the Play Store with real-time order tracking, rider performance analytics, attendance, and EV fleet management.",
    features: ["Order tracking", "Rider workflows", "Attendance", "Withdrawals", "Analytics", "EV management"],
    tags: ["React Native", "Node.js", "Express.js", "Firebase", "Play Store"],
    accent: "from-emerald-500/10",
  },
  {
    title: "Document RAG System",
    label: "AI · Backend",
    labelColor: "bg-violet-500/10 border-violet-500/20 text-violet-400",
    description:
      "Retrieval-augmented generation system that answers user questions from uploaded documents using semantic search and LLMs.",
    impact: "Built end-to-end: document ingestion, chunking, vector store, semantic retrieval, and source-grounded answer generation.",
    features: ["Admin upload", "Ingestion pipeline", "Chunking", "Vector store", "Caching", "Source-based answers"],
    tags: ["OpenAI API", "LLMs", "Embeddings", "Node.js", "Firebase"],
    accent: "from-violet-500/10",
  },
  {
    title: "Event Management App",
    label: "Mobile · Production",
    labelColor: "bg-amber-500/10 border-amber-500/20 text-amber-400",
    description:
      "Mobile-first event platform for browsing events, registering participants, running campaigns, and collecting payments.",
    impact: "Implemented event listing, group participation, campaign flows, and Razorpay payment integration.",
    features: ["Event listing", "Registration", "Private groups", "Campaigns", "Razorpay", "Play Console"],
    tags: ["React Native", "Expo", "Firebase", "Node.js", "Razorpay"],
    accent: "from-amber-500/10",
  },
  {
    title: "Portfolio Website",
    label: "Web · Live",
    labelColor: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
    description:
      "This portfolio — a fast, responsive site with live coding stats, animated sections, and a clean dark design.",
    impact: "Showcases live GitHub and LeetCode data, animated counters, scroll reveals, and a typewriter hero.",
    features: ["Live API stats", "Animated UI", "Scroll reveal", "Responsive", "Dark design"],
    tags: ["React", "Tailwind CSS", "Recharts", "Vite"],
    accent: "from-cyan-500/10",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20">
      <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="mono mb-2 text-xs font-medium tracking-widest text-indigo-400 uppercase">Work</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Selected Projects</h2>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            Production apps and systems across mobile, AI, logistics, and the web.
          </p>
        </div>
        <a
          href="https://github.com/sohebmohammad"
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-white/20 hover:text-white"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          View GitHub
        </a>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map(({ title, label, labelColor, description, impact, features, tags, accent }) => (
          <article
            key={title}
            className={`group relative flex flex-col overflow-hidden rounded-xl border border-white/8 bg-[#0d1119] p-6 transition-all hover:border-indigo-500/25 hover:-translate-y-0.5`}
          >
            {/* subtle top gradient */}
            <div className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b ${accent} to-transparent opacity-60`} />

            <div className="relative flex items-start justify-between gap-3">
              <h3 className="text-base font-semibold text-white">{title}</h3>
              <span className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold ${labelColor}`}>{label}</span>
            </div>

            <p className="relative mt-3 flex-1 text-sm leading-6 text-slate-400">{description}</p>

            <p className="relative mt-4 rounded-lg border border-indigo-500/15 bg-indigo-500/5 px-3 py-2.5 text-xs leading-5 text-indigo-200">
              {impact}
            </p>

            <div className="relative mt-4 flex flex-wrap gap-1.5">
              {features.map((f) => (
                <span key={f} className="rounded-md border border-white/8 bg-white/3 px-2 py-1 text-[11px] text-slate-500">
                  {f}
                </span>
              ))}
            </div>

            <div className="relative mt-4 flex flex-wrap gap-1.5">
              {tags.map((t) => (
                <span key={t} className="mono rounded-md border border-indigo-500/15 bg-indigo-500/8 px-2 py-0.5 text-[11px] text-indigo-300">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
