const initialState = {
  currentRoom: 'general',
  rooms: ['general'],
  messages: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {...state, messages: [...state.messages, action.payload]}
    case 'JOIN_ROOM':
      return {...state, currentRoom: action.payload}
    case 'UPDATE_ROOMS':
      return {...state, rooms: action.payload}
    default:
      return state
  }
}