import React, { useState } from "react";
// import { Navigate, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";

function Login() {
  // const navigate = useNavigate();
  const login = async (values, onSubmitProps) => {
    console.log(values);
    const loggedInResponse = await fetch("http://localhost:5000/auth/login", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const loggedIn = await loggedInResponse.json();
    console.log(loggedIn);

    // if (loggedIn) {

    //   navigate("/home");
    // }
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    const res = await login(values, onSubmitProps);
    return res;
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center ">
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = "Required";
          }
          if (!values.password) {
            errors.password = "Required";
          }

          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Invalid email address";
          }
          if (values.password.length < 8) {
            errors.password = "min 8 letters";
          }
          return errors;
        }}
        onSubmit={handleFormSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className=" flex flex-col gap-2 w-72 ">
            {/*EMail */}

            <div className="flex flex-col-reverse h-14">
              <div className="flex  items-center w-full">
                <input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className=" bg-cyan-500 h-11 p-2 text-XS w-full appearance-none"
                />
                <h3
                  className={`absolute transition-all text-sm duration-300 ml-2 focus:mb-10 ${
                    values.email ? "mb-5" : null
                  }`}
                >
                  {" "}
                  email
                </h3>
              </div>
              <h3 className="text-red-500 text-xm ">
                {" "}
                {errors.email && touched.email && errors.email}
              </h3>
            </div>

            {/*password */}

            <div className="flex flex-col-reverse h-14">
              <div className="flex  items-center w-full">
                <input
                  type="text"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className=" bg-cyan-500 h-11 p-2 text-XS w-full appearance-none"
                />
                <h3
                  className={`absolute transition-all text-sm z-20 duration-300 ml-2 focus:mb-10 ${
                    values.password ? "mb-5" : null
                  }`}
                >
                  {" "}
                  password
                </h3>
              </div>
              <h3 className="text-red-500 text-xm ">
                {" "}
                {errors.password && touched.password && errors.password}
              </h3>
            </div>

            <div className="w-full flex justify-center">
              <Link to={"/"}>
                <button
                  type="submit"
                  className="w-1/2 h-10 bg-cyan-500 "
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </Link>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
