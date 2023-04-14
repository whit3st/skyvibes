import React from 'react'

export default function WeatherIcon({ id, icon }) {
  const daytime = icon.slice(2, 3)
  return (
    <img className="sm:h-24 h-16" src={`./weather_icons/${id}_${daytime}.png`} alt="" />
  )
}
