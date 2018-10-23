import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    palette: {
        primary: {
            light: '#efdcd5',
            main: '#bcaaa4',
            dark: '#8c7b75',
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