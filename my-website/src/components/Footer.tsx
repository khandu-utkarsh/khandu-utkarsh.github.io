"use client"

import * as React from 'react';
import { PropsWithChildren } from "react";
import { Grid2 as Grid, Typography, Fade, Paper } from '@mui/material';

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
        <Fade in timeout={1000}>
            <Paper 
                elevation={0}
                sx={{
                    p: 2,
                    mt: 4,
                    borderRadius: 2,
                    background: 'linear-gradient(45deg, rgba(33, 150, 243, 0.05) 30%, rgba(33, 203, 243, 0.05) 90%)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        background: 'linear-gradient(45deg, rgba(33, 150, 243, 0.08) 30%, rgba(33, 203, 243, 0.08) 90%)',
                    }
                }}
            >
                <Grid 
                    container 
                    direction="row" 
                    className={className} 
                    sx={{
                        justifyContent: "center", 
                        alignItems: "center",
                        gap: 1
                    }}
                >
                    <Typography variant="body1">
                        Made with 
                        <FavoriteIcon 
                            sx={{
                                color: "red",
                                mx: 0.5,
                                animation: 'pulse 1.5s infinite',
                                '@keyframes pulse': {
                                    '0%': {
                                        transform: 'scale(1)',
                                    },
                                    '50%': {
                                        transform: 'scale(1.2)',
                                    },
                                    '100%': {
                                        transform: 'scale(1)',
                                    },
                                }
                            }}
                        /> 
                        in Cambridge
                    </Typography>
                </Grid>
            </Paper>
        </Fade>
    );
}
