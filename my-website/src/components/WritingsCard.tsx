import Link from 'next/link';
import { Typography, Box, SxProps} from '@mui/material';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Chip from '@mui/material/Chip';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { createSlug } from '@/utils/slugify';
import { themeConstants } from '@/theme/constants';

export interface WCardProps {
    cardHeading: string;
    date: string;
    introContent: string;
    linkToArticle?: string;
    keywords? :string[];
    sx? : SxProps;

}


export default function WCard({ 
    cardHeading, 
    date, 
    introContent, 
    keywords, 
    linkToArticle,
    sx 
}: WCardProps) {
    const cardContent = (
        <Card 
            sx={{
                ...sx,
                cursor: 'pointer',
                background: themeConstants.gradients.primary,
                transition: themeConstants.transitions.default,
                '&:hover': {
                    background: themeConstants.gradients.primaryHover,
                    transform: 'translateY(-4px)',
                    boxShadow: themeConstants.elevations.high,
                }
            }}
        >
            <CardContent>
                <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: 1
                }}>
                    <Typography 
                        variant="h5" 
                        component="h2"
                        sx={{
                            mb: 1,
                            background: themeConstants.gradients.text,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        {cardHeading}
                    </Typography>
                    {linkToArticle && (
                        <OpenInNewIcon 
                            sx={{ 
                                color: 'primary.main',
                                fontSize: '1rem',
                                opacity: 0.7,
                                transition: themeConstants.transitions.quick,
                                '.MuiCard-root:hover &': {
                                    opacity: 1,
                                }
                            }} 
                        />
                    )}
                </Box>
                <Typography 
                    variant="subtitle2" 
                    color="text.secondary"
                    sx={{ mb: 2 }}
                >
                    {date}
                </Typography>
                <Typography 
                    variant="body1" 
                    color="text.secondary"
                    sx={{ mb: 2 }}
                >
                    {introContent}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {keywords?.map((keyword) => (
                        <Chip
                            key={keyword}
                            label={keyword}
                            size="small"
                            sx={{
                                background: themeConstants.colors.chipBackground,
                                color: themeConstants.colors.primary,
                            }}
                        />
                    ))}
                </Box>
            </CardContent>
        </Card>
    );

    // If external link is provided, use anchor tag with target="_blank"
    if (linkToArticle) {
        return (
            <a 
                href={linkToArticle}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
            >
                {cardContent}
            </a>
        );
    }

    // Otherwise, use Next.js Link for internal routing
    return (
        <Link 
            href={`/writings/${createSlug(cardHeading)}`}
            style={{ textDecoration: 'none' }}
        >
            {cardContent}
        </Link>
    );
}