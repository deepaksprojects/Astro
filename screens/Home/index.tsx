import HomeBanner from "@/components/banners/HomeBanner";
import { ServiceCard } from "@/components/cards";
import HomeHeader from "@/components/headers/homeHeader";
import HorizontalGrid from "@/components/hocs/HorizontalGrid";
import { primaryDarkColor } from "@/constants/Colors";
import { NumerologyCard } from "@/constants/images";
import React from "react";
import { StyleSheet, View } from "react-native";

const HomeScreen = () => {
  return (
    <View style={HomeStyle.ContainerStyle}>
      <HomeHeader />
      {/* <HomeBanner /> */}
      <ServiceCard
       desc="Know your future"
       image={NumerologyCard}
       name="Numerology"  
    />
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
