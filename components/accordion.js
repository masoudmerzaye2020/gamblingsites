import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { useState } from "react";
import React, { useEffect } from "react";
export default function Accordion({ title, content }) {
    const [isShowing, setIsShowing] = useState(false);

    const toggle = () => {
      setIsShowing(!isShowing);
    };
    return (        
        <>
        <div className="flex flex-wrap  mx-auto bg-gray  border-[1px] border-gray-800 rounded-lg font-paragraph hover:bg-[#141d24] hover:text-white  
        
        ">
          <div className="flex sm:w-11/12 lg:text-1xl  md:text-[18px] font-semibold  py-2 " onClick={toggle}  type="button">
            <div className='bg-[#141d24] w-[28px] h-[40px] hover:bg-[#fcb900] text-[#16a085] hover:text-black px-2 rounded-lg mx-2 py-1 font-semibold'>?</div>
            {title}          
          </div>
          <div className="sm:w-1/12   items-center justify-center mx-auto my-auto text-center">
             <button className=" items-end justify-items-end ml-2 place-items-end place-content-end">
              <ArrowDropDownIcon  
              onClick={toggle}
              type="button" className="mx-auto items-center justify-center py-auto px-auto"/>               
          
              </button> 
            </div>          
        </div>
        <div className="w-full lg:w-10/12  my-2 mx-auto bg-gray-200  font-paragraph rounded-lg">           
           <div className="p-3 lg:text-xl  md:text-lg border-[1px] border-gray-300 rounded-lg"
              style={{ display: isShowing ? "block" : "none" }}
              dangerouslySetInnerHTML={{
                __html: content
              }}
                />
        </div>
        </> 
    )
}