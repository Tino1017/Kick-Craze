import React from "react";
import nike from "./Images/nike.svg";
import { useState } from "react";

export const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(isHovered);
  };

  const handleMouseLeave = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="hero relative flex h-screen md:flex md:items-center md:justify-center md:px-10 ">
      <div className="relative z-[1] flex flex-col items-start justify-center mx-auto lg:m-0">
        <h1
          className="m-0 font-black text-8xl text-white  leading-none lg:text-9xl"
          style={{ fontFamily: "Poppins" }}
        >
          KICK <br />
          CRAZE
        </h1>
        <h2 className="font-bold text-xl my-3 text-white max-w-xs md:max-w-xl">
          THE BEST WAY TO{" "}
          <span
            value={isHovered}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="text-primary opacity-85 cursor-pointer hover:scale-150"
          >
            STAND ON BUSINESS
          </span>
        </h2>
        <button className="bg-white  text-primary font-black text-sm py-2 px-5 rounded-md hover:bg-opacity-60 active:scale-50 duration-700">
          SHOP NOW
        </button>
      </div>
      <div className=" flex justify-center items-center absolute z-0 top-[85px] sm:hidden">
        <img src={nike} alt="" className="opacity-95" />
      </div>
      <div
        className={`max-w-[450px] lg:max-w-[580px] ${
          isHovered ? "animate-bounce" : "animate-none"
        } hidden md:block`}
      >
        <img src={nike} alt="" />
      </div>
    </div>
  );
};
