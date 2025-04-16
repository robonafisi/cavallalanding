"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const sections = ["demo", "video", "deployment", "aboutus"];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const getLabel = (id: string) => {
    switch (id) {
      case "demo":
        return "Home";
      case "video":
        return "Demo";
      case "deployment":
        return "Process";
      case "aboutus":
        return "About Us";
      default:
        return "";
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-lg px-8 py-5 w-full border-b border-white">
      <div className="flex items-center justify-between relative">
        {/* Left: Nav Links */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`text-white hover:text-gray-300 transition-all duration-200 ${
                activeSection === id
                  ? "border-b border-white pb-0.5"
                  : "pb-0"
              }`}
            >
              {getLabel(id)}
            </a>
          ))}
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Image
            src="/logo.png"
            alt="Cavalla Logo"
            width={48}
            height={48}
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Right: CTA Button */}
        <div className="hidden md:block">
          <a
            href="https://calendly.com/cavalla/meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-300 transition"
          >
            Book a Demo
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 items-center bg-black shadow rounded px-4 py-4 text-lg font-medium">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-gray-300"
            >
              {getLabel(id)}
            </a>
          ))}
          <a
            href="https://calendly.com/cavalla/meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Book a Demo
          </a>
        </div>
      )}
    </nav>
  );

};
export default Navbar;
