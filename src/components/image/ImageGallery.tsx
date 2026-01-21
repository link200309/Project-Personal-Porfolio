import { useState } from "react";
import { IoArrowBack, IoArrowForwardOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { type Project } from "@/types";

//components
import TechLogo from "@/components/image/TechLogo";

//hooks
import { useLanguage } from "@/hooks/useLanguage";

type ImageGalleryProps = {
  selectedProject: Project;
  setSelectedProject: (value: Project | null) => void;
};

const ImageGallery = ({
  selectedProject,
  setSelectedProject,
}: ImageGalleryProps) => {
  const [index, setIndex] = useState(0);
  const { language } = useLanguage();

  return (
    <div className="fixed w-screen h-screen top-0 left-0 bg-black/90 z-[10000] flex items-center justify-center">
      <div className="absolute flex flex-col gap-4 items-center justify-center">
        <h2 className="text-title-md text-gray-300">
          {language == "es" ? selectedProject.titleEs : selectedProject.title}
        </h2>

        <img
          key={index}
          src={selectedProject.gallery?.[index] || ""}
          alt="Imagen del proyecto"
          className="md:h-[500px] rounded-lg border border-white cursor-pointer object-cover"
          loading="lazy"
        />

        <div className="flex gap-4">
          {selectedProject.technologies.map((logo, index) => (
            <TechLogo key={index} logo={logo} />
          ))}
        </div>

        <div className="flex text-gray-300 text-3xl">
          <IoArrowBack
            onClick={() => setIndex(Math.max(0, index - 1))}
            className="hover:scale-110 hover:cursor-pointer"
            style={{
              color: index == 0 ? "#d1d5db55" : "#d1d5db",
            }}
          />
          <IoArrowForwardOutline
            onClick={() =>
              setIndex(
                Math.min(
                  (selectedProject.gallery?.length
                    ? selectedProject.gallery.length
                    : 0) - 1,
                  index + 1,
                ),
              )
            }
            className="hover:scale-110 hover:cursor-pointer z-[1000000]"
            style={{
              color:
                index ==
                (selectedProject.gallery?.length
                  ? selectedProject.gallery.length
                  : 0) -
                  1
                  ? "#d1d5db55"
                  : "#d1d5db",
            }}
          />
          <IoMdClose
            onClick={() => setSelectedProject(null)}
            className="hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
