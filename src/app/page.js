// "use client"

// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { Location } from "./componant/location";
// import { Card } from "./componant/card";
// import { SearchIcon } from "./componant/SearchIcon";
// import { useState } from 'react';
// import axios from 'axios';



// export default function Home() {
//   const [city, setCity] = useState("");       
//   const [weatherData, setWeatherData] = useState(null); 
//   const [error, setError] = useState(""); 
//   const API_KEY = 'f1b42bb5fd693c21eb6b8e3b5a55299b'
//   const url = `"https://api.openweathermap.org/data/2.5/weather"`


//   const searchCityWeather = async () => {
//     if (!city) {
//       setError("Please enter a city name.");
//       return;
//     }
//     try {
//       const response = await axios.get(baseUrl, {
//         params: {
//           q: city,
//           appid: apiKey,
//           units: "metric",  // You can use "imperial" for Fahrenheit if you want
//         }
//       });

//       setWeatherData(response.data); 
//     }

//   return (

//     <div className="bg-black h-screen">
//       <div className="bg-[#f3f4f6] h-[1200px] w-[1600px] flex justify-between mx-auto">
//         <div className="bg-[#f3f4f6] h-[1200px] w-[800px] relative">
//           <Card value='day'/>



//           <div className="z-10 w-[200px] h-[200px] bg-[#f3f4f6] rounded-[50%] absolute left-[700px] top-[500px] flex ">
//             <img className="w-[43px] h-[86px] ml-[50px] my-[50px]"
//               src="/left.png" />
//             <img className="w-[43px] h-[86px] ml-[50px] my-[50px]"
//               src="/right.png" />
//           </div>


//           <div className="ml-20 flex px-4 py-3 rounded-md border-2  hover:border-white overflow-hidden max-w-md mx-auto font-[sans-serif]">
//             <SearchIcon />
//             <input 
//             type="text"
//              placeholder="Search City..." 
//              className="border-none outline-none p-2 w-64 rounded-lg text-black"
//              value={city}
//               onChange={(e) => setCity(e.target.value)}
//              />
//                 <button
//               onClick={searchCityWeather}  // Call the search function on click
//               className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
//             >
//               Search
//             </button>
//           </div>
//    {/* Display Weather Data */}
//    {loading && <div className="text-white mt-4">Loading...</div>}
//           {error && <div className="text-red-500 mt-4">{error}</div>}
//           {weatherData && (
//             <div className="mt-4 text-white">
//               <h2 className="text-2xl">{weatherData.name}</h2>
//               <p>{weatherData.weather[0].description}</p>
//               <p>{weatherData.main.temp}°C</p>
//               <p>Humidity: {weatherData.main.humidity}%</p>
//             </div>
//           )}
//         </div>


//         </div>

//         {/* <div className="background-1"></div> */}

//         <div className="relative">
//           <Card value='night' />
//           <div className="w-[800px] h-[500px] bg-[#0f141e] rounded-bl-[25px]"></div>
//           <div className="w-[800px] h-[200px] bg-[#0f141e] "></div>
//           <div className="w-[800px] h-[500px] bg-[#0f141e] rounded-tl-[25px]">


//           </div>
//         </div>

//       </div>

//     </div>


//   );
// }

"use client"

import '@fortawesome/fontawesome-free/css/all.min.css';
import { Location } from "./componant/location";
import { Card } from "./componant/card";
import { SearchIcon } from "./componant/SearchIcon";
import { useState } from "react";
import axios from "axios";  

export default function Home() {
 


  const [city, setCity] = useState("");        
  const [weatherData, setWeatherData] = useState(null);  

  const apiKey = 'f1b42bb5fd693c21eb6b8e3b5a55299b';  
  const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

  
  const searchCityWeather = async () => {
    if (!city) return;  

    try {
      const response = await axios.get(baseUrl, {
        params: {
          q: city,
          appid: apiKey,
          units: "metric",  
        }
      });

      setWeatherData(response.data);  
    } catch (err) {
      setWeatherData(null);  
    }
  };

  return (
    <div className="bg-black h-screen">
      <div className="bg-[#f3f4f6] h-[1200px] w-[1600px] flex justify-between mx-auto">
        <div className="bg-[#f3f4f6] h-[1200px] w-[800px] relative">
          <Card value='day' />

          <div className="z-10 w-[200px] h-[200px] bg-[#f3f4f6] rounded-[50%] absolute left-[700px] top-[500px] flex ">
            <img className="w-[43px] h-[86px] ml-[50px] my-[50px]" src="/left.png" />
            <img className="w-[43px] h-[86px] ml-[50px] my-[50px]" src="/right.png" />
          </div>

          <div className="ml-20 flex px-4 py-3 rounded-md border-2 hover:border-white overflow-hidden max-w-md mx-auto font-[sans-serif]">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search City..."
              className="border-none outline-none p-2 w-64 rounded-lg text-black"
              value={city}
              onChange={(e) => setCity(e.target.value)}  
            />
            <button
              onClick={searchCityWeather}  
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Search
            </button>
          </div>

       
          
        
          {weatherData && (
            <div className="mt-4 text-black">
              <h2 className="text-2xl">{weatherData.name}</h2>
              <p>{weatherData.weather[0].description}</p>
              <p>{weatherData.main.temp}°C</p>
            </div>
          )}
        </div>

        
        <div className="relative">
          <Card value='night' />
          <div className="w-[800px] h-[500px] bg-[#0f141e] rounded-bl-[25px]"></div>
          <div className="w-[800px] h-[200px] bg-[#0f141e] "></div>
          <div className="w-[800px] h-[500px] bg-[#0f141e] rounded-tl-[25px]"></div>
        </div>
      </div>
    </div>
  );
}
