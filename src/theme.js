import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    palette: {
        primary: {
            light: '#ffffff',
            main: '#fff8e1',
            dark: '#ccc5af',
            contrastText: '#000000',
        },
        secondary: {
            light: '#768fff',
            main: '#2962ff',
            dark: '#0039cb',
            contrastText: '#fff',
        }
    },
    typography: {
        useNextVariants: true,
    }
})