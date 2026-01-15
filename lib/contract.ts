import { BrowserProvider, Contract, formatUnits } from "ethers";
import { getEthereum } from "./wallet";

/* ضع القيم الحقيقية لاحقًا */
const TOKEN_ADDRESS = "0xYOUR_TOKEN_ADDRESS";
const TOKEN_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function decimals() view returns (uint8)",
];

export async function getTokenBalance(userAddress: string) {
  const ethereum = getEthereum();
  if (!ethereum) return null;

  const provider = new BrowserProvider(ethereum);
  const contract = new Contract(TOKEN_ADDRESS, TOKEN_ABI, provider);

  const balance = await contract.balanceOf(userAddress);
  const decimals = await contract.decimals();

  return formatUnits(balance, decimals);
}
