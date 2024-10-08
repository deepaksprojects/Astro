import { StyleSheet, View } from "react-native";
import React from "react";
import { Avatar, Text } from "react-native-paper";
import { AvatarImage } from "@/constants/images";
import { WhiteColor } from "@/constants/styles";
// TODO: search bar pending
const HomeHeader = () => {
  return (
    <View style={headerStyle.container}>
      <Avatar.Image size={60} source={AvatarImage} />
      <View>
        <Text variant="labelMedium" style={[WhiteColor]}>
          Hello User
        </Text>
        <Text variant="titleMedium" style={[WhiteColor]}>
          Welcome to Astrology world
        </Text>
      </View>
    </View>
  );
};

export default HomeHeader;

const headerStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 20,
    marginVertical: 20,
    marginHorizontal: 10,
    alignItems: "center",
  },

  name: {
    // fontWeight: "bold",
    fontSize: 14,
  },

  textStyle: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
