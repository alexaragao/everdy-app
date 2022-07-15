import React, {
  ComponentProps,
  forwardRef,
  useCallback,
  useState,
} from 'react';
import {
  NativeSyntheticEvent,
  TextInput as RNTextInput,
  TextInputFocusEventData,
} from 'react-native';
import { styled, useTheme } from '../../stitches.config';

const TextInputRoot = styled(RNTextInput, {
  color: '$contrast-high',
  borderRadius: '$sm',
  borderWidth: 1,
  paddingHorizontal: '$5',
  height: '$14',
  fontSize: '$sm',
});

export const TextInput = forwardRef<
  React.ElementRef<typeof TextInputRoot>,
  ComponentProps<typeof TextInputRoot>
>(({ onFocus, onBlur, ...props }, forwardedRef) => {
  const theme = useTheme();

  const [isFocused, setFocused] = useState(false);

  const handleFocus = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setFocused(true);
      onFocus?.(e);
    },
    [setFocused, onFocus]
  );
  const handleBlur = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setFocused(false);
      onBlur?.(e);
    },
    [setFocused, onBlur]
  );

  return (
    <TextInputRoot
      {...props}
      onFocus={handleFocus}
      onBlur={handleBlur}
      css={{ borderColor: isFocused ? '$primary-500' : '$contrast-low' }}
      placeholderTextColor={theme.colors['contrast-low']}
      ref={forwardedRef}
    />
  );
});

TextInput.displayName = 'TextInput';
