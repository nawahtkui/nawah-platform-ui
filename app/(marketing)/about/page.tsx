export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white pt-32">

      {/* ================= INTRO ================= */}
      <section className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm text-zinc-400 mb-3">
          عن نواة
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-nawah-gold">
          نواة ليست منتجًا… بل فكرة تُبنى
        </h1>

        <p className="mt-6 text-lg text-zinc-300 leading-relaxed">
          نواة منصة رقمية ذات بُعد حضاري وإنساني،
          تنطلق من الإيمان بأن التقنية يجب أن تخدم الإنسان،
          لا أن تجرّده من قيمه أو تختزله في أرقام.
        </p>
      </section>

      {/* ================= VISION ================= */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center border-t border-white/10">
        <h2 className="text-3xl font-bold text-nawah-gold">
          الرؤية
        </h2>

        <p className="mt-6 text-zinc-300 leading-relaxed">
          نسعى إلى بناء منظومة رقمية متوازنة،
          تجمع بين الابتكار التقني والعمق الثقافي،
          وتمنح المرأة والشباب مساحة عادلة
          للمشاركة، الإبداع، والتأثير.
        </p>
      </section>

      {/* ================= WHY ================= */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center border-t border-white/10">
        <h2 className="text-3xl font-bold text-nawah-gold">
          لماذا نواة؟
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "إنسانية قبل التقنية",
              text: "نضع القيم الإنسانية في صميم أي ابتكار تقني.",
            },
            {
              title: "تمكين واعٍ",
              text: "نؤمن بالتمكين طويل المدى لا بالحلول السريعة.",
            },
            {
              title: "هوية حضارية",
              text: "نستلهم من التاريخ والثقافة لبناء مستقبل متوازن.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-black/60 border border-white/10"
            >
              <h3 className="text-lg font-semibold text-nawah-silver">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHAT WE ARE NOT ================= */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center border-t border-white/10">
        <h2 className="text-3xl font-bold text-nawah-gold">
          ماذا لسنا؟
        </h2>

        <p className="mt-6 text-zinc-300 leading-relaxed">
          نواة ليست مشروعًا مضاربيًا،
          ولا حملة بيع سريعة،
          ولا وعدًا بثروة فورية.
          <br />
          نحن نعمل ببطء، ووعي، ومسؤولية.
        </p>
      </section>

      {/* ================= CLOSING ================= */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center border-t border-white/10">
        <p className="text-sm text-zinc-400 leading-relaxed">
          هذه الصفحة جزء من مرحلة تأسيسية،
          تُبنى فيها الفكرة قبل الأداة،
          والرؤية قبل التنفيذ.
        </p>
      </section>

    </main>
  );
}
