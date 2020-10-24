import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Questions from './Questions/Questions';

const useStyles = makeStyles({
  typography: {
      color: '#191970',
      textAlign:'center',
      marginTop: '40px'
  }
});


function App() {
  const classes = useStyles();

  return (
    <div className="App">
     <Typography className={classes.typography} component="h4" variant="h4">Quiz App</Typography>
     <Questions/>
    </div>
  );
}

export default App;
