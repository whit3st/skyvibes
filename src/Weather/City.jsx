import React from 'react'

export default function City({ city, country}) {
  return (
    <div className='flex flex-col sm:flex-row gap-3'>
       <h1 className='sm:text-5xl text-3xl drop-shadow-cust'>{city}</h1> 
       <p className='sm:text-2xl text-lg self-end sm:self-start'>{country}</p>
    </div>
    
  )
}
