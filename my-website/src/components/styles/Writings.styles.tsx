import { styled } from '@mui/material/styles';
import { Box, Paper, TextField, Typography } from '@mui/material';
import { themeConstants } from '@/theme/constants';

export const PageContainer = styled(Box)(({ theme }) => ({
    maxWidth: '1200px',
    margin: '0 auto',
    minHeight: '100vh',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4),
    },
}));

export const HeaderContainer = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(4),
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
        marginBottom: theme.spacing(6),
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

export const SubHeading = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(3),
    color: theme.palette.text.secondary,
}));

export const SearchContainer = styled(Paper)(({ theme }) => ({
    marginBottom: theme.spacing(4),
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius * 2,
    background: themeConstants.gradients.primary,
    transition: themeConstants.transitions.default,
    '&:hover': {
        background: themeConstants.gradients.primaryHover,
    },
    [theme.breakpoints.up('sm')]: {
        marginBottom: theme.spacing(6),
    },
}));

export const SearchField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        backgroundColor: theme.palette.background.paper,
        transition: themeConstants.transitions.quick,
        '& fieldset': {
            borderColor: 'transparent',
        },
        '&:hover fieldset': {
            borderColor: theme.palette.primary.main,
        },
        '&.Mui-focused fieldset': {
            borderColor: theme.palette.primary.main,
            borderWidth: '2px',
        },
    },
    '& .MuiInputBase-input': {
        '&::placeholder': {
            color: theme.palette.text.secondary,
            opacity: 0.8,
        },
    },
}));

export const LoadingContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '400px',
});

export const NoResultsContainer = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    padding: `${theme.spacing(8)} ${theme.spacing(2)}`,
    background: 'rgba(0, 0, 0, 0.02)',
    borderRadius: theme.shape.borderRadius * 2,
}));

export const ProjectsGrid = styled(Box)(({ theme }) => ({
    display: 'grid',
    gap: theme.spacing(3),
    gridTemplateColumns: '1fr',
    [theme.breakpoints.up('sm')]: {
        gap: theme.spacing(4),
    },
})); 