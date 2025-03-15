"use client"

import React, { JSX } from 'react';
import { Typography, Box, Paper, Chip, Container } from '@mui/material';
import { themeConstants } from '@/theme/constants';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
            <Container maxWidth="md" sx={{ py: { xs: 4, sm: 6 } }}>
                <Paper
                    elevation={0}
                    sx={{
                        p: 4,
                        textAlign: 'center',
                        borderRadius: 2,
                        background: themeConstants.gradients.primary,
                    }}
                >
                    <Typography variant="h4" gutterBottom>
                        Article Not Found
                    </Typography>
                    <Typography color="text.secondary" gutterBottom>
                        The article you're looking for doesn't exist or has been moved.
                    </Typography>
                    <Link href="/writings" style={{ textDecoration: 'none' }}>
                        <Box sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            gap: 1,
                            mt: 2,
                            color: 'primary.main',
                            '&:hover': { opacity: 0.8 }
                        }}>
                            <ArrowBackIcon fontSize="small" />
                            <Typography>Back to Writings</Typography>
                        </Box>
                    </Link>
                </Paper>
            </Container>
        );
    }

    return (
        <Container maxWidth="md" sx={{ py: { xs: 4, sm: 6 } }}>
            {/* Back Button */}
            <Link href="/writings" style={{ textDecoration: 'none' }}>
                <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1,
                    mb: 3,
                    color: 'primary.main',
                    '&:hover': { opacity: 0.8 }
                }}>
                    <ArrowBackIcon fontSize="small" />
                    <Typography>Back to Writings</Typography>
                </Box>
            </Link>

            <Paper
                elevation={0}
                sx={{
                    p: { xs: 3, sm: 5 },
                    borderRadius: 2,
                    background: themeConstants.gradients.primary,
                }}
            >
                {/* Article Header */}
                <Typography 
                    variant="h3" 
                    component="h1"
                    sx={{
                        mb: 3,
                        fontWeight: 700,
                        background: themeConstants.gradients.text,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    {article.heading}
                </Typography>

                {/* Metadata */}
                <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    mb: 3,
                    color: 'text.secondary'
                }}>
                    <CalendarTodayIcon sx={{ fontSize: '1rem', mr: 1 }} />
                    <Typography variant="body2">
                        {article.date}
                    </Typography>
                </Box>

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
            </Paper>
        </Container>
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