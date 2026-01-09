import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthGuard from "../components/AuthGuard";

export default function Dashboard() {
  return (
    <AuthGuard>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white pt-32">
        <div className="max-w-7xl mx-auto px-6">

          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-nawah-gold">
              لوحة التحكم
            </h1>
            <p className="mt-3 text-zinc-400">
              نظرة عامة على حسابك ونشاطك داخل منصة نواة
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 rounded-2xl bg-black/60 border border-white/10">
              <h3 className="text-sm text-zinc-400">الرصيد</h3>
              <p className="mt-2 text-2xl font-bold text-nawah-gold">
                — NWTK
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/60 border border-white/10">
              <h3 className="text-sm text-zinc-400">المعاملات</h3>
              <p className="mt-2 text-2xl font-bold text-nawah-silver">
                0
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/60 border border-white/10">
              <h3 className="text-sm text-zinc-400">الحالة</h3>
              <p className="mt-2 text-2xl font-bold text-zinc-300">
                غير متصل
              </p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </AuthGuard>
  );
}
