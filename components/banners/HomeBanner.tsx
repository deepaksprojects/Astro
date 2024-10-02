import { View, Text, ImageBackground } from "react-native";
import React from "react";
import Carousel from "react-native-reanimated-carousel";
import { F1, WIDTH } from "@/constants/styles";
import { HomeBannerImage } from "@/constants/images";

const HomeBanner = () => {
  return (
    <View>
      <Carousel
        width={WIDTH}
        height={WIDTH / 2}
        data={[HomeBannerImage]}
        renderItem={({ item, index }) => (
          <ImageBackground source={item} style={F1} resizeMode="cover" />
        )}
      />
    </View>
  );
};

export default HomeBanner;
