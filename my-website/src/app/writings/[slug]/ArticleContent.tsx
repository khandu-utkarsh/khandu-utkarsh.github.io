"use client"

import React, { JSX } from 'react';
import { Box, Typography, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ProjectInterface } from '@/services/projectLoader';
import { formatDate } from '@/utils/dateString';
import ReactMarkdown from 'react-markdown';

const PageContainer = styled(Box)(({ theme }) => ({
    maxWidth: '800px',
    margin: '0 auto',
    padding: theme.spacing(4),
}));

const ContentContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
}));

const BackLink = styled(Link)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    color: theme.palette.text.secondary,
    textDecoration: 'none',
    '&:hover': {
        color: theme.palette.text.primary,
    },
}));

const Content = styled(Box)(({ theme }) => ({
    '& p': {
        fontSize: '1.1rem',
        lineHeight: 1.7,
        color: theme.palette.text.secondary,
        marginBottom: theme.spacing(3),
    },
    '& h1, & h2, & h3, & h4, & h5, & h6': {
        color: theme.palette.text.primary,
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
    },
    '& code': {
        backgroundColor: theme.palette.background.paper,
        padding: '0.2em 0.4em',
        borderRadius: '3px',
        fontSize: '0.9em',
    },
    '& pre': {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
        overflowX: 'auto',
        marginBottom: theme.spacing(3),
    },
    '& a': {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
}));

interface ArticleContentProps {
    article: ProjectInterface;
}

export default function ArticleContent({ article }: ArticleContentProps) {
    return (
        <PageContainer>
            <ContentContainer>
                {/* Back Button */}
                <BackLink href="/writings">
                    <ArrowBackIcon fontSize="small" />
                    <Typography>Back to Writings</Typography>
                </BackLink>

                {/* Article Header */}
                <Typography 
                    variant="h1" 
                    component="h1"
                    sx={{
                        fontSize: { xs: '2.5rem', md: '3.5rem' },
                        fontWeight: 600,
                        mb: 2,
                    }}
                >
                    {article.heading}
                </Typography>

                {/* Date */}
                <Typography 
                    variant="body2" 
                    sx={{ 
                        color: 'text.secondary',
                        mb: 4,
                    }}
                >
                    {formatDate(article.date)}
                </Typography>

                {/* Article Content */}
                <Content>
                    <ReactMarkdown>
                        {article.content || article.introContent}
                    </ReactMarkdown>
                </Content>
            </ContentContainer>
        </PageContainer>
    );
} 