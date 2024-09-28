import { View, Text } from "react-native";
import React from "react";
import WithBackgroundImage from "@/components/hocs/ImageBackground";
import { LoginImage } from "@/constants/images";

const Login = () => {
  return (
    <WithBackgroundImage image={LoginImage}>
      <View>
        <Text>Login</Text>
      </View>
    </WithBackgroundImage>
  );
};

export default Login;
