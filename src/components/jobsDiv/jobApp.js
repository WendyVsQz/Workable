import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const jobs =() =>{
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
  return (
    <Card sx={{ minWidth: 1010 }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Jobs Title
      </Typography>
      <Typography variant="h5" component="div">
        be{jobs}nev{jobs}o{jobs}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Job description
      </Typography>
      <Typography variant="body2">
        Location
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>

    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Job Title
      </Typography>
      <Typography variant="h5" component="div">
        be{jobs}nev{jobs}o{jobs}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Job description
      </Typography>
      <Typography variant="body2">
        Location
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>

    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Job title
      </Typography>
      <Typography variant="h5" component="div">
        be{jobs}nev{jobs}o{jobs}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Job description
      </Typography>
      <Typography variant="body2">
        Location
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>

    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Job Title
      </Typography>
      <Typography variant="h5" component="div">
        be{jobs}nev{jobs}o{jobs}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Job description
      </Typography>
      <Typography variant="body2">
        Location
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>

    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Job title
      </Typography>
      <Typography variant="h5" component="div">
        be{jobs}nev{jobs}o{jobs}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Job description
      </Typography>
      <Typography variant="body2">
        Location
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{jobs}nev{jobs}o{jobs}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>

);
}

export default jobs