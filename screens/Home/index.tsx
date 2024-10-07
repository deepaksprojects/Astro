import SignsCard from "@/components/cards/SignsCard";
import { primaryDarkColor } from "@/constants/Colors";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { StyleSheet, View } from "react-native";

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
