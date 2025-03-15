import { styled } from '@mui/material/styles';
import { Paper, Typography, Box } from '@mui/material';
import { themeConstants } from '@/theme/constants';

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

export const BodyText = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
    textAlign: 'justify',
    marginBottom: theme.spacing(2),
    '&:last-child': {
        marginBottom: 0,
    },
}));

export const CarouselPaper = styled(Paper)(({ theme }) => ({
    marginBottom: theme.spacing(4),
    borderRadius: theme.shape.borderRadius * 2,
    overflow: 'hidden',
    background: themeConstants.gradients.primary,
    transition: themeConstants.transitions.default,
    padding: theme.spacing(2),
    '&:hover': {
        background: themeConstants.gradients.primaryHover,
    },
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(3),
    },
}));

export const CarouselContainer = styled(Box)({
    width: '100%',
    height: '500px',
    position: 'relative',
    borderRadius: 16,
});

export const ImageOverlay = styled(Box)({
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: themeConstants.gradients.overlay,
    color: 'white',
    padding: '20px',
    zIndex: 1,
}); 