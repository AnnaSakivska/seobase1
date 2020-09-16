import React from "react";
import "./Registration.css";
import Form from "../Form/Form.jsx";
import logo from "./img/logo_white.svg";
import { Link } from "react-router-dom";

class Registration extends React.Component {
  render() {
    return (
      <div class="container">
        <img src={logo} alt="seobase logo" class="logo" />
        <div class="seobase">
          <h1 class="seobase__title">Log in</h1>
          <div class="seobase__registration-container">
            <div class="seobase__form-wrapper">
              <Form />
            </div>
            <Link to="/home">
              <button type="submit" value="Submit" class="form__submit">
                Log in
              </button>
            </Link>
          </div>

          <p class="seobase__sign-up">
            Don't have an account?
            <span class="seobase__sign-up-span">Sign up</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Registration;
