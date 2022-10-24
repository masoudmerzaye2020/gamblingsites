import React from "react";
import Image from "next/image";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { data } from "../data/carouselData";

function Imagecarousel() {
  return (
    <>
      <div className="flex flex-wrap bg-[#1f2d37] w-full px-4 py-2 rounded-lg my-4">
        <div className="w-full xl:w-2/3 my-auto border-[2px] border-white rounded-lg p-2">
          <img
            className="scroll w-full h-[240px] md:h-[410px] lg:h-[500px]  rounded-lg object-cover"
            src="/image/BetUs/BETUS-2021-1.jpg"
            alt=""
          />
        </div>
        <div className="w-full h-full xl:w-1/3 ">
          <div
            id="slider"
            className=" overflow-y-hidden xl:overflow-y-auto flex flex-wrap flex-col xl:flex-row   xl:block md:h-[240px] h-[210px] xl:h-[540px] relative scroll "
          >
            {data.map((item) => (
              <div className="border-[2px] rounded-[6px]  my-3 w-[280px]  md:w-[330px] md:h-[90%] xl:h-[35%] flex xl:inline-block p-[2px] cursor-pointer ml-4 ">
                <img className="w-full h-full rounded-lg " src={item.img} alt="/" />
              </div>
            ))}
          </div>
        </div>
      </div>


      <style jsx>{`
      
    /*   .scroll {       
         background: #1f2d37;
         overflow: scroll;
       } */
     .scroll::-webkit-scrollbar {
         width: 14px;
         background: #324858;
        
       }
     
   /*   .scroll::-webkit-scrollbar-track {
         -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
         border-radius: 12px;
      } */
     
     .scroll::-webkit-scrollbar-thumb {
         border-radius: 12px;
         background: #426075;
    
       }     
       `}</style>
    </>
  );
}

export default Imagecarousel;
