import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import portada4 from "../assets/portada4.png";
import portada3 from "../assets/portada3.png";

const HeroCarousel: React.FC = () => {
  const images = [portada3, portada4];

  return (
    <div className="relative w-full h-[95vh] overflow-hidden" id="hero">
      {/* Texto y botón ubicados como en Canva */}
      <div className="absolute z-20 left-20 bottom-20 text-left text-white max-w-xl bg-black/60 p-8 rounded">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Your Trusted Partner for Masonry Excellence
        </h1>
        <p className="text-lg md:text-xl mt-2">
          Elevating High-Rise Living with Craftsmanship in Brick, Block, and
          Stone
        </p>
        <a
          href="#contact"
          className="inline-block mt-4 bg-red-700 text-white px-6 py-3 font-semibold hover:bg-red-800 transition"
        >
          GET IN TOUCH
        </a>
      </div>

      {/* Carrusel de imágenes: mismo tamaño, navegación habilitada */}
      {/* @ts-ignore */}
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        interval={5000}
        stopOnHover={false}
        showArrows={true}
      >
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              className="w-full h-[95vh] object-cover"
              alt={`slide-${index}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
