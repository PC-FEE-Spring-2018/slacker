import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {logout} from '../actions/auth'
import {connect} from 'react-redux'

import MessageForm from './MessageForm'
import MessageContent from './MessageContent'
import RoomList from './RoomList'

class Home extends Component {
  render() {
    return (
      <div>
        {this.props.isAuthenticated ? (
          <div>
            <div className="sidebar">
              <RoomList />
            </div>
            <div className="content">
              <MessageContent />
            </div>
            <div className="messageWindow">
              <MessageForm />
            </div>
          </div>
        ) : <Redirect to="/signin" />}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.authReducer.isAuthenticated
  }
}

export default connect(mapStateToProps)(Home)