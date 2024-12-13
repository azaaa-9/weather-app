"use client"

import { Location } from "./location"
import '@fortawesome/fontawesome-free/css/all.min.css';



const Card = ({ value, weatherData }) => {
  const img = value === "day" ? "rain.png" : "rain (1).png"; 
  const nightCardColors =
    "bg-[111827bf] bg-gradient-to-b from-[#1F2937] to-[#11182700] text-white shadow-[#111827]";
  const colors = value === "day" ? "bg-[#ffffff] text-black" : nightCardColors;
  const nightIconColor = "text-white";
  const iconColor = value === "day" ? "text-black" : nightIconColor;


  const temperature = weatherData ? weatherData.main.temp : "17";
  const condition = weatherData ? weatherData.weather[0].description : "Clear";

  const isDay = value === "day";  
  const displayTemperature = isDay ? temperature : temperature;  
  const displayCondition = isDay ? condition : condition;  

  return (
    <div className={`w-[490px] h-[880px] absolute left-[193px] top-[216px] rounded-[60px] z-10 ${colors} space-y-20`}>

      <div className={`font-manrope my-1 flex place-content-around mt-[30px]`}>
        <div>
          <p>{new Date().toLocaleDateString()}</p> 
          <p className="text-6xl">{weatherData ? weatherData.name : "mongolia"}</p> 
        </div>
        <Location />
      </div>

      <div className="flex flex-col items-center">
        <img className="w-[274px] h-[274px] top-[204px]" src={img} alt="weather icon" />
      </div>

      <div className="ml-[48px] mt-1">
        <div className="font-extrabold text-[100px] leading-[144px] text-transparent bg-clip-text  bg-gradient-to-b from-[#111827] to-[#6B7280]">
          {displayTemperature}°C
        </div>
        <p className="font-extrabold text-[24px]">{displayCondition}</p>
      </div>


 <div className={`flex gap-6 text-3xl justify-around mt-auto space-x-3 ${iconColor} opacity-60`}>
 <i className="fa-solid fa-house"></i>
 <i className="fa-solid fa-location-dot"></i>
 <i className="fa-solid fa-heart"></i>
 <i className="fa-solid fa-user"></i>
</div>
</div>
);
}

export { Card };


