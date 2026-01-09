import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

/* ================= Typography ================= */

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

/* ================= Metadata / SEO ================= */

export const metadata: Metadata = {
  title: "Nawah Platform | منصة نواة",
  description:
    "منصة نواة هي بنية رقمية حضارية تهدف إلى تمكين الإنسان، وخصوصًا المرأة والشباب، عبر التقنية والمعرفة وبناء منظومة إنسانية مستدامة.",
  keywords: [
    "Nawah",
    "منصة نواة",
    "تمكين",
    "منصات رقمية",
    "تقنية",
    "منظومة حضارية",
  ],
  authors: [{ name: "Nawah Platform" }],
  openGraph: {
    title: "Nawah Platform | منصة نواة",
    description:
      "منصة رقمية حضارية لبناء منظومة إنسانية مستدامة.",
    url: "https://nawah-platform-ui-nine.vercel.app",
    siteName: "Nawah Platform",
    locale: "ar_AR",
    type: "website",
  },
};

/* ================= Root Layout ================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
