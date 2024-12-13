"use client"

import { Location } from "./location"



const Card = ({value}) => {
    const sun =  "rain.png"
    const img = value === "day" ? "rain.png" : "rain (1).png" 
    const nightCardColors =
    "bg-[111827bf] bg-gradient-to-b from-[#1F2937] to-[#11182700] text-white shadow-[#111827]";
    const colors = value === "day" ? "bg-[#ffffff] text-black" : nightCardColors;
    const nightIconColor = "text-white"
    const iconColor = value === "day" ? "text-black" : nightIconColor


    return(
 

    <div className={`w-[450px] h-[800px] absolute left-[193px] top-[216px] rounded-[60px] ${colors} space-y-52`}>

        <div className={`font-manrope my-1 flex  place-content-around  mt-[30px]`}>
            <div>
            <p>December 13, 2024</p>
            <p className="text-6xl">Krakow</p>
            </div>
            
            <Location/>
            
            </div>
       

            <div className="flex flex-col items-center">
            <img className="w-52 h-52" src={img}/>
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