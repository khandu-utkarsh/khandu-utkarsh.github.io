"use client"

import * as React from 'react';
import Link from 'next/link'
import { Paper, Tab, Tabs, Grid2 as Grid } from '@mui/material';


interface LinkTabProps {
  label?: string;
  href?: string;
  selected?: boolean;
}

interface NameTabProps {
    label?: string;
    selected?: boolean;
}

function LinkTab(props: LinkTabProps) {

    const { label, href, selected, ...rest } = props;
    return (
        <Link href={href || "#"} passHref>
            <Tab label={label} {...rest} />
        </Link>
    );
}

function NameTab(props: NameTabProps) {
    const {label, selected, ...rest } = props;
    return (
        <Tab label={label} component="div" {...rest}></Tab>
    )
}

export default function Footer() {

return (
    <Paper>
        <Tabs value={false} role="navigation">
            <Grid container direction="row" sx={{ flexGrow: 1}}>
                <Grid size={4}>
                <NameTab label="Utkarsh Khandelwal"></NameTab>
                </Grid>
                <Grid size={8} container sx={{justifyContent: "flex-end"}}>
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
