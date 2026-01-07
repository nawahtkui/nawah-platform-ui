import fs from "fs";
import path from "path";

type Rarity = "Common" | "Rare" | "Legendary";
type Collection = "Genesis" | "Culture" | "Utility";

const TOTAL_NFTS = 50;

const rarities: Rarity[] = ["Common", "Rare", "Legendary"];
const collections: Collection[] = ["Genesis", "Culture", "Utility"];

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function rarityByIndex(index: number): Rarity {
  if (index < 3) return "Legendary";
  if (index < 15) return "Rare";
  return "Common";
}

const generatedNFTs = Array.from({ length: TOTAL_NFTS }).map((_, i) => {
  const rarity = rarityByIndex(i);

  return {
    id: `nawah-${String(i + 1).padStart(3, "0")}`,
    name: `Nawah Genesis #${String(i + 1).padStart(3, "0")}`,
    description: "A generated NFT from the Nawah platform.",
    image: `/nfts/nawah-${String(i + 1).padStart(3, "0")}.png`,
    rarity,
    collection: pickRandom(collections),
  };
});

const outputPath = path.join(
  process.cwd(),
  "app",
  "wallet",
  "data",
  "nfts.generated.json"
);

fs.writeFileSync(outputPath, JSON.stringify(generatedNFTs, null, 2));

console.log(`✅ Generated ${TOTAL_NFTS} NFTs`);
console.log(`📁 Saved to ${outputPath}`);
