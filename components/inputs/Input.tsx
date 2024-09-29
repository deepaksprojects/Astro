import React from "react";
import { Text, TextInput, TextInputProps } from "react-native-paper";
import { errorColor, textColorLight } from "@/constants/Colors";
import { StyleSheet } from "react-native";
import { InputType } from "@/constants/types";

const Input = ({
  error,
  label,
  onChangeText,
  value,
  errorMessage,
  ...rest
}: InputType) => {
  return (
    <>
      <TextInput
        label={label}
        value={value}
        onChangeText={onChangeText}
        textColor={textColorLight}
        contentStyle={{ color: textColorLight }}
        placeholderTextColor={textColorLight}
        error={!!error} // Showing both Formik error and prop error
        {...rest} // Spread the remaining props
      />
      {errorMessage && (
        <Text variant="titleMedium" style={inputStyles.errorStyle}>
          {errorMessage}
        </Text>
      )}
    </>
  );
};

export default Input;

const inputStyles = StyleSheet.create({
  errorStyle: {
    color: errorColor,
  },
});
