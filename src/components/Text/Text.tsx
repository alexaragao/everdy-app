import { ComponentProps } from "react";
import { Animated } from "react-native";
import { styled } from "../../stitches.config";

export const Text = styled("Text", {
  // Reset
  margin: 0,

  variants: {
    size: {
      "1": {
        fontSize: "$xxs",
      },
      "2": {
        fontSize: "$xs",
      },
      "3": {
        fontSize: "$sm",
      },
      "4": {
        fontSize: "$md",
      },
      "5": {
        fontSize: "$lg",
      },
      "6": {
        fontSize: "$xl",
      },
      "7": {
        fontSize: "$2xl",
      },
      "8": {
        fontSize: "$4xl",
      },
      "9": {
        fontSize: "$5xl",
      },
    },
    font: {
      default: {
        fontFamily: "$lato",
      },
      heading: {
        fontFamily: "$poppins",
      },
    },
    variant: {
      primary: {
        color: "$primary-500",
      },
      "primary-dark": {
        color: "$primary-700",
      },
      "contrast-high": {
        color: "$contrast-high",
      },
      "contrast-medium": {
        color: "$contrast-medium",
      },
      "contrast-low": {
        color: "$contrast-low",
      },
    },
  },

  defaultVariants: {
    size: "4",
    font: "default",
    variant: "contrast-high",
  },
});

export type TextProps = ComponentProps<typeof Text>;
