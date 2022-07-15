import type * as Stitches from "stitches-native";
import { createStitches, defaultThemeMap } from "stitches-native";
import { colors } from "./theme/colors";

export const {
  ThemeProvider,
  config,
  createTheme,
  css,
  styled,
  theme,
  useTheme,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    width: "space",
    height: "space",
  },

  theme: {
    colors,

    space: {
      1: 4,
      2: 8,
      3: 12,
      4: 16,
      5: 20,
      6: 24,
      7: 28,
      8: 32,
      10: 40,
      11: 44,
      12: 48,
      14: 56,
      16: 64,
      20: 80,
      40: 160,
      50: 200,
      64: 256,
      80: 320,
    },

    fontSizes: {
      xxs: 10,
      xs: 12,
      sm: 14,
      md: 16,
      lg: 20,
      xl: 24,
      "2xl": 32,
      "4xl": 36,
      "5xl": 40,
      "6xl": 48,
      "7xl": 64,
      "8xl": 72,
      "9xl": 96,
    },

    fonts: {
      poppins: "Poppins",
      lato: "Lato",
    },

    opacities: {
      visible: "100%",
      hidden: "0%",
      disabled: "37%",
    },

    radii: {
      xs: 2,
      sm: 4,
      md: 8,
      lg: 20,
      full: 9999,
    },

    zIndices: {},
  },

  media: {},

  utils: {
    fw: (value: Stitches.PropertyValue<"fontWeight">) => ({
      fontWeight: value,
    }),
    inset: (value: Stitches.ScaleValue<"space">) => ({
      left: value,
      right: value,
      top: value,
      bottom: value,
    }),
    p: (value: Stitches.PropertyValue<"padding">) => ({
      padding: value,
    }),
    pl: (value: Stitches.PropertyValue<"padding">) => ({
      paddingLeft: value,
    }),
    pt: (value: Stitches.PropertyValue<"padding">) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<"padding">) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<"padding">) => ({
      paddingBottom: value,
    }),
    px: (value: Stitches.PropertyValue<"padding">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<"padding">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    m: (value: Stitches.PropertyValue<"margin">) => ({
      margin: value,
    }),
    ml: (value: Stitches.PropertyValue<"margin">) => ({
      marginLeft: value,
    }),
    mt: (value: Stitches.PropertyValue<"margin">) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<"margin">) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<"margin">) => ({
      marginBottom: value,
    }),
    mx: (value: Stitches.PropertyValue<"margin">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<"margin">) => ({
      marginTop: value,
      marginBottom: value,
    }),
    // A property for applying width/height together
    size: (value: Stitches.PropertyValue<"width">) => ({
      width: value,
      height: value,
    }),
  },
});

export const darkTheme = createTheme({
  colors: {
    "theme-background": colors["theme-dark-background"],
    "theme-surface": colors["theme-dark-background"],
    "contrast-high": colors["text-white-high-emphasis"],
    "contrast-medium": colors["text-white-medium-emphasis"],
    "contrast-low": colors["text-white-low-emphasis"],
  },
});
