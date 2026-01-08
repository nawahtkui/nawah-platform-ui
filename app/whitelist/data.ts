export type WhitelistEntry = {
  rank: number;
  label: string;
  price: number;
};

export const WHITELIST_LIMIT = 50;
export const EARLY_BIRD_LIMIT = 10;

export const whitelist: WhitelistEntry[] = [
  { rank: 1, label: "Reserved", price: 25 },
  { rank: 2, label: "Reserved", price: 25 },
  { rank: 3, label: "Reserved", price: 25 },
  { rank: 4, label: "Reserved", price: 25 },
  { rank: 5, label: "Reserved", price: 25 },
  { rank: 6, label: "Reserved", price: 25 },
  { rank: 7, label: "Reserved", price: 25 },
  { rank: 8, label: "Reserved", price: 25 },
  { rank: 9, label: "Open",     price: 25 },
  { rank: 10,label: "Open",     price: 25 },

  // بعد أول 10
  { rank: 11,label: "Open",     price: 50 },
  { rank: 12,label: "Open",     price: 50 },
  { rank: 13,label: "Open",     price: 50 },
];
