import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

import styles from './styles'

function Masthead(props) {
  const { classes } = props

  return <header id="masthead" className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit" className={classes.flex}>
          Title
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  </header>
}

Masthead.propTypes = {
  classes: PropTypes.shape({ root: PropTypes.string, flex: PropTypes.string, menuButton: PropTypes.string }).isRequired,
}

export default withStyles(styles)(Masthead)
