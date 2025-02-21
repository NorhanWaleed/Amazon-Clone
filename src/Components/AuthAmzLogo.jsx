import React from "react";
import logo from "../assets/images/amzlogo.png";

const Logo = () => {
  return (
    <div className="flex justify-center">
      <img src={logo} alt="Amazon Logo" className="size-1/5 bg-transparent" />
    </div>
  );
};

export default Logo;
