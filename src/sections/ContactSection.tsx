import {
  FaInstagram,
  FaEnvelope,
  FaYoutube,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import bgContact from "../assets/bgcontact.png";

const ContactAndFooter = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white px-6 pt-32 md:pt-0"
      style={{ backgroundImage: `url(${bgContact})` }}
      id="contact"
    >
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

        {/* Contenido de contacto */}
        <div className="grid md:grid-cols-3 gap-8 items-start pb-12 pt-4 md:pt-0">
          <div className="pt-6 md:pt-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Let's talk</h2>
            <p className="font-semibold">NKJ CONSTRUCTION LLC</p>
            <p>Bergenfield, New Jersey</p>
          </div>

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

          <div>
            <p>Your vision, our expertise —</p>
            <p>Let’s build together!</p>
          </div>
        </div>

        {/* Footer unificado */}
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
            {/* <a
              href="https://www.youtube.com/@nkjconstruction"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube className="hover:text-red-400" />
            </a>
            <a
              href="https://www.facebook.com/nkjconstruction"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="hover:text-red-400" />
            </a>
            <a
              href="https://twitter.com/nkjconstruction"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter className="hover:text-red-400" />
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactAndFooter;
