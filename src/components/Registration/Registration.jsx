import React from "react";
import "./Registration.css";
import Form from "../Form/Form.jsx";
import logo from "./img/logo_white.svg";
import { Link } from "react-router-dom";

class Registration extends React.Component {
  render() {
    return (
      <div className="container">
        <img src={logo} alt="seobase logo" className="logo" />
        <div className="seobase">
          <h1 className="seobase__title">Log in</h1>
          <div className="seobase__registration-container">
            <div className="seobase__form-wrapper">
              <Form />
            </div>
            <Link to="/home">
              <button type="submit" value="Submit" className="form__submit">
                Log in
              </button>
            </Link>
          </div>

          <p className="seobase__sign-up">
            Don't have an account?
            <span className="seobase__sign-up-span">Sign up</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Registration;
