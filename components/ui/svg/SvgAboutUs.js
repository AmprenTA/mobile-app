import Svg, { Circle, Path } from "react-native-svg";

function SvgAboutUs(props) {
  return (
    <Svg
      width={300}
      height={89}
      viewBox="0 0 526 89"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={18.5} cy={18.6929} r={18.5} fill="#FCD351" />
      <Circle cx={507.5} cy={19.6929} r={18.5} fill="#FF6165" />
      <Circle cx={272.5} cy={19.6929} r={18.5} fill="#509046" />
      <Path stroke="#1B1B1B" strokeWidth={3} d="M19.5 37.1929L19.5 87.1929" />
      <Path stroke="#1B1B1B" strokeWidth={3} d="M508.5 38.1929L508.5 88.1929" />
      <Path stroke="#1B1B1B" strokeWidth={3} d="M273.5 38.1929L273.5 88.1929" />
      <Path stroke="#1B1B1B" strokeWidth={3} d="M4 86.6929L526 86.6929" />
    </Svg>
  );
}

export default SvgAboutUs;
