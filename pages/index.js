import { useEffect, useState } from "react";

export default function Home() {
  const [showNav, setShowNav] = useState(true);
  const [lang, setLang] = useState("ar");
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const partnership = {
    ar: {
      title: "🤝 الشراكة مع نواة",
      text:
        "نواة ترحّب بالشراكات التي تقوم على وضوح الرؤية وبناء قيمة مشتركة تجمع بين الجدوى الاقتصادية والأثر الإنساني.",
      bullets: [
        "نماذج تعاون مرنة وقابلة للتجربة",
        "الوصول إلى فئات رقمية جديدة من المرأة والشباب",
        "شراكات تجريبية منخفضة المخاطر",
        "قيمة طويلة المدى مبنية على الثقة"
      ],
      cta: "تواصل معنا كشريك"
    },
    en: {
      title: "🤝 Partnership with Nawah",
      text:
        "Nawah welcomes partnerships built on clarity and shared value—where economic growth meets meaningful social impact.",
      bullets: [
        "Flexible collaboration models",
        "Access to new digital communities",
        "Low-risk pilot partnerships",
        "Long-term shared value built on trust"
      ],
      cta: "Become a Partner"
    }
  };

  const roadmap = {
    ar: [
      { phase: "المرحلة الأولى", desc: "إطلاق الموقع وبناء الهوية الرقمية" },
      { phase: "المرحلة الثانية", desc: "بناء الشراكات والتجارب الأولية" },
      { phase: "المرحلة الثالثة", desc: "تطوير الخدمات والمنصة التفاعلية" },
      { phase: "المرحلة الرابعة", desc: "التوسع وبناء الأثر المستدام" }
    ],
    en: [
      { phase: "Phase One", desc: "Launch the website and digital identity" },
      { phase: "Phase Two", desc: "Build partnerships and pilot programs" },
      { phase: "Phase Three", desc: "Develop platform services and interaction" },
      { phase: "Phase Four", desc: "Scale and build sustainable impact" }
    ]
  };

  return (
    <>
      {/* Navigation */}
      <nav style={{ ...navStyle, top: showNav ? "0" : "-100px" }}>
        <strong>نواة</strong>
        <ul style={navList}>
          <li><a href="#home">الرئيسية</a></li>
          <li><a href="#about">عن نواة</a></li>
          <li><a href="#partnership">الشراكات</a></li>
          <li><a href="#roadmap">خارطة الطريق</a></li>
          <li><a href="#contact">تواصل</a></li>
        </ul>
      </nav>

      {/* Language Toggle */}
      <div style={langToggle}>
        <button onClick={() => setLang("ar")} style={lang === "ar" ? activeBtn : btn}>AR</button>
        <button onClick={() => setLang("en")} style={lang === "en" ? activeBtn : btn}>EN</button>
      </div>

      {/* Hero */}
      <section id="home" style={heroStyle}>
        <h1>نواة</h1>
        <p>منصة تمكين المرأة والشباب عبر التقنية والهوية</p>
      </section>

      {/* About */}
      <section id="about" style={sectionStyle}>
        <h2>{lang === "ar" ? "عن نواة" : "About Nawah"}</h2>
        <p style={textWidth}>
          {lang === "ar"
            ? "مشروع رقمي ناشئ يجمع بين التقنية الحديثة والقيم الإنسانية لبناء أثر اقتصادي مستدام."
            : "A digital startup blending modern technology with human values to create sustainable economic impact."}
        </p>
      </section>

      {/* Partnership */}
      <section id="partnership" style={altSection}>
        <h2>{partnership[lang].title}</h2>
        <p style={textWidth}>{partnership[lang].text}</p>

        <ul style={cardList}>
          {partnership[lang].bullets.map((b, i) => (
            <li key={i} style={card}>{b}</li>
          ))}
        </ul>

        <a href="#contact">
          <button style={ctaStyle}>{partnership[lang].cta}</button>
        </a>
      </section>

      {/* Roadmap */}
      <section id="roadmap" style={sectionStyle}>
        <h2>{lang === "ar" ? "🗺️ خارطة الطريق" : "🗺️ Roadmap"}</h2>

        <div style={roadmapGrid}>
          {roadmap[lang].map((step, i) => (
            <div key={i} style={roadmapCard}>
              <strong>{step.phase}</strong>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={altSection}>
        <h2>{lang === "ar" ? "📩 تواصل معنا" : "📩 Contact Us"}</h2>
        <p style={textWidth}>
          {lang === "ar"
            ? "يسعدنا التواصل مع الشركات والشركاء لمناقشة فرص التعاون."
            : "We welcome messages from companies and partners to explore collaboration opportunities."}
        </p>

        <form style={formStyle}>
          <input style={inputStyle} placeholder={lang === "ar" ? "الاسم الكامل" : "Full Name"} />
          <input style={inputStyle} placeholder={lang === "ar" ? "البريد الإلكتروني" : "Email"} />
          <textarea style={inputStyle} rows="4" placeholder={lang === "ar" ? "رسالتك" : "Your message"} />
          <button style={ctaStyle}>{lang === "ar" ? "إرسال" : "Send"}</button>
        </form>
      </section>

      {/* Footer */}
      <footer style={footerStyle}>
        © 2026 Nawah — All Rights Reserved
      </footer>
    </>
  );
}

/* ===== Styles ===== */

const navStyle = {
  position: "fixed",
  width: "100%",
  background: "#fff",
  padding: "12px 24px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  transition: "top 0.3s",
  zIndex: 1000
};

const navList = {
  display: "flex",
  gap: "16px",
  listStyle: "none"
};

const langToggle = {
  marginTop: "80px",
  textAlign: "center"
};

const btn = {
  margin: "0 6px",
  padding: "6px 14px",
  border: "1px solid #ccc",
  background: "transparent",
  cursor: "pointer"
};

const activeBtn = {
  ...btn,
  background: "#000",
  color: "#fff"
};

const heroStyle = {
  padding: "120px 20px",
  textAlign: "center"
};

const sectionStyle = {
  padding: "80px 20px",
  textAlign: "center"
};

const altSection = {
  ...sectionStyle,
  background: "#f7f7f7"
};

const textWidth = {
  maxWidth: "700px",
  margin: "16px auto"
};

const cardList = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "16px",
  margin: "32px 0",
  padding: 0,
  listStyle: "none"
};

const card = {
  padding: "16px",
  background: "#fff",
  borderRadius: "6px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.05)"
};

const roadmapGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "16px",
  marginTop: "32px"
};

const roadmapCard = {
  padding: "20px",
  border: "1px solid #eee",
  borderRadius: "6px"
};

const formStyle = {
  maxWidth: "500px",
  margin: "32px auto",
  display: "flex",
  flexDirection: "column",
  gap: "12px"
};

const inputStyle = {
  padding: "12px",
  border: "1px solid #ccc",
  borderRadius: "4px"
};

const ctaStyle = {
  padding: "12px 28px",
  background: "#000",
  color: "#fff",
  border: "none",
  cursor: "pointer"
};

const footerStyle = {
  padding: "24px",
  textAlign: "center",
  background: "#000",
  color: "#fff"
};


