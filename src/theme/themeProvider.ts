import { extendTheme } from '@chakra-ui/react';
import { colors } from './colors';
import { Button } from './components';
import '@fontsource/dela-gothic-one';
import '@fontsource/dotgothic16';

// TODO ADD FONTS
const themeProvider = extendTheme({
    styles: {
        global: {
            'html, body': {
                backgroundColor: colors.primary[500],
            },
        },
    },
    colors: colors,
    breakpoints: {
        base: '0px',
        sm: '320px',
        md: '768px',
        lg: '1200px',
        xl: '1500px',
    },
    fonts: {
        heading: `'dotgothic16', sans-serif`,
        subtitle: `'Dela Gothic One', system-ui`,
        body: `'Dosis Variable', sans-serif`,
    },
    components: {
        Button,
    },
});

export default themeProvider;
