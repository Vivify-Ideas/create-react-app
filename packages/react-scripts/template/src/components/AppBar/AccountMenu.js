import React from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {
  usePopupState,
  bindTrigger,
  bindMenu
} from 'material-ui-popup-state/hooks';

export default function AccountMenu({ onClose }) {
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
      <IconButton edge="end" color="inherit" {...bindTrigger(menuState)}>
        <AccountCircle />
      </IconButton>
      <Menu
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        {...bindMenu(menuState)}
      >
        <MenuItem onClick={() => handleClose('profile')}>Profile</MenuItem>
        <MenuItem onClick={() => handleClose('logout')}>Logout</MenuItem>
      </Menu>
    </>
  );
}

AccountMenu.propTypes = {
  onClose: PropTypes.func.isRequired
};
