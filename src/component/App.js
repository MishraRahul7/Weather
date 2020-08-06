import React, { useState } from "react";

import Search from "./Search";
import SeasonDisplay from "./SeasonDisplay";
const App = () => {
  const [weather, setWeather] = useState([]);
  const API_KEY = "1e1b3737a87fc54a2718055f5bbf7514";

  const fetchWeatherData = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    console.log(city);
    const apiData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .catch((data) => data);

    setWeather({
      city: apiData.name,
      country: apiData.sys.country,
      weather: apiData.weather[0].main,
      description: apiData.weather[0].description,
      temperature: apiData.main.temp,
      tempMin: apiData.main.temp_min,
      tempMax: apiData.main.temp_max,
      rain: apiData.rain,
      error: "",
    });
  };

  return (
    <>
      <Search getWeatherData={fetchWeatherData} />
      <SeasonDisplay
        city={weather.city}
        country={weather.country}
        temperature={weather.temperature}
        tempMax={weather.tempMax}
        tempMin={weather.tempMin}
        weather={weather.weather}
        description={weather.description}
      />
    </>
  );
};

export default App;
