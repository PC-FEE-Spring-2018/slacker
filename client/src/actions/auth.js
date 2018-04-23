import store from '../store'

import jwt from 'jsonwebtoken'

import api from '../lib/axiosapi'
api.new('/api')

export function register(username, password, fn) {
  api.register(username, password)
  .then(() => {
    fn('/')
  })
}

export function login(username, password, fn) {
  api.login(username, password)
  .then(() => {
    const username = jwt.decode(window.localStorage.getItem('token')).user

    store.dispatch({
      type: 'AUTH_SUCCESS',
      payload: {
        isAuthenticated: true,
        username: username
      }
    })
    fn('/')
  }).catch(err => {
    console.log(err)
  })
}

export function logout(fn) {
  api.logout()
  fn()
}