import React, { Component } from 'react'
import {connect} from 'react-redux'

class MessageContent extends Component {
  render() {
    return (
      <div>
        {this.props.messages.map((msg,i) => (
          <p key={'message' + i}><span className="user">{msg.username ? msg.username + ': ' : ''}</span>{msg.message}</p>
        ))}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messageReducer.messages.filter(message => message.roomname === state.messageReducer.currentRoom)
  }
}

export default connect(mapStateToProps)(MessageContent)