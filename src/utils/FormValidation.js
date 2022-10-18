import * as Yup from "yup";
export const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address format")
        .required("Email is required"),
    password: Yup.string()
        .min(3, "Password must be 3 characters at minimum")
        .required("Password is required")
});

export const UserSchema = Yup.object().shape({
    name: Yup.string().required("The name field is required"),
    role: Yup.number().required("The role field is required"),
    email: Yup.string()
        .email("Invalid email address format")
        .required("The email field is required"),
    password: Yup.string()
        .min(3, "Password must be 3 characters at minimum")
        .required("The password field is required")
});
