import { useState } from "react";
import { type Technologies } from "@/types";

type TechLogoProps = {
  logo: Technologies;
};

const TechLogo = ({ logo }: TechLogoProps) => {
  const [onLogo, setOnLogo] = useState(false);

  return (
    <div
      className="flex items-center justify-center relative md:py-4 md:p-5 before:content-[''] before:absolute before:rounded-[50%] before:shadow-[0_0_35px_12px_var(--logo-color)] before:z-[-2] after:content-[''] after:absolute after:border after:border-transparent after:rounded-2xl after:backdrop-blur-md after:z-[-1] after:w-full after:h-full hover:after:border-[var(--logo-color)] hover:before:shadow-[0_0_35px_18px_var(--logo-color)] hover:after:backdrop-blur-xl after:transition-all after:duration-300 before:transition-all before:duration-300"
      style={
        {
          "--logo-color": logo.color,
        } as React.CSSProperties
      }
      onMouseOver={() => setOnLogo(true)}
      onMouseOut={() => setOnLogo(false)}
    >
      {onLogo && (
        <span className="flex items-center justify-center absolute -top-12 min-w-28 p-2 border border-[var(--logo-color)] rounded-full backdrop-blur-md text-[var(--logo-color)]">
          {logo.name}
        </span>
      )}

      <img src={logo.image} alt="Technology Logo" className="h-8" />
    </div>
  );
};

export default TechLogo;
