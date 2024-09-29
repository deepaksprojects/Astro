import { View, Text } from "react-native";
import React from "react";
import { FormikProvider, useFormik } from "formik";
import { WithFormikType } from "@/constants/types";

const WithFormik = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: WithFormikType) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return <FormikProvider value={formik}>{children}</FormikProvider>;
};

export default WithFormik;
