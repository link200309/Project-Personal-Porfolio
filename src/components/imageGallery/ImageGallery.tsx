import screen1 from "@/assets/images/projects/projectTracker/screen1.webp";
import screen2 from "@/assets/images/projects/projectTracker/screen2.webp";
import screen3 from "@/assets/images/projects/projectTracker/screen3.webp";
import screen4 from "@/assets/images/projects/projectTracker/screen4.webp";
import screen5 from "@/assets/images/projects/projectTracker/screen5.webp";
import { useState } from "react";
import { IoArrowBack, IoArrowForwardOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { type Project } from "@/types";

const gallery = [screen1, screen2, screen3, screen4, screen5];

type ImageGalleryProps = {
  selectedProject: Project;
  setSelectedProject: (value: Project) => void;
};

const ImageGallery = ({
  selectedProject,
  setSelectedProject,
}: ImageGalleryProps) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="fixed w-screen h-screen top-0 left-0 bg-black/90 z-[10000] flex items-center justify-center">
      <div className="absolute top-16 right-44 text-label-lg">
        <IoMdClose
          onClick={() => setSelectedProject(null)}
          className="hover:scale-110 cursor-pointer"
        />
      </div>

      <div className="absolute">
        <img
          key={index}
          src={selectedProject.gallery[index]}
          alt=""
          className="h-[500px] rounded-lg border border-white cursor-pointer object-cover"
        />
        <div className="absolute top-[50%] w-full flex justify-between mt-4 text-white text-3xl">
          <IoArrowBack
            onClick={() => setIndex(Math.max(0, index - 1))}
            className="hover:scale-105 hover:cursor-pointer"
          />
          <IoArrowForwardOutline
            onClick={() => setIndex(Math.min(gallery.length - 1, index + 1))}
            className="hover:scale-105 hover:cursor-pointer z-[1000000]"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
