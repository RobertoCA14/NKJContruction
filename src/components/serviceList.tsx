// src/components/ServiceList.tsx
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { IconButton } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import cmuImg from "../assets/cmuImg.png";
import brickImg from "../assets/brickImg.png";
import castStoneImg from "../assets/castStoneImg.png";
import stuccoImg from "../assets/stuccoImg.jpg";
import eifsImg from "../assets/eifsImg.png";
import sidewalksImg from "../assets/sidewalksImg.png";
import stoneVeneerImg from "../assets/stoneVeneerImg.png";
import parapetImg from "../assets/parapetImg.png";

interface Service {
  title: string;
  description: string;
  image: string;
}

interface ServiceListProps {
  limit?: number;
  showTitle?: boolean;
  showButton?: boolean;
  useSlider?: boolean;
}

const services: Service[] = [
  {
    title: "CMU Block Work",
    description:
      "Expert installation of concrete masonry units for structural durability.",
    image: cmuImg,
  },
  {
    title: "Brick Installation & Restoration",
    description:
      "Classic brickwork for new projects or historic building restoration.",
    image: brickImg,
  },
  {
    title: "Cast Stone Fabrication",
    description:
      "Custom cast stone pieces fabricated and installed with precision.",
    image: castStoneImg,
  },
  {
    title: "Stucco Finishes & Repairs",
    description: "Smooth, durable stucco application and maintenance.",
    image: stuccoImg,
  },
  {
    title: "EIFS Systems",
    description:
      "Exterior insulation and finish systems for energy-efficient facades.",
    image: eifsImg,
  },
  {
    title: "Sidewalks, Walkways & Curbs",
    description: "Safe, clean and level pedestrian and access surfaces.",
    image: sidewalksImg,
  },
  {
    title: "Stone Veneer & Natural Stone",
    description: "High-quality stone finishes for elegance and longevity.",
    image: stoneVeneerImg,
  },
  {
    title: "Parapet Wall & Chimney Repairs",
    description:
      "Restore and secure building elements exposed to the elements.",
    image: parapetImg,
  },
];

const ServiceList = ({
  limit,
  showTitle = true,
  showButton = false,
  useSlider = false,
}: ServiceListProps) => {
  const visibleServices = limit ? services.slice(0, limit) : services;
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section
      id="services"
      className="bg-gradient-to-b from-gray-100 to-black py-16 px-4 text-center text-white"
    >
      <div className="max-w-[90rem] mx-auto">
        {showTitle && (
          <h2 className="text-4xl md:text-5xl font-extrabold text-red-800 tracking-wide uppercase mb-6">
            Masonry Services
          </h2>
        )}

        <p className="text-black text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-12">
          We offer a wide range of expert masonry services tailored to meet both
          residential and commercial needs. Whether you’re enhancing a new build
          or restoring a historic structure, our craftsmanship ensures lasting
          results.
        </p>

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
                "&:hover": {
                  backgroundColor: "#d32f2f",
                },
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
                "&:hover": {
                  backgroundColor: "#d32f2f",
                },
              }}
            >
              <ArrowForwardIos />
            </IconButton>

            <div className="max-w-6xl mx-auto">
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
                  0: { slidesPerView: 1.4, spaceBetween: 10 }, // pequeño
                  480: { slidesPerView: 1.8, spaceBetween: 20 }, // móviles grandes
                  768: { slidesPerView: 2.5, spaceBetween: 30 }, // tabletas
                  1024: { slidesPerView: 3, spaceBetween: 30 }, // escritorio
                }}
                coverflowEffect={{
                  rotate: 30,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false,
                }}
              >
                {visibleServices.map((service, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="relative rounded shadow hover:shadow-lg transform hover:scale-105 transition duration-300 overflow-hidden"
                      style={{
                        aspectRatio: "5 / 5", // controla la proporción
                        maxHeight: "400px",
                        width: "100%",
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="absolute bottom-0 w-full bg-black bg-opacity-60 p-4 text-left text-white">
                        <h3 className="text-lg font-bold text-red-300 mb-1">
                          {service.title}
                        </h3>
                        <p className="text-sm">{service.description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visibleServices.map((service, index) => (
              <div
                key={index}
                className="relative rounded shadow hover:shadow-lg transform hover:scale-105 transition duration-300 h-64 flex items-end text-white overflow-hidden"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="bg-black bg-opacity-60 w-full p-4">
                  <h3 className="text-lg font-bold text-red-300 mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {showButton && (
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-block bg-red-700 text-white font-semibold px-6 py-3 rounded hover:bg-red-800 transition"
            >
              View All Services
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceList;

