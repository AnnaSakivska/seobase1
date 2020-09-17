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
      <div className="container1">
        <header className="header">
          <img src={logo} alt="seobase logo" className="logo" />
          <h3 className="header__dashboard">Dashboard</h3>
          <span className="header__user-email">admin@gmail.com</span>
        </header>
        <main className="user-account">
          <nav className="user-account__navbar">
            <ul>
              <li>
                <img
                  src={gear}
                  alt="Acount Info icon"
                  className="user-acount__icon"
                />
                <a href="#" className="user-acount__nav-option">
                  Acount Info
                </a>
              </li>
              <li>
                <img
                  src={join}
                  alt="Users icon"
                  className="user-acount__icon"
                />
                <a href="#">Users</a>
              </li>
              <li>
                <img
                  src={subscription}
                  alt="Subscription icon"
                  className="user-acount__icon"
                />
                <a href="#">Subscription</a>
              </li>
              <li>
                <img
                  src={estimate}
                  alt="Billing icon"
                  className="user-acount__icon"
                />
                <a href="#">Billing</a>
              </li>
              <li>
                <img
                  src={invoices}
                  alt="Invoices icon"
                  className="user-acount__icon"
                />
                <a href="#">Invoices</a>
              </li>
              <li>
                <img src={gdpr} alt="GDPR icon" className="user-acount__icon" />
                <a href="#">GDPR</a>
              </li>
              <li>
                <img
                  src={export1}
                  alt="Log out icon"
                  className="user-acount__icon"
                />
                <a href="#">Log out</a>
              </li>
            </ul>
          </nav>
          <section className="user-account__display-screen">
            <h3 className="user-account__option-title">Account Info</h3>
            <Link to="/">
              <button className="user-account__delete">Delete Account</button>
            </Link>
            <div className="user-account__option-display">
              <div className="account-info">
                <div className="account-info__alert">
                  <img
                    src={megaphone}
                    alt="alert icon"
                    className="account-info__alert-icon"
                  />
                  <p className="account-info__alert-message">
                    <strong>Verify your email.</strong> We sent the verification
                    link to <strong id="user-email">user@email.com</strong>
                  </p>
                  <button className="account-info__resend-button">
                    Resend the link
                  </button>
                </div>
                <div className="account-info__content">
                  <div className="account-info__option-wrapper">
                    <h4 className="account-info__option-key">Email:</h4>
                    <h5 className="account-info__ooption-value">
                      admin@email.com
                    </h5>
                  </div>
                  <div className="account-info__option-wrapper">
                    <h4 className="account-info__option-key">Password:</h4>
                    <div className="account-info__ooption-value">
                      <div>
                        <input
                          type="password"
                          className="acount-info__password-chage"
                          placeholder="Current password"
                        />
                      </div>
                      <div>
                        <input
                          type="password"
                          className="acount-info__password-chage"
                          placeholder="Set new password"
                        />
                      </div>
                      <div>
                        <input
                          type="password"
                          className="acount-info__password-chage"
                          placeholder="Confirm new password"
                        />
                      </div>
                      <button
                        type="submit"
                        className="account-info__passw-submit"
                      >
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
