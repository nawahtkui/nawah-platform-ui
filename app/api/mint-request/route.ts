import { NextResponse } from "next/server";

const RECEIVER_WALLET =
  "0x66fd1BEaED419Bd6c961a99CeEdB7189219e3b41";

const BSCSCAN_API = "https://api.bscscan.com/api";
const API_KEY = process.env.BSCSCAN_API_KEY;

export async function POST(req: Request) {
  const { txHash, wallet } = await req.json();

  if (!txHash || !wallet) {
    return NextResponse.json(
      { message: "Missing fields" },
      { status: 400 }
    );
  }

  // 🔍 Fetch TX info
  const url = `${BSCSCAN_API}?module=proxy&action=eth_getTransactionByHash&txhash=${txHash}&apikey=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();

  if (!data.result) {
    return NextResponse.json(
      { message: "Transaction not found" },
      { status: 404 }
    );
  }

  if (
    data.result.to?.toLowerCase() !==
    RECEIVER_WALLET.toLowerCase()
  ) {
    return NextResponse.json(
      { message: "Invalid receiver address" },
      { status: 400 }
    );
  }

  // ⚠️ في المرحلة التالية:
  // - تحقق من USDT contract
  // - تحقق من القيمة (25 / 50)

  console.log("✅ Mint request:", {
    from: wallet,
    txHash,
  });

  return NextResponse.json({
    message: "Mint request submitted successfully",
  });
}
