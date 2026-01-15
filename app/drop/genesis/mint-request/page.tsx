"use client";

import { useState } from "react";

export default function MintRequestPage() {
  const [txHash, setTxHash] = useState("");
  const [wallet, setWallet] = useState("");
  const [status, setStatus] = useState<null | string>(null);

  async function submitRequest(e: React.FormEvent) {
    e.preventDefault();
    setStatus("Submitting...");

    const res = await fetch("/api/mint-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ txHash, wallet }),
    });

    const data = await res.json();
    setStatus(data.message);
  }

  return (
    <div className="max-w-xl mx-auto p-8 space-y-6">
      <h1 className="text-2xl font-bold">Genesis Mint Request</h1>

      <form onSubmit={submitRequest} className="space-y-4">
        <input
          required
          placeholder="Your Wallet Address (0x...)"
          className="w-full rounded-xl bg-zinc-900 border border-zinc-700 p-3"
          value={wallet}
          onChange={(e) => setWallet(e.target.value)}
        />

        <input
          required
          placeholder="Transaction Hash (TX)"
          className="w-full rounded-xl bg-zinc-900 border border-zinc-700 p-3"
          value={txHash}
          onChange={(e) => setTxHash(e.target.value)}
        />

        <button className="w-full rounded-xl bg-emerald-600 p-3 font-semibold">
          Submit Request
        </button>
      </form>

      {status && <p className="text-sm text-zinc-400">{status}</p>}
    </div>
  );
}
