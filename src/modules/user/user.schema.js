import { object, string, ref, boolean } from "yup";

export const loginSchema = object().shape({
    email: string()
        .trim()
        .email("Please Enter a Valid Email.")
        .min(3, "Your Email Length Less Then 3.")
        .max(50, "Your Email Geter Then 50.")
        .required("Please Enter Your Email."),
        
    password: string()
        .min(6, "Your Password Length Less Then 6.")
        .max(20, "Your Password Geter Then 20.")
        .required("Please Enter Your Password."),
});

export const singinSchema = object().shape({
    userName: string()
        .trim()
        .min(3, "Your User Name is Less Then 3.")
        .max(10, "Your User Name is Getter Then 10.")
        .required("Please Write a User Name."),

    email: string()
        .trim()
        .email("Please Enter a Valid Email.")
        .min(3, "Your Email Length Less Then 3.")
        .max(50, "Your Email Geter Then 50.")
        .required("Please Enter Your Email."),

    password: string()
        .min(6, "Your Password Length Less Then 6.")
        .max(20, "Your Password Getter Then 20.")
        .required("Please Enter Your Password."),
    
    confirmPassword: string()
        .oneOf([ref("password"), null], "Password Don't Match.")
        .required("Password is Required."),
    
    agree: boolean()
        .required("Please Checked Agree."),
})