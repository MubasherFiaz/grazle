import React, { useState } from "react";
// @ import dependencies
import { Link, useNavigate } from "react-router-dom";
// @ import components
import Input from "../../components/input/input";
// @ import media
import Email from "../../assets/svg/email.svg";
import Password from "../../assets/svg/password.svg";
import Profile from "../../assets/svg/profile.svg";
import { Formik } from "formik";
import * as Yup from "yup";
import CountryCodeList from "../../components/counrtyCodeList";
// @ import apis
import { OnRegister } from "../../apis/AuthApis";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthProvider";

const SignUp = () => {
  const [code, setCode] = useState("");
  const [codeErr, setCodeErr] = useState(false);
  const { setIsLoading } = useAuth();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .required("Required")
      .min(3, "Enter Minimum 3 digits"),
    number: Yup.number().required("Required").min(3, "Enter Minimum 3 digits"),
    email: Yup.string().email("Invalid email address").required("Required"),

    password: Yup.string()
      .required("Required")
      .min(3, "Enter Minimum 3 digits"),
    confirmPassword: Yup.string()
      .required("Required")
      .min(3, "Enter Minimum 3 digits")
      .test("passwords-match", "Passwords must match", function (value) {
        return this.parent.password === value;
      }),
  });
  const handleSignup = async (values) => {
    if (code) {
      setCodeErr(false);
      const value = {
        ...values,
        code: code,
      };
      setIsLoading(true);
      let registerResponse = await OnRegister(value);
      if (registerResponse.message === "Registered Successfully") {
        setIsLoading(false);
        toast.success(registerResponse.message);
        navigate("/");
      } else {
        setIsLoading(false);
        toast.error(registerResponse.message);
      }
    } else {
      setCodeErr(true);
    }
  };
  return (
    <>
      <h1 className="fs-1 fw-bold">Get Register!</h1>
      <p className="fs-6 fw-normal">Please Get yourself Register!</p>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
          number: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSignup}
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
                id="name"
                type="text"
                name="fullName"
                isbeforeImg={Profile}
                placeholder="Full NAME"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullName}
                isError={errors.fullName && touched.fullName && errors.fullName}
              />
            </div>
            <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto">
              <Input
                id="number"
                type="number"
                name="number"
                isbeforeImg={Profile}
                placeholder="Enter Mobile Number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.number}
                isError={errors.number && touched.number && errors.number}
              />
            </div>
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
                placeholder="Create Password"
                className="position-relative"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                isbeforeImg={Password}
                isError={errors.password && touched.password && errors.password}
              />
            </div>
            <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto">
              <Input
                id="password"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="position-relative"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                isbeforeImg={Password}
                isError={
                  errors.confirmPassword &&
                  touched.confirmPassword &&
                  errors.confirmPassword
                }
              />
            </div>
            <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto mb-3">
              <CountryCodeList
                name="country"
                setCode={setCode}
                isError={codeErr}
              />
            </div>
            <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto text-start mb-4">
              <input
                type="checkbox"
                id="remember-me"
                className="me-2 styled-checkbox"
              />
              <label for="remember-me" className="checkbox-label">
                By Clicking i agree all terms of services and Privacy & Policy.
              </label>
            </div>

            <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto">
              <button type="submit" class="primaryBtn">
                Register
              </button>
            </div>
          </form>
        )}
      </Formik>
      <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto mt-5">
        <p>
          Already have anaccount?
          <Link to="/login" className="btnred">
            Sign in
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignUp;
