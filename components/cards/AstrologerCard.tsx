import { primaryColorLight, secondaryColor } from "@/constants/Colors";
import { AvatarImage } from "@/constants/images";
import { WhiteColor, WIDTH } from "@/constants/styles";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Card, Icon, Text } from "react-native-paper";
import { AvatarImageSource } from "react-native-paper/lib/typescript/components/Avatar/AvatarImage";

type AstrologerCardType = {
  name: string;
  price: number;
  rating: string;
  source: AvatarImageSource;
};

const AstrologerCard = ({
  name = "name",
  price = 10,
  rating = "5.0",
  source = AvatarImage,
}: AstrologerCardType) => {
  return (
    <Link href={"/(unauth)/chat"}>
      <Card style={cardStyle.container}>
        <Card.Content style={cardStyle.cardContentStyle}>
          {/* Card avatar and rating view */}
          <View>
            <Avatar.Image source={source} size={100} />
            <View style={cardStyle.ratingStyle}>
              <Icon source="star" size={20} />
              <Text>{rating}</Text>
            </View>
          </View>
          {/* Card content*/}
          <Text variant="titleMedium">{name}</Text>
          <Text variant="titleSmall">${price}/min</Text>
          <Text style={[WhiteColor, cardStyle.bottomLabel]}>connect</Text>
        </Card.Content>
      </Card>
    </Link>
  );
};

export default AstrologerCard;

const cardStyle = StyleSheet.create({
  container: {
    width: WIDTH / 3,
    backgroundColor: primaryColorLight,
    alignItems: "center",
    justifyContent: "center",
  },
  cardContentStyle: {
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  ratingContainer: {},
  ratingStyle: {
    position: "absolute",
    bottom: -5,
    left: 23,
    backgroundColor: secondaryColor,
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 50,
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomLabel: {
    backgroundColor: secondaryColor,
    textAlign: "center",
    textAlignVertical: "center",
    width: 80,
    height: 30,
    borderRadius: 6,
  },
});
