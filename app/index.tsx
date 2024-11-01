import { HomeScreen, OnBoardingScreen } from "@/screens";
import Compatibility from "@/screens/services/compatibility";
import NatalChart from "@/screens/services/natalChart";
import Numerology from "@/screens/services/numerology";
import React, { useState } from "react";

const Home = () => {
  const [loading, setLoading] = useState(false);
  return <NatalChart />;
  // return <HomeScreen />;
};

export default Home;
