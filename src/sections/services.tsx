import Navbar from "../components/navbar";
import ContactSection from "../sections/ContactSection";
import ServiceList from "../components/serviceList"; // donde tengas la lista completa

const Services = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-center">
      <Navbar />

      <main className="flex-grow bg-cover bg-center pt-40 pb-16 px-4 text-white">
        <ServiceList />
      </main>
      <ContactSection />
    </div>
  );
};

export default Services;
