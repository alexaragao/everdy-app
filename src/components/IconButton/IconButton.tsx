import React, { ComponentProps } from "react";
import { styled, useTheme } from "../../stitches.config";
import { iconStyle } from "./iconStyle";

const IconButtonRoot = styled("View", {
  position: "relative",
  borderRadius: "$sm",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "$theme-surface",
  padding: "$3",
  size: "$12",
});

export type IconButtonProps = ComponentProps<typeof IconButtonRoot> & {
  IconComponent: React.ElementType;
};

export const IconButton = ({ IconComponent, ...props }: IconButtonProps) => {
  const theme = useTheme();

  return (
    <IconButtonRoot {...props}>
      <IconComponent fill={theme.colors["contrast-medium"]} style={iconStyle} />
    </IconButtonRoot>
  );
};

IconButton.displayName = "IconButton";
