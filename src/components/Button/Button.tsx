import React, { ComponentProps } from "react";
import { styled } from "../../stitches.config";
import { ButtonLabel } from "./ButtonLabel";
import { buttonStyle } from "./buttonStyle";

const ButtonRoot = styled(
  "View",
  {
    borderWidth: 1,

    variants: {
      variant: {
        primary: {
          backgroundColor: "$primary-500",
          borderColor: "$primary-700",
        },
        info: {
          backgroundColor: "$info-500",
          borderColor: "$info-700",
        },
        danger: {
          backgroundColor: "$danger-500",
          borderColor: "$danger-700",
        },
        success: {
          backgroundColor: "$success-500",
          borderColor: "$success-700",
        },
        warning: {
          backgroundColor: "$warning-500",
          borderColor: "$warning-700",
        },
      },
    },

    defaultVariants: {
      variant: "primary",
    },
  },
  buttonStyle
);

export type ButtonProps = ComponentProps<typeof ButtonRoot> & {
  title: string;
};

export const Button = ({ title, ...props }: ButtonProps) => {
  return (
    <ButtonRoot {...props}>
      <ButtonLabel variant="white">{title}</ButtonLabel>
    </ButtonRoot>
  );
};

Button.displayName = "Button";
