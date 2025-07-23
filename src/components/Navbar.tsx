"use client"; // If using Next.js App Router

import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full top-0 left-0 z-20 transition-colors duration-300 ${
        isScrolled ? "bg-black/50 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="flex max-w-7xl mx-auto p-4 text-white justify-between">
        <a href="/">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
      </nav>
    </div>
  );
}
