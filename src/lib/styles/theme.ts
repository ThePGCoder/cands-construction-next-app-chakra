import { extendTheme, StyleFunctionProps } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const theme = extendTheme({
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
  config: {
    initialColorMode: "light",
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode("#e9e9e9","#1a202c")(props),
      }
    })
  },
});
