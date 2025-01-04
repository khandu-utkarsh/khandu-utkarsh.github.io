"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Link from 'next/link'
import Tab from '@mui/material/Tab';


interface LinkTabProps {
  label?: string;
  href?: string;
  selected?: boolean;
}

function LinkTab(props: LinkTabProps) {

    const { label, href, selected, ...rest } = props;
    return (
        <Link href={href || "#"} passHref>
            <Tab
                label={label}
                {...rest}
            />
        </Link>
    );
}

export default function NavTabs() {
  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={false}
        role="navigation"
      >
        <LinkTab label="Home" href="/home" />
        <LinkTab label="Projects" href="/projects" />
        <LinkTab label="Resume" href="/resume" />
        <LinkTab label="Writings" href="/writings" />
        <LinkTab label="Photos" href="/photos" />
      </Tabs>
    </Box>
  );
}
