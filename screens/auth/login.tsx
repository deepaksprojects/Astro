import WithBackgroundImage from "@/components/hocs/ImageBackground";
import { LoginImage } from "@/constants/images";
import { WhiteColor } from "@/constants/styles";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { CountryPicker } from "react-native-country-codes-picker";
import { Text, TextInput } from "react-native-paper";

const Login = () => {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  return (
    <WithBackgroundImage image={LoginImage}>
      <>
        <View style={loginStyle.headingContainer}>
          <Text variant="displayMedium" style={WhiteColor}>
            Login
          </Text>
        </View>
        <View>
          <TextInput
            mode="outlined"
            autoFocus
            left={
              <TextInput.Affix
                text={countryCode}
                onPress={() => setShow(true)}
              />
            }
            label={"Enter mobile number"}
            value=""
            onChangeText={() => ""}
          />
        </View>
        <CountryPicker
          show={show}
          pickerButtonOnPress={(item) => {
            setCountryCode(item.dial_code);
            setShow(false);
          }}
          lang="en"
        />
      </>
    </WithBackgroundImage>
  );
};

export default Login;

const loginStyle = StyleSheet.create({
  headingContainer: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
});
