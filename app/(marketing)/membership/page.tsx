export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white pt-32">

      {/* ================= INTRO ================= */}
      <section className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm text-zinc-400 mb-3">
          العضوية
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-nawah-gold">
          الانضمام إلى نواة
        </h1>

        <p className="mt-6 text-lg text-zinc-300 leading-relaxed">
          العضوية في نواة مفتوحة للجميع.
          لا تتطلب اشتراكًا مدفوعًا،
          ولا تمنح امتيازات مالية.
          <br />
          نواة مجتمع يُبنى بالمشاركة،
          لا بالشراء.
        </p>
      </section>

      {/* ================= WHAT MEMBERSHIP MEANS ================= */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center border-t border-white/10">
        <h2 className="text-3xl font-bold text-nawah-gold">
          ماذا تعني العضوية؟
        </h2>

        <p className="mt-6 text-zinc-300 leading-relaxed">
          العضوية في نواة تعني الانتماء إلى مساحة
          فكرية وثقافية رقمية،
          تتيح لك التفاعل، المساهمة،
          والمشاركة في بناء مشروع طويل المدى
          يقوم على القيم الإنسانية والابتكار المسؤول.
        </p>
      </section>

      {/* ================= HOW TO JOIN ================= */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center border-t border-white/10">
        <h2 className="text-3xl font-bold text-nawah-gold">
          كيف تنضم؟
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "انضم مجانًا",
              text: "العضوية متاحة للجميع دون رسوم أو شروط مالية.",
            },
            {
              title: "شارك وتفاعل",
              text: "التفاعل والمشاركة هما أساس بناء الثقة داخل المجتمع.",
            },
            {
              title: "اكسب دورك",
              text: "الأدوار والامتيازات تُكتسب بالمساهمة والالتزام.",
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

      {/* ================= ROLES ================= */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center border-t border-white/10">
        <h2 className="text-3xl font-bold text-nawah-gold">
          الأدوار داخل نواة
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "عضو",
              text: "منضم جديد يتابع، يتفاعل، ويتعرّف على المجتمع.",
            },
            {
              title: "مساهم",
              text: "يشارك بالأفكار، المحتوى، أو الجهد التطوعي.",
            },
            {
              title: "فاعل",
              text: "شخص ملتزم يساهم باستمرار وله دور مؤثر في المجتمع.",
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

      {/* ================= IMPORTANT NOTE ================= */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center border-t border-white/10">
        <p className="text-sm text-zinc-400 leading-relaxed">
          العضوية في نواة لا تمنح أي حقوق مالية،
          ولا تمثل استثمارًا،
          ولا تتضمن اشتراكات مدفوعة.
          <br />
          أي خدمات أو منتجات مدفوعة مستقبلًا
          سيتم تقديمها عبر منصات منفصلة
          وبوضوح تام.
        </p>
      </section>

    </main>
  );
}
