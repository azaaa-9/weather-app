"use client"

import { useState, useEffect} from "react";
import { Card } from "./componant/card";
import { Circle } from "./componant/circle";
import { CircleGray } from "./componant/circle";
import { SearchInput } from "./componant/SearchInput";

const API_KEY = "a9bd50909a544a9c84172455241312";
export default function Home() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [dayweather, setDayWeather] = useState({
    number: 0,
    condition: "",
  });

  const [nightweather, setNightWeather] = useState({
    nothing: 0,
    nightCondition: "",
  });


  const onChangeText = (e) => {
    setSearch(e.target.value);
  };
 
  const onPressEnter = (e) => {
    if (e.code === "Enter") {
      setCity(search);
    }
  };


  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) => { 
        setDayWeather({
          number: data?.forecast?.forecastday[0]?.day?.maxtemp_c,
          condition: data?.forecast?.forecastday[0]?.day?.condition?.text,
        });
        setNightWeather({
          nothing: data?.forecast?.forecastday[0]?.day?.mintemp_c,
          condition : data?.forecast?.forecastday[0]?.day?.condition.text,
        });
      });  
   
  }, [city]);
  return (

    <div className="bg-black min-h-screen">
      <div className="bg-[#f3f4f6] w-full md:w-[1600px] h-auto flex justify-between mx-auto">
        <div className="bg-[#f3f4f6] w-full md:w-[800px] relative ">
          <div className='w-[200px] h-[200px] rounded-[50%] bg-[#FF8E27] absolute right-[610px] top-[130px] translate-x-[50%]'></div>

          <Card value="day"
          city={city}
          number={dayweather.number}
          condition={dayweather.condition} />

          <div className="z-10 w-[205px] h-[205px] bg-[#f3f4f6] rounded-[50%] absolute left-[700px] top-[498px] flex">
            <img className="w-[40px] h-[86px] ml-[45px] my-[50px]" src="/left.png" />
            <img className="w-[40px] h-[86px] ml-[45px] my-[50px]" src="/right.png" />
          </div>
<SearchInput 
          search={search}
          onChangeText={onChangeText}
          onPressEnter={onPressEnter}
        /> 
        </div>

        <div className="relative">
          

        <Circle size={340} top={420} left={-160} />
        <CircleGray size={340} top={420} left={-160} />
        <Circle size={540} top={320} left={-270} />
        <CircleGray size={540} top={320} left={-270} />
        <Circle size={740} top={230} left={-370} />
        <CircleGray size={740} top={230} left={-370} />
        <Circle size={1040} top={100} left={-510} />
        <CircleGray size={1040} top={100} left={-510} />
        <Circle size={1340} top={-60} left={-660} />
        <CircleGray size={1340} top={-60} left={-660} />


         
          <Card value="night"
          city={city}
          nothing={nightweather.nothing}
          condition={nightweather.condition} /> 
          
          

          <div className="w-full md:w-[800px] h-[500px] bg-[#0f141e] rounded-bl-[25px]"></div>
          <div className="w-full md:w-[800px] h-[200px] bg-[#0f141e]"></div>
          <div className="w-full md:w-[800px] h-[500px] bg-[#0f141e] rounded-tl-[25px]"></div>
          <div className='w-full md:w-[200px] h-[200px] rounded-[50%] bg-[#6E72C9] absolute left-[640px] bottom-[30px] transform -translate-x-[50%]'></div>
        </div>
      </div>
    </div>
  );
}
