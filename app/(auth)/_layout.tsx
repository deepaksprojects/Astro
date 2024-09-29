import { Stack } from "expo-router";
import React from "react";

export const unstable_settings = {
  // Used for `(foo)`
  initialRouteName: "/",
};
const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="otp" options={{ headerShown: false }} />
      <Stack.Screen name="signIn" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AuthLayout;
