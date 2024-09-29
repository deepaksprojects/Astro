import { FormikValues } from "formik";
import React, { ReactElement, ReactNode } from "react";
import { ImageSourcePropType } from "react-native";

export type WithImageBackgroundType = {
  image: ImageSourcePropType | undefined;
  children: ReactElement;
};

export type WithFormikType = {
  initialValues: FormikValues;
  onSubmit: () => void;
  validationSchema: any;
  children: ReactNode;
};
