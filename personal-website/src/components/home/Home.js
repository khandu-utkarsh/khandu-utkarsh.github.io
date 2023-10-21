import React from "react"
import { Grid, TextField, Container, Typography } from "@mui/material";

function Home() {
        return (
        <Container maxWidth="lg" component={"span"}>
            <Grid container spacing={2} component={"span"}>
                <Grid item xs={12} sm={6} component={"span"}>
                <Typography component={'span'} align="left">
                    Hi I am Utkarsh Khandelwal.
                </Typography>
                <Typography component={'span'} align="left">
                    I have a natural curiosity and a passion for hands-on experience in technological development. 
                    My educational background is in Mechanical Engineering and Applied Mathematics. 
                    Currently, I work at Dassault Systèmes, USA, contributing to the field of Computational Geometry.
                </Typography>

                </Grid>
                <Grid item xs={12} sm={6} component={"span"}>
                <Typography component={'span'} align="left">
                    This webpage serves as a platform to showcase, experiment with, and refine my ideas and developments in the world of technology.
                </Typography>
                </Grid>
      </Grid>
    </Container>
    );
}

export default Home