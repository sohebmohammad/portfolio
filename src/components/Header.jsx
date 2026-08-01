import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home",       href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Skills",     href: "#skills" },
  { label: "Coding",     href: "#coding" },
  { label: "Contact",    href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-[#080c14]/90 backdrop-blur-xl shadow-lg shadow-black/20"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-indigo-500 to-violet-600 text-xs font-black text-white shadow-lg shadow-indigo-500/25 transition-transform group-hover:scale-105">
            MS
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-white">Mohammad Soheb</p>
            <p className="text-[11px] text-slate-500">Full-stack Engineer</p>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://mail.google.com/mail/?view=cm&to=sohebmohammadd@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-500 hover:shadow-indigo-500/30 sm:inline-flex"
        >
          Hire me
        </a>

        {/* Mobile burger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-colors hover:bg-white/5 hover:text-white md:hidden"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-[#080c14] px-4 py-3 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://mail.google.com/mail/?view=cm&to=sohebmohammadd@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
              className="mt-2 rounded-lg bg-indigo-600 px-3 py-2.5 text-center text-sm font-semibold text-white"
            >
              Hire me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
