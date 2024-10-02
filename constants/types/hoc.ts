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

interface CustomHorizontalScrollViewProps<T> {
  title: string;
  onSeeAll: () => void;
  data: T[];
  renderItem: (item: T, index: number) => JSX.Element;
}
export type HorizontalGridType<T extends { id: string }> =
  CustomHorizontalScrollViewProps<T>;

export interface GridItem {
  id: string;
  name: string;
  imageUrl: string;
}
