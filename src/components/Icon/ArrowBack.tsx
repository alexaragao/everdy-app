import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgArrowBack = (props: SvgProps) => (
  <Svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42a.996.996 0 0 0-1.41 0l-6.59 6.59a.996.996 0 0 0 0 1.41l6.59 6.59a.996.996 0 1 0 1.41-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1Z" />
  </Svg>
);

export default SvgArrowBack;
