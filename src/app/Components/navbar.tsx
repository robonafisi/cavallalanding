import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Icons for menu open/close

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Explicitly type section names
  const sectionNames: Record<"landing" | "valueprop" | "faq" | "aboutus", string> = {
    landing: "Home",
    valueprop: "Why Choose Us",
    faq: "FAQ",
    aboutus: "About Us",
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full px-6 py-3 z-50 transition-all duration-300 
        ${isScrolled ? "bg-navsecond text-black shadow-lg" : "bg-transparent text-black shadow-md"}`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <span className="text-3xl font-semibold font-playfair">Cavalla</span>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 font-playfair">
          {(Object.keys(sectionNames) as Array<keyof typeof sectionNames>).map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`text-xl font-semibold ${
                activeSection === id ? "text-slate-600" : "text-black"
              }`}
            >
              {sectionNames[id]}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 top-full w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
          {(Object.keys(sectionNames) as Array<keyof typeof sectionNames>).map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-lg font-semibold text-black"
              onClick={() => setIsMenuOpen(false)} // Close menu on selection
            >
              {sectionNames[id]}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
