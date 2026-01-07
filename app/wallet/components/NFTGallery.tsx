import Link from "next/link";
import generatedNFTs from "../data/nfts.generated.json";

type GeneratedNFT = {
  id: string;
  name: string;
  description: string;
  image: string;
  rarity: string;
  collection: string;
};

export default function NFTGallery() {
  const nfts = generatedNFTs as GeneratedNFT[];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {nfts.map((nft) => (
        <div
          key={nft.id}
          className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-3 space-y-2"
        >
          {/* NFT Card */}
          <Link href={`/wallet/nft/${nft.id}`} className="block">
            <div className="aspect-square bg-zinc-100 dark:bg-zinc-800 rounded-lg mb-2 flex items-center justify-center text-xs text-zinc-400">
              NFT Image
            </div>

            <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              {nft.name}
            </div>

            <div className="text-xs text-zinc-500">
              {nft.description}
            </div>
          </Link>

          {/* Footer */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
              {nft.rarity}
            </span>

            {/* Request Mint → Google Form */}
            <a
              href="https://forms.gle/s8UGTXX8Dhrsfamh6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs rounded-lg bg-black text-white px-3 py-1 dark:bg-white dark:text-black"
            >
              Request Mint
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

