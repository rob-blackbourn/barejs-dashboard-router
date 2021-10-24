import * as React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'

import Pages from './Pages'
import Sites from './Sites'
import StyledAppBar from './StyledAppBar'
import StyledDrawer from './StyledDrawer'

export default class DashboardRouter extends React.Component {
  state = {
    open: false
  }

  handleToggleDrawer = () => {
    this.setState((state, props) => ({ open: !state.open }))
  }

  render() {
    const { open } = this.state
    const { basename, title, sites, pages, routes, appBarItems } = this.props

    return (
      <BrowserRouter basename={basename}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />

          <StyledAppBar position="absolute" open={open}>
            <Toolbar
              sx={{
                pr: '24px' // keep right padding when drawer closed
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleToggleDrawer}
                sx={{
                  marginRight: '36px',
                  ...(open && { display: 'none' })
                }}
              >
                <MenuIcon />
              </IconButton>

              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                {title}
              </Typography>

              {appBarItems && appBarItems}
            </Toolbar>
          </StyledAppBar>

          <StyledDrawer variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: [1]
              }}
            >
              <IconButton onClick={this.handleToggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>

            <Divider />

            <Sites sites={sites} />

            <Divider />

            <Pages pages={pages} />
          </StyledDrawer>

          <Box
            component="main"
            sx={{
              backgroundColor: theme =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto'
            }}
          >
            <Toolbar />

            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              {routes}
            </Container>
          </Box>
        </Box>
      </BrowserRouter>
    )
  }
}

DashboardRouter.propTypes = {
  title: PropTypes.string.isRequired,
  basename: PropTypes.string.isRequired,
  sites: PropTypes.array.isRequired,
  pages: PropTypes.array.isRequired,
  routes: PropTypes.node.isRequired,
  appBarItems: PropTypes.node
}
