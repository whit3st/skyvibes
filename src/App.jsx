import { useState } from "react";
import SearchBar from "./Search/SearchBar";
import FahrOrCels from "./Weather/FahrOrCels";
import FahrToCels from "./Search/FahrToCels";
import WeatherIcon from "./Weather/WeatherIcon";
import Temperature from "./Weather/Temperature";
import WeatherDate from "./Weather/WeatherDate";
import Details from "./Weather/Details";
import DayCard from "./Weather/DayCard";
import City from "./Weather/City";
import ErrorText from "./Weather/ErrorText";
function App() {
    // API call yaparken hem C hem F al,
    // bir tane state true false yap
    // eğer true ise Celsius datası gözüksün
    // false ise Fahreinheit datası gözüksün?
    const [value, setValue] = useState();
    const [sevenDays, setSevenDays] = useState();
    const [currentWeather, setCurrentWeather] = useState();
    const [ready, setReady] = useState(false);
    const [isError, setIsError] = useState(false);
    const API_KEY = import.meta.env.VITE_API_KEY;
    const SEVEN_DAYS_URL = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${value}&cnt=7&appid=${API_KEY}&units=metric`;
    const CURRENT_URL = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API_KEY}&units=metric`;

    function getData(e) {
        Promise.all([fetch(SEVEN_DAYS_URL), fetch(CURRENT_URL)])
            .then(([sevenDaysRes, currentRes]) =>
                Promise.all([
                    sevenDaysRes.json(),
                    currentRes.json(),
                    sevenDaysRes.ok,
                    currentRes.ok,
                ])
            )
            .then(([sevenDaysData, currentData, sevenDaysOk, currentOk]) => {
                if (sevenDaysOk && currentOk) {
                    setSevenDays(sevenDaysData);
                    setCurrentWeather(currentData);
                    setReady(true);
                } else {
                    setIsError(true);
                    setReady(false);
                    setTimeout(() => {
                        setIsError(false);
                    }, 2000);
                }
            })
            .catch(() => {
                setIsError(true);
                setReady(false);
            });

        e.target.parentNode.children[0].value = "";
    }

    function getValue(e) {
        setValue(e.target.value);

        if (e.key == "Enter") {
            getData(e);
        }
    }

    return (
        <main className="relative px-5 md:px-10 transition-all bg-[rgba(255,255,255,0.1)] shadow-xl rounded sm:mt-10 py-5 text-white md:min-w-[750px] sm:min-w-[600px] max-w-[320px] lg:min-w-[800px]">
            <header className="flex gap-5 items-center justify-end mb-5">
                <SearchBar
                    makeSearch={(e) => getData(e)}
                    getValue={(e) => getValue(e)}
                    coord={currentWeather && currentWeather.coord}
                />
            </header>
            {isError && <ErrorText error="City name not identified." />}
            {ready && (
                <section className="flex flex-col gap-5 mt-5">
                    <span className="flex justify-between items-center">
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
                    </span>

                    <span className="flex gap-4">
                        <Temperature
                            temp={Math.floor(currentWeather.main.temp)}
                            feelsLike={Math.floor(
                                currentWeather.main.feels_like
                            )}
                            description={currentWeather.weather[0].description}
                        />
                        <FahrOrCels celciusOrFahrenheit="celcius" />
                    </span>
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
                    <span
                        onWheel={(e) => {
                            e.target;
                        }}
                        className="flex h-36 mt-10 gap-4 overflow-x-scroll md:justify-center"
                    >
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
                    </span>
                </section>
            )}
        </main>
    );
}

export default App;
