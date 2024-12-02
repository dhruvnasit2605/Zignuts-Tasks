import React from "react";
import left from "../assets/Asset1.png";
import right from "../assets/Asset2.png";
import company_logo from "../assets/logo-1.png";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex">
          {/*  top left  image */}
          <img className="w-32 h-28" src={left} alt="asset1" />

          {/* company logo */}
          <img
            className="w-72 h-20 mt-2.5 left-32"
            src={company_logo}
            alt="logo"
          />
        </div>

        {/* nav list */}
        <div className="flex">
          <ul className="flex justify-between list-none w-[29.5rem] font-roboto text-[18px] font-normal mt-7 right-40 relative z-10">
            <li>About Us</li>
            <li>Services</li>
            <li>Team</li>
            <li>Clients</li>
            <li>Contact Us</li>
          </ul>

          {/* top right image  */}
          <img
            className="w-80 h-96 top-[-0.875rem] right-0 absolute"
            src={right}
            alt="asset2"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
