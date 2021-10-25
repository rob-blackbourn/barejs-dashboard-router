import * as React from 'react'
import PropTypes from 'prop-types'

import Icon from '@mui/material/Icon'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

export default class Sites extends React.Component {
  render() {
    const { sites } = this.props

    return (
      <List>
        {sites.map(site => (
          <Tooltip
            placement="right"
            title={
              <Typography variant="subtitle2" color="inherit">
                {site.description}
              </Typography>
            }
            key={site.code}
          >
            <ListItem button component="a" href={site.url}>
              <ListItemIcon>
                <Icon>{site.iconName}</Icon>
              </ListItemIcon>
              <ListItemText primary={site.title} />
            </ListItem>
          </Tooltip>
        ))}
      </List>
    )
  }
}

Sites.propTypes = {
  sites: PropTypes.array.isRequired
}
