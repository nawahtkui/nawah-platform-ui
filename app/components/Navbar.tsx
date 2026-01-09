export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide select-none">
          <span className="text-nawah-gold">Nawah</span>
          <span className="text-nawah-silver"> Platform</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
          <a href="/" className="hover:text-nawah-gold transition">
            الرئيسية
          </a>
          <a href="#vision" className="hover:text-nawah-gold transition">
            الرؤية
          </a>
          <a href="#web3" className="hover:text-nawah-gold transition">
            Web3
          </a>
          <a href="#impact" className="hover:text-nawah-gold transition">
            الأثر
          </a>
        </div>

        {/* Action Button */}
        <a
          href="/dashboard"
          className="px-4 py-2 rounded-lg bg-nawah-gold text-black text-sm font-semibold hover:opacity-90 transition"
        >
          دخول
        </a>

      </div>
    </nav>
  );
}
