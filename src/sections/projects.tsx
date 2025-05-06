import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Modern Office Building",
    description:
      "A state-of-the-art commercial office space in the heart of the city.",
    image: "/images/project1.jpg",
  },
  {
    title: "Luxury Residential Complex",
    description: "High-end apartments with breathtaking city views.",
    image: "/images/project2.jpg",
  },
  {
    title: "Shopping Mall Renovation",
    description:
      "Complete redesign and modernization of an existing shopping center.",
    image: "/images/project3.jpg",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
