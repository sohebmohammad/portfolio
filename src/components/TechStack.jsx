const techs = [
  { name: "React", color: "#61DAFB", bg: "#1a2a35" },
  { name: "JavaScript", color: "#F7DF1E", bg: "#2a2a1a" },
  { name: "TypeScript", color: "#3178C6", bg: "#1a2035" },
  { name: "Node.js", color: "#68A063", bg: "#1a2a1a" },
  { name: "Tailwind CSS", color: "#38BDF8", bg: "#1a2535" },
  { name: "Python", color: "#FFD43B", bg: "#2a271a" },
  { name: "Firebase", color: "#FFCA28", bg: "#2a251a" },
  { name: "Java", color: "#ED8B00", bg: "#2a1f1a" },
  { name: "Git", color: "#F05032", bg: "#2a1a1a" },
  { name: "Express", color: "#c0c0c0", bg: "#1e1e1e" },
];

export default function TechStack() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Tech Stack</h2>
        <p className="text-gray-500 text-sm">Technologies I work with</p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {techs.map(({ name, color, bg }) => (
          <div
            key={name}
            style={{ backgroundColor: bg, borderColor: color + "33" }}
            className="flex flex-col items-center gap-2 px-3 py-4 rounded-xl border hover:scale-105 transition-transform cursor-default"
          >
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
              style={{ backgroundColor: color + "22", color }}
            >
              {name.slice(0, 2)}
            </span>
            <span className="text-xs text-gray-300 text-center leading-tight">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
