import React from "react";
import { useState, useRef, useEffect, useCallback } from "react";
import "./Form.css";
import eye from "./img/icons8-closed-eye-40.png";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      errors: {
        email: "",
        password: "",
      },
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      // case 'fullName':
      //   errors.fullName =
      //     value.length < 5
      //       ? 'Full Name must be at least 5 characters long!'
      //       : '';
      //   break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        errors.password =
          value.length < 8
            ? "Password must be at least 8 characters long!"
            : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }
  };
  render() {
    const { errors } = this.state;
    return (
      <form
        name="myForm"
        action="#"
        method="post"
        id="form"
        class="seobase__registration"
        class="form"
        onSubmit={this.handleSubmit}
        noValidate
      >
        <label for="email" class="form__email">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          minlength="8"
          onChange={this.handleChange}
          noValidate
          required
        />
        {errors.email.length > 0 && (
          <span className="error">{errors.email}</span>
        )}
        <label for="password" class="form__password">
          Password
        </label>
        <h3 class="form__forgot-password">Forgot Password?</h3>
        <img class="form__password-icon" src={eye}></img>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          minlength="8"
          onChange={this.handleChange}
          noValidate
          required
        />
        {errors.password.length > 0 && (
          <span className="error">{errors.password}</span>
        )}
      </form>
    );
  }
}
