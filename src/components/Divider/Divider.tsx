import { ComponentProps } from 'react';
import { styled } from '../../stitches.config';

export const Divider = styled('View', {
  height: 1,
  backgroundColor: '$theme-divider',
});

export type DividerProps = ComponentProps<typeof Divider>;
