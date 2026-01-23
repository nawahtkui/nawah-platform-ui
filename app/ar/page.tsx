import React from "react";

export default function HomePageAr() {
  return (
    <main className="max-w-5xl mx-auto p-6 space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold">مرحبًا بكم في نواة</h1>
        <p className="text-lg text-gray-700">
          نواة هي منصة رقمية ثقافية تهدف إلى تمكين الهوية والإبداع والمجتمع من خلال التكنولوجيا.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          اعرف المزيد
        </button>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">رؤيتنا</h2>
        <p>
          دمج التراث، الابتكار، والأثر الاجتماعي لإنشاء تجارب رقمية ذات معنى للفنانات، المجتمعات، والمبدعين.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 border rounded shadow">
          <h3 className="text-xl font-bold">الثقافة أولًا</h3>
          <p>الحفاظ على التراث الثقافي والاحتفال به في الشكل الرقمي.</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h3 className="text-xl font-bold">الهوية</h3>
          <p>تمكين المبدعين والمجتمعات من خلال المشاركة الهادفة.</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h3 className="text-xl font-bold">المجتمع</h3>
          <p>بناء مساحات يتعاون فيها الناس ويبدعون معًا.</p>
        </div>
      </section>
    </main>
  );
}
