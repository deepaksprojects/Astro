import PrimaryButton from "@/components/button/button";
import WithBackgroundImage from "@/components/hocs/ImageBackground";
import Input from "@/components/inputs/Input";
import {
  inputBackgroundColor,
  secondaryColor,
  textColorLight,
} from "@/constants/Colors";
import { LoginImage } from "@/constants/images";
import { F1, WhiteColor } from "@/constants/styles";
import { mobileNumValidation } from "@/utils";
import { useRouter } from "expo-router";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { CountryPicker } from "react-native-country-codes-picker";
import { Text, TextInput } from "react-native-paper";

const Login = () => {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const navigation = useRouter();

  const initialValues = {
    mobileNumber: "",
  };

  const handleSubmit = () => {
    navigation.navigate("/(auth)/otp");
  };

  const handleShow = () => {
    setShow(true);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: mobileNumValidation,
    onSubmit: handleSubmit,
  });
  return (
    <WithBackgroundImage image={LoginImage}>
      <View style={F1}>
        <View style={loginStyle.headingContainer}>
          <Text variant="titleLarge" style={WhiteColor}>
            Login
          </Text>
        </View>
        <View style={loginStyle.inputHandler}>
          <Input
            label={"Mobile Number"}
            value={formik.values.mobileNumber}
            onChangeText={formik.handleChange("mobileNumber")}
            error={!!formik.errors.mobileNumber}
            errorMessage={formik.errors.mobileNumber || ""}
            mode="outlined"
            left={
              <TextInput.Affix
                text={`${countryCode} |`}
                onPress={handleShow}
                textStyle={loginStyle.affixTextStyle}
              />
            }
            placeholder={"Enter your mobile number"}
            style={loginStyle.inputStyle}
            textColor={textColorLight}
            placeholderTextColor={textColorLight}
          />
          <PrimaryButton
            title="Login"
            loading={false}
            onClick={formik.submitForm}
            buttonStyle={loginStyle.submitButton}
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
  inputHandler: {
    marginHorizontal: 20,
  },
  inputStyle: {
    backgroundColor: inputBackgroundColor,
    borderColor: inputBackgroundColor,
  },
  affixTextStyle: { color: textColorLight },
  submitButton: {
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
});
