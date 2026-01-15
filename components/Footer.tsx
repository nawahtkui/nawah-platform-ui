export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="text-lg font-bold tracking-wide">
              <span className="text-nawah-gold">Nawah</span>
              <span className="text-nawah-silver"> Platform</span>
            </div>
            <p className="mt-3 text-sm text-zinc-400 max-w-sm">
              منصة رقمية حضارية لتمكين الإنسان عبر تقنيات Web3
              وبناء اقتصاد إنساني مستدام.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-10 text-sm text-zinc-400">
            <div className="flex flex-col gap-2">
              <span className="text-white font-semibold">المنصة</span>
              <a href="#" className="hover:text-nawah-gold transition">الرؤية</a>
              <a href="#" className="hover:text-nawah-gold transition">Web3</a>
              <a href="#" className="hover:text-nawah-gold transition">الأثر</a>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-white font-semibold">الموارد</span>
              <a href="#" className="hover:text-nawah-gold transition">الوثيقة البيضاء</a>
              <a href="#" className="hover:text-nawah-gold transition">GitHub</a>
              <a href="#" className="hover:text-nawah-gold transition">تواصل</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Nawah Platform — All rights reserved
          </p>
        </div>

      </div>
    </footer>
  );
}
