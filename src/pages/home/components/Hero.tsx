//React
import { motion, useAnimationControls } from "framer-motion";
import { useState, useEffect } from "react";

//Assets
import qeen1 from "@/assets/images/characters/queen_1.png";
import chara1 from "@/assets/images/characters/chara_1.png";
import clickHere from "@/assets/images/characters/clickhere.png";

//Components
import HeroTitlte from "./HeroTitlte";

//hooks
import useAnimationChara from "@/hooks/useAnimationChara";

export const Hero = () => {
  const { controlsChara } = useAnimationChara();
  const constrolsShots = useAnimationControls();
  const [shots, setShots] = useState(false);

  const handleShot = async () => {
    console.log("Shot taken!");
    await constrolsShots.start({
      y: [0, 100],
      x: [0, -900],
      opacity: [0, 1, 0],
      transition: { duration: 1 },
    });
  };

  return (
    <header className="h-screen w-full flex">
      <motion.div className="w-[25vw] absolute animate-float">
        <img src={qeen1} alt="Hero Image" />
      </motion.div>

      <motion.div
        className="w-[25vw] absolute right-0 z-50"
        animate={controlsChara}
      >
        <img src={chara1} alt="Hero Chara Image" onClick={handleShot} />
        <motion.div
          className="w-6 h-6 rounded-full bg-[#FD9FC8] shadow-md shadow-[#FD9FC8] absolute top-[30%] z-50"
          initial={{ opacity: 0 }}
          animate={constrolsShots}
        ></motion.div>
        <motion.img
          src={clickHere}
          alt="Hero Image"
          className="w-24 relative left-16"
          initial={{ opacity: 0 }}
          transition={{ duration: 20, type: "spring" }}
          animate={{ opacity: 1 }}
        />
      </motion.div>

      <HeroTitlte />
    </header>
  );
};
