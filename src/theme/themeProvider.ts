import { extendTheme } from "@chakra-ui/react"
import { colors } from "./colors";

const themeProvider = extendTheme({
    colors: colors
  })
  
  export default themeProvider;