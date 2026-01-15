"use client";

import { useEffect, useState } from "react";

export default function WelcomeBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("nawah_welcome_seen");
    if (!seen) {
      setVisible(true);
      localStorage.setItem("nawah_welcome_seen", "true");
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-md w-[90%]
                    bg-black/80 backdrop-blur border border-white/10
                    rounded-2xl p-4 animate-fade-up">
      <p className="text-sm text-zinc-300">
        مرحبًا بك في <span className="text-nawah-gold font-semibold">Nawah Platform</span>  
        <br />
        منصة رقمية حضارية لبناء مستقبل إنساني مستدام.
      </p>

      <button
        onClick={() => setVisible(false)}
        className="mt-3 text-xs text-nawah-gold hover:underline"
      >
        فهمت
      </button>
    </div>
  );
}
