import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { Global, ThemeProvider } from '@emotion/react'
import { reset, theme } from '~/styles'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={[reset]} />
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
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
    </ThemeProvider>
  )
}

export default App
