import React, { useEffect, useState } from "react";
import WithBackgroundImage from "@/components/hocs/ImageBackground";
import { LoginImage } from "@/constants/images";
import { Button, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { F1, WhiteColor } from "@/constants/styles";
import { inputBackgroundColor, textColorLight } from "@/constants/Colors";
import PrimaryButton from "@/components/button/button";
import OtpTextInput from "react-native-text-input-otp";
import { useRoute } from "@react-navigation/native";
import { useRouter } from "expo-router";

const OTP = () => {
  const [otp, setOtp] = React.useState("");
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev: any) => prev - 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);

  const resetTimer = () => {
    setTimeLeft(60);
  };

  const router = useRouter();

  const handleSubmit = () => {
    router.replace("/(unauth)");
  };

  return (
    <WithBackgroundImage image={LoginImage}>
      <View style={F1}>
        <View style={otpStyle.headingContainer}>
          <Text variant="titleLarge" style={WhiteColor}>
            Verification
          </Text>
          <Text variant="labelSmall" style={WhiteColor}>
            Confirmation ode has been sent to you on 123456799
          </Text>
        </View>
        <View style={otpStyle.inputHandler}>
          <OtpTextInput
            otp={otp}
            setOtp={setOtp}
            digits={5}
            fontStyle={otpStyle.affixTextStyle}
          />

          <Text style={otpStyle.optTimer}>Time left: {timeLeft} seconds</Text>
          <PrimaryButton
            title="Submit OTP"
            loading={false}
            buttonStyle={otpStyle.submitButton}
            onClick={handleSubmit}
          />

          <Button mode="text" onPress={resetTimer} textColor={textColorLight}>
            Resend
          </Button>
        </View>
      </View>
    </WithBackgroundImage>
  );
};

export default OTP;

const otpStyle = StyleSheet.create({
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
  optTimer: {
    marginTop: 40,
    textAlign: "center",
    textAlignVertical: "center",
    color: textColorLight,
  },
});
