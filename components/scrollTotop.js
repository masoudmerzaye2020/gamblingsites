import {useEffect} from 'react';
import NorthIcon from '@mui/icons-material/North';

export default function GoTo() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div  className='w-12 md:w-16 text-[12px] md:text-[16] fixed p-2 bg-black text-center text-white bottom-12 right-12 rounded-lg'>
      

      {/* 👇️ scroll to top on button click */}
      
      <button
        
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
  
      >
        <NorthIcon/>
        Back to top
      </button>
    </div>
  );
}