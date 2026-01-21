import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { BsMoonStarsFill } from "react-icons/bs";
import { MdWbSunny } from "react-icons/md";

const ThemeButton = ({ className }: { className: string }) => {
  const { onChangeTheme, theme } = useContext(ThemeContext);
  return (
    <button onClick={onChangeTheme} className={className}>
      {theme === "light" ? (
        <BsMoonStarsFill size={22} className="text-blue-500" />
      ) : (
        <MdWbSunny size={25} className="text-primary-pri2" />
      )}
    </button>
  );
};

export default ThemeButton;
