import { useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion, useScroll, useTransform } from "framer-motion";
import portada4 from "../assets/portada4.png";
import portada3 from "../assets/portada3.png";
import cmuImg from "../assets/cmuImg.png";

const HeroCarousel = () => {
  const images = [portada4, cmuImg, portada3];
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale }}
      className="relative w-full h-[95vh] overflow-hidden"
      id="hero"
    >
      <motion.div
        className="absolute top-6 left-6 z-30"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      ></motion.div>

      {/* Texto principal */}
      <div className="absolute z-20 left-6 md:left-20 bottom-20 text-left text-white max-w-xl bg-black/60 p-6 md:p-8 rounded">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
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
    </motion.div>
  );
};

export default HeroCarousel;
