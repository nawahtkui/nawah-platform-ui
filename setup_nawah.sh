#!/bin/bash

# إنشاء المجلدات
mkdir -p app/dashboard/components
mkdir -p app/about
mkdir -p "app/(marketing)/about"

# 1️⃣ app/layout.tsx
cat > app/layout.tsx << 'EOF'
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar">
      <body>
        {children}
      </body>
    </html>
  );
}
EOF

# 2️⃣ app/page.tsx
cat > app/page.tsx << 'EOF'
export default function HomePage() {
  return (
    <main>
      <h1>مرحبًا بك في مشروع نواة</h1>
    </main>
  );
}
EOF

# 3️⃣ app/about/page.tsx
cat > app/about/page.tsx << 'EOF'
export default function AboutPage() {
  return (
    <main>
      <h1>عن المشروع</h1>
      <p>هذه الصفحة العامة للمشروع.</p>
    </main>
  );
}
EOF

# 4️⃣ app/(marketing)/about/page.tsx
cat > "app/(marketing)/about/page.tsx" << 'EOF'
export default function MarketingAboutPage() {
  return (
    <main>
      <h1>عن المشروع - التسويق</h1>
      <p>هذه الصفحة للمحتوى التسويقي.</p>
    </main>
  );
}
EOF

# 5️⃣ app/dashboard/page.tsx
cat > app/dashboard/page.tsx << 'EOF'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <main>
        <h1>لوحة التحكم</h1>
      </main>
      <Footer />
    </>
  );
}
EOF

# 6️⃣ app/dashboard/components/Navbar.tsx
cat > app/dashboard/components/Navbar.tsx << 'EOF'
export default function Navbar() {
  return (
    <nav>
      <p>شريط التنقل</p>
    </nav>
  );
}
EOF

# 7️⃣ app/dashboard/components/Footer.tsx
cat > app/dashboard/components/Footer.tsx << 'EOF'
export default function Footer() {
  return (
    <footer>
      <p>حقوق النشر © 2026 نواة</p>
    </footer>
  );
}
EOF

# 8️⃣ app/globals.css
cat > app/globals.css << 'EOF'
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  direction: rtl;
}

main {
  padding: 2rem;
}

nav, footer {
  background-color: #f0f0f0;
  padding: 1rem;
  text-align: center;
}
EOF

echo "✅ تم إنشاء جميع الملفات والمجلدات بنجاح!"
