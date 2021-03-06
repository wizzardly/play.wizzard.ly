import React from 'react'

import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import { styledComponentProp } from 'props'

import WithSession from 'WithSession'
import Site from 'Site'

import theme from './theme'

function Application(props) {
  const { classes } = props

  return <div id="application" className={classes.application}>
    <CssBaseline />
    <MuiThemeProvider theme={theme}>
      <WithSession>
        <Site />
      </WithSession>
    </MuiThemeProvider>
  </div>
}

Application.propTypes = { ...styledComponentProp }

export default Application
