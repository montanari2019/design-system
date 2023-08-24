import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from "@ignite-montanari-ui/tokens";
import { createStitches, defaultThemeMap } from "@stitches/react";

export const { 
    styled,
    css,
    globalCss,
    getCssText,
    keyframes,
    theme,
    createTheme,
    config
 }  = createStitches({
    themeMap: {
        ...defaultThemeMap,
        height: 'space',
        widths: 'space'
    },
  theme: {
    colors: colors,
    fontSizes: fontSizes,
    fontWeights: fontWeights,
    fonts: fonts,
    lineHeights: lineHeights,
    radii: radii,
    space: space,
  },
});
