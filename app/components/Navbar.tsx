export default function MarketingNavbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="/"
          className="text-xl font-bold tracking-wide select-none"
        >
          <span className="text-nawah-gold">Nawah</span>
          <span className="text-nawah-silver"> Platform</span>
        </a>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <a
            href="/about"
            className="text-sm text-zinc-300 hover:text-nawah-gold transition"
          >
            عن نواة
          </a>

          <a
            href="/membership"
            className="text-sm text-zinc-300 hover:text-nawah-gold transition"
          >
            العضوية
          </a>

          <a
            href="/whitepaper"
            className="text-sm text-zinc-300 hover:text-nawah-gold transition"
          >
            الوثيقة البيضاء
          </a>

          <a
            href="/sale"
            className="px-4 py-2 rounded-lg border border-nawah-gold text-nawah-gold text-sm font-semibold hover:bg-nawah-gold hover:text-black transition"
          >
            انضم للتأسيس
          </a>
        </div>

      </div>
    </nav>
  );
}
