import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        mode: 'dark',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    backgroundColor: '#4686EE',
                    padding: '8px 16px',
                    color: '#ffffff',
                },
            },
        },
    },
});
