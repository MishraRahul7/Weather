import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
const useStyles = makeStyles(theme => ({
  root: {
      position:"relative",
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    marginTop:"45vh"
  },
  text:{
      fontFamily:"Arial",
      fontSize:"20px",
      position:"relative",
      display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
}));

export default function Spinner(props) {
  const classes = useStyles();

  return (
      <>  
        <div className={classes.root}><CircularProgress/></div>
        <div className={classes.text}>{props.message}</div>
    </>
  );
}
Spinner.defaultProps={
    message:'Loading...'
}