"use client";

import React, { useEffect, useState } from "react";
import { Typography, CircularProgress, Box, InputBase, Link } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import { ProjectInterface } from "@/services/projectLoader";
import { formatDate } from "@/utils/dateString";
import NextLink from 'next/link';

const PageContainer = styled(Box)(({ theme }) => ({
    maxWidth: '800px',
    margin: '0 auto',
    padding: theme.spacing(4),
}));

const Section = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(6),
}));

const SearchContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    padding: theme.spacing(2),
    marginBottom: theme.spacing(4),
    borderBottom: `1px solid ${theme.palette.divider}`,
}));

const SearchField = styled(InputBase)(({ theme }) => ({
    width: '100%',
    fontSize: '1rem',
    color: theme.palette.text.primary,
    '& .MuiInputBase-input': {
        padding: 0,
    },
}));

const LoadingContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '50vh',
}));

const WritingsList = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
}));

const WritingItem = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(0.5),
}));

const DateText = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    fontSize: '0.9rem',
}));

function createSlug(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
}

export default function WritingsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [projects, setProjects] = useState<ProjectInterface[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('/api/markdown');
                const projects: ProjectInterface[] = await response.json();
                setProjects(projects);
            } catch (error) {
                console.error("Error fetching projects:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProjects();
    }, []);

    const filteredProjects = projects?.filter(project =>
        searchQuery === '' ||
        project.heading.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.introContent.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const renderLink = (project: ProjectInterface) => {
        const linkStyle = {
            color: 'text.primary',
            textDecoration: 'none',
            fontSize: '1.1rem',
            '&:hover': {
                color: 'text.secondary',
            }
        };

        if (project.link) {
            return (
                <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                >
                    <Typography sx={linkStyle}>
                        {project.heading}
                    </Typography>
                </a>
            );
        }

        return (
            <NextLink 
                href={`/writings/${createSlug(project.heading)}`}
                style={{ textDecoration: 'none' }}
            >
                <Typography sx={linkStyle}>
                    {project.heading}
                </Typography>
            </NextLink>
        );
    };

    if (isLoading) {
        return (
            <LoadingContainer>
                <CircularProgress />
            </LoadingContainer>
        );
    }

    return (
        <PageContainer>
            {/* Header Section */}
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
                    Writings
                </Typography>
                <Typography 
                    variant="body1"
                    sx={{
                        fontSize: '1.1rem',
                        lineHeight: 1.7,
                        color: 'text.secondary',
                    }}
                >
                    Explore my technical articles and implementations
                </Typography>
            </Section>

            {/* Search Section */}
            <Section>
                <SearchContainer>
                    <SearchIcon sx={{ color: 'text.secondary' }} />
                    <SearchField
                        placeholder="Search by title, content, or keywords..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </SearchContainer>
            </Section>

            {/* Content Section */}
            <WritingsList>
                {filteredProjects?.map((project) => (
                    <WritingItem key={project.heading}>
                        {renderLink(project)}
                        <DateText>
                            {formatDate(project.date)}
                        </DateText>
                    </WritingItem>
                ))}
            </WritingsList>
        </PageContainer>
    );
}

// Configure as static page
export const dynamic = 'force-static';
