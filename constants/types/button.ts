import { ButtonProps, TextStyle, ViewStyle } from "react-native";
import { ColorType } from "./colors";

interface ButtonInterface {
  title: string;
  onClick?: () => void;
  textColor?: ColorType;
  color?: ColorType;
  style?: ViewStyle;
  textStyle?: TextStyle;
  loading: boolean;
  buttonStyle?: ViewStyle;
  buttonProps?: ButtonProps;
}

export type PrimaryButtonType = ButtonInterface & {
  startColor?: ColorType;
  endColor?: ColorType;
};
