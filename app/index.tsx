import { View, Text } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "@/components/button/button";

const HomeScreen = () => {
  const [loading, setLoading] = useState(false);
  return (
    <PrimaryButton
      loading={loading}
      onClick={() => setLoading(!loading)}
      title="Primary Button"
    />
  );
};

export default HomeScreen;
