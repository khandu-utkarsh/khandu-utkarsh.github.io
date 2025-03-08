"use client"
import { Typography, Box, Skeleton } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const items = [
    {
        image: "/images/meInAtlanticCity.jpg",
        caption: "Atlantic City, NJ"
    },
    {
        image: "/images/bikeNYC.jpg",
        caption: "Carried my bike to NYC."
    },
    // Add more items as needed
];

// export async function getStaticProps() {
//   // Fetch any necessary data here, or just return an empty object
//   return {
//     props: {},
//   };
// }

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate image loading
        Promise.all(
            items.map(item => 
                new Promise<void>((resolve) => {
                    const img = new window.Image();
                    img.src = item.image;
                    img.onload = () => resolve();
                })
            )
        ).then(() => {
            setIsLoading(false);
        });
    }, []);

    return (
        <Box>
            {/* Rest of your content */}
            <Typography variant="body1" align="justify">
              Hi, I&apos;m <b>Utkarsh Khandelwal</b>—an engineer driven by a deep curiosity for technology and a passion for mathematics.
            </Typography>

            <Typography variant="body1" align="justify" sx={{ paddingTop: 2 }}>
              I enjoy software development because it fuels my curiosity and satisfies my desire to solve complex problems. The ability to create something purely through code is unmatched, making the process both exciting and fulfilling.
              I&apos;m currently diving deeper into <b>software engineering</b> and <b>machine learning applications</b>.
            </Typography>                    

            <Typography variant="body1" align="justify" sx={{ paddingTop: 2 }}>
                With <b>close to five years of hands-on experience</b>, I have developed software using <b>C++20, TypeScript/JavaScript, Python, Angular, React, Next.js, Qt, Golang, and Elixir</b>, while also working within the <b>AWS ecosystem</b>.
            </Typography>

            {/* Carousel with reduced size */}
            <Box sx={{ 
                my: 4, 
                maxWidth: '600px',  // Reduced from 100%
                width: '100%',
                height: '300px',    // Reduced from 400px
                mx: 'auto'          // Center the carousel
            }}>
                {isLoading ? (
                    // Skeleton while images are loading
                    <Skeleton 
                        variant="rectangular"
                        width="100%"
                        height="100%"
                        sx={{
                            borderRadius: '8px',
                            bgcolor: 'grey.200'
                        }}
                    />
                ) : (
                    <Carousel
                        animation="slide"
                        autoPlay={true}
                        indicators={true}
                        interval={4000}
                        navButtonsAlwaysVisible={true}
                    >
                        {items.map((item, index) => (
                            <Box
                                key={index}
                                sx={{
                                    height: '300px',  // Match the container height
                                    position: 'relative',
                                    '& img': {
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        borderRadius: '8px',
                                        objectPosition: 'center center'
                                    }
                                }}
                            >
                                <Image src={item.image} alt={item.caption} layout='fill' objectFit='contain'/>
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                                        color: 'white',
                                        padding: '20px',
                                        borderRadius: '0 0 8px 8px'
                                    }}
                                >
                                    <Typography variant="h6">
                                        {item.caption}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Carousel>
                )}
            </Box>

            <Typography variant="body1" align="justify" sx={{ paddingTop: 2 }}>
              Beyond tech, I am an <b>outdoor enthusiast</b> with a deep love for <b>biking</b>—a passion I&apos;ve carried since childhood.
            </Typography>

            <Typography variant="body1" align="justify" sx={{ paddingTop: 2 }}>
              One of my most memorable rides was a <b>110 km journey</b> from <b>Bellandur in Bangalore to Bangalore Airport</b> and back in 2019.  
              The airport staff were <b>shocked</b> to see us arrive by bike, as there was no designated parking for cyclists!  
              It was my first long-distance ride—I had <b>zero muscle endurance</b>, and the <b>unusually hot weather</b> made it even tougher.  
              But the rewarding experience (and the amazing food at the airport) made it all <b>worthwhile</b>.
            </Typography>

            <Typography variant="body1" align="justify" sx={{ paddingTop: 2 }}>
              These days, I call <b>Cambridge, Massachusetts</b>, home. I especially love the <b>summers</b> here—the <b>bright sunny days</b>,  
              <b>short drives to the beaches</b>, and the <b>proximity to NYC</b> make it an ideal place to live.
            </Typography>

        </Box>
    );
}
