import React, { Component } from 'react';

import Button from '../Button';
import { Signup } from '../SignupForm';
import { Login } from '../LoginForm';
import './AuthFormContainer.scss';

export default class AuthFormContainer extends Component {
  state = {
    isLoginForm: false,
    isSignupForm: true,
  }

  triggerLoginForm = () => {
    this.setState({ isLoginForm: true, isSignupForm: false });
  }

  triggerSignupForm = () => {
    this.setState({ isLoginForm: false, isSignupForm: true });
  }

  render() {
    const { isLoginForm, isSignupForm } = this.state;
    // console.log(this.state);

    return (
      <React.Fragment>
        <div className="auth-btn-container">
          <Button
            name="Signup"
            className={isSignupForm ? 'signup' : 'login'}
            handleClick={this.triggerSignupForm}
          />
          <Button
            name="Login"
            className={isLoginForm ? 'signup' : 'login'}
            handleClick={this.triggerLoginForm}
          />
        </div>
        {isSignupForm && <Signup />}
        {isLoginForm && <Login />}
      </React.Fragment>
    );
  }
}
