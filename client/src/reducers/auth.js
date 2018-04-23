import jwt from 'jsonwebtoken'

const initialState = {
  isAuthenticated: window.localStorage.getItem('token') ? true : false,
  username: getUsername(),
  pending: false,
  message: ''
}

function getUsername() {
  if (window.localStorage.getItem('token')) {
    return jwt.decode(window.localStorage.getItem('token').user)
  } else {
    return ''
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'AUTH_SUCCESS':
      return {...state, isAuthenticated: action.payload.isAuthenticated, username: action.payload.username}
    case 'AUTH_FAILURE':
      return {...initialState, message: action.payload.message}
    case 'AUTH_PENDING':
      return {...initialState, pending: true}
    case 'AUTH_LOGOUT':
      return initialState
    default:
      return state
  }
}

