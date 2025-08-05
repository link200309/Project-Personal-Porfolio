//React
import { useEffect } from "react";
import {
  useAnimationControls,
  type LegacyAnimationControls,
} from "framer-motion";

const useAnimationChara = (): { controlsChara: LegacyAnimationControls } => {
  const controlsChara = useAnimationControls();

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

  return { controlsChara };
};

export default useAnimationChara;
