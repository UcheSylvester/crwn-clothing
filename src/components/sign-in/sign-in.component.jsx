import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

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
        <h2>I already have an account</h2>
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

          {/* <input type="submit" value="Submit Form" /> */}
          <CustomButton type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
