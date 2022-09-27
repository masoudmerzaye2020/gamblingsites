import React from 'react'

export default function Container({children}) {
  return (
    <div className='w-12/12 lg:w-10/12 mx-auto px-2'>{children}</div>
  )
}
