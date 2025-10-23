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

// 🔹 Firebase imports
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

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
  const [projects, setProjects] = useState<any[]>([]);
  const itemsPerPage = 6;
  const [page, setPage] = useState(1);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // 🔄 Cargar proyectos desde Firebase
  useEffect(() => {
    const fetchProjects = async () => {
      const snapshot = await getDocs(collection(db, "projects"));
      const data = snapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((proj) => proj.category === "completed"); // solo completed
      setProjects(data);
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
    <section
      id="services"
      className="bg-white py-4 px-4 text-center text-white"
    >
      <div className="max-w-[90rem] mx-auto">
        {showTitle && (
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-10 text-gray-800"
          >
            Completed Projects
          </motion.h2>
        )}

        {/* 🔹 Si usa slider */}
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
                      <div
                        className="relative rounded shadow hover:shadow-lg transform hover:scale-105 transition duration-300 overflow-hidden"
                        style={{
                          aspectRatio: "5 / 5",
                          maxHeight: "400px",
                          width: "100%",
                          backgroundImage: `url(${project.images?.[0]})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <div className="absolute bottom-0 w-full bg-black bg-opacity-60 p-4 text-left text-white">
                          {/* <h3 className="text-lg font-bold text-red-300 mb-1">
                          
                          </h3> */}
                          <h3 className="text-lg font-semibold text-white">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-12 px-4 md:px-8 bg-gray">
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
                    src={project.images?.[0]}
                    alt={project.location}
                    className="w-full h-auto aspect-[4/3] object-cover rounded-lg"
                    title=""
                  />
                  <div className="pt-4 text-left px-4">
                    <p className="text-l uppercase tracking-wide text-red-600 font-medium">
                      {project.location || "Unknown location"}
                    </p>
                    {/* <h3 className="text-lg font-semibold text-black">
                      {project.developer || "Developer not specified"}
                    </h3> */}
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

// // src/components/ProjectsList.tsx
// import { motion } from "framer-motion";
// import edificio170 from "../assets/edificio170.png";
// import edificio55 from "../assets/edificio55.png";
// import edifici711 from "../assets/edifici711.png";
// import { Link } from "react-router-dom";
// import { useState, useRef } from "react";
// import { Button, IconButton } from "@mui/material";
// import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-coverflow";
// import ZoomableImage from "../components/ZoomableImage";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// const projectData = [
//   { name: "711 Montgomery", location: "Jersey City, NJ", image: edifici711 },
//   { name: "618 Pavonia Ave", location: "Jersey City, NJ", image: edificio55 },
//   { name: "The Grand", location: "West New York, NJ", image: edificio170 },
//   { name: "55 Jordan Ave", location: "Jersey City, NJ", image: edificio55 },
//   { name: "170 Erie St", location: "Jersey City, NJ", image: edificio170 },
//   { name: "555 West 22nd St", location: "NY, NY", image: edifici711 },
//   { name: "607 Avenue K", location: "NY", image: edificio170 },
//   { name: "5967 Greyrock Pl", location: "Stamford, CT", image: edificio55 },
//   { name: "100 Water St", location: "Jersey City, NJ", image: edificio170 },
//   { name: "180 E 88th St", location: "NY, NY", image: edificio55 },
//   { name: "515 W 18th St", location: "NY, NY", image: edifici711 },
//   { name: "70 Vestry", location: "NY, NY", image: edificio170 },
//   { name: "91 Leonard St", location: "NY, NY", image: edifici711 },
//   { name: "508 51st St", location: "West New York, NJ", image: edificio55 },
//   { name: "88 Regent St", location: "Jersey City, NJ", image: edificio170 },
//   { name: "1 College Plaza", location: "Long Island, NY", image: edificio55 },
//   { name: "491 Bedford Ave", location: "Brooklyn, NY", image: edifici711 },
//   { name: "1036 Ocean Pkwy", location: "Brooklyn, NY", image: edificio55 },
//   { name: "20 Grand Ave", location: "Englewood, NJ", image: edifici711 },
//   { name: "1711 Gravesend", location: "Brooklyn, NY", image: edificio170 },
//   { name: "13 Bridge St", location: "Stockton, NJ", image: edificio55 },
//   { name: "38 Jackson Street", location: "Hoboken, NJ", image: edifici711 },
// ];

// interface ProjectsListProps {
//   limit?: number;
//   showTitle?: boolean;
//   showButton?: boolean;
//   useSlider?: boolean;
// }

// const ProjectsList = ({
//   limit,
//   showTitle = true,
//   showButton = false,
//   useSlider = false,
// }: ProjectsListProps) => {
//   const itemsPerPage = 6;
//   const [page, setPage] = useState(1);
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   const totalPages = Math.ceil(
//     (limit ? projectData.slice(0, limit).length : projectData.length) /
//       itemsPerPage
//   );

//   const projectsToShow = limit ? projectData.slice(0, limit) : projectData;
//   const paginatedProjects = projectsToShow.slice(
//     (page - 1) * itemsPerPage,
//     page * itemsPerPage
//   );

//   return (
//     <section
//       id="services"
//       className="bg-white py-4 px-4 text-center text-white"
//     >
//       <div className=" max-w-[90rem] mx-auto">
//         {showTitle && (
//           <motion.h2
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.6 }}
//             className="text-3xl md:text-4xl font-bold mb-10 text-gray-800"
//           >
//             Completed Projects
//           </motion.h2>
//         )}

//         {useSlider ? (
//           <div className="relative">
//             <IconButton
//               ref={prevRef}
//               sx={{
//                 position: "absolute",
//                 top: "50%",
//                 left: 0,
//                 zIndex: 10,
//                 transform: "translateY(-50%)",
//                 backgroundColor: "rgba(0,0,0,0.4)",
//                 color: "#fff",
//                 "&:hover": { backgroundColor: "#d32f2f" },
//               }}
//             >
//               <ArrowBackIosNew />
//             </IconButton>

//             <IconButton
//               ref={nextRef}
//               sx={{
//                 position: "absolute",
//                 top: "50%",
//                 right: 0,
//                 zIndex: 10,
//                 transform: "translateY(-50%)",
//                 backgroundColor: "rgba(0,0,0,0.4)",
//                 color: "#fff",
//                 "&:hover": { backgroundColor: "#d32f2f" },
//               }}
//             >
//               <ArrowForwardIos />
//             </IconButton>

//             <div className="max-w-6xl mx-auto">
//               <Swiper
//                 className="!pb-10"
//                 modules={[Navigation, Pagination, EffectCoverflow]}
//                 effect="coverflow"
//                 grabCursor={true}
//                 centeredSlides={true}
//                 loop={true}
//                 navigation={{
//                   prevEl: prevRef.current,
//                   nextEl: nextRef.current,
//                 }}
//                 onBeforeInit={(swiper) => {
//                   // @ts-ignore
//                   swiper.params.navigation.prevEl = prevRef.current;
//                   // @ts-ignore
//                   swiper.params.navigation.nextEl = nextRef.current;
//                 }}
//                 pagination={{ clickable: true }}
//                 breakpoints={{
//                   0: { slidesPerView: 1.4, spaceBetween: 10 },
//                   480: { slidesPerView: 1.8, spaceBetween: 20 },
//                   768: { slidesPerView: 2.5, spaceBetween: 30 },
//                   1024: { slidesPerView: 3, spaceBetween: 30 },
//                 }}
//                 coverflowEffect={{
//                   rotate: 30,
//                   stretch: 0,
//                   depth: 100,
//                   modifier: 1,
//                   slideShadows: false,
//                 }}
//               >
//                 {projectsToShow.map((project, i) => (
//                   <SwiperSlide key={i}>
//                     <div
//                       className="relative rounded shadow hover:shadow-lg transform hover:scale-105 transition duration-300 overflow-hidden"
//                       style={{
//                         aspectRatio: "5 / 5", // controla la proporción
//                         maxHeight: "400px",
//                         width: "100%",
//                         backgroundImage: `url(${project.image})`,
//                         backgroundSize: "cover",
//                         backgroundPosition: "center",
//                       }}
//                     >
//                       <div className="absolute bottom-0 w-full bg-black bg-opacity-60 p-4 text-left text-white">
//                         <h3 className="text-lg font-bold text-red-300 mb-1">
//                           {project.location}
//                         </h3>
//                         <h3 className="text-lg font-semibold text-white">
//                           {project.name}
//                         </h3>
//                       </div>
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-12 px-4 md:px-8 bg-gray">
//             {paginatedProjects.map((project, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 60 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 transition={{ duration: 0.5, delay: i * 0.05 }}
//                 className="overflow-hidden rounded-lg hover:shadow-xl transition-all duration-300"
//               >
//                 <ZoomableImage
//                   src={project.image}
//                   alt={project.name}
//                   className="w-full h-auto aspect-[4/3] object-cover rounded-lg"
//                   title=""
//                 />
//                 <div className="pt-4 text-left px-4">
//                   <p className="text-l uppercase tracking-wide text-red-600 font-medium">
//                     {project.location}
//                   </p>
//                   <h3 className="text-lg font-semibold text-black">
//                     {project.name}
//                   </h3>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         )}

//         {!useSlider && totalPages > 1 && (
//           <div className="mt-8 flex justify-center items-center flex-wrap gap-6 border-t border-gray-300 pt-6">
//             {/* PREVIOUS PAGE button (shown from page 2 onward) */}
//             {page >= 2 && (
//               <Button
//                 onClick={() => setPage(page - 1)}
//                 startIcon={<ArrowBackIosNewIcon />}
//                 variant="text"
//                 sx={{
//                   fontWeight: "bold",
//                   color: "#555555",
//                   "&:hover": { color: "black", backgroundColor: "#f0f0f0" },
//                 }}
//               >
//                 PREVIOUS PAGE
//               </Button>
//             )}

//             {/* Page numbers */}
//             <div className="flex gap-3">
//               {Array.from({ length: totalPages }, (_, i) => (
//                 <Button
//                   key={i}
//                   variant={page === i + 1 ? "contained" : "outlined"}
//                   color="primary"
//                   onClick={() => setPage(i + 1)}
//                   sx={{
//                     color: page === i + 1 ? "white" : "#555555",
//                     borderColor: "gray",
//                     backgroundColor: page === i + 1 ? "gray" : "transparent",
//                     "&:hover": {
//                       backgroundColor: page === i + 1 ? "#555555" : "#e0e0e0",
//                       borderColor: "#003d99",
//                     },
//                   }}
//                 >
//                   {i + 1}
//                 </Button>
//               ))}
//             </div>

//             {/* NEXT PAGE button */}
//             {page < totalPages && (
//               <Button
//                 onClick={() => setPage(page + 1)}
//                 endIcon={<ArrowForwardIosIcon />}
//                 variant="text"
//                 sx={{
//                   fontWeight: "bold",
//                   color: "#555555",
//                   "&:hover": {
//                     color: "black",
//                     backgroundColor: "#f0f0f0",
//                   },
//                 }}
//               >
//                 NEXT PAGE
//               </Button>
//             )}
//           </div>
//         )}

//         {showButton && (
//           <div className="mt-6">
//             <Link
//               to="/projects"
//               className="inline-block bg-red-700 text-white font-semibold px-6 py-3 rounded hover:bg-red-800 transition"
//             >
//               View All Projects
//             </Link>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default ProjectsList;
