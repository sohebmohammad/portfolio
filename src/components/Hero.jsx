import Typewriter from "./Typewriter";

const heroMessages = [
  "Software engineer building reliable full-stack web products.",
  "2 years of hands-on software engineering experience.",
  "Familiar with modern full-stack technology stacks.",
  "Completed an AWS and DevOps internship with a project certificate.",
  "Worked on real-time RAG systems.",
  "Built mobile applications and released them to the Play Store.",
  "Tech stack: React.js, Node.js, Express.js, Firebase, and React Native.",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24"
    >
      <div>
        <div className="mb-5 inline-flex items-center gap-2 rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
          Open to software engineering opportunities
        </div>

        <Typewriter messages={heroMessages} speed={70} />

        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
          I am Mohammad Soheb, a developer focused on React interfaces, API-driven
          features, and maintainable code that turns product ideas into usable
          experiences.
        </p>
      </div>
    </section>
  );
}
