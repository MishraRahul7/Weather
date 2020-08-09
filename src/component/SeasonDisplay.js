import React from "react";
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  gridPaper: {
    height: "50vh",
    width: "70vw",
  },
  mainPaper: {
    backgroundColor: "transparent",
    border: "1px solid white",
    borderRadius: "10px",
    padding: "20px",
    height: "100%",
    width: "100%",
    color: "white",
  },
  error: {
    backgroundColor: "transparent",
    color: "white",
    textAlign: "center",
    "& > *": { fontSize: "2em" },
  },
}));
const SeasonDisplay = (props) => {
  let utc = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
  const classes = useStyles();
  return (
    <>
      <Grid container direction="column" alignContent="center">
        <Grid item xs={12} md={6} className={classes.gridPaper}>
          <Paper elevation={5} className={classes.mainPaper}>
            {props.error && <Typography>{props.error}</Typography>}
            {props.city && props.country && (
              <Typography style={{ fontSize: "2em" }}>
                {props.city}, {props.country}
              </Typography>
            )}
            {props.description && (
              <Typography>
                <span>{utc}</span>
                <br />
                {props.description}
              </Typography>
            )}
            {props.temp && (
              <Typography>
                <span style={{ fontSize: "3em", marginLeft: "20%" }}>
                  {props.temp}
                </span>
                <sup>°C</sup>
              </Typography>
            )}
            {props.feels_like && props.humidity && props.wspeed && (
              <Typography>
                <span>
                  Feels Like
                  <br />
                  {props.feels_like}
                </span>
                <br />

                <span>
                  Humidity
                  <br />
                  {props.humidity}%
                </span>
                <br />

                <span>
                  Wind Speed
                  <br />
                  {props.wspeed} km/h
                </span>
              </Typography>
            )}
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default SeasonDisplay;
