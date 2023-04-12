import React from 'react'

export default function City({ city, country}) {
  return (
    <div className='flex flex-col sm:flex-row gap-3'>
       <h1 className='text-5xl drop-shadow-cust'>{city}</h1> 
       <p className='text-2xl self-end sm:self-start'>{country}</p>
    </div>
    
  )
}
