export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800 mt-20 transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-slate-900 dark:text-white font-bold tracking-tight">Aqua Alert</p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 uppercase tracking-widest font-medium">Verified Environmental Data</p>
        </div>
        <div className="text-sm text-slate-400 dark:text-slate-500 italic">
          © Syntaxual CodeZen2026
        </div>
      </div>
    </footer>
  );
}