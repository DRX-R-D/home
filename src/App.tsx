import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        Hello World
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            Hello About
          </Route>
          <Route path="/users">
            Hello Users
          </Route>
          <Route path="/">
            Hello Home
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
