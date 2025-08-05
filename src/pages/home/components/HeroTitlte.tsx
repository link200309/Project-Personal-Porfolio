//Components
import { Button } from "@/components/buttons/Button";

//React
import { useRef } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

//Hooks
import useAnimationTyping from "@/hooks/useAnimationTyping";

const HeroTitlte = () => {
  const title = useRef<HTMLHeadingElement>(null);
  useAnimationTyping("System Engineer and Developer", title);
  return (
    <div className="w-[100%] flex flex-col gap-5 items-center justify-center z-10 text-center">
      <h1 className="text-display-lg font-bold">
        John Henry <span className="text-primary-pri3">CH. Z.</span>
      </h1>
      <h2 className="text-display-md text-primary-pri1" ref={title}></h2>
      <p>
        Hello!! I'm a passionate developer with experience in building web
        applications.
      </p>

      <div className="flex items-center justify-center gap-5">
        <FaLinkedin className="text-display-sm rounded" />
        <FaGithub className="text-display-sm" />
      </div>

      <Button variant="outline" width="50%">
        Descargar CV
      </Button>
    </div>
  );
};

export default HeroTitlte;
