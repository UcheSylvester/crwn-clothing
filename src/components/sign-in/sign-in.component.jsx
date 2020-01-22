import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";
import { signInWithFacebook } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleInputChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            value={this.state.email}
            handleChange={this.handleInputChange}
            name="email"
            required
            label="email"
          />

          <FormInput
            type="password"
            value={this.state.password}
            handleChange={this.handleInputChange}
            name="password"
            required
            label="password"
          />
          <div className="button-container">
            <CustomButton type="submit">Sign In</CustomButton>

            {/* <CustomIcon src="assets/facebook.png" />
            <CustomIcon src="../../assets/facebook.png" /> */}

            <CustomButton onClick={signInWithGoogle}>
              {" "}
              Google Sign In
            </CustomButton>
            <CustomButton onClick={signInWithFacebook}>
              {" "}
              Facebook Sign In
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
