import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../actions";

const SeasonDisplay = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const weatherData = useSelector((state) => state.dataApi.data);

  console.log(weatherData);
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={6}></Grid>

        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </>
  );
};

export default SeasonDisplay;
