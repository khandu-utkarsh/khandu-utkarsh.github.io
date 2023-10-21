import React from "react"
import { AppBar, Toolbar, } from '@mui/material';
import { Typography, Link, } from '@mui/material';
import { LinkedIn, Twitter, GitHub } from '@mui/icons-material';
function Header() {
      return (
        <div>
          <AppBar position="relative">
            <Toolbar>
                      <Typography variant="h6" style={{ flex: 1 }}>
                        Utkarsh Khandelwal
                      </Typography>
                      <div style={{ display: 'flex', alignItems: 'center' }}>


  <Link href="mailto:uk2051@nyu.edu" color="inherit">
    uk2051@nyu.edu
  </Link>
  <Link
    href="https://www.linkedin.com/in/utkarshkhandelwal52"
    color="inherit"
    underline="none"
  >
    <LinkedIn fontSize="small" />
  </Link>
  <Link href="https://twitter.com/utkarsh52" color="inherit" underline="none">
    <Twitter fontSize="small" />
  </Link>
  <Link
    href="https://github.com/khandu-utkarsh"
    color="inherit"
    underline="none"
  >
    <GitHub fontSize="small" />
  </Link>
</div>

              </Toolbar>
          </AppBar>
        </div>
      );
  
}

export default Header