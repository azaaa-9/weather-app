"use client"

import Image from "next/image";
import { Location } from "./componant/location";

export default function Home() {
  return (


  <div className="w-full h-screen flex  ">


    <div className="w-[50%] h-[800px]  bg-[#F3F4F6] rounded-xl italic text-black "> 

    <div className="  p-2 rounded-lg">

  <input type="text" placeholder="Search..." className="border-none outline-none p-2 w-64 rounded-lg" />
  

  <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 18a7 7 0 100-14 7 7 0 000 14zM21 21l-4.35-4.35" />
    </svg>
  </button>
</div>
<div className="w-[300px] h-[500px] bg-slate-300 justify-around rounded-xl">
<Location/>
  <h1>Krakow</h1>
  <img className="" src="icon.png"/>
</div>
    </div>





    <div className="w-[50%] h-[800px] bg-[#0F141E] rounded-xl"></div>


  </div>
  );
}


