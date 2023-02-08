import {createTheme} from "@mui/material";
import '../App.css';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#dadada',
            light: '#dadada',
            dark: '#525252'
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 768,
            lg: 1600,
            xl: 1700
        },
    },
    typography: {
        fontFamily: [
            'Helvetica Neue',
            'Arial',
            'Hiragino Kaku Gothic ProN',
            'Hiragino Sans',
            'sans-serif',
        ].join(),
    },
})

export default theme;