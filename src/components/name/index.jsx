import { Button } from "@material-tailwind/react";
import React from "react";

function NameComponent() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col pl-[2px] xl:pl-[8rem] lg:pl-[8rem] md:pl-[0] sm:items-center lg:items-start xl:items-start  ">
      <div className="flex-col flex max-w-max gap-2 items-center sm:items-center lg:items-start">
        <p className="text-title text-[1.5rem] text-center font-bold max-w-full sm:text-5xl sm:text-center lg:text-start">
          Hi, my name is <span className="text-main_color">Bui Tan Nguyen</span>
          <br />
          Front End Developer
        </p>
        <Button
          variant="outlined"
          color="light-blue"
          className="w-[10rem] border-solid border-main_color border-[3px] rounded-sm px-1 text-xl text-main_color font-bold select-none md:text-2xl md:w-[13rem] lg:text-2xl lg:w-[12rem] xl:text-3xl xl:w-[15rem]"
        >
          Know more
        </Button>
      </div>
    </div>
  );
}

export default NameComponent;
