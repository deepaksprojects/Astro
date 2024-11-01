import { secondaryColor, textColorLight } from "@/constants/Colors";
import { NumerologyCard } from "@/constants/images";
import { WhiteColor } from "@/constants/styles";
import { Link } from "expo-router";
import React from "react";
import {
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  View,
} from "react-native";
import { Card, Icon, Text } from "react-native-paper";

type ServiceCardTypes = {
  name: string;
  desc: string;
  image: ImageSourcePropType;
};

const ServiceCard = ({
  name = "world",
  image = NumerologyCard,
  desc = "hello",
}: ServiceCardTypes) => {
  return (
    <Link href={"/(unauth)/chat"} asChild>
      <Card style={cardStyle.container}>
        <ImageBackground source={image} style={cardStyle.imageStyle}>
          <Card.Content style={cardStyle.content}>
            <View>
              <Text style={[cardStyle.text]}>{name}</Text>
              <Text style={[cardStyle.text]}>{desc}</Text>
            </View>
            <View style={cardStyle.iconContainer}>
              <Icon size={20} source={"arrow-right"} color={textColorLight} />
            </View>
          </Card.Content>
        </ImageBackground>
      </Card>
    </Link>
  );
};

export default ServiceCard;

const cardStyle = StyleSheet.create({
  container: {
    height: 150,
    marginVertical: 8,
    paddingVertical: 8,
  },
  imageStyle: {
    height: "100%",
  },
  text: {
    fontSize: 14,
  },
  iconContainer: {
    backgroundColor: secondaryColor,
    height: 35,
    width: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  content: {
    gap: 20,
    paddingVertical: 8,
  },
});
