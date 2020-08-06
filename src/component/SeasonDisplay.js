import React from "react";
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "50vh",
    marginTop: "20px",
    padding: "20px",
    textAlign: "Center",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      margin: "10px 10px 0px 10px",
    },
  },
}));
const SeasonDisplay = (props) => {
  const classes = useStyles();
  return (
    <>
      <Grid container justify="center">
        <Grid item xs={12} md={6}>
          <Paper elevation={5} className={classes.root}>
            {props.city && (
              <Typography>
                {props.city},{props.country}
              </Typography>
            )}

            {props.temperature && (
              <Typography>Temperature:{props.temperature}</Typography>
            )}
            {props.tempMin &&
              props.tempMax &&
              ((<Typography>{props.temperature}</Typography>),
              (
                <Typography>
                  Max: {props.tempMax}
                  {"       "}Min:{props.tempMin}
                </Typography>
              ))}
            {props.weather && (
              <Typography>Today's Weather:{props.weather}</Typography>
            )}
            {props.description && (
              <Typography>Description: {props.description}</Typography>
            )}
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default SeasonDisplay;
