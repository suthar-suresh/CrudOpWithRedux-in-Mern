import * as yup from "yup";

export const studentSchema = yup.object({
  name: yup.string().required("Name is required ").min(3).max(15),
  age: yup.number().required("Age is required").min(1).max(100),
  email: yup.string().email().required("Email is required"),
  about: yup.string().required("About is required").max(50),
});
