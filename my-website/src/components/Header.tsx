"use client"

import * as React from 'react';
import Link from 'next/link'
import { Box, Drawer, Tab, Tabs, Grid, IconButton, useMediaQuery } from '@mui/material';
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
    const { label, href, value, ...rest } = props;
    return (
        <Tab 
            label={label} 
            component={Link}
            href={href || "#"} 
            value={value}
            {...rest}
            sx={{
                color: 'text.secondary',
                transition: 'color 0.2s ease',
                '&:hover': {
                    color: 'text.primary',
                },
                '&.Mui-selected': {
                    color: 'text.primary',
                    fontWeight: 500,
                }
            }}
        />
    );
}

const routeToIndex: Record<string, number> = {
    "/": 0,
    "/writings": 1,
//    "/resume": 2,
};

function getTabIndexFromPath(path: string): number {
    const normalizedPath = path === '/' ? path : path.replace(/\/$/, '');
    if (normalizedPath.startsWith('/writings/')) {
        return routeToIndex['/writings'];
    }
    return routeToIndex[normalizedPath] ?? 0;
}

interface NavTabsProps {
    toggleTheme: () => void;
    isDarkMode: boolean;
}

export default function NavTabs({ toggleTheme, isDarkMode }: NavTabsProps) {
    const currPathname = usePathname()
    const isMobile = useMediaQuery('(max-width:899px)');
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const ThemeToggleButton = () => (
        <IconButton 
            onClick={toggleTheme} 
            size="small"
            sx={{ 
                color: 'text.secondary',
                transition: 'color 0.2s ease',
                '&:hover': {
                    color: 'text.primary',
                }
            }}
        >
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
    );

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    }

    const handleChange = () => {
        if(isMobile && drawerOpen) {
            toggleDrawer();
        }
    }

    const commonTabsProps = {
        value: getTabIndexFromPath(currPathname),
        onChange: handleChange,
        role: "navigation",
    };

    return (
        <Box sx={{ py: 3 }}>
            {!isMobile ? (
                <Grid 
                    container 
                    direction="row" 
                    sx={{ 
                        alignItems: "center", 
                        justifyContent: "space-between"
                    }}
                >
                    <Grid>
                        <Link 
                            href="/" 
                            style={{ 
                                textDecoration: 'none',
                                color: 'inherit',
                                fontWeight: 500
                            }}
                        >
                            Utkarsh Khandelwal
                        </Link>
                    </Grid>
                    <Grid sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Tabs {...commonTabsProps}>
                            <LinkTab label="Home" href="/" value={0}/>
                            <LinkTab label="Writings" href="/writings" value={1}/>
                            {/* <LinkTab label="Resume" href="/resume" value={2}/> */}
                        </Tabs>
                        <ThemeToggleButton />
                    </Grid>
                </Grid>
            ) : (
                <>
                    <Grid 
                        container 
                        direction="row" 
                        sx={{ 
                            alignItems: "center", 
                            justifyContent: "space-between"
                        }}
                    >
                        <Grid>
                            <Link 
                                href="/" 
                                style={{ 
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    fontWeight: 500
                                }}
                            >
                                Utkarsh Khandelwal
                            </Link>
                        </Grid>
                        <Grid sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <ThemeToggleButton />
                            <IconButton 
                                onClick={toggleDrawer}
                                size="small"
                                sx={{ 
                                    color: 'text.secondary',
                                    transition: 'color 0.2s ease',
                                    '&:hover': {
                                        color: 'text.primary',
                                    }
                                }}
                            > 
                                <MenuIcon /> 
                            </IconButton>
                        </Grid>
                    </Grid>

                    <Drawer 
                        anchor="left" 
                        open={drawerOpen} 
                        onClose={toggleDrawer}
                        PaperProps={{
                            sx: {
                                width: 280,
                            }
                        }}
                    >
                        <Box sx={{ p: 2 }}>
                            <Tabs 
                                {...commonTabsProps}
                                orientation="vertical"
                            >
                                <LinkTab label="Home" href="/" value={0}/>
                                <LinkTab label="Writings" href="/writings" value={1}/>
                                {/* <LinkTab label="Resume" href="/resume" value={2}/> */}
                            </Tabs>
                        </Box>
                    </Drawer>
                </>
            )}
        </Box>
    );
}

