import React, { Component } from 'react'
import {sendMessage} from '../actions/messages'

class MessageForm extends Component {
  state = {
    message: ''
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    sendMessage(this.state.message)
    this.setState({message:''})
  }

  onEnterPress = (e) => {
    if(e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault()
      this.handleSubmit(e)
    }
  }

  render() {
    return (
      <div className="messageForm">
        <form ref="messageForm" onSubmit={this.handleSubmit}>
          <textarea onKeyDown={this.onEnterPress} value={this.state.message} onChange={this.handleChange} className="messageText" placeholder="Enter your message..."></textarea>
          <button type="submit" className="messageButton">Send</button>
        </form>
      </div>
    )
  }
}

export default MessageForm