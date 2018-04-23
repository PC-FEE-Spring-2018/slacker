import React, { Component } from 'react'
import {connect} from 'react-redux'
import {joinRoom, createRoom} from '../actions/messages'

class RoomList extends Component {
  state = {
    roomname: ''
  }

  callRoom = (room) => {
    joinRoom(room)
  }

  handleChange = (e) => {
    this.setState({
      roomname: e.target.value
    })
  }

  createRoom = (e) => {
    e.preventDefault()
    if (this.state.roomname !== '') {
      createRoom(this.state.roomname)
      this.setState({roomname:''})
    }
  }

  render() {
    return (
      <div>
        <form id="createRoom" onSubmit={this.createRoom}>
          <input type="text" onChange={this.handleChange} placeholder="Create room..." value={this.state.roomname} />
          <button type="submit">+</button>
        </form>
        <ul className="roomlist">
          {this.props.rooms.map((room,i) => (
            <li key={'room' + i} onClick={() => this.callRoom(room)} className={room === this.props.currentRoom ? 'current' : ''}>
              {room}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state.messageReducer.rooms)
  return {
    rooms: state.messageReducer.rooms,
    currentRoom: state.messageReducer.currentRoom
  }
}

export default connect(mapStateToProps)(RoomList)