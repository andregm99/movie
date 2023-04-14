import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea} from '@mui/material';
import '../styles/global.css'

export default function Cards({image}) {
  return (
    <div className='card'>
    <Card sx={{ maxWidth: 300}} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="450"
          image={image}
          alt="Movies"
          className='IMG'
        />
      </CardActionArea>
    </Card>
    </div>
  );
}