import React from "react";

export default function FahrOrCels({ celciusOrFahrenheit }) {
    if (celciusOrFahrenheit == "celcius") {
        return <p className="text-2xl drop-shadow-cust">°C</p>;
    } else {
        return <p className="text-2xl drop-shadow-cust">°F</p>;
    }
}
