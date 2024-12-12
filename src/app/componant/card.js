"use client"

import { Location } from "./location"



const Card = ({value}) => {
    const sun =  "SUN.png"
    const img = value === "day" ? "SUN.png" : "moon.png" 
  const color = value === "day" ? "bg-white" : "gray"


    return(
 

    <div className="w-[450px] h-[800px] absolute left-[193px] top-[216px] rounded-[60px] bg-slate-200 space-y-28 ">


        <div className="text-green-400 font-mono my-1 flex  place-content-around mt-[30px]">

            <div>
            <p>December 13, 2024</p>
            <p className="text-4xl">Krakow</p>
            </div>
            
            <Location/>
            
            </div>
       

            <div className="flex flex-col items-center">
            <img className="w-52 h-52" src={img}/>
            </div>
            

            {/* <div className="flex justify-center items-center min-h-screen bg-gray-700">
              <Card value="day" temperature={26} />
              <Card value="night" temperature={17} />
            </div> */}


            <div className="flex gap-6 text-3xl justify-around text-black mt-auto space-x-3 opacity-60  ">
            <i className="fa-solid fa-house"></i>
            <i className="fa-solid fa-location-dot"></i>
            <i className="fa-solid fa-heart"></i>
            <i className="fa-solid fa-user"></i>
            </div>


            </div>
    

    )
}

export {Card}