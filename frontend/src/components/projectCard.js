import * as React from 'react';
import {Link} from 'react-router-dom'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


function card(props){
  
  return(
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Title
      </Typography>
      <Typography variant="h5" component="div">
        {props.name}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Description
      </Typography>
      <Typography variant="body2">
        {props.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="primary">
        <Link to={`/repo/${props.name}`}>Open Project</Link>
      </Button>
    </CardActions>
  </React.Fragment>
  );
}

export default function OutlinedCard(props) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card(props)}</Card>
    </Box>
  );
}