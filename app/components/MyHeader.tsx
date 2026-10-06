"use client";
import { useEffect, useState } from "react";
import { ShieldIcon } from "./Icons";

const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Credentials", href: "#certs" },
  { label: "Contact", href: "#contact" },
];

export default function MyHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 border-b transition-all duration-300
        ${scrolled ? "bg-ink/95 border-line" : "bg-transparent border-transparent"}`}
    >
      <div className="flex items-center justify-between gap-4 px-4 md:px-8 max-w-6xl mx-auto h-16">
        <a href="#top" className="flex items-center gap-2.5 font-semibold text-fg">
          <span className="grid place-items-center w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 text-accent">
            <ShieldIcon className="w-4.5 h-4.5" />
          </span>
          Omar Ba Raean
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] text-muted hover:text-fg transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="/Omar_Ba_Raean_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] font-medium px-4 py-2 rounded-full border border-line text-fg hover:border-accent/50 hover:text-accent transition-colors"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
