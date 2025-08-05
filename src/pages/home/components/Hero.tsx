//React
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";

//Assets
import qeen1 from "@/assets/images/characters/queen_1.png";
import chara1 from "@/assets/images/characters/chara_1.png";

//Components
import { Button } from "@/components/buttons/Button";

export const Hero = () => {
  const controlsChara = useAnimationControls();
  const title = useRef(null);
  const render = useRef(false);

  useEffect(() => {
    const initialAnimation = async () => {
      await controlsChara.start({
        y: [-300, 0],
        transition: { duration: 1.5, ease: "easeOut", type: "spring" },
      });

      controlsChara.start({
        y: [0, 20, 0],
        transition: {
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        },
      });
    };

    initialAnimation();
  }, [controlsChara]);

  useEffect(() => {
    const typingTitle = () => {
      render.current = true;
      const text = "System Engineer and Developer";
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          title.current.textContent += text[index];
          index++;
        } else {
          clearInterval(interval);
        }
      }, 100);
    };
    if (render.current) return;
    typingTitle();
  }, []);

  return (
    <header className="h-screen w-full flex">
      {/*Imagen qeen1*/}
      <motion.div className="w-[25vw] absolute animate-float">
        <img src={qeen1} alt="Hero Image" />
      </motion.div>
      <motion.div className="w-[25vw] absolute right-0" animate={controlsChara}>
        <img src={chara1} alt="Hero Chara Image" />
      </motion.div>

      {/*Nombre y presentacion*/}
      <div className="w-[100%] flex items-center justify-center">
        <div className="max-w-85 z-10 text-center flex flex-col gap-5">
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
      </div>
    </header>
  );
};
