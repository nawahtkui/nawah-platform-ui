export default function SalePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white pt-32">

      {/* ================= INTRO ================= */}
      <section className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm text-zinc-400 mb-3">
          دعوة مفتوحة
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-nawah-gold">
          انضم إلى المرحلة التأسيسية لنواة
        </h1>

        <p className="mt-6 text-lg text-zinc-300 leading-relaxed">
          هذه الصفحة ليست عرض بيع،
          ولا تتضمن اشتراكات مدفوعة.
          <br />
          هي دعوة مفتوحة للانضمام
          إلى المرحلة التأسيسية
          والمشاركة في بناء مجتمع نواة.
        </p>

        <a
          href="/membership"
          className="mt-10 inline-block px-8 py-3 rounded-xl bg-nawah-gold text-black font-semibold hover:opacity-90 transition"
        >
          الانتقال إلى صفحة العضوية
        </a>
      </section>

      {/* ================= WHY ================= */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center border-t border-white/10">
        <h2 className="text-3xl font-bold text-nawah-gold">
          لماذا المرحلة التأسيسية؟
        </h2>

        <p className="mt-6 text-zinc-300 leading-relaxed">
          المرحلة التأسيسية هي المساحة
          التي تتشكل فيها الرؤية،
          وتُبنى فيها القيم،
          ويظهر فيها المساهمون الأوائل.
          <br />
          نواة لا تبحث عن جمهور،
          بل عن أشخاص فاعلين
          يؤمنون بالمشاركة طويلة المدى.
        </p>
      </section>

      {/* ================= WHAT THIS IS NOT ================= */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center border-t border-white/10">
        <h2 className="text-3xl font-bold text-nawah-gold">
          ما الذي ليست عليه هذه الصفحة؟
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "ليست صفحة بيع",
            "لا تتضمن اشتراكات أو أسعار",
            "لا تمنح أي حقوق مالية",
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

      {/* ================= CLOSING ================= */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center border-t border-white/10">
        <p className="text-sm text-zinc-400 leading-relaxed">
          إذا كنت تبحث عن استثمار أو شراء،
          فهذه الصفحة ليست موجهة لك.
          <br />
          أما إذا كنت تبحث عن معنى،
          ومشاركة،
          ودور حقيقي،
          فأنت في المكان الصحيح.
        </p>
      </section>

    </main>
  );
}
