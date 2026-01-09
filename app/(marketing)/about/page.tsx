"use client";

import { useEffect } from "react";

import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

export default function Home() {

// ================= SCROLL ANIMATION =================

useEffect(() => {

const elements = document.querySelectorAll("[data-animate]");

const observer = new IntersectionObserver(

(entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {

entry.target.classList.add("animate-in");

observer.unobserve(entry.target);

}

});

},

{ threshold: 0.2 }

);

elements.forEach((el) => observer.observe(el));

return () => observer.disconnect();

}, []);

return (

<>

<Navbar />

<main className="bg-gradient-to-b from-black via-zinc-900 to-black text-white pt-32">

{/* ================= HERO ================= */}

<section className="min-h-screen flex items-center justify-center">

<div className="max-w-3xl text-center px-6">

<h1 className="text-4xl md:text-6xl font-bold tracking-tight text-nawah-gold">

Nawah Platform

</h1>

<p className="mt-6 text-lg md:text-xl text-zinc-300 leading-relaxed">

منصة نواة هي بنية رقمية حضارية تهدف إلى تمكين الإنسان،

وخصوصًا المرأة والشباب، عبر تقنيات Web3 والاقتصاد اللامركزي،

وبناء قيمة إنسانية مستدامة.

</p>

<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

<a

href="/dashboard"

className="px-8 py-3 rounded-xl bg-nawah-gold text-black font-semibold hover:opacity-90 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 ease-out"

>

دخول المنصة

</a>

<a

href="/whitepaper"

className="px-8 py-3 rounded-xl border border-nawah-silver text-nawah-silver hover:bg-white/10 hover:border-nawah-gold hover:text-nawah-gold active:scale-[0.97] transition-all duration-200 ease-out"

>

الوثيقة البيضاء

</a>

</div>

</div>

</section>

{/* ================= VISION ================= */}

<section

data-animate

className="py-24 border-t border-white/10 opacity-0 translate-y-6 transition-all duration-700"

>

<div className="max-w-5xl mx-auto px-6 text-center">

<h2 className="text-3xl md:text-4xl font-bold text-nawah-gold">

الرؤية

</h2>

<p className="mt-6 text-lg text-zinc-300 leading-relaxed">

نؤمن في نواة بأن التقنية ليست مجرد أدوات،

بل وسيلة لبناء جسور حضارية، وتمكين المجتمعات،

وتحقيق توازن بين الابتكار والقيم الإنسانية.

</p>

</div>

</section>

{/* ================= WEB3 ================= */}

<section

data-animate

className="py-24 bg-black/40 border-t border-white/10 opacity-0 translate-y-6 transition-all duration-700"

>

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-3xl md:text-4xl font-bold text-center text-nawah-gold">

Web3 & الاقتصاد اللامركزي

</h2>

<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">

{[

{

title: "اللامركزية",

text: "تمكين المستخدم من امتلاك أصوله وقراراته دون وسطاء أو تحكم مركزي.",

},

{

title: "الشفافية",

text: "كل معاملة وكل قيمة يمكن التحقق منها عبر تقنيات البلوكشين.",

},

{

title: "التمكين الرقمي",

text: "أدوات مالية وتقنية تمنح الأفراد فرصًا عادلة للنمو والمشاركة.",

},

].map((item, i) => (

<div

key={i}

data-animate

style={{ transitionDelay: `${i * 150}ms` }}

className="opacity-0 translate-y-6 p-6 rounded-2xl bg-black/60 border border-white/10 hover:border-nawah-gold/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-nawah-gold/10 transition-all duration-700"

>

<h3 className="text-xl font-semibold text-nawah-silver">

{item.title}

</h3>

<p className="mt-4 text-zinc-300 text-sm leading-relaxed">

{item.text}

</p>

</div>

))}

</div>

</div>

</section>

{/* ================= ONBOARDING ================= */}

<section className="py-20 border-t border-white/10">

<div className="max-w-5xl mx-auto px-6 text-center">

<p className="text-sm text-zinc-400 mb-3">

كيف تبدأ رحلتك مع نواة

</p>

<h2 className="text-3xl md:text-4xl font-bold text-nawah-gold">

خطوات بسيطة… أثر عميق

</h2>

<div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">

{[

"تعرّف على رؤية نواة وقيمها الإنسانية والتقنية.",

"استكشف المنصة والمحتوى وواجهات الاستخدام.",

"كن جزءًا من منظومة نواة وبناء المستقبل.",

].map((text, i) => (

<div

key={i}

data-animate

style={{ transitionDelay: `${i * 150}ms` }}

className="opacity-0 translate-y-6 p-6 rounded-2xl hover:bg-white/5 transition-all duration-700"

>

<div className="text-nawah-gold text-2xl font-bold">

{["①", "②", "③"][i]}

</div>

<h3 className="mt-3 text-lg font-semibold">

{["اكتشف", "تفاعل", "انضم"][i]}

</h3>

<p className="mt-2 text-sm text-zinc-400 leading-relaxed">

{text}

</p>

{i === 2 && (

<a

href="/dashboard"

className="mt-4 inline-block text-sm text-nawah-gold hover:underline"

>

ابدأ الآن →

</a>

)}

</div>

))}

</div>

</div>

</section>

{/* ================= IMPACT ================= */}

<section

data-animate

className="py-24 border-t border-white/10 opacity-0 translate-y-6 transition-all duration-700"

>

<div className="max-w-5xl mx-auto px-6 text-center">

<h2 className="text-3xl md:text-4xl font-bold text-nawah-gold">

الأثر المجتمعي

</h2>

<p className="mt-6 text-lg text-zinc-300 leading-relaxed">

تسعى نواة إلى دعم المرأة والشباب،

وتعزيز الاقتصاد الإبداعي،

وربط التقنية بالثقافة والفن والمعرفة،

لبناء مستقبل أكثر عدلًا واستدامة.

</p>

</div>

</section>

</main>

<Footer />

</>

);

}

