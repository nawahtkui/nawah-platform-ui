export default function WalletPage() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black px-6 py-10">
      <section className="mx-auto max-w-4xl space-y-8">

        {/* Header */}
        <header className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            Nawah Wallet
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Manage your assets, transactions, and NFTs
          </p>
        </header>

        {/* Wallet Card */}
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm space-y-4">

          {/* Address */}
          <div>
            <span className="text-sm text-zinc-500">Wallet Address</span>
            <div className="mt-1 font-mono text-sm break-all text-zinc-900 dark:text-zinc-100">
              0x0000...0000
            </div>
          </div>

          {/* Balance */}
          <div className="flex gap-6">
            <div>
              <span className="text-sm text-zinc-500">Balance</span>
              <div className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                0.00 ETH
              </div>
            </div>

            <div>
              <span className="text-sm text-zinc-500">Network</span>
              <div className="text-sm text-zinc-900 dark:text-zinc-100">
                Ethereum
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <button
              className="rounded-xl bg-black text-white px-4 py-2 text-sm hover:bg-zinc-800 dark:bg-white dark:text-black"
            >
              Connect Wallet
            </button>

            <button
              className="rounded-xl border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300"
            >
              Send
            </button>
          </div>
        </div>

        {/* NFT Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            NFTs
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {/* Placeholder NFT */}
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 text-center text-sm text-zinc-500">
              No NFTs loaded
            </div>
          </div>
        </section>

        {/* Transactions */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Recent Transactions
          </h2>

          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 text-sm text-zinc-500">
            No transactions yet
          </div>
        </section>

      </section>
    </main>
  );
}
