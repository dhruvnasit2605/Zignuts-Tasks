import React from "react";
import company_logo from "../assets/logo-1.png";

const Navbar = () => {
  return (
    <div className="flex relative">
        {/* company logo */}
      <div className="absolute top-[10px] left-[130px] ">
        <img src={company_logo} alt="image" width="295px" height="85px"></img>
      </div>

      {/* nav list */}
      <div className="absolute top-[42px] left-[998px]">
        <ul className="flex justify-between w-[472px] text-[18px] font-normal leading-[]">
            <li>About Us</li>
            <li>Services</li>
            <li>Team</li>
            <li>Clients</li>
            <li>Contact Us</li>
        </ul>
      </div>
      

    </div>
  );
};

export default Navbar;
