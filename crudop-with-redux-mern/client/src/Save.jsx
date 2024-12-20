import axios from "axios";
import "./Save.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function Save() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      age: 0,
      email: "",
      gender: "male",
      language: "hindi",
      about: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Name is required"),
      age: Yup.number()
        .min(1, "Must be greater than 0")
        .max(100, "Must be 100  or less")
        .required("Age is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      about: Yup.string()
        .max(50, "Must be 50 characters or less")
        .required("About is Required"),
    }),
    onSubmit: async (values) => {
      // alert(JSON.stringify(values, null, 2));
      await axios
        .post("https://crud-op-with-redux-in-mern.vercel.app//api/create", values)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
      navigate("/");
    },
  });

  return (
    <>
      <Link className="btn btn-dark" to={"/"}>
        back
      </Link>
      <Form onSubmit={formik.handleSubmit}>
        <h3>save</h3>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
          <Form.Label>Age</Form.Label>
          <input
            className="form-control"
            type="number"
            name="age"
            placeholder="Enter age"
            {...formik.getFieldProps("age")}
          />
          {formik.touched.age && formik.errors.age ? (
            <div className="error">{formik.errors.age}</div>
          ) : null}
          <Form.Label>Email address</Form.Label>
          <input
            className="form-control"
            type="email"
            name="email"
            checked
            placeholder="Enter email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </Form.Group>

        <input
          className="form-check-input"
          type="radio"
          name="gender"
          id="flexRadioDefault1"
          value="male"
          checked={formik.values.gender === "male"} // Check if gender is male
          onChange={formik.handleChange} // Handle change event
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Male
        </label>
        <input
          className="form-check-input"
          type="radio"
          name="gender"
          id="flexRadioDefault2"
          value="female"
          checked={formik.values.gender === "female"} // Check if gender is female
          onChange={formik.handleChange} // Handle change event
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          Female
        </label>

        <div>
          <label for="language">Choose a Language:</label>
          <select
            name="language"
            id="language"
            {...formik.getFieldProps("language")}
          >
            <option value="Hindi">Hindi</option>
            <option value="English">English</option>
            <option value="Gujrati">Gujrati</option>
          </select>
        </div>

        <textarea
          name="about"
          id=""
          cols="30"
          rows="2"
          {...formik.getFieldProps("about")}
        ></textarea>
        {formik.touched.about && formik.errors.about ? (
          <div className="error">{formik.errors.about}</div>
        ) : null}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <button variant="primary" type="submit">
          Submit
        </button>
      </Form>
    </>
  );
}

export default Save;
