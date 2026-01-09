export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/60 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide">
          <span className="text-white">Nawah</span>
          <span className="text-zinc-400"> Platform</span>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex gap-8 text-sm text-zinc-300">
          <a href="#" className="hover:text-white transition">الرئيسية</a>
          <a href="#" className="hover:text-white transition">المنصة</a>
          <a href="#" className="hover:text-white transition">الوثيقة</a>
          <a href="#" className="hover:text-white transition">تواصل</a>
        </div>

        {/* Action */}
        <button className="px-4 py-2 rounded-lg bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition">
          دخول
        </button>
      </div>
    </nav>
  );
}
