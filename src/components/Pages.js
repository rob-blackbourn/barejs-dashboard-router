import * as React from 'react'
import PropTypes from 'prop-types'
import { Link as BrowserLink } from 'react-router-dom'

import Icon from '@mui/material/Icon'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

export default class Pages extends React.Component {
  render() {
    const { pages } = this.props

    return (
      <List>
        {pages.map(page => (
          <Tooltip
            placement="right"
            title={
              <Typography variant="subtitle2" color="inherit">
                {page.description}
              </Typography>
            }
            key={page.code}
          >
            <ListItem button component={BrowserLink} to={page.path}>
              <ListItemIcon>
                <Icon>{page.iconName}</Icon>
              </ListItemIcon>
              <ListItemText sx={{ m: 0, p: 0 }} primary={page.title} />
            </ListItem>
          </Tooltip>
        ))}
      </List>
    )
  }
}

Pages.propTypes = {
  pages: PropTypes.array.isRequired
}
