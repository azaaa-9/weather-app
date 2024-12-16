"use client"
import { useState, useEffect } from 'react';
import { Location } from "./location";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from "next/image";

const Card = ({ value, city, number, nothing, condition = "", nightConditions = "" }) => {

  

  const nightCardColors = "bg-[111827bf] bg-gradient-to-b from-[#1F2937] to-[#11182700] text-white shadow-[#111827]";
  const colors = value === "day" ? "bg-[#ffffff] text-black" : nightCardColors;

  const nightIconColor = "text-white";
  const iconColor = value === "day" ? "text-black" : nightIconColor;

  const temperature = value === "day" ? number : nothing;
  const temperatureStyle = value === "day" ? "text-[96px] text-transparent bg-clip-text bg-gradient-to-b from-[#111827] to-[#6b7280]" : "text-[96px] text-transparent bg-clip-text bg-gradient-to-b from-[#f9fafb] to-[#f9fafb]";

  const conditions = value === "day" ? condition.trim() : nightConditions.trim();
  const textStyle = value === "day" ? "text-[#ff8e27] text-[24px]" : "text-[#777cce] text-[24px]";

  let image = "/Sun.png"
  let imageNight = "/moon.png"


    if (value === "day") {
      if (conditions.includes("Sunny")) {
        image = ("/Sun.png");
      } else if (conditions.includes("Overcast")) {
        image = ("/Cloud.png");
      } else if (conditions.includes("snow")) {
        image = ("/Snow.png");
      } else if (conditions.includes("rain")) {
        image = ("/sunnyPic.png");
      } else if (conditions.includes("thunder")) {
        image = ("/light.png");
      } else if (conditions.includes("wind")) {
        image = ("/Wind.png");
      } else if (conditions.includes("Mist")) {
        image = ("/Cloud.png");
      } else if (conditions.includes("Cloudy")) {
        image = ("/Cloud.png");
      }
    } else {
      if (conditions.includes("Clear")) {
        imageNight = ("/Moon.png");
      } else if (conditions.includes("Overcast")) {

        console.log(conditions, '----');


        imageNight = ("/NightClouds.png");
      } else if (conditions.includes("snow")) {
        imageNight = ("/NightSnow.png");
      } else if (conditions.includes("rain")) {
        imageNight = ("/NightRain.png");
      } else if (conditions.includes("thunder")) {
        imageNight = ("/light (2).png");
      } else if (conditions.includes("wind")) {
        imageNight = ("/NightWind.png");
      } else if (conditions.includes("Cloudy")) {
        imageNight = ("/NightClouds.png");
      }
    }


  const img = value === "day" ? image : imageNight;


  return (
    <div className={`w-full md:w-[490px] h-[880px] absolute left-[50%] top-[216px] drop-shadow-xl rounded-[60px] z-[100] ${colors} space-y-20 transform -translate-x-[50%]`}>

      <div className="font-sans my-1 flex place-content-around mt-[30px] z-10">
        <div>
          <p className="text-2xl">{new Date().toLocaleDateString()}</p>
          <h1 className="text-6xl">{city}</h1>
        </div>
        <Location />
      </div>

      <div className="flex flex-col items-center z-10 ">
        <Image width={274} height={274} className="w-[274px] h-[274px] top-[204px] drop-shadow-[0_15px_45px_rgba(255,255,255,0.3)]" src={img} alt="weather icon" />
      </div>

      <div className="ml-[48px] mt-1">
        <div className="font-extrabold text-[100px] leading-[144px] text-transparent bg-clip-text bg-gradient-to-b from-[#111827] to-[#6B7280]">
          <p className={temperatureStyle}>{temperature}°C</p>
        </div>
        <p className={textStyle}>{conditions}</p>
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
