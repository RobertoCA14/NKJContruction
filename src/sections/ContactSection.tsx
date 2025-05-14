import { FaInstagram, FaEnvelope } from "react-icons/fa";
import logo from "../assets/logo.png";
import bgContact from "../assets/bgcontact.png";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative bg-cover bg-center text-white px-6 py-20 min-h-[45vh] flex flex-col justify-center"
      style={{ backgroundImage: `url(${bgContact})` }}
    >
      {/* Capa oscura encima del fondo */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Logo fijo en escritorio */}
      {/* Logo fijo en escritorio */}
      <img
        src={logo}
        alt="NKJ Construction Logo"
        className="hidden md:block absolute top-6 left-6 w-28 max-w-[112px] z-20"
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full md:pl-28">
        {/* Logo centrado en móviles */}
        <div className="md:hidden text-center mb-8">
          <img
            src={logo}
            alt="NKJ Construction Logo"
            className="mx-auto w-28 h-auto"
          />
        </div>

        {/* Contenido principal */}
        <div className="grid md:grid-cols-3 gap-8 items-start py-8">
          {/* Columna 1 */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Let's talk</h2>
            <p className="font-semibold">NKJ CONSTRUCTION LLC</p>
            <p>Bergenfield, New Jersey</p>
          </div>

          {/* Columna 2 */}
          <div className="space-y-2 text-lg">
            <a
              href="https://www.instagram.com/nkjconstruction?igsh=MWs3ZHR4YTh4MGJmcQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:underline"
            >
              <FaInstagram className="text-red-500 text-xl" />
              @nkjconstructionllc
            </a>
            <a
              href="mailto:nigel@nkjconstruction.com"
              className="flex items-center gap-3 hover:underline"
            >
              <FaEnvelope className="text-red-500 text-xl" />
              nigel@nkjconstruction.com
            </a>
          </div>

          {/* Columna 3 */}
          <div>
            <p>Your vision, our expertise —</p>
            <p>Let’s build together!</p>
          </div>
        </div>

        {/* Footer simple */}
        <div className="border-t border-white/30 pt-6 mt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-300">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} NKJ Construction LLC. All rights
            reserved.
          </p>
          <div className="flex gap-4 text-white text-xl">
            <a
              href="https://www.instagram.com/nkjconstruction?igsh=MWs3ZHR4YTh4MGJmcQ=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="hover:text-red-400" />
            </a>
            <a href="mailto:nigel@nkjconstruction.com" aria-label="Email">
              <FaEnvelope className="hover:text-red-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
