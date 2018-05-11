import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Routes from './routes'

const App = () => (
  <MuiThemeProvider>
    <Routes />
  </MuiThemeProvider>
)

export default App;
