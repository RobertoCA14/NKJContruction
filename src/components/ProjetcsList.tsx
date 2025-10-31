import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Button, IconButton } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import ZoomableImage from "../components/ZoomableImage";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

interface Project {
  id: string;
  images?: string[];
  location?: string;
  developer?: string;
  squareFootage?: string;
  value?: string;
  copyright?: string;
}

interface ProjectsListProps {
  limit?: number;
  showTitle?: boolean;
  showButton?: boolean;
  useSlider?: boolean;
}

const ProjectsList = ({
  limit,
  showTitle = true,
  showButton = false,
  useSlider = false,
}: ProjectsListProps) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const itemsPerPage = 6;
  const [page, setPage] = useState(1);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const snapshot = await getDocs(collection(db, "projects"));
      // ✅ sin category: mostrar solo “completed” si lo tiene, o todos si no existe
      const data = snapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((proj: any) => !proj.category || proj.category === "completed");
      setProjects(data as Project[]);
    };
    fetchProjects();
  }, []);

  const totalPages = Math.ceil(
    (limit ? projects.slice(0, limit).length : projects.length) / itemsPerPage
  );

  const projectsToShow = limit ? projects.slice(0, limit) : projects;
  const paginatedProjects = projectsToShow.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <section id="projects" className="bg-white py-4 px-4 text-center">
      <div className="max-w-[90rem] mx-auto">
        {showTitle && (
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl  mb-10 text-gray-800"
          >
            <h1 className=" font-bold mb-10 text-gray-800">
              Building Strength, One Project at a Time
            </h1>
            <p className="text-red-700 italic mt-3 font-semibold text-lg md:text-2xl">
              A Proven Track Record: 25+ Masonry Projects Delivered
            </p>

            <p className="max-w-4xl mx-auto text-gray-800 mt-2 leading-relaxed text-base md:text-lg">
              With over twenty-five completed masonry projects, we continue to
              set the standard for reliability, durability, and exceptional
              workmanship. Each project reflects our commitment to quality,
              precision, and lasting results that stand the test of time.
            </p>
          </motion.h2>
        )}

        {/* 🔹 Slider */}
        {useSlider ? (
          <div className="relative">
            <IconButton
              ref={prevRef}
              sx={{
                position: "absolute",
                top: "50%",
                left: 0,
                zIndex: 10,
                transform: "translateY(-50%)",
                backgroundColor: "rgba(0,0,0,0.4)",
                color: "#fff",
                "&:hover": { backgroundColor: "#d32f2f" },
              }}
            >
              <ArrowBackIosNew />
            </IconButton>

            <IconButton
              ref={nextRef}
              sx={{
                position: "absolute",
                top: "50%",
                right: 0,
                zIndex: 10,
                transform: "translateY(-50%)",
                backgroundColor: "rgba(0,0,0,0.4)",
                color: "#fff",
                "&:hover": { backgroundColor: "#d32f2f" },
              }}
            >
              <ArrowForwardIos />
            </IconButton>

            <div className="max-w-6xl mx-auto">
              {projects.length > 0 ? (
                <Swiper
                  className="!pb-10"
                  modules={[Navigation, Pagination, EffectCoverflow]}
                  effect="coverflow"
                  grabCursor={true}
                  centeredSlides={true}
                  loop={true}
                  navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }}
                  onBeforeInit={(swiper) => {
                    // @ts-ignore
                    swiper.params.navigation.prevEl = prevRef.current;
                    // @ts-ignore
                    swiper.params.navigation.nextEl = nextRef.current;
                  }}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    0: { slidesPerView: 1.4, spaceBetween: 10 },
                    480: { slidesPerView: 1.8, spaceBetween: 20 },
                    768: { slidesPerView: 2.5, spaceBetween: 30 },
                    1024: { slidesPerView: 3, spaceBetween: 30 },
                  }}
                  coverflowEffect={{
                    rotate: 30,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                  }}
                >
                  {projectsToShow.map((project, i) => (
                    <SwiperSlide key={project.id || i}>
                      <div className="rounded shadow hover:shadow-lg transform hover:scale-105 transition duration-300 overflow-hidden">
                        {/* Imagen principal */}
                        <div
                          className="relative"
                          style={{
                            aspectRatio: "5 / 5",
                            maxHeight: "400px",
                            width: "100%",
                            backgroundImage: `url(${project.images?.[0]})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        >
                          {/* 🔹 Copyright dentro de la imagen, abajo izquierda */}
                          {project.copyright && (
                            <p className="absolute bottom-2 left-3 text-[11px] italic text-gray-200 bg-black/50 px-2 py-[1px] rounded-md select-none">
                              © {project.copyright}
                            </p>
                          )}
                        </div>

                        {/* 🔹 Texto debajo de la imagen */}
                        <div className="pt-3 text-left px-3 pb-4">
                          <h3 className="text-lg uppercase tracking-wide font-bold text-gray-900">
                            {project.location || "Unknown location"}
                          </h3>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <p className="text-gray-600 py-10">
                  No completed projects found.
                </p>
              )}
            </div>
          </div>
        ) : (
          // 🔹 Grid con paginación
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-12 px-4 md:px-8">
            {paginatedProjects.length > 0 ? (
              paginatedProjects.map((project, i) => (
                <motion.div
                  key={project.id || i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="overflow-hidden rounded-lg hover:shadow-xl transition-all duration-300"
                >
                  <ZoomableImage
                    src={project.images?.[0] ?? ""}
                    alt={project.location || "Unknown location"}
                    className="w-full h-auto aspect-[4/3] object-cover rounded-lg"
                    title=""
                    images={project.images} // 👈 importante para que deslice entre todas
                    copyright={project.copyright}
                  />

                  <div className="pt-4 text-left px-4">
                    <p className="text-lg uppercase tracking-wide font-bold text-gray-900 font-bold">
                      {project.location || "Unknown location"}
                    </p>
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="text-gray-600 py-10 col-span-full">
                No completed projects found.
              </p>
            )}
          </div>
        )}

        {/* 🔹 Paginación */}
        {!useSlider && totalPages > 1 && (
          <div className="mt-8 flex justify-center items-center flex-wrap gap-6 border-t border-gray-300 pt-6">
            {page >= 2 && (
              <Button
                onClick={() => setPage(page - 1)}
                startIcon={<ArrowBackIosNewIcon />}
                variant="text"
                sx={{
                  fontWeight: "bold",
                  color: "#555555",
                  "&:hover": { color: "black", backgroundColor: "#f0f0f0" },
                }}
              >
                PREVIOUS PAGE
              </Button>
            )}

            <div className="flex gap-3">
              {Array.from({ length: totalPages }, (_, i) => (
                <Button
                  key={i}
                  variant={page === i + 1 ? "contained" : "outlined"}
                  color="primary"
                  onClick={() => setPage(i + 1)}
                  sx={{
                    color: page === i + 1 ? "white" : "#555555",
                    borderColor: "gray",
                    backgroundColor: page === i + 1 ? "gray" : "transparent",
                    "&:hover": {
                      backgroundColor: page === i + 1 ? "#555555" : "#e0e0e0",
                      borderColor: "#003d99",
                    },
                  }}
                >
                  {i + 1}
                </Button>
              ))}
            </div>

            {page < totalPages && (
              <Button
                onClick={() => setPage(page + 1)}
                endIcon={<ArrowForwardIosIcon />}
                variant="text"
                sx={{
                  fontWeight: "bold",
                  color: "#555555",
                  "&:hover": {
                    color: "black",
                    backgroundColor: "#f0f0f0",
                  },
                }}
              >
                NEXT PAGE
              </Button>
            )}
          </div>
        )}

        {/* 🔹 Botón opcional */}
        {showButton && (
          <div className="mt-6">
            <Link
              to="/projects"
              className="inline-block bg-red-700 text-white font-semibold px-6 py-3 rounded hover:bg-red-800 transition"
            >
              View All Projects
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsList;
