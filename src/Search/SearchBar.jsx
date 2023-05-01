import React, { useState } from "react";

export default function SearchBar({
    placeholder,
    getValue,
    makeSearch,
    coord,
}) {
    localStorage.getItem("theme") ? '' : localStorage.setItem("theme", "light");
    
    function changeMode() {
        const themeIcon = document.getElementById("themeIcon");
        localStorage.getItem("theme") === "light" ? localStorage.setItem("theme", "dark") : localStorage.setItem("theme", "light");
        if (localStorage.getItem("theme") === "light") {
            document.querySelector('body').style.background = light.background;
            themeIcon.src = "./weather_icons/800_n.png";
        } else {
            document.querySelector('body').style.background = dark.background;
            themeIcon.src = "./weather_icons/800_d.png";
        }
    }
    const light = {
        background: "linear-gradient(to bottom right, #a56fe9, #79d4ba, #d348e2)",
    }
    const dark = {
        background: "linear-gradient(to bottom right, #421e70, #024f6f, #6f047a)",
    }
    // localStorage.getItem("theme") === "light" ? localStorage.setItem("theme", "dark") : localStorage.setItem("theme", "light");
    if (localStorage.getItem("theme") === "light") {
        document.querySelector('body').style.background = light.background;
    } else {
        document.querySelector('body').style.background = dark.background;
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
                placeholder="Search a city..."
                onKeyUp={getValue}
                aria-label="Search a city..."
                className="bg-transparent z-10  transition-all border  placeholder-white placeholder-opacity-90 rounded h-[35px] w-[200px] focus:outline-[#ba6af0] px-3"
                type="text"
            />
            <img
                className="absolute w-5 top-[50%] -translate-y-1/2 right-2 cursor-pointer"
                onClick={makeSearch}
                src="./searchIcon.png"
                alt="Search Icon"
            />
            <img
                id="themeIcon"
                src={localStorage.getItem("theme") === "light" ? "./weather_icons/800_n.png" : "./weather_icons/800_d.png"}
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
