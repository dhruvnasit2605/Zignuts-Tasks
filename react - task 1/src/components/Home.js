import React from 'react'
import left from "../assets/Asset1.png";
import right from "../assets/Asset2.png";
import bright from "../assets/Assets4.png";
import group from "../assets/Group1.png"

const Home = () => {
  
  return (
    <div className='relative '>

        {/* corner images */}
        <img className='' src={left} width="119px" height="111px"></img>
        <img className='absolute top-[-14px] left-[1318px]' src={right} width="359px" height="376px"></img>
        <img className='absolute top-[116px] left[-29px] ' src={group} width="1426px" height="789.19px"></img>
        <img className='absolute top-[609px] left-[1420px]' src={bright} width="207px" height="249px"></img>
        
        {/* main bold text */}
        <div className='W-[459px] h-[198px] absolute top-[277px] left-[926px] text-justify font-[500] text-[56px] leading-[66.36px] font-rubik'>
          Mendleson <br></br>Communication <br></br> and Engagement
        </div>

        {/* sub text */}

        <div className='w-[544px] h-[67px] absolute top-[500px] left-[926px] font-[400] text-[18px] leading-[21.33px] text-justify font-rubik'>
          Lorem ipsum dolor sit amet, consectetur adipsicing elit.
          <br>
          </br>
          Malesuada sed ipsum, ut quam volutpat tortor.
        </div>

        
    </div>
  )
}

export default Home
