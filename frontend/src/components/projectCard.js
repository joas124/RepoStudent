import * as React from 'react';
import {Link} from 'react-router-dom'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import theme from "./theme";
import { ThemeProvider } from '@mui/material/';
import './searchRepo.css'


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


function card(props){
  if(props.isRepo){
    return(
    <ThemeProvider theme={theme}>
    <React.Fragment>
      <div className="backgroundcolor">
      <CardContent className='card-content' >
        <Typography sx={{fontFamily:"Orbitron"}}variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography sx={{ mt: 1.5 , fontFamily: 'Orbitron'}} color="text.secondary">
          <div className="proj-description-search">
            {props.description}
          </div>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" variant='outlined'>
          <Link className='link-repo' to={`/repo/${props.name}`}>Open Project</Link>  
        </Button>
      </CardActions>
      </div>
    </React.Fragment>
    </ThemeProvider>
    );
  }else{
    return(
      <ThemeProvider theme={theme}>
      <React.Fragment>
        <div className="backgroundcolor">
        <CardContent className='card-content' >
          <Typography sx={{fontFamily:"Orbitron"}}variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography sx={{ mt: 1.5 , fontFamily: 'Orbitron'}} color="text.secondary">
            <div className="proj-description-search">
              {props.description}
            </div>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" variant='outlined'>
            <Link className='link-repo' to={`/profile/${props.username}`}>Open Profile</Link>  
          </Button>
        </CardActions>
        </div>
      </React.Fragment>
      </ThemeProvider>
      );
  }
}

export default function OutlinedCard(props) {
  return (
    <Box>
      <Card variant="outlined">{card(props)}</Card>
    </Box>
  );
}