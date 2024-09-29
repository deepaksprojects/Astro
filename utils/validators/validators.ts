import * as yup from "yup";
export const mobileNumValidation = yup
  .string()
  .required("Mobile Number is required");
