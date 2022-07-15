import React, { ComponentProps, useMemo } from "react";
import { styled } from "../../stitches.config";
import { Text } from "../Text";
import { BadgeLabel } from "./BadgeLabel";

export const BadgeRoot = styled("View", {
  position: "relative",
  backgroundColor: "transparent",

  borderWidth: 1,
  borderRadius: "$sm",

  paddingVertical: "$1",
  paddingHorizontal: "$3",

  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",

  variants: {
    variant: {
      info: {
        borderColor: "$info-500",
      },
      danger: {
        borderColor: "$danger-500",
      },
      success: {
        borderColor: "$success-500",
      },
      warning: {
        borderColor: "$warning-500",
      },
    },
  },

  defaultVariants: {
    variant: "info",
  },
}).attrs((props) => ({
  children: <Text>{props.variant}</Text>,
}));

export type BadgeProps = ComponentProps<typeof BadgeRoot> & {
  title: string;
};

export const Badge = ({ title, variant, ...props }: BadgeProps) => {
  const labelProps = useMemo(() => ({ variant }), [variant]);

  return (
    <BadgeRoot variant={variant} {...props}>
      <BadgeLabel {...labelProps}>{title}</BadgeLabel>
    </BadgeRoot>
  );
};

Badge.displayName = "Badge";
