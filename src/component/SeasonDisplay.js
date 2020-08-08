import React from "react";
import { Grid, makeStyles, Paper } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  gridPaper: {
    height: "50vh",
    width: "70vw",
  },
  mainPaper: {
    backgroundColor: "transparent",
    border: "1px solid white",
    borderRadius: "10px",
    height: "100%",
    width: "100%",
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
      <Grid container direction="column" alignContent="center">
        <Grid item xs={12} md={6} className={classes.gridPaper}>
          <Paper elevation={5} className={classes.mainPaper}></Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default SeasonDisplay;
