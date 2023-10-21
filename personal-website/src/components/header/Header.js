import React from "react"
import { AppBar, Toolbar, } from '@mui/material';
import { Box, Typography, Link, } from '@mui/material';
import {Email, LinkedIn, Twitter, GitHub } from '@mui/icons-material';

function Header() {
      return (
                    <Box sx={{ flexGrow: 1 }}>
                      <AppBar position="static">
                        <Toolbar>
                          <Typography variant="h6" style={{ flex: 1 }}>
                            Utkarsh Khandelwal
                          </Typography>

                          <Box sx={{ flexGrow: 1 }} />

                          <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', width: '30%' }}>
                            <Link href="mailto:utkarshkhandelwal2011@gmail.com" color="inherit" underline="none"><Email fontSize="small" /></Link>
                            <Link href="https://www.linkedin.com/in/utkarshkhandelwal52" color="inherit" underline="none"><LinkedIn fontSize="small" /></Link>
                            <Link href="https://twitter.com/utkarsh52" color="inherit" underline="none"><Twitter fontSize="small" /></Link>
                            <Link href="https://github.com/khandu-utkarsh" color="inherit" underline="none"><GitHub fontSize="small" /></Link>
                          </Box>
                        </Toolbar>
                      </AppBar>
                    </Box>

      );
  
}

export default Header
