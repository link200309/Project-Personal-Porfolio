const BgAnimation = () => {
  return (
    <div className="h-screen fixed -z-10">
      <svg
        version="1.1"
        id="stroke_jh"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 500 300"
        xmlSpace="preserve"
        className="h-full w-auto shrink-0 transition-all duration-1000 bg-svg"
      >
        <path
          id="j-path"
          className="st0"
          d="M150 40
           L150 200
           Q150 260, 100 260
           Q50 260, 50 200
           L90 200
           Q90 230, 110 230
           Q130 230, 130 200
           L130 40 Z"
          stroke="#c4c4c4"
          fill="transparent"
          stroke-width="0.5"
          stroke-linejoin="round"
        />

        <path
          id="h-path"
          className="st0"
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
          stroke="#c4c4c4"
          fill="transparent"
          stroke-width="0.5"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default BgAnimation;
