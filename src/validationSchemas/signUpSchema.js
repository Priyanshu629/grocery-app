import * as Yup from "yup";

export const signUpSchema = Yup.object({
  username: Yup.string()

    .matches(
      /^[a-zA-Z][a-zA-Z0-9_]*$/,
      "Username must start with a letter and can only contain letters, numbers, and underscores"
    )
    .min(3, "Username must be at least 3 characters long")
    .max(15, "Username cannot be longer than 15 characters")
    .required("Username is required"),

  password: Yup.string()

    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .min(8, "Password must be at least 6 characters long")
    .max(20, "Password cannot be longer than 20 characters")
    .required("Password is required"),

    email: Yup.string().email().required("Email is required"),

    confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
