import { Formik, Form, Field } from "formik"
import { Link } from "react-router-dom"
import { Col } from "react-bootstrap"

import classes from "../style/singin.module.scss";

const Singin = () => {
    return (
        <section className={classes.singin}>
            <Col sm={6} lg={4} className={classes.content}>
                <h3>Create New Account</h3>
                <Formik
                    initialValues={{
                        userName: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                        agree: false
                    }}
                    onSubmit={(values, action) => {
                        console.log(values);
                        action.setSubmitting(false);
                    }}
                >
                    {(formikProps) => (
                        <Form onSubmit={formikProps.handleSubmit}>
                            <Field type="text" className="form-control" name="userName" placeholder="User Name" />

                            <Field type="email" className="form-control mt-3" name="email" placeholder="Email" />

                            <Field type="password" className="form-control mt-3" name="password" placeholder="Password" />

                            <Field type="password" className="form-control mt-3" name="confirmPassword" placeholder="Confirm Password" />

                            <div className="mt-3">
                                <Field type="checkbox" className="me-2" name="agree" />
                                <label htmlFor="agree">I agree to the Terms &amp; Conditions.</label>
                            </div>

                            <button className="btn btn-success mt-3">Submit Now</button>

                            <div className="info mt-2">
                                Already have an account? <Link to="/login">Login</Link> instead.
                            </div>
                        </Form>
                    )}
                </Formik>
            </Col>
        </section>
    )
}

export default Singin;