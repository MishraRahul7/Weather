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
  cardStyle: {
    marginTop: "20px",
    padding: "20px",
    textAlign: "Center",
    [theme.breakpoints.down("sm")]: {
      margin: "10px 10px 0px 10px",
    },
  },
}));
const Search = (props) => {
  const classes = useStyles();
  return (
    <>
      <Grid container justify="center">
        <Grid item xs={12} md={6}>
          <Paper elevation={5} className={classes.cardStyle}>
            <form onSubmit={props.getWeatherData}>
              <Typography style={{ fontSize: "2em", paddingBottom: "20px" }}>
                WEATHER REPORT
              </Typography>
              <TextField
                size="small"
                variant="outlined"
                label="City"
                name="city"
              />
              <br />
              <br />
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

export default Search;
