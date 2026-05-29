const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Tailwind CSS showcasing projects and skills.",
    tags: ["React", "Tailwind CSS", "Vite"],
    live: "#",
    repo: "#",
  },
  {
    title: "E-Commerce App",
    description: "Full-stack e-commerce platform with cart, auth, and payment integration.",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    live: "#",
    repo: "#",
  },
  {
    title: "Task Manager",
    description: "A real-time collaborative task management app with drag-and-drop support.",
    tags: ["React", "Express", "PostgreSQL", "Socket.io"],
    live: "#",
    repo: "#",
  },
];

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Projects</h2>
        <p className="text-gray-500 text-sm">Things I've built</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map(({ title, description, tags, live, repo }) => (
          <div
            key={title}
            className="bg-[#1e1f28] border border-[#2e303a] rounded-2xl p-5 flex flex-col gap-3 hover:border-purple-600/40 transition-colors"
          >
            <h3 className="text-white font-semibold text-base">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed flex-1">{description}</p>

            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-full bg-purple-600/15 text-purple-400 border border-purple-600/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={live}
                className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
              >
                <ExternalLinkIcon /> Live
              </a>
              <a
                href={repo}
                className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
              >
                <GitHubIcon /> Source
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
