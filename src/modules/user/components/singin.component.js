import { Formik, Form, Field, ErrorMessage } from "formik"
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { Col } from "react-bootstrap"

import { createUser } from "../user.actions";
import { singinSchema } from "../user.schema";
import classes from "../style/singin.module.scss";

const Singin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const singup = async ({ email, password, userName }) => {
        const auth = getAuth();

        await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser, {
            displayName: userName,
        });

        const [ user ] = auth.currentUser.providerData;

        dispatch(createUser(user));
    }

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
                        agree: ""
                    }}
                    onSubmit={(values, action) => {
                        singup(values)
                            .then(res => navigate("/"))
                            .catch(err => console.log(err))

                        action.setSubmitting(false);
                    }}
                    validationSchema={singinSchema}
                >
                    {(formikProps) => (
                        <Form onSubmit={formikProps.handleSubmit}>
                            <Field 
                                type="text" 
                                className="form-control" 
                                name="userName" 
                                placeholder="User Name"
                            />
                            <div className="invalid-feedback d-block mb-3">
                                <ErrorMessage name="userName" />
                            </div>

                            <Field 
                                type="email" 
                                className="form-control mt-3" 
                                name="email" 
                                placeholder="Email" 
                            />
                            <div className="invalid-feedback d-block mb-3">
                                <ErrorMessage name="email" />
                            </div>

                            <Field 
                                type="password" 
                                className="form-control mt-3" 
                                name="password" 
                                placeholder="Password" 
                            />
                            <div className="invalid-feedback d-block mb-3">
                                <ErrorMessage name="password" />
                            </div>

                            <Field 
                                type="password" 
                                className="form-control mt-3" 
                                name="confirmPassword" 
                                placeholder="Confirm Password" 
                            />
                            <div className="invalid-feedback d-block mb-3">
                                <ErrorMessage name="confirmPassword" />
                            </div>

                            <div className="mt-3">
                                <Field type="checkbox" className="me-2" name="agree" />
                                <label htmlFor="agree">I agree to the Terms &amp; Conditions.</label>
                            </div>
                            <div className="invalid-feedback d-block mb-3">
                                <ErrorMessage name="agree" />
                            </div>

                            <button className="btn btn-success mt-3" type="submit">Submit Now</button>

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