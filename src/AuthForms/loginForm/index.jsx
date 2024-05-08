import React from "react";
// @ import dependencies
import { Link, useNavigate } from "react-router-dom";
// @ import components
import Input from "../../components/input/input";
// @ import media
import Email from "../../assets/svg/email.svg";
import Password from "../../assets/svg/password.svg";
import { Formik } from "formik";
import * as Yup from "yup";
import { onLogin } from "../../apis/AuthApis";
import { useAuth } from "../../context/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { setIsLoading } = useAuth();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .required("Required")
      .min(3, "Enter Minimum 3 digits"),
  });
  const handleLogin = async (values) => {
    setIsLoading(true);
    let loginResponse = await onLogin(values);
    if (loginResponse.message === "Logged In Successfully") {
      setIsLoading(false);
      toast.success(loginResponse.message);
      navigate("/");
    } else {
      setIsLoading(false);
      toast.error(loginResponse.message);
    }
  };

  return (
    <>
      <h1 className="fs-1 fw-bold">Welcome Back</h1>
      <p className="fs-6 fw-normal">Please log in into your account</p>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          /* and other goodies */
        }) => (
          <form className="form mt-3" onSubmit={handleSubmit}>
            <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto">
              <Input
                id="email"
                type="email"
                name="email"
                isbeforeImg={Email}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Email Address"
                isError={errors.email && touched.email && errors.email}
              />
            </div>
            <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto">
              <Input
                id="password"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter Password"
                className="position-relative"
                isbeforeImg={Password}
                isError={errors.password && touched.password && errors.password}
              />
            </div>
            <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto">
              <div className="d-flex justify-content-between mb-3">
                <div className="remember">
                  <input
                    type="checkbox"
                    id="remember-me"
                    name="remember-me"
                    className="me-2 styled-checkbox"
                  />

                  <label htmlFor="remember-me" className="checkbox-label">
                    Remember Me
                  </label>
                </div>
                <div className="forgetPassword">
                  <a href="#" className="btnred">
                    Forget Password?
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto">
              <button type="submit" className="primaryBtn">
                Submit
              </button>
            </div>
          </form>
        )}
      </Formik>
      <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto">
        <div className="line-text">
          <span>or</span>
        </div>
      </div>
      <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <button className="loginWith apple">Log in with Apple</button>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <button className="loginWith google">Log in with Google</button>
          </div>
        </div>
      </div>
      <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto mt-4">
        <p>
          Don't have an account?
          <Link to="/signup" className="btnred">
            Sign up
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
