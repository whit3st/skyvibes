import React from 'react'

export default function Details({wind, humidity, pressure}) {
  return (
    <div className='flex items-center gap-5'>
        <span className='flex items-center gap-2'>
           <img className='w-4' src="./windIcon.png" alt="" />
           <p>Wind {wind}km/h</p>
        </span>
        |
        <span className='flex items-center gap-2'>
            <img className='w-5' src="./humIcon.png" alt="" />
            <p>Hum {humidity}%</p>
        </span>
        |
        <span className='flex items-center gap-2'>
           <img className='w-5' src="./pressureIcon.png" alt="" />
           <p>Pressure {pressure}hPa</p>
        </span>
    </div>
    
  )
}
