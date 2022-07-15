import { ComponentProps } from "react";
import { styled } from "../../stitches.config";
import { Text } from "../Text";

export const BadgeLabel = styled(Text, {
  textAlign: "center",
  fontSize: "$xs",
  textTransform: "uppercase",
  letterSpacing: 0.4,

  variants: {
    variant: {
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
    },
  },
});

export type BadgeLabelProps = ComponentProps<typeof BadgeLabel>;
