import React from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import MoreIcon from '@material-ui/icons/MoreVert';
import {
  usePopupState,
  bindTrigger,
  bindMenu
} from 'material-ui-popup-state/hooks';

export default function AccountMenuMobile({ onClose }) {
  const menuState = usePopupState({
    variant: 'popover',
    popupId: 'account-menu'
  });

  function handleClose(id) {
    menuState.close();
    onClose(id);
  }

  return (
    <>
      <IconButton color="inherit" {...bindTrigger(menuState)}>
        <MoreIcon />
      </IconButton>
      <Menu
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        {...bindMenu(menuState)}
      >
        <MenuItem onClick={() => handleClose('notifications')}>
          <IconButton color="inherit">
            <Badge badgeContent={3} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={() => handleClose('profile')}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
        <MenuItem onClick={() => handleClose('logout')}>
          <IconButton color="inherit">
            <LockIcon />
          </IconButton>
          <p>Logout</p>
        </MenuItem>
      </Menu>
    </>
  );
}

AccountMenuMobile.propTypes = {
  onClose: PropTypes.func.isRequired
};
