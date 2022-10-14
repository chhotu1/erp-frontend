import React from 'react'
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { toast } from 'react-toastify';
import AuthService from '../services/AuthService';
import StorageService from '../services/StorageService';
import { useNavigate } from 'react-router-dom';

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address format")
        .required("Email is required"),
    password: Yup.string()
        .min(3, "Password must be 3 characters at minimum")
        .required("Password is required")
});

const Login = () => {
    const navigate =useNavigate();
    const handleSubmit = (value) => {
        AuthService.login(value).then((response) => {
            if (response.data.status === true) {
                StorageService.setAccessToken(response.data.token)
                toast.success(response.data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored",
                })
                navigate("/")
            } else {
                toast.error(response.data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored",
                });
            }
            console.log(response.data,response.data.status)
        }).catch((error) => {
            console.log(error)
        })

    }

    return (
        <main>
            <div className="container">
                <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                <div className="d-flex justify-content-center py-4">
                                    <a
                                        className="logo d-flex align-items-center w-auto"
                                    >
                                        <img src="/assets/img/logo.png" alt="" />
                                        <span className="d-none d-lg-block">Enterprise resource planning</span>
                                    </a>
                                </div>
                                {/* End Logo */}
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="pt-4 pb-2">
                                            <h5 className="card-title text-center pb-0 fs-4">
                                                Login to Your Account
                                            </h5>

                                        </div>
                                        <Formik initialValues={{ email: "", password: "" }}
                                            validationSchema={LoginSchema}
                                            onSubmit={(values) => handleSubmit(values)}>
                                            {({ errors }) => (
                                                <div>
                                                    <Form className="row g-3 needs-validation">
                                                        <div className="col-12">
                                                            <label htmlFor="email" className="form-label">
                                                                Username
                                                            </label>
                                                            <Field
                                                                type="text"
                                                                name="email"
                                                                className="form-control"
                                                                id="email"
                                                                required=""
                                                            />
                                                            <div className="error">
                                                                {errors.email}
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <label htmlFor="yourPassword" className="form-label">
                                                                Password
                                                            </label>
                                                            <Field
                                                                type="password"
                                                                name="password"
                                                                className="form-control"
                                                                id="yourPassword"
                                                                required=""
                                                            />
                                                            <div className="error">
                                                                {errors.password}
                                                            </div>
                                                        </div>
                                                        {/* <div className="col-12">
                                                            <div className="form-check">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    name="remember"
                                                                    defaultValue="true"
                                                                    id="rememberMe"
                                                                />
                                                                <label className="form-check-label" htmlFor="rememberMe">
                                                                    Remember me
                                                                </label>
                                                            </div>
                                                        </div> */}
                                                        <div className="col-12">
                                                            <button className="btn btn-primary w-100" type="submit">
                                                                Login
                                                            </button>
                                                        </div>
                                                    </Form>
                                                </div>
                                            )}
                                        </Formik>

                                    </div>
                                </div>
                                <div className="credits">
                                    Designed by <a href="">ERP</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>

    )
}

export default Login
