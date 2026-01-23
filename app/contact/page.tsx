import React from "react";

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold text-center">Contact / Community</h1>

      <section>
        <p>Join our community and follow Nawah on social media:</p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li><a href="#" className="text-blue-600 hover:underline">Discord</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">Twitter</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">Telegram</a></li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-6">Send us a Message</h2>
        <form className="space-y-4 mt-2">
          <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
          <textarea placeholder="Message" className="w-full p-2 border rounded" rows={4}></textarea>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
