export default function Footer() {
  return (
    <footer className="border-t border-[#2e303a] mt-8">
      <div className="max-w-4xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-purple-600 flex items-center justify-center text-white text-xs font-bold">
            {"</>"}
          </div>
          <span className="text-gray-500 text-sm">Mohammad Soheb</span>
        </div>
        <p className="text-gray-600 text-xs">
          © {new Date().getFullYear()} · Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
