import { View, Text } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "@/components/button/button";
import { OnBoardingScreen } from "@/screens";

const Home = () => {
  const [loading, setLoading] = useState(false);
  return <OnBoardingScreen />;
};

export default Home;
