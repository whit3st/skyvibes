import React from "react";

export default function SearchBar({ placeholder, getValue, makeSearch, coord }) {
    
    function openMap() {
        window.open(`https://www.google.com/maps/search/?api=1&query=${coord.lat},${coord.lon}`, "_blank");
    }

    return (
        <div className="flex relative min-w-[280px] justify-end">
            <label className="absolute -left-0 top-[50%] -translate-y-1/2" htmlFor="user-value">City</label>
            <input id="user-value" placeholder={placeholder} onKeyUp={getValue}  className="bg-transparent transition-all border focus:bg-[rgba(255,255,255,.1)] placeholder-white placeholder-opacity-90 rounded h-[35px] w-[250px] focus:outline-[#ba6af0] px-3" type="text"/>
            <img className="absolute w-5 top-[50%] -translate-y-1/2 right-2 cursor-pointer" onClick={makeSearch} src="./searchIcon.png" alt=""/>
            <img id="map" className="absolute top-[50%] -translate-y-1/2 -left-10 cursor-pointer" src="./mapIcon.png" alt="" onClick={() => openMap()}/>            
        </div>
    );
}
