import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Squarecard(props) {
  return (
    <>
    <Link href={props.link}>
              <div className="bg-[#f5f5f5]  w-[145px]  rounded-[7px] flex flex-col m-[8px] p-[15px] text-center text-[#333333] hover:text-[#fcb900] hover:bg-[#1f2d37]">
                <div>
                <Image
                  src={props.src}
                  width={"100"}
                  height={"80"}
                  alt={"image"}
                />
                </div>
                <p className=" bold text-md font-bold uppercase text-gray">
                  {props.title}
                </p>
              </div>
            </Link>
    </>
  )
}
