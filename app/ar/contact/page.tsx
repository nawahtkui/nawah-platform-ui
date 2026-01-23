import React from "react";

export default function ContactPageAr() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold text-center">تواصل معنا / المجتمع</h1>

      <section>
        <p>انضم لمجتمعنا وتابع نواة على وسائل التواصل:</p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li><a href="#" className="text-blue-600 hover:underline">Discord</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">Twitter</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">Telegram</a></li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-6">أرسل لنا رسالة</h2>
        <form className="space-y-4 mt-2">
          <input type="text" placeholder="الاسم" className="w-full p-2 border rounded" />
          <input type="email" placeholder="البريد الإلكتروني" className="w-full p-2 border rounded" />
          <textarea placeholder="الرسالة" className="w-full p-2 border rounded" rows={4}></textarea>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            إرسال الرسالة
          </button>
        </form>
      </section>
    </main>
  );
}
