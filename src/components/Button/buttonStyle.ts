import { css } from "../../stitches.config";

export const buttonStyle = css({
  position: "relative",

  borderRadius: "$sm",

  paddingVertical: "$2",
  paddingHorizontal: "$4",

  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",

  variants: {
    size: {
      sm: {
        height: "$10",
      },
      md: {
        height: "$12",
      },
    },
    disabled: {
      true: {
        opacity: "$disabled",
      },
    },
  },

  defaultVariants: {
    size: "md",
  },
});
