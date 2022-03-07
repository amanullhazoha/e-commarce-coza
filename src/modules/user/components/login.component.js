import { Col } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import {  useDispatch } from "react-redux"
import { Field, Form, Formik } from "formik"

import { login } from "../user.actions";
import classes from "../style/login.module.scss";

const LoginForm = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    return (
        <section className={classes.login}>
            <Col sm={6} md={6} lg={4} className={classes.content}>
                <h3>Login Coza Store</h3>
                <Formik
                    initialValues={{ email: "", password: "" }}
                    onSubmit={(values, action) => {
                        dispatch(login(values))
                            .then(res => {
                            navigate("/")
                            })
                        action.setSubmitting = false;
                    }}
                >
                    {formikProps => (
                        <Form onSubmit={formikProps.handleSubmit}>
                            <Field 
                                type="email"
                                className="form-control" 
                                name="email" 
                                placeholder="Email" 

                            />
                            
                            <Field 
                                type="password" 
                                className="form-control mt-3" 
                                name="password" 
                                placeholder="Password" 
                            />
                            
                            <button type="submit" className="btn btn-primary mt-3">log in</button>

                            <div className="info mt-2">
                                Don&apos;t have an account? <Link to="/sing-in">Signup</Link> instead.
                            </div>
                        </Form>
                    )}
                </Formik>
            </Col>
        </section>
    )
}


export default LoginForm;