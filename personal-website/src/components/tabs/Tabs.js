import React from "react"
import PropTypes from 'prop-types';

import Home from "../home/Home";
import Blogs from "../blogs/Blogs";
import Projects from "../projects/Projects";
import Resume from "../resume/Resume";


import { Box, Tabs, Tab, Typography } from "@mui/material";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <span
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
</span>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function NavTabs() {
  const [value, setTabIndex] = React.useState(0);

  //Can't remove this event prop, otherwise navigation not possible
  const handleChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
    };

  return (
    <div>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered={true}>
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Projects" {...a11yProps(1)} />
          <Tab label="Blogs" {...a11yProps(2)} />
          <Tab label="Resume" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Home />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Projects />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Blogs />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Resume />
      </CustomTabPanel>
    </Box>
</div>


  );
}


