import { string, object } from "yup";

export const contactForm = object().shape({
    email: string()
        .required("Please Enter your email."),
    message: string()
        .required("Plesase write your message."),
});