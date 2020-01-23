import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

// user sign out
const signout = () => auth.signOut();

const Header = ({ currentUser, isSigningIn }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link className="option" to="shop">
        SHOP
      </Link>{" "}
      <Link className="option" to="contact">
        CONTACT
      </Link>
      {/*show sign in or sign out when not attempting sign in  */}
      {!isSigningIn ? (
        currentUser ? (
          <div className="option" onClick={signout}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="signin">
            SIGN IN
          </Link>
        )
      ) : (
        ""
      )}
    </div>
  </div>
);

export default Header;
