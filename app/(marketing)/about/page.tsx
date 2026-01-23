import React from "react";

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold">About Nawah</h1>

      <section>
        <h2 className="text-2xl font-semibold">What is Nawah?</h2>
        <p>
          Nawah is a digital cultural platform aiming to explore value, identity, and empowerment through technology.
          We integrate heritage, innovation, and social impact to create meaningful digital experiences for communities and creators.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Our Story</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>2023 – Idea Emergence:</strong> Concept of Nawah connecting culture, technology, and empowerment.</li>
          <li><strong>2024 – Cultural Design & Vision:</strong> Development of cultural design philosophy and Genesis UI.</li>
          <li><strong>2025 – Platform Launch:</strong> First public release of Nawah interface.</li>
          <li><strong>Future – System Expansion:</strong> Expanding towards a complete digital ecosystem with tools and active community.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Why Nawah?</h2>
        <p>
          Technology often overlooks culture, identity, and social impact.
          Nawah aims to highlight cultural heritage, empower creators, and build meaningful digital spaces.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">The Future</h2>
        <p>
          Nawah is just the beginning. Our journey continues to deliver more experiences, tools, and opportunities as the platform grows with the community.
        </p>
      </section>
    </main>
  );
}

