import React from "react";

import bright from "../assets/Assets4.png";
import group from "../assets/Group1.png";
import aboutus from "../assets/aboutus.png";
import usericon from "../assets/usericon.png";
import settingsicon from "../assets/settingsicon.png";
import asset51 from "../assets/Asset51.png"

const Home = () => {
  return (
   
        <div className="flex w-full">
          <img className="relative  my-auto w-[75%] h-[75%]" src={group} alt="Group" />

          <div className="absolute leading-[66.36px] ml-[984px] mt-[112px]">
            <p className="font-rubik text-[56px] font-medium text-left">
              Mendleson<br />
              Communication<br />
              and Engagement<br />
            </p>

            <p className="font-rubik text-lg font-normal leading-[21.33px] text-left mt-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Malesuada sed ipsum, ut quam volutpat, tortor.
            </p>
          </div>

          <img className="absolute w-[207px] h-[249px] right-0 bottom-0" src={bright} alt="Asset4" />
        
        </div>

  );
};

export default Home;
