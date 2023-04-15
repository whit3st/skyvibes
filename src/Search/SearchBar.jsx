import React, { useState } from "react";

export default function SearchBar({
    placeholder,
    getValue,
    makeSearch,
    coord,
}) {
    const [mode, setMode] = useState("dark");
    function changeMode(e) {
        const lightMode = {
            transition: "background .4s ease-in-out",
            background:
                "-moz-linear-gradient(90deg, rgba(168,85,246,1) 0%, rgba(243,113,182,1) 100%)",
            background:
                "-webkit-linear-gradient(90deg, rgba(168,85,246,1) 0%, rgba(243,113,182,1) 100%)",
            background:
                "linear-gradient(90deg, rgba(168,85,246,1) 0%, rgba(243,113,182,1) 100%)",
            filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#a855f6",endColorstr="#f371b6",GradientType=1)',
        };
        const darkMode = {
            transition: "background .4s ease-in-out",
            background:
                "-moz-linear-gradient(90deg, rgba(61,21,98,1) 0%, rgba(78,16,49,1) 100%)",
            background:
                "-webkit-linear-gradient(90deg, rgba(61,21,98,1) 0%, rgba(78,16,49,1) 100%)",
            background:
                "linear-gradient(90deg, rgba(61,21,98,1) 0%, rgba(78,16,49,1) 100%)",
            filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#3d1562",endColorstr="#4e1031",GradientType=1)',
        };
        const body = document.querySelector("body");

        if (mode === "light") {
            setMode("dark");
            body.style.transition = lightMode.transition;
            body.style.background = lightMode.background;
            body.style.filter = lightMode.filter;
            e.target.src = "./weather_icons/800_d.png";
        } else {
            setMode("light");
            body.style.transition = darkMode.transition;
            body.style.background = darkMode.background;
            body.style.filter = darkMode.filter;
            e.target.src = "./weather_icons/800_n.png";
        }
    }
    function openMap() {
        window.open(
            `https://www.google.com/maps/search/?api=1&query=${coord.lat},${coord.lon}`,
            "_blank"
        );
    }

    return (
        <div className="flex relative min-w-[280px] justify-end">
            <label className="absolute right-20 top-[50%] opacity-0 -translate-y-1/2" htmlFor="user-value">Search a city...</label>
            <input
                id="user-value"
                placeholder={placeholder}
                onKeyUp={getValue}
                className="bg-transparent z-10 text-black transition-all border focus:bg-[rgba(255,255,255,1)] placeholder-white placeholder-opacity-90 rounded h-[35px] w-[200px] focus:outline-[#ba6af0] px-3"
                type="text"
            />
            <img
                className="absolute w-5 top-[50%] -translate-y-1/2 right-2 cursor-pointer"
                onClick={makeSearch}
                src="./searchIcon.png"
                alt="Search Icon"
            />
            <img
                src="./weather_icons/800_d.png"
                className="absolute top-[50%] -translate-y-1/2 left-3 w-6 cursor-pointer"
                onClick={(e) => changeMode(e)}
                alt="Light/Dark Mode Icon"
            />
         
            
            <img
                id="map"
                className="absolute top-[50%] -translate-y-1/2 left-12 cursor-pointer"
                src="./mapIcon.png"
                alt="Map Icon"
                onClick={() => openMap()}
            />
        </div>
    );
}
