import React from "react";
import Navigation from "./Navigation.jsx";
import Logo2 from "../assets/images/Logo2.png";

const Header = () => {
  return (
    <header className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#737373] text-white">
      <div className="flex">
        <img src={Logo2} alt="Developer Logo" style={{ width: "100px" }} />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
