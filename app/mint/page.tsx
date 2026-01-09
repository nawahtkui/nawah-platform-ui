export default function MintPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white pt-32">

      {/* ================= HERO ================= */}
      <section className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm text-zinc-400 mb-3">
          قريبًا
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-nawah-gold">
          المرحلة الرمزية الأولى
        </h1>

        <p className="mt-6 text-lg text-zinc-300 leading-relaxed">
          سيتم فتح هذه المرحلة لاحقًا
          للمشاركين الأوائل في منظومة نواة،
          وفق آلية شفافة ومدروسة.
        </p>

        <div className="mt-10 inline-block px-8 py-3 rounded-xl border border-white/20 text-zinc-400 cursor-not-allowed">
          Mint غير متاح حاليًا
        </div>
      </section>

      {/* ================= INFO ================= */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center border-t border-white/10">
        <h2 className="text-3xl font-bold text-nawah-gold">
          ماذا نُحضّر؟
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "آلية انضمام عادلة وغير مضاربية",
            "توزيع رمزي محدود وواضح",
            "ربط ثقافي وتقني طويل المدى",
          ].map((text, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-black/60 border border-white/10"
            >
              <p className="text-sm text-zinc-300 leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= DISCLAIMER ================= */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center border-t border-white/10">
        <p className="text-sm text-zinc-400 leading-relaxed">
          هذه الصفحة لا تمثّل عرض بيع،
          ولا تتضمن أي التزام مالي.
          سيتم الإعلان عن أي تفعيل
          بشكل رسمي وشفاف.
        </p>
      </section>

    </main>
  );
}
