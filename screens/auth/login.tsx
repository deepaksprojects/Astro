import PrimaryButton from "@/components/button/button";
import WithFormik from "@/components/hocs/formikWrapper";
import WithBackgroundImage from "@/components/hocs/ImageBackground";
import { LoginImage } from "@/constants/images";
import { F1, WhiteColor } from "@/constants/styles";
import { mobileNumValidation } from "@/utils";
import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { CountryPicker } from "react-native-country-codes-picker";
import { Text, TextInput } from "react-native-paper";

const Login = () => {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");

  const initialValues = {
    mobileNumber: "",
  };

  const handleSubmit = () => {
    Alert.prompt("form submitted");
  };

  return (
    <WithBackgroundImage image={LoginImage}>
      <View style={loginStyle.contentContainer}>
        <View style={F1}>
          <View style={loginStyle.headingContainer}>
            <Text variant="displayMedium" style={WhiteColor}>
              Login
            </Text>
          </View>
          <WithFormik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={mobileNumValidation}
          >
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
          </WithFormik>
          <CountryPicker
            show={show}
            pickerButtonOnPress={(item) => {
              setCountryCode(item.dial_code);
              setShow(false);
            }}
            lang="en"
          />
        </View>

        <PrimaryButton title="Login" loading={false} />
      </View>
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
  contentContainer: { flex: 1, justifyContent: "space-between" },
});
