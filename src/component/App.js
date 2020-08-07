import React, { useState } from "react";

import Search from "./Search";
import SeasonDisplay from "./SeasonDisplay";
import bgImage from "../image/bg_image.jpg";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  bg: {
    width: "100vw",
    height: "100vh",
    backdropFilter: "blur(15px)",
  },
}));

const App = () => {
  const classes = useStyles();
  const [weather, setWeather] = useState([]);
  const API_KEY = "30cf6c434dec72834c5e4d6fcae1de88";
  const fetchWeatherData = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const apiData = await fetch(
      `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`
    )
      .then((res) => res.json())
      .catch((data) => data);
    if (city) {
      setWeather({
        city: apiData.location.name,
        region: apiData.location.region,
        country: apiData.location.country,
        currentTime: apiData.location.localtime,
        temperature: apiData.current.temperature,
        humidity: apiData.current.humidity,
        cloud: apiData.current.cloudcover,
        description: apiData.current.weather_descriptions[0],
        wspeed: apiData.current.wind_speed,
        wdir: apiData.current.wind_dir,
        wdegree: apiData.current.wind_degree,
        wicon: apiData.current.weather_icons,
        error: "",
      });
    } else {
      setWeather({
        city: "",
        region: "",
        country: "",
        currentTime: "",
        temperature: "",
        humidity: "",
        cloud: "",
        description: "",
        wspeed: "",
        wdir: "",
        wdegree: "",
        wicon: "",
        error: "Please enter a city",
      });
    }
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.bg}>
          <Search getWeatherData={fetchWeatherData} />
          <SeasonDisplay
            city={weather.city}
            region={weather.region}
            country={weather.country}
            currentTime={weather.currentTime}
            temperature={weather.temperature}
            humidity={weather.humidity}
            cloud={weather.cloud}
            description={weather.description}
            wspeed={weather.wspeed}
            wdegree={weather.wdegree}
            wdir={weather.wdir}
            wicon={weather.wicon}
            error={weather.error}
          />
        </div>
      </div>
    </>
  );
};

export default App;
