interface ZoomableImageProps {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

const ZoomableImage = ({
  src,
  alt,
  title,
  subtitle,
  className,
}: ZoomableImageProps) => {
  return (
    <div className={`text-center ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-[300px] object-cover rounded shadow-md transition-transform duration-300 hover:scale-105"
      />
      {title && <p className="mt-4 font-bold text-red-700">{title}</p>}
      {subtitle && <p className="text-sm">{subtitle}</p>}
    </div>
  );
};

export default ZoomableImage;
