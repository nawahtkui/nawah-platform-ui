import React from "react";

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto p-6 space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Welcome to Nawah</h1>
        <p className="text-lg text-gray-700">
          Nawah is a cultural-driven digital platform empowering identity, creativity, and community through technology.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Learn More
        </button>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Our Vision</h2>
        <p>
          Combining heritage, innovation, and social impact to create meaningful digital experiences for artists, communities, and visionaries.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 border rounded shadow">
          <h3 className="text-xl font-bold">Culture First</h3>
          <p>Preserving and celebrating cultural heritage in digital form.</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h3 className="text-xl font-bold">Identity</h3>
          <p>Empowering creators and communities through meaningful engagement.</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h3 className="text-xl font-bold">Community</h3>
          <p>Building spaces where people collaborate and innovate together.</p>
        </div>
      </section>
    </main>
  );
}
