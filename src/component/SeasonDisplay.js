import React from "react";
import {
  Grid,
  Button,
  TextField,
  Typography,
  Paper,
  makeStyles,
} from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "LightGreen",
    position: "absolute",
  },
  cardStyle: {
    height: "50vh",
    marginTop: "20px",
    textAlign: "Center",
  },
});
const SeasonDisplay = (props) => {
  const classes = useStyles();
  return (
    <>
      <Grid container justify="center" className={classes.root}>
        <Grid item xs={12} md={6}>
          <Paper elevation={10} className={classes.cardStyle}>
            <form onSubmit={props.getWeatherData}>
              <Typography style={{ fontSize: "2em" }}>
                WEATHER REPORT
              </Typography>
              <TextField
                size="small"
                variant="outlined"
                label="City"
                name="city"
              ></TextField>
              <TextField
                size="small"
                variant="outlined"
                label="Country"
                name="country"
              ></TextField>
              <Button variant="outlined" size="small" type="submit">
                Search
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default SeasonDisplay;
