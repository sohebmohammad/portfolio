export default function Hero() {
  return (
    <section
      id="home"
      className="max-w-4xl mx-auto px-4 pt-10 pb-8 flex flex-col items-center text-center"
    >
      {/* Available badge */}
      <div className="flex items-center gap-2 bg-[#1e1f28] border border-[#2e303a] text-xs text-gray-400 px-3 py-1 rounded-full mb-5">
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        Available for work
      </div>

      {/* Headline */}
      <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-3">
        Hi, I'm{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-purple-600">
          Mohammad Soheb
        </span>
      </h1>

      {/* Sub-headline */}
      <p className="text-base text-gray-400 max-w-xl mb-6 leading-relaxed">
        A full-stack developer who builds clean, performant web experiences.
        Passionate about turning ideas into real products.
      </p>

      {/* CTAs */}
      <div className="flex items-center gap-3 mb-8">
        <a
          href="#projects"
          className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="border border-[#3a3c47] text-gray-300 hover:text-white hover:bg-[#1e1f28] text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
        >
          Contact Me
        </a>
      </div>

      {/* Avatar */}
      <div className="relative">
        <div className="w-24 h-24 rounded-full bg-[#1e1f28] border-2 border-purple-600/40 flex items-center justify-center text-4xl select-none">
          👨‍💻
        </div>
        <div className="absolute inset-0 rounded-full bg-purple-600/10 blur-2xl -z-10" />
      </div>

      {/* Stats */}
      <div className="flex items-center gap-10 mt-8 text-center">
        {[
          { value: "2+", label: "Years Experience" },
          { value: "20+", label: "Projects Built" },
          { value: "10+", label: "Happy Clients" },
        ].map(({ value, label }) => (
          <div key={label}>
            <p className="text-xl font-bold text-white">{value}</p>
            <p className="text-xs text-gray-500 mt-0.5">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
