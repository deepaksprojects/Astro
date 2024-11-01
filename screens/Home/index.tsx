import HomeBanner from "@/components/banners/HomeBanner";
import { ServiceCard } from "@/components/cards";
import AstrologerCard from "@/components/cards/AstrologerCard";
import SignsCard from "@/components/cards/SignsCard";
import HomeHeader from "@/components/headers/homeHeader";
import HorizontalGrid from "@/components/hocs/HorizontalGrid";
import { primaryDarkColor } from "@/constants/Colors";
import { ASTROLOGERS, SERVICES, ZODIAC_SIGN } from "@/constants/dummy";

import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const HomeScreen = () => {
  return (
    <ScrollView style={HomeStyle.ContainerStyle}>
      <HomeHeader />
      <HomeBanner />
      <HorizontalGrid
        title="Horoscope"
        onSeeAll={() => console.log("see all pressed")}
        data={ZODIAC_SIGN}
        renderItem={(item: any) => (
          <SignsCard label={item.name}>
            <Image
              source={{ uri: item.image }}
              style={{ height: 30, width: 30 }}
            />
          </SignsCard>
        )}
      />

      {/* horizontal with see all button // Todo : Top astrologer cards with scroll */}
      <HorizontalGrid
        title="Top Astrologer"
        onSeeAll={() => console.log("see all pressed")}
        data={ASTROLOGERS.slice(5)}
        renderItem={(item: any) => (
          <AstrologerCard
            name={item.name}
            price={item.price}
            rating={item.rating}
            source={item.image}
            key={item.id}
          />
        )}
      />

      {SERVICES?.map((item: any) => (
        <ServiceCard
          desc={item.description}
          image={item.backgroundImage}
          name={item.title}
          key={item.id}
        />
      ))}
    </ScrollView>
  );
};

export default HomeScreen;

const HomeStyle = StyleSheet.create({
  ContainerStyle: {
    backgroundColor: primaryDarkColor,
    flex: 1,
  },
});
