import React, { useEffect, useState } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";

function Register() {
  const register = async (values, onSubmitProps) => {
    const savedUserResponse = await fetch(
      "http://localhost:5000/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the Content-Type header to indicate JSON payload
        },
        body: JSON.stringify(values), // Convert the values object to JSON string
      }
    );
    const savedUser = await savedUserResponse.json();
    onSubmitProps.resetForm();
    console.log(savedUser);
    // const savedUserResponse = await fetch(
    //   "http://localhost:5000/auth/register",
    //   {
    //     method: "POST",
    //     body: values,
    //   }
    // );
    // const savedUser = await savedUserResponse.json();
    // onSubmitProps.resetForm();

    // console.log(values)
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    const res = await register(values, onSubmitProps);
    return res;
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center ">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          yourId: "",
          phone: "",
          email: "",
          password: "",
          selectedOption: "Business",
          businessName: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.firstName) {
            errors.firstName = "Required";
          }
          if (!values.lastName) {
            errors.lastName = "Required";
          }
          if (!values.yourId) {
            errors.yourId = "Required";
          }
          if (!values.phone) {
            errors.phone = "Required";
          }
          if (!values.email) {
            errors.email = "Required";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          if (!values.businessName) {
            if (values.selectedOption === "Business") {
              errors.businessName = "Required";
            } else {
              values.businessName = "None";
            }
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
          <form onSubmit={handleSubmit} className=" flex flex-col gap-2 ">
            <div className="flex flex-row gap-2 ">
              {/* FIrstName */}
              <div className="flex flex-col-reverse h-14">
                <div className="flex  items-center w-full">
                  <input
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    className=" bg-cyan-500 h-11 text-XS p-2 "
                  />
                  <h3
                    className={`absolute transition-all text-sm z-20 duration-300 ml-2 focus:mb-11 ${
                      values.firstName ? "mb-5" : null
                    }`}
                  >
                    {" "}
                    first name
                  </h3>
                </div>
                <h3 className="text-red-500 text-xm ">
                  {" "}
                  {errors.firstName &&
                    touched.firstName &&
                    errors.firstName}{" "}
                </h3>
              </div>
              {/*Last Name*/}
              <div className="flex flex-col-reverse h-14">
                <div className="flex  items-center w-full">
                  <input
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    className=" bg-cyan-500 h-11 text-XS p-2 "
                  />
                  <h3
                    className={`absolute transition-all text-sm z-20 duration-300 ml-2 focus:mb-10 ${
                      values.lastName ? "mb-5" : null
                    }`}
                  >
                    {" "}
                    last name
                  </h3>
                </div>
                <h3 className="text-red-500 text-xm ">
                  {" "}
                  {errors.lastName && touched.lastName && errors.lastName}{" "}
                </h3>
              </div>
            </div>

            {/*yourId  */}

            <div className="flex flex-col-reverse h-14">
              <div className="flex  items-center w-full">
                <input
                  type="text"
                  name="yourId"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.yourId}
                  className=" bg-cyan-500 h-11 text-XS w-full p-2 appearance-none"
                />
                <h3
                  className={`absolute transition-all text-sm z-20 duration-300 ml-2 focus:mb-10 ${
                    values.yourId ? "mb-5" : null
                  }`}
                >
                  {" "}
                  your ID
                </h3>
              </div>
              <h3 className="text-red-500 text-xm ">
                {" "}
                {errors.yourId && touched.yourId && errors.yourId}{" "}
              </h3>
            </div>
            {/*Phone */}

            <div className="flex flex-col-reverse h-14">
              <div className="flex  items-center w-full">
                <input
                  type="text"
                  name="phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  className=" bg-cyan-500 h-11 p-2 text-XS w-full appearance-none"
                />
                <h3
                  className={`absolute transition-all text-sm z-20 duration-300 ml-2 focus:mb-10 ${
                    values.phone ? "mb-5" : null
                  }`}
                >
                  {" "}
                  phone
                </h3>
              </div>
              <h3 className="text-red-500 text-xm ">
                {" "}
                {errors.phone && touched.phone && errors.phone}{" "}
              </h3>
            </div>

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
                  className={`absolute transition-all text-sm z-20 duration-300 ml-2 focus:mb-10 ${
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
            {/*DropDown */}
            <div>
              <Field
                as="select"
                name="selectedOption"
                value={values.selectedOption}
              >
                <option value="Business">Business</option>
                <option value="Personal">Personal</option>
              </Field>
              {values.selectedOption === "Business" ? (
                <div className="flex flex-col-reverse h-14 items-end">
                  <div className="flex  items-center w-full">
                    <input
                      type="text"
                      name="businessName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.businessName}
                      className=" bg-cyan-500 h-11 p-2 text-XS w-full appearance-none"
                    />
                    <h3
                      className={`absolute transition-all text-sm z-20 duration-300 ml-2 focus:mb-10 ${
                        values.businessName ? "mb-5" : null
                      }`}
                    >
                      {" "}
                      Business Name
                    </h3>
                  </div>
                  <h3 className="text-red-500 text-xm ">
                    {errors.businessName &&
                      touched.businessName &&
                      errors.businessName}
                  </h3>
                </div>
              ) : null}
            </div>

            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="w-1/2 h-11 bg-cyan-500 "
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Register;
