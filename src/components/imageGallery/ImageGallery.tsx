import screen1 from "@/assets/images/projects/projectTracker/screen1.webp";
import screen2 from "@/assets/images/projects/projectTracker/screen2.webp";
import screen3 from "@/assets/images/projects/projectTracker/screen3.webp";
import screen4 from "@/assets/images/projects/projectTracker/screen4.webp";
import screen5 from "@/assets/images/projects/projectTracker/screen5.webp";
import { useState } from "react";

const gallery = [screen1, screen2, screen3, screen4, screen5];

const ImageGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="relative h-48">
      {gallery.map((image, index) => (
        <img
          key={index}
          src={image}
          alt=""
          className="absolute w-full rounded-lg border border-white cursor-pointer"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{
            top: `${index * 1}rem`,
            zIndex: hoveredIndex === index ? 50 : 5 - index,
          }}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
