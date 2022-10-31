import React from 'react'
import Link from 'next/link'

export default function Table(props) {

/*     const data=[
        {
            id:1,
            header1:'Betting Sites',
            header2:'Cashout Speed',
            header3:'Bonus',
            header4:'Us Player',
            rows:[
                {
                    sites:"BetUS",
                    link:"https://www.google.com",
                    Cashoutspeed:"24 Hours",
                    Bonus:"100% up to $2,500",
                    UsPlaye:"Yes"
                },
                {
                    sites:"MyBookie",
                    link:"https://www.google.com",
                    Cashoutspeed:"1-2 Days",
                    Bonus:"50% up to $1,000",
                    UsPlaye:"Yes"
                },
                {
                    sites:"BetOnline",
                    link:"https://www.google.com",
                    Cashoutspeed:"3 Days",
                    Bonus:"100% up to $1,000",
                    UsPlaye:"Yes"
                },
                {
                    sites:"Betway",
                    link:"https://www.google.com",
                    Cashoutspeed:"1-2 Days",
                    Bonus:"Up to €30 in Free Bets",
                    UsPlaye:"Yes"
                },
                {
                    sites:"Bodog",
                    link:"https://www.google.com",
                    Cashoutspeed:"3 Days",
                    Bonus:"100% up to $200",
                    UsPlaye:"Yes"
                },
                {
                    sites:"10bet",
                    link:"https://www.google.com",
                    Cashoutspeed:"3 Days",
                    Bonus:"100% up to $100",
                    UsPlaye:"Yes"
                },
                {
                    sites:"SportsBetting.ag",
                    link:"https://www.google.com",
                    Cashoutspeed:"3 Days",
                    Bonus:"100% up to $1,00",
                    UsPlaye:"Yes"
                },
                {
                    sites:"Spin Sports",
                    link:"https://www.google.com",
                    Cashoutspeed:"3 Days",
                    Bonus:"Up to €300 in Free Bets",
                    UsPlaye:"No"
                },
                {
                    sites:"Bovada",
                    link:"https://www.google.com",
                    Cashoutspeed:"3-4 Days",
                    Bonus:"50% up to $250",
                    UsPlaye:"Yes"
                },
            ]
        }
    

    
] */
  
    return (
        <>    
 {/*        <div className="overflow-x-auto relative sm:rounded-lg my-4 mx-6">
            
                <table className="w-full text-sm text-center text-gray-500  border border-gray-300">
                <thead className=" bg-[#294757] h-[52px]">
                    <tr className='text-gray-200'>
                        <th scope="col" className="py-3 px-6 border-r border-[#386076]">
                            {props.header1}
                        </th>
                         <th scope="col" className="py-3 px-6 border-r border-[#386076]">
                            {props.header1}
                        </th>
                        <th scope="col" className="py-3 px-6 border-r border-[#386076]">
                             {props.header1}
                        </th>
                        <th scope="col" className="py-3 px-6 border-r border-[#386076]">
                            {props.header1}
                        </th> 
                        
                        
                    </tr>
                </thead> */}
                <tbody className='w-[100%]'>
                
                        <tr key={props.index} className="border-b border-gray w-full">
                            <th className="link py-4 px-6 font-medium border-r border-gray whitespace-nowrap" scope="row" onClick={()=>onRedirectUser(item)}><Link href={props.href}><a className='text-blue-500'>{props.col1} </a></Link> </th>
                            <td className='border-r border-gray'>{props.col2}</td>
                            <td className='border-r border-gray'>{props.col3}</td>
                            <td className='border-r border-gray'>{props.col4}</td>
                        </tr>
               

                </tbody>
       {/*      </table>
            
        </div> */}
 <style jsx>{`  
      
    table {
        border-collapse: collapse;
        width: 100%;
    }     
  
      
    tr:nth-child(even) {
        background-color: #0000000d;
    }
       `}</style>
       
        </>
     )
}
