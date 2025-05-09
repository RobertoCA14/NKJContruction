import { FaInstagram, FaEnvelope } from "react-icons/fa";
import logo from "../assets/logo.png";
import bgContact from "../assets/bgcontact.jpeg";

const ContactSection = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white min-h-[40vh] px-6 pt-32 md:pt-0 flex items-center"
      style={{ backgroundImage: `url(${bgContact})` }}
      id="contact"
    >
      {/* Capa oscura encima de la imagen */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Logo visible solo en pantallas grandes */}
      <img
        src={logo}
        alt="NKJ Construction Logo"
        className="hidden md:block absolute top-4 left-4 w-20 h-auto z-20"
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Logo centrado en móviles */}
        <div className="md:hidden text-center mb-6">
          <img
            src={logo}
            alt="NKJ Construction Logo"
            className="mx-auto w-20 h-auto"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start pb-12 pt-4 md:pt-0">
          {/* Columna 1 */}
          <div className="pt-6 md:pt-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Let's talk</h2>
            <p className="font-semibold">NKJ CONSTRUCTION, LLC</p>
            <p>Bergenfield, New Jersey</p>
          </div>

          {/* Columna 2 con íconos más grandes y clicables */}
          <div className="space-y-3 text-lg">
            <a
              href="https://www.instagram.com/nkjconstruction?igsh=MWs3ZHR4YTh4MGJmcQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:underline"
            >
              <FaInstagram className="text-red-500 text-2xl" />
              @nkjconstructionllc
            </a>
            <a
              href="mailto:nigel@nkjconstruction.com"
              className="flex items-center gap-3 hover:underline"
            >
              <FaEnvelope className="text-red-500 text-2xl" />
              nigel@nkjconstruction.com
            </a>
          </div>

          {/* Columna 3 */}
          <div>
            <p>Your vision, our expertise —</p>
            <p>Let’s build together!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
