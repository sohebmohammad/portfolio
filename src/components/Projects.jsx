const projects = [
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio focused on clear positioning, project storytelling, and fast navigation for recruiters and clients.",
    tags: ["React", "Tailwind CSS", "Vite"],
    impact: "Improved personal brand, contact clarity, and mobile presentation.",
    features: ["Responsive UI", "Personal branding", "Contact flow"],
  },
  {
    title: "Quick Commerce Logistics App",
    description:
      "A real-time logistics application for quick-commerce operations with mobile app workflows and an admin dashboard.",
    tags: ["React Native", "Node.js", "Express.js", "Firebase", "Google Play Console"],
    impact:
      "Implemented operational features for order tracking, rider workflows, analytics, and fleet management.",
    features: [
      "Order tracking",
      "Rider performance",
      "Attendance",
      "Withdrawals",
      "Analytics metrics",
      "EV rider management",
    ],
  },
  {
    title: "Document RAG System",
    description:
      "A retrieval-augmented generation system that answers user questions from uploaded documents with source-grounded responses.",
    tags: ["OpenAI APIs", "LLMs", "Vector Store", "Embeddings", "Node.js", "Firebase"],
    impact:
      "Built document ingestion, extraction, chunking, semantic retrieval, and answer generation flows for document-based Q&A.",
    features: [
      "Admin document upload",
      "Ingestion pipeline",
      "Chunking",
      "Vector store",
      "Caching",
      "Chat continuity",
      "Source-based answers",
    ],
  },
  {
    title: "Event Management App",
    description:
      "A mobile-first event platform for browsing ongoing events, registering participants, running campaigns, and collecting payments.",
    tags: ["React Native", "Expo", "Firebase", "Node.js", "Express.js", "Razorpay", "Google Play Console"],
    impact:
      "Implemented event listing, group participation, registration workflows, campaign flows, and Razorpay payments.",
    features: [
      "Ongoing events",
      "Event registration",
      "Private groups",
      "Public groups",
      "Group joining",
      "Event campaigns",
      "Razorpay payments",
      "Expo tooling",
      "Play Console",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase text-cyan-300">Projects</p>
          <h2 className="mt-2 text-3xl font-bold text-white">Selected projects</h2>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            Focused work across portfolio presentation, real-time mobile apps,
            dashboards, backend integrations, AI document retrieval, and event
            management workflows.
          </p>
        </div>
        <a
          href="https://github.com/sohebmohammad"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5"
        >
          View GitHub
        </a>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map(({ title, description, tags, impact, features }) => (
          <article
            key={title}
            className="flex min-h-72 flex-col rounded-lg border border-white/10 bg-[#151923] p-5 transition-colors hover:border-cyan-300/30"
          >
            <div className="mb-4 h-1 w-12 rounded-full bg-cyan-300" />
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{description}</p>
            <p className="mt-4 rounded-lg border border-amber-300/15 bg-amber-300/10 p-3 text-xs leading-5 text-amber-100">
              {impact}
            </p>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {features.map((feature) => (
                <span
                  key={feature}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-2 text-xs text-slate-300"
                >
                  {feature}
                </span>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
