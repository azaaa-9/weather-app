"use client"

import { useState } from "react";
import { Card } from "./componant/card";
import { SearchIcon } from "./componant/SearchIcon";

export default function Home() {
  const [search, setSearch] = useState("");  
  const [weatherData, setWeatherData] = useState(null);  

  const apiKey = 'f1b42bb5fd693c21eb6b8e3b5a55299b';  
  const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

  const fetchWeather = async (search) => {
    const response = await fetch(`${baseUrl}?q=${search}&appid=${apiKey}&units=metric`);
    
    
    if (response.ok) {
      const data = await response.json();
      setWeatherData(data);  
    } else {
      setWeatherData(null); 
    }
  };

 
  const handleSearch = () => {
    if (search) {
      fetchWeather(search);  
    }
  };

  return (
    <div className="bg-black h-screen">
      <div className="bg-[#f3f4f6] h-[1200px] w-[1600px] flex justify-between mx-auto">
        <div className="bg-[#f3f4f6] h-[1200px] w-[800px] relative ">
          <div className='w-[200px] h-[200px] rounded-[50%] bg-yellow-400 absolute right-[500px] top-[130px]'></div>

          <Card value="day" weatherData={weatherData} />

          <div className="z-10 w-[205px] h-[205px] bg-[#f3f4f6] rounded-[50%] absolute left-[703px] top-[498px] flex">
            <img className="w-[40px] h-[86px] ml-[45px] my-[50px]" src="/left.png" />
            <img className="w-[40px] h-[86px] ml-[45px] my-[50px]" src="/right.png" />
          </div>

          <div className="ml-20 flex px-4 py-3 rounded-md border-2 hover:border-white overflow-hidden max-w-md mx-auto font-[sans-serif]">
            <SearchIcon />
            <input
            type="text"
            placeholder="Search City..."
            className="border-none outline-none p-2 w-64 rounded-lg text-black"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            onClick={handleSearch} 
            />
            <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg">Search</button>
            </div>
 
        </div>

        <div className="relative">
         
          <Card value="night" weatherData={weatherData} />
          <div className="w-[800px] h-[500px] bg-[#0f141e] rounded-bl-[25px]"></div>
          <div className="w-[800px] h-[200px] bg-[#0f141e]"></div>
          <div className="w-[800px] h-[500px] bg-[#0f141e] rounded-tl-[25px]"></div>
          <div className='w-[200px] h-[200px] rounded-[50%] bg-indigo-400 absolute left-[570px] bottom-[50px]'></div>
        </div>
      </div>
    </div>
  );
}