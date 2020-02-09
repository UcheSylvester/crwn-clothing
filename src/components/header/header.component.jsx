import React from "react";

import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selector";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdrown from "../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./header.styles";

// user sign out
const signout = () => auth.signOut();

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>

    <OptionsContainer>
      <OptionLink to="shop">SHOP</OptionLink>

      <OptionLink to="contact">CONTACT</OptionLink>

      {/*show sign in or sign out when not attempting sign in  */}
      {currentUser ? (
        <OptionLink as="div" onClick={signout}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdrown />}
  </HeaderContainer>
);

// Using createStructuredSelector for when we have multiple selectors
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
