import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { Close, ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

interface ZoomableImageProps {
  src: string;
  alt?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  images?: string[];
  copyright?: string;
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({
  src,
  alt,
  title,
  subtitle,
  className = "",
  images = [],
  copyright,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Imagen principal */}
      <div className="relative inline-block group">
        <img
          src={src}
          alt={alt}
          onClick={() => setIsOpen(true)}
          className={`w-[350px] h-[300px] object-cover rounded shadow-md cursor-zoom-in transition hover:scale-105 ${className}`}
        />

        {/* 🔹 Tooltip: Click to zoom */}
        <span className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity select-none">
          Click to zoom
        </span>
      </div>

      {/* 🔹 Título y subtítulo debajo */}
      {title && (
        <p className="mt-3 text-l uppercase tracking-wide font-bold text-gray-900 text-left">
          {title}
        </p>
      )}
      {subtitle && (
        <p className="text-sm text-gray-600 italic text-left">{subtitle}</p>
      )}

      {/* 🔹 Modal de zoom */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          {/* Botón cerrar */}
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            sx={{
              position: "absolute",
              top: 20,
              right: 20,
              color: "white",
              backgroundColor: "rgba(255,255,255,0.1)",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.3)" },
            }}
          >
            <Close />
          </IconButton>

          {/* Imagen ampliada */}
          <div className="relative flex justify-center items-center max-w-[95%] max-h-[85vh]">
            <img
              src={images[currentIndex] || src}
              alt={alt}
              className="max-w-full max-h-full object-contain rounded shadow-lg select-none"
            />

            {/* Copyright fijo dentro del modal */}
            {copyright && (
              <span className="absolute bottom-3 left-4 text-[15px] text-white/80 italic bg-black/75 px-2 py-1 rounded-md">
                © {copyright}
              </span>
            )}
          </div>

          {/* Controles de navegación */}
          {images.length > 1 && (
            <>
              <IconButton
                onClick={handlePrev}
                sx={{
                  position: "absolute",
                  left: 20,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "white",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.3)" },
                }}
              >
                <ArrowBackIosNew />
              </IconButton>

              <IconButton
                onClick={handleNext}
                sx={{
                  position: "absolute",
                  right: 20,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "white",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.3)" },
                }}
              >
                <ArrowForwardIos />
              </IconButton>

              {/* Contador de imágenes */}
              <div className="absolute bottom-6 text-white text-sm bg-black/50 px-4 py-1 rounded-full">
                {currentIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ZoomableImage;
