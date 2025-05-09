import React, { useState } from "react";

interface ZoomableImageProps {
  src: string;
  alt?: string;
  title?: string;
  subtitle?: string;
  className?: string; // 👈 añadimos className opcional
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({
  src,
  alt,
  title,
  subtitle,
  className = "", // 👈 valor por defecto vacío
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="text-center">
        <img
          src={src}
          alt={alt}
          onClick={() => setIsOpen(true)}
          className={`w-[350px] h-[300px] object-cover rounded shadow-md cursor-zoom-in transition hover:scale-105 ${className}`}
        />

        {title && <p className="mt-4 font-bold text-red-700">{title}</p>}
        {subtitle && <p className="text-sm">{subtitle}</p>}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={src}
            alt={alt}
            className="max-w-[90%] max-h-[90%] object-contain rounded shadow-lg cursor-zoom-out"
          />
        </div>
      )}
    </>
  );
};

export default ZoomableImage;
