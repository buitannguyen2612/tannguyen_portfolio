import React, { useEffect, useRef, useState } from "react";
import { projectData } from "../../data/index.js";
import { Button } from "@material-tailwind/react";
import { Progress } from "antd";

const twoColors = {
  "0%": "#60c2c5",
  "100%": "#87d068",
};

function Project() {
  const heightBoxImage = useRef(null);
  const imageHeight = useRef(null);

  const [hover, setHover] = useState(null);
  const [rangeScroll, setRangeScroll] = useState(0);

  // join mouse event
  const handleMouse = (idx) => {
    setHover(idx);
    setRangeScroll(heightBoxImage.current.clientHeight);
  };

  // leavemouse event
  const leaveMouse = () => {
    setHover(null);
    setRangeScroll(0);
  };

  // open another page with link
  const handleViewCode = (link) => {
    window.open(link, "_blank", "noreferrer");
  };

  // checking if height of image and the container
  const checkActiveScroll = () => {
    const heightImage = imageHeight.current.clientHeight;
    const withImage = imageHeight.current.clientWidth;
    const containerHeight = heightBoxImage.current.clientHeight;
    const containerWith = heightBoxImage.current.clientWidth;
    if (heightImage > containerHeight || withImage > containerWith) {
      imageHeight.current.style.height = "auto";
      imageHeight.current.style.width = "100%";
    } else {
      // If the image is too small it will fit with the container
      imageHeight.current.style.height = "100%";
      imageHeight.current.style.width = "auto";
      imageHeight.current.style.objectFit = "cover";
    }
  };

  useEffect(() => {
    if (heightBoxImage.current && imageHeight.current) {
      checkActiveScroll();
    }
  }, []);

  return (
    <div className="w-full h-auto flex flex-col gap-5 items-center">
      {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
      <h1 className="text-title text-3xl font-bold md:text-4xl lg:text-5xl">
        Projects
      </h1>
      <div className="w-full flex-col flex items-center p-[0.2rem] gap-[2rem] md:p-[2rem] lg:p-[3rem]">
        {projectData.map((vl, idx) => (
          <div
            key={idx}
            className="flex lg:w-[80%] lg:justify-between lg:h-[25rem] lg:flex-row lg:gap-0 w-[90%] gap-1 flex-col-reverse justify-start h-max"
          >
            {/* text of container */}
            <div className="w-[100%] flex flex-col items-start gap-2 lg:w-[35%] lg:gap-5">
              <h1 className="text-title text-xl font-bold">{vl.name}</h1>
              <p className="text-title text-base font-normal">{vl.des}</p>
              <div className="flex gap-10">
                <Button
                  variant="outlined"
                  color="light-blue"
                  onClick={() => handleViewCode(vl.sourceCode)}
                  className="min-w-[5rem] border-solid border-main_color border-[3px] rounded-sm px-1 text-xl text-main_color font-bold select-none"
                >
                  View code
                </Button>
                {vl.live !== "" && (
                  <div
                    className="h-full flex justify-center items-center text-main_color text-xl font-bold cursor-pointer"
                    onClick={() => handleViewCode(vl.live)}
                  >
                    See live
                  </div>
                )}
              </div>
              <div className="w-full">
                <Progress
                  percent={vl.loading}
                  status="active"
                  strokeColor={twoColors}
                  className="w-full"
                />
              </div>
            </div>
            {/* Ending text of container */}

            {/* Image of conatainer */}
            <div
              className="w-[100%] h-[10rem] overflow-hidden rounded-xl shadow-xl md:h-[22rem] lg:w-[60%] lg:h-full"
              onMouseEnter={() => handleMouse(idx)}
              onMouseLeave={() => leaveMouse()}
              ref={heightBoxImage}
            >
              <img
                src={vl.image}
                alt={vl.name}
                ref={imageHeight}
                className={`w-full translate-y-0 transition duration-[10000ms] ease-in-out `}
                style={{
                  transform:
                    hover === idx &&
                    `translateY(calc(-100% + ${rangeScroll}px))`,
                }}
              />
            </div>
            {/* Ending Image of conatainer */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
