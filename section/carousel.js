import React from 'react'
import Image from 'next/image'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {data} from '../data/carouselData'

function Carousel() {
 
 
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };


  
  return (
    <>
{/*         <div className='bg-[#1f2d37] w-full relative overflow-hidden'>
          <div className='justify-center mx-auto flex p-4 overflow-hidden'>
            <Image src={'/image/BetUs/BETUS-2021-1.jpg'} width='900' height={'600'} alt={'image'} />
          </div>





          


          <div className=' flex  flex flex-row w-[200%] scroll-pl-6 snap-x scroll-smooth '>
           <div className='w-[400px] overflow-hidden nap-start'>
           <Image src={'/image/BetUs/BETUS-2021-1.jpg'} width='300' height={'200'} alt={'image'} />
           </div>
           <div className='w-[400px] overflow-hidden nap-start'>
           <Image src={'/image/BetUs/BETUS-2021-1.jpg'} width='300' height={'200'} alt={'image'} />
           </div>
           <div className='w-[400px] overflow-hidden nap-start'>
           <Image src={'/image/BetUs/BETUS-2021-1.jpg'} width='300' height={'200'} alt={'image'} />
           </div>
           <div className='w-[400px] overflow-hidden nap-start'>
           <Image src={'/image/BetUs/BETUS-2021-1.jpg'} width='300' height={'200'} alt={'image'} />
           </div>
           <div className='w-[400px] overflow-hidden nap-start'>
           <Image src={'/image/BetUs/BETUS-2021-1.jpg'} width='300' height={'200'} alt={'image'} />
           </div>
         
           
       
          </div>
        </div> */}


<img
        className='scroll w-full h-[440px] object-cover'
        src='https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2607&q=80'
        alt=''
      />
      <div className='relative flex items-center'>
        <ArrowBackIosIcon className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
        <div
          id='slider'
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
          {data.map((item) => (
            <img
              className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={item.img}
              alt='/'
            />
          ))}
        </div>
        <ArrowForwardIosIcon className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
      </div>
      <style jsx>{`  
      
      .scroll {
       
         background: #1f2d37;
        overflow: scroll;
     }
     .scroll::-webkit-scrollbar {
         width: 12px;
     }
     
     .scroll::-webkit-scrollbar-track {
         -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
         border-radius: 10px;
     }
     
     .scroll::-webkit-scrollbar-thumb {
         border-radius: 10px;
         -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.9); 
     }
     ​
       `}</style>

    </>

  )
}

export default Carousel