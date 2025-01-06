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

import { GridSize } from '@mui/material/Grid';

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

const firstSectionCols = {
    md: "auto" as GridSize,
    lg: 7,
    sm: 12
};

const firstSectionCSSProps = {
    justifyContent: {lg: "flex-start", md: "flex-start", sm: "space-between"},
    alignItems: {sm: "center"},
    //backgroundColor: "pink"
};

const secondSectionCols = {
    md: "auto" as GridSize,
    lg: 12 - firstSectionCols.lg,
    sm:12
};

const secondSectionCSSProps = {
    justifyContent: {lg: "flex-end", md: "flex-end", sm: "space-between"},
    alignItems: {sm: "center"},
    flexGrow: {lg: 1, md: 1, sm: 1},
    //backgroundColor: "purple"
};




export default function NavTabs() {

return (
    <Paper sx={{paddingTop: 1, paddingBottom: 1}}>
        <Tabs value={false} role="navigation">
            <Grid container direction="row" sx={{ flexGrow: 1, alignItems: "center"}}>
                <Grid size={firstSectionCols} spacing={{lg: 1, md: 0}}container sx={firstSectionCSSProps}>
                        <IconTab href="mailto:utkarshkhandelwal2011@gmail.com"><ForwardToInboxIcon fontSize='inherit'/></IconTab>
                        <IconTab href="https://github.com/khandu-utkarsh"><GitHubIcon fontSize='inherit'/></IconTab>
                        <IconTab href="https://www.linkedin.com/in/utkarshkhandelwal52"><LinkedInIcon fontSize='inherit'/></IconTab>
                        <IconTab href="https://x.com/utkarsh52"><XIcon fontSize='inherit'/></IconTab>
                        <NameTab label="Utkarsh Khandelwal" sx={{fontSize: 'inherit'}}></NameTab>
                </Grid>
                <Grid size={secondSectionCols} container sx={secondSectionCSSProps}>
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
