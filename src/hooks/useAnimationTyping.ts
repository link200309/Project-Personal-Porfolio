//React
import { useEffect, useRef, type RefObject } from "react";

const useAnimationTyping = (
  text: string,
  title: RefObject<HTMLHeadingElement | null>
): void => {
  const render = useRef(false);

  useEffect(() => {
    if (!title) return;
    
    const typingTitle = () => {
      render.current = true;
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length && title.current) {
          title.current.textContent += text[index];
          index++;
        } else {
          clearInterval(interval);
        }
      }, 100);
    };
    if (render.current) return;
    typingTitle();
  }, [title, text]);
};

export default useAnimationTyping;
