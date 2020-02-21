import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-in.styles.scss";
import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user.action";
import { connect } from "react-redux";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;
    const { emailSignInStart } = this.props;

    emailSignInStart(email, password);

    // try {
    //   // sign user in
    //   // Note: this returns the currentUser which is been watched by the onAuthStateChanged()
    //   // called in App.js
    //   await auth.signInWithEmailAndPassword(email, password);
    //   this.setState({ email: "", password: "" });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  handleInputChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;
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

            <CustomButton
              type="button"
              onClick={googleSignInStart}
              isGoogleSignIn
            >
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
