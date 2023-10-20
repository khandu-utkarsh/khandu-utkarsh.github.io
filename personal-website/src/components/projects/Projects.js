import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ProjectCard from './ProjectCard';
import imageUrl from "./sample_image_code.jpg";

const projects = [
  {
    title: "CardTitle_1",
    image: imageUrl,
    heading: "Head_lets_see",
    content: "This is the contentIAmPassing3. losdfsdfv sdvfsdagv dsrfvsadfvsdea sdfvsadfvsaeddfg asdfvadsfv sadfasdvc sadfasdfcvas asdfcawsdfcasdf wsaedefasdfcasdf  awsedfcasdfc sadfcasdfc ",
  },
  {
    title: "CardTitle_2",
    image: imageUrl,
    heading: "Head_lets_see1",
    content: "This is the contentIAmPassing3. losdfsdfv sdvfsdagv dsrfvsadfvsdea sdfvsadfvsaeddfg asdfvadsfv sadfasdvc sadfasdfcvas asdfcawsdfcasdf wsaedefasdfcasdf  awsedfcasdfc sadfcasdfc ",
  },
  {
    title: "CardTitle_3",
    image: imageUrl,
    heading: "Head_lets_see2",
    content: "This is the contentIAmPassing3. losdfsdfv sdvfsdagv dsrfvsadfvsdea sdfvsadfvsaeddfg asdfvadsfv sadfasdvc sadfasdfcvas asdfcawsdfcasdf wsaedefasdfcasdf  awsedfcasdfc sadfcasdfc ",
  },
  {
    title: "CardTitle_4",
    image: imageUrl,
    heading: "Head_lets_see3",
    content: "This is the contentIAmPassing3. losdfsdfv sdvfsdagv dsrfvsadfvsdea sdfvsadfvsaeddfg asdfvadsfv sadfasdvc sadfasdfcvas asdfcawsdfcasdf wsaedefasdfcasdf  awsedfcasdfc sadfcasdfc ",
  },
];

export default function ProjectGrid() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {projects.map((project, index) => (

            <Grid item xs={12} sm={6} key={index} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ProjectCard
                title={project.title}
                image={project.image}
                heading={project.heading}
                content={project.content}
                />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}