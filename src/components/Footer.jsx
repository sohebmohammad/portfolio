export default function Footer() {
  return (
    <footer className="mt-8 border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-cyan-400 text-xs font-bold text-slate-950">
            {"</>"}
          </div>
          <span className="text-sm text-slate-500">Mohammad Soheb</span>
        </div>
        <p className="text-xs text-slate-600">
          Copyright {new Date().getFullYear()} - Built with React and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
