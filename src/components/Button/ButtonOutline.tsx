import React, { ComponentProps, useMemo } from "react";
import { styled } from "../../stitches.config";
import { ButtonLabel } from "./ButtonLabel";
import { buttonStyle } from "./buttonStyle";

const ButtonOutlineRoot = styled(
  "View",
  {
    borderWidth: 1,

    variants: {
      variant: {
        primary: {
          borderColor: "$primary-500",
        },
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
      variant: "primary",
    },
  },
  buttonStyle
);

export type ButtonOutlineProps = ComponentProps<typeof ButtonOutlineRoot> & {
  title: string;
};

export const ButtonOutline = ({
  title,
  variant,
  ...props
}: ButtonOutlineProps) => {
  const labelProps = useMemo(() => ({ variant }), [variant]);

  return (
    <ButtonOutlineRoot variant={variant} {...props}>
      <ButtonLabel {...labelProps}>{title}</ButtonLabel>
    </ButtonOutlineRoot>
  );
};

ButtonOutline.displayName = "ButtonOutline";
