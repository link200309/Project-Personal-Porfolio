//Components
import { Button } from "@/components/buttons/Button";
import SocialLinks from "@/components/titles/SocialLinks";

//React
import { useRef } from "react";

//Hooks
import useAnimationTyping from "@/hooks/useAnimationTyping";
import { useLanguage } from "@/hooks/useLanguage";

const HeroTitle = () => {
  const { t } = useLanguage();
  const title = useRef<HTMLHeadingElement | null>(null);
  useAnimationTyping(t.hero.title, title);

  return (
    <div className="w-[100%] flex flex-col gap-5 items-center justify-center z-10 text-center">
      <h1 className="text-display-md md:text-display-lg font-bold">
        John <span className="text-primary-pri3">Henry</span>
      </h1>
      <h2
        className="text-display-sm md:text-display-md text-primary-pri1"
        ref={title}
      ></h2>
      <p className="text-label-sm">{t.hero.subtitle}</p>

      <SocialLinks />

      <a href="/CV - John-Henry-Chavarria-Zurita - 2026.pdf" download>
        <Button variant="outline">{t.hero.button}</Button>
      </a>
    </div>
  );
};

export default HeroTitle;
