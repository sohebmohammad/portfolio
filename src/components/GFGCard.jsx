import gfgLogo from "../assets/GeeksForGeeks.png";

export default function GFGCard() {
  return (
    <div className="rounded-xl border border-white/10 bg-[#151923] overflow-hidden">
      {/* header */}
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
        <div className="flex items-center gap-3">
          <img src={gfgLogo} alt="GeeksForGeeks" className="h-7 w-7 object-contain" />
          <div>
            <p className="font-semibold text-white">GeeksForGeeks</p>
            <p className="text-xs text-slate-400">@sohebmd</p>
          </div>
        </div>
        <a
          href="https://www.geeksforgeeks.org/profile/sohebmd?tab=activity"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-lg border border-green-500/30 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:border-green-500/60 hover:bg-green-500/5"
        >
          View profile
          <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      {/* logo display */}
      <div
        className="flex items-center justify-center py-16"
        style={{ background: "radial-gradient(ellipse at center, rgba(34,197,94,0.07) 0%, transparent 70%)" }}
      >
        <img
          src={gfgLogo}
          alt="GeeksForGeeks"
          className="h-36 w-auto object-contain opacity-90"
        />
      </div>

      {/* info */}
      <div className="border-t border-white/10 px-6 py-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">About</p>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Practising CS fundamentals, data structures, algorithms, and competitive
          programming problems to build depth across core computer science topics.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Data Structures", "Algorithms", "Dynamic Programming", "Graph Theory", "Problem Solving"].map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-green-500/15 bg-green-500/5 px-2.5 py-1 text-xs text-green-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
