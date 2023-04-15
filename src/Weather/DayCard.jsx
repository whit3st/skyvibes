import React from 'react'

export default function dayCard({temp, icon, id, day}) {
  const daytime = icon.slice(2, 3)
  return (
    <div className="min-w-[80px] rounded bg-[rgba(255,255,255,0.2)] flex flex-col justify-between items-center py-5">
        <h3>{temp}</h3>
        <img className="w-12" src={`./weather_icons/${id}_${daytime}.png`} alt="" />
        <h3>{day}</h3>
    </div>
  )
}
