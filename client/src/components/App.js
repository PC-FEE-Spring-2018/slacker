import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import 'normalize.css/normalize.css'
import 'semantic-ui-css/semantic.min.css'
import '../styles/styles.css'
import Home from './Home'
import SignIn from './SignIn'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="stickyHeader">
            <Link className="loginLink" to="/signin">Sign In</Link>
            <Link className="homeLink" to="/">Home</Link>
          </div>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/signin" component={SignIn} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App