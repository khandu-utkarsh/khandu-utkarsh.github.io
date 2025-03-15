"use client";

import React, { useEffect, useState } from "react";
import { Typography, CircularProgress, Fade } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import WCard from "@/components/WritingsCard";
import { ProjectInterface } from "@/services/projectLoader";
import { formatDate } from "@/utils/dateString";
import {
    PageContainer,
    ContentContainer,
    GradientHeading,
    StyledPaper,
    LoadingContainer,
    Section,
    ResponsiveGrid,
    SubHeading
} from '@/components/styles/Common.styles';

// Styled Components (No Changes)
const SearchField = styled('input')(({ theme }) => ({
    width: '100%',
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    border: 'none',
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    fontSize: '1rem',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
        outline: 'none',
        boxShadow: `0 0 0 2px ${theme.palette.primary.main}`,
    },
    '&::placeholder': {
        color: theme.palette.text.secondary,
        opacity: 0.8,
    },
}));

const SearchContainer = styled(StyledPaper)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    padding: theme.spacing(2),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
        marginBottom: theme.spacing(6),
    },
}));

const NoResultsContainer = styled(StyledPaper)(({ theme }) => ({
    textAlign: 'center',
    padding: theme.spacing(8, 2),
}));

export default function WritingsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [projects, setProjects] = useState<ProjectInterface[]>([]);
    // ✅ Fetch projects from API route
    useEffect(() => {
        const fetchProjects = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('/api/markdown'); // ✅ Fetch from API
                const projects : ProjectInterface[] = await response.json();
                 console.log(projects);
                setProjects(projects);
            } catch (error) {
                console.error("Error fetching projects:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProjects();
    }, []);

    // ✅ Filter projects based on search
    const filteredProjects = projects?.filter(project =>
        searchQuery === '' ||
        project.heading.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.introContent.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    if (isLoading) {
        return (
            <LoadingContainer>
                <CircularProgress />
            </LoadingContainer>
        );
    }

    return (
        <PageContainer>
            <Fade in timeout={1000}>
                <ContentContainer>
                    {/* Header Section */}
                    <Section>
                        <GradientHeading variant="h3" component="h1">
                            Writings
                        </GradientHeading>
                        <SubHeading variant="subtitle1">
                            Explore my technical articles and implementations
                        </SubHeading>
                    </Section>

                    {/* Search Section */}
                    <Section>
                        <SearchContainer elevation={0}>
                            <SearchIcon sx={{ color: 'primary.main' }} />
                            <SearchField
                                placeholder="Search by title, content, or keywords..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </SearchContainer>
                    </Section>

                    {/* Content Section */}
                    {!filteredProjects?.length ? (
                        <Fade in timeout={500}>
                            <NoResultsContainer elevation={0}>
                                <Typography variant="h6" color="text.secondary" gutterBottom>
                                    No writings found
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Try adjusting your search terms or browse all writings
                                </Typography>
                            </NoResultsContainer>
                        </Fade>
                    ) : (
                        <ResponsiveGrid>
                            {filteredProjects?.map((project) => (
                                <Fade in timeout={500} key={project.heading}>
                                    <div key={`div-${project.heading}`}>
                                        <WCard
                                            cardHeading={project.heading}
                                            date={formatDate(project.date)}
                                            introContent={project.introContent}
                                            linkToArticle={project.link}
                                            keywords={project.keywords}
                                            sx={{
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    transform: 'translateY(-4px)',
                                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                                }
                                            }}
                                        />
                                    </div>
                                </Fade>
                            ))}
                        </ResponsiveGrid>
                    )}
                </ContentContainer>
            </Fade>
        </PageContainer>
    );
}

// Configure as static page
export const dynamic = 'force-static';
