import Navbar from "../components/navbar";
import ContactSection from "../sections/ContactSection";
import ServiceList from "../components/serviceList"; // donde tengas la lista completa
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col min-h-screen bg-white text-center">
      <Navbar />

      <main className="flex-grow bg-cover bg-center pt-20 md:pt-28 pb-16 px-4 text-white">
        <ServiceList showTitle={true} showButton={false} />
      </main>
      <ContactSection />
    </div>
  );
};

export default Services;
