"use client";

import { useEffect } from "react";

export default function SalePage() {

  // ================= Scroll Animation =================
  useEffect(() => {
    const elements = document.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white pt-32">

      {/* ================= HERO ================= */}
      <section
        data-animate
        className="max-w-4xl mx-auto px-6 text-center opacity-0 translate-y-6 transition-all duration-700"
      >
        <p className="text-sm text-zinc-400 mb-3">
          المرحلة التأسيسية
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-nawah-gold">
          كن من أوائل من يشكّلون نواة
        </h1>

        <p className="mt-6 text-lg text-zinc-300 leading-relaxed">
          هذه ليست حملة بيع، بل دعوة واعية
          للانضمام إلى مرحلة تأسيسية
          تشكّل هوية منصة نواة وقيمها.
        </p>

        <a
          href="mailto:contact@nawah.platform"
          className="mt-10 inline-block px-8 py-3 rounded-xl bg-nawah-gold text-black font-semibold hover:opacity-90 transition"
        >
          عبّر عن اهتمامك
        </a>
      </section>

      {/* ================= WHY ================= */}
      <section
        data-animate
        className="max-w-5xl mx-auto px-6 py-24 text-center border-t border-white/10 opacity-0 translate-y-6 transition-all duration-700"
      >
        <h2 className="text-3xl font-bold text-nawah-gold">
          لماذا هذه المرحلة؟
        </h2>

        <p className="mt-6 text-zinc-300 leading-relaxed">
          نواة لا تُبنى بالضجيج،
          بل بالوعي والمشاركة.
          هذه المرحلة مخصّصة
          لمن يؤمن بالقيمة طويلة المدى.
        </p>
      </section>

      {/* ================= WHAT YOU GET ================= */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center border-t border-white/10">
        <h2
          data-animate
          className="text-3xl font-bold text-nawah-gold opacity-0 translate-y-6 transition-all duration-700"
        >
          ماذا يحصل عليه المنضم؟
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "وصول مبكر لتحديثات المنصة",
            "دور مجتمعي في صياغة الرؤية",
            "أولوية مستقبلية للميزات الرمزية",
          ].map((item, i) => (
            <div
              key={i}
              data-animate
              style={{ transitionDelay: `${i * 150}ms` }}
              className="opacity-0 translate-y-6 p-6 rounded-2xl bg-black/60 border border-white/10 transition-all duration-700"
            >
              <p className="text-sm text-zinc-300 leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TRANSPARENCY ================= */}
      <section
        data-animate
        className="max-w-4xl mx-auto px-6 py-24 text-center border-t border-white/10 opacity-0 translate-y-6 transition-all duration-700"
      >
        <p className="text-sm text-zinc-400 leading-relaxed">
          لا توجد وعود أرباح.
          لا يوجد بيع رموز في هذه المرحلة.
          نواة مشروع ثقافي وتقني طويل الأمد.
        </p>
      </section>

    </main>
  );
}
