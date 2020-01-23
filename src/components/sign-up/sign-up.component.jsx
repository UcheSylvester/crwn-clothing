import React from "react";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleChange = e => {
    const { value, name } = e.target;

    // setting up the user's sign up detais in our state
    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();

    // Getting the user sign up details
    const { displayName, email, password, confirmPassword } = this.state;

    // When password and confirm password doesn't match
    if (password !== confirmPassword) {
      // TODO: build an error component for displaying errors
      alert("passwords don't match");
      return;
    }

    try {
      // Destructure user from the returned value of the createUserWithEmailAndPassword()
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      // save the newly signed up user in our user collection
      await createUserProfileDocument(user, { displayName });

      // clearing the form once the user profile document is created
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            label="Display Name"
            value={displayName}
            onChange={this.handleChange}
            required
          />

          <FormInput
            type="email"
            name="email"
            label="Email"
            value={email}
            onChange={this.handleChange}
            required
          />

          <FormInput
            type="password"
            name="password"
            label="Password"
            value={password}
            onChange={this.handleChange}
            required
            minLength="6"
          />

          <FormInput
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            value={confirmPassword}
            onChange={this.handleChange}
            minLength="6"
            required
          />

          <CustomButton type="submit" onSubmit={this.handleSubmit}>
            SIGN UP
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
