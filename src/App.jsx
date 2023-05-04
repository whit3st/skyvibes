import { useEffect, useState } from "react";
import SearchBar from "./Search/SearchBar";
import Temperature from "./Weather/Temperature";
import ErrorText from "./Weather/ErrorText";
import Wrapper_IconAndCity from "./Weather/Wrapper_IconAndCity";
import SevenDays from "./Weather/SevenDays";
function App() {
    const [value, setValue] = useState();
    const [sevenDays, setSevenDays] = useState();
    const [currentWeather, setCurrentWeather] = useState();
    const [ready, setReady] = useState(false);
    const [isError, setIsError] = useState(false);
    const API_KEY = import.meta.env.VITE_API_KEY;
    const SEVEN_DAYS_URL = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${value}&cnt=7&appid=${API_KEY}&units=metric`;
    const CURRENT_URL = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API_KEY}&units=metric`;

    // FETCHING DATA FROM API
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

        e.target.parentNode.children[1].value = "";
        e.target.blur();
    }

    function getValue(e) {
        setValue(e.target.value);

        if (e.key == "Enter") {
            getData(e);
        }
    }

    // SHOWING USER AFTER PAGE LOAD
    useEffect(() => {
        const cities = [
            "New York",
            "London",
            "Tokyo",
            "Paris",
            "Sydney",
            "Los Angeles",
            "Toronto",
            "Berlin",
            "Mumbai",
            "Rio de Janeiro",
            "Moscow",
            "Amsterdam",
            "Hong Kong",
            "Singapore",
            "Dubai",
            "Rome",
            "Barcelona",
            "San Francisco",
            "Cape Town",
            "Bangkok",
        ];
        const randomCity = cities[Math.floor(Math.random() * cities.length)];
        const defaultSevenDaysURL = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${randomCity}&cnt=7&appid=${API_KEY}&units=metric`;
        const defaultCurrentURL = `https://api.openweathermap.org/data/2.5/weather?q=${randomCity}&appid=${API_KEY}&units=metric`;
        Promise.all([fetch(defaultSevenDaysURL), fetch(defaultCurrentURL)])
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
    }, []);
    return (
        <main className="relative px-5 md:px-12 transition-all bg-[rgba(255,255,255,0.15)] shadow-xl rounded sm:mt-10 py-11 text-white lg:w-[990px] md:w-[730px] w-[99vw]">
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
                    <Wrapper_IconAndCity currentWeather={currentWeather} />
                    <Temperature
                            currentWeather={currentWeather}
                            temp={Math.floor(currentWeather.main.temp)}
                            feelsLike={Math.floor(
                                currentWeather.main.feels_like
                            )}
                            description={currentWeather.weather[0].description}
                    />
                    <SevenDays sevenDays={sevenDays} />
                </section>
            )}
        </main>
    );
}

export default App;
