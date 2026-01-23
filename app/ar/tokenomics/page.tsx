import React from "react";

export default function TokenomicsPageAr() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold text-center">الرمز الرقمي</h1>

      <section>
        <h2 className="text-2xl font-semibold">نواة توكن (NWTK)</h2>
        <p>الإجمالي: 100,000,000 NWTK</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border rounded shadow">
          <h3 className="font-bold">الفريق</h3>
          <p>10% مخصص للفريق المؤسس وفريق التطوير.</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h3 className="font-bold">المجتمع</h3>
          <p>50% مخصص لتوزيع المكافآت على المجتمع.</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h3 className="font-bold">المنظومة</h3>
          <p>30% مخصص لتطوير المنصة والشراكات.</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h3 className="font-bold">التسويق</h3>
          <p>10% للحملات التسويقية والترويجية.</p>
        </div>
      </section>

      <p className="text-sm text-gray-600 mt-4">
        ملاحظة: معلومات تعريفية فقط – لا توجد معاملات مباشرة بعد.
      </p>
    </main>
  );
}
