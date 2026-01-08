import GenesisCounter from "@/app/components/GenesisCounter";

export default function GenesisDropPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <section className="mx-auto max-w-4xl space-y-16 text-center">

        <h1 className="text-4xl font-bold">
          Nawah Genesis Drop
        </h1>

        <p className="text-zinc-400 text-lg">
          Limited Genesis NFTs for early supporters.
        </p>

        {/* 🔢 Counter */}
        <GenesisCounter soldEarly={0} />

        {/* Pricing */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 space-y-3 text-left">
          <p>• Total supply: <strong>50 Genesis NFTs</strong></p>
          <p>• First 10: <strong>25 USDT</strong></p>
          <p>• Remaining: <strong>50 USDT</strong></p>
        </div>

        <div className="flex justify-center gap-4">
          <a
            href="/wallet"
            className="rounded-xl bg-white text-black px-6 py-3 font-medium"
          >
            View NFTs
          </a>

          <a
            href="/wallet"
            className="rounded-xl border border-white/20 px-6 py-3 font-medium"
          >
            Request Mint
          </a>
        </div>

      </section>
    </main>
  );
}

