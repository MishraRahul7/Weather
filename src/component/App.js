import React, { useState } from "react";

import Search from "./Search";
import SeasonDisplay from "./SeasonDisplay";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundImage: " linear-gradient(to right, #FC3C2B , #3841FF)",
  },
  bg: {},
}));

const App = () => {
  const classes = useStyles();
  const [weather, setWeather] = useState([]);
  const API_KEY = "1e1b3737a87fc54a2718055f5bbf7514";
  const fetchWeatherData = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const apiData = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`
    )
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      });
    if (city) {
      setWeather({
        city: apiData.name,
        country: apiData.sys.country,
        feels_like: apiData.main.feels_like,
        temperature: apiData.main.temp,
        humidity: apiData.main.humidity,
        description: apiData.weather[0].descriptions,
        wspeed: apiData.wind.speed,
        wdegree: apiData.wind.deg,
        wicon: apiData.weather[0].icon,
        error: "",
      });
      console.log(apiData);
    } else {
      setWeather({
        city: "",

        country: "",
        feels_like: "",
        temperature: "",
        humidity: "",
        cloud: "",
        description: "",
        wicon: "",
        wspeed: "",

        wdegree: "",

        error: "Please enter a city",
      });
    }
  };

  return (
    <>
      <div className={classes.root}>
        <Search getWeatherData={fetchWeatherData} />

        <SeasonDisplay
          city={weather.city}
          country={weather.country}
          temperature={weather.temperature}
          feels_like={weather.feels_like}
          humidity={weather.humidity}
          cloud={weather.cloud}
          description={weather.description}
          wspeed={weather.wspeed}
          wdegree={weather.wdegree}
          wicon={weather.wicon}
          error={weather.error}
        />
      </div>
    </>
  );
};

export default App;
