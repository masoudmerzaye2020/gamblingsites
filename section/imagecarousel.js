import React from "react";
import Image from "next/image";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { data } from "../data/carouselData";

function Imagecarousel() {
  return (
    <>
      <div className="flex flex-wrap bg-gray-500 w-full p-2 my-4">
        <div className="w-full md:w-2/3 ">
          <img
            className="scroll w-full h-[540px] object-cover"
            src="/image/BetUs/BETUS-2021-1.jpg"
            alt=""
          />
        </div>
        <div className="w-full h-full md:w-1/3 bg-gray-600">
          <div
            id="slider"
            className=" overflow-y-hidden md:overflow-y-auto flex  md: block md:h-[580px] h-[250px] relative scroll   "
          >
            {data.map((item) => (
              <div className="border-[2px] rounded-[6px]  m-2 w-[320px] md:h-[35%] flex md:inline-block p-[2px] cursor-pointer">
                <img className="w-full h-full" src={item.img} alt="/" />
              </div>
            ))}
          </div>
        </div>
      </div>





      <div className="flex md:block bg-[#1f2d37] p-2">
        <div className="border-[3px] rounded-[3px] p-2">
          <img
            className="scroll w-full h-[540px] object-cover"
            src="/image/BetUs/BETUS-2021-1.jpg"
            alt=""
          />
        </div>
        <div className="relative flex flex-wrap items-center">
          <div
            id="slider"
            className="w-full h-full  md:overflow-y-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            {data.map((item) => (
              <div className="border-[2px] rounded-[6px]  m-2 w-[320px] h-[190px] inline-block p-[2px] cursor-pointer">
                <img className="w-full h-full" src={item.img} alt="/" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/  /}

      <style jsx>{`
      
    /*   .scroll {       
         background: #1f2d37;
         overflow: scroll;
       } */
     .scroll::-webkit-scrollbar {
         width: 12px;
       }
     
   /*   .scroll::-webkit-scrollbar-track {
         -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
         border-radius: 10px;
      } */
     
     .scroll::-webkit-scrollbar-thumb {
         border-radius: 10px;
         -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.9); 
       }     
       `}</style>
    </>
  );
}

export default Imagecarousel;
