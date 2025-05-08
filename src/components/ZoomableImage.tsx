import React, { useState } from "react";

interface ZoomableImageProps {
  src: string;
  alt?: string;
  title?: string;
  subtitle?: string;
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({
  src,
  alt,
  title,
  subtitle,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="text-center">
        <img
          src={src}
          alt={alt}
          onClick={() => setIsOpen(true)}
          className="w-full h-[320px] object-cover rounded shadow-md cursor-zoom-in transition hover:scale-105"
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
