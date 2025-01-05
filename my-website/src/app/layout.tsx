import '@fontsource/roboto'; // Default weights (400, 500, 700)

import { PropsWithChildren } from "react";
import "./globals.css";
import Header from "@/components/Header"
import Footer from '@/components/Footer';
import FillViewPort from '@/components/FillViewport';

import { Container } from '@mui/material';


export default function RootLayout({
  children,
}: PropsWithChildren<{}>) {
  return (
    <html lang="en">
      <body
      
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        margin: 0,
        backgroundColor: '#fff',
        color: '#171717',
      }}
      >
        <Container sx={{backgroundColor: "purple"}}>
          <Header />
          {children}
        </Container>
      </body>
    </html>
  );
}
