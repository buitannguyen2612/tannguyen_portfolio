import { Button } from "@material-tailwind/react";
import React from "react";
import { smallProject } from "../../data/index.js";

function SmallProject() {
  const handleViewCode = (link) => {
    window.open(link, "_blank", "noreferrer");
  };

  return (
    <div className="w-full min-h-screen bg-main_color flex flex-col items-center p-[2rem] gap-5">
      <h1 className="text-white text-3xl font-bold md:text-4xl lg:text-5xl">
        Small projects
      </h1>
      <div className="w-full h-max grid gap-[1rem] lg:grid-cols-4 auto-rows-auto xl:gap-[2rem] lg:gap-[2rem] md:gap-[2rem] md:grid-cols-3">
        {smallProject.map((vl, idx) => (
          <div
            key={idx}
            className="min-h-[10rem] flex flex-col items-start gap-2 rounded-xl bg-white p-[0.5rem] "
          >
            <div className="w-full h-[10rem] rounded-xl group overflow-hidden">
              <img
                src={vl.image}
                alt=""
                className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>
            <h1 className="text-title text-base font-bold w-full flex justify-start xl:text-xl lg:text-xl md:text-base">
              {vl.name}
            </h1>
            <div className="w-full flex justify-start gap-5 xl:gap-5 lg:gap-2 sm:gap-1">
              <Button
                variant="outlined"
                color="light-blue"
                onClick={() => handleViewCode(vl.gitHub)}
                className="min-w-[4rem] border-solid border-main_color border-[3px] rounded-sm px-1 text-sm text-main_color font-bold select-none xl:text-base lg:text-base"
              >
                View code
              </Button>

              <div
                onClick={() => handleViewCode(vl.live)}
                className="h-full flex justify-center items-center text-main_color text-base font-bold cursor-pointer xl:text-xl lg:text-base md:text-base"
              >
                See live
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SmallProject;
