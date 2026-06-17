"use client";
import { useEffect, useState } from "react";

export default function MyHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="bg-[#131313] fixed top-0 inset-x-0 w-full z-25 border-b border-[#3c4a42] transition-all duration-500 ease-in-out">
      <div
        className={`relative flex items-center px-6 max-w-[1280px] mx-auto w-full transition-all duration-500 ease-in-out
          ${scrolled ? "min-h-[48px]" : "min-h-[80px]"}`}
      >
        {/* Logo + Name */}
        <div
          className={`flex items-center gap-2 transition-all duration-500 ease-in-out
            ${scrolled ? "translate-x-0" : "translate-x-[calc(50vw-200px)]"}`}
        >
          <span className="material-symbols-outlined text-[#4edea3]">
            terminal
          </span>
          <span className="text-headline-md leading-[1.3] font-bold text-[#4edea3]">
            OmarDev
          </span>
        </div>
      </div>
    </header>
  );
}
