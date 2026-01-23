#!/bin/bash

# الانتقال لجذر المشروع
cd ~/nawah-platform-ui

echo "⚡ تحديد نسخة Node.js المطلوبة..."
# تعديل package.json ليستخدم Node 20.x (تأكد من وجود package.json)
if ! grep -q '"engines"' package.json; then
  sed -i '/{/"a\  "engines": {\n    "node": "20.x"\n  },' package.json
fi

echo "⚡ تعيين متغير البيئة لاستخدام Webpack بدل Turbopack..."
export NEXT_PRIVATE_TURBOPACK=0

echo "⚡ تثبيت الحزم..."
npm install

echo "⚡ بناء المشروع للإنتاج باستخدام Webpack..."
NEXT_PRIVATE_TURBOPACK=0 npm run build

if [ $? -eq 0 ]; then
  echo "✅ البناء تم بنجاح!"
  echo "⚡ تشغيل المشروع محليًا للتحقق..."
  npm run dev
else
  echo "❌ فشل البناء. تحقق من الأخطاء أعلاه قبل النشر."
fi

