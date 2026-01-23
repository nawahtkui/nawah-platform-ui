import React from "react";

export default function TokenomicsPage() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold text-center">Tokenomics</h1>

      <section>
        <h2 className="text-2xl font-semibold">Nawah Token (NWTK)</h2>
        <p>Total Supply: 100,000,000 NWTK</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border rounded shadow">
          <h3 className="font-bold">Team</h3>
          <p>10% allocated to founding and development team.</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h3 className="font-bold">Community</h3>
          <p>50% reserved for community distribution and rewards.</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h3 className="font-bold">Ecosystem</h3>
          <p>30% allocated to platform development and partnerships.</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h3 className="font-bold">Marketing</h3>
          <p>10% for marketing and awareness campaigns.</p>
        </div>
      </section>

      <p className="text-sm text-gray-600 mt-4">
        Note: Informational only – No live transactions yet.
      </p>
    </main>
  );
}
