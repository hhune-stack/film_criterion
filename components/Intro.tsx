"use client";

import { useEffect, useState } from "react";

export default function Intro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("contrechamp-intro");

    if (hasSeenIntro) {
      setVisible(false);
      return;
    }

    sessionStorage.setItem("contrechamp-intro", "true");

    const timer = setTimeout(() => {
      setVisible(false);
    }, 3800);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#fcfaf5] animate-[introFade_3.8s_ease-in-out_forwards]">
      <h1 className="text-[40px] font-serif tracking-tight">
        CONTRECHAMP
      </h1>
    </div>
  );
}