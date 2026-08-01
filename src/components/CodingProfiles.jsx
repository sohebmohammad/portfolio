import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import GitHubCard from "./GitHubCard";
import { useCountUp } from "../hooks/useCountUp";

const COLORS = { Easy: "#22c55e", Medium: "#eab308", Hard: "#ef4444" };
const API = "https://alfa-leetcode-api.onrender.com";

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  const { name, value } = payload[0].payload;
  return (
    <div className="rounded-lg border border-white/10 bg-[#1a1f2e] px-3 py-2 text-xs text-white shadow-lg">
      <span style={{ color: COLORS[name] }}>{name}</span>: {value} solved
    </div>
  );
}

function AnimatedNumber({ raw }) {
  const [count, ref] = useCountUp(raw);
  return <span ref={ref}>{count.toLocaleString()}</span>;
}

function StatRow({ label, value, color }) {
  // pull leading number out of strings like "85 / 948" or "#1,148,191"
  const match = String(value).match(/^[#]?([\d,]+)/);
  const numeric = match ? parseInt(match[1].replace(/,/g, ""), 10) : null;
  const suffix = match ? String(value).slice(match[0].length) : null;

  return (
    <div className="flex items-center justify-between py-1.5 text-sm">
      <span className="flex items-center gap-2 text-slate-400">
        <span className="h-2 w-2 rounded-full" style={{ background: color }} />
        {label}
      </span>
      <span className="font-semibold text-white">
        {numeric !== null ? (
          <>
            {String(value).startsWith("#") && "#"}
            <AnimatedNumber raw={numeric} />
            {suffix}
          </>
        ) : value}
      </span>
    </div>
  );
}

function LeetCodeCard() {
  const [profile, setProfile] = useState(null);
  const [profileLoading, setProfileLoading] = useState(true);
  const [profileError, setProfileError] = useState(false);
  const [solved, setSolved] = useState([]);
  const [solvedLoading, setSolvedLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`${API}/SohebMohammad/profile`)
      .then((r) => r.json())
      .then(setProfile)
      .catch(() => setProfileError(true))
      .finally(() => setProfileLoading(false));
  }, []);

  useEffect(() => {
    fetch(`${API}/SohebMohammad/acSubmission?limit=150`)
      .then((r) => r.json())
      .then((d) => setSolved(d.submission ?? []))
      .catch(() => {})
      .finally(() => setSolvedLoading(false));
  }, []);

  const chartData = profile
    ? [
        { name: "Easy", value: profile.easySolved },
        { name: "Medium", value: profile.mediumSolved },
        { name: "Hard", value: profile.hardSolved },
      ]
    : [];

  const filtered = solved.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="rounded-xl border border-white/10 bg-[#0d1119] overflow-hidden">
      {/* header */}
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
        <div className="flex items-center gap-3">
          <div>
            <p className="font-semibold text-white">LeetCode</p>
            <p className="text-xs text-slate-400">@SohebMohammad</p>
          </div>
        </div>
        <a
          href="https://leetcode.com/u/SohebMohammad/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-lg border border-yellow-400/30 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:border-yellow-400/60 hover:bg-yellow-400/5"
        >
          View profile
          <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      {profileLoading && (
        <div className="flex h-52 items-center justify-center text-sm text-slate-500">Loading stats…</div>
      )}
      {profileError && (
        <div className="flex h-52 items-center justify-center text-sm text-slate-500">
          Could not load stats.{" "}
          <a href="https://leetcode.com/u/SohebMohammad/" className="ml-1 text-cyan-400 underline" target="_blank" rel="noopener noreferrer">
            View profile →
          </a>
        </div>
      )}

      {profile && (
        <div className="grid divide-y divide-white/5 md:grid-cols-2 md:divide-x md:divide-y-0">
          {/* donut */}
          <div className="flex flex-col items-center justify-center px-6 py-8">
            <div className="relative h-52 w-52">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={chartData} cx="50%" cy="50%" innerRadius={68} outerRadius={96} paddingAngle={3} dataKey="value" strokeWidth={0}>
                    {chartData.map((e) => <Cell key={e.name} fill={COLORS[e.name]} />)}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-white"><AnimatedNumber raw={profile.totalSolved} /></span>
                <span className="text-xs text-slate-400">solved</span>
              </div>
            </div>
            <div className="mt-4 flex gap-4 text-xs text-slate-400">
              {chartData.map(({ name }) => (
                <span key={name} className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full" style={{ background: COLORS[name] }} />
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* stats */}
          <div className="flex flex-col justify-center px-6 py-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">By difficulty</p>
            <div className="mt-3 divide-y divide-white/5">
              <StatRow label="Easy" value={`${profile.easySolved} / ${profile.totalEasy}`} color={COLORS.Easy} />
              <StatRow label="Medium" value={`${profile.mediumSolved} / ${profile.totalMedium}`} color={COLORS.Medium} />
              <StatRow label="Hard" value={`${profile.hardSolved} / ${profile.totalHard}`} color={COLORS.Hard} />
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-slate-500">Profile</p>
            <div className="mt-3 divide-y divide-white/5">
              <StatRow label="Global ranking" value={`#${profile.ranking?.toLocaleString()}`} color="#67e8f9" />
              <StatRow label="Total questions" value={profile.totalQuestions?.toLocaleString()} color="#94a3b8" />
              <StatRow label="Contribution pts" value={profile.contributionPoint} color="#94a3b8" />
            </div>
          </div>
        </div>
      )}

      {/* recently solved */}
      <div className="border-t border-white/10">
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <p className="font-medium text-white">Recently Solved</p>
            <p className="text-xs text-slate-500">
              {solvedLoading ? "Loading…" : `${filtered.length} problem${filtered.length !== 1 ? "s" : ""}`}
            </p>
          </div>
          <div className="relative w-48">
            <svg className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" /><path strokeLinecap="round" d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search…"
              className="w-full rounded-lg border border-white/10 bg-white/3 py-1.5 pl-8 pr-3 text-xs text-white placeholder-slate-500 outline-none focus:border-cyan-400/40"
            />
          </div>
        </div>

        <div className="divide-y divide-white/5">
          {solvedLoading && (
            <div className="flex h-24 items-center justify-center text-sm text-slate-500">Loading…</div>
          )}
          {!solvedLoading && filtered.length === 0 && (
            <div className="flex h-24 items-center justify-center text-sm text-slate-500">No matches.</div>
          )}
          {filtered.map((p) => (
            <a
              key={p.titleSlug}
              href={`https://leetcode.com/problems/${p.titleSlug}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3.5 transition-colors hover:bg-white/3"
            >
              <svg className="h-4 w-4 shrink-0 text-green-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="flex-1 text-sm text-slate-300 group-hover:text-white">{p.title}</span>
              <span className="shrink-0 rounded bg-white/5 px-1.5 py-0.5 text-[10px] text-slate-400">{p.lang}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CodingProfiles() {
  return (
    <section id="coding" className="mx-auto max-w-6xl px-4 py-20">
      <div className="mb-12 max-w-2xl">
        <p className="mono mb-2 text-xs font-medium tracking-widest text-indigo-400 uppercase">Coding</p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Competitive Programming</h2>
        <p className="mt-3 text-sm leading-6 text-slate-500">
          Live stats from LeetCode and GitHub — difficulty breakdown, language usage, and recent activity.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <LeetCodeCard />
        <GitHubCard />
      </div>
    </section>
  );
}
