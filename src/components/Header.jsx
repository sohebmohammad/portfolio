const navLinks = ["Home", "Projects", "Skills", "Contact"];

export default function Header() {
  return (
    <header className="w-full px-4 pt-5">
      <nav className="max-w-4xl mx-auto bg-[#1e1f28] rounded-2xl px-5 py-3 flex items-center justify-between border border-[#2e303a]">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-purple-600 flex items-center justify-center text-white text-sm font-bold">
            {"</>"}
          </div>
          <span className="text-white font-semibold text-base">Mohammad Soheb</span>
        </div>

        {/* Nav links */}
        <ul className="flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={`text-sm transition-colors ${
                  link === "Home"
                    ? "text-white font-semibold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 border border-[#3a3c47] text-white text-sm px-4 py-1.5 rounded-lg hover:bg-[#2a2b35] transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
            Hire me
          </button>

          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#2a2b35] rounded-lg transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="5" cy="12" r="1.5" />
              <circle cx="12" cy="12" r="1.5" />
              <circle cx="19" cy="12" r="1.5" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
