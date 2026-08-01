export default function Footer() {
  return (
    <footer className="border-t border-white/8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-linear-to-br from-indigo-500 to-violet-600 text-[10px] font-black text-white">
            MS
          </div>
          <span className="text-sm font-medium text-slate-500">Mohammad Soheb</span>
        </div>
        <p className="text-xs text-slate-600">
          © {new Date().getFullYear()} Mohammad Soheb · Full-stack Engineer, Hyderabad
        </p>
      </div>
    </footer>
  );
}
