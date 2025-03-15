"use client"
import { Box, Fade, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import Image from 'next/image';
import { themeConstants } from '@/theme/constants';
import {
    PageContainer,
    ContentContainer,
    Section,
    GradientHeading,
    StyledPaper,
    SubHeading
} from '@/components/styles/Common.styles';
import { styled } from '@mui/material/styles';
import React from 'react';

// Carousel specific styled components can be moved to Common.styles.tsx if needed elsewhere
const CarouselBox = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '450px',
    position: 'relative',
    borderRadius: theme.shape.borderRadius * 2,
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(-1),
    '& .MuiIconButton-root': {
        color: theme.palette.common.white,
        backgroundColor: themeConstants.colors.overlayLight,
        transition: themeConstants.transitions.quick,
        zIndex: 2,
        transform: 'translateY(20px)',
        '&:hover': {
            backgroundColor: themeConstants.colors.overlay,
        }
    }
}));

const CaptionBox = styled(Box)(({  }) => ({
    textAlign: 'center',
    marginTop: 0,
    padding: 0,
}));

function ImageCarousel() {
    const [activeStep, setActiveStep] = React.useState(0);
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
        <Box>
            <CarouselBox>
                <Carousel
                    animation="fade"
                    autoPlay={true}
                    indicators={true}
                    interval={4000}
                    navButtonsAlwaysVisible={true}
                    onChange={(now?: number) => setActiveStep(now ?? 0)}
                >
                    {items.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: '100%',
                                height: '400px',
                                position: 'relative',
                                backgroundColor: 'grey.100',
                                borderRadius: 2,
                                overflow: 'hidden',
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
                                }}
                            />
                        </Box>
                    ))}
                </Carousel>
            </CarouselBox>
            <Fade in timeout={300}>
                <CaptionBox>
                    <GradientHeading variant="h6">
                        {items[activeStep].caption}
                    </GradientHeading>
                </CaptionBox>
            </Fade>
        </Box>
    );
}

export default function Home() {
    return (
        <PageContainer>
            <Fade in timeout={1000}>
                <ContentContainer>
                    {/* Introduction Section */}
                    <Section>
                        <StyledPaper elevation={0}>
                            <GradientHeading variant="h3" component="h1">
                                Hi, I&apos;m Utkarsh Khandelwal
                            </GradientHeading>
                            <SubHeading variant="subtitle1">
                                Software Engineer & Technology Enthusiast
                            </SubHeading>
                            <Typography variant="body1" color="text.primary">
                                An engineer driven by a deep curiosity for technology and a passion for mathematics.
                            </Typography>
                        </StyledPaper>
                    </Section>

                    {/* About Section */}
                    <Section>
                        <StyledPaper elevation={0}>
                            <GradientHeading variant="h3" component="h2">
                                About Me
                            </GradientHeading>
                            <Typography variant="body1" color="text.primary" paragraph>
                                I enjoy software development because it fuels my curiosity and satisfies my desire to solve complex problems. 
                                The ability to create something purely through code is unmatched, making the process both exciting and fulfilling.
                                I&apos;m currently diving deeper into <b>software engineering</b> and <b>machine learning applications</b>.
                            </Typography>
                            <Typography variant="body1" color="text.primary">
                                With <b>close to five years of hands-on experience</b>, I have developed software using <b>C++20, TypeScript/JavaScript, Python, Angular, React, Next.js, Qt, Golang, and Elixir</b>, 
                                while also working within the <b>AWS ecosystem</b>.
                            </Typography>
                        </StyledPaper>
                    </Section>

                    {/* Photo Carousel */}
                    <Section>
                        <StyledPaper elevation={0}>
                            <ImageCarousel />
                        </StyledPaper>
                    </Section>

                    {/* Personal Interests Section */}
                    <Section>
                        <StyledPaper elevation={0}>
                            <GradientHeading variant="h3" component="h2">
                                Beyond Tech
                            </GradientHeading>
                            <Typography variant="body1" color="text.primary" paragraph>
                                I am an <b>outdoor enthusiast</b> with a deep love for <b>biking</b>—a passion I&apos;ve carried since childhood.
                            </Typography>
                            <Typography variant="body1" color="text.primary" paragraph>
                                One of my most memorable rides was a <b>110 km journey</b> from <b>Bellandur in Bangalore to Bangalore Airport</b> and back in 2019.  
                                The airport staff were <b>shocked</b> to see us arrive by bike, as there was no designated parking for cyclists!  
                                It was my first long-distance ride—I had <b>zero muscle endurance</b>, and the <b>unusually hot weather</b> made it even tougher.  
                                But the rewarding experience (and the amazing food at the airport) made it all <b>worthwhile</b>.
                            </Typography>
                            <Typography variant="body1" color="text.primary">
                                These days, I call <b>Cambridge, Massachusetts</b>, home. I especially love the <b>summers</b> here—the <b>bright sunny days</b>,  
                                <b>short drives to the beaches</b>, and the <b>proximity to NYC</b> make it an ideal place to live.
                            </Typography>
                        </StyledPaper>
                    </Section>
                </ContentContainer>
            </Fade>
        </PageContainer>
    );
}
