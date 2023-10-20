import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import imageUrl from "./sample_image_code.jpg"; //!Hardcoding the image path to make it work. It is not working right now if image is passed as a property.

export default function ProjectCard(props) {
    const {card_title, image_path, heading, content}  = props;      
    // Use the props in your component
    return (
        <Card sx={{ maxWidth: 345, border: '2px solid #e0e0e0' }}>
        <CardMedia
            component="img"
            sx={{ height: "250px", paddingTop: "2%" }}
            title={card_title}
            image={imageUrl}
        />  
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    </Card>

);
}