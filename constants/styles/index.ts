import { ImageResizeMode } from "react-native";
import { GlobalStyles } from "./globalStyle";
import { onBoardingStyles } from "./onBoardingStyles";
const globalTextStyle = GlobalStyles.textStyle;
const onBoardImageBG = onBoardingStyles.imageBackground;
const onBoardingButton = onBoardingStyles.button;
const F1 = GlobalStyles.F1;
const WhiteColor = GlobalStyles.color;
/**
 * Resize mode enum
 * @enum only resize mode for image
 */

const ResizeMode = Object.freeze({
  COVER: "cover",
  CONTAIN: "contain",
  CENTRE: "center",
  REPEAT: "repeat",
  STRETCH: "stretch",
});

export {
  globalTextStyle,
  onBoardImageBG,
  ResizeMode,
  onBoardingButton,
  F1,
  WhiteColor,
};
