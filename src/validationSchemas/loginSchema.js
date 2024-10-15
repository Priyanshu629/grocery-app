import * as Yup from "yup";

export const loginSchema = Yup.object({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters long")
    .max(15, "Username cannot be longer than 15 characters")
    .matches(
      /^[a-zA-Z][a-zA-Z0-9_]*$/,
      "Username must start with a letter and can only contain letters, numbers, and underscores"
    )
    .required("Username is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .max(20, "Password cannot be longer than 20 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
});
