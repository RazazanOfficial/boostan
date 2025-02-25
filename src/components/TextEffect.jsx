"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function TypewriterEffectSmooth() {
  const words = [
    { text: "به" },
    { text: "سامانه" },
    { text: "بوستان" },
    { text: "دانشگاه" },
    { text: "صنعتی" },
    { text: "شاهرود" },
    { text: "خوش" },
    { text: "آمدید." },
  ];
  return (
    <div className="flex flex-col items-center justify-center rtl:text-right">
      <TypewriterEffect words={words} />
    </div>
  );
}
