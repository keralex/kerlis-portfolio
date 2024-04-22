import { extendTheme } from "@chakra-ui/react"
import { colors } from "./colors";
import '@fontsource/dela-gothic-one';
import '@fontsource/dotgothic16';

// TODO ADD FONTS
const themeProvider = extendTheme({
    colors: colors,
    fonts: {
      heading: `'dotgothic16', sans-serif`,
      body: `'Dela Gothic One', system-ui`
    }
  })
  
  export default themeProvider;