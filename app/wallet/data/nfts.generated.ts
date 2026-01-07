
export type GeneratedNFT = {
  id: string;
  name: string;
  description: string;
  image: string;
  rarity: "Common" | "Rare" | "Legendary";
  collection: "Genesis" | "Culture" | "Utility";
};

export const generatedNFTs: GeneratedNFT[] = [
  {
    id: "genesis-001",
    name: "Nawah Genesis #001",
    description: "The first spark of the Nawah platform.",
    image: "/nfts/genesis-001.png",
    rarity: "Legendary",
    collection: "Genesis",
  },
  {
    id: "genesis-002",
    name: "Nawah Genesis #002",
    description: "A symbol of origin and continuity.",
    image: "/nfts/genesis-002.png",
    rarity: "Rare",
    collection: "Genesis",
  },
  {
    id: "culture-001",
    name: "Nawah Culture #001",
    description: "A tribute to heritage and empowerment.",
    image: "/nfts/culture-001.png",
    rarity: "Rare",
    collection: "Culture",
  },
];
