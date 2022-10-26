import Link from "next/link";
import { menulist } from "../data/menulist";
import MenuItems from "./menuItems";

import Image from "next/image";
import { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="bg-[#1f2d37] mx-auto">
      <nav className="flex items-center flex-wrap  p-1.5 text-white font-semibold text-[12px] py-4 mx-auto max-w-[1170px]">
        <button
          className="inline-flex p-1 bg-[#fccd1b] hover:bg-[#fcff2b] rounded-full lg:hidden text-[#000] outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <Link href="/" className="">
          <a className="inline-flex items-center mx-auto ">
            <Image
              src="/image/gambling-sites-logo.png"
              alt="Picture of the author"
              width={180}
              height={43}
            />
          </a>
        </Link>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <ul className="menus ">
            {menulist.map((menu, index) => {
              const depthLevel = 0;
              return (
                <MenuItems items={menu} key={index} depthLevel={depthLevel} />
              );
            })}
          </ul>
          <div className=" ml-auto min-w-[80px] my-auto  rounded-lg border-[2px] border-gray-700 flex flex-wrap">
            <SearchIcon>
              <form action="/send-data-here" method="post">
                <input type="text" id="first" name="first" />
              </form>
            </SearchIcon>
          </div>
          <style jsx>{`
            /*  .menus {
        display: block;
        list-style: none;
      }, */
            @media only screen and (min-width: 1016px) {
              .menus {
                display: flex;
                list-style: none;
              }
            }
            @media only screen and (max-width: 1016px) {
              .menus {
                display: block;
                list-style: none;
              }
            }
          `}</style>
        </div>
      </nav>
    </div>
  );
}
