import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white flex items-center justify-center pt-32">
        <div className="max-w-3xl text-center px-6">
          
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-nawah-gold">
            Nawah Platform
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg md:text-xl text-zinc-300 leading-relaxed">
            منصة نواة هي بنية رقمية حضارية تهدف إلى تمكين الإنسان،
            وخصوصًا المرأة والشباب، عبر تقنيات Web3 والاقتصاد اللامركزي،
            وبناء اقتصاد رقمي يحمل قيمة ثقافية وإنسانية مستدامة.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            
            {/* Primary Button */}
            <button className="px-8 py-3 rounded-xl bg-nawah-gold text-black font-semibold hover:opacity-90 transition">
              دخول المنصة
            </button>

            {/* Secondary Button */}
            <button className="px-8 py-3 rounded-xl border border-nawah-silver text-nawah-silver hover:bg-white/10 transition">
              الوثيقة البيضاء
            </button>

          </div>

          {/* Footer Note */}
          <p className="mt-12 text-sm text-zinc-500">
            © {new Date().getFullYear()} Nawah Platform — All rights reserved
          </p>
        </div>
      </main>
    </>
  );
}
