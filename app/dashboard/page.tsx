"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthGuard from "../components/AuthGuard";
import { getConnectedWallet } from "../lib/wallet";
import { getTokenBalance } from "../lib/contract";

export default function Dashboard() {
  const [balance, setBalance] = useState<string>("—");
  const [status, setStatus] = useState<string>("غير متصل");

  useEffect(() => {
    const loadData = async () => {
      const address = getConnectedWallet();
      if (!address) return;

      setStatus("متصل");

      try {
        const bal = await getTokenBalance(address);
        if (bal !== null) {
          setBalance(bal);
        }
      } catch (err) {
        console.error("Failed to load balance:", err);
        setBalance("—");
      }
    };

    loadData();
  }, []);

  return (
    <AuthGuard>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white pt-32">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-nawah-gold">
              لوحة التحكم
            </h1>
            <p className="mt-3 text-zinc-400">
              نظرة عامة على حسابك ونشاطك داخل منصة نواة
            </p>
          </section>

          {/* Stats */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

            {/* Balance */}
            <div className="p-6 rounded-2xl bg-black/60 border border-white/10">
              <h3 className="text-sm text-zinc-400">الرصيد</h3>
              <p className="mt-2 text-2xl font-bold text-nawah-gold">
                {balance} NWTK
              </p>
            </div>

            {/* Transactions */}
            <div className="p-6 rounded-2xl bg-black/60 border border-white/10">
              <h3 className="text-sm text-zinc-400">المعاملات</h3>
              <p className="mt-2 text-2xl font-bold text-nawah-silver">
                0
              </p>
            </div>

            {/* Status */}
            <div className="p-6 rounded-2xl bg-black/60 border border-white/10">
              <h3 className="text-sm text-zinc-400">الحالة</h3>
              <p className="mt-2 text-2xl font-bold text-zinc-300">
                {status}
              </p>
            </div>

          </section>

        </div>
      </main>

      <Footer />
    </AuthGuard>
  );
}
