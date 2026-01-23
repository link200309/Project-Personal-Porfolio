const BgAnimation = () => {
  return (
    <div className="h-[40%] fixed -z-50 top-[25%] md:h-screen md:top-0">
      <svg
        version="1.1"
        id="stroke_jh"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 410 300"
        xmlSpace="preserve"
        className="h-full w-auto shrink-0 bg-svg stroke-[#919191] dark:stroke-[#464646]"
      >
        <path
          id="j-path"
          d="M170 40
       L170 200
       Q170 260, 110 260
       Q50 260, 50 200
       L90 200
       Q90 230, 110 230
       Q130 230, 130 200
       L130 40 Z"
          // stroke="#c4c4c4"
          fill="transparent"
          stroke-width="0.5"
          stroke-linejoin="round"
        />

        <path
          id="h-path"
          d="M220 40
       L220 260
       L260 260
       L260 170
       L320 170
       L320 260
       L360 260
       L360 40
       L320 40
       L320 130
       L260 130
       L260 40 Z"
          // stroke="#c4c4c4"
          fill="transparent"
          stroke-width="0.5"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default BgAnimation;
