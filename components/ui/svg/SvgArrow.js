
import Svg, { G, Path, Defs } from "react-native-svg";

/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgArrow = (props) => (
  <Svg
    width={41}
    height={49}
    viewBox="0 0 41 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        d="M15.546 31.17 12 10l15.6 10.585-7.8 2.443-4.255 8.142Z"
        fill={props.color}
      />
      <Path
        d="m12.28 9.586-.966-.656.193 1.153 3.545 21.17.247 1.47.69-1.321 4.158-7.96 7.602-2.38.989-.31-.857-.58-15.6-10.586Z"
        stroke="#222122"
        strokeWidth={2}
        strokeLinecap="square"
      />
    </G>
    <Defs></Defs>
  </Svg>
);

export default SvgArrow;
