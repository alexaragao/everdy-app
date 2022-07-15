import { ComponentProps } from "react";
import { styled } from "../../stitches.config";
import { Text } from "../Text";

export const ButtonLabel = styled(Text, {
  fontWeight: "500",
  textAlign: "center",
  fontSize: "$sm",
  textTransform: "uppercase",
  letterSpacing: 1,

  variants: {
    variant: {
      primary: {
        color: "$primary-500",
      },
      info: {
        color: "$info-500",
      },
      danger: {
        color: "$danger-500",
      },
      success: {
        color: "$success-500",
      },
      warning: {
        color: "$warning-500",
      },
      white: {
        color: "#ffffff",
      },
      black: {
        color: "#000000",
      },
    },
  },
});

export type ButtonLabelProps = ComponentProps<typeof ButtonLabel>;

ButtonLabel.displayName = "ButtonLabel";
