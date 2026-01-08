export default function WhitelistPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <section className="mx-auto max-w-3xl space-y-10 text-center">

        <h1 className="text-4xl font-bold">
          Genesis Whitelist Status
        </h1>

        <p className="text-zinc-400">
          Early supporters are joining the Genesis phase.
        </p>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <p className="text-lg">
            🔒 First 10 NFTs at <strong>25 USDT</strong>
          </p>
          <p className="text-sm text-zinc-400 mt-2">
            After that, price increases to 50 USDT
          </p>
        </div>

        <a
          href="/wallet"
          className="inline-block rounded-xl bg-white text-black px-6 py-3 font-medium"
        >
          Request Genesis Mint
        </a>

      </section>
    </main>
  );
}

