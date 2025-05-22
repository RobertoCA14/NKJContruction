import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 10);
      setVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-sm
        ${visible ? "translate-y-0" : "-translate-y-full"}
        ${scrolled ? "bg-white shadow text-black" : "bg-black/60 text-white"}`}
    >
      <div className="max-w-[1280px] mx-auto flex justify-between items-center py-4 px-6 md:py-5">
        <a href="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-12 object-contain md:h-14" />

          <span className="text-xl md:text-2xl font-bold whitespace-nowrap">
            NKJ Construction LLC
          </span>
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className={`w-6 h-6 transition ${
              scrolled ? "text-black" : "text-white"
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <nav className="hidden md:flex space-x-8 text-lg font-semibold">
          <a href="/" className="hover:text-red-600">
            Home
          </a>
          <Link to="/projects" className="hover:text-red-600">
            Projects
          </Link>
          <Link to="/services" className="hover:text-red-600">
            Services
          </Link>
          <a href="#contact" className="hover:text-red-600">
            Contact
          </a>
        </nav>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-4 bg-white text-black shadow">
          <nav className="flex flex-col space-y-4 text-lg font-semibold">
            <a href="/" className="hover:text-red-600">
              Home
            </a>
            <Link to="/projects" className="hover:text-red-600">
              Projects
            </Link>
            <Link to="/services" className="hover:text-red-600">
              Services
            </Link>
            <a href="#contact" className="hover:text-red-600">
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
