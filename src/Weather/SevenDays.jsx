import React from 'react'
import DayCard from './DayCard';
export default function SevenDays({ sevenDays }) {
    return (
        <div className="flex h-36 mt-10 gap-3 overflow-x-scroll sm:justify-center">
           {sevenDays.list.map((day, index) => {
        return (
            
             <DayCard
                id={day.weather[0].id}
                icon={day.weather[0].icon}
                temp={
                    Math.floor(
                        (day.temp.max + day.temp.min) / 2
                    ) + "°C"
                }
                day={new Date(
                    (day.dt + sevenDays.city.timezone) *
                        1000
                )
                    .toUTCString()
                    .slice(0, 3)}
                key={index}
            />          
        );
    })} 
        </div>
    )
};
