//React
import { FaLinkedin, FaGithub } from "react-icons/fa";

//Assets
import qeen1 from "@/assets/images/characters/queen_1.png";

//Components
import { Button } from "@/components/buttons/Button";

export const Hero = () => {
  return (
    <header className="h-screen w-full flex">
      {/*Imagen qeen1*/}
      <div className="w-[25vw] absolute animate-float">
        <img src={qeen1} alt="Hero Image" />
      </div>

      {/*Nombre y presentacion*/}
      <div className="w-[100%] flex items-center justify-center">
        <div className="max-w-85 z-10 text-center flex flex-col gap-5">
          <h1 className="text-display-lg font-bold">John Henry CH. Z.</h1>
          <h2 className="text-display-md text-primary-pri1">
            System Engineer and Developer
          </h2>
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
      </div>
    </header>
  );
};
