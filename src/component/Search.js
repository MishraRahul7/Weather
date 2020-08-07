import React from "react";
import {
  Grid,
  Button,
  TextField,
  Typography,
  Paper,
  makeStyles,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: { height: "25vh" },
  cardStyle: {
    fontFamily: "roboto",
    backgroundColor: "transparent",
    padding: "10px",
    textAlign: "Center",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      margin: "0px",
    },
  },
}));
const Search = (props) => {
  const classes = useStyles();
  return (
    <>
      <Grid container justify="center" className={classes.root}>
        <Grid item xs={12} md={6}>
          <Paper elevation={0} className={classes.cardStyle}>
            <form onSubmit={props.getWeatherData}>
              <Typography style={{ fontSize: "2em", paddingBottom: "20px" }}>
                WEATHER
              </Typography>
              <TextField
                size="small"
                variant="outlined"
                placeholder="Enter City Name"
                name="city"
                InputLabelProps={{
                  style: { color: "white" },
                }}
                InputProps={{
                  style: { color: "white" },
                }}
              />
              <br />
              <br />
              <Button
                style={{
                  color: "white",
                  borderColor: "white",
                }}
                variant="outlined"
                size="small"
                type="submit"
              >
                Search
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Search;
