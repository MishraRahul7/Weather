import React from "react";
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "roboto",
    backgroundColor: "transparent",
    color: "white",
    marginBottom: "30px",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: "80vw",
      margin: "10px 10px 0px 20px",
    },
  },
  alignCenter: {
    textAlign: "center",
  },
}));
const SeasonDisplay = (props) => {
  const classes = useStyles();
  return (
    <>
      <Grid container justify="center" alignContent="center" direction="column">
        <Grid item xs={12} md={3}>
          <Paper elevation={0} className={classes.root}>
            {props.error && (
              <Typography style={{ fontSize: "2em", color: "white" }}>
                {props.error}
              </Typography>
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper elevation={0} className={classes.root}>
            {props.city &&
              props.currentTime &&
              props.wicon &&
              props.region &&
              props.country && (
                <Typography className={classes.alignCenter}>
                  <img src={props.wicon} alt="weather icon" />
                  <br />
                  <span style={{ fontSize: "1em" }}>{props.city}</span>
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
        <Grid item xs={12} md={3}>
          <Paper elevation={0} className={classes.root}>
            <Typography className={classes.alignCenter}>
              {props.temperature && (
                <span style={{ fontSize: "4em" }}>{props.temperature}°C</span>
              )}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper elevation={0} className={classes.root}>
            {props.wspeed && props.humidity && props.wdegree && props.wdir && (
              <Typography>
                <span>
                  Humidity
                  <br /> {props.humidity} %
                </span>
                <br />
                <span>
                  Wind Speed <br />
                  {props.wspeed} km/h
                </span>
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
