import { ReactElement } from "react";
import { ImageSourcePropType } from "react-native";

export type WithImageBackgroundType = {
  image: ImageSourcePropType | undefined;
  children: ReactElement;
};
