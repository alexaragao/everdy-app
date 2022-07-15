import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgContentCopy = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1Zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2Zm-2 0H9V4h9v12Z"
      fill="#000"
      fillOpacity={0.87}
    />
  </Svg>
);

export default SvgContentCopy;
