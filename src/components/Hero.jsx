import Typewriter from "./Typewriter";

const roles = [
  "Full-stack Software Engineer",
  "React & Node.js Developer",
  "Mobile App Developer",
  "API & Firebase Specialist",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col items-start justify-center overflow-hidden px-4 py-20"
    >
      {/* animated blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      {/* subtle grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />

      {/* availability badge */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-300">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        Open to opportunities
      </div>

      {/* name */}
      <p className="mono mb-3 text-sm font-medium tracking-widest text-indigo-400 uppercase">
        Mohammad Soheb
      </p>

      {/* typewriter heading */}
      <div className="mb-6 min-h-25 sm:min-h-30">
        <h1 className="gradient-text max-w-3xl text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          <Typewriter messages={roles} speed={65} pause={2000} />
        </h1>
      </div>

      {/* description */}
      <p className="mb-10 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
        2 years building production web and mobile products — React interfaces,
        Node.js APIs, Firebase, and React Native apps shipped to the Play Store.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:bg-indigo-500 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition-all hover:border-white/30 hover:bg-white/5 hover:-translate-y-0.5"
        >
          Get in touch
        </a>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-600">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <svg className="h-4 w-4 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
