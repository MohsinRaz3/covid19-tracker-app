import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    background: 'grey',
    flexGrow: 1,
    
  },
  menuButton: {
  marginRight: theme.spacing(2),
  },

  title: {
    textAlign: "center",
    flexGrow: 1,
    
  },

}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
            Covid -19 Tracker
          </Typography>
        
        </Toolbar>
      </AppBar>
    </div>
  );
}