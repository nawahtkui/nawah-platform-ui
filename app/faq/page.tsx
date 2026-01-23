import React from "react";

export default function FAQPage() {
  const faqs = [
    { q: "What is Nawah?", a: "Nawah is a cultural-driven digital platform empowering identity, creativity, and community through technology." },
    { q: "What are the project goals?", a: "Preserve culture, empower artists, and build meaningful digital experiences." },
    { q: "Can I buy NWTK now?", a: "Not yet. The platform is still in its presentation phase." },
    { q: "How can I join the community?", a: "Join our Discord or follow us on social media for updates." },
    { q: "What is Genesis UI?", a: "The first interface of Nawah, showcasing the project vision and features." },
  ];

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold text-center">FAQ</h1>
      {faqs.map((item, index) => (
        <div key={index} className="border-b py-4">
          <h3 className="font-semibold">{item.q}</h3>
          <p className="text-gray-700 mt-1">{item.a}</p>
        </div>
      ))}
    </main>
  );
}
