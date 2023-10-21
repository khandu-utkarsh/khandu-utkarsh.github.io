import React from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';


function VerticalStack(props) {
    const {heading, content} = props;
return (
    <Card component={"span"}>
    <CardContent sx={{ display: 'flex',flexDirection: 'column',}} component={"span"}>
        <Typography variant="h5" gutterBottom component={"span"}>{heading}</Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>{content}</Typography>
    </CardContent>
    </Card>
);
}

export default function ProjectCard(props) {
  const { image_path, heading, content } = props;

  return (
    <Card
      sx={{ width: "85%", height: "250px", border: "2px solid #e0e0e0" }} component="span">
      <Grid container component={"span"}>
        <Grid item xs={7} component={"span"}>
            <VerticalStack heading={heading} content={content}/>
        </Grid>
        <Grid item xs={5} component={"span"}> 
            <CardMedia component="img" sx={{ height: "250px", padding: "2%" }} title="card-title-test" image={image_path}/>
        </Grid>
      </Grid>
    </Card>
  );
}