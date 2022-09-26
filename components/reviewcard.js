import Image from 'next/image';
export default function ReviewCard({ src, altText, title, description}) {
    return (
        <>
{/*          <div  className=" mx-auto items-center justify-center">         
          <div className="lg:mt-10 md:mt-5 text-center ">
            <Image src={src} alt={altText} width={200}
             height={150} p={20}/>
            </div>
             <div className="w-full mb-4 items-center justify-center text-center underline">
                 <div className="lg:text-3xl md:text-2xl px-5 font-headfont">
                 {title}
             </div>
              <div className="mt-5 lg:px-10 md:p-6">
                 {description}
                 </div> 
              </div>                    

              
         </div>  */}

            <div className='px-4 flex flex flex-row w-full'>                                            
                <ul className='w-ful flex  text-xl  '>                                                
                    <li className='flex py-2'> 
                        <div className='flex pr-2 m-auto '>
                            <Image src='/image/main_bullet.gif' width='22px' height='22' alt="icon"  className='flex m-auto py-2 px-4' />
                        </div>
                        <p className='px-2 '>{title}</p>
                    </li>
                </ul>
            </div>

        </>
 
    )
}