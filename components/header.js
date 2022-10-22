import React from 'react'
import Section from './section'
import Container from './container'

export default function Header({children}) {
  return (
    <>

      <Section>
      <div className='w-full bg-[#324959]'>
            
       
        <Container>
        <div className='mx-4 w-10/12 text-gray-100 md:text-4xl text-3xl font-semibold py-2'>
                {children}
            </div>
          
        </Container>
        </div>
      </Section>
        
    </>
  )
}
