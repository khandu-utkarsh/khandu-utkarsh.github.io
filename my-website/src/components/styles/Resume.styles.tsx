import { styled } from '@mui/material/styles';
import { Box, Paper, Typography, List, ListItem, Button, ListItemText, Container } from '@mui/material';
import { themeConstants } from '@/theme/constants';
import Link from 'next/link';

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

export const DownloadButtonContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: theme.spacing(4),
}));

export const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    padding: `${theme.spacing(1)} ${theme.spacing(3)}`,
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
}));

export const SectionPaper = styled(Paper)(({ theme }) => ({
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

interface GradientHeadingProps {
    component?: React.ElementType;
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

interface CompanyLinkProps {
    component?: React.ElementType;
}

export const CompanyLink = styled(Typography, {
    shouldForwardProp: (prop) => prop !== 'component',
})<CompanyLinkProps>(({ theme }) => ({
    marginBottom: theme.spacing(2),
    textDecoration: 'none',
    fontWeight: 700,
    display: 'inline-block',
    background: themeConstants.gradients.text,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    '&:hover': {
        color: theme.palette.primary.main,
        WebkitTextFillColor: 'initial',
    },
}));

export const RoleContainer = styled(Box)(({ theme }) => ({
    paddingBottom: theme.spacing(2),
}));

export const RoleMetadata = styled(Typography)(({ theme }) => ({
    paddingBottom: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    color: theme.palette.text.secondary,
}));

export const StyledList = styled(List)(({ theme }) => ({
    paddingTop: 0,
    paddingBottom: 0,
}));

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

export const LoadingContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '400px',
});

export const ErrorText = styled(Typography)(({ theme }) => ({
    color: theme.palette.error.main,
}));

export const EducationDetails = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(4),
    '&:last-child': {
        marginBottom: 0,
    },
})); 