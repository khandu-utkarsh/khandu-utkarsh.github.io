import { createTheme, Theme } from '@mui/material/styles';
import { themeConstants } from './constants';

declare module '@mui/material/styles' {
    interface Theme {
        customGradients: {
            primary: string;
            primaryHover: string;
            text: string;
            overlay: string;
        };
    }
    interface ThemeOptions {
        customGradients?: {
            primary: string;
            primaryHover: string;
            text: string;
            overlay: string;
        };
    }
}

const baseTheme = {
    customGradients: themeConstants.gradients,
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: themeConstants.gradients.primary,
                    transition: themeConstants.transitions.default,
                    '&:hover': {
                        backgroundImage: themeConstants.gradients.primaryHover,
                    },
                },
            },
        },
    },
};

const themeColors = {
  // Dark theme colors
  darkPalette: {
    primary: '#2a2d37',      // Dark Grayish Blue
    secondary: '#2b2e38',    // Slightly Darker Blue-Gray
    background: '#2a2e38',   // Deep Blue-Gray
    surface: '#2a2d38',      // Muted Blue-Gray
    accent: '#2a2d36',       // Subtle Dark Gray
  },
  // Light theme colors - more neutral tones
  lightPalette: {
    primary: '#ffffff',      // Pure White
    secondary: '#f5f5f5',    // Light Gray
    background: '#ffffff',   // White
    surface: '#fafafa',      // Very Light Gray
    accent: '#e0e0e0',      // Medium Light Gray
    text: '#2d3436',        // Dark Gray (for text)
  },
  // Common colors for both themes
  common: {
    blue: '#2196F3',        // Accent Blue (from your favicon)
    lightBlue: '#64B5F6',   // Light Accent
    darkBlue: '#1976D2',    // Dark Accent
    gray: {
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
    }
  }
};

export const lightTheme = createTheme({
    ...baseTheme,
    palette: {
        mode: 'light',
        primary: {
            main: themeConstants.colors.primary,
        },
        secondary: {
            main: themeConstants.colors.secondary,
        },
        background: {
            default: themeColors.lightPalette.background,
            paper: themeColors.lightPalette.surface,
        },
        text: {
            primary: themeColors.lightPalette.text,
            secondary: '#636e72',
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: themeColors.lightPalette.surface,
                    color: themeColors.lightPalette.text,
                    boxShadow: 'none',
                    borderBottom: `1px solid ${themeColors.common.gray[300]}`,
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: themeColors.lightPalette.surface,
                    borderRadius: '12px',
                    border: `1px solid ${themeColors.common.gray[200]}`,
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    '& .MuiTab-root': {
                        color: themeColors.lightPalette.text,
                    },
                },
            },
        },
    },
    shape: {
        borderRadius: 12,
    },
});

export const darkTheme = createTheme({
    ...baseTheme,
    palette: {
        mode: 'dark',
        primary: {
            main: themeConstants.colors.primary,
        },
        secondary: {
            main: themeConstants.colors.secondary,
        },
        background: {
            default: themeColors.darkPalette.background,
            paper: themeColors.darkPalette.surface,
        },
        text: {
            primary: '#ffffff',
            secondary: '#b0b8c4',
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: themeColors.darkPalette.surface,
                    boxShadow: 'none',
                    borderBottom: `1px solid ${themeColors.darkPalette.accent}`,
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: themeColors.darkPalette.surface,
                    borderRadius: '12px',
                    border: `1px solid ${themeColors.darkPalette.accent}`,
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                },
            },
        },
    },
    shape: {
        borderRadius: 12,
    },
}); 