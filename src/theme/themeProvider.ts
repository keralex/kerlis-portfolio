import { extendTheme } from '@chakra-ui/react';
import { colors } from './colors';
import { Button } from './components';
import '@fontsource/dela-gothic-one';
import '@fontsource/dotgothic16';

// TODO ADD FONTS
const themeProvider = extendTheme({
    colors: colors,
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
