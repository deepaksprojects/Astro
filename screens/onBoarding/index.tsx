import PrimaryButton from "@/components/button/button";
import { View } from "@/components/Themed";
import { OnBoardingImage } from "@/constants/images";
import {
  globalTextStyle,
  onBoardImageBG,
  ResizeMode,
} from "@/constants/styles";
import React from "react";
import { ImageBackground, Text } from "react-native";

const OnBoardingScreen = () => {
  return (
    <ImageBackground
      resizeMode={ResizeMode.COVER}
      style={onBoardImageBG}
      source={OnBoardingImage}
    >
      <View
        style={{
          alignItems: "center",
          backgroundColor: "transparent",
          marginBottom: 20,
        }}
      >
        <Text style={globalTextStyle}>The Astrology</Text>
        <Text style={globalTextStyle}>
          your horoscope is in your mobile. Know about yourself
        </Text>
      </View>

      <PrimaryButton
        title="Get Started"
        loading={true}
        onClick={() => ""}
        buttonStyle={{
          marginBottom: 50,
          height: 45,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
        }}
        textStyle={{ color: "#FFFFFF", fontWeight: "bold" }}
      />
    </ImageBackground>
  );
};

export default OnBoardingScreen;
