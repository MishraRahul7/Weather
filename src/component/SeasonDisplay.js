import React from "react";
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      textAlign: "center",
    },
    "& > *": {
      color: "white",
      margin: theme.spacing(1),
      width: theme.spacing(20),
      height: theme.spacing(12),
      padding: theme.spacing(2),
      backgroundColor: "transparent",
    },
  },
  error: {
    backgroundColor: "transparent",
    color: "white",
    textAlign: "center",
    "& > *": { fontSize: "2em" },
  },
}));
const SeasonDisplay = (props) => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        direction="column"
        alignContent="center"
        style={{ marginTop: "-20%" }}
      >
        <Paper elevation={0} className={classes.error}>
          {props.error && <Typography>{props.error}</Typography>}
        </Paper>
        <Grid item xs={12} md={6} className={classes.root}>
          <Paper elevation={0}>
            {props.wicon && props.description && (
              <Typography style={{ textAlign: "center" }}>
                <img
                  height="40%"
                  width="40%"
                  src={props.wicon}
                  alt="weather icon"
                />
                <br />
                <span>{props.description}</span>
              </Typography>
            )}
          </Paper>
          <Paper elevation={0}>
            {props.city &&
              props.currentTime &&
              props.wicon &&
              props.region &&
              props.country && (
                <Typography>
                  <span style={{ fontSize: "2em" }}>{props.city}</span>
                  <br />
                  <span>
                    {props.region}, {props.country}
                    <br />
                    {props.currentTime}
                  </span>
                </Typography>
              )}
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} className={classes.root}>
          <Paper elevation={0}>
            {props.temperature && (
              <Typography style={{ textAlign: "center" }}>
                <span style={{ fontSize: "4em" }}>{props.temperature}°C</span>
              </Typography>
            )}
          </Paper>
          <Paper elevation={0}>
            {props.wspeed &&
              props.humidity &&
              props.wdegree &&
              props.wdir &&
              props.cloud && (
                <Typography>
                  Cloud Cover: <span>{props.cloud}%</span>
                  <br />
                  Humidity: <span>{props.humidity}%</span>
                  <br />
                  Wind Speed: <span>{props.wspeed} km/h</span>
                  <br />
                </Typography>
              )}
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default SeasonDisplay;
