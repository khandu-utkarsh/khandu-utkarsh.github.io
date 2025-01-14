import '@fontsource/roboto'; // Default weights (400, 500, 700)

import { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/Header"
import Footer from '@/components/Footer';

import { Box, Container } from '@mui/material';


export default function RootLayout({
  children,
}: {children : ReactNode}) {        
  return (
    <html lang="en">
      <body>
        <Container className="globalContainer" sx={{}}>
          <Header />
            <Box className="content" sx={{padding: {xs:1, sm:5},  backgroundColor:""}}>
            {children}
            </Box>
          <Footer className="footer"/>
        </Container>




      </body>
    </html>
  );


}