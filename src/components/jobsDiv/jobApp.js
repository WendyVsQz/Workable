import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  > ()
  </Box> 
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Job title                            
      </Typography>
        <Typography sx={{marginLeft: 80, height: 9}}>
        <BookmarkIcon/>
        </Typography>
      <Typography variant="h5" component="div">
        Fr{bull}nt{bull}end{bull}loper
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Salary
      </Typography>
      <Typography variant="body2">
        xxxxxx
        <br />
        {'"location"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button sx={{marginLeft: 75}} size="small">More details</Button>
    </CardActions>
  </React.Fragment>


);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 800,marginLeft: 45}}>
      <Card variant="outlined">{card}</Card>
      <Card variant="outlined">{card}</Card>
      <Card variant="outlined">{card}</Card>
      <Card variant="outlined">{card}</Card>
      <Card variant="outlined">{card}</Card>
      <Card variant="outlined">{card}</Card>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
