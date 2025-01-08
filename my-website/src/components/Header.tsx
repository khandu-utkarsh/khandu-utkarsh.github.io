"use client"

import * as React from 'react';
import { PropsWithChildren } from "react";
import Link from 'next/link'
import { Paper, Drawer, Tab, Tabs, Grid2 as Grid } from '@mui/material';
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
function LinkTab(props: LinkTabProps) {

    const { label, href, selected, ...rest } = props;
    return (
        <Tab label={label} component={Link} href={ href|| "#"} {...rest} />
    );
}


interface NameTabProps {
    label?: string;
    selected?: boolean;
    [key: string]: any;
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

function Socials() {
    return (    
    <Grid container direction="row" sx={{ alignItems: "center", justifyContent: "space-between",backgroundColor: ""}}>
        <Grid>
            <IconTab href="mailto:utkarshkhandelwal2011@gmail.com"><ForwardToInboxIcon fontSize='inherit'/></IconTab>
        </Grid>

        <Grid>
            <IconTab href="https://github.com/khandu-utkarsh"><GitHubIcon fontSize='inherit'/></IconTab>
        </Grid>

        <Grid>
            <IconTab href="https://www.linkedin.com/in/utkarshkhandelwal52"><LinkedInIcon fontSize='inherit'/></IconTab>
        </Grid>

        <Grid>
            <IconTab href="https://x.com/utkarsh52"><XIcon fontSize='inherit'/></IconTab>
        </Grid>
    </Grid>

    )
};

function NameAndSocials() {
    return (

        <Grid container direction="row" sx={{alignItems: "center", justifyContent: "space-between",backgroundColor: ""}}>
            <Grid sx={{backgroundColor: ""}}>
                <NameTab label="Utkarsh Khandelwal" sx={{fontSize: 'inherit'}}></NameTab>
            </Grid>
            <Grid sx={{backgroundColor: ""}}>
                <Socials/>
            </Grid>
        </Grid>
    )
}

function NavPages() {

    return (
        <>
            <LinkTab label="Home" href="/" />
            {/* <LinkTab label="Projects" href="/projects" /> */}
            <LinkTab label="Writings" href="/writings" />
            <LinkTab label="Resume" href="/resume" />
            {/* <LinkTab label="Photos" href="/photos" />                     */}

        </>
    )


}


export default function NavTabs() {

    //!I got this size from the chrome responsive design tool. It started looking too cramped up at that size.
    const isMobile = useMediaQuery('(max-width:699px)');
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    }


return (
    <>
        {!isMobile ? (
            <Paper sx={{paddingTop: 1, paddingBottom: 1}}>
                <Grid container direction="row" sx={{ flexGrow: 1, alignItems: "center", justifyContent: "space-between",backgroundColor: ""}}>
                    <Grid sx={{backgroundColor: ""}}>
                        <NameAndSocials />
                    </Grid>
                    <Grid sx={{backgroundColor: ""}}>
                        <Tabs value={false} role="navigation">
                            <NavPages />
                        </Tabs>
                    </Grid>
                </Grid>
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
                    <Socials />
                    <NavPages/>
                </Tabs>
            </Drawer>
        </>
        )}
    </>
    );
}

