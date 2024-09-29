import * as yup from "yup";
export const mobileNumValidation = yup.object().shape({
  mobileNumber: yup
    .string()
    .max(10, "Mobile number can not be greater then 10 digits")
    .required("Mobile number is required"),
});
