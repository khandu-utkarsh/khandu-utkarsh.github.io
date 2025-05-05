"use client"

import * as React from 'react';
import { PropsWithChildren } from "react";
import { Grid, Typography, IconButton } from '@mui/material';

import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface FooterProps {
    className?: string;
}

function IconTab({href, children} : PropsWithChildren<{ href: string }>) {
    return (
        <IconButton 
            href={href} 
            target="_blank"
            size="small"
            sx={{
                color: 'text.secondary',
                transition: 'color 0.2s ease',
                '&:hover': {
                    color: 'text.primary',
                }
            }}
        >
            {children}
        </IconButton>   
    )
}

function Socials() {
    return (    
        <Grid container direction="row" spacing={1} justifyContent="center">
            <Grid item>
                <IconTab href="mailto:utkarshkhandelwal2011@gmail.com">
                    <ForwardToInboxIcon fontSize="small"/>
                </IconTab>
            </Grid>
            <Grid item>
                <IconTab href="https://github.com/khandu-utkarsh">
                    <GitHubIcon fontSize="small"/>
                </IconTab>
            </Grid>
            <Grid item>
                <IconTab href="https://www.linkedin.com/in/utkarshkhandelwal52">
                    <LinkedInIcon fontSize="small"/>
                </IconTab>
            </Grid>
            <Grid item>
                <IconTab href="https://x.com/utkarsh52">
                    <XIcon fontSize="small"/>
                </IconTab>
            </Grid>
        </Grid>
    )
}

export default function Footer({className} : PropsWithChildren<FooterProps>) {
    return (
        <Grid 
            container 
            direction="column" 
            spacing={2}
            className={className} 
            sx={{
                py: 4,
                px: 2,
                maxWidth: '100%',
                margin: '0 auto',
            }}
        >
            <Grid item>
                <Socials />
            </Grid>
            <Grid item>
                <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    align="center"
                >
                    Made with 
                    <FavoriteIcon 
                        sx={{
                            color: "error.main",
                            mx: 0.5,
                            fontSize: "1rem",
                            verticalAlign: "middle"
                        }}
                    /> 
                    in Cambridge
                </Typography>
            </Grid>
        </Grid>
    );
}
