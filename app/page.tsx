import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-gradient-to-b from-black via-zinc-900 to-black text-white pt-32">

        {/* ================= HERO ================= */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="max-w-3xl text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-nawah-gold">
              Nawah Platform
            </h1>

            <p className="mt-6 text-lg md:text-xl text-zinc-300 leading-relaxed">
              منصة نواة هي بنية رقمية حضارية تهدف إلى تمكين الإنسان،
              وخصوصًا المرأة والشباب، عبر تقنيات Web3 والاقتصاد اللامركزي،
              وبناء قيمة إنسانية مستدامة.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 rounded-xl bg-nawah-gold text-black font-semibold hover:opacity-90 transition">
                دخول المنصة
              </button>

              <button className="px-8 py-3 rounded-xl border border-nawah-silver text-nawah-silver hover:bg-white/10 transition">
                الوثيقة البيضاء
              </button>
            </div>
          </div>
        </section>

        {/* ================= VISION ================= */}
        <section className="py-24 border-t border-white/10">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-nawah-gold">
              الرؤية
            </h2>

            <p className="mt-6 text-lg text-zinc-300 leading-relaxed">
              نؤمن في نواة بأن التقنية ليست مجرد أدوات،
              بل وسيلة لبناء جسور حضارية، وتمكين المجتمعات،
              وتحقيق توازن بين الابتكار والقيم الإنسانية.
            </p>
          </div>
        </section>

        {/* ================= WEB3 ================= */}
        <section className="py-24 bg-black/40 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-nawah-gold">
              Web3 & الاقتصاد اللامركزي
            </h2>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-black/60 border border-white/10">
                <h3 className="text-xl font-semibold text-nawah-silver">
                  اللامركزية
                </h3>
                <p className="mt-4 text-zinc-300 text-sm leading-relaxed">
                  تمكين المستخدم من امتلاك أصوله وقراراته
                  دون وسطاء أو تحكم مركزي.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black/60 border border-white/10">
                <h3 className="text-xl font-semibold text-nawah-silver">
                  الشفافية
                </h3>
                <p className="mt-4 text-zinc-300 text-sm leading-relaxed">
                  كل معاملة وكل قيمة يمكن التحقق منها
                  عبر تقنيات البلوكشين.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black/60 border border-white/10">
                <h3 className="text-xl font-semibold text-nawah-silver">
                  التمكين الرقمي
                </h3>
                <p className="mt-4 text-zinc-300 text-sm leading-relaxed">
                  أدوات مالية وتقنية تمنح الأفراد
                  فرصًا عادلة للنمو والمشاركة.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= IMPACT ================= */}
        <section className="py-24 border-t border-white/10">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-nawah-gold">
              الأثر المجتمعي
            </h2>

            <p className="mt-6 text-lg text-zinc-300 leading-relaxed">
              تسعى نواة إلى دعم المرأة والشباب،
              وتعزيز الاقتصاد الإبداعي،
              وربط التقنية بالثقافة والفن والمعرفة،
              لبناء مستقبل أكثر عدلًا واستدامة.
            </p>
          </div>
        </section>

      </main>

      {/* ================= FOOTER COMPONENT ================= */}
      <Footer />
    </>
  );
}
