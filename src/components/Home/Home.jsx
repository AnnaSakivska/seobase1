import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import logo from "./img/logo_white.svg";
import gear from "./img/gear.png";
import join from "./img/join.png";
import subscription from "./img/subscription.png";
import estimate from "./img/estimate.png";
import invoices from "./img/invoices.png";
import gdpr from "./img/gdpr.png";
import export1 from "./img/export1.png";
import megaphone from "./img/megaphone.png";

class Home extends React.Component {
  render() {
    return (
      <div class="container1">
        <header class="header">
          <img src={logo} alt="seobase logo" class="logo" />
          <h3 class="header__dashboard">Dashboard</h3>
          <span class="header__user-email">admin@gmail.com</span>
        </header>
        <main class="user-account">
          <nav class="user-account__navbar">
            <ul>
              <li>
                <img
                  src={gear}
                  alt="Acount Info icon"
                  class="user-acount__icon"
                />
                <a href="#" class="user-acount__nav-option">
                  Acount Info
                </a>
              </li>
              <li>
                <img src={join} alt="Users icon" class="user-acount__icon" />
                <a href="#">Users</a>
              </li>
              <li>
                <img
                  src={subscription}
                  alt="Subscription icon"
                  class="user-acount__icon"
                />
                <a href="#">Subscription</a>
              </li>
              <li>
                <img
                  src={estimate}
                  alt="Billing icon"
                  class="user-acount__icon"
                />
                <a href="#">Billing</a>
              </li>
              <li>
                <img
                  src={invoices}
                  alt="Invoices icon"
                  class="user-acount__icon"
                />
                <a href="#">Invoices</a>
              </li>
              <li>
                <img src={gdpr} alt="GDPR icon" class="user-acount__icon" />
                <a href="#">GDPR</a>
              </li>
              <li>
                <img
                  src={export1}
                  alt="Log out icon"
                  class="user-acount__icon"
                />
                <a href="#">Log out</a>
              </li>
            </ul>
          </nav>
          <section class="user-account__display-screen">
            <h3 class="user-account__option-title">Account Info</h3>
            <button class="user-account__delete">Delete Account</button>
            <div class="user-account__option-display">
              <div class="account-info">
                <div class="account-info__alert">
                  <img
                    src={megaphone}
                    alt="alert icon"
                    class="account-info__alert-icon"
                  />
                  <p class="account-info__alert-message">
                    <strong>Verify your email.</strong> We sent the verification
                    link to <strong id="user-email">user@email.com</strong>
                  </p>
                  <button class="account-info__resend-button">
                    Resend the link
                  </button>
                </div>
                <div class="account-info__content">
                  <div class="account-info__option-wrapper">
                    <h4 class="account-info__option-key">Email:</h4>
                    <h5 class="account-info__ooption-value">admin@email.com</h5>
                  </div>
                  <div class="account-info__option-wrapper">
                    <h4 class="account-info__option-key">Password:</h4>
                    <div class="account-info__ooption-value">
                      <div>
                        <input
                          type="password"
                          class="acount-info__password-chage"
                          placeholder="Current password"
                        />
                      </div>
                      <div>
                        <input
                          type="password"
                          class="acount-info__password-chage"
                          placeholder="Set new password"
                        />
                      </div>
                      <div>
                        <input
                          type="password"
                          class="acount-info__password-chage"
                          placeholder="Confirm new password"
                        />
                      </div>
                      <button type="submit" class="account-info__passw-submit">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
export default Home;
