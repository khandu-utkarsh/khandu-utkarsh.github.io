"use client"

import * as React from 'react';
import { PropsWithChildren } from "react";
import Link from 'next/link'
import { Paper, Drawer, Tab, Tabs, Grid2 as Grid, SxProps} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import { usePathname } from 'next/navigation';

interface LinkTabProps {
  label?: string;
  href?: string;
  value: number;
}
function LinkTab(props: LinkTabProps) {

    const { label, href, ...rest } = props;
    return (
        <Tab label={label} component={Link} href={ href|| "#"} {...rest} />
    );
}


interface NameTabProps {
    label?: string;
    sx: SxProps;
}
function NameTab(props: NameTabProps) {
    const {label, ...rest } = props;
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

// Map routes to tab indices
const routeToIndex: Record<string, number> = {
    "/": 1,
    "/writings": 2,
    "/resume": 3,
  };

interface NavTabsProps {
    toggleTheme: () => void;
    isDarkMode: boolean;
}

export default function NavTabs({ toggleTheme, isDarkMode }: NavTabsProps) {
    const currPathname = usePathname()
    const isMobile = useMediaQuery('(max-width:899px)');
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [tabIndex, setTabIndex] = React.useState(1);

    const ThemeToggleButton = () => (
        <IconButton 
            onClick={toggleTheme} 
            sx={{ 
                color: 'inherit',
                '&:hover': {
                    opacity: 0.8,
                }
            }}
        >
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
    );

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    }

    const handleChange = (event: React.SyntheticEvent, newIndex: number) => {
        setTabIndex(newIndex);
        if(isMobile && drawerOpen) {
            toggleDrawer();
        }

    }

    React.useEffect(() => {
        const tabIndexAsPerRoute = routeToIndex[currPathname] ?? 1;
        setTabIndex(tabIndexAsPerRoute);
    }, [currPathname]);

return (
    <>
        {!isMobile ? (
            <Paper sx={{paddingTop: 1, paddingBottom: 1}}>
                <Grid container direction="row" sx={{ flexGrow: 1, alignItems: "center", justifyContent: "space-between",backgroundColor: ""}}>
                    <Grid sx={{backgroundColor: ""}}>
                        <NameAndSocials />
                    </Grid>
                    <Grid sx={{ display: 'flex', alignItems: 'center', backgroundColor: ""}}>
                        <Tabs value={tabIndex} onChange={handleChange} role="navigation">
                            <LinkTab label="Home" href="/" value={1}/>
                            <LinkTab label="Writings" href="/writings" value={2}/>
                            <LinkTab label="Resume" href="/resume" value={3}/>
                        </Tabs>
                        <ThemeToggleButton />
                    </Grid>
                </Grid>
            </Paper>
        ): (
            <>
            <Paper sx={{paddingTop: 1, paddingBottom: 1}}>
                    <Grid container direction="row" sx={{ flexGrow: 1, alignItems: "center", justifyContent: "space-between"}}>
                        <NameTab label="Utkarsh Khandelwal" sx={{fontSize: 'inherit'}}></NameTab>
                        <Grid sx={{ display: 'flex', alignItems: 'center' }}>
                            <ThemeToggleButton />
                            <IconButton onClick={toggleDrawer} sx={{ color: 'inherit', ml: 1 }}> 
                                <MenuIcon /> 
                            </IconButton>
                        </Grid>
                    </Grid>            
            </Paper>

            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
                <Tabs value={tabIndex} onChange={handleChange} role="navigation" orientation="vertical">
                    <NameTab label="Utkarsh Khandelwal" sx={{fontSize: 'inherit'}}></NameTab>
                    <Socials />
                    <LinkTab label="Home" href="/" value={1}/>
                    <LinkTab label="Writings" href="/writings" value={2}/>
                    <LinkTab label="Resume" href="/resume" value={3}/>
                </Tabs>
            </Drawer>
        </>
        )}
    </>
    );
}

