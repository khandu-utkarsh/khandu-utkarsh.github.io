"use client"
import { Typography, Box, Fade, Paper, Container } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Image from 'next/image';
import { useState } from 'react';
import { themeConstants } from '@/theme/constants';

// Create a component for the carousel
function ImageCarousel() {
    const items = [
        {
            image: "/images/meInAtlanticCity.jpg",
            caption: "Atlantic City, NJ"
        },
        {
            image: "/images/bikeNYC.jpg",
            caption: "Carried my bike to NYC."
        },
    ];

    return (
        <Box sx={{ 
            width: '100%',
            height: '500px',
            position: 'relative',
            borderRadius: 2,
        }}>
            <Carousel
                animation="fade"
                autoPlay={true}
                indicators={true}
                interval={4000}
                navButtonsAlwaysVisible={true}
                sx={{
                    width: '100%',
                    height: '100%',
                    '& .MuiIconButton-root': {
                        color: 'white',
                        backgroundColor: themeConstants.colors.overlayLight,
                        transition: themeConstants.transitions.quick,
                        '&:hover': {
                            backgroundColor: themeConstants.colors.overlay,
                        }
                    }
                }}
            >
                {items.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: '100%',
                            height: '400px',
                            position: 'relative',
                            backgroundColor: 'grey.100',
                        }}
                    >
                        <Image 
                            src={item.image} 
                            alt={item.caption}
                            fill
                            priority={index === 0}
                            sizes="100vw"
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'center',
                                width: '100%',
                                height: '100%',
                            }}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                background: themeConstants.gradients.overlay,
                                color: 'white',
                                padding: '20px',
                                zIndex: 1,
                            }}
                        >
                            <Typography variant="h6">
                                {item.caption}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Carousel>
        </Box>
    );
}

export default function Home() {
    return (
        <Container maxWidth="md">
            <Fade in timeout={1000}>
                <Box sx={{ py: { xs: 2, sm: 4 } }}>
                    {/* Introduction Section */}
                    <Paper 
                        elevation={0}
                        sx={{ 
                            p: { xs: 3, sm: 4 },
                            mb: 4,
                            borderRadius: 2,
                            background: 'linear-gradient(45deg, rgba(33, 150, 243, 0.05) 30%, rgba(33, 203, 243, 0.05) 90%)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                background: 'linear-gradient(45deg, rgba(33, 150, 243, 0.08) 30%, rgba(33, 203, 243, 0.08) 90%)',
                            }
                        }}
                    >
                        <Typography 
                            variant="h4" 
                            component="h1" 
                            gutterBottom
                            sx={{ 
                                fontWeight: 700,
                                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Hi, I'm Utkarsh Khandelwal
                        </Typography>
                        <Typography variant="h6" color="text.secondary" gutterBottom>
                            Software Engineer & Technology Enthusiast
                        </Typography>
                        <Typography variant="body1" align="justify" sx={{ mt: 2 }}>
                            An engineer driven by a deep curiosity for technology and a passion for mathematics.
                        </Typography>
                    </Paper>

                    {/* About Section */}
                    <Paper 
                        elevation={0}
                        sx={{ 
                            p: { xs: 3, sm: 4 },
                            mb: 4,
                            borderRadius: 2,
                            background: 'rgba(0, 0, 0, 0.02)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                background: 'rgba(0, 0, 0, 0.04)',
                            }
                        }}
                    >
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                            About Me
                        </Typography>
                        <Typography variant="body1" align="justify" sx={{ mb: 2 }}>
                            I enjoy software development because it fuels my curiosity and satisfies my desire to solve complex problems. 
                            The ability to create something purely through code is unmatched, making the process both exciting and fulfilling.
                            I'm currently diving deeper into <b>software engineering</b> and <b>machine learning applications</b>.
                        </Typography>
                        <Typography variant="body1" align="justify">
                            With <b>close to five years of hands-on experience</b>, I have developed software using <b>C++20, TypeScript/JavaScript, Python, Angular, React, Next.js, Qt, Golang, and Elixir</b>, 
                            while also working within the <b>AWS ecosystem</b>.
                        </Typography>
                    </Paper>

                    {/* Photo Carousel */}
                    <Paper 
                        elevation={0}
                        sx={{ 
                            mb: 4,
                            borderRadius: 2,
                            overflow: 'hidden',
                            background: 'rgba(0, 0, 0, 0.02)',
                            p: { xs: 2, sm: 3 },
                        }}
                    >
                        <ImageCarousel />
                    </Paper>

                    {/* Personal Interests Section */}
                    <Paper 
                        elevation={0}
                        sx={{ 
                            p: { xs: 3, sm: 4 },
                            borderRadius: 2,
                            background: 'linear-gradient(45deg, rgba(33, 150, 243, 0.05) 30%, rgba(33, 203, 243, 0.05) 90%)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                background: 'linear-gradient(45deg, rgba(33, 150, 243, 0.08) 30%, rgba(33, 203, 243, 0.08) 90%)',
                            }
                        }}
                    >
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                            Beyond Tech
                        </Typography>
                        <Typography variant="body1" align="justify" sx={{ mb: 2 }}>
                            I am an <b>outdoor enthusiast</b> with a deep love for <b>biking</b>—a passion I've carried since childhood.
                        </Typography>
                        <Typography variant="body1" align="justify" sx={{ mb: 2 }}>
                            One of my most memorable rides was a <b>110 km journey</b> from <b>Bellandur in Bangalore to Bangalore Airport</b> and back in 2019.  
                            The airport staff were <b>shocked</b> to see us arrive by bike, as there was no designated parking for cyclists!  
                            It was my first long-distance ride—I had <b>zero muscle endurance</b>, and the <b>unusually hot weather</b> made it even tougher.  
                            But the rewarding experience (and the amazing food at the airport) made it all <b>worthwhile</b>.
                        </Typography>
                        <Typography variant="body1" align="justify">
                            These days, I call <b>Cambridge, Massachusetts</b>, home. I especially love the <b>summers</b> here—the <b>bright sunny days</b>,  
                            <b>short drives to the beaches</b>, and the <b>proximity to NYC</b> make it an ideal place to live.
                        </Typography>
                    </Paper>
                </Box>
            </Fade>
        </Container>
    );
}
