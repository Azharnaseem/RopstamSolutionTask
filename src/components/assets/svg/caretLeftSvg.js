import React from "react";
import Svg, { Path } from "react-native-svg";
import AppColors from "~utills/AppColors";
const CaretLeftSVG = ({ color = AppColors.blue, width = 8, height = 14 }) => {
  return (
    <Svg
      key={color}
      width={width}
      height={height}
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M2.828 6.99999L7.778 11.95L6.364 13.364L0 6.99999L6.364 0.635986L7.778 2.04999L2.828 6.99999Z"
        fill={color}
      />
    </Svg>
  );
};
export default CaretLeftSVG;
