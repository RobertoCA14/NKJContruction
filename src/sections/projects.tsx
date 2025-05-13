import Navbar from "../components/navbar";
import ProjectsList from "../components/ProjetcsList";
import ContactSection from "./ContactSection";
import cmuImg from "../assets/cmuImg.png"; // ✅ Import correcto

const Projects = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-center">
      <Navbar />

      <main
        className="flex-grow bg-cover bg-center pt-40 pb-16 px-4 text-white"
        style={{ backgroundImage: `url(${cmuImg})` }}
      >
        <ProjectsList />
      </main>

      <ContactSection />
    </div>
  );
};

export default Projects;
