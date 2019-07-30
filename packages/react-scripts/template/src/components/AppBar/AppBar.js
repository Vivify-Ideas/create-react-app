import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';

import AccountMenu from './AccountMenu';
import AccountMenuMobile from './AccountMenuMobile';

import { USER_PROFILE, DASHBOARD } from 'routes';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    cursor: 'pointer'
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}));

export default function AppBar({ logout, push }) {
  const classes = useStyles();

  function handleMenuClose(id) {
    switch (id) {
      case 'logout':
        logout();
        break;
      case 'profile':
        push(USER_PROFILE);
        break;
      default:
        break;
    }
  }

  return (
    <MaterialAppBar position="absolute">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="Open drawer"
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          className={classes.title}
          onClick={() => push(DASHBOARD)}
        >
          Vivify Ideas
        </Typography>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
          <IconButton color="inherit">
            <Badge badgeContent={3} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <AccountMenu onClose={handleMenuClose} />
        </div>
        <div className={classes.sectionMobile}>
          <AccountMenuMobile onClose={handleMenuClose} />
        </div>
      </Toolbar>
    </MaterialAppBar>
  );
}
