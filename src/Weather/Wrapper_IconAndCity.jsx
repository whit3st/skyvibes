import WeatherIcon from "./WeatherIcon";
import City from "./City";

export default function Wrapper_IconAndCity({ currentWeather }) {
    return (
        <div className="flex justify-between items-center">
            <WeatherIcon
                            id={currentWeather.weather[0].id}
                            icon={currentWeather.weather[0].icon}
                        />
            <City
                            city={
                                currentWeather.name
                                    .split(" ")
                                    .includes("Province")
                                    ? currentWeather.name.split(" ").shift()
                                    : currentWeather.name
                            }
                            country={currentWeather.sys.country}
                        />
        </div>
    )
}