import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgHome = (props: SvgProps) => (
  <Svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="m21.78 11.556-9.374-9.374a.625.625 0 0 0-.881 0L2.15 11.557a.625.625 0 0 0 .881.88l8.931-8.93 8.931 8.937a.625.625 0 0 0 .882-.881l.006-.007Z" />
    <Path d="M18.21 20.75h-3.124V14.5h-6.25v6.25H5.71V12l-1.25 1.25v7.5A1.25 1.25 0 0 0 5.711 22h4.375v-6.25h3.75V22h4.374a1.25 1.25 0 0 0 1.25-1.25V13.1l-1.25-1.25v8.9Z" />
  </Svg>
);

export default SvgHome;
