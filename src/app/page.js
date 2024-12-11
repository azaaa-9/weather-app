"use client"
import { SearchIcon } from "./componant/searchIcon";
import Image from "next/image";

export default function Home() {
  return (


  <div className="w-full h-screen flex bg-(#404040) justify-around py-40 bg-auto">


    <div className="w-[20%] h-[800px] bg-stone-50 rounded-xl italic text-black flex items-start"> 

    <SearchIcon/>
    <input
      type="text"
      placeholder="Search City..."
      class="w-full px-4 py-2 pr-12 text-sm border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300"
    />

    </div>


    <div className="w-[20%] h-[800px] bg-slate-900 rounded-xl">asfasfas</div>
  </div>
  );
}


