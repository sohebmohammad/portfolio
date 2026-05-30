import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0f1117]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#home" className="group flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-cyan-300/30 bg-cyan-400 text-sm font-black text-slate-950 shadow-lg shadow-cyan-950/30 transition-transform group-hover:-translate-y-0.5">
            MS
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white sm:text-base">Mohammad Soheb</p>
            <p className="truncate text-xs text-slate-500">Full-stack Software Engineer</p>
          </div>
        </a>

        <ul className="hidden items-center gap-1 rounded-xl border border-white/10 bg-white/[0.04] p-1 shadow-inner shadow-white/5 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  link.label === "Home"
                    ? "bg-cyan-400 text-slate-950"
                    : "text-slate-400 hover:bg-white/[0.07] hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:sohebmohammadd@gmail.com"
          className="hidden rounded-lg border border-cyan-400/30 px-4 py-2 text-sm font-semibold text-cyan-100 transition-colors hover:border-cyan-300 hover:bg-cyan-400/10 hover:text-white sm:inline-flex"
        >
          Hire me
        </a>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:border-cyan-300/40 hover:bg-white/5 hover:text-white md:hidden"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#0f1117] px-4 py-3 md:hidden">
          <div className="mx-auto grid max-w-6xl gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:sohebmohammadd@gmail.com"
              className="mt-1 rounded-lg bg-cyan-400 px-3 py-2 text-center text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
            >
              Hire me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
