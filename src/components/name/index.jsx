import { Button } from "@material-tailwind/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";

function NameComponent({ activeMoving }) {
  gsap.registerPlugin(useGSAP);
  const mainContainer = useRef();
  const mainTitle = useRef();
  const supContainer = useRef();
  const subtitle = useRef();

  // using to make the animation for ref
  useGSAP(
    (context, contextSafe) => {
      // ✅ safe, created during execution
      gsap.fromTo(
        mainContainer.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, delay: 3 }
      );
      gsap.fromTo(
        mainTitle.current,
        { x: -20, opacity: 0 },
        { opacity: 1, x: 0, duration: 1.5, delay: 4 }
      );
    },
    { scope: mainContainer }
  );

  // using to make the animation for ref
  useGSAP(
    (context, contextSafe) => {
      // ✅ safe, created during execution
      gsap.fromTo(
        supContainer.current,
        { opacity: 1 },
        { opacity: 0, duration: 1.5, display: "none", delay: 3 }
      );
      gsap.fromTo(
        subtitle.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 1.5, delay: 1 }
      );
    },
    { scope: supContainer }
  );

  return (
    <>
      <div
        ref={mainContainer}
        className="main_container w-full h-screen flex justify-center items-center flex-col pl-[2px] xl:pl-[8rem] lg:pl-[8rem] md:pl-[0] sm:items-center lg:items-start xl:items-start relative"
      >
        <div
          ref={mainTitle}
          className="flex-col flex max-w-max gap-2 items-center sm:items-center lg:items-start
      "
        >
          <p className="text-title text-[1.5rem] text-center font-bold max-w-full sm:text-5xl sm:text-center lg:text-start">
            Hi, my name is{" "}
            <span className="text-main_color">Bui Tan Nguyen</span>
            <br />
            Front End Developer
          </p>
          <Button
            variant="outlined"
            color="light-blue"
            onClick={() => activeMoving()}
            className="w-[10rem] border-solid border-main_color border-[3px] rounded-sm px-1 text-xl text-main_color font-bold select-none md:text-2xl md:w-[13rem] lg:text-2xl lg:w-[12rem] xl:text-3xl xl:w-[15rem]"
          >
            Know more
          </Button>
        </div>
      </div>
      <div
        ref={supContainer}
        className="w-full flex h-screen flex-col justify-center items-center gap-5 absolute top-0 left-0"
        style={{
          background: "linear-gradient(to right, #60c2c5, #9AD9DB,#60c2c5)",
        }}
      >
        <svg
          id="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-[10rem] h-[10rem] stroke-[5px] stroke-white dash_draw"
          style={{
            fillOpacity: "0",
            strokeDasharray: "4500",
          }}
        >
          <path d="M415.4 512h-95.1L212.1 357.5v91.1L125.7 512H28V29.8L68.5 0h108.1l123.7 176.1V63.5L386.7 0h97.7v461.5zM38.8 35.3V496l72-52.9V194l215.5 307.6h84.8l52.4-38.2h-78.3L69 13zm82.5 466.6l80-58.8v-101l-79.8-114.4v220.9L49 501.9h72.3zM80.6 10.8l310.6 442.6h82.4V10.8h-79.8v317.6L170.9 10.8zM311 191.7l72 102.8V15.9l-72 53v122.7z" />
        </svg>
        <p
          ref={subtitle}
          className="uppercase text-3xl sm:text-4xl lg:text-5xl font-thin text-white tracking-[2rem] ml-[20px]"
        >
          Nguyen
        </p>
      </div>
    </>
  );
}

export default NameComponent;
