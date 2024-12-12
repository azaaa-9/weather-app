"use client"

import Image from "next/image";
import { Location } from "./componant/location";
import { Card } from "./componant/card";
import { SearchIcon } from "./componant/SearchIcon";


export default function Home() {
  return (

<div className="bg-black h-screen">
  <div className="bg-[#f3f4f6] h-[1200px] w-[1600px] flex justify-between mx-auto">
    <div className="bg-[#f3f4f6] h-[1200px] w-[800px] relative">
      <Card value = 'day'/>

      

      <div className="z-10 w-[200px] h-[200px] bg-[#f3f4f6] rounded-[50%] absolute left-[700px] top-[500px] flex">
        <img className="w-[43px] h-[86px] ml-[50px] my-[50px]"
        src="/left.png"/>
         <img className="w-[43px] h-[86px] ml-[50px] my-[50px]"
        src="/right.png"/>
      </div>


      <div className="ml-20 flex px-4 py-3 rounded-md border-2  hover:border-white overflow-hidden max-w-md mx-auto font-[sans-serif]">
     <SearchIcon/>
        <input type="text" placeholder="Search City..." className="border-none outline-none p-2 w-64 rounded-lg text-black" />
      </div>


    </div>

    <div className="background-1"></div>

     <div className="relative">
         <Card value = 'night'/>
  <div className="w-[800px] h-[500px] bg-[#0f141e] rounded-bl-[25px]"></div>
  <div className="w-[800px] h-[200px] bg-[#0f141e] "></div>
  <div className="w-[800px] h-[500px] bg-[#0f141e] rounded-tl-[25px]">

   
  </div>
  </div>
 
 </div>

  </div>


  );
}


