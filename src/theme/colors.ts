// Color palette from Eva Colors Generator
import themeColorsJson from "./theme-colors.json";

const baseColors = {
  ...themeColorsJson,
  // Theme Colors
  "theme-dark-background": "#1C2A1C",
  "theme-dark-surface": "#2C4529",
  "theme-light-background": "#FFFFFF",
  "theme-light-surface": "#F8F8F8",
  "theme-divider": "#AAAAAA1F",
  // Text Colors
  "text-white-high-emphasis": "#FFFFFFDE",
  "text-white-medium-emphasis": "#FFFFFF99",
  "text-white-low-emphasis": "#ffffff5F",
  "text-black-high-emphasis": "#000000DE",
  "text-black-medium-emphasis": "#00000099",
  "text-black-low-emphasis": "#0000005F",
};

const aliases = {
  "theme-background": baseColors["theme-light-background"],
  "theme-surface": baseColors["theme-light-surface"],
  "contrast-high": baseColors["text-black-high-emphasis"],
  "contrast-medium": baseColors["text-black-medium-emphasis"],
  "contrast-low": baseColors["text-black-low-emphasis"],
};

export const colors = { ...baseColors, ...aliases };
