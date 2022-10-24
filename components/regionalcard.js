import Image from 'next/image';
import title from '../components/title';
import Link from 'next/link';
export default function RegionalCard({ src, altText, title, url}) {
    return (
        <>
            <div className='w-full  md:w-6/12 lg:w-4/12 xl:w-3/12 text-gray-200 p-2 mx-auto '>                        
                <div className='bg-[#19242c] hover:bg-[#ff6900] px-4 flex flex-wrap rounded-lg h-full w-[250px] mx-auto'>
                    <div className='w-full text-center text-2xl py-4'>
                        <Image src={src} width='60' height="40" alt=" country image"/>
                                    
                    </div>
                                
                    <div className='w-full text-center border-t-[1px] border-[#fccd1b] py-4 uppercase'>
                        <Link href={url} alt={altText}>
                        <a> { title }</a></Link>
                     </div>
                </div>
                            
            </div>

        </>
 
    )
}