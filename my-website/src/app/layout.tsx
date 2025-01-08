import '@fontsource/roboto'; // Default weights (400, 500, 700)

import { PropsWithChildren } from "react";
import "./globals.css";
import Header from "@/components/Header"
import Footer from '@/components/Footer';

import { Box, Container } from '@mui/material';


export default function RootLayout({
  children,
}: PropsWithChildren<{}>) {        
  return (
    <html lang="en">
      <body>
        <Container className="globalContainer" sx={{}}>
          <Header />
            <Box className="content" sx={{paddingTop: 5, paddingBottom: 5, paddingLeft: 5, paddingRight: 5 , backgroundColor:"pink"}}>
            {children}
            </Box>
          <Footer className="footer"/>
        </Container>




      </body>
    </html>
  );


}