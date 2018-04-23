import React, { Component } from 'react'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'


class SignIn extends Component {
  render() {
    return (
      <div className="signin">
        <LoginForm />
        <RegistrationForm />
      </div>
    )
  }
}

export default SignIn