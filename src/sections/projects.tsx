import Navbar from "../components/navbar";
import ProjectsList from "../components/ProjetcsList";
import ContactSection from "./ContactSection";

const ProjectsPage = () => {
  return (
    <div className="text-center bg-gray-100 min-h-screen">
      <Navbar />
      <ProjectsList />
      <ContactSection />
    </div>
  );
};

export default ProjectsPage;
