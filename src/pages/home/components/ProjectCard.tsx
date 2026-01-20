import { useRef } from "react";
import { type Project } from "@/types";
import { useLanguage } from "@/context/LanguageContext";

const ProjectCard = ({ project }: { project: Project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  const putLight = () => {
    if (cardRef.current) {
      cardRef.current.classList.add("card-border-ligth");
    }
  };

  const outLight = () => {
    cardRef.current?.classList.remove("card-border-ligth");
  };

  return (
    <div
      className="relative h-64 border border-primary-pri3 rounded-md cursor-pointer z-50"
      ref={cardRef}
      onMouseOver={putLight}
      onMouseOut={outLight}
    >
      <img
        src={project.gallery ? project.front : ""}
        alt="imagen de tarjeta"
        className="absolute inset-0 w-full h-full object-cover rounded-md"
      />

      <div className="absolute z-10 p-4 bottom-0 w-full bg-black/65">
        <h3 className="text-label-sm text-gray-300 ">
          {language == "es" ? project.applicationEs : project.application}
        </h3>
        <p className="text-white mt-2">
          {language == "es" ? project.titleEs : project.title}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
