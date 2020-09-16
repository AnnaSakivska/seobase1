import React from "react";
import "./Registration.css";
import logo from "./img/logo_white.svg";
import eye from "./img/icons8-closed-eye-40.png";
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
              <form
                action="#"
                method="post"
                id="form"
                class="seobase__registration"
                class="form"
              >
                <label for="email" class="form__email">
                  Email
                </label>
                <input type="text" id="email" placeholder="Enter your email" />
                <label for="password" class="form__password">
                  Password
                </label>
                <h3 class="form__forgot-password">Forgot Password?</h3>
                <img class="form__password-icon" src={eye}></img>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter password"
                />
              </form>
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
