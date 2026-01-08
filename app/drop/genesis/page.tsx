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

        {/* 🔢 Early Bird Counter */}
        <GenesisCounter soldEarly={0} />

        {/* Pricing */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 space-y-3 text-left">
          <p>• Total supply: <strong>50 Genesis NFTs</strong></p>
          <p>• Early Bird (first 10): <strong>25 USDT</strong></p>
          <p>• Standard price: <strong>50 USDT</strong></p>
        </div>

        {/* 💰 Payment Section */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 space-y-3 text-left">
          <h3 className="text-xl font-semibold">Payment (USDT)</h3>

          <p>
            • Network: <strong>BEP20 (BNB Smart Chain)</strong>
          </p>

          <p className="break-all">
            • Wallet Address (EVM – MEW / MetaMask compatible):<br />
            <strong>0x66fd1BEaED419Bd6c961a99CeEdB7189219e3b41</strong>
          </p>

          <p className="text-sm text-zinc-400">
            After payment, submit your TX Hash via the mint request form for confirmation.
          </p>
        </div>

        {/* Actions */}
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

