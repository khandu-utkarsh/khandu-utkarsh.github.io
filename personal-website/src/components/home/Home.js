import React from "react"
import { Grid, TextField, Container, Typography } from "@mui/material";

function Home() {
        return (
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography>
                    Hello, I'm Utkarsh Khandelwal. The purpose of this website is to write blogs, engage in tinkering, and showcase my work.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography>

                    This is side two of the thing.
                    </Typography>
                </Grid>
      </Grid>
    </Container>
    );
}

export default Home