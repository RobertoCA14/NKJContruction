import { useState } from "react";
import logo from "../assets/logo.png"; // Ajusta si tu ruta es distinta

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo + Texto */}
        <a
          href="#hero"
          className="flex items-center space-x-2 hover:opacity-80 transition"
        >
          <img src={logo} alt="Logo" className="h-12 object-contain" />
          <span className="text-red-800 text-xl font-bold whitespace-nowrap">
            NKJ Construction LLC
          </span>
        </a>

        {/* Botón menú móvil */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-gray-800"
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

        {/* Menú horizontal solo en pantallas grandes */}
        <nav className="hidden md:flex space-x-6 text-gray-800 font-medium">
          <a href="#hero" className="hover:text-red-600">
            Home
          </a>
          <a href="#projects" className="hover:text-red-600">
            Project
          </a>
          <a href="#services" className="hover:text-red-600">
            Services
          </a>
          <a href="#contact" className="hover:text-red-600">
            Contact
          </a>
        </nav>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          <nav className="flex flex-col space-y-3 text-gray-800 font-medium">
            <a href="#hero" className="hover:text-red-600">
              Home
            </a>
            <a href="#projects" className="hover:text-red-600">
              Project
            </a>
            <a href="#services" className="hover:text-red-600">
              Services
            </a>
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
