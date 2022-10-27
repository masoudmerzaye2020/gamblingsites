import React from 'react'
import Image from 'next/image'

export default function Cornerimage(props) {
  return (
   /*  <div className='md:float-right justify-center flex'>
      <Image src={props.src}  width={200} height={200} alt={''}/>
      
    </div> */

    <div className={props.type == 'wide' ? 'wide' : 'small' } style={{ position:'relative'}}>
      
      <Image src={props.src}  
        /*  width={300}
         height={200} */
         layout={'fill'}
        
        
  objectFit="cover"  alt={''}/>
      <style jsx>{`
        .small {
          width: 200px;
          height: 200px;
          float:right;

        }
        .wide {
          width: 435px;
          height: 210px;
          float:right;
          
        }

        .middle {
          width: 335px;
          height: 186px;
          float:right;
          
        }
        @media screen and (max-width: 480px) {
          .small {
            display: flex;
            float: none;
            margin-left: auto;
            margin-right: auto;
          }
       }

       @media screen and (max-width: 480px) {
        .wide {
          display: flex;
          float: none;
          margin-left: auto;
          margin-right: auto;
        }
     }

      `}</style>
      </div>
  )
}
