import { ComponentProps } from 'react';
import { styled } from '../../stitches.config';

export type ImageProps = ComponentProps<typeof Image>;

export type ImageBackgroundProps = ComponentProps<typeof ImageBackground>;

export const Image = styled("Image", {});

export const ImageBackground = styled("ImageBackground", {});