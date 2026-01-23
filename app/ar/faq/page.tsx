import React from "react";

export default function FAQPageAr() {
  const faqs = [
    { q: "ما هي نواة؟", a: "نواة هي منصة رقمية ثقافية تهدف لتمكين الهوية والإبداع والمجتمع من خلال التكنولوجيا." },
    { q: "ما هي أهداف المشروع؟", a: "الحفاظ على الثقافة، تمكين المبدعين، وبناء تجارب رقمية ذات معنى." },
    { q: "هل يمكن شراء NWTK الآن؟", a: "ليس بعد. المنصة لا تزال في مرحلة العرض التعريفي." },
    { q: "كيف يمكن الانضمام للمجتمع؟", a: "انضم إلى Discord أو تابعنا على وسائل التواصل للحصول على التحديثات." },
    { q: "ما هي Genesis UI؟", a: "الواجهة الأولى لنواة، تعرض رؤية المشروع وميزاته." },
  ];

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold text-center">الأسئلة الشائعة</h1>
      {faqs.map((item, index) => (
        <div key={index} className="border-b py-4">
          <h3 className="font-semibold">{item.q}</h3>
          <p className="text-gray-700 mt-1">{item.a}</p>
        </div>
      ))}
    </main>
  );
}
