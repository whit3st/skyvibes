import React from 'react'

export default function Temperature({ temp, feelsLike, description }) {
  return (
    <div className='flex flex-col gap-2'>
      <h1 className='text-9xl font-extralight drop-shadow-cust'>{ temp }</h1>
      <p className='text-md font-extralight drop-shadow-cust'>Feels like { feelsLike }°C</p>
      <p className='text-md font-extralight drop-shadow-cust self-end'>{description}</p>
    </div>
    
  )
}
