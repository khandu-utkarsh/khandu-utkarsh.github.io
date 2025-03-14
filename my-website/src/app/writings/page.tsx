"use client"

import React, { useEffect, useState } from "react";
import { Typography, TextField, Box, Fade, CircularProgress, InputAdornment, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import WCard from "@/components/WritingsCard"

interface ProjectInterface {
    heading: string;
    date: string;
    introContent: string;
    keywords: string[];
    type: string;
    link: string;
    toBeDisplayed: boolean;
}

export default function WritingsPage() {
    const [projects, setProjects] = useState<ProjectInterface[] | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch("/projectDetails.json")
            .then((response) => {
                if (!response.ok) throw new Error("Failed to fetch projects");
                return response.json();
            })
            .then((data) => {
                setProjects(data.projects);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching projects:", error);
                setIsLoading(false);
            });
    }, []);

    const filteredProjects = projects?.filter(project => {
        if (!project.toBeDisplayed) return false;
        return searchQuery === '' ||
            project.heading.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.introContent.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()));
    });

    return (
        <Box sx={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            padding: { xs: 2, sm: 4 },
            minHeight: '100vh'
        }}>
            {/* Header Section */}
            <Box sx={{ 
                mb: { xs: 4, sm: 6 },
                textAlign: 'center'
            }}>
                <Typography 
                    variant="h3" 
                    component="h1" 
                    sx={{ 
                        mb: 2,
                        fontWeight: 700,
                        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Writings
                </Typography>
                <Typography 
                    variant="subtitle1" 
                    color="text.secondary"
                    sx={{ mb: 3 }}
                >
                    Explore my technical articles and implementations
                </Typography>
            </Box>

            {/* Search Section */}
            <Paper 
                elevation={0}
                sx={{ 
                    mb: { xs: 4, sm: 6 },
                    p: 2,
                    borderRadius: 2,
                    background: 'rgba(33, 150, 243, 0.04)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        background: 'rgba(33, 150, 243, 0.08)',
                    }
                }}
            >
                <TextField
                    variant="outlined"
                    placeholder="Search by title, content, or keywords..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon color="primary" />
                            </InputAdornment>
                        ),
                    }}
                />
            </Paper>

            {/* Content Section */}
            {isLoading ? (
                <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    minHeight: '400px' 
                }}>
                    <CircularProgress />
                </Box>
            ) : filteredProjects?.length === 0 ? (
                <Fade in timeout={500}>
                    <Box sx={{ 
                        textAlign: 'center', 
                        py: 8,
                        px: 2,
                        background: 'rgba(0, 0, 0, 0.02)',
                        borderRadius: 2
                    }}>
                        <Typography variant="h6" color="text.secondary" gutterBottom>
                            No writings found
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Try adjusting your search terms or browse all writings
                        </Typography>
                    </Box>
                </Fade>
            ) : (
                <Box sx={{ 
                    display: 'grid', 
                    gap: { xs: 3, sm: 4 },
                    gridTemplateColumns: '1fr'
                }}>
                    {filteredProjects?.map((project, index) => (
                        <Fade in timeout={500} key={project.heading}>
                            <Box>
                                <WCard
                                    cardHeading={project.heading}
                                    date={project.date}
                                    introContent={project.introContent}
                                    linkToArticle={project.link}
                                    keywords={project.keywords}
                                    sx={{
                                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                                        }
                                    }}
                                />
                            </Box>
                        </Fade>
                    ))}
                </Box>
            )}
        </Box>
    );
}