import { View, Text, StyleSheet } from "react-native";
import React from "react";
import HomeHeader from "@/components/headers/homeHeader";
import { primaryColor, primaryDarkColor } from "@/constants/Colors";
import HomeBanner from "@/components/banners/HomeBanner";

const HomeScreen = () => {
  return (
    <View style={HomeStyle.ContainerStyle}>
      <HomeHeader />
      {/* //Todo: Carousel or banner for APP // Todo: Horoscopes scroll view */}
      <HomeBanner />
      {/* horizontal with see all button // Todo : Top astrologer cards with scroll */}
      {/* view and see all // Todo : other services like // Numerlogy card // */}
      {/* compatibility card // palm reading card // Netal chart card //{" "} */}
      {/* <View>
        // <Text>HomeScreen</Text>
        //{" "}
      </View> */}
    </View>
  );
};

export default HomeScreen;

const HomeStyle = StyleSheet.create({
  ContainerStyle: {
    backgroundColor: primaryDarkColor,
    flex: 1,
  },
});
