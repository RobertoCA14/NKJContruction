import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import Navbar from "../components/navbar";
import ProjetcsList from "../components/ProjetcsList";
import ContactSection from "./ContactSection";
// import edificio170 from "../assets/edificio170.png";
// import edificio55 from "../assets/edificio55.png";
// import edifici711 from "../assets/edifici711.png";
// import edificiosUpcomin from "../assets/edificiosUpcomin.png";
// import ladrilloedificiouPcomin from "../assets/ladrilloedificiouPcomin.png";
import ZoomableImage from "../components/ZoomableImage";

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  interface Project {
    id: string;
    category?: string;
    location?: string;
    images?: string[];
    developer?: string;
    [key: string]: any; // 🔹 agrega flexibilidad y evita el error TS2339
  }

  useEffect(() => {
    const fetchProjects = async () => {
      const snapshot = await getDocs(collection(db, "projects"));
      const data: Project[] = snapshot.docs.map((doc) => {
        const projectData = doc.data() as Project;
        return { ...projectData, id: doc.id };
      });

      // 🔹 TypeScript ya reconoce que 'category' existe
      const filtered = data.filter((proj) => proj.category === "completed");
      setProjects(filtered);
    };

    fetchProjects();
  }, []);

  // 🔹 Clasificación por categoría
  const recentProjects = projects.filter((p) => p.category === "recent");
  // const completedProjects = projects.filter((p) => p.category === "completed");
  const upcomingProjects = projects.filter((p) => p.category === "upcoming");

  return (
    <div className="flex flex-col min-h-screen text-center">
      <Navbar />
      <main className="flex-grow bg-cover bg-center pt-20 md:pt-28 pb-16 px-4 text-black">
        <ProjetcsList showTitle={true} />
      </main>

      {/* 🔹 RECENT PROJECTS */}
      <section id="projects" className="bg-gray-200 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Recent Projects
          </h2>
          <span className="block w-20 h-1 bg-red-700 mx-auto mb-12 rounded"></span>

          {recentProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center text-lg font-semibold text-black">
              {recentProjects.map((proj) => (
                <ZoomableImage
                  key={proj.id}
                  src={proj.images?.[0]}
                  alt={proj.location}
                  title={proj.location}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-gray-700 mt-10">
              <svg
                className="w-16 h-16 text-red-700 animate-bounce mb-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M12 20h.01M4 4h16v16H4z"
                />
              </svg>
              <p className="text-lg font-semibold">No recent projects yet.</p>
              <p className="text-sm text-gray-500">
                Stay tuned! We’re constantly working on new developments.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 🔹 CURRENT PROJECTS (Estático, como el original)
      <section className="bg-white py-16 px-4" id="current-projects">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center relative mb-12">
            CURRENT PROJECTS
            <span className="block w-20 h-1 bg-red-700 mx-auto mt-3 rounded"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Proyecto estático 1 */}
      {/* <div className="bg-gray-200 rounded-xl shadow-md overflow-hidden transition hover:shadow-xl">
              <img
                src={ladrilloedificiouPcomin}
                alt="8619 Bergenline Avenue"
                className="w-full h-[250px] object-cover"
              />
              <div className="p-6 text-left space-y-2">
                <h3 className="text-red-700 font-bold text-lg">
                  8619 Bergenline Avenue, North Bergen, NJ
                </h3>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>
                    📐 Square Footage: <strong>260,000 ft²</strong>
                  </p>
                  <p>
                    💰 Contract Value: <strong>$2.1 Million</strong>
                  </p>
                  <p>
                    🏗️ Developer: <strong>Del-Sano Group</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Proyecto estático 2 */}
      {/* <div className="bg-gray-200 rounded-xl shadow-md overflow-hidden transition hover:shadow-xl">
              <img
                src={edificiosUpcomin}
                alt="130 Avenue F, Bayonne"
                className="w-full h-[250px] object-cover"
              />
              <div className="p-6 text-left space-y-2">
                <h3 className="text-red-700 font-bold text-lg">
                  130 Avenue F, Bayonne, NJ 07002
                </h3>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>
                    📐 Square Footage: <strong>260,000 ft²</strong>
                  </p>
                  <p>
                    💰 Contract Value: <strong>$2.1 Million</strong>
                  </p>
                  <p>
                    🏗️ Developer: <strong>Del-Sano Group</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="bg-gray-200 py-16 px-4" id="upcoming-projects">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Upcoming Projects
          </h2>
          <span className="block w-20 h-1 bg-red-700 mx-auto mb-12 rounded"></span>

          {upcomingProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center text-lg font-semibold text-black">
              {upcomingProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="text-center space-y-2 transition-transform hover:scale-105 duration-300"
                >
                  <ZoomableImage
                    src={proj.images?.[0]}
                    alt={proj.location}
                    title={proj.location}
                  />
                  <p>
                    📐 Square Footage:{" "}
                    <strong>{proj.squareFootage || "N/A"}</strong>
                  </p>
                  <p>
                    💸 Contract Value: <strong>{proj.value || "N/A"}</strong>
                  </p>
                  <p>
                    🏗️ Developer/GC: <strong>{proj.developer || "N/A"}</strong>
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-gray-700 mt-10">
              <svg
                className="w-16 h-16 text-red-700 animate-bounce mb-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M12 20h.01M4 4h16v16H4z"
                />
              </svg>
              <p className="text-lg font-semibold">
                No upcoming projects for now.
              </p>
              <p className="text-sm text-gray-500">
                Check back soon for our next big development!
              </p>
            </div>
          )}
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default Projects;
