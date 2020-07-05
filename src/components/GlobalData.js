import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      height: theme.spacing(14),
    },
  },
}));

const useStylesTypography = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});


export default function GlobalData() {
  const classes = useStyles();
  const classeTypography = useStylesTypography();

  const [globalData, setGlobalData] = useState();
  const [loadata, setLoadata] = useState(false);

  useEffect(()=>{

    async function fetchGlobalData(){

      setLoadata(true);
      const apiResp = await fetch('https://api.thevirustracker.com/free-api?global=stats');

      const apiRespJson = await apiResp.json();
      console.log(apiRespJson);
      setGlobalData(apiRespJson);
      setLoadata(false);

  }
  fetchGlobalData();
  },[]);

  const LoadingData = "Loading..";

  if(loadata){
    return (
      <div className={classes.root}>
  
        <Paper elevation={3}>
          <div className={classeTypography.root}>
        
            <Typography variant="h3" gutterBottom style= {{color: 'grey'}}> 
            {LoadingData}
            </Typography>
          
            <Typography variant="subtitle2" gutterBottom style= {{color: 'grey', fontWeight:'bold'}}>
             Total Cases   
            </Typography>
          </div>
        </Paper>
         
        <Paper elevation={3}>
        <div className={classeTypography.root}>
        
        <Typography variant="h3" gutterBottom style= {{color: 'orange'}}>
          {LoadingData}
          </Typography>
      
        <Typography variant="subtitle2" gutterBottom style= {{color: 'orange', fontWeight:'bold'}}>
         Active Cases 
        </Typography>
      </div>
        </Paper>
  
        <Paper elevation={3}>
        <div className={classeTypography.root}>
        
        <Typography variant="h3" gutterBottom style= {{color: 'Green'}}>
        {LoadingData}
        </Typography>
      
        <Typography variant="subtitle2" gutterBottom style= {{color: 'Green', fontWeight:'bold'}}> 
         Recovered    
        </Typography>
      </div>
        </Paper>
  
        <Paper elevation={3}>
        <div className={classeTypography.root}>
        
        <Typography variant="h3" gutterBottom style= {{color: 'red'}}>
        {LoadingData}
        </Typography>
      
        <Typography variant="subtitle2" gutterBottom style= {{color: 'red', fontWeight:'bold'}}>
         Fatalities    
        </Typography>
      </div>
        </Paper>
  
        
      </div>
    );
    }

  return (
    <div className={classes.root}>

      <Paper elevation={3}>
        <div className={classeTypography.root}>
      
          <Typography variant="h3" gutterBottom style= {{color: 'grey'}}> 
          <NumberFormat value={globalData && globalData.results && globalData.results[0].total_cases} displayType={'text'} thousandSeparator={true} />

            
          </Typography>
        
          <Typography variant="subtitle2" gutterBottom style= {{color: 'grey', fontWeight:'bold'}}>
           Total Cases   
          </Typography>
        </div>
      </Paper>
       
      <Paper elevation={3}>
      <div className={classeTypography.root}>
      
      <Typography variant="h3" gutterBottom style= {{color: 'orange'}}>
      <NumberFormat value={globalData && globalData.results && globalData.results[0].total_active_cases + globalData.results[0].total_unresolved} displayType={'text'} thousandSeparator={true} />

      </Typography>
    
      <Typography variant="subtitle2" gutterBottom style= {{color: 'orange', fontWeight:'bold'}}>
       Active Cases 
      </Typography>
    </div>
      </Paper>

      <Paper elevation={3}>
      <div className={classeTypography.root}>
      
      <Typography variant="h3" gutterBottom style= {{color: 'Green'}}>
      <NumberFormat value={globalData && globalData.results && globalData.results[0].total_recovered} displayType={'text'} thousandSeparator={true} />
      </Typography>
    
      <Typography variant="subtitle2" gutterBottom style= {{color: 'Green', fontWeight:'bold'}}> 
       Recovered    
      </Typography>
    </div>
      </Paper>

      <Paper elevation={3}>
      <div className={classeTypography.root}>
      
      <Typography variant="h3" gutterBottom style= {{color: 'red'}}>
      <NumberFormat value={globalData && globalData.results && globalData.results[0].total_deaths} displayType={'text'} thousandSeparator={true} />
      </Typography>
    
      <Typography variant="subtitle2" gutterBottom style= {{color: 'red', fontWeight:'bold'}}>
       Fatalities    
      </Typography>
    </div>
      </Paper>

      

      

      
    </div>
  );
}