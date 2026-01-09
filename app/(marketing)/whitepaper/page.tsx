export default function WhitepaperPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white pt-32">

      {/* ================= INTRO ================= */}
      <section className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm text-zinc-400 mb-3">
          الوثيقة البيضاء
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-nawah-gold">
          Nawah Whitepaper
        </h1>

        <p className="mt-6 text-lg text-zinc-300 leading-relaxed">
          هذه الوثيقة تمثّل المرجع الفكري
          والرؤية التأسيسية لمشروع نواة.
          <br />
          وهي لا تتضمن أي عرض مالي
          أو التزام تقني أو بيع.
        </p>
      </section>

      {/* ================= WHAT IT CONTAINS ================= */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center border-t border-white/10">
        <h2 className="text-3xl font-bold text-nawah-gold">
          ماذا تحتوي الوثيقة؟
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "الرؤية",
              text: "المنطلق الفكري والإنساني للمشروع.",
            },
            {
              title: "الفلسفة",
              text: "العمق الثقافي والتاريخي الذي تستند إليه نواة.",
            },
            {
              title: "المبادئ",
              text: "القيم التي تحكم بناء المشروع وتطوره.",
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

      {/* ================= ACCESS ================= */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center border-t border-white/10">
        <h2 className="text-3xl font-bold text-nawah-gold">
          الوصول إلى الوثيقة
        </h2>

        <p className="mt-6 text-zinc-300 leading-relaxed">
          الوثيقة البيضاء متاحة للقراءة
          والاطلاع كمرجع مفتوح،
          وهي جزء من مرحلة تأسيسية
          تُبنى فيها الفكرة قبل الأداة.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/docs/whitepaper/nawah-whitepaper-foundation.md"
            className="px-6 py-3 rounded-xl bg-nawah-gold text-black font-semibold hover:opacity-90 transition"
          >
            قراءة الوثيقة
          </a>

          <a
            href="/docs/whitepaper"
            className="px-6 py-3 rounded-xl border border-white/20 text-zinc-300 hover:border-nawah-gold hover:text-nawah-gold transition"
          >
            مستودع الوثيقة
          </a>
        </div>
      </section>

      {/* ================= DISCLAIMER ================= */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center border-t border-white/10">
        <p className="text-sm text-zinc-400 leading-relaxed">
          هذه الوثيقة لا تمثل عرضًا للاستثمار،
          ولا تتضمن بيع رموز أو اشتراكات،
          وهي مخصّصة للتعريف بالرؤية
          والمبادئ العامة للمشروع.
        </p>
      </section>

    </main>
  );
}
