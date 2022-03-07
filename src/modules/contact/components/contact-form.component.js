import { Col } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";

import classes from "../style/contact-form.module.scss";
import { contactForm } from "../schema/contact-form.schema";

const ContactForm = () => {
    return (
        <Col md={6} className={classes.form}>
            <h2>Send Us A Message</h2>
            <Formik 
                initialValues={{ email: "", message: "" }}
                validationSchema={contactForm}
                onSubmit={(values, action) => {
                    console.log(values);
                    action.setSubmitting(false);
                    action.resetForm()
                }}
            >
                {(formikProps) => (
                    <Form onSubmit={formikProps.handleSubmit}>
                        <Field type="email" name="email" placeholder="Your Email Address" />
                        <div className="invalid-feedback d-block">
                            <ErrorMessage name="email" />
                        </div>

                        <Field as="textarea" name="message" placeholder="How Can We Help?" />
                        <div className="invalid-feedback d-block">
                            <ErrorMessage name="message" />
                        </div>

                        <button type="submit">SUBMIT</button>
                    </Form>
                )}
            </Formik>
        </Col>
    );
}
 
export default ContactForm;