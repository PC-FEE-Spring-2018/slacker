class api {
  _tokenpath = '/token'
  _token = window.localStorage.getItem('token') || ''
  _defaultpath = ''
  _registerpath = '/register'

  constructor(defaultpath = '/api') {
    this._defaultpath = defaultpath
  }

  get registerPath() {
    return this._registerpath
  }

  set registerPath(path) {
    this._registerpath = path
  }

  get tokenPath() {
    return this._tokenpath
  }

  set tokenPath(path) {
    this._tokenpath = path
  }

  register(username, password) {
    return fetch(this._defaultpath + this._registerpath, {
      body: JSON.stringify({username, password}),
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(resp => resp.json())
    .then(body => {
      this._token = body.token
      window.localStorage.setItem('token', this._token)
    })
  }

  login(username, password) {
    return fetch(this._defaultpath + this._tokenpath, {
      body: JSON.stringify({username, password}),
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(resp => resp.json())
    .then(body => {
      this._token = body.token
      window.localStorage.setItem('token', this._token)
    })
  }

  logout() {
    this._token = ''
    window.localStorage.removeItem('token')
  }

  get(path) {
    return fetch(this._defaultpath + path, {
      method: 'GET',
      credentials: 'include',
      headers: new Headers({
        'Authorization': this._token ? 'Bearer ' + this._token : null,
        'Content-Type': 'application/json'
      })
    })
    .then(resp => resp.json())
  }

  post(path, data) {
    return fetch(this._defaultpath + path, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(data),
      headers: new Headers({
        'Authorization': this._token ? 'Bearer ' + this._token : null,
        'Content-Type': 'application/json'
      })
    })
    .then(resp => resp.json())
  }

  put(path, data) {
    return fetch(this._defaultpath + path, {
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify(data),
      headers: new Headers({
        'Authorization': this._token ? 'Bearer ' + this._token : null,
        'Content-Type': 'application/json'
      })
    })
    .then(resp => resp.json())
  }

  patch(path, data) {
    return fetch(this._defaultpath + path, {
      method: 'PATCH',
      credentials: 'include',
      body: JSON.stringify(data),
      headers: new Headers({
        'Authorization': this._token ? 'Bearer ' + this._token : null,
        'Content-Type': 'application/json'
      })
    })
    .then(resp => resp.json())
  }

  delete(path) {
    return fetch(this._defaultpath + path, {
      method: 'DELETE',
      credentials: 'include',
      headers: new Headers({
        'Authorization': this._token ? 'Bearer ' + this._token : null,
        'Content-Type': 'application/json'
      })
    })
    .then(resp => resp.json())
  }
}

export default api