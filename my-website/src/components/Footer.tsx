"use client"

import * as React from 'react';
import { Paper, Box, Grid2 as Grid, Typography } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


//!Icons
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Footer() {

return (

    <Grid container direction="row" sx={{ flexGrow: 1, justifyContent: "center", alignItems: "center"}}>
        <Typography variant= "body1">  Made with <FavoriteIcon color='inherit' fontSize='inherit' sx={{color: "red"}}/> in Cambridge.</Typography>
    </Grid>

);
}
