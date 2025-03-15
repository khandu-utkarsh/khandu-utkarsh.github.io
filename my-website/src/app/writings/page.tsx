"use client"

import React, { useEffect, useState } from "react";
import { Typography, TextField, Box, Fade, CircularProgress, InputAdornment, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { themeConstants } from '@/theme/constants';

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
                        background: themeConstants.gradients.text,
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
                    background: themeConstants.gradients.primary,
                    transition: themeConstants.transitions.default,
                    '&:hover': {
                        background: themeConstants.gradients.primaryHover,
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
                                <SearchIcon sx={{ color: 'primary.main' }} />
                            </InputAdornment>
                        ),
                    }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            backgroundColor: 'background.paper',
                            transition: themeConstants.transitions.quick,
                            '& fieldset': {
                                borderColor: 'transparent',
                            },
                            '&:hover fieldset': {
                                borderColor: 'primary.main',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'primary.main',
                                borderWidth: '2px',
                            },
                        },
                        '& .MuiInputBase-input': {
                            '&::placeholder': {
                                color: 'text.secondary',
                                opacity: 0.8,
                            },
                        },
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
                    {filteredProjects?.map((project) => (
                        <Fade in timeout={500} key={project.heading}>
                            <Box>
                                <WCard
                                    cardHeading={project.heading}
                                    date={project.date}
                                    introContent={project.introContent}
                                    linkToArticle={project.link}
                                    keywords={project.keywords}
                                    sx={{
                                        transition: themeConstants.transitions.default,
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: themeConstants.elevations.high,
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