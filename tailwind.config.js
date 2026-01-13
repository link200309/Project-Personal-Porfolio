/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          pri1: "#FF211E",
          pri2: "#fe7e53",
          pri3: "#FAA628",
        },
      },

      fontSize: {
        "display-sm": ["36px", { lineHeight: "44px" }],
        "display-md": ["45px", { lineHeight: "52px" }],
        "display-lg": ["57px", { lineHeight: "64px" }],
        "title-sm": ["18px", { lineHeight: "22px" }],
        "title-md": ["24px", { lineHeight: "28px" }],
        "title-lg": ["28px", { lineHeight: "32px" }],
        "label-sm": ["14px", { lineHeight: "16px" }],
        "label-md": ["16px", { lineHeight: "18px" }],
        "label-lg": ["22px", { lineHeight: "24px" }],
        "body-sm": ["14px", { lineHeight: "16px" }],
        "body-md": ["16px", { lineHeight: "18px" }],
        "body-lg": ["20px", { lineHeight: "22px" }],
      },

      backgroundImage: {
        "gradient-1":
          "linear-gradient(to right, #F4F4F4 0%, #FF211E 0%, #F4F4F4 100%)",
      },

      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        moveAround: {
          "0%": { bottom: "0px", left: "-1px" },
          "25%": { bottom: "calc(100% - 4px)", left: "-1px" },
          "50%": { bottom: "calc(100% - 4px)", left: "calc(100% - 3px)" },
          "75%": { bottom: "0px", left: "calc(100% - 3px)" },
          "100%": { bottom: "0px", left: "-1px" },
        },
        moveDown: {
          "0%": { transform: "translateY(-300px)" },
          "70%": { transform: "translateY(50px)" },
          "80%": { transform: "translateY(20px)" },
          "90%": { transform: "translateY(10px)" },
          "95%": { transform: "translateY(5px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        moveAround: "moveAround 7s linear infinite",
        moveDown: "moveDown 1s linear",
        moveChara:
          "moveDown 0.7s ease-out forwards, float 3s ease-in-out infinite 0.7s",
      },
    },
  },
  plugins: [],
};
