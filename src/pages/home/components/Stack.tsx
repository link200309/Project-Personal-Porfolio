import SectionTitle from "@/components/titles/SectionTitle";

import logoHtml from "@/assets/images/technologies/logo-html.svg";
import logoCss from "@/assets/images/technologies/logo-css.svg";
import logoJs from "@/assets/images/technologies/logo-js.svg";
import logoTs from "@/assets/images/technologies/logo-ts.svg";
import logoReact from "@/assets/images/technologies/logo-react.svg";
import logoTailwind from "@/assets/images/technologies/logo-tailwindcss.svg";

const Stack = () => {
  const frontendTech = [
    { image: logoHtml, color: "#EF652A" },
    { image: logoCss, color: "#30A9DC" },
    { image: logoJs, color: "#F7DF1E" },
    { image: logoTs, color: "#3178C6" },
    { image: logoReact, color: "#61DAFB" },
    { image: logoTailwind, color: "#38BDF8" },
  ];

  return (
    <section className="mb-20">
      <SectionTitle title="Tech Stack" />

      <div className="w-[50%] border border-primary-pri3 backdrop-blur-sm grid grid-cols-3 gap-8 mt-8 p-6 rounded-3xl place-items-center bg-[url(/src/assets/images/decoration/noisy.webp)]">
        <h3 className="text-title-md col-span-3">Frontend</h3>

        {frontendTech.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center relative py-4 p-5 before:content-[''] before:absolute before:rounded-[50%] before:shadow-[0_0_35px_12px_var(--logo-color)] before:z-[-2] after:content-[''] after:absolute after:border after:border-transparent after:rounded-2xl after:backdrop-blur-md after:z-[-1] after:w-full after:h-full hover:after:border-[var(--logo-color)] hover:before:shadow-[0_0_35px_18px_var(--logo-color)] hover:after:backdrop-blur-xl after:transition-all after:duration-300 before:transition-all before:duration-300"
            style={
              {
                "--logo-color": logo.color,
              } as React.CSSProperties
            }
          >
            <img src={logo.image} alt="Technology Logo" className="h-8" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
