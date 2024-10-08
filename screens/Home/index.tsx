import HomeBanner from "@/components/banners/HomeBanner";
import HomeHeader from "@/components/headers/homeHeader";
import { primaryDarkColor } from "@/constants/Colors";

import React from "react";
import { StyleSheet, View } from "react-native";

const HomeScreen = () => {
  return (
    <View style={HomeStyle.ContainerStyle}>
      <HomeHeader />
      <HomeBanner />

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
