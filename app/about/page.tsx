import React from "react";

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold">About Nawah</h1>

      <section>
        <h2 className="text-2xl font-semibold">What is Nawah?</h2>
        <p>
          Nawah is a cultural-driven digital platform designed to explore value,
          identity, and empowerment through technology. Our mission is to combine
          heritage, innovation, and social impact to create meaningful digital
          experiences for communities, artists, and visionaries.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">The Nawah Story</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>2023 – The Idea Emerges:</strong> The concept of Nawah began
            with the vision of connecting culture, technology, and empowerment
            in a single platform.
          </li>
          <li>
            <strong>2024 – Cultural Vision & Design:</strong> We developed Nawah’s
            design and cultural philosophy, integrating heritage-inspired aesthetics
            with modern Web3-inspired tools.
          </li>
          <li>
            <strong>2025 – Genesis Platform UI Launch:</strong> The first public
            presentation of Nawah’s platform interface was completed.
          </li>
          <li>
            <strong>Next – Ecosystem Expansion:</strong> Future phases will focus
            on expanding Nawah into a full digital ecosystem.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Why Nawah Exists</h2>
        <p>
          The world of technology often overlooks culture, identity, and social impact.
          Nawah exists to highlight cultural heritage, empower artists, and build
          meaningful digital spaces.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Looking Ahead</h2>
        <p>
          Nawah is just the beginning. Our journey will continue to bring more experiences,
          tools, and opportunities to our users. The platform is designed to grow alongside
          its community.
        </p>
      </section>
    </main>
  );
}
