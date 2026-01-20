//Components
import { Button } from "@/components/buttons/Button";

//React
import { useRef } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

//Hooks
import useAnimationTyping from "@/hooks/useAnimationTyping";
import { useLanguage } from "@/context/LanguageContext";

const HeroTitle = () => {
  const { t } = useLanguage();
  const title = useRef<HTMLHeadingElement | null>(null);
  useAnimationTyping(t.hero.title, title);

  return (
    <div className="w-[100%] flex flex-col gap-5 items-center justify-center z-10 text-center">
      <h1 className="text-display-lg font-bold">
        John <span className="text-primary-pri3">Henry</span>
      </h1>
      <h2 className="text-display-md text-primary-pri1" ref={title}></h2>
      <p>{t.hero.subtitle}</p>

      <div className="flex items-center justify-center gap-5">
        <FaLinkedin className="text-display-sm rounded" />
        <FaGithub className="text-display-sm" />
      </div>

      <Button variant="outline" width="10%">
        {t.hero.button}
      </Button>
    </div>
  );
};

export default HeroTitle;
