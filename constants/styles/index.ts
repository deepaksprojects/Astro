import { ImageResizeMode } from "react-native";
import { GlobalStyles } from "./globalStyle";
import { onBoardingStyles } from "./onBoardingStyles";
const globalTextStyle = GlobalStyles.textStyle;
const onBoardImageBG = onBoardingStyles.imageBackground;

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

export { globalTextStyle, onBoardImageBG, ResizeMode };
