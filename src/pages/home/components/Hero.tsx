//React
import { motion } from "framer-motion";
import { useState, useMemo } from "react";

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
  const [shots, setShots] = useState<{ id: number }[]>([]);
  const [protections, setProtections] = useState<{ id: number }[]>([]);
  const sampleArray = useMemo(() => [...Array(8).keys()], []);

  const handleShot = () => {
    setShots((prev) => [...prev, { id: Date.now() }]);
  };

  const handleCompleteShot = (id: number) => {
    setShots((prev) => prev.filter((shot) => shot.id !== id));
    setProtections((prev) => [...prev, { id }]);
  };

  const handleCompleteProtection = (id: number) => {
    setProtections((prev) => prev.filter((protection) => protection.id !== id));
  };

  return (
    <header className="h-screen w-full flex">
      <motion.div className="w-[25vw] absolute animate-float">
        <img src={qeen1} alt="Hero Image" />
        {protections.map((protection) =>
          sampleArray.map((_, index) => {
            const size = index * 150;
            const xOffset = 10 - index * 5;
            return (
              <motion.div
                key={protection.id + index}
                style={{ width: `${size}px`, height: `${size}px` }}
                className="absolute top-[48%] right-0 rounded-full bg-primary-pri3/20 shadow-md shadow-primary-pri3/20 z-50"
                initial={{ x: 0, y: -size / 2, opacity: 1 }}
                animate={{ x: xOffset, opacity: 0 }}
                transition={{ duration: 1 }}
                onAnimationComplete={() => {
                  if (index === sampleArray.length - 1) {
                    handleCompleteProtection(protection.id);
                  }
                }}
              ></motion.div>
            );
          })
        )}
      </motion.div>

      <motion.div
        className="w-[25vw] absolute right-0 z-50"
        animate={controlsChara}
      >
        <img src={chara1} alt="Hero Chara Image" onClick={handleShot} />

        {shots.map((shot) => (
          <motion.div
            key={shot.id}
            className="w-6 h-6 rounded-full bg-[#FD9FC8] shadow-md shadow-[#FD9FC8] absolute top-[30%] z-50"
            initial={{ y: 0, x: 0 }}
            animate={{ y: 200, x: -800 }}
            transition={{ duration: 0.3 }}
            onAnimationComplete={() => handleCompleteShot(shot.id)}
          ></motion.div>
        ))}

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
