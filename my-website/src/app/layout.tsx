"use client"
import '@fontsource/roboto'; // Default weights (400, 500, 700)

import { ReactNode, useState, useEffect } from "react";
import "./globals.css";
import Header from "@/components/Header"
import Footer from '@/components/Footer';

import { Box, Container, CssBaseline } from '@mui/material';
//import { Metadata } from 'next'
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '@/theme/theme';

// export const metadata: Metadata = {
//   title: 'Utkarsh Khandelwal',
//   description: 'Software Engineer',
//   icons: {
//     icon: [
//       { url: '/favicon.ico' },
//     ]
//   },
// }

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
      <body>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <CssBaseline />
          <Container className="globalContainer">
            <Header toggleTheme={toggleTheme} isDarkMode={darkMode} />
            <Box 
              className="content" 
              sx={{
                padding: {xs: 1, sm: 5},
                backgroundColor: "background.default",
                color: "text.primary",
                minHeight: '100vh',
                transition: 'all 0.3s ease'
              }}
            >
              {children}
            </Box>
            <Footer className="footer"/>
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}