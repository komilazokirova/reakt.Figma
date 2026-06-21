import React from "react";
import iphoneImg from "../assets/NavbarRasm.svg";

const Banner = () => {
  return (
    <div className="mt-9 w-[892px] h-[344px]">
      <img 
        src={iphoneImg} 
        alt="iPhone 14" 
        className="w-full h-full object-cover" 
      />
    </div>
  );
};

export default Banner;