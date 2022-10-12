
import React from 'react'
import Container from '../components/container'
import Section from '../components/section'
import Table from '../components/table'
function Test1() {
   
    return (
       <>
    <Section>
        <Container>
            <Table/>
        <div className="overflow-x-auto relative sm:rounded-lg my-4 mx-6">
    <table className="w-full text-sm text-center text-gray-500  border border-gray-300">
        <thead className=" bg-[#294757] h-[52px]">
            <tr className='text-gray-200'>
                <th scope="col" className="py-3 px-6 border-r border-[#386076]">
                    Betting Site
                </th>
                <th scope="col" className="py-3 px-6 border-r border-[#386076]">
                    Cashout Speed
                </th>
                <th scope="col" className="py-3 px-6 border-r border-[#386076]">
                    Bonus
                </th>
                <th scope="col" className="py-3 px-6 border-r border-[#386076]">
                    US Player
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b  ">
                <th scope="row" className="py-4 px-6 font-medium border-r border-gray-300 whitespace-nowrap">
                    BetUS
                </th>
                <td className="py-4 px-6 border-r border-gray-300">
                    24 Hours
                </td>
                <td className="py-4 px-6 border-r border-gray-300">
                    100% up to $2,500
                </td>
                <td className="py-4 px-6 border-r border-gray-300">
                    Yes
                </td>                
            </tr>
            <tr className="bg-[#0000000d] border-b">
                <th scope="row" className=" py-3 font-medium  whitespace-nowrap border-r border-gray-300 ">
                    MyBookie
                </th>
                <td className=" py-3 border-r border-gray-300">
                    1-2 Days
                </td>
                <td className=" py-3 border-r border-gray-300">
                    50% up to $1,000
                </td>
                <td className="py-3  border-r border-gray-300">
                    Yes
                </td>                
            </tr>
        </tbody>
    </table>
</div>
        </Container>
    </Section>
       </>
    )
}

export default Test1