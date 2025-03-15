import { styled } from '@mui/material/styles';
import { Box, Paper, Typography, Container, Button, List, ListItem, ListItemText } from '@mui/material';
import { themeConstants } from '@/theme/constants';
import Link from 'next/link';

// ============= Layout Components =============
export const PageContainer = styled(Container)(({ theme }) => ({
    maxWidth: theme.breakpoints.values.md,
}));

export const ContentContainer = styled(Box)(({ theme }) => ({
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));

export const Section = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(4),
    '&:last-child': {
        marginBottom: 0,
    },
}));

export const FlexBetween = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
});

// ============= Typography Components =============
interface GradientHeadingProps {
    component?: React.ElementType;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children: React.ReactNode;
}

export const GradientHeading = styled(Typography, {
    shouldForwardProp: (prop) => prop !== 'component',
})<GradientHeadingProps>(({ theme }) => ({
    marginBottom: theme.spacing(2),
    fontWeight: 700,
    background: themeConstants.gradients.text,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
}));

export const SubHeading = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(3),
    color: theme.palette.text.secondary,
}));

// ============= Paper Components =============
export const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    marginBottom: theme.spacing(4),
    borderRadius: theme.shape.borderRadius * 2,
    background: themeConstants.gradients.primary,
    transition: themeConstants.transitions.default,
    '&:hover': {
        background: themeConstants.gradients.primaryHover,
    },
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4),
    },
}));

export const HoverPaper = styled(Paper)(({ theme }) => ({
    transition: themeConstants.transitions.default,
    '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: themeConstants.elevations.high,
    },
}));

// ============= List Components =============
export const StyledList = styled(List)({
    padding: 0,
});

export const StyledListItem = styled(ListItem)(({ theme }) => ({
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    alignItems: 'flex-start',
}));

export const StyledListItemIcon = styled(Box)(({ theme }) => ({
    minWidth: 40,
    color: theme.palette.primary.main,
}));

export const StyledListItemText = styled(ListItemText)(({ theme }) => ({
    '& .MuiListItemText-primary': {
        lineHeight: 1.6,
        color: theme.palette.text.primary,
    },
}));

// ============= Button Components =============
export const GradientButton = styled(Button)(({ theme }) => ({
    background: themeConstants.gradients.primary,
    color: theme.palette.common.white,
    padding: `${theme.spacing(1)} ${theme.spacing(3)}`,
    '&:hover': {
        background: themeConstants.gradients.primaryHover,
    },
}));

// ============= Link Components =============
export const GradientLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: 'inherit',
    '& h4': {
        fontWeight: 700,
        background: themeConstants.gradients.text,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        transition: themeConstants.transitions.quick,
        '&:hover': {
            color: theme.palette.primary.main,
            WebkitTextFillColor: 'initial',
        },
    },
}));

// ============= State Components =============
export const LoadingContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '400px',
});

export const ErrorText = styled(Typography)(({ theme }) => ({
    color: theme.palette.error.main,
}));

// ============= Grid Layouts =============
export const ResponsiveGrid = styled(Box)(({ theme }) => ({
    display: 'grid',
    gap: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
        gap: theme.spacing(4),
    },
}));

// ============= Common Animations =============
export const FadeInBox = styled(Box)(({ theme }) => ({
    animation: `fadeIn 1s ${theme.transitions.easing.easeInOut}`,
    '@keyframes fadeIn': {
        from: {
            opacity: 0,
            transform: 'translateY(20px)',
        },
        to: {
            opacity: 1,
            transform: 'translateY(0)',
        },
    },
})); 