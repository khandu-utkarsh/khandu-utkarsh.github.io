"use client"
// Import all necessary Roboto font weights
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ReactNode, useState, useEffect } from "react";
import Header from "@/components/Header"
import Footer from '@/components/Footer';
import Script from 'next/script';

import { Box, Container, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '@/theme/theme';

// Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-8FWRJLTF5J';

export default function RootLayout({
  children,
}: {children : ReactNode}) {        
  const [darkMode, setDarkMode] = useState(true); // Default to dark theme

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    // Default to dark if no theme is saved
    setDarkMode(savedTheme === null ? true : savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  return (
    <html lang="en">
      <head>
        <title>Utkarsh Khandelwal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Software Engineer" />
        <link rel="icon" href="/favicon.png?v=1" type="image/png" sizes="32x32" />
        
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <CssBaseline />
          <Container 
            sx={{  
              display: 'flex',
              flexDirection: 'column',  
              minHeight: '100vh' 
            }}
          >
            <Header toggleTheme={toggleTheme} isDarkMode={darkMode} />
            <Box 
              component="main"
              sx={{
                padding: {xs: 1, sm: 5},
                backgroundColor: "background.default",
                color: "text.primary",
                transition: 'all 0.3s ease',
                flexGrow: 1,
              }}
            >
              {children}
            </Box>
            <Footer />
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}