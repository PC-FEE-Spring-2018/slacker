import React, { Component } from 'react'
import {register} from '../actions/auth'
import {withRouter} from 'react-router-dom'

class RegistrationForm extends Component {
  state = {
    username: '',
    password: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    register(this.state.username, this.state.password, () => {
      this.props.history.push('/')
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  render() {
    return (
      <div>
        <fieldset>
          <legend>Register</legend>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" /><br />
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" /><br />
            <button type="submit">Submit</button>
          </form>
        </fieldset>
      </div>
    )
  }
}

export default withRouter(RegistrationForm)