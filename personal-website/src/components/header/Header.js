import React from "react"
import { AppBar, Toolbar, Typography } from '@mui/material';
function Header() {
      return (
        <div>
          <AppBar position="relative">
            <Toolbar>
              <Typography variant="h6"> Utkarsh Khandelwal </Typography>
            </Toolbar>
          </AppBar>
        </div>
      );
  
}

export default Header