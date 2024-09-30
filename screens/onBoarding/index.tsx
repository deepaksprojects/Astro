import PrimaryButton from "@/components/button/button";
import { View } from "@/components/Themed";
import { OnBoardingImage } from "@/constants/images";
import {
  globalTextStyle,
  onBoardImageBG,
  onBoardingButton,
  ResizeMode,
} from "@/constants/styles";
import { useRouter } from "expo-router";
import React from "react";
import { ImageBackground, Text } from "react-native";

const OnBoardingScreen = () => {
  const router = useRouter();
  function navigateToNext() {
    router.navigate("/(auth)/login");
  }
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
        loading={false}
        onClick={navigateToNext}
        buttonStyle={onBoardingButton}
        textStyle={{ color: "#FFFFFF", fontWeight: "bold" }}
      />
    </ImageBackground>
  );
};

export default OnBoardingScreen;
