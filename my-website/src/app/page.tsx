"use client"
import { Box, Fade, Container } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import Image from 'next/image';
import { themeConstants } from '@/theme/constants';
import {
    StyledPaper,
    GradientHeading,
    SubHeading,
    BodyText,
    CarouselPaper,
    CarouselContainer,
    ImageOverlay
} from '@/components/styles/Home.styles';
import {
    PageContainer,
    ContentContainer,
    FadeInBox,
    Section
} from '@/components/styles/Common.styles';
import { Typography } from '@mui/material';

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
                            <GradientHeading variant="h6">
                                {item.caption}
                            </GradientHeading>
                        </Box>
                    </Box>
                ))}
            </Carousel>
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
