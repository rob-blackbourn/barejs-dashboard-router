import React, { Component } from 'react'

import { createTheme, ThemeProvider } from '@mui/material/styles'

import Site from './Site'

const theme = createTheme()

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Site />
      </ThemeProvider>
    )
  }
}

export default App
