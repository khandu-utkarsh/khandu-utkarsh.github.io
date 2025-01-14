"use client"

import * as React from 'react';
import { PropsWithChildren } from "react";
import { Grid2 as Grid, Typography } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


//!Icons
import FavoriteIcon from '@mui/icons-material/Favorite';

interface FooterProps {
    className?: string;
}

export default function Footer({className} : PropsWithChildren<FooterProps>) {
    return (
        <Grid container direction="row" className={className} sx={{justifyContent: "center", alignItems: "center", paddingTop: 1, paddingBottom:1}}>
            <Typography variant= "body1">  Made with <FavoriteIcon color='inherit' fontSize='inherit' sx={{color: "red"}}/> in Cambridge.</Typography>
        </Grid>
    );
}
