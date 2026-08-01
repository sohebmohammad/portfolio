import { useState, useEffect } from "react";
import { useCountUp } from "../hooks/useCountUp";

const LANG_COLORS = {
  JavaScript: "#f7df1e",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Python: "#3572A5",
  "Jupyter Notebook": "#DA5B0B",
  C: "#555555",
  "C++": "#f34b7d",
  Java: "#b07219",
};

const GH_API = "https://api.github.com/users/sohebmohammad";

function StatBox({ label, value }) {
  const isNumber = !isNaN(Number(value));
  const [count, ref] = useCountUp(isNumber ? value : 0);
  return (
    <div ref={ref} className="flex flex-col items-center rounded-lg border border-white/10 bg-white/2 px-4 py-3">
      <span className="text-xl font-bold text-white">{isNumber ? count : value}</span>
      <span className="mt-0.5 text-xs text-slate-500">{label}</span>
    </div>
  );
}

export default function GitHubCard() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    Promise.all([
      fetch(GH_API).then((r) => r.json()),
      fetch(`${GH_API}/repos?per_page=100&sort=pushed`).then((r) => r.json()),
    ])
      .then(([userData, reposData]) => {
        setUser(userData);
        setRepos(Array.isArray(reposData) ? reposData : []);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  // language distribution by repo count
  const langMap = {};
  repos.forEach((r) => {
    if (r.language) langMap[r.language] = (langMap[r.language] ?? 0) + 1;
  });
  const totalLangRepos = Object.values(langMap).reduce((a, b) => a + b, 0);
  const langs = Object.entries(langMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  const totalStars = repos.reduce((s, r) => s + r.stargazers_count, 0);

  // top 4 recently pushed repos (skip forks, skip empty)
  const topRepos = repos
    .filter((r) => !r.fork)
    .slice(0, 4);

  const joinYear = user ? new Date(user.created_at).getFullYear() : null;

  return (
    <div className="rounded-xl border border-white/10 bg-[#0d1119] overflow-hidden">
      {/* header */}
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
        <div className="flex items-center gap-3">
          <svg className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          <div>
            <p className="font-semibold text-white">GitHub</p>
            <p className="text-xs text-slate-400">@sohebmohammad</p>
          </div>
        </div>
        <a
          href="https://github.com/sohebmohammad"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-lg border border-white/20 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5"
        >
          View profile
          <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      {loading && (
        <div className="flex h-52 items-center justify-center text-sm text-slate-500">Loading stats…</div>
      )}
      {error && (
        <div className="flex h-52 items-center justify-center text-sm text-slate-500">
          Could not load GitHub data.
        </div>
      )}

      {!loading && !error && user && (
        <>
          {/* stat boxes */}
          <div className="grid grid-cols-3 gap-3 px-6 py-6">
            <StatBox label="Repositories" value={user.public_repos} />
            <StatBox label="Stars earned" value={totalStars} />
            <StatBox label="Member since" value={joinYear} />
          </div>

          {/* language chart + recent repos */}
          <div className="grid divide-y divide-white/5 border-t border-white/10 md:grid-cols-2 md:divide-x md:divide-y-0">
            {/* language bars */}
            <div className="px-6 py-5">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Language breakdown
              </p>
              <div className="flex flex-col gap-3">
                {langs.map(([lang, count]) => {
                  const pct = Math.round((count / totalLangRepos) * 100);
                  const color = LANG_COLORS[lang] ?? "#64748b";
                  return (
                    <div key={lang}>
                      <div className="mb-1 flex items-center justify-between text-xs">
                        <span className="flex items-center gap-1.5 text-slate-300">
                          <span className="h-2 w-2 rounded-full" style={{ background: color }} />
                          {lang}
                        </span>
                        <span className="text-slate-500">{pct}%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{ width: `${pct}%`, background: color }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* recent repos */}
            <div className="px-6 py-5">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Recent repositories
              </p>
              <div className="flex flex-col gap-2">
                {topRepos.map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start justify-between rounded-lg border border-white/5 bg-white/2 px-3 py-2.5 transition-colors hover:border-white/10 hover:bg-white/5"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-slate-200 group-hover:text-white">
                        {repo.name}
                      </p>
                      {repo.description && (
                        <p className="mt-0.5 truncate text-xs text-slate-500">{repo.description}</p>
                      )}
                    </div>
                    <div className="ml-2 flex shrink-0 items-center gap-2">
                      {repo.language && (
                        <span className="flex items-center gap-1 text-[10px] text-slate-500">
                          <span
                            className="h-2 w-2 rounded-full"
                            style={{ background: LANG_COLORS[repo.language] ?? "#64748b" }}
                          />
                          {repo.language}
                        </span>
                      )}
                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-0.5 text-[10px] text-slate-500">
                          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                          {repo.stargazers_count}
                        </span>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
