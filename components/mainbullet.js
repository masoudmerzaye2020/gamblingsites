import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Mainbullet({ link, linkdesc, title, desc }) {
  return (
    <>
      <div>
        <ul>
          <li className=" py-2">
            <div className="inline-block mt-2 float-left relative w-[22px] h-[22px]">
              <Image
                src="/image/main_bullet.gif"
            
                layout="fill"
                objectFit="cover"
                alt="icon"
              />
            </div>
            <p className=" align-top  ">
              <span className="inline-block align-top ">
                <Link href={link}>
                  <a className="px-2 text-blue-600 text-lg ">{linkdesc}</a>
                </Link>{" "}
              </span>
              <span className="font-bold">{title}</span>
              {desc}
            </p>
            {/*         <div className='w-[20px] h-[20px]'>
                    <Image src='/image/main_bullet.gif' width='20' height='20' alt='icon'/>
                    </div>
                    <div className=''><p> <span><Link href={link}><a className='px-2 text-blue-600 text-lg'>{linkdesc}</a></Link> </span><span>{title}</span>{desc}</p></div> */}
          </li>
        </ul>
      </div>
    </>
  );
}
