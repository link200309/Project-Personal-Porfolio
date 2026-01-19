//React
import { motion } from "framer-motion";
import { useState, useMemo, useContext } from "react";

//Assets
import qeen1 from "@/assets/images/characters/queen_1.png";
import chara1 from "@/assets/images/characters/chara_1.png";
import clickHere from "@/assets/images/characters/clickhere.png";
import clickHereDark from "@/assets/images/characters/clickheredark.png";

//Components
import HeroTitlte from "./HeroTitlte";

//hooks
import useAnimationChara from "@/hooks/useAnimationChara";
import { ThemeContext } from "@/context/ThemeContext";

export const Hero = () => {
  const { controlsChara } = useAnimationChara();
  const [shots, setShots] = useState<{ id: number }[]>([]);
  const [protections, setProtections] = useState<{ id: number }[]>([]);
  const sampleArray = useMemo(() => [...Array(8).keys()], []);
  const { theme } = useContext(ThemeContext);

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
    <header className="h-screen w-full flex" id="home">
      <motion.div className="w-[25vw] absolute animate-float">
        <img src={qeen1} alt="Hero Image" />
        {protections.map((protection) =>
          sampleArray.map((_, index) => {
            const size = index * 150;
            const xOffset = 0 - index * 2;
            return (
              <motion.div
                key={protection.id + index}
                style={{ width: `${size}px`, height: `${size}px` }}
                className="absolute top-[48%] right-0 rounded-full bg-primary-pri3/10 shadow-md shadow-primary-pri3/10 z-50"
                initial={{ x: xOffset, y: -size / 2, opacity: 1 }}
                animate={{ x: xOffset + 10, opacity: 0, scale: 1.05 }}
                transition={{ duration: 1 }}
                onAnimationComplete={() => {
                  if (index === sampleArray.length - 1) {
                    handleCompleteProtection(protection.id);
                  }
                }}
              ></motion.div>
            );
          }),
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
            className="w-5 h-5 rounded-full bg-[#ffe3f4] shadow-[0_0px_35px] shadow-fuchsia-700 absolute top-[30%] z-50"
            initial={{ y: 0, x: 0 }}
            animate={{ y: 200, x: -800 }}
            transition={{ duration: 0.3 }}
            onAnimationComplete={() => handleCompleteShot(shot.id)}
          ></motion.div>
        ))}

        {theme === "dark" ? (
          <motion.img
            src={clickHereDark}
            alt="Hero Image"
            className="w-24 relative left-16"
            initial={{ opacity: 0 }}
            transition={{ duration: 20, type: "spring" }}
            animate={{ opacity: 1 }}
          />
        ) : (
          <motion.img
            src={clickHere}
            alt="Hero Image"
            className="w-24 relative left-16"
            initial={{ opacity: 0 }}
            transition={{ duration: 20, type: "spring" }}
            animate={{ opacity: 1 }}
          />
        )}
      </motion.div>

      <HeroTitlte />
    </header>
  );
};
