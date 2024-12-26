import React, { useState } from 'react'

export default function Card({id,image,info,price,name,removeTour}) {
    const[readmore,setreadmore] = useState(true);
    const description = readmore ? `${info.substring(0,200)}....` : info;
   
  return (
    <div className='card'>
      <img src={image}></img>
      <div className='tour-info'>
        <div className='tour-details'>
            <h4 className='tour-price'>{price}</h4>
            <h4 className='tour-name'>{name}</h4>
         </div>
        <div className='description'>
            {description}
            <span onClick={()=>{setreadmore(!readmore)}}>
                {
                    (readmore) ? "readmore" : "readless"
                }
            </span>
        </div>
      </div>
     
      <button className='btn-red' onClick={()=>{removeTour(id)}}>Not Interested</button>
    </div>
  )
}
