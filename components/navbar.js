import Link from 'next/link';
import { menulist } from "../data/menulist";
import MenuItems from "./menuItems";
import Image from 'next/image'
import { useState } from 'react';

export default function Navbar() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex items-center flex-wrap bg-slate-800 p-1.5'>        
        <button
          className=' inline-flex p-1 bg-yellow-400 hover:bg-yellow-600 rounded-full lg:hidden text-black outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2.5}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>

        <Link href='/' className=''>
          <a className='inline-flex items-center mx-auto '>         
            <Image            
            src="/image/gambling-sites-logo.png"
            alt="Picture of the author"
            width={180}
            height={43}
            />        
          </a>
        </Link>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >

<ul className="menus ">
        {menulist.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
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
    </>
  );
};