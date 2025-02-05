import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Icons for menu open/close

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Explicitly type section names
  const sectionNames: Record<"landing" | "valueprop" | "faq" | "aboutus", string> = {
    landing: "Home",
    valueprop: "Value Prop",
    faq: "FAQ",
    aboutus: "About Us",
  };


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
      className={"fixed top-0 left-0 right-0 w-full px-6 py-3 z-50 bg-[#D8C3A5] shadow-md"}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <span className="text-3xl font-semibold">Cavalla</span>

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
