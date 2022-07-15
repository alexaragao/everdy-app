import React, { ComponentProps, forwardRef, useEffect, useRef } from "react";
import { Animated, Pressable } from "react-native";
import { styled, useTheme } from "../../stitches.config";

const SwitchRoot = styled("View", {
  position: "relative",
  height: "$4",
  width: "$12",
  borderRadius: "$sm",
  justifyContent: "center",

  variants: {
    enabled: {
      true: {
        backgroundColor: "$primary-100",
      },
      false: {
        backgroundColor: "#E7F1F6",
      },
    },
    disabled: {
      true: {
        backgroundColor: "#F2F8FA",
      },
    },
  },

  defaultVariants: {
    enabled: "false",
  },
});

const SwitchTrigger = styled("View", {
  size: "$5",
  borderRadius: "$sm",
  elevation: 1,
  shadowOffset: { width: 0, height: 1 },
  shadowRadius: 3,
  shadowOpacity: 0.1,
  shadowColor: "#000",

  variants: {
    enabled: {
      true: {
        backgroundColor: "$primary-500",
      },
      false: {
        backgroundColor: "#8C9AA5",
      },
    },
    disabled: {
      true: {
        backgroundColor: "#CFDDE3",
      },
    },
  },

  defaultVariants: {
    enabled: "false",
  },
});

export type SwitchProps = ComponentProps<typeof Pressable> & {
  value?: boolean;
  onValueChange?: () => void;
};

const AnimatedSwitchTrigger = Animated.createAnimatedComponent(SwitchTrigger);

export const Switch = forwardRef<
  React.ElementRef<typeof Pressable>,
  SwitchProps
>(({ value = false, onValueChange, disabled, ...props }, forwardedRef) => {
  const theme = useTheme();

  const toggleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(toggleAnim, {
      duration: 300,
      toValue: value ? 1 : 0,
      useNativeDriver: false,
    }).start();
  }, [value]);

  return (
    <Pressable
      {...props}
      disabled={disabled}
      onPress={onValueChange}
      ref={forwardedRef}
    >
      <SwitchRoot disabled={!!disabled} enabled={value}>
        <AnimatedSwitchTrigger
          disabled={!!disabled}
          enabled={value}
          style={{
            transform: [
              {
                translateX: toggleAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, theme.space["7"]],
                  extrapolate: "clamp",
                }),
              },
            ],
          }}
        />
      </SwitchRoot>
    </Pressable>
  );
});
