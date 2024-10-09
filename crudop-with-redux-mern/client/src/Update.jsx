import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    age: 0,
    email: "",
    gender: "",
    language: "",
    about: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getoneStudent/${id}`)
      .then((response) => {
        console.log(response);
        setUser(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const submitForm = async (event) => {
    event.preventDefault();
    console.log(user);
    await axios
      .put(`http://localhost:8000/api/updateStudent/${id}`, user)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
    navigate("/");
  };

  return (
    <>
      <Link className="btn btn-dark" to={"/"}>
        back
      </Link>
      <Form onSubmit={submitForm}>
        <h3>Update</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={user.name}
            name="name"
            onChange={(event) => {
              setUser({ ...user, name: event.target.value });
            }}
            placeholder="Enter name"
          />
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            value={user.age}
            name="age"
            onChange={(event) => {
              setUser({ ...user, age: event.target.value });
            }}
            placeholder="Enter age"
          />
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={user.email}
            name="email"
            onChange={(event) => {
              setUser({ ...user, email: event.target.value });
            }}
            placeholder="Enter email"
          />
        </Form.Group>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="flexRadioDefault1"
            value="male"
            onChange={(event) => {
              setUser({ ...user, gender: event.target.value });
            }}
            checked={user.gender === "male"}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="flexRadioDefault2"
            checked={user.gender === "female"}
            onChange={(event) => {
              setUser({ ...user, gender: event.target.value });
            }}
            value="female"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            female
          </label>
        </div>

        <div>
          <label for="language" value={user.language}>
            Choose a Language:
          </label>
          <select
            name="language"
            value={user.language}
            onChange={(event) => {
              setUser({ ...user, language: event.target.value });
            }}
          >
            <option value="Hindi">Hindi</option>
            <option value="English">English</option>
            <option value="Gujrati">Gujrati</option>
          </select>
        </div>

        <textarea
          name="about"
          value={user.about}
          onChange={(event) => {
            setUser({ ...user, about: event.target.value });
          }}
          id=""
          cols="30"
          rows="2"
        ></textarea>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <button
          className="btn btn-success"
          onClick={submitForm}
          variant="primary"
          type="submit"
        >
          Submit
        </button>
      </Form>
    </>
  );
}

export default Update;
