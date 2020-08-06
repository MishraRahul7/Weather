import React, { useState } from "react";
import SeasonDisplay from "./SeasonDisplay";

const App = () => {
  const [weather, setWeather] = useState([]);
  const API_KEY = "1e1b3737a87fc54a2718055f5bbf7514";
  const fetchWeatherData = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    console.log(city, country);
    setWeather(
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
      )
        .then((res) => res.json())
        .catch((data) => data)
    );
  };
  return (
    <>
      <SeasonDisplay getWeatherData={fetchWeatherData} />
      {console.log(weather)}
    </>
  );
};

export default App;
