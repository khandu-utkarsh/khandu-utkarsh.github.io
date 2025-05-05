import { createTheme } from '@mui/material/styles';
import { themeConstants } from './constants';


export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: themeConstants.textColors.primaryLight,
        },
        background: {
            default: themeConstants.backgroundColors.primaryLight,
            paper: themeConstants.backgroundColors.primaryLight,
        },
        text: {
            primary: themeConstants.textColors.primaryLight,
        },
    },
    components: {
        //!Setting the them overrides for the MUI TextField component
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        transition: themeConstants.transitions.quick,
                        '& fieldset': {
                            borderColor: 'transparent',
                        },
                        /*
                        '&:hover fieldset': {
                            borderColor: themeConstants.textColors.primaryLight,
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: themeConstants.textColors.primaryLight,
                            borderWidth: '2px',
                        },
                        */
                    },
                },
            },
        },
        //!Setting the them overrides for the MUI Paper component
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: themeConstants.backgroundColors.primaryLight,
                    transition: themeConstants.transitions.default,
                    /*
                    '&:hover': {
                        backgroundColor: themeConstants.backgroundColors.primaryDark,
                    },
                    */
                },
            },
        },
        //!Setting the them overrides for the MUI AppBar component
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: themeConstants.backgroundColors.primaryLight,
                    color: themeConstants.textColors.primaryLight,
                    boxShadow: 'none',
                    borderBottom: `1px solid #eaeaea`,
                },
            },
        },
        //!Setting the them overrides for the MUI Card component
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: themeConstants.backgroundColors.primaryLight,
                    borderRadius: '12px',
                    border: `1px solid #eaeaea`,
                    boxShadow: 'none',
                },
            },
        },
        //!Setting the them overrides for the MUI Button component
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                },
            },
        },
        //!Setting the them overrides for the MUI Tabs component
        MuiTabs: {
            styleOverrides: {
                root: {
                    '& .MuiTab-root': {
                        color: themeConstants.textColors.primaryLight,
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
    palette: {
        mode: 'dark',
        primary: {
            main: themeConstants.textColors.primaryDark,
        },
        background: {
            default: themeConstants.backgroundColors.primaryDark,
            paper: themeConstants.backgroundColors.primaryDark,
        },
        text: {
            primary: themeConstants.textColors.primaryDark,
        },
    },
    components: {
        //!Setting the them overrides for the MUI TextField component
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        transition: themeConstants.transitions.quick,
                        '& fieldset': {
                            borderColor: 'transparent',
                        },
                        /*
                        '&:hover fieldset': {
                            borderColor: themeConstants.textColors.primary,
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: themeConstants.textColors.primary,
                            borderWidth: '2px',
                        },
                        */
                    },
                },
            },
        },
        //!Setting the them overrides for the MUI Paper component
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: themeConstants.backgroundColors.primaryDark,
                    transition: themeConstants.transitions.default,
                    /*
                    '&:hover': {
                        backgroundColor: themeConstants.backgroundColors.primaryDark,
                    },
                    */
                },
            },
        },
        //!Setting the them overrides for the MUI AppBar component
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: themeConstants.backgroundColors.primaryDark,
                    color: themeConstants.textColors.primaryDark,
                    boxShadow: 'none',
                    borderBottom: `1px solid #222`,
                },
            },
        },
        //!Setting the them overrides for the MUI Card component
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: themeConstants.backgroundColors.primaryDark,
                    borderRadius: '12px',
                    border: `1px solid #222`,
                    boxShadow: 'none',
                },
            },
        },
        //!Setting the them overrides for the MUI Button component
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