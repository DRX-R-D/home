import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { Global, ThemeProvider } from '@emotion/react'
import { reset, theme } from '~/styles'
import { AppBar, Main } from '~/components'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={[reset]} />
      <Router basename={process.env.PUBLIC_URL}>
        <AppBar />
        <Main>
            <div className="App">
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
        </Main>
      </Router>
    </ThemeProvider>
  )
}

export default App
