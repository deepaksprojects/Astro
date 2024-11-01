import { HomeScreen, OnBoardingScreen } from "@/screens";
import Numerology from "@/screens/services/numerology";
import React, { useState } from "react";

const Home = () => {
  const [loading, setLoading] = useState(false);
  return <Numerology />;
  // return <HomeScreen />;
};

export default Home;
