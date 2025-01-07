"use client"

import * as React from 'react';
import { PropsWithChildren } from "react";
import Link from 'next/link'
import { Paper, Box, Drawer, Tab, Tabs, Grid2 as Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import { IconButton } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

import { GridSize } from '@mui/material/Grid';

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

const firstSectionCols = {
    md: "auto" as GridSize,
    lg: 7,
    sm: 12,
    xs: "none" as GridSize
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

    const isMobile = useMediaQuery('(max-width:600px)');

    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    }


return (
    <>
        {!isMobile ? (
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
                            {/* <LinkTab label="Projects" href="/projects" /> */}
                            <LinkTab label="Writings" href="/writings" />
                            <LinkTab label="Resume" href="/resume" />
                            {/* <LinkTab label="Photos" href="/photos" />                     */}
                        </Grid>
                    </Grid>            
                </Tabs>
            </Paper>
        ): (
            <>
            <Paper sx={{paddingTop: 1, paddingBottom: 1}}>
                <Tabs value={false} role="navigation">
                    <Grid container direction="row" sx={{ flexGrow: 1, alignItems: "center", justifyContent: "space-between"}}>
                        <NameTab label="Utkarsh Khandelwal" sx={{fontSize: 'inherit'}}></NameTab>
                        <IconButton onClick={toggleDrawer} sx={{ color: 'inherit' }}> <MenuIcon /> </IconButton>
                    </Grid>            
                </Tabs>
            </Paper>

            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
                <Tabs value={false} role="navigation" orientation="vertical">
                    <NameTab label="Utkarsh Khandelwal" sx={{fontSize: 'inherit'}}></NameTab>
                    <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <IconTab href="mailto:utkarshkhandelwal2011@gmail.com"><ForwardToInboxIcon fontSize='inherit'/></IconTab>
                        <IconTab href="https://github.com/khandu-utkarsh"><GitHubIcon fontSize='inherit'/></IconTab>
                        <IconTab href="https://www.linkedin.com/in/utkarshkhandelwal52"><LinkedInIcon fontSize='inherit'/></IconTab>
                        <IconTab href="https://x.com/utkarsh52"><XIcon fontSize='inherit'/></IconTab>
                    </Box>
                    <LinkTab label="Home" href="/" />
                    {/* <LinkTab label="Projects" href="/projects" /> */}
                    <LinkTab label="Writings" href="/writings" />
                    <LinkTab label="Resume" href="/resume" />

                    {/* <LinkTab label="Photos" href="/photos" />                     */}
                </Tabs>
            </Drawer>
        </>
        )}
    </>
    );
}

