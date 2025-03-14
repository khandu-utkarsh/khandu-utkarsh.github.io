"use client"

import * as React from 'react';
import { PropsWithChildren } from "react";
import Link from 'next/link'
import { Paper, Drawer, Tab, Tabs, Grid2 as Grid, SxProps, Fade, IconButton, Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
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
        <Tab 
            label={label} 
            component={Link} 
            href={href || "#"} 
            {...rest}
            sx={{
                transition: 'all 0.2s ease',
                '&:hover': {
                    color: 'primary.main',
                }
            }}
        />
    );
}

interface NameTabProps {
    label?: string;
    sx: SxProps;
}

function NameTab(props: NameTabProps) {
    const {label, ...rest } = props;
    return (
        <Tab 
            label={label} 
            component="div"  
            {...rest} 
            sx={{
                pointerEvents: "none", 
                cursor: "default",
                fontWeight: 600,
                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
            }}
        />
    )
}

function IconTab({href, children} : PropsWithChildren<{ href: string }>) {
    return (
        <IconButton 
            href={href} 
            target="_blank"
            sx={{
                transition: 'all 0.2s ease',
                '&:hover': {
                    color: 'primary.main',
                    transform: 'translateY(-2px)',
                }
            }}
        >
            {children}
        </IconButton>   
    )
}

function Socials() {
    return (    
        <Grid container direction="row" sx={{ 
            alignItems: "center", 
            justifyContent: "space-between",
            gap: 1
        }}>
            <Grid>
                <IconTab href="mailto:utkarshkhandelwal2011@gmail.com">
                    <ForwardToInboxIcon fontSize='inherit'/>
                </IconTab>
            </Grid>

            <Grid>
                <IconTab href="https://github.com/khandu-utkarsh">
                    <GitHubIcon fontSize='inherit'/>
                </IconTab>
            </Grid>

            <Grid>
                <IconTab href="https://www.linkedin.com/in/utkarshkhandelwal52">
                    <LinkedInIcon fontSize='inherit'/>
                </IconTab>
            </Grid>

            <Grid>
                <IconTab href="https://x.com/utkarsh52">
                    <XIcon fontSize='inherit'/>
                </IconTab>
            </Grid>
        </Grid>
    )
}

function NameAndSocials() {
    return (
        <Grid container direction="row" sx={{
            alignItems: "center", 
            justifyContent: "space-between",
            gap: 2
        }}>
            <Grid>
                <NameTab label="Utkarsh Khandelwal" sx={{fontSize: 'inherit'}}/>
            </Grid>
            <Grid>
                <Socials/>
            </Grid>
        </Grid>
    )
}

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
                transition: 'all 0.2s ease',
                '&:hover': {
                    color: 'primary.main',
                    transform: 'translateY(-2px)',
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
        <Fade in timeout={500}>
            <Box>
                {!isMobile ? (
                    <Paper 
                        elevation={0}
                        sx={{
                            p: 2,
                            borderRadius: 2,
                            background: 'linear-gradient(45deg, rgba(33, 150, 243, 0.05) 30%, rgba(33, 203, 243, 0.05) 90%)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                background: 'linear-gradient(45deg, rgba(33, 150, 243, 0.08) 30%, rgba(33, 203, 243, 0.08) 90%)',
                            }
                        }}
                    >
                        <Grid container direction="row" sx={{ 
                            flexGrow: 1, 
                            alignItems: "center", 
                            justifyContent: "space-between"
                        }}>
                            <Grid>
                                <NameAndSocials />
                            </Grid>
                            <Grid sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Tabs 
                                    value={tabIndex} 
                                    onChange={handleChange} 
                                    role="navigation"
                                    sx={{
                                        '& .MuiTabs-indicator': {
                                            backgroundColor: 'primary.main',
                                            height: 3,
                                        }
                                    }}
                                >
                                    <LinkTab label="Home" href="/" value={1}/>
                                    <LinkTab label="Writings" href="/writings" value={2}/>
                                    <LinkTab label="Resume" href="/resume" value={3}/>
                                </Tabs>
                                <ThemeToggleButton />
                            </Grid>
                        </Grid>
                    </Paper>
                ) : (
                    <>
                        <Paper 
                            elevation={0}
                            sx={{
                                p: 2,
                                borderRadius: 2,
                                background: 'linear-gradient(45deg, rgba(33, 150, 243, 0.05) 30%, rgba(33, 203, 243, 0.05) 90%)',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    background: 'linear-gradient(45deg, rgba(33, 150, 243, 0.08) 30%, rgba(33, 203, 243, 0.08) 90%)',
                                }
                            }}
                        >
                            <Grid container direction="row" sx={{ 
                                flexGrow: 1, 
                                alignItems: "center", 
                                justifyContent: "space-between"
                            }}>
                                <NameTab label="Utkarsh Khandelwal" sx={{fontSize: 'inherit'}}/>
                                <Grid sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <ThemeToggleButton />
                                    <IconButton 
                                        onClick={toggleDrawer} 
                                        sx={{ 
                                            color: 'inherit',
                                            transition: 'all 0.2s ease',
                                            '&:hover': {
                                                color: 'primary.main',
                                            }
                                        }}
                                    > 
                                        <MenuIcon /> 
                                    </IconButton>
                                </Grid>
                            </Grid>            
                        </Paper>

                        <Drawer 
                            anchor="left" 
                            open={drawerOpen} 
                            onClose={toggleDrawer}
                            PaperProps={{
                                sx: {
                                    background: 'linear-gradient(45deg, rgba(33, 150, 243, 0.05) 30%, rgba(33, 203, 243, 0.05) 90%)',
                                    width: 280,
                                }
                            }}
                        >
                            <Box sx={{ p: 2 }}>
                                <Tabs 
                                    value={tabIndex} 
                                    onChange={handleChange} 
                                    role="navigation" 
                                    orientation="vertical"
                                    sx={{
                                        '& .MuiTabs-indicator': {
                                            backgroundColor: 'primary.main',
                                            width: 3,
                                        }
                                    }}
                                >
                                    <NameTab label="Utkarsh Khandelwal" sx={{fontSize: 'inherit'}}/>
                                    <Socials />
                                    <LinkTab label="Home" href="/" value={1}/>
                                    <LinkTab label="Writings" href="/writings" value={2}/>
                                    <LinkTab label="Resume" href="/resume" value={3}/>
                                </Tabs>
                            </Box>
                        </Drawer>
                    </>
                )}
            </Box>
        </Fade>
    );
}

