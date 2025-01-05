"use client"

import * as React from 'react';
import { PropsWithChildren } from "react";
import Link from 'next/link'
import { Paper, Tab, Tabs, Grid2 as Grid } from '@mui/material';

import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import { IconButton } from '@mui/material';

const contentSize = 16;

interface LinkTabProps {
  label?: string;
  href?: string;
  selected?: boolean;
}

interface NameTabProps {
    label?: string;
    selected?: boolean;
    [key: string]: any;
}

function LinkTab(props: LinkTabProps) {

    const { label, href, selected, ...rest } = props;
    return (
        <Tab label={label} component={Link} href={ href|| "#"} {...rest} />
    );
}

function NameTab(props: NameTabProps) {
    const {label, selected, ...rest } = props;
    return (
        <Tab label={label} component="div"  {...rest} sx={{pointerEvents: "none", cursor: "default"}}></Tab>
    )
}

function IconTab({href, children} : PropsWithChildren<{ href: string }>) {
    return (
        <IconButton href={href} target="_blank" >
            {children}
        </IconButton>   
    )
}

//!TODO: Have to make this TABS component dynamic, right now I have set the value to false. Use appropriate hooks to fix this.


export default function NavTabs() {

return (
    <Paper>
        <Tabs value={false} role="navigation">
            <Grid container direction="row" sx={{ flexGrow: 1, alignItems: "center"}}>
                <Grid size={7} spacing={1}container sx={{justifyContent: "flex-start", alignItems: "center"}}>
                        <IconTab href="mailto:utkarshkhandelwal2011@gmail.com"><ForwardToInboxIcon fontSize='inherit'/></IconTab>
                        <IconTab href="https://github.com/khandu-utkarsh"><GitHubIcon fontSize='inherit'/></IconTab>
                        <IconTab href="https://www.linkedin.com/in/utkarshkhandelwal52"><LinkedInIcon fontSize='inherit'/></IconTab>
                        <IconTab href="https://x.com/utkarsh52"><XIcon fontSize='inherit'/></IconTab>
                        <NameTab label="Utkarsh Khandelwal" sx={{fontSize: 'inherit'}}></NameTab>
                </Grid>
                <Grid size={5} container sx={{justifyContent: "flex-end"}}>
                    <LinkTab label="Home" href="/" />
                    <LinkTab label="Projects" href="/projects" />
                    <LinkTab label="Resume" href="/resume" />
                    <LinkTab label="Writings" href="/writings" />
                    <LinkTab label="Photos" href="/photos" />                    
                </Grid>
            </Grid>            
        </Tabs>
    </Paper>
 );
}
