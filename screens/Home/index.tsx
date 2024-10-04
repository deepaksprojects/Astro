import HomeBanner from "@/components/banners/HomeBanner";
import SignsCard from "@/components/cards/SignsCard";
import HomeHeader from "@/components/headers/homeHeader";
import HorizontalGrid from "@/components/hocs/HorizontalGrid";
import { primaryDarkColor } from "@/constants/Colors";
import React from "react";
import { StyleSheet, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Link } from "expo-router";

const HomeScreen = () => {
  return (
    <View style={HomeStyle.ContainerStyle}>
      <SignsCard
        label="aries"
        children={
          <MaterialCommunityIcons name="zodiac-aries" size={24} color="black" />
        }
      />
      {/* <HomeHeader />
      <HomeBanner /> */}
      {/* horizontal with see all button // Todo : Top astrologer cards with scroll */}
      {/* <HorizontalGrid
      title="Horoscope"
      onSeeAll={() => console.log('see all pressed')}
      data={}
      key={}
      renderItem={}
      /> */}

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
