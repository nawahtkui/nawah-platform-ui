export default function GenesisDropPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <section className="mx-auto max-w-4xl space-y-20">

        {/* ===== ENGLISH SECTION ===== */}
        <section className="space-y-8 text-center">
          <h1 className="text-4xl font-bold">
            Nawah Genesis Drop
          </h1>

          <p className="text-zinc-400 text-lg">
            The first digital artifacts of the Nawah ecosystem.
            <br />
            Limited. Symbolic. Foundational.
          </p>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 space-y-3 text-left">
            <p>• Limited Genesis NFTs</p>
            <p>• Early access to future Nawah services</p>
            <p>• Cultural & symbolic digital ownership</p>
            <p>• Priority minting for early supporters</p>
          </div>

          <div className="flex justify-center gap-4">
            <a
              href="/wallet"
              className="rounded-xl bg-white text-black px-6 py-3 font-medium"
            >
              View Genesis NFTs
            </a>

            <a
              href="/wallet"
              className="rounded-xl border border-white/20 px-6 py-3 font-medium"
            >
              Request Mint
            </a>
          </div>

          <p className="text-xs text-zinc-500">
            Minting opens soon. Supply is limited.
          </p>
        </section>

        {/* ===== DIVIDER ===== */}
        <div className="h-px bg-zinc-800" />

        {/* ===== ARABIC SECTION ===== */}
        <section
          className="space-y-8 text-center"
          dir="rtl"
        >
          <h2 className="text-3xl font-bold">
            إطلاق نواة – المجموعة التأسيسية
          </h2>

          <p className="text-zinc-400 text-lg">
            أول أصول رقمية في منظومة نواة.
            <br />
            محدودة. رمزية. تأسيسية.
          </p>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 space-y-3 text-right">
            <p>• مجموعة NFTs تأسيسية محدودة</p>
            <p>• أولوية الوصول لخدمات نواة القادمة</p>
            <p>• ملكية رقمية ذات قيمة ثقافية ورمزية</p>
            <p>• أولوية السكّ والدخول للمبادرين الأوائل</p>
          </div>

          <div className="flex justify-center gap-4 flex-row-reverse">
            <a
              href="/wallet"
              className="rounded-xl bg-white text-black px-6 py-3 font-medium"
            >
              استعراض الرموز
            </a>

            <a
              href="/wallet"
              className="rounded-xl border border-white/20 px-6 py-3 font-medium"
            >
              طلب الانضمام
            </a>
          </div>

          <p className="text-xs text-zinc-500">
            سيتم فتح السكّ قريبًا – الكمية محدودة.
          </p>
        </section>

      </section>
    </main>
  );
}

