"use client"

import React, { JSX } from 'react';
import { Typography, Box, Chip, Container } from '@mui/material';
import { themeConstants } from '@/theme/constants';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
    PageContainer,
    ContentContainer,
    StyledPaper,
    GradientHeading,
    GradientLink,
    FlexBetween
} from '@/components/styles/Common.styles';

interface ArticleData {
    heading: string;
    date: string;
    introContent: string;
    content?: string;
    keywords: string[];
}

interface ArticleContentProps {
    article: ArticleData | null;
}

export default function ArticleContent({ article }: ArticleContentProps) {
    if (!article) {
        return (
            <PageContainer>
                <ContentContainer>
                    <StyledPaper>
                        <GradientHeading variant="h4" gutterBottom>
                            Article Not Found
                        </GradientHeading>
                        <Typography color="text.secondary" gutterBottom>
                            The article you&apos;re looking for doesn&apos;t exist or has been moved.
                        </Typography>
                        <GradientLink href="/writings">
                            <FlexBetween sx={{ 
                                justifyContent: 'center',
                                mt: 2,
                                '&:hover': { opacity: 0.8 }
                            }}>
                                <ArrowBackIcon fontSize="small" />
                                <Typography>Back to Writings</Typography>
                            </FlexBetween>
                        </GradientLink>
                    </StyledPaper>
                </ContentContainer>
            </PageContainer>
        );
    }

    return (
        <PageContainer>
            <ContentContainer>
                {/* Back Button */}
                <GradientLink href="/writings">
                    <FlexBetween sx={{ 
                        justifyContent: 'flex-start',
                        mb: 3,
                        '&:hover': { opacity: 0.8 }
                    }}>
                        <ArrowBackIcon fontSize="small" />
                        <Typography>Back to Writings</Typography>
                    </FlexBetween>
                </GradientLink>

                <StyledPaper>
                    {/* Article Header */}
                    <GradientHeading variant="h3" component="h1">
                        {article.heading}
                    </GradientHeading>

                    {/* Metadata */}
                    <FlexBetween sx={{ 
                        justifyContent: 'flex-start',
                        mb: 3,
                        color: 'text.secondary'
                    }}>
                        <CalendarTodayIcon sx={{ fontSize: '1rem', mr: 1 }} />
                        <Typography variant="body2">
                            {article.date}
                        </Typography>
                    </FlexBetween>

                    {/* Keywords */}
                    <Box sx={{ mb: 4 }}>
                        {article.keywords.map((keyword) => (
                            <Chip
                                key={keyword}
                                label={keyword}
                                sx={{ 
                                    mr: 1, 
                                    mb: 1,
                                    background: themeConstants.colors.chipBackground,
                                    color: themeConstants.colors.primary,
                                }}
                            />
                        ))}
                    </Box>

                    {/* Article Content */}
                    <Box sx={{
                        '& h1': { 
                            fontSize: '2rem',
                            fontWeight: 700,
                            mt: 4,
                            mb: 3,
                            background: themeConstants.gradients.text,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        },
                        '& h2': { 
                            fontSize: '1.5rem',
                            fontWeight: 600,
                            mt: 3,
                            mb: 2,
                            color: 'primary.main'
                        },
                        '& p': { 
                            mb: 2,
                            lineHeight: 1.7,
                            color: 'text.primary'
                        },
                        '& ul': {
                            pl: 3,
                            mb: 2
                        },
                        '& li': {
                            mb: 1,
                            color: 'text.primary'
                        }
                    }}>
                        {formatContent(article.content || article.introContent)}
                    </Box>
                </StyledPaper>
            </ContentContainer>
        </PageContainer>
    );
}

function formatContent(content: string): JSX.Element[] {
    if (!content) return [];

    return content.split('\n\n').map((paragraph, index) => {
        // Handle headers
        if (paragraph.startsWith('# ')) {
            return (
                <Typography variant="h1" component="h1" key={index}>
                    {paragraph.replace('# ', '')}
                </Typography>
            );
        }

        if (paragraph.startsWith('## ')) {
            return (
                <Typography variant="h2" component="h2" key={index}>
                    {paragraph.replace('## ', '')}
                </Typography>
            );
        }

        // Handle lists
        if (paragraph.startsWith('- ')) {
            const items = paragraph.split('\n').map(item => item.replace('- ', ''));
            return (
                <Box component="ul" key={index}>
                    {items.map((item, i) => (
                        <Typography component="li" key={i}>
                            {item}
                        </Typography>
                    ))}
                </Box>
            );
        }

        // Regular paragraphs
        return (
            <Typography variant="body1" component="p" key={index}>
                {paragraph}
            </Typography>
        );
    });
} 