import React, { ComponentProps } from "react";
import { styled } from "../../stitches.config";
import { ButtonLabel } from "./ButtonLabel";
import { buttonStyle } from "./buttonStyle";

const ButtonGhostRoot = styled(
  "View",
  {
    backgroundColor: "transparent",

    variants: {
      variant: {
        primary: {},
        info: {},
        danger: {},
        success: {},
        warning: {},
      },
    },

    defaultVariants: {
      variant: "primary",
    },
  },
  buttonStyle
);

export type ButtonGhostProps = ComponentProps<typeof ButtonGhostRoot> & {
  title: string;
};

export const ButtonGhost = ({ title, variant, ...props }: ButtonGhostProps) => {
  return (
    <ButtonGhostRoot {...props}>
      <ButtonLabel variant={variant}>{title}</ButtonLabel>
    </ButtonGhostRoot>
  );
};

ButtonGhost.displayName = "ButtonGhost";
