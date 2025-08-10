import React from "react";

type Experience = {
  title: string;
  date: string;
  descriptions: React.JSX.Element[];
};

export const experiences: Experience[] = [
  {
    title: "Universidad Mayor de San Simon - System Engineer",
    date: "Febrero 2022 - PRESENTE",
    descriptions: [
      <>
        I acquired essential programming skills ,{" "}
        <span className="text-primary-pri1 font-semibold">
          OOP, data structures, and algorithms
        </span>
        .
      </>,
      <>
        I developed various{" "}
        <span className="text-primary-pri1 font-semibold">team projects</span>,
        which allowed me to simulate a work-like environment.
      </>,
      <>
        I worked with{" "}
        <span className="text-primary-pri1 font-semibold">
          SQL and NoSQL databases
        </span>
        , managing databases and creating optimized queries .
      </>,
      <>
        I acquired extensive{" "}
        <span className="text-primary-pri1 font-semibold">mathematical</span>{" "}
        and{" "}
        <span className="text-primary-pri1 font-semibold">statistical </span>
        knowledge, which allows me to create innovative solutions in
        collaboration with various tools and technologies.
      </>,
      <>
        I acquired extensive{" "}
        <span className="text-primary-pri1 font-semibold">mathematical</span>{" "}
        and{" "}
        <span className="text-primary-pri1 font-semibold">statistical </span>
        knowledge, which allows me to create innovative solutions in
        collaboration with various tools and technologies.
      </>,
      <>
        I developed efficient and robust{" "}
        <span className="text-primary-pri1 font-semibold">
          web applications
        </span>
        . And implementation of{" "}
        <span className="text-primary-pri1 font-semibold">RESTful APIs</span>.
      </>,
      <>
        I developed cross-platform{" "}
        <span className="text-primary-pri1 font-semibold">
          mobile applications
        </span>
        .
      </>,
    ],
  },
];
