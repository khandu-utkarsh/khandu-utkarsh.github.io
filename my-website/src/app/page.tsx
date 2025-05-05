"use client"
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import Link from 'next/link';

const PageContainer = styled(Box)(({ theme }) => ({
    maxWidth: '800px',
    margin: '0 auto',
    padding: theme.spacing(4),
}));

const Section = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(6),
}));

export default function Home() {
    return (
        <PageContainer>
            {/* Introduction Section */}
            <Section>
                <Typography 
                    variant="h1" 
                    component="h1"
                    sx={{
                        fontSize: { xs: '2.5rem', md: '3.5rem' },
                        fontWeight: 600,
                        mb: 2,
                    }}
                >
                    Hi, I&apos;m Utkarsh
                </Typography>
                <Typography 
                    variant="body1"
                    sx={{
                        fontSize: '1.1rem',
                        lineHeight: 1.7,
                        color: 'text.secondary',
                    }}
                >
                    I am a software developer @ <Link href="https://www.solidworks.com" target="_blank" style={{ color: 'inherit', textDecoration: 'none' }}><b>SolidWorks</b></Link>.
                </Typography>
                <Typography 
                    variant="body1"
                    sx={{
                        fontSize: '1.1rem',
                        lineHeight: 1.7,
                        color: 'text.secondary',
                    }}
                >
                    I am curious in general and love to engage with complex problems.
                </Typography>
            </Section>

            {/* About Section */}
            {/*
            <Section>
                <Typography 
                    variant="h3" 
                    component="h2"
                    sx={{
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        mb: 2,
                    }}
                >
                    About
                </Typography>
                <Typography 
                    variant="body1"
                    sx={{
                        fontSize: '1.1rem',
                        lineHeight: 1.7,
                        color: 'text.secondary',
                        mb: 2,
                    }}
                >
                    I enjoy software development because it fuels my curiosity and satisfies my desire to solve complex problems. 
                    The ability to create something purely through code is unmatched, making the process both exciting and fulfilling.
                    I&apos;m currently diving deeper into <b>software engineering</b> and <b>machine learning applications</b>.
                </Typography>
                <Typography 
                    variant="body1"
                    sx={{
                        fontSize: '1.1rem',
                        lineHeight: 1.7,
                        color: 'text.secondary',
                    }}
                >
                    With <b>close to five years of hands-on experience</b>, I have developed software using <b>C++20, TypeScript/JavaScript, Python, Angular, React, Next.js, Qt, Golang, and Elixir</b>, 
                    while also working within the <b>AWS ecosystem</b>.
                </Typography>
            </Section>
            */}

            {/* Personal Interests Section */}
            {/*
            <Section>
                <Typography 
                    variant="h3" 
                    component="h2"
                    sx={{
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        mb: 2,
                    }}
                >
                    Beyond Tech
                </Typography>
                <Typography 
                    variant="body1"
                    sx={{
                        fontSize: '1.1rem',
                        lineHeight: 1.7,
                        color: 'text.secondary',
                        mb: 2,
                    }}
                >
                    I am an <b>outdoor enthusiast</b> with a deep love for <b>biking</b>—a passion I&apos;ve carried since childhood.
                </Typography>
                <Typography 
                    variant="body1"
                    sx={{
                        fontSize: '1.1rem',
                        lineHeight: 1.7,
                        color: 'text.secondary',
                        mb: 2,
                    }}
                >
                    One of my most memorable rides was a <b>110 km journey</b> from <b>Bellandur in Bangalore to Bangalore Airport</b> and back in 2019.  
                    The airport staff were <b>shocked</b> to see us arrive by bike, as there was no designated parking for cyclists!  
                    It was my first long-distance ride—I had <b>zero muscle endurance</b>, and the <b>unusually hot weather</b> made it even tougher.  
                    But the rewarding experience (and the amazing food at the airport) made it all <b>worthwhile</b>.
                </Typography>
                <Typography 
                    variant="body1"
                    sx={{
                        fontSize: '1.1rem',
                        lineHeight: 1.7,
                        color: 'text.secondary',
                    }}
                >
                    These days, I call <b>Cambridge, Massachusetts</b>, home. I especially love the <b>summers</b> here—the <b>bright sunny days</b>,  
                    <b>short drives to the beaches</b>, and the <b>proximity to NYC</b> make it an ideal place to live.
                </Typography>
            </Section>
            */}
        </PageContainer>
    );
}
