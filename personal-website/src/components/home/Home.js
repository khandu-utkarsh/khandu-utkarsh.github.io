import React from "react"
import { Grid, Container, Typography} from "@mui/material";

function Home() {
        return (
        <Container maxWidth="lg" component={"span"}>
            <Grid container spacing={2} component={"span"}>
                <Grid item xs={12} sm={6} component={"span"}>
                <Typography variant="h5" component={'span'} align="left">
                Utkarsh Khandelwal
                </Typography>

                <Typography component={'span'} align="left">
                <br /> is an {" "}
                </Typography>
                <Typography variant="h6" component={'span'} align="left">
                engineer and  applied mathematician. <br/><br/>
                </Typography>

                <Typography component={'span'} align="left">
                    I look forward to building comprehensive end-to-end software applications. <br/> <br/>
                    I am currently working on Computational Geometry as a Software Engineer at Dassault Systèmes.
                    I graduated with an MS in Scientific Computing from the Courant Institute of Mathematical Sciences at NYU and hold a bachelor's degree in Mechanical Engineering from IIT (BHU) Varanasi.<br/><br/>
                    I am passionate about creating products and this website is my way of beginning to create software applications, showcase them to the world, and refine my skills.
                </Typography>
                </Grid>



                <Grid item xs={12} sm={6} component={"span"}>
                <Typography component={'span'} align="left">
                    Coming Soon: This column is in development phase.
                </Typography>
                </Grid>
      </Grid>
    </Container>
    );
}

export default Home