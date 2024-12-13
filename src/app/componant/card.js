"use client"

import { Location } from "./location"



const Card = ({value}) => {
    const img = value === "day" ? "rain.png" : "rain (1).png" 
    const nightCardColors =
    "bg-[111827bf] bg-gradient-to-b from-[#1F2937] to-[#11182700] text-white shadow-[#111827]";
    const colors = value === "day" ? "bg-[#ffffff] text-black" : nightCardColors;
    const nightIconColor = "text-white"
    const iconColor = value === "day" ? "text-black" : nightIconColor
  
    


    return(
 

    <div className={`w-[490px] h-[880px] absolute left-[193px] top-[216px] rounded-[60px] z-10 ${colors} space-y-20`}>

        <div className={`font-manrope my-1 flex  place-content-around  mt-[30px]`}>
            <div>
            <p>December 13, 2024</p>
            <p className="text-6xl">London</p>
            </div>
            
            <Location/>
            
            </div>
       

            <div className="flex flex-col items-center">
            <img className="w-[274px] h-[274px] top-[204px]" src={img}/>
            </div>


            <div className="ml-[48px]  mt-1">
          <div className="font-extrabold text-[144px] leading-[144px] text-transparent bg-clip-text  bg-gradient-to-b from-[#111827] to-[#6B7280]">
            27°
          </div>
          <p className="font-extrabold text-[24px]">Bright</p>
        </div>


            <div className={`flex gap-6 text-3xl justify-around  mt-auto space-x-3 ${iconColor} opacity-60`}>
              <i className="fa-solid fa-house"></i>
              <i className="fa-solid fa-location-dot"></i>
              <i className="fa-solid fa-heart"></i>
              <i className="fa-solid fa-user"></i>
              </div>


            </div>
    

    )
}

export {Card}