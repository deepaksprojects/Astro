import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { forwardRef, ReactNode } from "react";
import { Card } from "react-native-paper";
import { WIDTH } from "@/constants/styles";
import { primaryColorLight } from "@/constants/Colors";
import { useRouter } from "expo-router";

type SignCardType = {
  label: string;
  children: ReactNode;
};

const SignsCard = forwardRef(({ label, children }: SignCardType, ref) => {
  const router = useRouter();

  function handlePress() {
    router.navigate("/(unauth)/profile");
  }

  return (
    <Card
      mode="contained"
      style={cardStyle.cardContainer}
      onPress={handlePress}
    >
      <Card.Content style={cardStyle.contentStyle}>
        {children}
        <Text>{label}</Text>
      </Card.Content>
    </Card>
  );
});

export default SignsCard;

const cardStyle = StyleSheet.create({
  cardContainer: {
    width: WIDTH / 4.5,
    backgroundColor: primaryColorLight,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  contentStyle: {
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
});
