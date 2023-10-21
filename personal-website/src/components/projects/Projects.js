import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ProjectCard from './ProjectCard';
import imageUrl from "./sample_image_code.jpg";

const projects = [
  {
    image: imageUrl,
    heading: "Project 1",
    content: "Have to write the content for this project. For now, assume that it was the project that I did in Computer Graphics class. We used a custom rasterizer to create an interactive desktop application, which takes keyboard and mouse strokes and do lots of different operations.",
  },
  {
    image: imageUrl,
    heading: "Project 2",
    content: "Have to write the content for this project. For now, assume that it was the project that I did in Computer Graphics class. We used a custom rasterizer to create an interactive desktop application, which takes keyboard and mouse strokes and do lots of different operations.",
  },
  {
    image: imageUrl,
    heading: "Project 3",
    content: "Have to write the content for this project. For now, assume that it was the project that I did in Computer Graphics class. We used a custom rasterizer to create an interactive desktop application, which takes keyboard and mouse strokes and do lots of different operations.",
  },
  {
    image: imageUrl,
    heading: "Project 4",
    content: "Have to write the content for this project. For now, assume that it was the project that I did in Computer Graphics class. We used a custom rasterizer to create an interactive desktop application, which takes keyboard and mouse strokes and do lots of different operations.",
  },
];

export default function ProjectGrid() {
  return (
    <Container maxWidth="lg" component={"span"}>
      <Grid container spacing={2} component={"span"}>
        {projects.map((project, index) => (

            <Grid item xs={12} key={index} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} component={"span"}>
                <ProjectCard
                image_path={project.image}
                heading={project.heading}
                content={project.content}
                />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}