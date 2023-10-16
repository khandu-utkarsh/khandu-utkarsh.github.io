import React from "react"

import Home from "../home/Home";
import Blogs from "../blogs/Blogs";
import Projects from "../projects/Projects";
import Resume from "../resume/Resume";


import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function NavTabs() {
  const [tabIndex, setTabIndex] = React.useState(0);

  //Can't remove this event prop, otherwise navigation not possible
  const handleChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
    };

  return (
    <div>
    <Box sx={{ width: '100%' }}>
      <Tabs value={tabIndex} onChange={handleChange} aria-label="nav tabs example" centered={true}>
        <Tab label="Home" />
        <Tab label="Projects" />
        <Tab label="Blogs" />
        <Tab label="Resume" />
      </Tabs>
    </Box>

    {tabIndex === 1 ? <Projects /> : 
     tabIndex === 2 ? <Blogs /> : 
     tabIndex === 3 ? <Resume /> : <Home />}
</div>


  );
}
