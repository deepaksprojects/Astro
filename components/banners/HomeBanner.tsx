import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import Carousel from "react-native-reanimated-carousel";
import { F1, HEIGHT, WIDTH } from "@/constants/styles";
import { HomeBannerImage } from "@/constants/images";

const HomeBanner = () => {
  return (
    <Carousel
      width={WIDTH}
      height={WIDTH / 2}
      data={[HomeBannerImage]}
      renderItem={({ item, index }) => (
        <ImageBackground
          source={item}
          style={{ flex: 1, margin: 20 }}
          resizeMode="cover"
          imageStyle={{ borderRadius: 15 }}
        />
      )}
      style={{ overflow: "hidden" }}
    />
  );
};

export default HomeBanner;
