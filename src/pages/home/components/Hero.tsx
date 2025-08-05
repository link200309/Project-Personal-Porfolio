//React
import { motion } from "framer-motion";

//Assets
import qeen1 from "@/assets/images/characters/queen_1.png";
import chara1 from "@/assets/images/characters/chara_1.png";

//Components
import HeroTitlte from "./HeroTitlte";

//hooks
import useAnimationChara from "@/hooks/useAnimationChara";

export const Hero = () => {
  const { controlsChara } = useAnimationChara();

  return (
    <header className="h-screen w-full flex">
      <motion.div className="w-[25vw] absolute animate-float">
        <img src={qeen1} alt="Hero Image" />
      </motion.div>

      <motion.div className="w-[25vw] absolute right-0" animate={controlsChara}>
        <img src={chara1} alt="Hero Chara Image" />
      </motion.div>

      <HeroTitlte />
    </header>
  );
};
