import { FormikHandlers, FormikValues } from "formik";
import { ChangeEvent } from "react";
import { TextInput, TextInputProps } from "react-native-paper";

export type InputType = React.ComponentProps<typeof TextInput> & {
  error: boolean;
  label: string;
  onChangeText: (e: string | ChangeEvent<any>) => void;
  value: string;
  errorMessage: string;
};
