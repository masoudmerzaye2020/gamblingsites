import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Squarecard(props) {
  return (
    <>
    <Link href={props.link}>
              <div className="bg-[#f5f5f5] lg:w-[165px] lg:h-[197px] w-[145px] h-[177px] rounded-[7px] flex flex-col m-[8px] p-[15px] text-center text-[#333333] hover:text-yellow-300 hover:bg-gray-800">
                <Image
                  src={props.src}
                  width={"103"}
                  height={"127"}
                  alt={"image"}
                />
                <p className=" bold text-md font-bold uppercase">
                  {props.title}
                </p>
              </div>
            </Link>
    </>
  )
}
