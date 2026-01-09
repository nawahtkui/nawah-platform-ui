"use client";

import { useEffect, useState } from "react";
import { connectWallet, getConnectedWallet } from "../lib/wallet";

export default function Navbar() {
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    setAddress(getConnectedWallet());
  }, []);

  const handleConnect = async () => {
    const addr = await connectWallet();
    if (addr) setAddress(addr);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide select-none">
          <span className="text-nawah-gold">Nawah</span>
          <span className="text-nawah-silver"> Platform</span>
        </div>

        {/* Actions */}
        {address ? (
          <a
            href="/dashboard"
            className="px-4 py-2 rounded-lg bg-nawah-gold text-black text-sm font-semibold"
          >
            {address.slice(0, 6)}...{address.slice(-4)}
          </a>
        ) : (
          <button
            onClick={handleConnect}
            className="px-4 py-2 rounded-lg bg-nawah-gold text-black text-sm font-semibold hover:opacity-90 transition"
          >
            ربط المحفظة
          </button>
        )}
      </div>
    </nav>
  );
}
