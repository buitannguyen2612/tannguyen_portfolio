import React, { forwardRef } from "react";
import cvImage from "../../images/anhcv.jpg";
import { iconContact, skills } from "../../data/index.js";

const AboutMe = forwardRef((_, ref) => {
  // open another page with link
  const handleViewProfile = (link) => {
    window.open(link, "_blank", "noreferrer");
  };

  return (
    <div
      ref={ref}
      className="w-full h-screen bg-main_color flex flex-col items-center p-[0.5rem] gap-1 md:p-[1rem] lg:p-[2rem] xl:p-[5rem] lg:gap-5"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 84%, 0% 100%)",
      }}
    >
      <h1 className="text-white text-3xl font-bold md:text-4xl lg:text-5xl">
        ABOUT ME
      </h1>
      <div className="w-[100%] flex justify-between flex-col gap-2 lg:flex-row lg:w-[80%] lg:gap-0">
        <div className="w-full h-[15rem] rounded-xl md:h-[25rem] lg:w-[40%] lg:h-[25rem]">
          <img
            src={cvImage}
            alt=""
            className="w-full h-full object-cover rounded-xl shadow-xl"
          />
        </div>
        <div className="w-full h-auto flex flex-col items-start justify-center gap-[0.2rem] sm:gap-[0.3rem] lg:w-[55%] lg:h-full lg:gap-1">
          <p className="text-white text-sm md:text-base lg:text-base">
            I am self thought front-end developer who is passionate about
            building awesome website's and application's i have learned and used
            HTML, CSS, TAILWIND, MUI, Javascript and the best of that is reactjs
            and nextjs. I am self driven and grown mind in every job and hard
            working. Beside that i am very friendly who can be fit any
            team.Anyway i just want to say that coding is my life and my
            feeling.
          </p>
          <div className="w-full flex flex-col gap-1 lg:gap-2">
            <p className="text-sm text-white md:text-base lg:text-base">
              My current skill
            </p>
            <div className="flex gap-2">
              {skills.map((vl, idx) => (
                <div key={idx} className="h-[3rem] w-[3rem] rounded-xl">
                  <img
                    src={vl.Image}
                    alt={vl.name}
                    className="w-full h-full rounded-xl object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex gap-1 lg:gap-2">
            <p className="text-sm text-white md:text-base lg:text-base">
              Contact me
            </p>
            <div className="flex gap-2">
              {iconContact.map((vl, idx) => (
                <div
                  key={idx}
                  className="h-full cursor-pointer"
                  onClick={() => handleViewProfile(vl.path)}
                >
                  {vl.icon}
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-white md:text-base lg:text-base">
            Email: tombtn2612@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
});

export default AboutMe;
