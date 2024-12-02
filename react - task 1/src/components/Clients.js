import React from 'react'
import BHP from "../assets//BHP.png";
import Boroondara from "../assets/Boroondara.png";
import Brigitte from "../assets/Brigitte.png";
import level from "../assets/level.png";
import MelbourneWater from "../assets/MelbourneWater.png";
import pacificHydro from "../assets/pacificHydro.png";
import port from "../assets/port.png";
import vcoss from "../assets/vcoss.png";
import victoria from "../assets/victoria.png";
import spanOurClients from "../assets/spanOurClients.png";



const Clients = () => {
  return (
    <div className="mt-[8rem]">
    {/* heading  */}
    <div>
        <h3 className="flex justify-center font-rubik text-5xl font-medium leading-[56.88px] text-left">OUR CLIENTS</h3>
        <span className="flex justify-center">
            <img src={spanOurClients} alt="span" />
        </span>
    </div>

    {/* all rows */}
    <div className="w-[69.5rem] ml-auto mr-auto mt-[2.5rem]">

        {/* row1  */}
        <div className="flex justify-between items-center">
            <img className="w-[13.25rem] h-[10rem]" src={Boroondara} alt="client image" />
            <img className="w-[8rem] h-[8.25rem]" src={port} alt="client image" />
            <img className="w-[13.875rem] h-[4rem]" src={Brigitte} alt="client image" />
            <img className="w-[8.9375rem] h-[6.6875rem]" src={level} alt="client image" />
            <img className="w-[10.25rem] h-[4rem]" src={BHP} alt="client image" />
        </div>

        {/* row2  */}
        <div className="flex justify-between items-center mt-[4rem]">
            <img className="w-[11.5625rem] h-[6.625rem]" src={victoria} alt="client image" />
            <img className="w-[16.75rem] h-[10rem]" src={pacificHydro} alt="client image" />
            <img className="w-[20.5rem] h-[8.25rem]" src={vcoss} alt="client image" />
            <img className="w-[15.1875rem] h-[3.625rem]" src={MelbourneWater} alt="client image" />
        </div>
    </div>
</div>
  )
}

export default Clients
