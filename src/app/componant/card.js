"use client"
import { Location } from "./location"
export function Card(props) {
    const Card = ({value, temperature}) => {
        const nightCardColors = `bg-[#111827bf] bg-gradient-to-b from-[#111827] to-[#1f2937] text-white shadow-[#111827]`;
        const colors = value === `night` ? nightCardColors : `bg-[59FAFB]`;
      }

    return(

    <div className="w-[450px] h-[800px] absolute left-[193px] top-[216px] rounded-[60px] bg-slate-200">
        <div className="text-green-400 font-mono my-1  ">
            <div className="">December 13, 2024</div>
            <div className="text-[48px]"> Krakow</div>
            <div>
            <Location/>
            </div>
        </div>
    </div>

    )
}