import React from 'react';
import { Typography, Link, Container, Grid } from '@mui/material';
import { LinkedIn, Twitter, GitHub } from '@mui/icons-material';


const footerStyle = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0, // Center the footer horizontally
  backgroundColor: 'primary',
  color: 'primary.contrastText',
  padding: '1rem',
  textAlign: 'center',
};


function Footer() {
  return (
    <Container component="footer" maxWidth="lg" style={footerStyle}>


<Grid container spacing={1} alignItems="center">

{/* Contact Info (First Line) */}
<Grid item container xs={12} justifyContent="center" alignItems="center" spacing={2}>
  <Grid item> <Link href="mailto:utkarshkhandelwal2011@gmail.com" color="inherit"> utkarshkhandelwal2011@gmail.com </Link> </Grid>

  <Grid item> <Link href="https://www.linkedin.com/in/utkarshkhandelwal52" color="inherit" underline="none"><LinkedIn fontSize="small" /></Link> </Grid>
  <Grid item> <Link href="https://twitter.com/utkarsh52" color="inherit" underline="none"><Twitter fontSize="small" /></Link></Grid>
  <Grid item> <Link href="https://github.com/khandu-utkarsh" color="inherit" underline="none"><GitHub fontSize="small" /></Link></Grid>
                            
                            
</Grid>

{/* Made with Love (Second Line) */}
<Grid item xs={12} container justifyContent="center"> <Typography variant="body2" color="text.secondary"> {"Made with ❤️ in Cambridge, MA."} </Typography> </Grid>

</Grid>
</Container>
);
}

export default Footer;