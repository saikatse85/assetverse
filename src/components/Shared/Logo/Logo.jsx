import React from "react";
import logo from "../../../assets/images/logo.png";
const Logo = () => {
  return (
    <div className="flex items-center">
      <img
        className="h-[40px] w-[40px] md:h-[55px] md:w-[55px]"
        src={logo}
        alt="logo"
      />
      <h2 className="text-xl md:text-3xl font-bold tracking-wide">
        AssetVerse HR
      </h2>
    </div>
  );
};

export default Logo;
