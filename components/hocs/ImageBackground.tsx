import { F1 } from "@/constants/styles";
import { WithImageBackgroundType } from "@/constants/types";
import React from "react";
import { ImageBackground } from "react-native";

const WithBackgroundImage = ({
  children = <></>,
  image,
  ...rest
}: WithImageBackgroundType) => {
  return (
    <ImageBackground style={F1} source={image} {...rest}>
      {children}
    </ImageBackground>
  );
};

export default WithBackgroundImage;
