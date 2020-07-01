import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      height: theme.spacing(16),
    },
  },
}));

export default function GlobalData() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
      Glabal Data
      </Paper>
      
      <Paper elevation={3}>
      Active
      </Paper>

      <Paper elevation={3}>
      Recovered
      </Paper>

      <Paper elevation={3}>
      Fatalities
      </Paper>

      

      

      
    </div>
  );
}