import { primaryColor, primaryColorLight } from "@/constants/Colors";
import { PrimaryButtonType } from "@/constants/types";
import React, { useEffect } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const PrimaryButton = ({
  endColor = primaryColorLight,
  loading,
  onClick,
  startColor = primaryColor,
  style,
  textStyle = primaryButtonStyle.buttonText,
  title,
  color,
  buttonStyle = primaryButtonStyle.buttonBaseStyle,
  buttonProps,
}: PrimaryButtonType) => {
  const offset = useSharedValue(0);
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

  useEffect(() => {
    if (loading) {
      offset.value = withRepeat(withTiming(1, { duration: 2000 }), -1, true);
    } else {
      offset.value = withTiming(0, { duration: 500 });
    }
  }, [loading]);

  const animatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      offset.value,
      [0, 1],
      [startColor, endColor]
    );
    return { backgroundColor };
  }, [color]);
  return (
    <AnimatedPressable
      style={[buttonStyle, animatedStyle]}
      onPress={onClick}
      {...buttonProps}
    >
      <Text style={textStyle}>{title}</Text>
    </AnimatedPressable>
  );
};

export default PrimaryButton;

const primaryButtonStyle = StyleSheet.create({
  buttonBaseStyle: {
    height: 50,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    textAlignVertical: "center",
  },
});
