import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

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
      { threshold: 0.5 } // Adjust this value for better responsiveness
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
        <span className="text-3xl font-semibold font-playfair">Cavalla</span>

        <div className="flex items-center justify-center space-x-4 flex-grow font-playfair">
          {["landing", "whychoose", "faq", "aboutus"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`text-xl font-semibold ${
                activeSection === id ? "text-slate-600" : "text-black"
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
