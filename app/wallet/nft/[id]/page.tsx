type NFTPageProps = {
  params: {
    id: string;
  };
};

export default function NFTDetailsPage({ params }: NFTPageProps) {
  const { id } = params;

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black px-6 py-10">
      <section className="mx-auto max-w-3xl space-y-6">

        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          NFT Details
        </h1>

        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 space-y-4">

          <div className="aspect-square bg-zinc-100 dark:bg-zinc-800 rounded-xl flex items-center justify-center text-zinc-400">
            NFT Image
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              NFT ID
            </h2>
            <p className="font-mono text-sm text-zinc-500">
              {id}
            </p>
          </div>

          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            This NFT is part of the Nawah Genesis Collection.
          </div>

          <div className="flex gap-3 pt-4">
            <button className="rounded-xl bg-black text-white px-4 py-2 text-sm dark:bg-white dark:text-black">
              View on Blockchain
            </button>

            <button className="rounded-xl border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300">
              Back to Wallet
            </button>
          </div>

        </div>

      </section>
    </main>
  );
}
