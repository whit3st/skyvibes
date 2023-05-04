import React from "react";
import WeatherDate from "./WeatherDate";
import Details from "./Details";
export default function Temperature({
    temp,
    feelsLike,
    description,
    currentWeather,
}) {
    return (
        <div className="flex flex-col relative gap-2">
            <span className="flex gap-5">
                <h1 className="text-9xl font-extralight drop-shadow-cust">
                    {temp}
                </h1>
                <p className="text-2xl drop-shadow-cust">°C</p>
            </span>

            <p className="text-md font-light drop-shadow-cust">
                Feels like {feelsLike}°C
            </p>
            <p className="text-md font-light drop-shadow-cust">
                {description}
            </p>
            <WeatherDate
                date={new Date(
                    (currentWeather.dt + currentWeather.timezone) * 1000
                )
                    .toUTCString()
                    .slice(0, -18)}
            />
            <Details
                wind={Math.floor(currentWeather.wind.speed * 3.6)}
                humidity={currentWeather.main.humidity}
                pressure={currentWeather.main.pressure}
            />
        </div>
    );
}
